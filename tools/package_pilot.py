"""Build a local pilot ZIP from a whitelist; never includes data or credentials."""
import hashlib
import json
from pathlib import Path
import shutil
import time
import zipfile

root=Path(__file__).resolve().parents[1]
out=root/'output/delivery'/time.strftime('%Y%m%d-%H%M%S')
target=out/'ParkStudio-Modbus-Pilot';target.mkdir(parents=True)
for name in ['server.py','catalog.json','index.html','studio.css','preview-data.js','preview-runtime.js','README.md','LICENSE','THIRD_PARTY_LICENSES.txt','启动Modbus演示.cmd','启动园区.cmd','停止园区.cmd','start.ps1','stop.ps1','build.mjs','package.json','package-lock.json']:
    shutil.copy2(root/name,target/name)
for folder,pattern in [('src','*.json'),('src','*.js'),('src','*.css'),('src','*.html'),('adapters','*.py'),('adapters','*.example.json'),('adapters','requirements.txt'),('tools','modbus_fixture.py'),('tools','run_modbus_pilot.py'),('tools','bootstrap_modbus.ps1'),('tests','e2e_modbus.py'),('docs','MODBUS*.md'),('docs','CAPABILITY.md'),('docs','QA_AND_BENCHMARKS.md'),('docs/assets','*.png')]:
    for src in (root/folder).glob(pattern):
        dest=target/src.relative_to(root);dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,dest)
wheels=list((root/'output/modbus-wheels').glob('*.whl'))
if len(wheels)!=2:raise SystemExit('First download the pinned dependencies to output/modbus-wheels.')
(target/'wheelhouse').mkdir()
for wheel in wheels:shutil.copy2(wheel,target/'wheelhouse'/wheel.name)
manifest={str(p.relative_to(target)):hashlib.sha256(p.read_bytes()).hexdigest() for p in target.rglob('*') if p.is_file()}
(target/'MANIFEST.sha256.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
archive=out/'ParkStudio-Modbus-Pilot.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    for p in target.rglob('*'):
        if p.is_file():z.write(p,p.relative_to(out))
print(json.dumps({'directory':str(target),'zip':str(archive),'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'files':len(manifest)},ensure_ascii=False))
