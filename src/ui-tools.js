/* ui/charts.js */
/* Honest binned history: null gaps remain disconnected, no visual interpolation. */
(globalThis.Lailin ||= {}).chart = (svg, history, type) => {
    const ns = 'http://www.w3.org/2000/svg', width = Math.max(240, svg.clientWidth || 300), height = Math.max(65, svg.clientHeight || 96);
    svg.replaceChildren();
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    const node = (tag, attrs, text) => { const el = document.createElementNS(ns, tag); Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v)); if (text !== undefined)
        el.textContent = text; svg.append(el); return el; };
    const values = history.points.filter(p => p.value !== null).map(p => p.value);
    if (!values.length)
        return;
    const left = 28, right = 4, top = 8, bottom = 18, plotW = width - left - right, plotH = height - top - bottom;
    let min = Math.min(...values), max = Math.max(...values);
    if (type.alarm !== null && type.alarm < max * 1.5)
        max = Math.max(max, type.alarm);
    const pad = Math.max((max - min) * .2, 2);
    min = Math.max(type.range[0], min - pad);
    max += pad;
    const x = t => left + (t - history.from) / (history.to - history.from) * plotW, y = v => top + (max - v) / (max - min) * plotH;
    for (let i = 0; i < 3; i++) {
        const value = min + (max - min) * i / 2, yy = y(value);
        node('line', { x1: left, y1: yy, x2: width - right, y2: yy, class: 'chart-grid' });
        node('text', { x: left - 6, y: yy + 4, 'text-anchor': 'end', class: 'chart-text' }, Number(value.toFixed(0)).toString());
    }
    if (type.alarm !== null && type.alarm >= min && type.alarm <= max) {
        node('line', { x1: left, y1: y(type.alarm), x2: width - right, y2: y(type.alarm), class: 'chart-limit' });
        node('text', { x: width - right, y: y(type.alarm) - 4, 'text-anchor': 'end', class: 'chart-limit-text' }, `告警 ${type.alarm}`);
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
            node('path', { d: `${d} L${x(segment.at(-1).ts)},${height - bottom} L${x(segment[0].ts)},${height - bottom}Z`, class: 'chart-area' });
            node('path', { d, class: 'chart-line' });
        }
        else
            node('circle', { cx: x(segment[0].ts), cy: y(segment[0].value), r: 1.5, class: 'chart-dot' });
    }
    for (let i = 0; i < 3; i++) {
        const t = history.from + (history.to - history.from) * i / 2;
        node('text', { x: x(t), y: height - 2, 'text-anchor': i === 0 ? 'start' : i === 2 ? 'end' : 'middle', class: 'chart-text' }, new Date(t).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }
    svg.setAttribute('aria-label', `${history.deviceId} ${history.metric}，${history.sampleCount} 个有效样本，最低 ${Math.min(...values)}，最高 ${Math.max(...values)} ${history.unit}。缺测区间不补值。`);
};

;
