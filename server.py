"""Lailin campus service. Python 3.11+, standard library, SQLite persistence.

Only this process writes operational state. The browser displays versioned snapshots.
Simulator and authenticated gateway ingestion use the same validation and rules.
"""
from __future__ import annotations

import argparse
import hashlib
import hmac
import json
import logging
import math
import os
import secrets
import signal
import sqlite3
import threading
import time
import uuid
import copy
from collections import defaultdict, deque
from contextlib import contextmanager
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent
# Front end = index.html (live flag injected) + these build outputs, same as the static preview.
STATIC_FILES = {'/studio.css': 'text/css; charset=utf-8', '/preview-data.js': 'text/javascript; charset=utf-8', '/preview-runtime.js': 'text/javascript; charset=utf-8'}
MODE = os.getenv('LAILIN_MODE', 'simulated')
if MODE not in ('simulated', 'gateway'):
    raise SystemExit('LAILIN_MODE must be simulated or gateway')
CATALOG = json.loads((ROOT / 'catalog.json').read_text(encoding='utf-8'))
CAT = {a['id']: a for a in CATALOG['assets']}
TYPES = CATALOG['types']
NOW = lambda: int(time.time() * 1000)
BOOT = str(uuid.uuid4())
STOP = threading.Event()
LOCK = threading.RLock()
DB_PATH = Path(os.getenv('LAILIN_DB', str(ROOT / 'data' / 'park-v2.1.sqlite3')))
DB_PATH.parent.mkdir(parents=True, exist_ok=True)
DB = sqlite3.connect(DB_PATH, check_same_thread=False, isolation_level=None)
DB.row_factory = sqlite3.Row
DB.executescript('''
PRAGMA journal_mode=WAL;
PRAGMA busy_timeout=5000;
PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY,value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS device_state (id TEXT PRIMARY KEY,state TEXT NOT NULL,scenario TEXT NOT NULL DEFAULT 'normal');
CREATE TABLE IF NOT EXISTS telemetry (
  id INTEGER PRIMARY KEY,device_id TEXT NOT NULL,ts INTEGER NOT NULL,received_at INTEGER NOT NULL,
  seq INTEGER NOT NULL,metric TEXT NOT NULL,value REAL NOT NULL,source TEXT NOT NULL,
  late INTEGER NOT NULL DEFAULT 0,UNIQUE(device_id,seq,source));
CREATE INDEX IF NOT EXISTS telemetry_window ON telemetry(device_id,ts);
CREATE TABLE IF NOT EXISTS alarms (
  id TEXT PRIMARY KEY,device_id TEXT NOT NULL,rule_code TEXT NOT NULL,severity TEXT NOT NULL,state TEXT NOT NULL,
  title TEXT NOT NULL,value REAL,threshold REAL,unit TEXT,opened_at INTEGER NOT NULL,updated_at INTEGER NOT NULL,
  acknowledged_at INTEGER,acknowledged_by TEXT,note TEXT,resolved_at INTEGER,version INTEGER NOT NULL DEFAULT 1);
CREATE UNIQUE INDEX IF NOT EXISTS one_active_alarm ON alarms(device_id,rule_code) WHERE state!='resolved';
CREATE TABLE IF NOT EXISTS audit (id INTEGER PRIMARY KEY,at INTEGER NOT NULL,actor TEXT NOT NULL,
  action TEXT NOT NULL,device_id TEXT,detail TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS commands (id TEXT PRIMARY KEY,actor TEXT NOT NULL,idempotency_key TEXT NOT NULL,
  payload_hash TEXT NOT NULL,device_id TEXT NOT NULL,payload TEXT NOT NULL,status TEXT NOT NULL,
  message TEXT NOT NULL,created_at INTEGER NOT NULL,finished_at INTEGER,UNIQUE(actor,idempotency_key));
PRAGMA user_version=1;
''')
STATES: dict[str, dict] = {}
SCENARIOS: dict[str, str] = {}
VERSION = 0
LAST_CYCLE=time.monotonic()
SESSIONS: dict[str, dict] = {}
RATE: dict[str, deque] = defaultdict(deque)
STREAMS = threading.BoundedSemaphore(32)
PASSWORD = os.getenv('LAILIN_OPERATOR_PASSWORD', 'lailin-demo-2026')
DEFAULT_PASSWORD = PASSWORD == 'lailin-demo-2026'
GATEWAY_TOKEN = os.getenv('LAILIN_GATEWAY_TOKEN', '')
GATEWAY_KIND = os.getenv('LAILIN_GATEWAY_KIND', 'unverified')
SOURCE_LABELS = {'unverified': '网关接入 · 来源待核验', 'modbus-simulator': 'Modbus TCP · 协议模拟', 'modbus-rtu': 'Modbus RTU · 台架采集'}
if GATEWAY_KIND not in SOURCE_LABELS:
    raise SystemExit('LAILIN_GATEWAY_KIND must be unverified, modbus-simulator or modbus-rtu.')
COOKIE_SECURE = os.getenv('LAILIN_SECURE_COOKIE', '0') == '1'
PUBLIC_ORIGIN = os.getenv('LAILIN_PUBLIC_ORIGIN', '').rstrip('/')
if MODE == 'gateway' and (DEFAULT_PASSWORD or len(PASSWORD) < 12 or len(GATEWAY_TOKEN) < 24):
    raise SystemExit('Gateway mode requires a unique operator password (12+ chars) and gateway token (24+ chars).')
SALT = secrets.token_bytes(16)
PASSWORD_HASH = hashlib.scrypt(PASSWORD.encode(), salt=SALT, n=16384, r=8, p=1)


class APIError(Exception):
    def __init__(self, status: int, code: str, message: str):
        self.status, self.code, self.message = status, code, message


@contextmanager
def transaction():
    global VERSION
    with LOCK:
        old_states=copy.deepcopy(STATES)
        old_scenarios=dict(SCENARIOS)
        old_version=VERSION
        DB.execute('BEGIN IMMEDIATE')
        try:
            yield
            DB.commit()
        except Exception:
            DB.rollback()
            STATES.clear();STATES.update(old_states)
            SCENARIOS.clear();SCENARIOS.update(old_scenarios)
            VERSION=old_version
            raise


def audit(action, device=None, detail='', actor='system'):
    DB.execute('INSERT INTO audit(at,actor,action,device_id,detail) VALUES(?,?,?,?,?)',
               (NOW(), actor, action, device, str(detail)[:2000]))


def persist(device_id):
    DB.execute('INSERT INTO device_state(id,state,scenario) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET state=excluded.state,scenario=excluded.scenario',
               (device_id, json.dumps(STATES[device_id], ensure_ascii=False), SCENARIOS[device_id]))


def open_alarm(d, code, severity, title, value=None, threshold=None):
    existing = DB.execute("SELECT * FROM alarms WHERE device_id=? AND rule_code=? AND state!='resolved'", (d['id'], code)).fetchone()
    now = NOW()
    if existing:
        # Escalation requires renewed operator acknowledgement.
        escalated = existing['severity'] != 'critical' and severity == 'critical'
        DB.execute('UPDATE alarms SET value=?,threshold=?,updated_at=?,severity=?,version=version+1 WHERE id=?',
                   (value, threshold, now, severity, existing['id']))
        if escalated:
            DB.execute("UPDATE alarms SET state='open',acknowledged_at=NULL,acknowledged_by=NULL,note=NULL WHERE id=?", (existing['id'],))
            audit('alarm.escalated', d['id'], title)
        return
    alarm_id = str(uuid.uuid4())
    DB.execute('''INSERT INTO alarms(id,device_id,rule_code,severity,state,title,value,threshold,unit,opened_at,updated_at)
                  VALUES(?,?,?,?,'open',?,?,?,?,?,?)''',
               (alarm_id, d['id'], code, severity, title, value, threshold, d['unit'] if code == 'THRESHOLD' else '', now, now))
    audit('alarm.opened', d['id'], title)


def resolve_alarm(device_id, code):
    rows = DB.execute("SELECT id,title FROM alarms WHERE device_id=? AND rule_code=? AND state!='resolved'", (device_id, code)).fetchall()
    if rows:
        DB.execute("UPDATE alarms SET state='resolved',resolved_at=?,updated_at=?,version=version+1 WHERE device_id=? AND rule_code=? AND state!='resolved'",
                   (NOW(), NOW(), device_id, code))
        for row in rows:
            audit('alarm.resolved', device_id, row['title'])


def evaluate(d):
    cfg = TYPES[d['type']]
    if not d.get('lastSeen'):
        d.update(status='unknown', quality='missing')
        return
    if NOW() - d['lastSeen'] > 15000:
        d.update(status='offline', quality='stale')
        open_alarm(d, 'OFFLINE', 'warning', d['name'] + ' · 心跳超时')
        return
    resolve_alarm(d['id'], 'OFFLINE')
    value = d['metrics'].get(cfg['metric'])
    if not isinstance(value, (int, float)):
        d.update(status='unknown', quality='missing')
        return
    d['quality'] = 'good'
    existing = DB.execute("SELECT severity FROM alarms WHERE device_id=? AND rule_code='THRESHOLD' AND state!='resolved'", (d['id'],)).fetchone()
    if cfg['warning'] is None:
        d['status'] = 'normal'
        return
    if value <= cfg['recovery']:
        resolve_alarm(d['id'], 'THRESHOLD')
        d['status'] = 'normal'
    elif value >= cfg['alarm'] or existing and existing['severity'] == 'critical':
        d['status'] = 'alarm'
        open_alarm(d, 'THRESHOLD', 'critical', d['name'] + ' · ' + cfg['metricLabel'] + '越限', value, cfg['alarm'])
    elif value >= cfg['warning'] or existing:
        d['status'] = 'warning'
        open_alarm(d, 'THRESHOLD', 'warning', d['name'] + ' · ' + cfg['metricLabel'] + '越限', value, cfg['warning'])
    else:
        d['status'] = 'normal'


def ingest(device_id, metrics, timestamp, seq, source, received=None):
    d = STATES[device_id]
    received = received or NOW()
    is_late = timestamp < (d.get('sampleAt') or 0) or seq <= d.get('seq', 0) or (source=='gateway' and received-timestamp>15000)
    cursor = DB.execute('INSERT OR IGNORE INTO telemetry(device_id,ts,received_at,seq,metric,value,source,late) VALUES(?,?,?,?,?,?,?,?)',
                        (device_id, timestamp, received, seq, d['metric'], metrics[d['metric']], source, int(is_late)))
    if not cursor.rowcount:
        prior=DB.execute('SELECT ts,value FROM telemetry WHERE device_id=? AND seq=? AND source=?',(device_id,seq,source)).fetchone()
        if prior and (prior['ts']!=timestamp or prior['value']!=metrics[d['metric']]):
            raise APIError(409,'SEQUENCE_CONFLICT','同一采样序列号不能对应不同的时间或主指标。')
        return 'duplicate'
    if is_late:
        return 'late'
    # The immutable catalog owns position, identity, model node and units.
    d.update(metrics=metrics, sampleAt=timestamp, lastSeen=min(timestamp,received) if source=='gateway' else received, seq=seq, source=source)
    evaluate(d)
    persist(device_id)
    return 'applied'


def initialize():
    global VERSION
    with transaction():
        stored_mode = DB.execute("SELECT value FROM settings WHERE key='mode'").fetchone()
        if stored_mode and stored_mode['value'] != MODE:
            raise SystemExit('Use a separate LAILIN_DB when changing mode; simulated and gateway data must not be mixed.')
        DB.execute("INSERT OR IGNORE INTO settings(key,value) VALUES('mode',?)", (MODE,))
        initial = not DB.execute('SELECT 1 FROM device_state LIMIT 1').fetchone()
        old = {r['id']: r for r in DB.execute('SELECT * FROM device_state')}
        if old and set(old) != set(CAT):
            raise SystemExit('Stored asset catalog differs from this build. Migrate the database or use a new LAILIN_DB.')
        if any(json.loads(row['state']).get('metric') != CAT[device_id]['metric'] or json.loads(row['state']).get('unit') != CAT[device_id]['unit'] for device_id, row in old.items()):
            raise SystemExit('Stored asset metric/unit differs from this build. Preserve this database and use a new LAILIN_DB; no automatic conversion is allowed.')
        if MODE == 'gateway':
            stored_kind = DB.execute("SELECT value FROM settings WHERE key='gateway_kind'").fetchone()
            if (stored_kind and stored_kind['value'] != GATEWAY_KIND) or (not stored_kind and old and GATEWAY_KIND != 'unverified'):
                raise SystemExit('Gateway source differs or old provenance is unknown. Use a separate LAILIN_DB.')
            DB.execute("INSERT OR IGNORE INTO settings(key,value) VALUES('gateway_kind',?)", (GATEWAY_KIND,))
        seed = json.loads((ROOT / 'src' / 'seed.json').read_text(encoding='utf-8'))
        seed_devices = {d['id']: d for d in seed['snapshot']['devices']}
        now = NOW()
        for device_id, asset in CAT.items():
            if device_id in old:
                d = json.loads(old[device_id]['state'])
                saved_source=d.get('source',MODE)
                d.update(asset)
                d['source']=saved_source
                SCENARIOS[device_id] = old[device_id]['scenario']
            else:
                d = dict(asset, metrics={}, seq=0, lastSeen=None, sampleAt=None, status='unknown', quality='missing', powered=True, controlState='closed')
                SCENARIOS[device_id] = {'PMP-01':'alarm', 'PWR-02':'warning', 'CAM-03':'offline'}.get(device_id, 'normal') if MODE == 'simulated' else 'normal'
                if MODE == 'simulated':
                    d.update(metrics=seed_devices[device_id]['metrics'], seq=0, lastSeen=now - (90000 if device_id == 'CAM-03' else 0), sampleAt=now, source='simulated')
            STATES[device_id] = d
            if not d.get('sampleAt'):d['source']=MODE
            evaluate(d)
            persist(device_id)
        if initial and MODE == 'simulated':
            # Explicitly seeded demonstration history; never used in gateway mode.
            for device_id, history in seed['histories'].items():
                for i, point in enumerate(history['points']):
                    if point['value'] is None:
                        continue
                    timestamp = now - (seed['snapshot']['serverTime'] - point['ts'])
                    DB.execute('INSERT INTO telemetry(device_id,ts,received_at,seq,metric,value,source,late) VALUES(?,?,?,?,?,?,?,0)',
                               (device_id, timestamp, now, i+1, history['metric'], point['value'], 'seeded_simulated'))
            audit('system.seed', detail='40 demo assets; synthetic history seeded relative to startup; source=seeded_simulated')
        DB.execute("UPDATE commands SET status='failed',message='服务重启，未确认执行。请核实设备状态。',finished_at=? WHERE status='accepted'", (now,))
        audit('system.start', detail='mode=' + MODE + '; boot=' + BOOT)
        VERSION += 1


def simulated_metrics(d, now):
    cfg = TYPES[d['type']]
    n = sum(map(ord, d['id']))
    wave = math.sin(now / 41000 + n) * 1.1 + math.sin(now / 16000 + n * .7) * .35
    value = cfg['base'] + wave
    scenario = SCENARIOS[d['id']]
    if scenario == 'alarm' and cfg['alarm'] is not None:
        value = cfg['alarm'] + 4 + wave * .4
    elif scenario == 'warning' and cfg['warning'] is not None:
        value = cfg['warning'] + 5 + wave * .4
    m = {cfg['metric']: round(value, 2)}
    if d['type'] == 'camera': m.update(fps=25, bitrate=round(3.9 + wave * .1, 2))
    elif d['type'] == 'light': m.update(power=round(value if d['powered'] else 0, 2), voltage=round(220 + wave, 2))
    elif d['type'] == 'meter': m.update(power=round(22 + wave * 1.2, 2), voltage=round(398 + wave, 2), current=round(32 + wave, 2))
    elif d['type'] == 'hvac': m.update(power=round(6.8 + wave * .2, 2), rpm=round(970 + wave * 15, 1))
    elif d['type'] == 'pump': m.update(flow=round(44 + wave, 2), pressure=round(.31 + wave * .005, 3))
    elif d['type'] == 'charger': m.update(power=round(42 + wave * 2, 2), voltage=round(745 + wave * 3, 1))
    elif d['type'] == 'sensor': m.update(temperature=round(26 + wave * .2, 2), humidity=round(56 + wave, 2), wind=round(2.1 + wave * .1, 2))
    elif d['type'] == 'bench': m.update(humidity=round(56 + wave, 2))
    elif d['type'] == 'gate': m.update(cycles=d['metrics'].get('cycles', 260), position=1 if d['controlState'] == 'open' else 0)
    return m


def tick():
    global VERSION,LAST_CYCLE
    while not STOP.wait(2):
        try:
            with transaction():
                now = NOW()
                for d in STATES.values():
                    if MODE == 'simulated' and SCENARIOS[d['id']] != 'offline':
                        ingest(d['id'], simulated_metrics(d, now), now, d['seq'] + 1, 'simulated', now)
                    else:
                        evaluate(d)
                        persist(d['id'])
                for cmd in DB.execute("SELECT * FROM commands WHERE status='accepted' AND created_at<?", (now-1200,)).fetchall():
                    d = STATES[cmd['device_id']]
                    payload = json.loads(cmd['payload'])
                    if d['status'] in ('offline', 'unknown') or SCENARIOS[d['id']]=='offline':
                        status, message = 'failed', '设备已离线，模拟执行失败。'
                    else:
                        if payload['action'] == 'setPower': d['powered'] = payload['value']
                        else: d['controlState'] = payload['value']
                        ack_time=NOW()
                        ingest(d['id'],simulated_metrics(d,ack_time),ack_time,d['seq']+1,'simulated',ack_time)
                        status, message = 'confirmed', '已收到模拟设备回执，状态已同步。'
                    DB.execute('UPDATE commands SET status=?,message=?,finished_at=? WHERE id=?', (status, message, now, cmd['id']))
                    audit('command.' + status, d['id'], cmd['id'], cmd['actor'])
                VERSION += 1
                if VERSION % 1800 == 0:
                    DB.execute('DELETE FROM telemetry WHERE ts<?', (now-30*86400000,))
                    for token, session in list(SESSIONS.items()):
                        if session['expires'] < time.time(): SESSIONS.pop(token, None)
            LAST_CYCLE=time.monotonic()
        except Exception:
            logging.exception('Telemetry cycle failed; no success snapshot was published')


def alarms(limit=100):
    return [dict(r) for r in DB.execute("SELECT * FROM alarms ORDER BY (state='resolved'),opened_at DESC LIMIT ?", (limit,))]


def snapshot():
    with LOCK:
        devices = [dict(d, metrics=dict(d['metrics'])) for d in STATES.values()]
        counts = {s: sum(d['status'] == s for d in devices) for s in ('normal', 'warning', 'alarm', 'offline', 'unknown')}
        active = DB.execute("SELECT COUNT(*) n,SUM(state='open') u FROM alarms WHERE state!='resolved'").fetchone()
        summary = dict(counts, total=len(devices), online=sum(d['status'] not in ('offline', 'unknown') for d in devices),
                       activeAlarms=active['n'], unacknowledged=active['u'] or 0,
                       powerKW=round(sum(d['metrics'].get('power',0) for d in devices if d['type']=='meter' and d['status'] not in ('offline','unknown')),2))
        return dict(bootId=BOOT, version=VERSION, serverTime=NOW(), dataHealthy=time.monotonic()-LAST_CYCLE<20, mode=MODE, site=CATALOG['site'], devices=devices, summary=summary, alarms=alarms())


def history(device_id, query):
    if device_id not in CAT: raise APIError(404, 'ASSET_NOT_FOUND', '资产不存在。')
    try:
        end = int(query.get('to', [str(NOW())])[0])
        start = int(query.get('from', [str(end-3600000)])[0])
        buckets = int(query.get('buckets', ['60'])[0])
    except (ValueError, TypeError):
        raise APIError(400, 'INVALID_WINDOW', '时间窗口或聚合参数无效。')
    if not 1 <= buckets <= 500 or start < 0 or not 0 < end-start <= 7*86400000 or end > NOW()+60000:
        raise APIError(400, 'INVALID_WINDOW', '查询范围为 7 天以内，聚合桶数为 1–500。')
    step = (end-start)/buckets
    points = [dict(ts=round(start+(i+.5)*step),value=None,min=None,max=None,count=0,sources=[]) for i in range(buckets)]
    rows = DB.execute('''SELECT MIN(?,CAST((ts-?)/? AS INTEGER)) bucket,AVG(value) mean,MIN(value) low,MAX(value) high,
                         COUNT(*) n,GROUP_CONCAT(DISTINCT source) sources,SUM(late) late
                         FROM telemetry WHERE device_id=? AND ts>=? AND ts<=? GROUP BY bucket''',
                      (buckets-1,start,step,device_id,start,end)).fetchall()
    for row in rows:
        points[row['bucket']].update(value=round(row['mean'],3),min=row['low'],max=row['high'],count=row['n'],sources=row['sources'].split(','))
    a=CAT[device_id]
    return dict(deviceId=device_id,metric=a['metric'],unit=a['unit'],mode=MODE,aggregation='mean',
                sampleCount=sum(r['n'] for r in rows),lateSampleCount=sum(r['late'] for r in rows),
                **{'from':start,'to':end},points=points)


def enforce_rate(key, count, seconds):
    now=time.time()
    q=RATE[key]
    while q and q[0]<now-seconds:q.popleft()
    if len(q)>=count:raise APIError(429,'RATE_LIMIT','操作过于频繁，请稍后再试。')
    q.append(now)
    if len(RATE)>2000:
        for k,v in list(RATE.items()):
            if not v or v[-1]<now-3600:RATE.pop(k,None)


class Handler(BaseHTTPRequestHandler):
    server_version='Lailin/2.0'
    protocol_version='HTTP/1.1'

    def log_message(self, fmt, *args):
        logging.info('%s %s',self.address_string(),fmt%args)

    def send(self, status, data, headers=None, content_type='application/json; charset=utf-8'):
        if getattr(self,'defer_write',False):
            self.pending_response=(status,data,headers,content_type)
            return
        raw=json.dumps(data,ensure_ascii=False,allow_nan=False).encode() if not isinstance(data,bytes) else data
        self.send_response(status)
        self.send_header('Content-Type',content_type)
        self.send_header('Content-Length',str(len(raw)))
        self.send_header('Cache-Control','no-store')
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Referrer-Policy','same-origin')
        self.send_header('X-Frame-Options','DENY')
        for k,v in (headers or {}).items():self.send_header(k,v)
        self.end_headers()
        if self.command!='HEAD':self.wfile.write(raw)

    def session(self, required=False):
        cookie=SimpleCookie()
        try:cookie.load(self.headers.get('Cookie',''))
        except Exception:cookie=SimpleCookie()
        token=cookie.get('lailin_session')
        token=token.value if token else ''
        session=SESSIONS.get(token)
        if session and session['expires']<time.time():
            SESSIONS.pop(token,None);session=None
        if required and not session:raise APIError(401,'AUTH_REQUIRED','请先登录操作员账号。')
        return token,session

    def csrf(self, session):
        if not hmac.compare_digest(self.headers.get('X-CSRF-Token',''),session['csrfToken']):
            raise APIError(403,'CSRF_INVALID','会话校验失败，请重新登录。')

    def origin(self):
        value=self.headers.get('Origin')
        if not value:return
        host=self.headers.get('Host','')
        allowed={f'http://{host}',f'https://{host}'}
        if PUBLIC_ORIGIN:allowed.add(PUBLIC_ORIGIN)
        if value not in allowed:raise APIError(403,'ORIGIN_DENIED','不允许跨站写入。')

    def body(self):
        if 'Transfer-Encoding' in self.headers:raise APIError(400,'BODY_FORMAT','不接受分块请求体。')
        try:size=int(self.headers.get('Content-Length','0'))
        except ValueError:raise APIError(400,'BODY_FORMAT','请求长度无效。')
        if size<0 or size>131072:raise APIError(413,'BODY_TOO_LARGE','请求体超过 128 KB。')
        if size==0:return {}
        if not self.headers.get('Content-Type','').startswith('application/json'):
            raise APIError(415,'JSON_REQUIRED','请使用 JSON 请求体。')
        self.connection.settimeout(10)
        try:data=json.loads(self.rfile.read(size),parse_constant=lambda _:(_ for _ in ()).throw(ValueError('nonfinite')))
        except (ValueError,UnicodeDecodeError):raise APIError(400,'INVALID_JSON','JSON 格式无效。')
        if not isinstance(data,dict):raise APIError(400,'INVALID_JSON','请求体必须为对象。')
        return data

    def fail(self, e):
        self.send(e.status,{'error':dict(code=e.code,message=e.message,requestId=str(uuid.uuid4()))})

    def do_HEAD(self):self.do_GET()

    def do_GET(self):
        try:
            u=urlparse(self.path);p=u.path;q=parse_qs(u.query)
            if p in ('/','/index.html','/lailin-park-preview.html'):
                html=(ROOT/'index.html').read_text(encoding='utf-8')
                label=json.dumps(SOURCE_LABELS[GATEWAY_KIND] if MODE=='gateway' else '',ensure_ascii=False)
                html=html.replace('<!--SERVER_RUNTIME-->',f'<script>globalThis.LAILIN_LIVE=true;globalThis.LAILIN_SOURCE_LABEL={label};</script>')
                self.send(200,html.encode(),content_type='text/html; charset=utf-8');return
            if p in STATIC_FILES:
                self.send(200,(ROOT/p[1:]).read_bytes(),content_type=STATIC_FILES[p]);return
            if p=='/favicon.ico':self.send(204,b'',content_type='image/x-icon');return
            if p=='/health':
                with LOCK:DB.execute('SELECT 1').fetchone()
                healthy=time.monotonic()-LAST_CYCLE<20
                self.send(200 if healthy else 503,dict(application='lailin-park-studio',status='ok' if healthy else 'degraded',mode=MODE,bootId=BOOT,version=VERSION,assets=len(CAT)));return
            if p=='/api/stream':
                if MODE=='gateway':
                    with LOCK:self.session(True)
                self.stream();return
            with LOCK:
                if p=='/api/auth/session':
                    _,s=self.session();self.send(200,dict(authenticated=bool(s),demo=MODE=='simulated' and DEFAULT_PASSWORD,**({k:s[k] for k in ('username','csrfToken')} if s else {})));return
                if MODE=='gateway':self.session(True)
                if p=='/api/bootstrap':self.send(200,snapshot());return
                if p=='/api/assets':self.send(200,CATALOG);return
                if p=='/api/alarms':self.send(200,{'items':alarms()});return
                if p=='/api/audit':self.send(200,{'items':[dict(r) for r in DB.execute('SELECT * FROM audit ORDER BY id DESC LIMIT 100')]});return
                if p.startswith('/api/devices/') and p.endswith('/history'):
                    self.send(200,history(p.split('/')[3],q));return
                if p.startswith('/api/commands/'):
                    _,s=self.session(True)
                    row=DB.execute('SELECT * FROM commands WHERE id=? AND actor=?',(p.split('/')[-1],s['username'])).fetchone()
                    if not row:raise APIError(404,'COMMAND_NOT_FOUND','指令不存在。')
                    self.send(200,dict(row));return
            raise APIError(404,'NOT_FOUND','请求的资源不存在。')
        except APIError as e:self.fail(e)
        except (ConnectionError,TimeoutError):pass
        except Exception:
            logging.exception('GET failed');self.fail(APIError(500,'INTERNAL_ERROR','服务暂时不可用，请稍后重试。'))

    def stream(self):
        if not STREAMS.acquire(blocking=False):raise APIError(503,'STREAM_LIMIT','连接数已达上限，请稍后重连。')
        try:
            self.send_response(200);self.send_header('Content-Type','text/event-stream; charset=utf-8');self.send_header('Cache-Control','no-cache');self.send_header('X-Accel-Buffering','no');self.send_header('Connection','close');self.end_headers()
            self.connection.settimeout(15);self.close_connection=True
            while not STOP.is_set():
                if MODE=='gateway':
                    with LOCK:_,current_session=self.session()
                    if not current_session:
                        self.wfile.write(b'event: auth-required\ndata: {"reason":"session-expired"}\n\n');self.wfile.flush();break
                snap=snapshot()
                packet=f"id: {BOOT}:{snap['version']}\nevent: snapshot\nretry: 2500\ndata: {json.dumps(snap,ensure_ascii=False,allow_nan=False)}\n\n".encode()
                self.wfile.write(packet);self.wfile.flush()
                if STOP.wait(2):break
        except (ConnectionError,TimeoutError):pass
        finally:STREAMS.release()

    def do_POST(self):
        global VERSION
        self.defer_write=True
        self.pending_response=None
        try:
            p=urlparse(self.path).path
            self.origin();data=self.body()
            if p=='/api/telemetry':self.gateway(data);return
            with transaction():
                enforce_rate('write:'+self.client_address[0],100,60)
                if p=='/api/auth/login':
                    enforce_rate('login:'+self.client_address[0],10,300)
                    user=data.get('username');password=data.get('password')
                    if not isinstance(password,str) or len(password)>256:password=''
                    candidate=hashlib.scrypt(password.encode(),salt=SALT,n=16384,r=8,p=1)
                    if user!='operator' or not hmac.compare_digest(candidate,PASSWORD_HASH):
                        audit('auth.failed',detail='Invalid credentials',actor='anonymous')
                        # Persist the failed authentication audit even when returning an error.
                        self.send(401,{'error':{'code':'INVALID_CREDENTIALS','message':'用户名或密码错误。','requestId':str(uuid.uuid4())}});return
                    old,_=self.session();SESSIONS.pop(old,None)
                    token=secrets.token_urlsafe(32);csrf=secrets.token_urlsafe(32)
                    SESSIONS[token]=dict(username=user,csrfToken=csrf,expires=time.time()+8*3600)
                    audit('auth.login',actor=user)
                    cookie=f'lailin_session={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=28800'+('; Secure' if COOKIE_SECURE else '')
                    self.send(200,dict(authenticated=True,username=user,csrfToken=csrf,demo=MODE=='simulated' and DEFAULT_PASSWORD),{'Set-Cookie':cookie});return
                token,s=self.session(True);self.csrf(s);actor=s['username']
                if p=='/api/auth/logout':
                    SESSIONS.pop(token,None);audit('auth.logout',actor=actor);self.send(200,{'ok':True},{'Set-Cookie':'lailin_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'});return
                if p.startswith('/api/alarms/') and p.endswith('/acknowledge'):
                    alarm_id=p.split('/')[3];row=DB.execute('SELECT * FROM alarms WHERE id=?',(alarm_id,)).fetchone()
                    if not row:raise APIError(404,'ALARM_NOT_FOUND','告警不存在。')
                    note=data.get('note','')
                    if not isinstance(note,str) or len(note)>500:raise APIError(400,'INVALID_NOTE','处理说明不能超过 500 字。')
                    if row['state']=='resolved':raise APIError(409,'ALREADY_RESOLVED','该告警已经恢复，请刷新记录。')
                    if row['state']=='open':
                        DB.execute("UPDATE alarms SET state='acknowledged',acknowledged_at=?,acknowledged_by=?,note=?,updated_at=?,version=version+1 WHERE id=?",(NOW(),actor,note,NOW(),alarm_id));audit('alarm.acknowledged',row['device_id'],note,actor);VERSION+=1
                    self.send(200,{'ok':True,'id':alarm_id});return
                if p=='/api/demo/scenario':
                    if MODE!='simulated':raise APIError(403,'SIMULATION_DISABLED','网关模式不允许故障演练。')
                    device_id=data.get('deviceId');scenario=data.get('scenario')
                    if device_id not in CAT or scenario not in ('alarm','offline','normal'):raise APIError(400,'INVALID_SCENARIO','资产或工况无效。')
                    if scenario=='alarm' and TYPES[CAT[device_id]['type']]['alarm'] is None:raise APIError(422,'NO_THRESHOLD','此类设备没有数值越限规则，可演练心跳中断。')
                    SCENARIOS[device_id]=scenario;persist(device_id);audit('demo.scenario',device_id,scenario,actor)
                    self.send(200,dict(message='已更新模拟工况。心跳中断在 15 秒超时后判离线，其他工况在下一次采样生效。'));return
                if p=='/api/commands':
                    if MODE!='simulated':raise APIError(409,'ADAPTER_NOT_CONFIGURED','当前网关模式只接收遥测，尚未配置实物控制适配器。')
                    device_id=data.get('deviceId');action=data.get('action');value=data.get('value');key=self.headers.get('Idempotency-Key','')
                    if not device_id in CAT or not 8<=len(key)<=128:raise APIError(400,'INVALID_COMMAND','资产或幂等编号无效。')
                    a=CAT[device_id]
                    if not (a['type']=='light' and action=='setPower' and isinstance(value,bool) or a['type']=='gate' and action=='setGate' and value in ('open','closed')):
                        raise APIError(422,'COMMAND_NOT_SUPPORTED','资产类型与控制命令不匹配。')
                    payload=dict(deviceId=device_id,action=action,value=value);raw=json.dumps(payload,sort_keys=True);digest=hashlib.sha256(raw.encode()).hexdigest()
                    prior=DB.execute('SELECT * FROM commands WHERE actor=? AND idempotency_key=?',(actor,key)).fetchone()
                    if prior:
                        if prior['payload_hash']!=digest:raise APIError(409,'IDEMPOTENCY_CONFLICT','相同幂等编号不能对应不同指令。')
                        self.send(200,dict(prior));return
                    if DB.execute("SELECT 1 FROM commands WHERE device_id=? AND status='accepted'",(device_id,)).fetchone():raise APIError(409,'COMMAND_PENDING','该设备已有指令等待回执，请先核实执行结果。')
                    if STATES[device_id]['status'] in ('offline','unknown'):raise APIError(409,'DEVICE_OFFLINE','设备不在线，未接受控制指令。')
                    cmd_id=str(uuid.uuid4())
                    DB.execute("INSERT INTO commands(id,actor,idempotency_key,payload_hash,device_id,payload,status,message,created_at) VALUES(?,?,?,?,?,?,'accepted','等待模拟回执',?)",(cmd_id,actor,key,digest,device_id,raw,NOW()))
                    audit('command.accepted',device_id,cmd_id,actor);self.send(202,dict(id=cmd_id,status='accepted'));return
                raise APIError(404,'NOT_FOUND','接口不存在。')
        except APIError as e:self.fail(e)
        except (ConnectionError,TimeoutError):pass
        except Exception:
            logging.exception('POST failed');self.fail(APIError(500,'INTERNAL_ERROR','操作未完成，请查询最新状态后再决定是否重试。'))
        finally:
            self.defer_write=False
            if self.pending_response:
                try:self.send(*self.pending_response)
                except (ConnectionError,TimeoutError):pass
                self.pending_response=None

    def gateway(self, data):
        global VERSION
        if MODE!='gateway' or not GATEWAY_TOKEN:raise APIError(403,'GATEWAY_DISABLED','当前为模拟模式，遥测接入未启用。')
        if not hmac.compare_digest(self.headers.get('Authorization',''),'Bearer '+GATEWAY_TOKEN):raise APIError(401,'GATEWAY_AUTH','网关身份校验失败。')
        samples=data.get('samples')
        if not isinstance(samples,list) or not 1<=len(samples)<=40:raise APIError(400,'INVALID_BATCH','每批应包含 1–40 条采样。')
        checked=[];now=NOW()
        ranges={'temperature':(-50,200),'power':(0,10000),'latency':(0,60000),'pm25':(0,2000),'voltage':(0,1200),'current':(0,10000),'rpm':(0,30000),'pressure':(0,100),'flow':(0,100000),'humidity':(0,100),'wind':(0,150),'cycles':(0,100000000),'position':(0,1),'fps':(0,240),'bitrate':(0,10000)}
        for x in samples:
            if not isinstance(x,dict) or x.get('deviceId') not in CAT:raise APIError(422,'INVALID_ASSET','采样资产不存在。')
            asset=CAT[x['deviceId']];ts=x.get('sampleAt');seq=x.get('seq');m=x.get('metrics')
            if type(ts)!=int or not now-30*86400000<=ts<=now+5000 or type(seq)!=int or not 1<=seq<=9007199254740991:raise APIError(422,'INVALID_SEQUENCE','采样时间或单调序列号无效。')
            if not isinstance(m,dict) or asset['metric'] not in m or len(m)>12:raise APIError(422,'METRIC_REQUIRED','采样必须包含该设备的主要监测指标。')
            for k,v in m.items():
                if k not in ranges or isinstance(v,bool) or not isinstance(v,(int,float)) or not math.isfinite(v) or not ranges[k][0]<=v<=ranges[k][1]:raise APIError(422,'INVALID_METRIC','采样指标或量程无效。')
            lo,hi=TYPES[asset['type']]['range']
            if not lo<=m[asset['metric']]<=hi:raise APIError(422,'OUT_OF_RANGE','主要监测指标超出资产量程。')
            checked.append((asset['id'],m,ts,seq))
        with transaction():
            enforce_rate('gateway',240,60)
            results=[dict(deviceId=i,result=ingest(i,m,t,s,'gateway',now)) for i,m,t,s in checked]
            VERSION+=1
        self.send(200,dict(results=results,version=VERSION,bootId=BOOT))


class Server(ThreadingHTTPServer):
    daemon_threads=True
    allow_reuse_address=True

    def get_request(self):
        conn,addr=super().get_request();conn.settimeout(20);return conn,addr


def main():
    parser=argparse.ArgumentParser(description='Lailin digital campus')
    parser.add_argument('--host',default=os.getenv('LAILIN_HOST','127.0.0.1'))
    parser.add_argument('--port',type=int,default=int(os.getenv('LAILIN_PORT','8767')))
    args=parser.parse_args()
    if args.host not in ('127.0.0.1','localhost','::1') and DEFAULT_PASSWORD:
        raise SystemExit('Set LAILIN_OPERATOR_PASSWORD before listening beyond loopback.')
    logging.basicConfig(level=logging.INFO,format='%(asctime)s %(levelname)s %(message)s')
    initialize();thread=threading.Thread(target=tick,daemon=True,name='telemetry');thread.start()
    server=Server((args.host,args.port),Handler)
    print(f'LAILIN STUDIO / http://{args.host}:{args.port} / mode={MODE}',flush=True)
    def shutdown(*_):
        STOP.set();threading.Thread(target=server.shutdown,daemon=True).start()
    signal.signal(signal.SIGINT,shutdown)
    if hasattr(signal,'SIGTERM'):signal.signal(signal.SIGTERM,shutdown)
    try:server.serve_forever(poll_interval=.5)
    finally:
        STOP.set();thread.join(timeout=5);server.server_close()
        with LOCK:DB.close()


if __name__=='__main__':main()
