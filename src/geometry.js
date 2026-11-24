import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const V = (x=0,y=0,z=0) => new T.Vector3(x,y,z);
let seed=71823;
export function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
const geos = new Map();
export const materials = {};
export function material(name,color,roughness=.65,metalness=0,extra={}){
  const Material=extra.clearcoat!==undefined?T.MeshPhysicalMaterial:T.MeshStandardMaterial;
  return materials[name] ||= new Material({name,color,roughness,metalness,...extra});
}
// Tileable canvas textures. Each uses its own seeded generator so texture work never shifts the
// scene layout that is driven by random().
export function surface(name,base,scale=1){
 let st=[...name].reduce((h,ch)=>Math.imul(h^ch.charCodeAt(0),16777619)>>>0,2166136261);
 const rnd=()=>{st=(Math.imul(st,1664525)+1013904223)>>>0;return st/4294967296;};
 const N=['grass','pavers','asphalt','district'].includes(name)?512:256;
 const c=document.createElement('canvas');c.width=c.height=N;const ctx=c.getContext('2d');
 ctx.fillStyle=base;ctx.fillRect(0,0,N,N);
 const wrap=draw=>{for(const dx of [-N,0,N])for(const dy of [-N,0,N]){ctx.save();ctx.translate(dx,dy);draw();ctx.restore();}};
 const blob=(x,y,r,rgb,a)=>{const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(${rgb},${a})`);g.addColorStop(1,`rgba(${rgb},0)`);ctx.fillStyle=g;wrap(()=>ctx.fillRect(x-r,y-r,r*2,r*2));};
 const S=N/256;
 // Low-frequency variation first, fine grain on top.
 if(name==='grass')for(let i=0;i<70;i++)blob(rnd()*N,rnd()*N,(30+rnd()*110)*S,rnd()>.55?'226,232,150':rnd()>.5?'40,70,30':'120,110,60',.08+rnd()*.1);
 if(name==='asphalt'){for(let i=0;i<40;i++)blob(rnd()*N,rnd()*N,(25+rnd()*90)*S,rnd()>.5?'255,255,255':'20,22,20',.035+rnd()*.05);
  for(let i=0;i<6;i++){ctx.fillStyle=`rgba(20,22,20,${.04+rnd()*.04})`;const x=rnd()*N,y=rnd()*N,w=(20+rnd()*60)*S,h=(15+rnd()*40)*S;wrap(()=>ctx.fillRect(x,y,w,h));}}
 if(name==='district'||name==='weathered'){const k=name==='district'?.6:1;for(let i=0;i<60;i++)blob(rnd()*N,rnd()*N,(20+rnd()*60)*S,rnd()>.5?'255,255,255':'40,45,40',(.035+rnd()*.04)*k);
  for(let i=0;i<40;i++){ctx.fillStyle=`rgba(30,35,30,${.015+rnd()*.03})`;const x=rnd()*N,y=rnd()*N,h=(30+rnd()*90)*S;wrap(()=>ctx.fillRect(x,y,1+rnd()*2,h));}}
 if(name==='pavers'){
  // 1 m slabs (64 px) with their own tone, darker joints, faint staining.
  const cell=N/8;for(let i=0;i<8;i++)for(let j=0;j<8;j++){const v=rnd();ctx.fillStyle=`rgba(${v>.5?'255,255,255':'60,55,45'},${.03+rnd()*.06})`;ctx.fillRect(i*cell,j*cell,cell,cell);}
  for(let i=0;i<12;i++)blob(rnd()*N,rnd()*N,(30+rnd()*70)*S,'80,75,60',.05+rnd()*.05);
 }
 const grains=name==='grass'?40000:18000*S*S;
 for(let i=0;i<grains;i++){const v=rnd();ctx.fillStyle=`rgba(${v>.5?'255,255,255':'0,0,0'},${rnd()*(name==='grass'?.1:.055)})`;ctx.fillRect(rnd()*N,rnd()*N,1+rnd()*1.2*S,1+rnd()*1.2*S);}
 if(name==='pavers'){const cell=N/8;ctx.fillStyle='rgba(40,36,28,.28)';for(let i=0;i<=8;i++){ctx.fillRect(i*cell-1,0,2,N);ctx.fillRect(0,i*cell-1,N,2);}}
 const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(scale,scale);map.anisotropy=8;return map;
}
export function palette(){
 material('stone','#c8c1af',.92,0,{map:surface('stone','#e5e0d5',2),bumpScale:.013});
 materials.stone.bumpMap=materials.stone.map;
 material('concrete','#ece9df',.8,.02,{map:surface('concrete','#edece6',1)});
 material('ivory','#eee7d7',.43,.13);
 material('roof','#bec1b7',.83,.15,{map:surface('weathered','#f2f2ec',1)});
 material('dark','#263937',.56,.55);
 material('metal','#9ba8a4',.32,.82);
 material('copper','#a99572',.42,.62);
 material('terra','#b96e48',.83,.1);
 material('glass','#2b4749',.1,.28,{envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.04,ior:1.5});
 material('glassLight','#5c8684',.19,.66,{envMapIntensity:1.5});
 material('black','#101f21',.62,.3);
 material('asphalt','#7c837d',.94,0,{map:surface('asphalt','#b2b3aa',8),bumpScale:.03});materials.asphalt.bumpMap=materials.asphalt.map;
 material('asphaltWorn','#646b66',.9,0,{map:materials.asphalt.map});materials.asphaltWorn.userData.worldUV=10;
 material('paving','#e2ddcb',.84,0,{map:surface('pavers','#dfdacb',5)});
 material('grass','#889770',1,0,{map:surface('grass','#b0b590',6)});
 material('districtWall','#a5b2ad',.88,.03);
 material('districtGlass','#567275',.24,.25,{envMapIntensity:.8});
 material('districtRoof','#a3afa9',.9,.08,{map:surface('district','#f0f0ea',1)});
 material('hedge','#344f30',.96);
 material('white','#e6e5d3',.75);
 material('water','#406e69',.14,.2,{envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.09,ior:1.33});
 material('solar','#1b3c47',.38,.16,{envMapIntensity:.35});
 material('roofGlass','#355958',.32,.08,{envMapIntensity:.3});
 material('pump','#236b67',.43,.35,{clearcoat:.18,clearcoatRoughness:.22});
 const cast=surface('cast','#808080',1);cast.colorSpace=T.NoColorSpace;materials.pump.bumpMap=cast;materials.pump.bumpScale=.002;materials.pump.userData.worldUV=.3;
 material('pipe','#497975',.36,.7);
 material('hydrant','#b3352c',.55,.25);
 material('paintBlue','#3a4d5e',.42,.45);
 material('accessible','#3f6d9e',.9,0);
 material('red','#ad583a',.5,.4);
 material('amber','#e7b25c',.4,.2,{emissive:'#efb955',emissiveIntensity:.2});
 material('lamp','#fff1cd',.3,.1,{emissive:'#ffe3ae',emissiveIntensity:1});
 material('windowLight','#6f8272',.5,.15,{emissive:'#ffd092',emissiveIntensity:0});
 material('rubber','#202823',.93);
 material('bark','#675445',1);
 material('parkingPaint','#496552',.94,0,{map:materials.asphalt.map});materials.parkingPaint.userData.worldUV=10;
 for(const [key,metres] of [['stone',1.6],['concrete',1],['paving',8],['asphalt',10],['grass',16],['roof',9],['districtRoof',28]]){materials[key].userData.worldUV=metres;materials[key].map.repeat.set(1,1);}
 for(let i=0;i<6;i++)material('leaf'+i,['#344c31','#4d623b','#5b7044','#718452','#7f8c5e','#4b6750'][i],.92);
 return materials;
}
export function box(parent,x,y,z,w,h,d,mat='concrete',radius=0,rot=0){
 // Rounded edges read as moulded plastic once they scale with a building. Large members stay square;
 // small parts keep at most a quarter of their thinnest side as a fillet.
 radius=Math.max(w,h,d)>4?0:Math.min(radius,Math.min(w,h,d)/4);
 const key=[w,h,d,radius].join('/');
 if(!geos.has(key))geos.set(key,radius>0?new RoundedBoxGeometry(w,h,d,2,Math.min(radius,w/2,h/2,d/2)):new T.BoxGeometry(w,h,d));
 const m=new T.Mesh(geos.get(key),typeof mat==='string'?materials[mat]:mat);m.position.set(x,y,z);m.rotation.y=rot;m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
}
export function cylinder(parent,x,y,z,r,h,mat='metal',segments=24,rt=r){
 const key=`c${r}/${rt}/${h}/${segments}`;if(!geos.has(key))geos.set(key,new T.CylinderGeometry(rt,r,h,segments));
 const m=new T.Mesh(geos.get(key),typeof mat==='string'?materials[mat]:mat);m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;parent.add(m);return m;
}
export function tube(parent,points,r=.1,mat='metal',smooth=true){
 const path=smooth?new T.CatmullRomCurve3(points.map(p=>V(...p)),false,'centripetal'):new T.CurvePath();
 if(!smooth)for(let i=1;i<points.length;i++)path.add(new T.LineCurve3(V(...points[i-1]),V(...points[i])));
 const m=new T.Mesh(new T.TubeGeometry(path,Math.max(12,points.length*8),r,8,false),materials[mat]);m.castShadow=m.receiveShadow=true;parent.add(m);return m;
}
export function ring(parent,x,y,z,r,t=.03,mat='metal',rotation=[Math.PI/2,0,0]){
 const key=`t${r}/${t}`;if(!geos.has(key))geos.set(key,new T.TorusGeometry(r,t,8,32));
 const m=new T.Mesh(geos.get(key),materials[mat]);m.position.set(x,y,z);m.rotation.set(...rotation);m.castShadow=m.receiveShadow=true;parent.add(m);return m;
}
export function group(parent,name,x=0,y=0,z=0){const g=new T.Group();g.name=name;g.position.set(x,y,z);parent.add(g);return g;}
export function label(parent,text,x,y,z,width=8,height=1.2,color='#e6e2cc',background=null,rot=0){
 const c=document.createElement('canvas');c.width=1024;c.height=Math.max(64,Math.round(1024*height/width));const ctx=c.getContext('2d');
 if(background){ctx.fillStyle=background;ctx.fillRect(0,0,c.width,c.height);}
 ctx.fillStyle=color;ctx.font=`600 ${c.height*.65}px 'Microsoft YaHei UI','Microsoft YaHei','PingFang SC',sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,c.width/2,c.height*.53,c.width*.95);
 const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.anisotropy=8;
 const m=new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false,side:T.DoubleSide,toneMapped:false}));m.position.set(x,y,z);m.rotation.y=rot;parent.add(m);return m;
}
// Soft contact darkening hugging building footprints: rings of quads fading from the wall line
// outwards, alpha in the vertex colour. rects: [centreX, centreZ, width, depth, y] in parent space.
const contactMaterial=()=>materials.contact||=new T.MeshBasicMaterial({name:'contact-shadow',color:'#1d2622',vertexColors:true,transparent:true,side:T.DoubleSide,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
export function contactShadow(parent,rects,spread=2.4,strength=.42){
 const pos=[],col=[],idx=[];const steps=[[0,1],[.18,.55],[.45,.22],[1,0]];
 for(const [cx,cz,w,d,y] of rects){
 const ring=steps.map(([t,a])=>{const hw=w/2+t*spread,hd=d/2+t*spread;return{a:a*a*strength,p:[[-hw,-hd],[hw,-hd],[hw,hd],[-hw,hd]]};});
 for(let r=0;r<ring.length-1;r++)for(let k=0;k<4;k++){const b=pos.length/3,A=ring[r],B=ring[r+1],k2=(k+1)%4;
 for(const [pt,a] of [[A.p[k],A.a],[A.p[k2],A.a],[B.p[k2],B.a],[B.p[k],B.a]]){pos.push(cx+pt[0],y,cz+pt[1]);col.push(1,1,1,a);}
 idx.push(b,b+2,b+1,b,b+3,b+2);}
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('color',new T.Float32BufferAttribute(col,4));g.setIndex(idx);g.computeVertexNormals();
 const m=new T.Mesh(g,contactMaterial());m.userData.nonPhysical=true;m.renderOrder=1;m.name='contact-shadow';parent.add(m);return m;
}
// Merge only static descendants of one semantic group. Asset roots remain independently pickable.
export function optimize(root){
 root.updateMatrixWorld(true);const buckets=new Map(),remove=[];const inverse=root.matrixWorld.clone().invert();
 root.traverse(o=>{if(!o.isMesh||o.userData.dynamic||o.material.transparent||o.isInstancedMesh)return;let p=o.parent;while(p&&p!==root){if(p.userData.dynamic)return;p=p.parent;}
 const key=o.material.uuid;const list=buckets.get(key)||{mat:o.material,geos:[]};let g=o.geometry.clone().applyMatrix4(inverse.clone().multiply(o.matrixWorld));if(g.index)g=g.toNonIndexed();
 const metres=o.material.userData.worldUV;
 if(metres&&g.attributes.uv){const p=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;for(let i=0;i<p.count;i++){const nx=Math.abs(n.getX(i)),ny=Math.abs(n.getY(i)),nz=Math.abs(n.getZ(i));if(ny>nx&&ny>nz)uv.setXY(i,p.getX(i)/metres,p.getZ(i)/metres);else if(nx>nz)uv.setXY(i,p.getZ(i)/metres,p.getY(i)/metres);else uv.setXY(i,p.getX(i)/metres,p.getY(i)/metres);}uv.needsUpdate=true;}
 list.geos.push(g);buckets.set(key,list);remove.push(o);});
 remove.forEach(o=>o.removeFromParent());
 for(const {mat,geos:parts} of buckets.values()){const g=mergeGeometries(parts,false);parts.forEach(p=>p.dispose());if(!g)continue;const m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;root.add(m);}
}
export {T};
