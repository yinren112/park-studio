# Modbus 监测试点

参考点表为建大仁科 RS-WS-N01-8-T。软件提供 TCP 协议模拟和 RTU 采集两种配置；当前没有连接实物传感器，RTU 接线、串口及 24 小时实物运行待验收。温度进入历史和告警，湿度仅实时显示。ENV-01 是台架点位，三维坐标是虚拟展示位置。

## 点表

| 项目 | 配置 |
|---|---|
| 设备地址 | 1（交货时复核） |
| 串口 | 4800 baud，8 数据位、无校验、1 停止位 |
| 功能码 | 03，读取保持寄存器；采集器没有写设备功能 |
| 湿度 | 协议地址 0 / 手册 40001，uint16，除以 10，%RH |
| 温度 | 协议地址 1 / 手册 40002，int16 二进制补码，除以 10，°C |
| 读取方式 | 从 0 开始连续读取 2 个寄存器，寄存器内高字节在前 |
| 型号标称范围 | 温度 -20～60°C，湿度 0～80%RH；超出配置范围拒绝，不上报零值 |
| 采样 | 每 2 秒读取；采集完成时间作为 sampleAt，设备没有提供内部采样时间戳 |
| 演示阈值 | 温度预警 28°C、告警 30°C、恢复 27°C；仅用于台架演示 |

厂商参考帧：请求 `01 03 00 00 00 02 C4 0B`；响应例子里的湿度 `0x0292` 为 65.8%RH，温度 `0xFF9B` 为 -10.1°C。地址和格式来源：[厂商型号与通信说明](https://www.renkeer.com/product/modbus-rtu-temperature-sensor/)，2026-09-22 核对。厂商页面未给出明确的测量失败哨兵码；本程序按响应异常、长度和量程拒绝无效读数，不发明某个数值是厂商故障码。

## Windows 启动

前置：Python 3.11+，支持 WebGL 2 的 Edge/Chrome。源码运行可以先联网安装；本地交付 ZIP 带两份 wheel，可离线安装，不包含 Python 和浏览器安装包。

```powershell
python -m venv .venv-modbus
.\.venv-modbus\Scripts\python.exe -m pip install -r adapters\requirements.txt
.\.venv-modbus\Scripts\python.exe tools\run_modbus_pilot.py
```

打包版双击 `启动Modbus演示.cmd`。首次启动只从随包 `wheelhouse/` 安装依赖。页面在 `http://127.0.0.1:18868`，用户名为 `operator`；独立随机密码和网关 token 在本机 `data/modbus-simulator/access.json`，不要公开该文件。终端按 Ctrl+C 结束本次启动的服务、模拟设备和采集程序。其他正在运行的服务不会被停止。

默认端口占用或被系统保留时，启动器会明确失败，不抢占其他进程。可指定可用端口：`powershell -NoProfile -ExecutionPolicy Bypass -File tools/bootstrap_modbus.ps1 -Port 18870 -ModbusPort 25020`；或给 Python 启动器传 `--port 18870 --modbus-port 25020`。

模拟器值在 `data/modbus-simulator/registers.json`，例如：

```json
{"temperature": 33.3, "humidity": 56.0}
```

编辑后保存，在浏览器选择 ENV-01。确认告警后保持越限；改回 25°C 后恢复。程序日志位于同目录，采集日志包含原始寄存器、解码结果、序号和接入回执。

## 接实物时

1. 按实物铭牌和厂商交货手册核对型号、供电、引脚和通信参数。复制 `adapters/modbus.rtu.example.json` 为 `adapters/modbus.local.json`，填写真实 COM 口及复核后的点表。此副本被 Git 忽略。
2. 先用厂商工具检查同一寄存器，再关闭厂商串口工具，避免占用端口。
3. 执行下方命令。RTU 模式不启动模拟器，不在读失败时回退模拟数据。

```powershell
.\.venv-modbus\Scripts\python.exe tools\run_modbus_pilot.py --profile rtu --config adapters\modbus.local.json
```

页面默认在 `http://127.0.0.1:8769`，账号文件、数据库、采集序号均在独立的 `data/modbus-rtu/`。界面标注“Modbus RTU · 台架采集”只表示配置的采集路径；硬件验收结果需要型号、接线和实际读取证据另行确认。

模拟与实物数据库不得混用。每份数据库保存来源配置；不同来源或旧 ENV-01 的 PM2.5 语义会被拒绝启动。默认模拟园区使用新的 `data/park-v2.1.sqlite3`，原 `data/park.sqlite3` 保留；没有自动迁移或删除旧数据。

## 重试和故障处理

- `applied` 是新样本；`duplicate` 是同样本重试；`late` 只进历史，不能更新在线状态。
- 采集器在 HTTP 请求前原子保存序号和 pending payload。回执不明确时重发原 payload；重启继续处理它，序号不归零。一个状态文件只能有一个采集进程。
- 只保留一个待确认样本。本期不保证断网期间完整存储所有测量值；恢复后缺测如实保留。
- 401/422/409 等永久错误会非零退出并保留待确认样本，检查 token、点表和日志后再启动。连接失败执行有界等待和重连；不补零、不假刷新采样时间。
- 更换配置或目标服务器时使用独立状态文件。不要通过删除仍在使用的状态文件解决序号冲突。
- 采集器外发 HTTP 限于本机；远程接入使用 HTTPS。默认不安装系统服务、不开放 Modbus 到公网。

## 重复验收

系统 Python 中需要 Playwright 及可用的 Edge；采集依赖留在独立虚拟环境。

```powershell
python tests\e2e_modbus.py
```

输出在 `output/acceptance/modbus-时间/`，退出码 0 才表示整轮通过。检查 `report.json`、截图、CSV、浏览器 trace、视频和 `SHA256.json`；报告明确 `realDevicesConnected: false`。用例及失败模式见 [验收合同](MODBUS_ACCEPTANCE.md)。脚本使用独立数据库与端口，并结束它创建的子进程。

实物验收需追加：记录型号/序列号/手册版本及接线照片；对照厂商工具；至少 3 次断线恢复；一次服务重启；24 小时日志统计。没有这些记录，不把软件 PASS 改写为实物 PASS。

## 备份与恢复

先 Ctrl+C 停止该试点启动器，确认子进程结束，再完整备份对应 `data/modbus-simulator/` 或 `data/modbus-rtu/`。保留 SQLite 文件及可能存在的 WAL/SHM、采集状态和账号文件。恢复时使用同一配置和来源；恢复目录后重新启动。备份包含凭据，应只保存在授权位置，不能放入对外演示 ZIP。

## 构建交付包

```powershell
.\.venv-modbus\Scripts\python.exe -m pip download -r adapters\requirements.txt --dest output\modbus-wheels
python tools\package_pilot.py
```

打包器从明确白名单取文件，排除既有 data、虚拟环境、客户信息、开发日志和凭据。包内保留许可证、脱敏示例和文件哈希。Python/操作系统/浏览器变化后应在目标环境重验。
