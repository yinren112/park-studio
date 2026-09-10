/* ui/app.js */
/* Same-origin operations UI. Domain transitions are authoritative on the server. */
(globalThis.Lailin ||= {}).app = (() => {
    'use strict';
    const $ = id => document.getElementById(id), all = s => Array.from(document.querySelectorAll(s)), cat = Lailin.catalog, preview = globalThis.LAILIN_LIVE ? null : globalThis.LAILIN_PREVIEW || null;
    const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const names = { normal: '正常', warning: '预警', alarm: '告警', offline: '离线', unknown: '未知' }, states = { open: '待确认', acknowledged: '已确认', resolved: '已恢复' };
    const fmt = (n, d = 1) => typeof n === 'number' && Number.isFinite(n) ? n.toLocaleString('zh-CN', { maximumFractionDigits: d, minimumFractionDigits: d }) : '—';
    const date = (t, short = false) => t ? new Date(t).toLocaleString('zh-CN', short ? { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } : { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) : '暂无';
    const metricLabels = { latency: ['链路延时', 'ms'], fps: ['帧率', 'fps'], bitrate: ['码率', 'Mbps'], power: ['有功功率', 'kW'], voltage: ['电压', 'V'], current: ['电流', 'A'], temperature: ['温度', '°C'], rpm: ['风机转速', 'rpm'], flow: ['流量', 'm³/h'], pressure: ['压力', 'MPa'], humidity: ['相对湿度', '%'], wind: ['风速', 'm/s'], cycles: ['累计通行', '次'], position: ['闸杆状态', ''] };
    const s = { selected: 'PMP-01', snapshot: null, devices: new Map(cat.assets.map(a => [a.id, { ...a, status: 'unknown', metrics: {}, quality: 'missing' }])), session: { authenticated: false }, view: 'scene', status: 'all', type: 'all', zone: 'all', query: '', hours: 1, history: null, labels: true, alarmFilter: 'active', received: 0, connected: false, preview: !!preview, loginNext: null };
    let viewer = null, meta = null, stream = null, historyGeneration = 0, historyAbort = null, confirmCallback = null, destroyed = false, authBusy = false;
    const assetRows = new Map(), markers = new Map(), buildingLabels = [];
    const timers = [];
    const heroTitle = document.querySelector('.scene-corner').innerHTML;
    function toast(text, error = false) { const d = document.createElement('div'); d.className = `toast${error ? ' error' : ''}`; d.textContent = text; $('toasts').append(d); setTimeout(() => d.remove(), 6000); }
    function error(e) { toast(e.message || String(e), true); }
    async function api(path, { method = 'GET', body, headers = {}, signal } = {}) {
        const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 8000);
        const abort = () => ctl.abort();
        signal?.addEventListener('abort', abort, { once: true });
        try {
            const r = await fetch(`/api${path}`, { method, credentials: 'same-origin', signal: ctl.signal, headers: { ...(body ? { 'Content-Type': 'application/json' } : {}), ...(method !== 'GET' && s.session.csrfToken ? { 'X-CSRF-Token': s.session.csrfToken } : {}), ...headers }, ...(body ? { body: JSON.stringify(body) } : {}) });
            let data;
            try {
                data = await r.json();
            }
            catch {
                throw new Error(`服务响应格式无效（HTTP ${r.status}）`);
            }
            if (!r.ok) {
                const e = new Error(data.error?.message || `服务错误 ${r.status}`);
                e.code = data.error?.code;
                e.status = r.status;
                e.requestId = data.error?.requestId;
                if (e.status === 401) {
                    s.session = { authenticated: false };
                    renderSession();
                }
                throw e;
            }
            return data;
        }
        catch (e) {
            if (e.name === 'AbortError')
                throw new Error('请求超时或已取消，未将操作标记为成功。');
            throw e;
        }
        finally {
            clearTimeout(timer);
            signal?.removeEventListener('abort', abort);
        }
    }
    function renderSession() { const authenticated = !!s.session.authenticated, label = authenticated ? '操作员 (具备控制权限)' : '访客模式 (只读监控)'; $('user-label').textContent = label; $('login-button').querySelector('.user-avatar').textContent = authenticated ? '管' : '访'; $('login-button').setAttribute('aria-label', label); $('login-button').title = authenticated ? `${label} · 点击退出` : `${label} · 点击登录`; $('demo-credentials').hidden = s.session.demo === false; if($('mobile-account'))$('mobile-account').textContent=authenticated?'退出':'登录'; }
    function needAuth(callback) { if (preview) {
        toast('当前为离线只读预览。运行完整项目后可登录、确认告警和执行模拟控制。');
        return;
    } if (s.session.authenticated) {
        callback();
        return;
    } s.loginNext = callback; $('login-error').textContent = ''; $('login-dialog').showModal(); $('login-password').focus(); }
    function ask({ title, description, note = false, label = '确认', callback }) { confirmCallback = callback; $('confirm-title').textContent = title; $('confirm-description').textContent = description; $('confirm-note-label').hidden = !note; $('confirm-note').value = ''; $('confirm-submit').textContent = label; $('confirm-dialog').showModal(); }
    function syncConnection() {
        const stale = !s.connected || Date.now() - s.received > 8500;
        $('data-source').textContent = preview ? '离线只读 · 模拟数据' : s.snapshot?.mode === 'gateway' ? '网关接入模式' : stale ? '模拟数据 · 暂未同步' : '模拟数据 · 实时更新';
        $('connection-label').textContent = preview ? '离线预览 · 固定模拟快照' : stale ? '数据连接中断 · 保留最后快照' : `${s.snapshot?.mode==='gateway'?'网关数据已连接':'实时模拟数据已连接'} · SSE`;
        $('connection-dot').style.background = preview ? '#a2ac92' : stale ? '#bf995f' : '#679778';
        $('connection-banner').hidden = !stale || !!preview;
        if (stale && !preview)
            $('connection-message').textContent = '无法获取最新状态。显示最后快照，不将连接中断误判为设备离线。';
        $('last-sync').textContent = s.snapshot ? `数据采样 ${date(s.snapshot.serverTime, true)}` : '尚未收到状态快照';
    }
    function validateBinding() { if (!meta)
        return; const expected = new Set(cat.assets.map(a => a.id)), bound = meta.groups.filter(g => g.assetId), set = new Set(bound.map(g => g.assetId)), data = new Set(s.devices.keys()); const okay = bound.length === expected.size && set.size === expected.size && [...expected].every(id => set.has(id) && data.has(id)) && data.size === expected.size; $('binding-status').textContent = okay ? `${set.size} / ${expected.size} 资产节点已校验` : '资产与模型不一致 · 已阻止错绑'; if (!okay)
        throw new Error('资产与三维模型的唯一编号不一致。请检查目录和模型版本。'); }
    function applySnapshot(snapshot) {
        if(snapshot?.dataHealthy===false){s.connected=false;syncConnection();return;}
        if (!snapshot || !Array.isArray(snapshot.devices) || !snapshot.summary || !Number.isFinite(snapshot.serverTime))
            throw new Error('服务快照结构无效');
        if(!Number.isSafeInteger(snapshot.version)||snapshot.version<0||(!preview&&typeof snapshot.bootId!=='string'))throw new Error('服务数据版本无效，保留最后一次完整快照。');
        const expected = new Set(cat.assets.map(a => a.id));
        if (snapshot.devices.length !== expected.size || snapshot.devices.some(d => !expected.delete(d.id)) || expected.size)
            throw new Error('服务资产目录与模型版本不匹配，已拒绝应用快照。');
        if (s.snapshot && snapshot.bootId === s.snapshot.bootId && snapshot.version < s.snapshot.version)
            return;
        const immutable=new Map(cat.assets.map(a=>[a.id,a]));
        const devices=snapshot.devices.map(d=>{
            const asset=immutable.get(d.id),metric=cat.types[asset.type].metric;
            if(!Object.hasOwn(names,d.status)||!['good','stale','missing'].includes(d.quality)||!d.metrics||Array.isArray(d.metrics)||typeof d.metrics!=='object'||Object.values(d.metrics).some(v=>typeof v!=='number'||!Number.isFinite(v))||!Number.isSafeInteger(d.seq)||d.seq<0)throw new Error('设备采样字段无效，已拒绝覆盖当前状态。');
            if(d.quality==='good'&&(!Number.isFinite(d.metrics[metric])||!Number.isFinite(d.sampleAt)||!Number.isFinite(d.lastSeen)))throw new Error('有效采样缺少主指标或时间戳。');
            if(s.snapshot?.bootId===snapshot.bootId&&d.seq<(s.devices.get(d.id)?.seq||0))throw new Error('检测到倒序设备采样，保留最新状态。');
            return {...asset,status:d.status,quality:d.quality,metrics:{...d.metrics},seq:d.seq,sampleAt:d.sampleAt,lastSeen:d.lastSeen,powered:d.powered,controlState:d.controlState,source:d.source};
        });
        if(snapshot.summary.total!==devices.length||!Number.isFinite(snapshot.summary.powerKW)||snapshot.summary.online!==devices.filter(d=>!['offline','unknown'].includes(d.status)).length)throw new Error('运行概览与设备快照不一致。');
        if(!Array.isArray(snapshot.alarms)||snapshot.alarms.some(a=>typeof a.id!=='string'||!immutable.has(a.device_id)||!Object.hasOwn(states,a.state)||!['critical','warning'].includes(a.severity)||!Number.isFinite(a.opened_at)))throw new Error('告警快照无效，已保留最后有效记录。');
        s.snapshot = {...snapshot,devices};
        s.devices = new Map(devices.map(d => [d.id, d]));
        s.received = Date.now();
        s.connected = true;
        viewer?.setStates(snapshot.devices);
        renderSummary();
        renderList();
        renderInspector();
        renderMarkers();
        syncConnection();
        if (s.view === 'alarms')
            renderAlarms(snapshot.alarms || []);
        validateBinding();
    }
    async function reconnect() { if (preview)
        return; stream?.close(); s.connected = false; syncConnection(); try {
        applySnapshot(await api('/bootstrap'));
        openStream();
    }
    catch (e) {
        syncConnection();
        if (e.status === 401)
            needAuth(() => reconnect());
        else
            error(e);
    } }
    function openStream() { if (preview || destroyed)
        return; stream?.close(); stream = new EventSource('/api/stream'); stream.addEventListener('snapshot', event => { try {
        applySnapshot(JSON.parse(event.data));
    }
    catch (e) {
        s.connected = false;
        syncConnection();
        error(e);
    } }); stream.addEventListener('auth-required',()=>{stream?.close();s.connected=false;s.session={authenticated:false};renderSession();syncConnection();$('connection-message').textContent='操作员会话已结束，请重新登录后继续查看实时数据。';}); stream.onerror = () => { s.connected = false; syncConnection(); }; }
    function renderSummary() { const c = s.snapshot?.summary; if (!c)
        return; const text = { 'kpi-total': c.total, 'kpi-online': c.online, 'kpi-online-total': `/ ${c.total}`, 'kpi-rate': `在线率 ${(c.online / c.total * 100).toFixed(1)}%`, 'kpi-alarms': c.activeAlarms, 'kpi-ack': `${c.unacknowledged} 项待确认 · 按规则恢复`, 'kpi-power': fmt(c.powerKW, 1), 'nav-alarm-count': c.activeAlarms, 'asset-total': c.total, 'filter-all': c.total, 'filter-abnormal': c.alarm + c.warning + c.offline, 'filter-offline': c.offline }; for (const [id, v] of Object.entries(text))
        $(id).textContent = v; }
    function renderList() {
        const sorted = [...s.devices.values()].sort((a, b) => ({ alarm: 0, offline: 1, warning: 2, normal: 3, unknown: 4 }[a.status] - { alarm: 0, offline: 1, warning: 2, normal: 3, unknown: 4 }[b.status]) || a.id.localeCompare(b.id));
        let visible = 0, order = 0;
        for (const d of sorted) {
            let row = assetRows.get(d.id);
            if (!row) {
                row = document.createElement('button');
                row.type = 'button';
                row.className = 'asset-item';
                row.dataset.assetId = d.id;
                row.innerHTML = `<span class="asset-type-icon">${Lailin.icons(cat.types[d.type].icon)}</span><span class="asset-text"><strong>${esc(d.name)}</strong><small><span>${esc(d.id)}</span> · ${esc(d.zoneName)}</small></span><i class="dot"></i>`;
                row.onclick = () => select(d.id);
                row.ondblclick = () => focus(false);
                assetRows.set(d.id, row);
                $('asset-list').append(row);
            }
            row.style.order = String(order++);
            row.classList.toggle('selected', d.id === s.selected);
            row.setAttribute('aria-label', `${d.name} ${d.id} ${names[d.status]}`);
            row.setAttribute('aria-pressed', String(d.id === s.selected));
            row.querySelector('.dot').className = `dot ${d.status}`;
            const match = (s.type === 'all' || d.type === s.type) && (s.zone === 'all' || d.zone === s.zone) && (s.status === 'all' || s.status === 'abnormal' && ['alarm', 'warning', 'offline'].includes(d.status) || d.status === s.status) && `${d.name} ${d.id}`.toLowerCase().includes(s.query.toLowerCase());
            row.hidden = !match;
            if (match)
                visible++;
        }
        $('list-empty').hidden = visible !== 0;
    }
    let inspectorId = null, inspectorMode = null, alarmSignature = '';
    function renderInspector() {
        const d = s.devices.get(s.selected);
        if (!d)
            return;
        const t = cat.types[d.type], val = d.metrics[t.metric];
        const dataMode=preview?'preview':s.snapshot?.mode||'pending';
        if (inspectorId !== d.id || inspectorMode!==dataMode) {
            inspectorId = d.id;
            inspectorMode=dataMode;
            alarmSignature = null;
            $('device-name').textContent = d.name;
            $('device-subtitle').textContent = `${d.id} · ${t.label}`;
            $('inspector-icon').innerHTML = Lailin.icons(t.icon);
            $('metric-name').textContent = t.metricLabel;
            $('metric-unit').textContent = t.unit;
            $('trend-title').textContent = `${d.name} · ${t.metricLabel}`;
            $('trend-unit').textContent = t.unit;
            $('device-node').textContent = d.modelNode;
            const rows = [['资产编号', d.id], ['所属分区', d.zoneName], ['设备序列号', d.serial], ['运维责任', d.owner], ['模型位置', d.position.map(v => Number(v).toFixed(1)).join(', ') + ' m'], ['数据来源', dataMode==='gateway'?'受鉴权网关':dataMode==='pending'?'等待数据源':'模拟器 · 非实物数据'], ['建议协议', d.protocol], ['计划保养', d.maintenanceDue]];
            $('asset-details').innerHTML = rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
            $('command-status').textContent = '';
        }
        $('device-status').textContent = names[d.status] || '未知';
        $('device-status').className = `status-badge ${d.status}`;
        $('quality-badge').textContent = d.quality === 'good' ? '有效样本' : d.quality === 'stale' ? '最后样本 · 已过期' : '尚无数据';
        $('metric-value').textContent = fmt(val, d.type === 'gate' ? 0 : 1);
        document.querySelector('.main-reading').className = `main-reading ${d.status}`;
        const scale = t.alarm !== null ? t.alarm * 1.3 : Math.max(val || 1, 100);
        $('reading-fill').style.width = `${Math.max(0, Math.min(100, (val || 0) / scale * 100))}%`;
        $('warning-threshold').hidden = t.alarm === null;
        $('warning-threshold').style.left = `${(t.alarm || 0) / scale * 100}%`;
        $('threshold-caption').textContent = t.alarm !== null ? `预警 ≥ ${t.warning} / 告警 ≥ ${t.alarm} / 恢复 ≤ ${t.recovery} ${t.unit}` : '累计通行指标，不配置越限告警';
        const others = Object.entries(d.metrics).filter(([k]) => k !== t.metric).slice(0, 2);
        $('secondary-readings').innerHTML = others.map(([k, v]) => { let [l, u] = metricLabels[k] || [k, '']; if (k === 'power' && d.type === 'light')
            u = 'W'; return `<div class="secondary-reading"><span>${esc(l)}</span><b>${k === 'position' ? (v === 1 ? '已抬杆' : '已落杆') : fmt(v, k==='pressure'?3:1)}<small>${esc(u)}</small></b></div>`; }).join('');
        $('sample-time').textContent = `${d.status === 'offline' ? '最后有效采样' : '采样时间'} ${date(d.sampleAt)}${d.source === 'simulated' ? ' · 模拟' : ''}`;
        const alarms = (s.snapshot?.alarms || []).filter(a => a.device_id === d.id && a.state !== 'resolved');
        $('device-alarm-count').textContent = alarms.length;
        const sig = alarms.map(a => a.id + a.state + a.severity).join(',');
        if (sig !== alarmSignature || !$('device-alarms').children.length) {
            alarmSignature = sig;
            $('device-alarms').innerHTML = alarms.length ? alarms.map(a => `<div class="alarm-card"><strong>${esc(a.rule_code === 'OFFLINE' ? '设备心跳超时' : t.metricLabel + '持续越限')}</strong><p>${esc(date(a.opened_at))}<br>${a.rule_code === 'OFFLINE' ? '通信恢复后自动关闭；不是主动断电。' : '确认只代表已知悉，指标恢复后才关闭。'}</p>${a.state === 'open' ? `<button data-ack="${esc(a.id)}">确认告警</button>` : '<span class="acknowledged">已确认 · 持续观察</span>'}</div>`).join('') : '<div class="no-alarms">' + Lailin.icons('check') + '<span>当前设备无活动告警</span></div>';
        }
        $('control-section').hidden = !['light', 'gate'].includes(d.type) || s.snapshot?.mode === 'gateway';
        $('device-control').textContent = d.type === 'gate' ? (d.controlState === 'open' ? '落下闸杆' : '抬起闸杆') : (d.powered ? '关闭路灯' : '打开路灯');
        $('device-control').disabled = d.status === 'offline' || d.status === 'unknown';
        $('demo-alarm').disabled = t.alarm === null;
        $('explode-device').hidden = d.type !== 'pump';
        $('demo-tools').hidden = s.snapshot?.mode === 'gateway';
    }
    function select(id) { document.body.classList.add('inspected'); if (!s.devices.has(id))
        return; s.selected = id; if (viewer?.isolated)
        focus(true);
    else
        viewer?.select(id); document.body.classList.remove('hide-inspector', 'assets-open'); if (innerWidth <= 960)
        document.body.classList.add('inspector-open'); renderList(); renderInspector(); renderMarkers(); loadHistory(); }
    function focus(only) { document.body.classList.add('inspected'); if (!viewer)
        return; viewer.focus(s.selected, only); document.querySelector('.scene-corner').innerHTML = only ? `<span class="eyebrow">ENGINEERED TO THE DETAIL / ${esc(s.selected)}</span><h1>${esc(s.devices.get(s.selected).name)}</h1><p>独立资产节点 · 米制比例 · 几何与运行状态同步</p>` : heroTitle; document.body.classList.toggle('isolated', only); $('view-label').textContent = only ? '设备精查' : '设备定位'; $('isolate-device').textContent = only ? '返回园区' : '单独查看'; $('view-home').classList.remove('active'); $('view-top').classList.remove('active'); if (innerWidth <= 960)
        document.body.classList.remove('inspector-open'); positionMarkers(); }
    function home(top = false) { document.body.classList.remove('inspected','energy-view'); $('view-energy').classList.remove('active'); document.querySelector('.scene-location b').textContent=top?'平面俯视':'园区全景'; document.querySelector('.scene-corner').innerHTML = heroTitle; viewer?.home(top); document.body.classList.remove('isolated'); $('view-label').textContent = top ? '平面俯视' : '透视视图'; $('isolate-device').textContent = '单独查看'; $('view-home').classList.toggle('active', !top); $('view-top').classList.toggle('active', top); positionMarkers(); }
    function renderMarkers() {
        if (!meta)
            return;
        const chosen = new Set([s.selected, ...[...s.devices.values()].filter(d => ['alarm', 'warning', 'offline'].includes(d.status)).map(d => d.id), 'EV-03', 'AHU-03', 'GAT-01']);
        for (const id of chosen) {
            let el = markers.get(id);
            if (!el) {
                el = document.createElement('button');
                el.type = 'button';
                el.dataset.assetMarker = id;
                el.onclick = () => select(id);
                $('scene-markers').append(el);
                markers.set(id, el);
            }
            const d = s.devices.get(id);
            el.className = `marker ${d.status}${id === s.selected ? ' selected' : ''}`;
            el.innerHTML = `<i></i>${esc(id)}${id === s.selected ? `<span> ${esc(d.name)}</span>` : ''}`;
            el.setAttribute('aria-label', `选择 ${d.name}，${names[d.status]}`);
        }
        for (const [id, el] of markers)
            if (!chosen.has(id)) {
                el.remove();
                markers.delete(id);
            }
        positionMarkers();
    }
    function positionMarkers() {
        if (!viewer)
            return;
        const width = $('viewport').clientWidth, height = $('viewport').clientHeight;
        const occupied=[];
        for (const [id, el] of [...markers].sort(([a],[b])=>Number(b===s.selected)-Number(a===s.selected))) {
            const group = meta.groups.find(g => g.assetId === id);
            if (!group)
                continue;
            const p = viewer.project([group.center[0], group.max[1] + .7, group.center[2]]);
            el.hidden = !s.labels || !p.visible || p.x < 24 || p.x > width - 24 || p.y < 25 || p.y > height - 48 || (viewer.isolated && id !== s.selected);
            if(!el.hidden){ const overlap=occupied.some(q=>Math.abs(q.x-p.x)<86&&Math.abs(q.y-p.y)<25); if(overlap)el.hidden=true;else occupied.push(p); }
            el.style.left = `${p.x}px`;
            el.style.top = `${p.y}px`;
        }
        for (const { el, position } of buildingLabels) {
            const p = viewer.project(position);
            el.hidden = !s.labels || !p.visible || p.x < 10 || p.x > width - 10 || p.y < 20 || p.y > height - 45;
            el.style.left = `${p.x}px`;
            el.style.top = `${p.y}px`;
        }
        $('compass-needle').style.transform = `rotate(${-viewer.state.theta * 180 / Math.PI}deg)`;
    }
    async function loadHistory() {
        const generation = ++historyGeneration, id = s.selected, d = s.devices.get(id);
        if (!d)
            return;
        historyAbort?.abort();
        historyAbort = new AbortController();
        const end = preview ? preview.snapshot.serverTime : Date.now(), from = end - s.hours * 3600000;
        const previous = s.history?.deviceId===id && Math.abs((s.history.to-s.history.from)-s.hours*3600000)<1000 ? s.history : null;
        $('chart-message').hidden = !!previous;
        $('chart-message').textContent = '读取历史记录…';
        if(!previous)$('trend-chart').replaceChildren();
        try {
            let h;
            if (preview) {
                const raw = preview.histories[id];
                h = { ...raw, from, to: end, points: raw.points.filter(p => p.ts >= from && p.ts <= end) };
                h.sampleCount = h.points.reduce((n, p) => n + p.count, 0);
            }
            else
                h = await api(`/devices/${id}/history?from=${from}&to=${end}&buckets=${s.hours === 1 ? 60 : 120}`, { signal: historyAbort.signal });
            if (generation !== historyGeneration)
                return;
            if(h.deviceId!==id||h.metric!==cat.types[d.type].metric||h.unit!==cat.types[d.type].unit||h.from!==from||h.to!==end||!Array.isArray(h.points)||h.points.length>500||h.points.some((p,i)=>!Number.isFinite(p.ts)||p.ts<from||p.ts>end||(i>0&&p.ts<h.points[i-1].ts)||(p.value!==null&&!Number.isFinite(p.value))||!Number.isSafeInteger(p.count)||p.count<0||!Array.isArray(p.sources))||h.sampleCount!==h.points.reduce((n,p)=>n+p.count,0))throw new Error('历史数据与所选资产或查询窗口不一致，未显示该结果。');
            s.history = h;
            Lailin.chart($('trend-chart'), h, cat.types[d.type]);
            $('chart-message').hidden = h.sampleCount > 0;
            $('chart-message').textContent = '该时间窗口尚无有效样本，不填充虚构曲线。';
            $('history-description').textContent = `${preview ? '离线模拟历史' : '数据库历史'} · ${h.sampleCount} 样本 · 缺测不补值`;
            const v = h.points.filter(p => p.value !== null).map(p => p.value);
            $('history-stats').textContent = v.length ? `MIN ${fmt(Math.min(...v))} / MAX ${fmt(Math.max(...v))} ${h.unit}` : '—';
        }
        catch (e) {
            if (generation !== historyGeneration)
                return;
            s.history = previous;
            if(previous){$('chart-message').hidden=true;$('history-description').textContent='更新暂不可用 · 保留上次查询，时间轴未前移';}
            else{$('trend-chart').replaceChildren();$('chart-message').hidden=false;$('chart-message').textContent=e.message;}
            $('history-stats').textContent = previous?'最后有效历史':'查询失败';
        }
    }
    function showView(view) { document.body.classList.toggle('data-mode',view !== 'scene'); s.view = view; all('[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === view)); $('scene-section').hidden = view !== 'scene'; $('data-section').hidden = view === 'scene'; if (view === 'scene') {
        setTimeout(() => viewer?.render(), 30);
        return;
    } $('data-eyebrow').textContent = view === 'audit' ? 'AUDIT TRAIL' : 'ALARM CENTER'; $('data-title').textContent = view === 'audit' ? '操作记录' : '告警中心'; $('data-subtitle').textContent = view === 'audit' ? '规则变化、登录、确认与控制均在服务端留痕。' : '确认只表示已知悉，测量值恢复后告警才会关闭。'; $('alarm-state-filters').hidden = view !== 'alarms'; refreshData(); }
    function renderAlarms(items) {
        if (s.view !== 'alarms')
            return;
        const rows = items.filter(a => s.alarmFilter === 'all' || s.alarmFilter === 'active' && a.state !== 'resolved' || a.state === s.alarmFilter);
        $('data-content').innerHTML = rows.length ? `<table class="records-table"><thead><tr><th>级别 / 设备</th><th>告警内容</th><th>首次发生</th><th>处理状态</th><th>操作</th></tr></thead><tbody>${rows.map(a => `<tr><td><span class="status-badge ${a.severity === 'critical' ? 'alarm' : 'warning'}">${a.severity === 'critical' ? '告警' : '预警'}</span><small>${esc(a.device_id)}</small></td><td><strong>${esc(a.title)}</strong><small>${a.rule_code === 'OFFLINE' ? '心跳超时' : `规则阈值 ${esc(a.threshold)} ${esc(a.unit)}`}</small></td><td>${esc(date(a.opened_at))}</td><td>${states[a.state]}<small>${esc(a.acknowledged_by || '—')}</small></td><td>${a.state === 'open' ? `<button class="table-ack" data-ack="${esc(a.id)}">确认</button>` : `<button class="text-button" data-locate="${esc(a.device_id)}">定位设备 ↗</button>`}</td></tr>`).join('')}</tbody></table>` : `<div class="empty-state">${Lailin.icons('check')}<strong>此筛选下没有告警记录</strong><p>已恢复记录可在“全部”或“已恢复”中查看。</p></div>`;
    }
    async function refreshData() {
        if (s.view === 'alarms') {
            if (preview) {
                renderAlarms(s.snapshot.alarms);
                return;
            }
            try {
                const data = await api('/alarms?limit=100');
                renderAlarms(data.items);
            }
            catch (e) {
                error(e);
            }
        }
        else if (s.view === 'audit') {
            if (preview) {
                $('data-content').innerHTML = '<div class="empty-state"><strong>离线预览不包含登录和操作记录</strong><p>启动完整服务后，所有写操作可在此查询。</p></div>';
                return;
            }
            try {
                const data = await api('/audit?limit=100'), labels = { 'system.seed': '初始化目录', 'auth.login': '操作员登录', 'auth.logout': '退出登录', 'auth.failed': '登录失败', 'alarm.opened': '产生告警', 'alarm.resolved': '告警恢复', 'alarm.acknowledged': '确认告警', 'demo.scenario': '切换模拟工况', 'command.accepted': '接收控制指令', 'command.confirmed': '收到模拟回执', 'command.failed': '指令失败' };
                $('data-content').innerHTML = `<table class="records-table"><thead><tr><th>时间</th><th>操作人</th><th>动作</th><th>资产 / 详情</th></tr></thead><tbody>${data.items.map(a => `<tr><td>${date(a.at)}</td><td>${esc(a.actor)}</td><td><strong>${esc(labels[a.action] || a.action)}</strong><small>${esc(a.action)}</small></td><td>${esc(a.device_id || '系统')}<small title="${esc(a.detail)}">${esc(a.detail.slice(0, 72))}</small></td></tr>`).join('')}</tbody></table>`;
            }
            catch (e) {
                error(e);
            }
        }
    }
    function ack(id) { const a = s.snapshot?.alarms.find(x => x.id === id); needAuth(() => ask({ title: '确认已知悉此告警', description: `${a?.title || '所选告警'}。本操作只记录处理人和说明，不会清除越限状态，也不会代替现场处置。`, note: true, label: '确认告警', callback: async (note) => { await api(`/alarms/${id}/acknowledge`, { method: 'POST', body: { note } }); toast('告警已确认；等待监测值或通信状态实际恢复。'); applySnapshot(await api('/bootstrap')); } })); }
    function scenario(kind) { const id = s.selected, d = s.devices.get(id), labels = { alarm: '注入轴承过热告警', offline: '模拟网络通信中断', normal: '恢复健康工况' }, label = labels[kind] || '切换模拟工况'; needAuth(() => ask({ title: label, description: `目标：${d.name}（${id}）。${kind === 'offline' ? '停止该资产的模拟上报，由服务器超时规则判定通信中断；不会直接修改前端颜色。' : kind === 'alarm' ? '下一次模拟采样将依据该资产主指标驱动服务器告警规则。' : '下一次模拟采样将依据该资产状态驱动服务器恢复规则。'}此操作不会影响实物设备。`, callback: async () => { const r = await api('/demo/scenario', { method: 'POST', body: { deviceId: id, scenario: kind } }); toast(r.message); } })); }
    function control() {
        const d = s.devices.get(s.selected), body = { deviceId: d.id, action: d.type === 'light' ? 'setPower' : 'setGate', value: d.type === 'light' ? !d.powered : (d.controlState === 'open' ? 'closed' : 'open') };
        needAuth(() => ask({ title: `${$('device-control').textContent} · 模拟控制`, description: `${d.name}（${d.id}）。服务器将校验权限和在线状态；收到模拟设备回执后才显示成功。本案例不向实物下发命令。`, callback: async () => {
                const key = globalThis.crypto?.randomUUID ? crypto.randomUUID() : `cmd_${Date.now()}_${Math.random().toString(16).slice(2)}`;
                const c = await api('/commands', { method: 'POST', body, headers: { 'Idempotency-Key': key } });
                $('command-status').textContent = `指令 ${c.id.slice(0, 8)} 已接收，等待设备回执…`;
                for (let i = 0; i < 16; i++) {
                    await new Promise(r => setTimeout(r, 600));
                    const status = await api(`/commands/${c.id}`);
                    if (status.status === 'confirmed') {
                        if (s.selected === d.id)
                            $('command-status').textContent = status.message;
                        toast(status.message);
                        applySnapshot(await api('/bootstrap'));
                        return;
                    }
                    if (status.status === 'failed')
                        throw new Error(status.message || '指令执行失败');
                }
                throw new Error(`未在等待窗口内取得回执。指令 ${c.id} 状态未知，请通过指令查询接口核实，不要盲目重发。`);
            } }));
    }
    function exportHistory() { if (!s.history) {
        toast('没有可导出的历史查询结果。');
        return;
    } const h = s.history; const cell = v => `"${String(v ?? '').replace(/^([=+\-@])/, '\t$1').replaceAll('"', '""')}"`; const lines = [['asset_id', 'sample_bin_time', 'metric', 'mean', 'min', 'max', 'unit', 'count', 'sources', 'data_mode'], ...h.points.map(p => [h.deviceId, new Date(p.ts).toISOString(), h.metric, p.value, p.min, p.max, h.unit, p.count, p.sources.join('|'), h.mode])].map(row => row.map(cell).join(',')).join('\r\n'); const url = URL.createObjectURL(new Blob(['\uFEFF' + lines], { type: 'text/csv;charset=utf-8' })); const a = document.createElement('a'); a.href = url; a.download = `${h.deviceId}-history-${s.hours}h.csv`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast('已导出当前窗口聚合数据，包含缺测空值和数据来源。'); }
    async function loadModel() {
        try {
            await new Promise(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
            meta = globalThis.LAILIN_PREVIEW.meta;
            let buffer = null;
            validateBinding();
            viewer = Lailin.viewer.create($('scene-canvas'), meta, buffer, { onPick: id => select(id), onFrame: () => { positionMarkers(); if (!viewer?.state.lost)
                    $('graphics-error').hidden = true; }, onError: message => { $('graphics-error').textContent = message; $('graphics-error').hidden = false; } });
            viewer.select(s.selected);
            if (s.snapshot)
                viewer.setStates(s.snapshot.devices);
            $('model-loading').hidden = true;
            document.body.classList.add('scene-ready');
            $('model-stats').textContent = `WebGL 2 · ${(meta.stats.triangles / 1000).toFixed(0)}k 三角面 · ${meta.stats.assets} 资产`;
            const labels = [['01', '研发中心', [-36, 17, 24]], ['02', '生产车间 A', [-32, 11, -24]], ['03', '生产车间 B', [29, 10.2, -30]], ['04', '能源中心', [35, 7.8, 18]], ['05', '南门岗亭', [13, 4, 55]]];
            for (const [num, name, position] of labels) {
                const el = document.createElement('div');
                el.className = 'building-label';
                el.innerHTML = `<span>${num}</span>${name}`;
                $('building-labels').append(el);
                buildingLabels.push({ el, position });
            }
            renderMarkers();
            viewer.render();
        }
        catch (e) {
            $('model-loading').hidden = true;
            $('graphics-error').hidden = false;
            $('graphics-error').textContent = e.message;
            $('model-stats').textContent = '图形未就绪 · 资产与告警仍可使用';
            error(e);
        }
    }
    function bind() {
        const syncPanels=()=>{const leftVisible=innerWidth>1000||document.body.classList.contains('assets-open'),rightVisible=innerWidth<=620?document.body.classList.contains('inspector-open'):document.body.classList.contains('inspected')&&!document.body.classList.contains('hide-inspector');const left=document.querySelector('.sidebar'),right=$('right-panel');left.inert=!leftVisible;left.setAttribute('aria-hidden',String(!leftVisible));right.inert=!rightVisible;right.setAttribute('aria-hidden',String(!rightVisible));};
        new MutationObserver(syncPanels).observe(document.body,{attributes:true,attributeFilter:['class']});window.addEventListener('resize',syncPanels);syncPanels();
        const icons = { 'search-icon': 'search', 'mobile-assets': 'menu', 'toggle-night': 'moon', 'toggle-labels': 'tag', 'layers-button': 'layers', 'export-history': 'download' };
        for (const [id, icon] of Object.entries(icons))
            $(id).innerHTML = Lailin.icons(icon);
        all('[data-icon]').forEach(el => el.innerHTML = Lailin.icons(el.dataset.icon));
        for (const [type, t] of Object.entries(cat.types)) {
            const o = document.createElement('option');
            o.value = type;
            o.textContent = t.label;
            $('type-filter').append(o);
        }
        for (const [z, n] of Object.entries(cat.zones)) {
            const o = document.createElement('option');
            o.value = z;
            o.textContent = n;
            $('zone-filter').append(o);
        }
        $('asset-search').oninput = e => { s.query = e.target.value; renderList(); };
        $('type-filter').onchange = e => { s.type = e.target.value; renderList(); };
        $('zone-filter').onchange = e => { s.zone = e.target.value; renderList(); };
        all('[data-status]').forEach(b => b.onclick = () => { s.status = b.dataset.status; all('[data-status]').forEach(x => x.classList.toggle('active', x === b)); renderList(); });
        $('clear-filters').onclick = () => { s.type = s.zone = s.status = 'all'; s.query = ''; $('asset-search').value = ''; $('type-filter').value = 'all'; $('zone-filter').value = 'all'; all('[data-status]').forEach(b => b.classList.toggle('active', b.dataset.status === 'all')); renderList(); };
        $('focus-device').onclick = () => focus(false);
        $('isolate-device').onclick = () => viewer?.isolated ? home() : focus(true);
        $('view-home').onclick = () => home();
        $('view-top').onclick = () => home(true);
        $('reset-scene').onclick = () => home();
        $('tour-button').onclick = () => { if(!document.body.classList.contains('touring'))home(); const active=viewer?.toggleTour(); $('tour-button').classList.toggle('active',active); };
        $('view-energy').onclick = () => { home(); document.body.classList.add('energy-view'); document.querySelector('.scene-location b').textContent='能源工坊'; viewer?.energyView(); $('view-home').classList.remove('active'); $('view-energy').classList.add('active'); };
        $('section-toggle').onchange = () => viewer?.toggleSection();
        $('photo-button').onclick = () => { document.body.classList.toggle('photo-mode'); $('photo-button').classList.toggle('active',document.body.classList.contains('photo-mode')); };
        $('snapshot-button').onclick = () => viewer?.capture();
        $('export-model').onclick = async () => { try { $('export-model').disabled=true; await viewer?.exportGLB(); toast('已导出完整 GLB，资产编号保留在节点中。'); } catch(e){error(e);} finally{$('export-model').disabled=false;} };
        $('explode-device').onclick = () => { const active=viewer?.toggleExplode(); $('explode-device').classList.toggle('active',active); $('explode-device').textContent=active?'合拢结构':'展开结构'; };
        document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('dialog[open]')){document.body.classList.remove('photo-mode','assets-open','inspector-open');home();}});
        $('toggle-night').onclick = () => { if (!viewer)
            return; viewer.setNight(!viewer.night); document.body.classList.toggle('night', viewer.night); $('toggle-night').innerHTML = Lailin.icons(viewer.night ? 'sun' : 'moon'); $('toggle-night').setAttribute('aria-pressed', String(viewer.night)); };
        $('toggle-labels').onclick = () => { s.labels = !s.labels; $('toggle-labels').classList.toggle('active', s.labels); positionMarkers(); };
        $('layers-button').onclick = () => { $('layers-popover').hidden = !$('layers-popover').hidden; };
        $('layer-landscape').onchange = e => viewer?.setLayer('landscape', e.target.checked);
        $('layer-pipes').onchange = e => viewer?.setLayer('pipes', e.target.checked);
        $('high-quality').onchange = e => viewer?.quality(e.target.checked);
        all('[data-hours]').forEach(b => b.onclick = () => { s.hours = Number(b.dataset.hours); all('[data-hours]').forEach(x => x.classList.toggle('active', x === b)); loadHistory(); });
        $('export-history').onclick = exportHistory;
        all('[data-view]').forEach(b => b.onclick = () => showView(b.dataset.view));
        $('open-alarms').onclick = () => showView('alarms');
        $('refresh-data').onclick = refreshData;
        all('[data-alarm-state]').forEach(b => b.onclick = () => { s.alarmFilter = b.dataset.alarmState; all('[data-alarm-state]').forEach(x => x.classList.toggle('active', x === b)); refreshData(); });
        document.addEventListener('click', e => { const ackButton = e.target.closest('[data-ack]'); if (ackButton)
            ack(ackButton.dataset.ack); const locate = e.target.closest('[data-locate]'); if (locate) {
            select(locate.dataset.locate);
            showView('scene');
            focus(false);
        } const close = e.target.closest('[data-close]'); if (close)
            $(close.dataset.close).close(); });
        $('login-button').onclick = () => { if (preview) {
            toast('离线预览只读。完整项目提供操作员登录与审计。');
            return;
        } if (s.session.authenticated)
            ask({ title: '退出操作员会话', description: '退出后仍可浏览演示资产，写操作需要重新登录。', callback: async () => { await api('/auth/logout', { method: 'POST' }); s.session = { authenticated: false }; renderSession(); toast('已退出登录'); } });
        else
            needAuth(() => toast('操作员已登录')); };
        $('login-form').onsubmit = async (e) => { e.preventDefault(); if (authBusy)
            return; authBusy = true; $('submit-login').disabled = true; $('login-error').textContent = ''; try {
            s.session = await api('/auth/login', { method: 'POST', body: { username: $('login-username').value, password: $('login-password').value } });
            $('login-password').value = '';
            $('login-dialog').close();
            renderSession();
            const next = s.loginNext;
            s.loginNext = null;
            await next?.();
        }
        catch (e) {
            $('login-error').textContent = e.message;
        }
        finally {
            authBusy = false;
            $('submit-login').disabled = false;
        } };
        $('confirm-form').onsubmit = async (e) => { e.preventDefault(); const callback = confirmCallback, note = $('confirm-note').value; confirmCallback = null; $('confirm-dialog').close(); try {
            await callback?.(note);
        }
        catch (e) {
            error(e);
        } };
        $('demo-alarm').onclick = () => scenario('alarm');
        $('demo-offline').onclick = () => scenario('offline');
        $('demo-restore').onclick = () => scenario('normal');
        $('device-control').onclick = control;
        $('help-button').onclick = () => $('help-dialog').showModal();
        $('reconnect-button').onclick = reconnect;
        $('mobile-assets').onclick = () => { document.body.classList.toggle('assets-open'); document.body.classList.remove('inspector-open'); };
        $('mobile-account').onclick = () => $('login-button').click();
        $('close-sidebar').onclick = () => document.body.classList.remove('assets-open');
        $('close-inspector').onclick = () => { document.body.classList.remove('inspected'); document.body.classList.add('hide-inspector'); document.body.classList.remove('inspector-open'); };
        window.addEventListener('resize', () => { if (s.history)
            Lailin.chart($('trend-chart'), s.history, cat.types[s.devices.get(s.selected).type]); positionMarkers(); });
    }
    async function start() { bind(); renderList(); renderInspector(); loadModel(); if (preview) {
        applySnapshot(preview.snapshot);
        loadHistory();
    }
    else {
        try {
            s.session = await api('/auth/session');
            renderSession();
            await reconnect();
            loadHistory();
        }
        catch (e) {
            error(e);
        }
    } timers.push(setInterval(() => { $('clock').textContent = date(Date.now(), true); syncConnection(); }, 1000)); timers.push(setInterval(() => { if (!preview && s.view === 'scene')
        loadHistory(); }, 15000)); }
    function dispose() { if (destroyed)
        return; destroyed = true; stream?.close(); timers.forEach(clearInterval); historyAbort?.abort(); viewer?.dispose(); }
    window.addEventListener('pagehide', dispose, { once: true });
    window.addEventListener('pageshow', event => { if(event.persisted)location.reload(); });
    start().catch(error);
    return { get viewer() { return viewer; }, get state() { return { selected: s.selected, view: s.view, hours: s.hours, preview: s.preview, version: s.snapshot?.version, connected: s.connected, authenticated: s.session.authenticated, deviceCount: s.devices.size }; }, dispose };
})();
