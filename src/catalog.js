/* shared/catalog.js */
/* Single authoritative asset catalog. Units are metres, Y up, front entrance at +Z. */
(globalThis.Lailin ||= {}).catalog = (() => {
    const types = {
        camera: { label: '视频安防', icon: 'camera', metric: 'latency', metricLabel: '链路延时', unit: 'ms', range: [0, 5000], base: 38, warning: 180, alarm: 400, recovery: 130 },
        light: { label: '道路照明', icon: 'sun', metric: 'power', metricLabel: '有功功率', unit: 'W', range: [0, 300], base: 56, warning: 95, alarm: 120, recovery: 85 },
        meter: { label: '配电监测', icon: 'bolt', metric: 'temperature', metricLabel: '柜内温度', unit: '°C', range: [-40, 150], base: 34, warning: 55, alarm: 70, recovery: 48 },
        hvac: { label: '暖通空调', icon: 'fan', metric: 'temperature', metricLabel: '出风温度', unit: '°C', range: [-30, 120], base: 18, warning: 32, alarm: 42, recovery: 28 },
        pump: { label: '给排水', icon: 'drop', metric: 'temperature', metricLabel: '轴承温度', unit: '°C', range: [-20, 150], base: 43, warning: 65, alarm: 78, recovery: 58 },
        charger: { label: '充电设施', icon: 'plug', metric: 'temperature', metricLabel: '模块温度', unit: '°C', range: [-40, 130], base: 36, warning: 55, alarm: 72, recovery: 48 },
        gate: { label: '出入管理', icon: 'gate', metric: 'cycles', metricLabel: '累计通行', unit: '次', range: [0, 100000000], base: 260, warning: null, alarm: null, recovery: null },
        sensor: { label: '环境感知', icon: 'leaf', metric: 'pm25', metricLabel: 'PM2.5', unit: 'μg/m³', range: [0, 2000], base: 24, warning: 75, alarm: 150, recovery: 60 },
        bench: { label: '台架环境', icon: 'leaf', metric: 'temperature', metricLabel: '探头温度', unit: '°C', range: [-20, 60], base: 25, warning: 28, alarm: 30, recovery: 27 },
    };
    const assets = [];
    const zones = { A: '研发办公区', B: '生产物流区', C: '能源设备区', D: '道路与公共区' };
    const prefixes = { camera: 'CAM', light: 'LGT', meter: 'PWR', hvac: 'AHU', pump: 'PMP', charger: 'EV', gate: 'GAT', sensor: 'ENV' };
    function add(type, coords, zone, label) {
        const i = assets.filter(d => d.type === type).length + 1, id = `${prefixes[type]}-${String(i).padStart(2, '0')}`;
        assets.push({ id, type, name: label || `${types[type].label} ${String(i).padStart(2, '0')}`, zone, zoneName: zones[zone], position: coords,
            modelNode: `asset/${id}`, serial: `LL-2609-${prefixes[type]}-${String(i).padStart(4, '0')}`, manufacturer: '来霖 · 演示资产',
            installedAt: '2026-06-01', maintenanceDue: '2026-12-01', protocol: type === 'camera' ? 'ONVIF / 网关转发' : type === 'meter' ? 'Modbus RTU / 网关转发' : 'MQTT / 网关转发',
            source: 'simulated', owner: '园区设施运维组', metric: types[type].metric, unit: types[type].unit });
    }
    [[-63, 0, 44], [63, 0, 44], [-63, 0, -44], [63, 0, -44], [-6, 0, 6.8], [8, 0, 46.5]].forEach((p, i) => add('camera', p, 'D', ['西南道路球机', '东南道路枪机', '物流入口摄像机', '东北道路摄像机', '中央步道摄像机', '南门出入口摄像机'][i]));
    [[-65, 0, 27], [-65, 0, -4.6], [-65, 0, -27], [65, 0, 26], [65, 0, -4.6], [65, 0, -26], [-43, 0, 47], [-19, 0, 47], [22, 0, -47], [45, 0, -47]].forEach(p => add('light', p, 'D'));
    [[51, 0, 9], [51, 0, 12], [51, 0, 15], [-11, 0, -7]].forEach((p, i) => add('meter', p, i < 3 ? 'C' : 'B', `低压配电柜 ${i + 1}`));
    [[-45, 16.5, 18], [-34, 16.5, 18], [20, 12.0, -29], [31, 12.0, -29]].forEach((p, i) => add('hvac', p, i < 2 ? 'A' : 'B', `屋顶空调机组 ${i + 1}`));
    [[27, 0, 31.2], [33, 0, 31.2], [39, 0, 31.2], [45, 0, 31.2]].forEach((p, i) => add('pump', p, 'C', `循环水泵 P-${String(i + 1).padStart(2, '0')}`));
    [[19, 0, 41.1], [26, 0, 41.1], [33, 0, 41.1], [40, 0, 41.1], [47, 0, 41.1], [54, 0, 41.1]].forEach((p, i) => add('charger', p, 'C', `双枪充电桩 ${i + 1}`));
    [[-4.4, 0, 54.8], [4.4, 0, 54.8]].forEach((p, i) => add('gate', p, 'D', i ? '南门出口道闸' : '南门入口道闸'));
    [[3.5, 0, 30], [-11, 0, 24], [-5, 0, -30], [55, 0, -13]].forEach((p, i) => add('sensor', p, i === 1 ? 'A' : 'D', `微环境监测站 ${i + 1}`));
    Object.assign(assets.find(a => a.id === 'ENV-01'), {type: 'bench', name: '台架温湿度探头', metric: 'temperature', unit: '°C', protocol: 'Modbus RTU / TCP 协议模拟', serial: '台架型号与序列号待实物核验', manufacturer: '参考点表：建大仁科 RS-WS-N01-8-T', installedAt: null, maintenanceDue: '按实物手册', owner: '台架验证', locationNote: '虚拟展示位置，不代表实物园区', historyNote: '温度留存历史；湿度仅实时显示'});
    return { types, assets, zones, site: { name: '来霖智造园', width: 164, depth: 124, area: 20336, coordinateSystem: 'local-meters-y-up', version: '2.1.0', fictional: true } };
})();

;
