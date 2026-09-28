"""Read one Modbus sensor and submit to ParkStudio. No device writes.

Sequence and the pending payload are atomically persisted before HTTP submission.
Only one reader may own a state file. This is a one-sample retry buffer, not an
offline historian. Dependencies are optional and isolated from server.py.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
from pathlib import Path
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, build_opener, ProxyHandler, HTTPRedirectHandler

from pymodbus.client import ModbusSerialClient, ModbusTcpClient
from pymodbus.exceptions import ModbusException


class PermanentError(Exception):
    pass


def log(event, **fields):
    print(json.dumps(dict(at=int(time.time() * 1000), event=event, **fields), ensure_ascii=False), flush=True)


def atomic_json(path, value):
    temp = path.with_suffix(path.suffix + '.tmp')
    with temp.open('w', encoding='utf-8') as f:
        json.dump(value, f, ensure_ascii=False, allow_nan=False)
        f.flush()
        os.fsync(f.fileno())
    os.replace(temp, path)


class StateLock:
    """OS releases the lock on termination; the lock file may safely remain."""
    def __init__(self, path):
        self.path = path

    def __enter__(self):
        self.file = self.path.open('a+b')
        try:
            # A second Windows process cannot even read an already locked byte.
            # fstat avoids touching it; initialize the byte only in an empty file.
            if os.fstat(self.file.fileno()).st_size == 0:
                self.file.write(b'0')
                self.file.flush()
            self.file.seek(0)
            if os.name == 'nt':
                import msvcrt
                msvcrt.locking(self.file.fileno(), msvcrt.LK_NBLCK, 1)
            else:
                import fcntl
                fcntl.flock(self.file.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError as e:
            self.file.close()
            raise PermanentError('Another reader owns this state file.') from e
        return self

    def __exit__(self, *_):
        self.file.close()


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *_args, **_kwargs):
        return None


def load_config(path):
    c = json.loads(path.read_text(encoding='utf-8-sig'))
    if c.get('transport') not in ('tcp', 'rtu') or c.get('source') != 'modbus-' + ('simulator' if c['transport'] == 'tcp' else 'rtu'):
        raise PermanentError('Use tcp/modbus-simulator or rtu/modbus-rtu for this pilot.')
    if c.get('deviceId') != 'ENV-01' or c.get('functionCode') != 3:
        raise PermanentError('This pilot reads ENV-01 holding registers (function 3) only.')
    for key, lo, hi in [('unitId', 1, 247), ('startAddress', 0, 65535), ('registerCount', 1, 125)]:
        if type(c.get(key)) is not int or not lo <= c[key] <= hi:
            raise PermanentError(f'Invalid {key}.')
    if c['startAddress'] + c['registerCount'] > 65536:
        raise PermanentError('Register window exceeds address space.')
    for key, lo, hi in [('pollSeconds', .5, 10), ('timeoutSeconds', .1, 5)]:
        v = c.get(key)
        if isinstance(v, bool) or not isinstance(v, (int, float)) or not math.isfinite(v) or not lo <= v <= hi:
            raise PermanentError(f'Invalid {key}.')
    if c['transport'] == 'tcp':
        if not c.get('host') or type(c.get('port')) is not int or not 1 <= c['port'] <= 65535:
            raise PermanentError('TCP host/port required.')
    elif not isinstance(c.get('port'), str) or not c['port']:
        raise PermanentError('RTU serial port required.')
    specs = c.get('registers', [])
    if not isinstance(specs, list) or {x.get('metric') for x in specs} != {'temperature', 'humidity'} or len(specs) != 2:
        raise PermanentError('Exactly one temperature and one humidity mapping required.')
    for x in specs:
        if type(x.get('offset')) is not int or not 0 <= x['offset'] < c['registerCount'] or type(x.get('signed')) is not bool:
            raise PermanentError('Invalid register offset/sign.')
        if any(isinstance(x.get(k), bool) or not isinstance(x.get(k), (int, float)) or not math.isfinite(x[k]) for k in ('scale', 'min', 'max')) or x['scale'] <= 0 or x['min'] >= x['max']:
            raise PermanentError('Invalid register scale/range.')
    url = urlparse(c.get('endpoint', ''))
    if url.scheme not in ('http', 'https') or not url.hostname or url.username or url.password or url.path != '/api/telemetry' or url.query or url.fragment:
        raise PermanentError('endpoint must be an HTTP(S) /api/telemetry URL without credentials/query.')
    if url.scheme == 'http' and url.hostname not in ('localhost', '127.0.0.1', '::1'):
        raise PermanentError('Use HTTPS for ingestion outside loopback.')
    state = (path.parent / c['stateFile']).resolve()
    state.parent.mkdir(parents=True, exist_ok=True)
    return c, state


def run(config_path, max_samples=0):
    c, state_path = load_config(config_path)
    token = os.environ.get(c['tokenEnv'], '')
    if len(token) < 24:
        raise PermanentError(f'Set {c["tokenEnv"]} to the gateway token (24+ characters).')
    identity = hashlib.sha256(json.dumps({k: v for k, v in c.items() if k != 'stateFile'}, sort_keys=True).encode()).hexdigest()
    opener = build_opener(ProxyHandler({}), NoRedirect())
    if c['transport'] == 'tcp':
        client = ModbusTcpClient(c['host'], port=c['port'], timeout=c['timeoutSeconds'], retries=0)
    else:
        client = ModbusSerialClient(c['port'], baudrate=c['baudrate'], bytesize=c['bytesize'], parity=c['parity'], stopbits=c['stopbits'], timeout=c['timeoutSeconds'], retries=0)
    with StateLock(state_path.with_suffix('.lock')):
        state = json.loads(state_path.read_text(encoding='utf-8')) if state_path.exists() else {'identity': identity, 'lastSeq': 0, 'pending': None}
        if state.get('identity') != identity or type(state.get('lastSeq')) is not int or state['lastSeq'] < 0:
            raise PermanentError('State/config identity differs or state is invalid; use a separate state file. Do not reset a live sequence.')
        log('started', source=c['source'], deviceId=c['deviceId'], transport=c['transport'], stateFile=str(state_path))
        accepted = 0
        try:
            while True:
                cycle = time.monotonic()
                if state['pending'] is None:
                    try:
                        if not client.connected and not client.connect():
                            raise OSError('Modbus connection unavailable')
                        result = client.read_holding_registers(c['startAddress'], count=c['registerCount'], device_id=c['unitId'])
                        if result.isError() or len(result.registers) != c['registerCount']:
                            raise ValueError('Modbus exception or incomplete register response')
                        metrics = {}
                        for spec in c['registers']:
                            raw = result.registers[spec['offset']]
                            signed = raw - 65536 if spec['signed'] and raw & 0x8000 else raw
                            value = round(signed * spec['scale'], 6)
                            if raw in spec.get('invalidRaw', []) or not spec['min'] <= value <= spec['max']:
                                raise ValueError(f'{spec["metric"]} outside configured sensor range')
                            metrics[spec['metric']] = value
                        # Sensor has no timestamp register. This is the completed poll time.
                        sample_at = int(time.time() * 1000)
                        seq = max(sample_at, state['lastSeq'] + 1)
                        if seq > 9007199254740991:
                            raise PermanentError('Sequence exceeds the gateway safe integer range.')
                        state.update(lastSeq=seq, pending={'samples': [dict(deviceId=c['deviceId'], sampleAt=sample_at, seq=seq, metrics=metrics)]})
                        atomic_json(state_path, state)
                        log('read', source=c['source'], registers=result.registers, **state['pending']['samples'][0])
                    except (ModbusException, OSError, ValueError) as e:
                        client.close()
                        log('read_failed', error=str(e))
                if state['pending'] is not None:
                    sample = state['pending']['samples'][0]
                    req = Request(c['endpoint'], data=json.dumps(state['pending'], allow_nan=False).encode(), headers={'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}, method='POST')
                    try:
                        with opener.open(req, timeout=5) as response:
                            body = json.load(response)
                        results = body.get('results')
                        if not isinstance(results, list) or len(results) != 1 or results[0].get('deviceId') != c['deviceId'] or results[0].get('result') not in ('applied', 'duplicate', 'late'):
                            raise ValueError('Unknown gateway receipt; pending sample retained')
                        log('receipt', source=c['source'], seq=sample['seq'], result=results[0]['result'])
                        state['pending'] = None
                        atomic_json(state_path, state)
                        accepted += 1
                        if max_samples and accepted >= max_samples:
                            break
                    except HTTPError as e:
                        if e.code not in (408, 429) and e.code < 500:
                            try: code = json.load(e).get('error', {}).get('code', 'HTTP_ERROR')
                            except ValueError: code = 'HTTP_ERROR'
                            raise PermanentError(f'Gateway rejected sample: HTTP {e.code} {code}; pending sample retained.') from e
                        log('submit_retry', seq=sample['seq'], status=e.code)
                    except (URLError, OSError, ValueError) as e:
                        log('submit_retry', seq=sample['seq'], error=type(e).__name__)
                time.sleep(max(.05, c['pollSeconds'] - (time.monotonic() - cycle)))
        finally:
            client.close()


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--config', type=Path, required=True)
    p.add_argument('--max-samples', type=int, default=0, help='Exit after N receipts; 0 runs until interrupted.')
    args = p.parse_args()
    try:
        run(args.config.resolve(), args.max_samples)
    except KeyboardInterrupt:
        log('stopped')
    except (PermanentError, KeyError, ValueError, OSError) as e:
        log('fatal', error=str(e))
        return 2
    return 0


if __name__ == '__main__':
    sys.exit(main())
