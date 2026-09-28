"""Repeatable Modbus → HTTP → SQLite → SSE → browser acceptance.

Run with Python containing playwright. Modbus/server child processes use the
isolated --adapter-python. No hardware or production database is accessed.
"""
from __future__ import annotations
import argparse
import csv
import hashlib
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import secrets
import socket
import sqlite3
import subprocess
import sys
import threading
import time
import traceback
from urllib.error import HTTPError, URLError
from urllib.request import Request, build_opener, ProxyHandler

from playwright.sync_api import sync_playwright


def free_port():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--project-root', type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument('--adapter-python', type=Path)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    root = args.project_root.resolve()
    python = str((args.adapter_python or root / '.venv-modbus/Scripts/python.exe').resolve())
    out = (args.output or root / 'output/acceptance' / time.strftime('modbus-%Y%m%d-%H%M%S')).resolve()
    out.mkdir(parents=True, exist_ok=False)
    checks, processes, files, browser_errors, external, proxy_requests = [], [], [], [], [], []
    opener = build_opener(ProxyHandler({}))
    port, modbus_port, proxy_port = free_port(), free_port(), free_port()
    base = f'http://127.0.0.1:{port}'
    token, password = secrets.token_urlsafe(30), secrets.token_urlsafe(18)
    env = dict(os.environ, PYTHONUTF8='1', LAILIN_MODE='gateway', LAILIN_DB=str(out/'gateway.sqlite3'), LAILIN_OPERATOR_PASSWORD=password, LAILIN_GATEWAY_TOKEN=token, LAILIN_GATEWAY_KIND='modbus-simulator')
    control = out/'registers.json'
    config = json.loads((root/'adapters/modbus.example.json').read_text(encoding='utf-8'))
    config.update(port=modbus_port, endpoint=f'http://127.0.0.1:{proxy_port}/api/telemetry', stateFile=str(out/'reader-state.json'))
    (out/'reader-config.json').write_text(json.dumps(config, indent=2), encoding='utf-8')
    report = {'startedAt': time.strftime('%Y-%m-%dT%H:%M:%S%z'), 'mode': 'Modbus TCP protocol simulator', 'realDevicesConnected': False, 'checks': checks, 'ports': [port,modbus_port,proxy_port], 'result': 'FAIL'}

    def check(name, condition=True, detail=None):
        item = dict(name=name, result='PASS' if condition else 'FAIL')
        if detail is not None: item['detail'] = detail
        checks.append(item)
        print(json.dumps(item, ensure_ascii=False), flush=True)
        if not condition: raise AssertionError(name + ': ' + str(detail))

    def request(path, body=None, headers=None, urlbase=base):
        h = {'Content-Type': 'application/json', **(headers or {})}
        req = Request(urlbase+path, data=None if body is None else json.dumps(body).encode(), headers=h)
        try:
            with opener.open(req, timeout=5) as r: return r.status, json.load(r)
        except HTTPError as e: return e.code, json.load(e)

    def post_samples(samples, tok=token):
        return request('/api/telemetry', {'samples': samples}, {'Authorization': 'Bearer '+tok})

    def start(name, command, custom_env=env):
        f = (out/(name+'.log')).open('ab'); files.append(f)
        p = subprocess.Popen([python, '-u', *command], cwd=root, env=custom_env, stdout=f, stderr=subprocess.STDOUT, creationflags=subprocess.CREATE_NO_WINDOW if os.name == 'nt' else 0)
        processes.append(p)
        return p

    def stop(p):
        if p and p.poll() is None:
            p.terminate()
            try: p.wait(timeout=8)
            except subprocess.TimeoutExpired: p.kill(); p.wait(timeout=5)

    def ready(urlbase=base):
        deadline = time.monotonic()+20
        while time.monotonic()<deadline:
            try:
                if request('/health',urlbase=urlbase)[0] == 200: return
            except (URLError, OSError): pass
            time.sleep(.2)
        raise AssertionError('service not ready')

    def registers(**values):
        temp=control.with_suffix('.tmp'); temp.write_text(json.dumps(values),encoding='utf-8'); os.replace(temp,control)

    def count():
        with sqlite3.connect(out/'gateway.sqlite3') as db:
            return db.execute("SELECT COUNT(*) FROM telemetry WHERE device_id='ENV-01'").fetchone()[0]

    class DropFirstReceipt(BaseHTTPRequestHandler):
        def log_message(self, *_): pass
        def do_POST(self):
            payload = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
            status, body = request('/api/telemetry', payload, {'Authorization': self.headers.get('Authorization','')})
            proxy_requests.append({'payload': payload, 'status': status, 'receipt': body})
            if len(proxy_requests) == 1:
                self.close_connection=True
                self.connection.shutdown(socket.SHUT_RDWR)
                self.connection.close()
                return
            raw=json.dumps(body).encode()
            self.send_response(status); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(raw))); self.end_headers(); self.wfile.write(raw)

    proxy=ThreadingHTTPServer(('127.0.0.1',proxy_port),DropFirstReceipt)
    threading.Thread(target=proxy.serve_forever,daemon=True).start()
    page=None
    try:
        server=start('gateway',['server.py','--port',str(port)])
        ready()
        registers(temperature=-10.1, humidity=65.8)
        fixture=start('fixture',['tools/modbus_fixture.py','--port',str(modbus_port),'--control',str(control)])
        with sync_playwright() as pw:
            browser=pw.chromium.launch(channel='msedge',headless=True,args=['--enable-webgl','--ignore-gpu-blocklist'])
            context=browser.new_context(viewport={'width':1536,'height':960},record_video_dir=str(out/'video'),record_video_size={'width':1536,'height':960})
            def route(r):
                host=r.request.url.split('/')[2] if r.request.url.startswith(('http://','https://')) else ''
                if host and not host.startswith(('127.0.0.1:', 'localhost:')):
                    external.append(r.request.url); r.abort()
                else: r.continue_()
            # Route only non-local URLs. Routing every request also intercepts the
            # long-lived SSE connection and can stall sync Playwright callbacks.
            import re
            context.route(re.compile(r'^https?://(?!(?:127\.0\.0\.1|localhost)(?::|/))'), route)
            context.tracing.start(screenshots=True, snapshots=True, sources=False)
            page=context.new_page()
            page.on('pageerror',lambda e:browser_errors.append(str(e)))
            page.goto(base, wait_until='domcontentloaded')
            try: page.locator('#login-dialog[open]').wait_for(timeout=45000)
            except Exception:
                page.screenshot(path=str(out/'startup-failure.png'),full_page=True)
                (out/'startup-dom.html').write_text(page.content(),encoding='utf-8')
                raise
            (out/'initial-dom.html').write_text(page.content(),encoding='utf-8')

            def login():
                page.locator('#login-password').fill(password)
                page.locator('#submit-login').click()
                page.wait_for_function('window.Lailin?.app?.state.authenticated && window.Lailin.app.state.connected')
                page.locator('#binding-status').filter(has_text='40/40').wait_for()

            def api(path, body=None, headers=None):
                return page.evaluate('''async a => { const r=await fetch('/api'+a.path,{method:a.body===null?'GET':'POST',headers:{'Content-Type':'application/json',...a.headers},...(a.body===null?{}:{body:JSON.stringify(a.body)})}); return {status:r.status,body:await r.json()}; }''',dict(path=path,body=body,headers=headers or {}))

            def snapshot(): return api('/bootstrap')['body']
            def device(): return next(d for d in snapshot()['devices'] if d['id']=='ENV-01')
            def until(predicate, seconds=15):
                end=time.monotonic()+seconds
                while time.monotonic()<end:
                    value=predicate()
                    if value: return value
                    page.wait_for_timeout(250)
                page.screenshot(path=str(out/'timeout.png'),full_page=True)
                (out/'timeout-dom.html').write_text(page.content(),encoding='utf-8')
                raise AssertionError('Condition timed out')
            def reading(temp, status=None):
                until(lambda: device()['metrics'].get('temperature')==temp and (not status or device()['status']==status))
                page.wait_for_function('(v)=>document.querySelector("#metric-value").textContent===v',arg=f'{temp:.1f}')
            def shot(name): page.screenshot(path=str(out/(name+'.png')),full_page=True)
            def alarms(): return [a for a in snapshot()['alarms'] if a['device_id']=='ENV-01' and a['rule_code']=='THRESHOLD']

            login()
            page.locator('[data-asset-id="ENV-01"]').click()
            check('gateway starts unknown with empty history',device()['status']=='unknown' and count()==0)
            check('source label identifies simulator','协议模拟' in page.locator('#data-source').inner_text())
            check('bench identity and temperature units',page.locator('#device-name').inner_text()=='台架温湿度探头' and page.locator('#metric-unit').inner_text()=='°C')
            check('unknown source is not fabricated as a reading',page.locator('#metric-value').inner_text()=='—')
            csrf=api('/auth/session')['body']['csrfToken']
            denied=api('/commands',dict(deviceId='GAT-01',action='setGate',value='open'),{'X-CSRF-Token':csrf,'Idempotency-Key':'e2e-no-physical-control'})
            check('physical commands blocked',denied['status']==409 and denied['body']['error']['code']=='ADAPTER_NOT_CONFIGURED' and not page.locator('#control-section').is_visible())
            invalid=dict(deviceId='ENV-01',sampleAt=int(time.time()*1000),seq=1,metrics={'temperature':25})
            check('unauthorized ingestion rejected',post_samples([invalid],tok='wrong')[0]==401)
            check('invalid batch is atomic',post_samples([invalid,dict(invalid,deviceId='UNKNOWN')])[0]==422 and count()==0)

            reader=start('reader',['adapters/modbus_reader.py','--config',str(out/'reader-config.json')])
            reading(-10.1,'normal')
            until(lambda:len(proxy_requests)>=2)
            check('lost HTTP receipt retries identical payload',proxy_requests[0]['payload']==proxy_requests[1]['payload'] and proxy_requests[1]['receipt']['results'][0]['result']=='duplicate')
            first=proxy_requests[0]['payload']['samples'][0]
            with sqlite3.connect(out/'gateway.sqlite3') as db:
                n=db.execute('SELECT COUNT(*) FROM telemetry WHERE device_id=? AND seq=?',(first['deviceId'],first['seq'])).fetchone()[0]
            check('retry stored once',n==1)
            check('signed reference decoding and humidity',device()['metrics']=={'temperature':-10.1,'humidity':65.8})
            shot('01-live-negative')
            duplicate_reader=start('second-reader',['adapters/modbus_reader.py','--config',str(out/'reader-config.json'),'--max-samples','1'])
            duplicate_reader.wait(timeout=8)
            check('single writer state lock',duplicate_reader.returncode==2 and 'Another reader' in (out/'second-reader.log').read_text(encoding='utf-8'))

            registers(temperature=33.3,humidity=56)
            reading(33.3,'alarm')
            first_alarm=alarms()[0]['id']
            page.locator('#device-alarms [data-ack]').click()
            page.locator('#confirm-note').fill('端到端台架模拟：已知悉，等待温度恢复')
            page.locator('#confirm-submit').click()
            until(lambda:alarms()[0]['state']=='acknowledged')
            check('acknowledgement is not recovery',device()['status']=='alarm' and alarms()[0]['id']==first_alarm)
            page.wait_for_timeout(2500)
            check('persistent threshold has one active alarm',len([a for a in alarms() if a['state']!='resolved'])==1)
            shot('02-acknowledged-alarm')
            registers(temperature=25,humidity=55)
            reading(25,'normal')
            check('measurement recovery closes alarm',next(a for a in alarms() if a['id']==first_alarm)['state']=='resolved')
            registers(temperature=31,humidity=55)
            reading(31,'alarm')
            check('new excursion has new alarm id',next(a for a in alarms() if a['state']!='resolved')['id']!=first_alarm)
            registers(temperature=25,humidity=55)
            reading(25,'normal')

            # At least 125s covers a complete 60s bucket for any UI 1h/60 alignment.
            registers(registers=[65535,250])
            page.wait_for_timeout(2500)
            before_count=count(); before=device(); gap_start=time.monotonic()
            until(lambda:device()['status']=='offline',seconds=20)
            check('invalid raw sample does not overwrite reading',count()==before_count and device()['seq']==before['seq'] and device()['metrics']['temperature']==25)
            check('offline within 20 seconds',time.monotonic()-gap_start<=20)
            shot('03-offline')
            stop(fixture)
            while time.monotonic()-gap_start<125: page.wait_for_timeout(500)
            check('communication gap does not fabricate samples',count()==before_count)
            registers(temperature=26,humidity=54)
            fixture=start('fixture-reconnected',['tools/modbus_fixture.py','--port',str(modbus_port),'--control',str(control)])
            reading(26,'normal')
            check('device reconnects without restarting reader',reader.poll() is None)

            old_seq=device()['seq']; stop(reader)
            reader=start('reader-restarted',['adapters/modbus_reader.py','--config',str(out/'reader-config.json')])
            until(lambda:device()['seq']>old_seq)
            check('reader restart retains monotonic sequence',device()['seq']>old_seq)
            stop(reader)
            d=device(); prior=proxy_requests[-1]['payload']['samples'][0]
            check('duplicate ingestion is explicit',post_samples([prior])[1]['results'][0]['result']=='duplicate')
            conflict=dict(prior,metrics={**prior['metrics'],'temperature':prior['metrics']['temperature']+1})
            check('sequence collision rejected',post_samples([conflict])[0]==409)
            late=dict(prior,seq=d['seq']+1,sampleAt=int(time.time()*1000)-31000,metrics={'temperature':20,'humidity':54})
            check('late sample only enters history',post_samples([late])[1]['results'][0]['result']=='late' and device()['seq']==d['seq'])
            future=dict(late,seq=d['seq']+2,sampleAt=int(time.time()*1000)+60000)
            check('future sample rejected',post_samples([future])[0]==422)
            atomic_before=count()
            check('invalid metric batch is atomic',post_samples([dict(prior,seq=d['seq']+3),dict(prior,seq=d['seq']+4,metrics={'humidity':55})])[0]==422 and count()==atomic_before)

            # Two historical pairs bracket a full missing range. These are explicitly
            # HTTP history fixtures, separate from the real-time Modbus chain above.
            now=int(time.time()*1000)
            histories=[dict(deviceId='ENV-01',sampleAt=now-age,seq=d['seq']+10+i,metrics={'temperature':23+i*.1,'humidity':50}) for i,age in enumerate([600000,540000,360000,300000])]
            backfill=post_samples(histories)
            check('history fixtures bracket full empty buckets',backfill[0]==200 and all(r['result']=='late' for r in backfill[1]['results']))
            page.locator('[data-hours="1"]').click()
            until(lambda:page.locator('#trend-chart path.chart-line').count()>=2)
            with page.expect_download() as download: page.locator('#export-history').click()
            csv_path=out/'ENV-01-history.csv'; download.value.save_as(csv_path)
            with csv_path.open(encoding='utf-8-sig',newline='') as f: rows=list(csv.DictReader(f))
            check('UI CSV retains empty bins',any(row['mean']=='' and row['count']=='0' for row in rows) and any(row['mean']!='' for row in rows))
            check('history temperature label matches exported unit',all(row['metric']=='temperature' and row['unit']=='°C' for row in rows))
            check('rendered chart separates gaps',page.locator('#trend-chart path.chart-line').count()>=2)
            (out/'history-chart.svg').write_text(page.locator('#trend-chart').evaluate('(el)=>el.outerHTML'),encoding='utf-8')
            shot('04-history-gaps')

            boot=snapshot()['bootId']; persisted_count=count(); stop(server)
            page.locator('#connection-banner').wait_for(state='visible',timeout=15000)
            server=start('gateway-restarted',['server.py','--port',str(port)])
            ready(); page.locator('#reconnect-button').click()
            page.locator('#login-dialog[open]').wait_for(); login()
            check('service restart preserves history and changes boot',snapshot()['bootId']!=boot and count()==persisted_count)
            reader=start('reader-after-server',['adapters/modbus_reader.py','--config',str(out/'reader-config.json')])
            reading(26,'normal')
            page.set_viewport_size({'width':390,'height':844})
            page.locator('#mobile-assets').click()
            page.locator('[data-asset-id="ENV-01"]').click()
            check('mobile viewport has no horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth'))
            shot('05-mobile')
            page.set_viewport_size({'width':1536,'height':960})
            stop(reader)

            # Existing database protection uses a COPY of the test DB only.
            old_db=out/'old-pm25.sqlite3'
            with sqlite3.connect(out/'gateway.sqlite3') as src, sqlite3.connect(old_db) as dst: src.backup(dst)
            with sqlite3.connect(old_db) as db:
                state=json.loads(db.execute("SELECT state FROM device_state WHERE id='ENV-01'").fetchone()[0]);state.update(metric='pm25',unit='μg/m³')
                db.execute("UPDATE device_state SET state=? WHERE id='ENV-01'",(json.dumps(state),))
            old=start('old-db-rejected',['server.py','--port',str(free_port())],dict(env,LAILIN_DB=str(old_db)))
            old.wait(timeout=8)
            check('old PM2.5 database refused',old.returncode!=0 and 'Stored asset metric/unit differs' in (out/'old-db-rejected.log').read_text())
            wrong_source=start('mixed-source-rejected',['server.py','--port',str(free_port())],dict(env,LAILIN_GATEWAY_KIND='modbus-rtu'))
            wrong_source.wait(timeout=8)
            check('simulator and RTU provenance cannot mix',wrong_source.returncode!=0 and 'Gateway source differs' in (out/'mixed-source-rejected.log').read_text())

            # UI smoke + server idempotency regression in a separate simulated DB.
            sim_port=free_port(); report['ports'].append(sim_port)
            sim=start('simulated-regression',['server.py','--port',str(sim_port)],dict(env,LAILIN_MODE='simulated',LAILIN_DB=str(out/'simulated.sqlite3')))
            ready(f'http://127.0.0.1:{sim_port}')
            page.goto(f'http://127.0.0.1:{sim_port}',wait_until='domcontentloaded')
            page.wait_for_function('window.Lailin?.app?.state.connected')
            page.locator('#login-button').click(); page.locator('#login-dialog[open]').wait_for();login()
            page.locator('[data-asset-id="GAT-01"]').click()
            page.locator('#device-control').click(); page.locator('#confirm-submit').click()
            until(lambda:'已抬杆' in page.locator('#secondary-readings').inner_text())
            check('simulated gate UI waits then shows returned position','已抬杆' in page.locator('#secondary-readings').inner_text())
            csrf=api('/auth/session')['body']['csrfToken']; hdr={'X-CSRF-Token':csrf,'Idempotency-Key':'e2e-simulated-gate-close'}
            cmd=dict(deviceId='GAT-01',action='setGate',value='closed')
            a=api('/commands',cmd,hdr); b=api('/commands',cmd,hdr)
            c=api('/commands',dict(cmd,value='open'),hdr)
            pending=api('/commands',cmd,{**hdr,'Idempotency-Key':'e2e-other-command'})
            check('simulated idempotency contract preserved',a['status']==202 and b['body']['id']==a['body']['id'] and c['status']==409 and pending['status']==409)
            until(lambda:api('/commands/'+a['body']['id'])['body']['status']=='confirmed')
            check('simulated command receipt and readback agree',next(x for x in api('/bootstrap')['body']['devices'] if x['id']=='GAT-01')['metrics']['position']==0)
            page.locator('[data-asset-id="ENV-01"]').click()
            check('simulated bench supports humidity','相对湿度' in page.locator('#secondary-readings').inner_text())
            shot('06-simulated-regression')

            page.goto((root/'index.html').as_uri(),wait_until='load')
            page.wait_for_function('window.Lailin?.app?.state.preview && window.Lailin.app.state.connected')
            page.locator('[data-asset-id="ENV-01"]').click()
            check('static preview opens from disk with matching 40 assets',page.locator('#binding-status').inner_text().startswith('40/40') and page.locator('#metric-unit').inner_text()=='°C')
            check('static preview remains explicitly simulated','模拟' in page.locator('#data-source').inner_text())
            shot('07-offline-file')
            check('no external requests required',external==[],external)
            check('no browser runtime errors',browser_errors==[],browser_errors)
            report['renderer']=page.evaluate('''() => {let g=document.querySelector('canvas').getContext('webgl2'), e=g.getExtension('WEBGL_debug_renderer_info');return {renderer:e?g.getParameter(e.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER),vendor:e?g.getParameter(e.UNMASKED_VENDOR_WEBGL):g.getParameter(g.VENDOR)}}''')
            report['browser']=browser.version
            context.tracing.stop(path=str(out/'browser-trace.zip'))
            context.close(); browser.close()
        report['result']='PASS'
    except Exception:
        report['error']=traceback.format_exc(); print(report['error'],flush=True)
        if page:
            try: page.screenshot(path=str(out/'failure.png'),full_page=True)
            except Exception: pass
    finally:
        for p in reversed(processes): stop(p)
        proxy.shutdown();proxy.server_close()
        for f in files: f.close()
        report.update(finishedAt=time.strftime('%Y-%m-%dT%H:%M:%S%z'),browserErrors=browser_errors,externalRequests=external,processesStopped=all(p.poll() is not None for p in processes))
        report['sourceHashes']={str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['src','adapters','tools','tests'] for p in (root/folder).glob('*') if p.is_file() and p.suffix in ('.py','.js','.json','.txt','.html','.css')}
        report['sourceHashes']['server.py']=hashlib.sha256((root/'server.py').read_bytes()).hexdigest()
        for name in ('catalog.json','index.html','studio.css','preview-runtime.js','preview-data.js'):
            report['sourceHashes'][name]=hashlib.sha256((root/name).read_bytes()).hexdigest()
        (out/'proxy-receipts.json').write_text(json.dumps(proxy_requests,ensure_ascii=False,indent=2),encoding='utf-8')
        (out/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
        hashes={str(p.relative_to(out)):hashlib.sha256(p.read_bytes()).hexdigest() for p in out.rglob('*') if p.is_file()}
        (out/'SHA256.json').write_text(json.dumps(hashes,indent=2),encoding='utf-8')
        print('RESULT',report['result'],out,flush=True)
    return 0 if report['result']=='PASS' else 1


if __name__=='__main__': sys.exit(main())
