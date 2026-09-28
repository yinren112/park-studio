import {T,V,box,cylinder,tube,ring,group,label,materials} from './geometry.js';

function bolts(g,x,y,z,r=.4,axis='z',n=8){
 for(let i=0;i<n;i++){const a=i*Math.PI*2/n;let m;
 if(axis==='x'){m=cylinder(g,x,y+Math.sin(a)*r,z+Math.cos(a)*r,.047,.07,'metal',6);m.rotation.z=Math.PI/2;}
 else if(axis==='y')m=cylinder(g,x+Math.cos(a)*r,y,z+Math.sin(a)*r,.047,.07,'metal',6);
 else{m=cylinder(g,x+Math.cos(a)*r,y+Math.sin(a)*r,z,.047,.07,'metal',6);m.rotation.x=Math.PI/2;}
 }
}
function flange(g,x,y,z,r=.35,axis='z',mat='metal'){
 const inner=r*.59;
 const profile=[[inner+.008,-.055],[r-.008,-.055],[r,-.047],[r,.047],[r-.008,.055],[inner+.008,.055],[inner,.047],[inner,-.047],[inner+.008,-.055]].map(([radius,height])=>new T.Vector2(radius,height));
 const geometry=new T.LatheGeometry(profile,80);geometry.rotateX(Math.PI/2);
 const m=new T.Mesh(geometry,materials[mat]);m.position.set(x,y,z);m.rotation.x=axis==='y'?-Math.PI/2:0;m.rotation.y=axis==='x'?Math.PI/2:0;m.castShadow=m.receiveShadow=true;g.add(m);
 bolts(g,x+(axis==='x'?.075:0),y+(axis==='y'?.075:0),z+(axis==='z'?.075:0),r*.78,axis);
 return m;
}
function gauge(g,x,y,z,r=.18){
 const m=cylinder(g,x,y,z,r,.09,'metal',32);m.rotation.x=Math.PI/2;
 const face=cylinder(g,x,y,z+.053,r*.88,.018,'ivory',32);face.rotation.x=Math.PI/2;
 for(let i=0;i<10;i++){const a=(i/9)*Math.PI*1.5+Math.PI*.75;const tick=box(g,x+Math.cos(a)*r*.68,y+Math.sin(a)*r*.68,z+.07,.012,r*.16,.007,'dark');tick.rotation.z=a-Math.PI/2;}
 const hand=box(g,x+.035,y+.035,z+.08,.012,r*.65,.01,'red');hand.rotation.z=-.7;
}
function pump(g,a,animations){
 box(g,0,.17,0,4.8,.34,1.95,'concrete',.1);
 for(const z of [-.7,.7])box(g,0,.43,z,4.4,.25,.22,'dark',.035);
 for(const x of [-1.9,1.9])for(const z of [-.67,.67]){cylinder(g,x,.6,z,.07,.18,'metal',6);ring(g,x,.57,z,.11,.025,'metal');}
 const motor=group(g,'motor-and-coupling',-1.1,.98,0);motor.userData.explode=[-1.4,.6,0];
 let m=cylinder(motor,0,0,0,.49,1.55,'pump',48);m.rotation.z=Math.PI/2;
 for(let i=0;i<22;i++){const a=i*Math.PI/11;const f=box(motor,0,Math.sin(a)*.5,Math.cos(a)*.5,1.35,.055,.1,'pump',.018);f.rotation.x=-a;}
 for(const x of [-.83,.83]){m=cylinder(motor,x,0,0,.5,.14,'pump',40);m.rotation.z=Math.PI/2;bolts(motor,x+(x>0?.09:-.09),0,0,.4,'x');}
 box(motor,0,.6,0,.58,.28,.52,'pump',.06);box(motor,0,.76,0,.62,.06,.55,'metal',.02);
 for(const x of [-.5,.5])box(motor,x,-.46,0,.26,.23,1.1,'pump',.03);
 const fan=group(motor,'motor-fan',-.92,0,0);fan.userData.dynamic=true;
 for(let i=0;i<8;i++){const p=box(fan,0,0,0,.025,.08,.73,'dark',.02);p.rotation.x=i*Math.PI/4;}
 animations.push({object:fan,axis:'x',assetId:a.id,speed:5});
 for(const r of [.2,.32,.44])ring(motor,-.96,0,0,r,.013,'metal',[0,Math.PI/2,0]);
 for(let i=0;i<10;i++){const q=box(motor,-.98,0,0,.02,.025,.93,'metal');q.rotation.x=i*Math.PI/5;}
 const coupling=group(g,'shaft-coupling',.13,.98,0);coupling.userData.explode=[0,.9,0];m=cylinder(coupling,0,0,0,.19,.62,'metal',32);m.rotation.z=Math.PI/2;
 for(const x of [-.2,.2]){m=cylinder(coupling,x,0,0,.26,.12,'amber',32);m.rotation.z=Math.PI/2;}
 // Cast volute follows a growing spiral around the shaft, with a tangent discharge.
 const body=group(g,'cast-volute',1,.99,0);body.userData.explode=[1.35,0,0];
 m=new T.Mesh(new T.SphereGeometry(.62,40,24),materials.pump);m.scale.set(.52,1,1);body.add(m);m.castShadow=m.receiveShadow=true;
 const points=[];for(let i=0;i<=40;i++){const t=i/40*Math.PI*1.8,r=.22+i/40*.36;points.push([.04,Math.sin(t)*r,Math.cos(t)*r]);}tube(body,points,.14,'pump');
 flange(body,.34,0,0,.47,'x','pump');flange(body,-.34,0,0,.47,'x','pump');
 box(body,0,-.53,0,.85,.25,1.3,'pump',.08);
 tube(body,[[0,.42,.28],[0,.77,.28],[0,.95,.28],[0,1.04,.53],[0,1.04,1.18]],.2,'pump');
 flange(body,0,1.04,1.22,.32,'z');flange(body,0,1.04,1.36,.32,'z');
 tube(g,[[1,2.03,1.45],[1,2.03,1.78],[1,1.95,2.12],[1,.7,2.12]],.18,'pipe');
 cylinder(g,1,2.41,1.72,.033,.7,'metal');ring(g,1,2.79,1.72,.22,.035,'red');for(let i=0;i<4;i++)box(g,1,2.79,1.72,.4,.035,.025,'red',0,i*Math.PI/2);
 tube(g,[[1,.99,-.6],[1,.99,-1.3],[1,.8,-1.65],[1,.4,-1.65]],.23,'pipe');flange(g,1,.99,-.9,.37,'z');
 cylinder(g,1,2.27,1.42,.025,.42,'metal');gauge(g,1,2.58,1.47);
 label(g,a.id,0,.19,.981,1.2,.18,'#e9e2c9','#233d36');
 label(motor,'11 kW  380 V',0,.17,.51,.82,.16,'#d0d4c5','#203a36');
}
function hvac(g,a,animations){
 box(g,0,.18,0,7.6,.35,3.6,'dark',.08);
 box(g,0,1.2,0,7.3,1.95,3.3,'ivory',.18);
 for(let x=-3.1;x<3.5;x+=1.25)box(g,x,1.15,1.69,.025,1.7,.02,'dark');
 for(const z of [-1.67,1.67])for(let y=.5;y<1.55;y+=.12)box(g,-2.6,y,z,1.35,.045,.06,'dark');
 for(const x of [-1.1,1.25]){
 cylinder(g,x,2.25,0,1.16,.25,'metal',48);cylinder(g,x,2.4,0,1.04,.08,'black',48);
 const fan=group(g,'axial-fan',x,2.48,0);fan.userData.dynamic=true;
 for(let k=0;k<6;k++){const blade=box(fan,0,0,0,.23,.045,1.78,'metal',.08);blade.rotation.y=k*Math.PI/3;}
 cylinder(fan,0,.02,0,.19,.1,'dark');animations.push({object:fan,axis:'y',assetId:a.id,speed:3});
 for(const r of [.32,.54,.78,1])ring(g,x,2.54,0,r,.015,'metal');
 for(let k=0;k<8;k++)box(g,x,2.55,0,.025,.03,2.1,'metal',0,k*Math.PI/4);
 }
 box(g,2.85,1.23,1.75,.57,.85,.18,'dark',.05);label(g,a.id,2.85,1.32,1.85,.48,.2,'#d1dece');
 for(let z=-1;z<1.2;z+=.26)tube(g,[[-3.66,.65,z],[-4.15,.65,z],[-4.5,.9,z],[-4.5,.05,z]],.055,'copper');
}
function cabinet(g,a){
 box(g,0,.12,0,1.8,.24,1.4,'concrete',.07);box(g,0,1.4,0,1.45,2.5,1.08,'ivory',.09);
 box(g,0,1.4,.56,1.31,2.25,.065,'metal',.04);box(g,0,2.03,.62,.6,.4,.075,'dark',.045);
 label(g,a.id,0,2.06,.666,.48,.13,'#cee2bb');
 for(let x=-.35;x<=.36;x+=.35)cylinder(g,x,1.64,.64,.04,.02,x<0?'red':'amber',16).rotation.x=Math.PI/2;
 box(g,.5,1.36,.63,.055,.3,.07,'black',.02);
 for(let y=.46;y<.99;y+=.085)box(g,0,y,.61,.95,.025,.03,'dark');
 label(g,'400 V',0,1.17,.64,.52,.2,'#5a4512','#dfbe60');
 for(const y of [.6,2.2])box(g,-.66,y,.62,.07,.17,.05,'metal',.015);
}
function charger(g,a){
 box(g,0,.1,0,1.4,.2,1.2,'concrete',.08);box(g,0,1.25,0,.9,2.3,.6,'ivory',.15);
 box(g,0,1.65,.316,.66,1.1,.05,'black',.09);box(g,0,1.88,.35,.49,.38,.015,'glassLight',.03);
 label(g,'DC 120',0,1.88,.363,.4,.13,'#adc7ba');label(g,a.id,0,.54,.314,.49,.2,'#385249');
 for(const side of [-1,1]){tube(g,[[side*.4,1.8,0],[side*.72,1.7,0],[side*.8,.42,.05],[side*.67,.36,.23],[side*.55,1.33,.3]],.039,'rubber');box(g,side*.51,1.35,.31,.12,.27,.16,'dark',.035);}
 box(g,0,2.15,.33,.51,.025,.015,'lamp');
 for(const x of [-.9,.9]){cylinder(g,x,.48,.1,.07,.95,'amber');cylinder(g,x,.35,.1,.075,.15,'dark');}
}
function pole(g,a,animations){
 const h=a.type==='light'?6.8:5.4;
 box(g,0,.1,0,.7,.2,.7,'concrete',.07);cylinder(g,0,.25,0,.17,.24,'metal');bolts(g,0,.38,0,.23,'y',4);
 cylinder(g,0,h/2,0,.09,h,'dark',16,.055);
 if(a.type==='light'){
 tube(g,[[0,h-.1,0],[0,h+.22,0],[0,h+.48,.22],[0,h+.48,1.5]],.06,'dark');box(g,0,h+.44,1.47,.48,.12,.9,'dark',.08);const luminaire=box(g,0,h+.37,1.47,.38,.015,.68,'lamp',.035);luminaire.material=materials.lamp.clone();luminaire.userData.luminaire=true;luminaire.userData.dynamic=true;
 const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d'),radial=ctx.createRadialGradient(64,64,0,64,64,64);radial.addColorStop(0,'rgba(255,217,146,.72)');radial.addColorStop(.35,'rgba(255,207,127,.4)');radial.addColorStop(1,'rgba(255,207,127,0)');ctx.fillStyle=radial;ctx.fillRect(0,0,128,128);
 const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;const pool=new T.Mesh(new T.PlaneGeometry(10,13),new T.MeshBasicMaterial({map,transparent:true,opacity:0,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false}));pool.rotation.x=-Math.PI/2;pool.position.set(0,.19,1.5);pool.userData.lightPool=true;pool.userData.nonPhysical=true;pool.userData.dynamic=true;pool.name='downlight-footprint';g.add(pool);
 }else{
 box(g,0,h-.35,.35,.13,.12,.7,'metal',.03);const head=group(g,'camera-head',0,h-.1,.58);
 cylinder(head,0,0,0,.27,.28,'ivory',32);let dome=new T.Mesh(new T.SphereGeometry(.24,32,16,0,Math.PI*2,0,Math.PI/2),materials.glass);dome.rotation.x=Math.PI;dome.position.y=-.12;head.add(dome);dome.castShadow=true;
 box(head,0,.2,0,.22,.15,.22,'ivory',.06);
 label(g,a.id,0,3.7,.1,.5,.14,'#c8d1c1','#203a34');
 }
}
function gate(g,a,animations){
 box(g,0,.09,0,.9,.18,.9,'concrete',.08);box(g,0,.7,0,.52,1.3,.5,'ivory',.08);box(g,0,1.3,0,.56,.1,.55,'dark',.04);
 label(g,a.id,0,.9,.26,.35,.15,'#32483c');
 const arm=group(g,'barrier-arm',0,1.1,0);arm.userData.dynamic=true;
 const sign=a.position[0]<0?1:-1;box(arm,sign*1.8,0,0,3.6,.13,.09,'white',.025);
 for(let i=0;i<6;i++)box(arm,sign*(.3+i*.6),0,.052,.27,.13,.015,'red');
 animations.push({object:arm,axis:'z',assetId:a.id,gate:true,sign});
}
function sensor(g,a){
 box(g,0,.1,0,.7,.2,.7,'concrete',.04);cylinder(g,0,1.8,0,.055,3.6,'metal',16);
 box(g,0,2.2,.2,.47,.62,.38,'ivory',.07);label(g,a.id,0,2.25,.4,.4,.16,'#335146');
 for(let i=0;i<7;i++)cylinder(g,0,3+i*.07,0,.19,.028,'white',24);
 box(g,0,3.7,0,1.25,.04,.06,'metal');cylinder(g,-.55,3.83,0,.08,.24,'white',20);
 for(let i=0;i<3;i++){const t=i*Math.PI*2/3;tube(g,[[.4,3.83,0],[.4+Math.cos(t)*.22,3.83,Math.sin(t)*.22]],.018,'metal');}
}
export function equipment(root,catalog){
 const animations=[],assets=new Map();
 for(const a of catalog.assets){
 const g=group(root,a.modelNode,...a.position);g.userData.assetId=a.id;g.userData.layer='equipment';
 ({pump,hvac,meter:cabinet,charger,gate,sensor,bench:sensor,camera:pole,light:pole}[a.type])(g,a,animations);
 const leds={pump:[-1.1,1.74,.25],hvac:[2.85,1.63,1.87],meter:[.32,1.64,.66],charger:[0,2.17,.35],gate:[0,1.33,.26],sensor:[.14,2.45,.405],bench:[.14,2.45,.405],camera:[.2,5.25,.58],light:[0,1.2,.095]};
 const pilot=new T.Mesh(new T.SphereGeometry(a.type==='hvac'?.065:.035,12,8),new T.MeshStandardMaterial({color:'#759568',emissive:'#759568',emissiveIntensity:.6,roughness:.35}));pilot.position.set(...leds[a.type]);pilot.userData.indicator=true;pilot.userData.dynamic=true;pilot.name='telemetry-status-indicator';g.add(pilot);
 if(a.type==='pump'){g.getObjectByName('motor-and-coupling').add(pilot);pilot.position.set(0,.76,.25);}
 if(a.type==='pump')g.scale.setScalar(.5);
 assets.set(a.id,g);
 }
 return {assets,animations};
}
