import {T,V,box,cylinder,tube,ring,group,label,materials,random} from './geometry.js';

export function landscape(root){
 const site=group(root,'site/plinth');site.userData.layer='ground';
 box(site,0,-.15,0,164,.16,124,'stone',.12);
 box(site,0,-.03,0,162,.16,122,'paving',.35);
 // Public streets and adjoining industrial blocks continue beyond the campus fence.
 const district=group(root,'site/district');district.userData.layer='ground';
 box(district,0,-.30,0,1100,.35,1100,'districtRoof');
 for(const x of [-96,96])box(district,x,-.09,0,14,.06,620,'asphalt');
 for(const z of [-76,76,-190,192])box(district,0,-.089,z,620,.06,14,'asphalt');
 box(district,0,-.065,68,8,.10,16,'asphalt');
 for(const x of [-85.2,85.2])box(district,x,-.025,0,6,.15,130,'paving',.08);
 for(const z of [-65.7,65.7])for(const [a,b] of [[-88,-5],[5,88]])box(district,(a+b)/2,-.025,z,b-a,.15,6,'paving',.08);
 for(let k=-300;k<=300;k+=8){
  for(const z of [-76,76,-190,192])if(Math.abs(Math.abs(k)-96)>14)for(const side of [-1,1])box(district,k,-.052,z+side*.23,4,.018,.12,'white');
  for(const x of [-96,96])if(![-190,-76,76,192].some(z=>Math.abs(k-z)<14))for(const side of [-1,1])box(district,x+side*.23,-.052,k,.12,.018,4,'white');
 }
 for(const x of [-106.5,-85.5,85.5,106.5])for(const z of [-76,76])for(let i=-5;i<=5;i++)box(district,x,-.048,z+i*.95,3.2,.02,.5,'white');
 for(const x of [-96,96])for(const z of [-86.5,-65.5,65.5,86.5])for(let i=-5;i<=5;i++)box(district,x+i*.95,-.048,z,.5,.02,3.2,'white');
 for(const x of [-88.5,88.5,-103.5,103.5])for(const [a,b] of [[-178,-90],[-62,62],[90,178]])box(district,x,.02,(a+b)/2,.28,.24,b-a,'stone',.04);
 for(const z of [-83.5,-68.5,68.5,83.5])for(const [a,b] of [[-250,-110],[-82,-5],[5,82],[110,250]])box(district,(a+b)/2,.02,z,b-a,.24,.28,'stone',.04);
 // Low industrial neighbours establish scale without competing with monitored assets.
 function neighbour(x,z,w,d,h){
  const g=group(district,'district/industrial-building',x,0,z);
  box(g,0,.05,0,w+6,.24,d+6,'paving',.08);
  box(g,0,h/2,0,w,h,d,'districtWall');
  for(const side of [-1,1]){
   for(const y of [2.9,6.7])if(y<h-1)box(g,0,y,side*(d/2+.025),w-.7,1.55,.055,'districtGlass');
   for(let xx=-w/2+1;xx<w/2;xx+=3.5)box(g,xx,h/2,side*(d/2+.1),.15,h,.26,'districtWall');
   box(g,side*(w/2-.13),h+.36,0,.26,.6,d,'districtWall');
   box(g,0,h+.36,side*(d/2-.13),w,.6,.26,'districtWall');
  }
  box(g,0,h+.05,0,w-.6,.2,d-.6,'districtRoof');
  for(let xx=-w/2+5;xx<w/2-3;xx+=10){box(g,xx,h+.35,0,3.2,.5,d*.64,'districtGlass');box(g,xx,h+.64,0,3.1,.08,d*.64,'metal');}
  for(const xx of [-w*.27,w*.27]){box(g,xx,h+.55,-d*.28,4,.7,3,'districtWall');box(g,xx,h+.94,-d*.28,3.6,.08,2.6,'dark');}
  for(let xx=-w/2+7;xx<w/2;xx+=12){box(g,xx,2.1,d/2+.04,4.4,4.2,.12,'districtGlass');box(g,xx,4.4,d/2+1.7,6,.16,3.4,'districtWall');}
 }
 for(const b of [[-145,-31,53,60,11],[148,-28,54,64,12],[-48,-131,61,60,13],[37,-132,64,61,10],[145,-133,55,58,14],[-145,-132,52,60,12],[-142,129,52,63,8],[145,130,56,61,10],[-45,-244,66,61,18],[42,-246,65,65,15]])neighbour(...b);
 // A planted public green and retention basin complete the foreground block.
 box(district,0,.0,130,156,.24,73,'grass',.3);
 box(district,0,.14,130,5,.12,73,'paving',.06);
 box(district,0,.14,115,156,.12,4,'paving',.06);
 box(district,42,.14,142,51,.2,34,'stone',.15);
 box(district,42,.25,142,49,.03,32,'water',.10);
 for(const z of [124.7,159.3])box(district,42,.32,z,52,.18,.6,'paving');
 for(const x of [16.2,67.8])box(district,x,.32,142,.6,.18,35,'paving');
 for(let z=126;z<=158;z+=8){box(district,10,.5,z,4,.38,.85,'dark',.04);box(district,10,.74,z,4.1,.09,.9,'copper',.02);}
 const roads=group(root,'site/mobility');roads.userData.layer='ground';
 for(const x of [-73,73])box(roads,x,.08,0,8,.07,114,'asphalt',.3);
 box(roads,0,.081,-53,150,.07,8,'asphalt',.2);
 box(roads,0,.081,51,150,.07,6,'asphalt',.2);
 box(roads,0,.08,1,137,.07,6.8,'asphalt');box(roads,0,.08,0,6,.07,102,'asphalt');
 box(roads,0,.08,55.5,8,.07,13,'asphalt');
 for(let z=-48;z<=48;z+=5)for(const x of [-73,73])box(roads,x,.128,z,.13,.014,2.25,'white');
 for(let x=-67;x<=67;x+=5)for(const z of [-53,51,1]){if(Math.abs(x)<6||z===51&&Math.abs(x+31)<5)continue;box(roads,x,.13,z,2.25,.014,.13,'white');}
 for(let z=-46;z<47;z+=5){if(z>-7&&z<10)continue;box(roads,0,.13,z,.13,.014,2.25,'white');}
 // Break kerbs at junctions, parking mouths and the pedestrian crossing.
 for(const x of [-68.65,68.65])for(const [a,b] of [[-48.5,-3.1],[5.1,48.5]])box(roads,x,.16,(a+b)/2,.28,.23,b-a,'ivory',.06);
 for(const [a,b] of [[-68.5,-3.5],[3.5,68.5]])box(roads,(a+b)/2,.16,-48.65,b-a,.23,.28,'ivory',.06);
 for(const [a,b] of [[-68.5,-56.5],[-39.5,-35],[-27,-5],[5,15.5],[58,68.5]])box(roads,(a+b)/2,.16,47.65,b-a,.23,.28,'ivory',.06);
 for(const x of [-3.35,3.35])for(const [a,b] of [[-48,-3.4],[8,47]])box(roads,x,.16,(a+b)/2,.2,.23,b-a,'ivory',.045);
 for(const z of [-.9,6.6])for(let k=-3;k<=3;k++)box(roads,k*.8,.14,z,.5,.016,1.8,'white');
 for(const x of [-66.5,66.5])for(let k=-3;k<=3;k++)box(roads,x,.14,1+k*.95,2,.016,.55,'white');
 for(let k=-3;k<=3;k++)box(roads,-31,.14,51+k*.78,4,.016,.44,'white');
 box(roads,0,.17,58.2,.55,.24,7.5,'stone',.1);
 box(roads,-2,.135,56.4,2.7,.015,.16,'white');
 for(const x of [-2,2]){const arrow=group(roads,'gate-lane-arrow',x,.14,60.4);arrow.rotation.y=x<0?Math.PI:0;box(arrow,0,0,0,.13,.014,1.1,'white');for(const s of [-1,1])box(arrow,s*.19,0,.38,.12,.014,.6,'white',0,-s*.7);}
 // Pavement setbacks and landscape zones respect building and service envelopes.
 for(const [x,z,w,d] of [[-14,43,14,7],[-62,22,8,36],[60,22,9,38],[-62,-25,8,38],[59,-32,8,29],[-10,21,5.5,29],[16,23,1.6,23]]){
 box(site,x,.14,z,w,.17,d,'grass',.3);
 }
 const park=group(root,'site/garden');park.userData.layer='landscape';
 box(park,10.8,.09,23,11.6,.05,31,'paving',.12);
 // The reflecting pool sits east of the continuous north-south carriageway.
 box(park,10.8,.19,24,5.2,.15,17,'stone',.12);
 box(park,10.8,.273,24,4.72,.016,16.52,'water',.08);
 for(const x of [8.32,13.28])box(park,x,.29,24,.24,.1,17,'ivory',.04);
 for(const z of [15.62,32.38])box(park,10.8,.29,z,5.2,.1,.24,'ivory',.04);
 // Three flagpoles on a stone plinth face the arrival court, as most Chinese campuses have.
 box(park,10.8,.29,12,4.2,.32,2,'stone');
 for(const [x,h] of [[9.3,11],[10.8,12.5],[12.3,11]]){cylinder(park,x,.45+h/2,12,.05,h,'metal',12,.035);cylinder(park,x,.5,12,.12,.12,'metal',12);const top=new T.Mesh(new T.SphereGeometry(.07,10,6),materials.metal);top.position.set(x,.45+h+.06,12);park.add(top);}
 for(let z=16;z<=31;z+=5){box(park,16,.36,z,1.5,.45,3.8,'stone',.1);box(park,16,.69,z,1.28,.25,3.5,'hedge',.12);}
 // Arrival forecourt and visitor bays have separate, level paved surfaces.
 box(site,-31,.09,43.1,16,.05,9,'paving',.06);
 box(site,-23,.09,46.6,2,.05,1.2,'paving',.04);
 box(roads,-48,.08,44.5,16.8,.07,7,'asphalt',.1);
 box(roads,36.75,.08,44.5,42.5,.07,7,'asphalt',.1);
 for(const x of [-48,36.75]){const w=x<0?16.8:42.5;box(roads,x,.125,41.65,w,.025,.18,'dark');for(let k=x-w/2+.15;k<x+w/2;k+=.25)box(roads,k,.14,41.65,.07,.01,.15,'metal');}
 box(site,-42,.15,45.6,3.4,.22,3.8,'stone',.09);box(site,-42,.271,45.6,3.1,.025,3.5,'grass',.05);
 for(const [x,z] of [[-7,15],[-7,28],[-19,39.8],[10.8,35.8]]){
 box(park,x,.46,z,3.3,.23,.85,'dark',.07);for(let i=-4;i<=4;i++)box(park,x+i*.32,.62,z,.25,.08,.83,'copper',.025);
 for(const sx of [-1.2,1.2])box(park,x+sx,.27,z,.12,.52,.6,'dark',.02);
 }
 const trees=group(root,'site/trees');trees.userData.layer='landscape';
 const leaves=Array.from({length:6},()=>[]),trunks=[],branches=[];
 function tree(x,z,h=4.8,r=1.6,paved=false){
 if(paved){box(site,x,.064,z,1.15,.025,1.15,'bark');for(const side of [-1,1]){box(site,x+side*.61,.082,z,.09,.065,1.3,'stone');box(site,x,.082,z+side*.61,1.13,.065,.09,'stone');}}
 trunks.push({x,y:h*.36,z,h:h*.72});
 for(let k=0;k<6;k++){const a=k/6*Math.PI*2+random()*.4;branches.push({from:V(x,h*(.35+random()*.2),z),to:V(x+Math.cos(a)*r*.72,h*(.72+random()*.2),z+Math.sin(a)*r*.72)});}
 for(let i=0;i<14;i++){
 const theta=random()*Math.PI*2,rad=Math.sqrt(random())*r*.65,yy=h*.53+random()*h*.33;
 leaves[Math.floor(random()*6)].push({x:x+Math.cos(theta)*rad,y:yy,z:z+Math.sin(theta)*rad,sx:r*(.42+random()*.38),sy:r*(.45+random()*.55),sz:r*(.42+random()*.38),r:random()*6});
 }
 }
 for(let z=-55;z<=57;z+=6.3)for(const x of [-79,79])tree(x+(random()-.5)*.65,z,4.5+random()*2,1.8,true);
 for(let x=-72;x<=73;x+=7)for(const z of [-59,59]){if(z>0&&Math.abs(x)<19)continue;tree(x,z,4.4+random()*1.8,1.65,true);}
 for(const [x,z] of [[-61,10],[-61,20],[-61,31],[-17.5,43.5],[-9,43.5],[-10,10],[-10,33],[15.8,9],[15.8,37],[60,34],[60,24],[60,8],[59,-42],[59,-22],[-61,-35],[-61,-12]])tree(x,z,4.4+random()*1.5,1.5);
 for(let z=-174;z<=174;z+=15)for(const x of [-109,109]){if(Math.abs(Math.abs(z)-76)<16)continue;tree(x,z,5.5+random()*1.8,2.2);}
 for(let x=-75;x<=75;x+=13)for(const z of [-88,88])tree(x,z,5.5+random()*1.5,2.1);
 for(const x of [-69,-48,-26])for(const z of [105,127,151,166])tree(x+random()*3,z,5.6+random()*2,2.6);
 for(const z of [101,168])for(const x of [15,40,65])tree(x,z,5.5,2.2);
 // Shade tree and low shrubs in the visitor parking island.
 tree(-42,44.8,5.2,1.9);
 for(let i=0;i<14;i++)leaves[1].push({x:-42+(random()-.5)*2.2,y:.45,z:44.8+(random()-.5)*4.2,sx:.3,sy:.26,sz:.3,r:random()*6});
 // Shrub masses at building bases and lawn edges, so lawns do not meet facades bare.
 for(const [x,z,w,d] of [[-50,39.8,10,1],[-17,40.3,6,1],[-59.2,22,1.2,30],[-12.2,22,1,22],[60,-32,1.2,20],[-61.5,-25,1.2,24]])
  for(let i=0;i<Math.max(w,d)*1.6;i++)leaves[i%2?0:3].push({x:x+(random()-.5)*w,y:.42,z:z+(random()-.5)*d,sx:.42,sy:.36,sz:.42,r:random()*6});
 // Layered planting beds, ornamental grasses, then grass understory.
 for(const [x,z,w,d] of [[-48,39.5,15,1],[-14,46,13,1],[61,21,1.2,30],[-61,21,1.2,30],[16,23,1,19]]){
 for(let i=0;i<Math.max(w,d)*4;i++){const px=x+(random()-.5)*w,pz=z+(random()-.5)*d;
 leaves[2].push({x:px,y:.35,z:pz,sx:.36,sy:.3,sz:.38,r:random()*6});}
 }
 const dummy=new T.Object3D();
 const leafCanvas=document.createElement('canvas');leafCanvas.width=leafCanvas.height=256;const leafContext=leafCanvas.getContext('2d');
 for(let i=0;i<1250;i++){
 const a=random()*Math.PI*2,rad=Math.pow(random(),.6)*116,cx=128+Math.cos(a)*rad,cy=128+Math.sin(a)*rad;
 leafContext.save();leafContext.translate(cx,cy);leafContext.rotate(random()*6.28);leafContext.fillStyle=['#5e7943','#71904e','#8a9e60','#496436','#93a568'][Math.floor(random()*5)];leafContext.beginPath();leafContext.ellipse(0,0,2+random()*4,1.4+random()*2,0,0,Math.PI*2);leafContext.fill();leafContext.restore();
 }
 const leafMap=new T.CanvasTexture(leafCanvas);leafMap.colorSpace=T.SRGBColorSpace;leafMap.anisotropy=8;
 const leafMaterial=new T.MeshStandardMaterial({name:'leaf-clusters',map:leafMap,alphaTest:.45,side:T.DoubleSide,roughness:.96,metalness:0,color:'#aec195'});
 const allLeaves=leaves.flat(),cards=new T.InstancedMesh(new T.PlaneGeometry(1,1),leafMaterial,allLeaves.length*3);
 let ci=0;for(const p of allLeaves){for(let a=0;a<3;a++){dummy.position.set(p.x,p.y,p.z);dummy.scale.set(p.sx*2.2,p.sy*2.2,1);dummy.rotation.set((random()-.5)*1.7,p.r+a*Math.PI/3,(random()-.5)*.6);dummy.updateMatrix();cards.setMatrixAt(ci++,dummy.matrix);}}
 cards.castShadow=cards.receiveShadow=true;cards.instanceMatrix.needsUpdate=true;trees.add(cards);
 for(let color=0;color<6;color++){
 const entries=leaves[color],mesh=new T.InstancedMesh(new T.IcosahedronGeometry(1,1),materials['leaf'+color],entries.length);
 for(let i=0;i<entries.length;i++){const p=entries[i];dummy.position.set(p.x,p.y,p.z);dummy.scale.set(p.sx*.2,p.sy*.24,p.sz*.2);dummy.rotation.set(0,p.r,.15);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 mesh.castShadow=mesh.receiveShadow=true;mesh.instanceMatrix.needsUpdate=true;trees.add(mesh);
 }
 const trunk=new T.InstancedMesh(new T.CylinderGeometry(.055,.14,1,7),materials.bark,trunks.length);
 trunks.forEach((p,i)=>{dummy.position.set(p.x,p.y,p.z);dummy.rotation.set(0,0,0);dummy.scale.set(1,p.h,1);dummy.updateMatrix();trunk.setMatrixAt(i,dummy.matrix);});trunk.castShadow=true;trees.add(trunk);
 const limbs=new T.InstancedMesh(new T.CylinderGeometry(.024,.062,1,7),materials.bark,branches.length);
 branches.forEach((p,i)=>{dummy.position.copy(p.from).lerp(p.to,.5);const dir=p.to.clone().sub(p.from);dummy.quaternion.setFromUnitVectors(V(0,1,0),dir.clone().normalize());dummy.scale.set(1,dir.length(),1);dummy.updateMatrix();limbs.setMatrixAt(i,dummy.matrix);});limbs.castShadow=true;trees.add(limbs);
 const fence=group(root,'site/boundary');fence.userData.layer='landscape';
 for(let z=-60;z<=60;z+=3)for(const x of [-81,81]){box(fence,x,.6,z,.07,1.2,.07,'dark');if(z<60){box(fence,x,1.1,z+1.5,.04,.04,3,'dark');box(fence,x,.4,z+1.5,.035,.035,3,'metal');}}
 for(let x=-80;x<80;x+=3)for(const z of [-61,61]){if(z>0&&Math.abs(x)<18)continue;box(fence,x,.6,z,.07,1.2,.07,'dark');box(fence,x+1.5,1.1,z,3,.04,.04,'dark');}
 const mobility=group(root,'site/vehicles');mobility.userData.layer='landscape';
 function car(x,z,color,angle=0){
 const g=group(mobility,'electric-vehicle',x,.075,z);g.rotation.y=angle;
 box(g,0,.59,0,1.8,.54,4.15,color,.22);box(g,0,1.04,-.18,1.55,.61,2.05,'glass',.25);box(g,0,1.36,-.23,1.46,.13,1.15,color,.06);
 for(const sx of [-.78,.78]){box(g,sx,1.05,-.15,.045,.54,.065,'dark',.025);box(g,sx,.78,-.25,.026,.035,2.35,'metal');box(g,sx*1.17,1,.55,.18,.11,.24,color,.045);for(const zz of [-.65,.32])box(g,sx*1.06,.86,zz,.035,.027,.18,'metal',.01);}
 box(g,0,.6,2.104,.47,.13,.016,'dark',.02);box(g,0,.32,1.85,1.45,.08,.18,'dark',.04);
 for(const sx of [-.86,.86])for(const zz of [-1.3,1.3]){const w=cylinder(g,sx,.38,zz,.34,.16,'rubber',24);w.rotation.z=Math.PI/2;const hub=cylinder(g,sx*1.08,.38,zz,.2,.025,'metal',16);hub.rotation.z=Math.PI/2;}
 for(const sx of [-.57,.57]){box(g,sx,.67,2.06,.4,.1,.05,'lamp',.035);box(g,sx,.68,-2.06,.42,.07,.035,'red',.015);}return g;
 }
 box(mobility,-46,.128,45,3.2,.012,5.7,'accessible');
 const access=label(mobility,'无障碍',-46,.14,46.2,1.4,.45,'#f1f4f6');access.rotation.x=-Math.PI/2;
 box(site,-42,.16,44.8,3,.2,5.2,'stone');box(site,-42,.27,44.8,2.7,.03,4.9,'grass');
 for(const [i,x] of [-54,-50,-46].entries()){
 for(const side of [-1,1])box(mobility,x+side*1.65,.13,45,.08,.012,5.8,'white');
 box(mobility,x,.13,42.1,3.3,.012,.08,'white');box(mobility,x,.22,42.55,1.45,.2,.18,'rubber',.035);
 const number=label(mobility,String(i+1).padStart(2,'0'),x,.14,47.55,.65,.35,'#e6e5d3');number.rotation.x=-Math.PI/2;
 if(i<2)car(x,44.7,i%2?'dark':'ivory');
 }
 for(let x=19;x<=54;x+=7){
 box(mobility,x,.13,44.9,3.1,.015,5.6,'parkingPaint',.04);
 for(const side of [-1,1])box(mobility,x+side*1.65,.145,44.9,.08,.012,5.8,'white');
 box(mobility,x,.145,42,3.3,.012,.08,'white');box(mobility,x,.22,42.55,1.45,.2,.18,'rubber',.035);
 const ev=label(mobility,'EV',x,.152,47.35,.75,.38,'#dce7cc');ev.rotation.x=-Math.PI/2;
 if(x!==33&&x!==47)car(x,44.8,['ivory','metal','paintBlue','dark'][(x-19)/7%4],Math.PI);
 }
 car(-75,25,'ivory');car(75,-18,'dark',Math.PI);
 for(const [x,z,col,angle] of [[-52,72,'ivory',Math.PI/2],[32,80,'paintBlue',-Math.PI/2],[78,72,'dark',Math.PI/2],[92,-21,'ivory',0],[100,30,'metal',Math.PI],[-92,19,'dark',Math.PI],[-100,-40,'ivory',0],[14,-72,'dark',-Math.PI/2]])car(x,z,col,angle);
 const stop=group(district,'district/bus-stop',-30,0,86);
 for(const x of [-4.5,4.5])box(stop,x,1.6,0,.14,3.2,.14,'dark');
 box(stop,0,3.25,0,10,.18,3.2,'ivory',.1);box(stop,0,1.65,-1.15,9,2.7,.06,'districtGlass');
 box(stop,0,.55,-.5,7,.12,.65,'copper',.03);
 // Delivery truck, dock bumpers, loading lines.
 for(const [x,z] of [[-52,-5.25],[-32,-5.25],[23,-12.5]]){
 // Compact delivery vans fit the 5.1 m loading apron without entering the road.
 const t=group(mobility,'logistics-van',x,.085,z);
 box(t,0,1.24,-.4,1.95,1.72,3.1,'ivory',.1);box(t,0,.98,1.6,1.9,1.35,1.1,'ivory',.14);
 box(t,0,1.43,2.11,1.66,.55,.07,'glass',.055);box(t,0,.54,2.18,1.8,.15,.12,'dark',.04);
 box(t,0,.82,2.2,.72,.2,.02,'black',.02);box(t,0,.39,0,1.6,.17,4.2,'dark',.04);
 for(const side of [-1,1]){
 box(t,side*.961,1.38,1.57,.04,.52,.78,'glass',.04);box(t,side*1.075,1.43,1.87,.14,.2,.16,'dark',.025);
 box(t,side*.975,.99,1.52,.035,.045,.19,'metal');box(t,side*.67,.93,2.2,.35,.17,.02,'lamp',.025);
 box(t,side*.7,.65,-1.97,.22,.16,.025,'red',.02);box(t,side*.49,1.24,-1.962,.94,1.57,.028,'metal',.03);
 box(t,side*.11,1.24,-1.985,.024,1.32,.025,'dark');box(t,side*.985,.57,-.4,.035,.12,2.8,'metal');
 for(const zz of [-1.28,1.48]){const wheel=cylinder(t,side*.97,.44,zz,.41,.16,'rubber',24);wheel.rotation.z=Math.PI/2;const hub=cylinder(t,side*1.061,.44,zz,.23,.025,'metal',16);hub.rotation.z=Math.PI/2;}
 }
 label(t,'来霖物流',.995,1.47,-.4,1.4,.35,'#537660',null,Math.PI/2);
 for(const side of [-1,1])box(mobility,x+side*1.5,.135,z, .08,.016,4.6,'amber');
 }
 // Street furniture that a real campus cannot do without.
 const civil=group(root,'site/civil');civil.userData.layer='landscape';
 function hydrant(x,z){box(civil,x,.2,z,.6,.12,.6,'concrete');cylinder(civil,x,.62,z,.13,.72,'hydrant',16);cylinder(civil,x,1.02,z,.16,.08,'hydrant',16);const cap=new T.Mesh(new T.SphereGeometry(.13,14,8,0,Math.PI*2,0,Math.PI/2),materials.hydrant);cap.position.set(x,1.06,z);cap.castShadow=true;civil.add(cap);for(const a of [0,Math.PI]){const o=cylinder(civil,x+Math.cos(a)*.17,.72,z+Math.sin(a)*.17,.055,.14,'hydrant',10);o.rotation.z=Math.PI/2;}}
 for(const [x,z] of [[-67.9,-30],[-67.9,18],[67.9,-36],[67.9,12],[-40,-47.9],[10,-47.9],[-22,47.4],[62,47.4],[-4.1,-22],[4.1,14]])hydrant(x,z);
 // Manholes follow the utility corridors under the carriageways; gully grates sit at the kerb.
 for(let z=-44;z<=44;z+=16)cylinder(civil,1.2,.12,z,.36,.02,'dark',20);
 for(let x=-60;x<=60;x+=20)cylinder(civil,x,.12,-.2,.36,.02,'dark',20);
 for(const x of [-73,73])for(let z=-40;z<=40;z+=20)cylinder(civil,x+1.6,.12,z+6,.36,.02,'dark',20);
 for(const x of [-69.3,69.3])for(let z=-45;z<=45;z+=18){box(civil,x,.12,z,.36,.02,.75,'dark');for(let k=-.3;k<=.31;k+=.1)box(civil,x,.132,z+k,.3,.01,.03,'metal');}
 for(let x=-60;x<=60;x+=24)for(const z of [-49.3,48.3]){box(civil,x,.12,z,.75,.02,.36,'dark');for(let k=-.3;k<=.31;k+=.1)box(civil,x+k,.132,z,.03,.01,.3,'metal');}
 // Non-asset street lights on the central roads; the monitored LGT poles stay on the perimeter roads.
 function streetLight(x,z,rot){const l=group(civil,'street-light',x,0,z);l.rotation.y=rot;box(l,0,.1,0,.6,.2,.6,'concrete');cylinder(l,0,3.4,0,.075,6.6,'dark',12,.05);tube(l,[[0,6.5,0],[0,6.75,.2],[0,6.75,1.2]],.045,'dark');box(l,0,6.7,1.2,.36,.1,.7,'dark');box(l,0,6.64,1.2,.28,.012,.5,'lamp');}
 for(const x of [-50,-25,25,50])streetLight(x,5.1,Math.PI);
 for(const z of [-36,-16,20,40])streetLight(3.9,z,-Math.PI/2);
 // Bollards close the forecourt to cars.
 for(let x=-34.4;x<=-27.5;x+=1.35){cylinder(civil,x,.55,47.3,.08,.9,'metal',14);box(civil,x,.93,47.3,.17,.03,.17,'dark');}
 // Covered cycle parking beside the visitor bays.
 const bikes=group(civil,'cycle-shelter',-60,0,43.5);
 box(bikes,0,.11,0,3.4,.05,7.6,'paving');
 for(const z of [-3.4,0,3.4]){cylinder(bikes,-1.3,1.2,z,.06,2.2,'dark',10);box(bikes,-.4,2.28,z,2,.08,.1,'dark');}
 box(bikes,-.3,2.36,0,2.6,.05,7.4,'roofGlass');box(bikes,-1.35,1.5,0,.04,1.6,7.2,'districtGlass');
 for(let z=-3;z<=3.1;z+=.75)tube(bikes,[[.1,.14,z],[.1,.72,z],[.9,.72,z],[.9,.14,z]],.022,'metal',false);
 // Packaged 10 kV substation feeding the energy centre switchboards.
 const sub=group(civil,'box-substation',58.5,0,15);
 box(sub,0,.15,0,4.8,.3,3.4,'concrete');box(sub,0,1.5,0,4,2.4,2.6,'districtWall');box(sub,0,2.76,0,4.3,.12,2.9,'districtRoof');
 for(const x of [-1.3,0,1.3]){box(sub,x,1.35,1.31,1.1,1.9,.03,'districtRoof');for(let y=2.1;y<2.5;y+=.1)box(sub,x,y,1.33,.9,.03,.03,'dark');}
 label(sub,'箱变 10/0.4 kV',0,2.45,1.34,1.6,.24,'#2f3d38','#e3c95a');
 // Refuse and recycling point at the logistics apron.
 for(const [i,col] of ['dark','paintBlue','hydrant','dark'].entries()){box(civil,47.5+i*.8,.55,-12.5,.62,1,.7,col,.05);box(civil,47.5+i*.8,1.07,-12.5,.66,.05,.74,'dark');}
 // Foundation hedge inside the boundary fence.
 for(const x of [-80.1,80.1])box(civil,x,.5,0,.9,1,116,'hedge',.3);
 for(const [a,b] of [[-78,-19],[19,78],[-78,78]])for(const z of b===78&&a===-78?[-60.1]:[60.1])box(civil,(a+b)/2,.5,z,b-a,1,.9,'hedge',.3);
 const people=group(root,'site/people');people.userData.layer='landscape';
 for(const [x,z] of [[-31,45.5],[-29.8,45],[-22,46.5],[7,38],[8,37.5],[8,59],[-6,13],[45,36],[-58,-5.5]]){
 cylinder(people,x,.95,z,.17,.75,'dark',12,.23);const head=new T.Mesh(new T.SphereGeometry(.15,12,8),materials.stone);head.position.set(x,1.5,z);people.add(head);
 for(const sx of [-.1,.1])box(people,x+sx,.38,z,.12,.68,.15,'dark',.05);
 }
 const pipes=group(root,'site/pipe-network');pipes.userData.layer='pipes';
 for(const [z,mat] of [[29.55,'pipe'],[33.9,'copper']]){
 tube(pipes,[[23,.42,z],[27,.42,z],[45,.42,z],[48,.42,z],[49,.65,z],[49,2,z-2],[49,2,23]],.16,mat);
 for(let x=24;x<=48;x+=4){box(pipes,x,.13,z,.7,.26,.7,'concrete',.06);ring(pipes,x,.42,z,.25,.04,'metal',[0,Math.PI/2,0]);}
 }
 for(const x of [27,33,39,45]){
 tube(pipes,[[x+.5,.2,30.375],[x+.5,.4,30.05],[x+.5,.42,29.55]],.115,'pipe');
 tube(pipes,[[x+.5,.35,32.26],[x+.5,.42,32.8],[x+.5,.42,33.9]],.09,'copper');
 }
 const signs=group(root,'site/signage');signs.userData.layer='landscape';
 for(const [x,z,text] of [[-65,7,'A 研发办公区'],[63,-8,'B 生产物流区'],[17,36,'C 能源设备区']]){box(signs,x,.9,z,.17,1.8,2.5,'dark',.06);label(signs,text,x+.094,1.2,z,2.05,.35,'#e2d5b3',null,Math.PI/2);}
 return [site,roads,park,trees,fence,mobility,civil,people,pipes,signs,district];
}
