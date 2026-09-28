"""Local TCP fixture for the RS-WS-N01-8-T register profile; not real hardware.

Optional control JSON: {"temperature": 25.0, "humidity": 56.0} or
{"registers": [658, 65435]}. Replace the file atomically to change readings.
Terminate/restart this process to simulate connection loss.
"""
import argparse
import asyncio
import json
from pathlib import Path

from pymodbus.server import ModbusTcpServer
from pymodbus.simulator import SimData, SimDevice, DataType


async def run(args):
    server = ModbusTcpServer(SimDevice(args.unit_id, SimData(0, values=[560, 250], datatype=DataType.REGISTERS)), address=('127.0.0.1', args.port))
    await server.serve_forever(background=True)
    print(json.dumps({'fixture': 'RS-WS-N01-8-T protocol simulator', 'port': args.port, 'realDevice': False}), flush=True)
    last = None
    try:
        while True:
            if args.control and args.control.exists():
                content = args.control.read_text(encoding='utf-8-sig')
                if content != last:
                    try:
                        values = json.loads(content)
                        regs = values.get('registers')
                        if regs is None:
                            regs = [round(values['humidity'] * 10), round(values['temperature'] * 10) & 0xffff]
                        if len(regs) != 2 or any(type(v) is not int or not 0 <= v <= 65535 for v in regs):
                            raise ValueError('Need two uint16 register values')
                        await server.async_setValues(args.unit_id, 3, 0, regs)
                        print(json.dumps({'registers': regs, 'realDevice': False}), flush=True)
                        last = content
                    except (ValueError, KeyError) as e:
                        print(json.dumps({'fixtureError': str(e)}), flush=True)
                        last = content
            await asyncio.sleep(.1)
    finally:
        await server.shutdown()


if __name__ == '__main__':
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--port', type=int, default=15020)
    p.add_argument('--unit-id', type=int, default=1)
    p.add_argument('--control', type=Path)
    try:
        asyncio.run(run(p.parse_args()))
    except KeyboardInterrupt:
        pass
