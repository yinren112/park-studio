import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const dir=path.dirname(fileURLToPath(import.meta.url));
const read=f=>readFile(path.join(dir,f),'utf8');
const result=await build({entryPoints:[path.join(dir,'src/main.js')],bundle:true,write:false,minify:true,format:'iife',target:['es2022'],legalComments:'inline',logLevel:'warning'});
// Static site = index.html + studio.css + preview-data.js + preview-runtime.js.
// server.py serves the same four files and injects the live-mode flag at <!--SERVER_RUNTIME-->.
const html=await read('src/template.html');
const css=await read('src/studio.css');
const seed=JSON.parse(await read('src/seed.json'));
const context={};vm.createContext(context);vm.runInContext(await read('src/catalog.js'),context);
seed.snapshot.devices=seed.snapshot.devices.map(d=>({...d,...context.Lailin.catalog.assets.find(a=>a.id===d.id)}));
seed.snapshot.site=context.Lailin.catalog.site;
seed.meta={groups:seed.snapshot.devices.map(a=>({name:a.modelNode,assetId:a.id,center:a.position,max:a.position,min:a.position})),stats:{triangles:0,assets:seed.snapshot.devices.length}};
const previewData=`globalThis.LAILIN_PREVIEW=${JSON.stringify(seed).replaceAll('<','\\u003c')};`;
const previewRuntime=result.outputFiles[0].text;
const web=html.replace('</body>',()=>`<!--SERVER_RUNTIME--><script src="./preview-data.js"></script><script src="./preview-runtime.js"></script></body>`);
await Promise.all([
  writeFile(path.join(dir,'index.html'),web),
  writeFile(path.join(dir,'studio.css'),css),
  writeFile(path.join(dir,'preview-data.js'),previewData),
  writeFile(path.join(dir,'preview-runtime.js'),previewRuntime)
]);
await mkdir(path.join(dir,'data'),{recursive:true});
await writeFile(path.join(dir,'catalog.json'),JSON.stringify(context.Lailin.catalog,null,2));
const kb=f=>(Buffer.byteLength(f)/1024).toFixed(0);
console.log(`Built index.html ${kb(web)} KB · studio.css ${kb(css)} KB · preview-data.js ${kb(previewData)} KB · preview-runtime.js ${kb(previewRuntime)} KB`);
