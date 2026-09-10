/* ui/icons.js */
/* Original line icons; no network assets or fonts. */
(globalThis.Lailin ||= {}).icons = name => {
    const paths = { camera: '<path d="M4 8h11v10H4zM15 11l5-3v10l-5-3M7 5h5"/>', sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>', moon: '<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/>', bolt: '<path d="m13 2-8 12h6l-1 8 9-13h-7z"/>', fan: '<circle cx="12" cy="12" r="2"/><path d="M11 10C5 7 9 1 13 4c2 1 1 5 0 6m1 2c5-5 9 1 5 4-2 1-5-1-6-2m-2 0c1 7-6 8-7 3 0-3 4-4 6-4"/>', drop: '<path d="M12 2S5 11 5 15a7 7 0 0 0 14 0c0-4-7-13-7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>', plug: '<path d="M8 3v5m8-5v5M6 8h12v4a6 6 0 0 1-12 0ZM12 18v4"/>', gate: '<path d="M3 21V9h5v12M8 10h13v4H8M11 10l-3 4m8-4-4 4m8-4-4 4M2 21h8"/>', leaf: '<path d="M20 3C8 1 3 6 4 13c1 8 14 7 16-10ZM4 21 15 8M8 15l-1-5m4 2h5"/>', cube: '<path d="m12 3 9 5v9l-9 5-9-5V8ZM3 8l9 5 9-5m-9 5v9m-5-17 10 6"/>', signal: '<path d="M4 19v-3m5 3V12m5 7V8m5 11V4"/>', alert: '<path d="m12 3 10 18H2ZM12 9v5m0 3v1"/>', search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>', locate: '<circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>', layers: '<path d="m12 3 10 6-10 6L2 9ZM2 13l10 6 10-6M2 17l10 6 10-6"/>', tag: '<path d="M3 3h8l10 10-8 8L3 11ZM7 7h.01"/>', download: '<path d="M12 3v13m-5-5 5 5 5-5M4 16v5h16v-5"/>', check: '<path d="m5 12 4 4L19 6"/>', menu: '<path d="M4 5h16M4 12h16M4 19h16"/>', user: '<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>', history: '<path d="M3 3v6h6M3 9a9 9 0 1 1 1 9M12 7v6l4 2"/>' };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.cube}</svg>`;
};

;
/* ui/charts.js */
/* Honest binned history: null gaps remain disconnected, no visual interpolation. */
(globalThis.Lailin ||= {}).chart = (svg, history, type) => {
    const ns = 'http://www.w3.org/2000/svg', width = Math.max(250, svg.clientWidth || 680), height = Math.max(65, svg.clientHeight || 93);
    svg.replaceChildren();
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    const node = (tag, attrs, text) => { const el = document.createElementNS(ns, tag); Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v)); if (text !== undefined)
        el.textContent = text; svg.append(el); return el; };
    const values = history.points.filter(p => p.value !== null).map(p => p.value);
    if (!values.length)
        return;
    const left = 31, right = 8, top = 6, bottom = 18, plotW = width - left - right, plotH = height - top - bottom;
    let min = Math.min(...values), max = Math.max(...values);
    if (type.alarm !== null && type.alarm < max * 1.5)
        max = Math.max(max, type.alarm);
    const pad = Math.max((max - min) * .2, 2);
    min = Math.max(type.range[0], min - pad);
    max += pad;
    const x = t => left + (t - history.from) / (history.to - history.from) * plotW, y = v => top + (max - v) / (max - min) * plotH;
    for (let i = 0; i < 3; i++) {
        const value = min + (max - min) * i / 2, yy = y(value);
        node('line', { x1: left, y1: yy, x2: width - right, y2: yy, stroke: '#e1e8d9', 'stroke-dasharray': '3 4' });
        node('text', { x: left - 7, y: yy + 3, 'text-anchor': 'end', fill: '#96a58c', 'font-size': 8 }, Number(value.toFixed(0)).toString());
    }
    if (type.alarm !== null && type.alarm >= min && type.alarm <= max) {
        node('line', { x1: left, y1: y(type.alarm), x2: width - right, y2: y(type.alarm), stroke: '#c49978', 'stroke-dasharray': '4 4', 'stroke-width': .8 });
        node('text', { x: width - right, y: y(type.alarm) - 4, 'text-anchor': 'end', fill: '#b08e71', 'font-size': 7 }, `告警 ${type.alarm} ${type.unit}`);
    }
    let segments = [], current = [];
    for (const p of history.points) {
        if (p.value === null) {
            if (current.length)
                segments.push(current);
            current = [];
        }
        else
            current.push(p);
    }
    if (current.length)
        segments.push(current);
    for (const segment of segments) {
        const d = segment.map((p, i) => `${i ? 'L' : 'M'}${x(p.ts).toFixed(2)},${y(p.value).toFixed(2)}`).join(' ');
        if (segment.length > 1) {
            node('path', { d: `${d} L${x(segment.at(-1).ts)},${height - bottom} L${x(segment[0].ts)},${height - bottom}Z`, fill: '#65856f', opacity: .08 });
            node('path', { d, fill: 'none', stroke: '#718d66', 'stroke-width': 1.7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
        }
        else
            node('circle', { cx: x(segment[0].ts), cy: y(segment[0].value), r: 1.3, fill: '#718d66' });
    }
    for (let i = 0; i < 5; i++) {
        const t = history.from + (history.to - history.from) * i / 4;
        node('text', { x: x(t), y: height - 3, 'text-anchor': i === 0 ? 'start' : i === 4 ? 'end' : 'middle', fill: '#a0ad95', 'font-size': 7 }, new Date(t).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }
    svg.setAttribute('aria-label', `${history.deviceId} ${history.metric}，${history.sampleCount} 个有效样本，最低 ${Math.min(...values)}，最高 ${Math.max(...values)} ${history.unit}。缺测区间不补值。`);
};

;
