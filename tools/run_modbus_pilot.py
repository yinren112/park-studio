"""Start a local, isolated Modbus monitor. Ctrl+C stops all owned children.

The simulator profile starts a TCP fixture. The RTU profile requires hardware;
it never starts a substitute fixture. Credentials and data stay under data/.
"""
import argparse
import json
import os
from pathlib import Path
import secrets
import socket
import subprocess
import sys
import time
from urllib.request import build_opener, ProxyHandler
import webbrowser


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--profile',choices=('simulator','rtu'),default='simulator')
    p.add_argument('--config',type=Path,help='For RTU, a copy with the actual COM port and verified point table.')
    p.add_argument('--python',type=Path,help='Python with adapters/requirements.txt installed.')
    p.add_argument('--port',type=int)
    p.add_argument('--modbus-port',type=int,default=15020)
    p.add_argument('--no-browser',action='store_true')
    p.add_argument('--seconds',type=float,default=0,help='Optional bounded demo duration; 0 runs until Ctrl+C.')
    args=p.parse_args();root=Path(__file__).resolve().parents[1]
    python=str(args.python.resolve()) if args.python else str(root/'.venv-modbus'/('Scripts/python.exe' if os.name=='nt' else 'bin/python'))
    if not Path(python).is_file(): python=sys.executable
    if subprocess.run([python,'-c','import pymodbus, serial'],capture_output=True).returncode:
        p.error('Install adapters/requirements.txt in .venv-modbus first, or specify --python.')
    if args.profile=='rtu' and not args.config: p.error('RTU needs --config with the actual serial port. Hardware acceptance is pending.')
    port=args.port or (18868 if args.profile=='simulator' else 8769)
    for candidate in ([port,args.modbus_port] if args.profile=='simulator' else [port]):
        with socket.socket() as sock:
            try: sock.bind(('127.0.0.1',candidate))
            except OSError as e: p.error(f'Cannot bind port {candidate}: {e}. Choose --port / --modbus-port. No existing process was stopped.')
    folder=root/'data'/('modbus-'+args.profile);folder.mkdir(parents=True,exist_ok=True)
    access_path=folder/'access.json'
    if access_path.exists(): access=json.loads(access_path.read_text(encoding='utf-8'))
    else:
        access={'username':'operator','password':secrets.token_urlsafe(18),'gatewayToken':secrets.token_urlsafe(30)}
        access_path.write_text(json.dumps(access,indent=2),encoding='utf-8')
    confpath=args.config.resolve() if args.config else root/'adapters/modbus.example.json'
    config=json.loads(confpath.read_text(encoding='utf-8-sig'))
    if config['transport'] != ('tcp' if args.profile=='simulator' else 'rtu'): p.error('Profile and configuration transport differ.')
    config.update(endpoint=f'http://127.0.0.1:{port}/api/telemetry',stateFile=str(folder/'reader-state.json'))
    if args.profile=='simulator': config.update(host='127.0.0.1',port=args.modbus_port)
    runtime_config=folder/'reader-config.json'
    runtime_config.write_text(json.dumps(config,ensure_ascii=False,indent=2),encoding='utf-8')
    control=folder/'registers.json'
    if args.profile=='simulator' and not control.exists(): control.write_text('{"temperature":25.0,"humidity":56.0}',encoding='utf-8')
    env=dict(os.environ,PYTHONUTF8='1',LAILIN_MODE='gateway',LAILIN_DB=str(folder/'gateway.sqlite3'),LAILIN_OPERATOR_PASSWORD=access['password'],LAILIN_GATEWAY_TOKEN=access['gatewayToken'],LAILIN_GATEWAY_KIND='modbus-'+args.profile)
    children=[];logs=[]
    def start(name,command):
        log=(folder/(name+'.log')).open('ab');logs.append(log)
        child=subprocess.Popen([python,'-u',*command],cwd=root,env=env,stdout=log,stderr=subprocess.STDOUT,creationflags=subprocess.CREATE_NO_WINDOW if os.name=='nt' else 0)
        children.append(child);return child
    try:
        start('server',['server.py','--port',str(port)])
        opener=build_opener(ProxyHandler({}));deadline=time.monotonic()+15
        while True:
            if children[0].poll() is not None: raise RuntimeError('Server stopped. See '+str(folder/'server.log'))
            try:
                with opener.open(f'http://127.0.0.1:{port}/health',timeout=1) as response:
                    if json.load(response)['status']=='ok': break
            except OSError: pass
            if time.monotonic()>deadline: raise RuntimeError('Server startup timed out.')
            time.sleep(.2)
        if args.profile=='simulator': start('fixture',['tools/modbus_fixture.py','--port',str(args.modbus_port),'--control',str(control)])
        start('reader',['adapters/modbus_reader.py','--config',str(runtime_config)])
        print(f'ParkStudio: http://127.0.0.1:{port}',flush=True)
        print(f'Profile: {args.profile} / login credentials: {access_path}',flush=True)
        if args.profile=='simulator':print(f'Simulated registers: {control}',flush=True)
        print('Ctrl+C stops these processes; data is retained.',flush=True)
        if not args.no_browser:webbrowser.open(f'http://127.0.0.1:{port}')
        end=time.monotonic()+args.seconds if args.seconds else None
        while end is None or time.monotonic()<end:
            if any(c.poll() is not None for c in children):raise RuntimeError('A child process stopped. Inspect logs in '+str(folder))
            time.sleep(.25)
    except KeyboardInterrupt: pass
    finally:
        for child in reversed(children):
            if child.poll() is None:
                child.terminate()
                try:child.wait(timeout=8)
                except subprocess.TimeoutExpired:child.kill();child.wait(timeout=5)
        for log in logs:log.close()
        print('Owned processes stopped. Data retained.',flush=True)


if __name__=='__main__':
    try:main()
    except (RuntimeError,ValueError,OSError,KeyError) as e:
        print(str(e),file=sys.stderr);sys.exit(2)
