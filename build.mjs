import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const dir=path.dirname(fileURLToPath(import.meta.url));
const read=f=>readFile(path.join(dir,f),'utf8');
const result=await build({entryPoints:[path.join(dir,'src/main.js')],bundle:true,write:false,minify:true,format:'iife',target:['es2022'],legalComments:'inline',logLevel:'warning'});
let html=await read('src/template.html');
const css=await read('src/studio.css');
html=html.replace('</head>',`<style>${css}</style></head>`);
const seed=JSON.parse(await read('src/seed.json'));
const context={};vm.createContext(context);vm.runInContext(await read('src/catalog.js'),context);
seed.snapshot.devices=seed.snapshot.devices.map(d=>({...d,...context.Lailin.catalog.assets.find(a=>a.id===d.id)}));
seed.snapshot.site=context.Lailin.catalog.site;
seed.meta={groups:seed.snapshot.devices.map(a=>({name:a.modelNode,assetId:a.id,center:a.position,max:a.position,min:a.position})),stats:{triangles:0,assets:seed.snapshot.devices.length}};
const previewData=`globalThis.LAILIN_PREVIEW=${JSON.stringify(seed).replaceAll('<','\\u003c')};`;
const previewRuntime=result.outputFiles[0].text.replaceAll('</script','<\\/script');
const standalone=html.replace('</body>',()=>`<!--SERVER_RUNTIME--><script>${previewData}</script><script>${previewRuntime}</script></body>`);
const web=html.replace('</body>',()=>`<!--SERVER_RUNTIME--><script src="./preview-data.js"></script><script src="./preview-runtime.js"></script></body>`);
await Promise.all([
  writeFile(path.join(dir,'lailin-park-preview.html'),standalone),
  writeFile(path.join(dir,'index.html'),web),
  writeFile(path.join(dir,'preview-data.js'),previewData),
  writeFile(path.join(dir,'preview-runtime.js'),previewRuntime)
]);
await mkdir(path.join(dir,'data'),{recursive:true});
await writeFile(path.join(dir,'catalog.json'),JSON.stringify(context.Lailin.catalog,null,2));
console.log(`Built lailin-park-preview.html · ${(Buffer.byteLength(standalone)/1024/1024).toFixed(2)} MB · self-contained`);
