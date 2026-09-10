import {T,V,palette,materials,group,box,optimize} from './geometry.js';
import {architecture} from './architecture.js';
import {landscape} from './landscape.js';
import {equipment} from './equipment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {FXAAShader} from 'three/addons/shaders/FXAAShader.js';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';

export function create(canvas,meta,_buffer,{onPick=()=>{},onFrame=()=>{},onError=()=>{}}={}){
 function physicalBounds(g){const box=new T.Box3();g.updateWorldMatrix(true,true);g.traverse(o=>{if(o.isMesh&&!o.userData.nonPhysical)box.union(new T.Box3().setFromObject(o));});return box;}
 const renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance',preserveDrawingBuffer:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.shadowMap.autoUpdate=false;renderer.localClippingEnabled=true;renderer.info.autoReset=false;
 renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.96;renderer.outputColorSpace=T.SRGBColorSpace;
 const scene=new T.Scene();scene.background=new T.Color('#deddd4');scene.fog=new T.Fog('#deddd4',350,850);
 const camera=new T.PerspectiveCamera(34,1,.15,1300);camera.position.set(146,113,189);
 const controls=new OrbitControls(camera,canvas);controls.target.set(-12,1,11);controls.enableDamping=true;controls.dampingFactor=.065;controls.minDistance=3;controls.maxDistance=420;controls.maxPolarAngle=Math.PI*.485;controls.screenSpacePanning=true;controls.zoomSpeed=.8;controls.rotateSpeed=.55;controls.update();
 palette();
 let envTarget;
 function rebuildEnvironment(){const pmrem=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),next=pmrem.fromScene(room,.03);envTarget?.dispose();envTarget=next;scene.environment=next.texture;room.dispose();pmrem.dispose();}
 rebuildEnvironment();scene.environmentIntensity=.63;scene.environmentRotation.set(0,.7,0);
 const hemi=new T.HemisphereLight('#dfeaf3','#7b8065',1.55);scene.add(hemi);
 const sun=new T.DirectionalLight('#fff0d6',2.45);sun.position.set(-90,105,65);sun.castShadow=true;sun.shadow.mapSize.set(4096,4096);Object.assign(sun.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340});sun.shadow.normalBias=.08;sun.shadow.bias=-.00008;sun.shadow.radius=2;scene.add(sun);scene.add(sun.target);
 const rim=new T.DirectionalLight('#bad4e1',.6);rim.position.set(80,50,-95);scene.add(rim);
 const floor=new T.Mesh(new T.PlaneGeometry(2200,2200),new T.MeshStandardMaterial({color:'#d7d6cb',roughness:.94}));floor.rotation.x=-Math.PI/2;floor.position.y=-2.1;floor.receiveShadow=true;scene.add(floor);
 const root=group(scene,'lailin-campus');const structures=architecture(root),siteParts=landscape(root);const {assets,animations}=equipment(root,Lailin.catalog);
 structures.forEach(g=>{g.userData.layer='architecture';optimize(g);});siteParts.forEach(g=>optimize(g));
 // Keep mechanical subassemblies intact for exploded inspection while merging each one.
 for(const g of assets.values()){for(const child of [...g.children])if(child.isGroup&&!child.userData.dynamic)optimize(child);const parts=g.children.filter(c=>c.isGroup);parts.forEach(p=>p.userData.dynamic=true);optimize(g);parts.forEach(p=>{if(!animations.some(a=>a.object===p))p.userData.dynamic=false;});}
 root.updateMatrixWorld(true);
 meta.groups=[];let triangles=0,meshCount=0;
 for(const g of root.children){const b=g.userData.assetId?physicalBounds(g):new T.Box3().setFromObject(g);meta.groups.push({name:g.name,assetId:g.userData.assetId||null,layer:g.userData.layer,min:b.min.toArray(),max:b.max.toArray(),center:b.getCenter(V()).toArray()});}
 root.traverse(o=>{if(o.isMesh){meshCount++;triangles+=(o.geometry.index?o.geometry.index.count:o.geometry.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);}});
 meta.stats={triangles,groups:meta.groups.length,assets:assets.size,meshes:meshCount};
 const selection=new T.Group();selection.name='selection-indicator';scene.add(selection);
 const selectMat=new T.LineBasicMaterial({color:'#cf9556',transparent:true,opacity:.88,depthTest:false});
 const pedestal=new T.Mesh(new T.CylinderGeometry(5,5.03,.35,96),new T.MeshStandardMaterial({color:'#c6cbbf',roughness:.76,metalness:.08}));pedestal.visible=false;scene.add(pedestal);pedestal.receiveShadow=true;pedestal.castShadow=true;
 const spot=new T.PointLight('#ffd49b',0,15,2);spot.position.set(35,7,30);scene.add(spot);
 const rt=new T.WebGLRenderTarget(100,100,{type:T.HalfFloatType,samples:0});
 const composer=new EffectComposer(renderer,rt);composer.addPass(new RenderPass(scene,camera));
 const ao=new GTAOPass(scene,camera,100,100);ao.blendIntensity=.5;ao.updateGtaoMaterial({radius:.8,thickness:1.4,distanceExponent:1.3,distanceFallOff:1,samples:8,scale:1,screenSpaceRadius:false});composer.addPass(ao);
 composer.addPass(new OutputPass());
 const aa=new ShaderPass(FXAAShader);composer.addPass(aa);
 const finish=new ShaderPass({uniforms:{tDiffuse:{value:null},night:{value:0}},vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`uniform sampler2D tDiffuse; uniform float night; varying vec2 vUv; void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float v=1.-.13*pow(length((vUv-.5)*vec2(1.,.85)),1.7);c*=v;c=mix(c,c*vec3(.97,1.005,1.03),night);gl_FragColor=vec4(c,1.);}`});composer.addPass(finish);
 const state={lost:false,theta:controls.getAzimuthalAngle()};let selected=null,isolated=false,night=false,disposed=false,raf=0,width=0,height=0,transition=null,tour=false,tourTime=0,explode=false,nightMix=0,last=performance.now(),frameMS=0,frameCount=0,frameSum=0,high=true,dirty=true,section=false,drawCalls=0,responsiveMode=null;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,hidden=new Set(),deviceStates=new Map(),originalPositions=new Map(),explodables=[];
 for(const g of assets.values())g.traverse(o=>{if(o.userData.explode){explodables.push(o);originalPositions.set(o,o.position.clone());o.userData.restPosition=o.position.toArray();}});
 for(const a of animations)a.object.userData.restRotation=a.object.rotation.toArray();
 const partOverlay=document.createElement('div');partOverlay.className='part-labels';canvas.parentElement.append(partOverlay);
 const partNames={'motor-and-coupling':'01 / 电机与散热结构','shaft-coupling':'02 / 弹性联轴器','cast-volute':'03 / 铸造蜗壳与法兰'},partNodes=new Map();
 for(const [name,caption] of Object.entries(partNames)){const el=document.createElement('div');el.className='part-label';el.textContent=caption;partOverlay.append(el);partNodes.set(name,el);}
 function homePose(){if(width>=700)return{position:[146,113,189],target:[-12,1,11]};const distance=204/(2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*camera.aspect)*1.1,dir=V(.58,.5,.65).normalize().multiplyScalar(distance);return{position:dir.toArray(),target:[0,0,0]};}
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;if(w<1||h<1)return;if(w===width&&h===height)return;width=w;height=h;renderer.setSize(w,h,false);camera.aspect=w/h;const mobile=w<700;camera.fov=mobile?46:34;camera.updateProjectionMatrix();controls.maxDistance=mobile?1100:420;scene.fog.near=mobile?850:350;scene.fog.far=mobile?1600:850;
 if(responsiveMode!==mobile&&!isolated){transition=null;stopTour();const pose=homePose();camera.position.fromArray(pose.position);controls.target.fromArray(pose.target);controls.update();}responsiveMode=mobile;
 composer.setSize(w,h);const pr=renderer.getPixelRatio();ao.setSize(Math.round(w*pr*.55),Math.round(h*pr*.55));aa.material.uniforms.resolution.value.set(1/(w*pr),1/(h*pr));dirty=true;}
 const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
 function stopTour(){tour=false;document.body.classList.remove('touring');document.getElementById('tour-button')?.classList.remove('active');}
 function moveTo(pos,target,duration=1600){stopTour();transition={from:camera.position.clone(),to:V(...pos),start:performance.now(),duration:reduced?1:duration,fromTarget:controls.target.clone(),target:V(...target)};dirty=true;}
 function updateVisibility(){for(const g of root.children){g.visible=(!isolated||g.userData.assetId===selected)&&!hidden.has(g.userData.layer);}selection.visible=!!selected&&!tour;renderer.shadowMap.needsUpdate=true;}
 function shadowFraming(center=null,size=0){if(center){const extent=Math.max(3,size*1.5);sun.position.copy(center).add(V(-extent*4.5,extent*5.25,extent*3.25));sun.target.position.copy(center);Object.assign(sun.shadow.camera,{left:-extent,right:extent,top:extent,bottom:-extent,near:.1,far:extent*14});sun.shadow.normalBias=.015;sun.shadow.bias=-.00003;}else{sun.position.set(-90,105,65);sun.target.position.set(0,0,0);Object.assign(sun.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340});sun.shadow.normalBias=.08;sun.shadow.bias=-.00008;}sun.shadow.camera.updateProjectionMatrix();renderer.shadowMap.needsUpdate=true;}
 function select(id){if(!assets.has(id))return;selected=id;selection.traverse(o=>o.geometry?.dispose());selection.clear();const b=physicalBounds(assets.get(id));const points=[],pad=.18;const x0=b.min.x-pad,x1=b.max.x+pad,z0=b.min.z-pad,z1=b.max.z+pad,y=b.min.y+.015,len=Math.min(.6,(x1-x0)*.15);
 for(const [x,z,dx,dz] of [[x0,z0,1,1],[x1,z0,-1,1],[x1,z1,-1,-1],[x0,z1,1,-1]]){points.push(V(x+dx*len,y,z),V(x,y,z),V(x,y,z),V(x,y,z+dz*len));}
 const geo=new T.BufferGeometry().setFromPoints(points);selection.add(new T.LineSegments(geo,selectMat));updateVisibility();}
 function home(top=false){isolated=false;explode=false;pedestal.visible=false;floor.position.y=-2.1;shadowFraming();updateVisibility();if(top){const t=Math.tan(T.MathUtils.degToRad(camera.fov/2)),d=Math.max(164/(2*t*camera.aspect),124/(2*t))*1.12;moveTo([0,d,.01],[0,0,0]);}else{const pose=homePose();moveTo(pose.position,pose.target,1800);}document.getElementById('explode-device')?.classList.remove('active');}
 function focus(id,only=false){if(!assets.has(id))return;selected=id;isolated=only;explode=false;for(const o of explodables)o.position.copy(originalPositions.get(o));updateVisibility();const b=physicalBounds(assets.get(id)),c=b.getCenter(V()),sz=b.getSize(V());const d=Math.max(sz.x,sz.y,sz.z)*(only?2.05:4.4);let target=c.clone();target.y-=only?sz.y*.27:0;
 pedestal.visible=only;const stageScale=Math.max(sz.x,sz.z)/6.8;pedestal.scale.setScalar(stageScale);pedestal.position.set(c.x,b.min.y-.35*stageScale/2-.008,c.z);floor.position.y=only?b.min.y-.35*stageScale-.015:-2.1;
 shadowFraming(only?c:null,Math.max(sz.x,sz.y,sz.z));
 const portrait=width<700;moveTo([c.x+d*.86,c.y+d*.6,c.z+d*1.03],target.toArray(),1700);select(id);if(portrait)controls.target.copy(target);
 }
 function setNight(value){night=!!value;dirty=true;renderer.shadowMap.needsUpdate=true;}
 const statusColors={normal:'#628e65',alarm:'#ce593c',warning:'#d2a14f',offline:'#788882',unknown:'#788882'};
 function setStates(devices){for(const d of devices){deviceStates.set(d.id,d);const g=assets.get(d.id);if(g){g.userData.status=d.status;g.traverse(o=>{if(o.userData.indicator){const col=statusColors[d.status]||statusColors.unknown;o.material.color.set(col);o.material.emissive.set(col);o.material.emissiveIntensity=d.status==='offline'?0:.65;}});}if(d.id===selected)selectMat.color.set(statusColors[d.status]||statusColors.normal);}dirty=true;}
 const raycaster=new T.Raycaster(),pointer=new T.Vector2();let down=null;
 function pick(e){if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>5||e.button!==0)return;const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(root.children,true);
 for(const hit of hits){let o=hit.object;if(!o.visible||o.userData.nonPhysical||o.material?.clippingPlanes?.some(p=>p.distanceToPoint(hit.point)<0))continue;let visible=true;for(let p=o.parent;p;p=p.parent)if(!p.visible)visible=false;if(!visible)continue;let id;for(let p=o;p&&p!==root;p=p.parent)if(p.userData.assetId){id=p.userData.assetId;break;}if(id)onPick(id);break;}}
 const pointerDown=e=>{down={x:e.clientX,y:e.clientY};transition=null;stopTour();};
 canvas.addEventListener('pointerdown',pointerDown);canvas.addEventListener('pointerup',pick);
 const interaction=()=>{transition=null;stopTour();dirty=true;};controls.addEventListener('start',interaction);controls.addEventListener('change',()=>dirty=true);
 const onLost=e=>{e.preventDefault();state.lost=true;cancelAnimationFrame(raf);envTarget=undefined;scene.environment=null;onError('图形上下文已中断。设备数据仍可使用；恢复后会自动重建画面。');};
 const onRestored=()=>{try{rebuildEnvironment();state.lost=false;dirty=true;renderer.shadowMap.needsUpdate=true;last=performance.now();raf=requestAnimationFrame(frame);}catch(e){state.lost=true;onError('图形恢复失败，请刷新页面重新载入。设备数据仍可使用。');}};canvas.addEventListener('webglcontextlost',onLost);canvas.addEventListener('webglcontextrestored',onRestored);
 function lighting(dt){const goal=night?1:0;nightMix=T.MathUtils.damp(nightMix,goal,3,dt);const v=nightMix;
 scene.background.set('#deddd4').lerp(new T.Color('#3c5665'),v);scene.fog.color.copy(scene.background);floor.material.color.set('#d7d6cb').lerp(new T.Color('#46616b'),v);
 sun.intensity=T.MathUtils.lerp(2.1,.3,v);sun.color.set('#ffdfa9').lerp(new T.Color('#bfdcf7'),v);hemi.intensity=T.MathUtils.lerp(.62,.23,v);rim.intensity=T.MathUtils.lerp(.48,.55,v);scene.environmentIntensity=T.MathUtils.lerp(.55,.27,v);materials.lamp.emissiveIntensity=T.MathUtils.lerp(.5,3,v);materials.amber.emissiveIntensity=T.MathUtils.lerp(.05,1.3,v);materials.glass.emissive.set('#af7540');materials.glass.emissiveIntensity=v*.025;if(materials.windowLight)materials.windowLight.emissiveIntensity=v*1.6;spot.intensity=v*80;finish.uniforms.night.value=v;
 for(const [id,g] of assets){if(!id.startsWith('LGT'))continue;const d=deviceStates.get(id),on=d?.powered&&d?.status!=='offline';g.traverse(o=>{if(o.userData.lightPool)o.material.opacity=v*(on?0.28:0);if(o.userData.luminaire)o.material.emissiveIntensity=on?T.MathUtils.lerp(.5,3,v):0;});}}
 function frame(now){if(disposed||state.lost)return;raf=requestAnimationFrame(frame);if(document.hidden){last=now;return;}const elapsed=now-last,dt=Math.min(elapsed/1000,.06);last=now;
 if(transition){const t=Math.min(1,(now-transition.start)/transition.duration),s=t*t*t*(t*(t*6-15)+10);camera.position.lerpVectors(transition.from,transition.to,s);controls.target.lerpVectors(transition.fromTarget,transition.target,s);if(t===1)transition=null;dirty=true;}
 if(tour&&!reduced){
 tourTime+=dt;const shots=[{p:[146,113,189],t:[-12,1,11],name:'01 / 园区全景'},{p:[8,40,92],t:[-32,7,23],name:'02 / 研发与创新'},{p:[89,36,87],t:[34,3,23],name:'03 / 能源与循环'},{p:[121,72,-98],t:[3,6,-23],name:'04 / 生产与物流'}];
 const segment=Math.floor(tourTime/13)%shots.length,a=shots[segment],b=shots[(segment+1)%shots.length],u=Math.max(0,Math.min(1,(tourTime%13-2)/11)),ease=u*u*u*(u*(u*6-15)+10);camera.position.lerpVectors(V(...a.p),V(...b.p),ease);controls.target.lerpVectors(V(...a.t),V(...b.t),ease);if(width<700)camera.position.sub(controls.target).multiplyScalar(1.9).add(controls.target);const caption=document.getElementById('tour-title');if(caption)caption.textContent=u<.5?a.name:b.name;dirty=true;}
 controls.update();state.theta=controls.getAzimuthalAngle();const nextNear=Math.max(.045,Math.min(3,camera.position.distanceTo(controls.target)/70));if(Math.abs(camera.near-nextNear)>.01){camera.near=nextNear;camera.updateProjectionMatrix();dirty=true;}lighting(dt);
 for(const a of animations){const d=deviceStates.get(a.assetId),run=d&&d.status!=='offline'&&d.powered!==false;
 if(a.gate){const target=d?.controlState==='open'?a.sign*1.47:0;const prev=a.object.rotation.z;a.object.rotation.z=T.MathUtils.damp(prev,target,3,dt);if(Math.abs(prev-a.object.rotation.z)>.001){renderer.shadowMap.needsUpdate=true;dirty=true;}}
 else if(run&&!reduced&&(!isolated||selected===a.assetId))a.object.rotation[a.axis]+=dt*a.speed;
 }
 for(const o of explodables){const original=originalPositions.get(o),offset=explode&&o.parent.userData.assetId===selected?V(...o.userData.explode):V();const target=original.clone().add(offset);o.position.lerp(target,1-Math.exp(-5*dt));}
 if(explode)renderer.shadowMap.needsUpdate=true;
 const lightingMoves=Math.abs(nightMix-(night?1:0))>.001;
 const mechanicallyActive=(isolated||camera.position.distanceTo(controls.target)<65)&&animations.some(a=>!a.gate&&a.assetId===selected&&deviceStates.get(a.assetId)?.status!=='offline');
 if(dirty||transition||tour||lightingMoves||mechanicallyActive||explode){renderer.info.reset();composer.render();drawCalls=renderer.info.render.calls;onFrame();partOverlay.hidden=!explode||!isolated;for(const o of explodables){if(o.parent.userData.assetId!==selected)continue;const node=partNodes.get(o.name);if(!node)continue;const b=new T.Box3().setFromObject(o),v=b.getCenter(V());v.y=b.max.y+.2;const p=project(v.toArray());node.hidden=!p.visible;node.style.left=p.x+'px';node.style.top=p.y+'px';}dirty=false;frameSum+=elapsed;frameCount++;if(frameCount===30){frameMS=frameSum/frameCount;frameSum=0;frameCount=0;}}
 }
 renderer.shadowMap.needsUpdate=true;raf=requestAnimationFrame(frame);
 function project(p){const v=V(...p).project(camera);return{x:(v.x*.5+.5)*width,y:(-.5*v.y+.5)*height,visible:v.z>-1&&v.z<1&&Number.isFinite(v.x)};}
 function toggleTour(){if(tour){stopTour();return false;}home();transition=null;tour=true;tourTime=0;selected=null;selection.visible=false;document.body.classList.add('touring');return true;}
 function toggleExplode(){if(!isolated||!selected)return false;explode=!explode;renderer.shadowMap.needsUpdate=true;return explode;}
 function energyView(){isolated=false;pedestal.visible=false;floor.position.y=-2.1;explode=false;shadowFraming();updateVisibility();moveTo(width<700?[108,48,110]:[85,34,83],[34,3,23],2000);}
 const energyRoot=root.getObjectByName('building/energy-center'),clipPlane=new T.Plane(V(0,-1,0),6.8);
 function toggleSection(){section=!section;energyRoot.traverse(o=>{if(!o.isMesh)return;if(!o.userData.sectionMaterial){o.material=o.material.clone();o.userData.sectionMaterial=true;}o.material.clippingPlanes=section?[clipPlane]:[];o.material.clipShadows=true;o.material.needsUpdate=true;});ao.enabled=high&&!section;renderer.shadowMap.needsUpdate=true;dirty=true;return section;}
 async function exportGLB(){const exporter=new GLTFExporter();const clone=root.clone(true),omit=[];clone.userData={coordinateSystem:'local-meters-y-up',modelVersion:Lailin.catalog.site.version,conceptDesign:true,assetCount:assets.size};clone.traverse(o=>{o.visible=true;if(o.userData.nonPhysical)omit.push(o);if(o.userData.restPosition)o.position.fromArray(o.userData.restPosition);if(o.userData.restRotation)o.rotation.fromArray(o.userData.restRotation);delete o.userData.status;});omit.forEach(o=>o.removeFromParent());clone.updateMatrixWorld(true);const data=await exporter.parseAsync(clone,{binary:true,onlyVisible:false,trs:false});const a=document.createElement('a'),url=URL.createObjectURL(new Blob([data],{type:'model/gltf-binary'}));a.href=url;a.download='lailin-campus.glb';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function capture(){const oldRatio=renderer.getPixelRatio(),ratio=Math.min(2,3840/width);try{renderer.setPixelRatio(ratio);composer.setPixelRatio(ratio);ao.setSize(Math.round(width*ratio*.65),Math.round(height*ratio*.65));aa.material.uniforms.resolution.value.set(1/(width*ratio),1/(height*ratio));composer.render();const a=document.createElement('a');a.download='lailin-campus-'+(isolated?selected:night?'blue-hour':'daylight')+'.png';a.href=canvas.toDataURL('image/png');a.click();}finally{renderer.setPixelRatio(oldRatio);composer.setPixelRatio(oldRatio);width=0;resize();dirty=true;}}
 function dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);ro.disconnect();controls.dispose();canvas.removeEventListener('pointerdown',pointerDown);canvas.removeEventListener('pointerup',pick);canvas.removeEventListener('webglcontextlost',onLost);canvas.removeEventListener('webglcontextrestored',onRestored);const gs=new Set(),ms=new Set(),ts=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){ms.add(m);Object.values(m).forEach(v=>{if(v?.isTexture)ts.add(v);});}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());envTarget.dispose();ao.dispose();composer.dispose();renderer.dispose();}
 return{select,home,focus,setNight,setStates,project,capture,exportGLB,toggleExplode,toggleTour,energyView,toggleSection,render:()=>{resize();dirty=true;},setLayer:(layer,visible)=>{visible?hidden.delete(layer):hidden.add(layer);updateVisibility();},quality:v=>{high=v;ao.enabled=v&&!section;renderer.setPixelRatio(v?Math.min(devicePixelRatio,1.5):1);composer.setPixelRatio(renderer.getPixelRatio());sun.shadow.mapSize.set(v?4096:2048,v?4096:2048);sun.shadow.map?.dispose();sun.shadow.map=null;renderer.shadowMap.needsUpdate=true;width=0;resize();},dispose,get night(){return night;},get isolated(){return isolated;},get state(){return{...state,distance:camera.position.distanceTo(controls.target),triangles:meta.stats.triangles,drawCalls,frameMS,high,exploded:explode,section};},debug:{scene,camera,controls,assets,meta,renderer,composer,ao}};
}
(globalThis.Lailin||={}).viewer={create};
