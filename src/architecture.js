import {T,box,cylinder,tube,ring,group,label,materials,random} from './geometry.js';

function railing(g,x,y,z,w,d){
 for(const h of [.35,1.05]){box(g,x,y+h,z-d/2,w,.035,.035,'metal');box(g,x,y+h,z+d/2,w,.035,.035,'metal');box(g,x-w/2,y+h,z,.035,.035,d,'metal');box(g,x+w/2,y+h,z,.035,.035,d,'metal');}
 for(let xx=x-w/2;xx<=x+w/2;xx+=2){box(g,xx,y+.55,z-d/2,.035,1.1,.035,'metal');box(g,xx,y+.55,z+d/2,.035,1.1,.035,'metal');}
}
function solar(g,x,y,z,cols,rows,roofY){
 for(let a=0;a<cols;a++)for(let b=0;b<rows;b++){
 const sx=x+a*2.35,sz=z+b*3.35,p=group(g,'photovoltaic-panel',sx,y,sz);p.rotation.x=.09;
 box(p,0,0,0,2.1,.075,2.9,'metal',.03);box(p,0,.047,0,1.99,.015,2.8,'solar');
 for(let k=-.66;k<1;k+=.66)box(p,k,.06,0,.015,.01,2.8,'metal');
 for(let k=-1.15;k<1.4;k+=.46)box(p,0,.06,k,2,.01,.014,'metal');
 for(const dx of [-.8,.8])for(const dz of [-1,1]){
 const top=y-Math.sin(.09)*dz-.0375*Math.cos(.09),legZ=sz+Math.cos(.09)*dz-.0375*Math.sin(.09);
 box(g,sx+dx,(roofY+top)/2,legZ,.055,top-roofY,.055,'metal');
 box(g,sx+dx,roofY,legZ,.28,.08,.28,'dark');
 }
 }
}
function hq(root){
 const g=group(root,'building/research-center',-36,0,25);
 box(g,0,.18,0,44,.36,27,'stone');
 // Four office floors, 3.75 m floor-to-floor. Orientation follows the sun: +Z faces south and gets
 // horizontal shading, east/west get vertical fins, the north face is a punched spandrel wall.
 for(let k=0;k<4;k++){
 const y=1.1+k*3.75;
 box(g,0,y-.12,0,41,.42,25,'ivory');
 box(g,0,y+1.5,0,39.6,2.82,23.6,'glass');
 box(g,0,y+3.18,0,39.7,.66,23.7,'dark');
 for(const z of [-11.87,11.87])box(g,0,y+.95,z,39.6,.05,.07,'metal');
 for(let x=-18.75;x<=18.8;x+=1.5)for(const z of [-11.86,11.86])box(g,x,y+1.5,z,.06,2.82,.12,'metal');
 for(let z=-10.5;z<=10.6;z+=1.5)for(const x of [-19.86,19.86])box(g,x,y+1.5,z,.12,2.82,.06,'metal');
 // South brise-soleil, interrupted by the double-height entrance portal.
 const spans=k<2?[[-20,.2],[9.8,20]]:[[-20,20]];
 for(const [a,b] of spans){box(g,(a+b)/2,y+2.98,12.3,b-a,.07,.9,'metal');for(let x=a+.6;x<b;x+=3)box(g,x,y+2.94,12.3,.05,.12,.9,'dark');}
 for(let x=-17.6;x<=17.6;x+=1.5)if(Math.abs(Math.round(x*10)+k*13)%5<2&&(k>1||x<0||x>10))box(g,x+.75,y+1.5,11.83,1.36,2.5,.015,'windowLight');
 // East and west: vertical copper fins, deeper at mid-height where low sun is worst.
 for(let z=-10.2;z<10.5;z+=1.2){box(g,20.08,y+1.5,z,.42,2.82,.07,'copper');box(g,-20.08,y+1.5,z,.42,2.82,.07,'copper');if(Math.abs(Math.round(z*10)+k*3)%6<3)box(g,19.8,y+1.5,z+.6,.02,2.5,1.1,'windowLight');}
 // North: solid spandrel panels between window strips.
 for(let x=-18;x<=18;x+=6)box(g,x,y+1.5,-11.95,1.1,2.82,.12,'ivory');
 }
 // Roof slab, membrane, parapet with metal coping, stair and lift overrun.
 box(g,0,16.2,0,41,.4,25,'ivory');
 box(g,0,16.44,0,40.5,.08,24.5,'roof');
 for(const z of [-12.375,12.375]){box(g,0,16.95,z,41,1.1,.25,'ivory');box(g,0,17.52,z,41.1,.05,.36,'metal');}
 for(const x of [-20.375,20.375]){box(g,x,16.95,0,.25,1.1,25,'ivory');box(g,x,17.52,0,.36,.05,25.1,'metal');}
 box(g,-16.5,18,-3,5,3.2,4.5,'ivory');box(g,-16.5,19.65,-3,5.3,.12,4.8,'metal');
 box(g,-16.5,17.5,-.73,1,2.1,.05,'dark');box(g,-16.5,16.62,-.3,1.4,.3,.9,'concrete');
 for(let i=0;i<6;i++)box(g,-18.5+i*.07,16.5+i*.001,-3,.9,.02,.3,'metal');
 for(const [x,z] of [[-19.4,-11.4],[19.4,-11.4],[-19.4,11.4],[19.4,11.4],[0,-11.4],[0,11.4]])cylinder(g,x,16.5,z,.12,.08,'dark',10);
 box(g,11,16.55,6,12,.16,7,'paving');railing(g,11,16.55,6,13,8);
 for(let x=6;x<17;x+=2.2){box(g,x,16.85,9,1.9,.6,.8,'stone',.06);box(g,x,17.2,9,1.7,.3,.65,'hedge',.1);}
 for(const x of [-15,-10]){box(g,x,16.6,6.5,4.5,.25,6,'stone');box(g,x,16.75,6.5,4.25,.1,5.75,'grass');}
 // Entrance: double height bronze portal, glass vestibule and a thin floating canopy.
 box(g,5,3.7,12.3,9.4,7.3,1,'copper',.12);box(g,5,3.4,12.88,8.4,6.4,.15,'glass');
 for(let x=2;x<=8;x+=1.5)box(g,x,2,13.03,.05,3.8,.08,'metal');
 box(g,5,3.94,13.04,8.4,.07,.09,'metal');
 for(const x of [4.7,5.3])tube(g,[[x,1.1,13.12],[x,1.1,13.22],[x,2.1,13.22],[x,2.1,13.12]],.025,'copper',false);
 box(g,5,1.35,13.045,8.35,.045,.01,'ivory');
 box(g,5,4.8,15.2,13,.26,6,'ivory',.12);box(g,5,4.63,15.1,11.5,.035,4.8,'copper');
 for(const x of [-.5,10.5])cylinder(g,x,2.35,17,.065,4.7,'metal');
 for(let i=0;i<3;i++)box(g,5,.09+i*.12,16.5-i*.7,14,.15,6-i*1.4,'stone',.035);
 for(let i=0;i<3;i++)box(g,5,.171+i*.12,19.43-i*1.4,13.8,.012,.1,'copper');
 const ramp=box(g,13,.21,18.05,1.8,.1,5.9,'stone');ramp.rotation.x=Math.atan(.29/5.9);
 box(g,12.5,.35,14.8,2.8,.11,1.4,'stone',.025);
 for(const x of [12.15,13.85]){tube(g,[[x,1.31,15.1],[x,1.02,21]],.025,'metal',false);for(const z of [15.1,18.05,21])cylinder(g,x,.565+(21-z)*.29/5.9,z,.022,.9,'metal',12);}
 label(g,'来霖智造园  研发中心',-8,16.95,12.52,9,.72,'#2f4a42');
 label(g,'1#',-18.4,2.3,12.9,.9,.6,'#2f4a42','#e9e4d6');
 return g;
}
function factory(root,name,x,z,w,d,h,index){
 const g=group(root,name,x,0,z);
 box(g,0,.17,0,w+2,.34,d+2,'stone',.1);
 box(g,0,h/2,0,w,h,d,'concrete',.18);
 // Lower dark plinth anchors the facade. Glazed clerestory gives a human scale.
 box(g,0,1,0,w+.12,1.8,d+.12,'dark');
 box(g,0,h-1.55,d/2+.035,w-.5,1.7,.08,'glassLight');
 box(g,0,h-1.55,-d/2-.035,w-.5,1.7,.08,'glass');
 for(let xx=-w/2+.25;xx<w/2;xx+=.78){
 box(g,xx,h/2+.9,d/2+.13,.09,h-1.6,.28,index===2?'metal':'terra');
 box(g,xx,h/2+.9,-d/2-.13,.09,h-1.6,.28,'metal');
 }
 for(let zz=-d/2;zz<=d/2;zz+=.8){box(g,w/2+.12,h/2,zz,.28,h-.3,.09,index===2?'metal':'terra');box(g,-w/2-.12,h/2,zz,.28,h-.3,.09,'metal');}
 box(g,0,h+.08,0,w+1,.25,d+1,'ivory',.1);
 // A continuous metal roof with shallow glazed rooflights and discrete service zones.
 const roofY=h+.24;
 box(g,0,h+.21,0,w-.4,.06,d-.4,'roof');
 for(let xx=-w/2+1;xx<w/2;xx+=1.8)box(g,xx,roofY+.022,0,.035,.045,d-.6,'metal');
 for(const zz of [-d/2+.04,d/2-.04])box(g,0,h+.31,zz,w+.4,.18,.18,'ivory',.035);
 for(const xx of [-w/2+.04,w/2-.04])box(g,xx,h+.31,0,.18,.18,d,'ivory',.035);
 const rooflights=index===2?[[-4,-7,8],[4,-7,8],[-4,6,8],[4,6,8]]:[[-14,8.5,5],[0,8.5,5],[14,8.5,5]];
 for(const [xx,zz,length] of rooflights){
 const light=group(g,'rooflight',xx,roofY,zz);
 box(light,0,.14,0,2.8,.28,length+.4,'dark',.035);
 box(light,0,.302,0,2.55,.045,length+.15,'roofGlass',.015);
 for(const side of [-1,1])box(light,side*1.34,.33,0,.09,.065,length+.3,'metal');
 for(let p=-length/2;p<=length/2;p+=length/4)box(light,0,.335,p,2.7,.065,.075,'metal');
 }
 if(index===2){for(const xx of [-21,10])solar(g,xx,roofY+.34,-10,6,4,roofY);}
 else solar(g,-18,roofY+.34,-10,15,2,roofY);
 for(let xx=-w/2+6;xx<w/2-3;xx+=10){
 if(index===2&&xx>17)continue;
 box(g,xx,2.3,d/2+.3,6.6,4.6,.4,'ivory',.08);box(g,xx,2.15,d/2+.52,5.8,4.1,.05,'dark');
 for(let yy=.4;yy<4.2;yy+=.32)box(g,xx,yy,d/2+.59,5.65,.025,.03,'metal');
 box(g,xx,4.9,d/2+1.8,7.6,.15,3,'dark',.06);
 for(const dx of [-3.2,3.2]){cylinder(g,xx+dx,.7,d/2+1,.085,1.4,'amber');box(g,xx+dx,.5,d/2+1,.21,.12,.21,'dark');}
 for(const dx of [-2.45,2.45])box(g,xx+dx,.56,d/2+.68,.3,.8,.16,'rubber',.025);
 label(g,`${index===2?'A':'B'}${String(Math.round((xx+w/2-6)/10)+1).padStart(2,'0')}`,xx,4.55,d/2+.535,1.3,.28,'#496155');
 }
 label(g,`${index===2?'2#  生产车间 A':'3#  生产车间 B'}`,-w/4,h-3.35,d/2+.3,w*.3,.9,'#29413a');
 if(index===3){
 box(g,-3.5,11.88,1,23,.22,6.2,'roof',.06);
 for(const zz of [-2.15,4.15])box(g,-3.5,12.002,zz,23.2,.025,.09,'amber');
 for(const xx of [-15.1,8.1])box(g,xx,12.002,1,.09,.025,6.4,'amber');
 }
 return g;
}
function energy(root){
 const g=group(root,'building/energy-center',35,0,18);
 // End the raised building slab behind the ground-mounted pump skids.
 box(g,0,.2,-1.6,32,.4,23.8,'stone',.15);
 // The plant room has actual floor and wall thickness, so sectioning reveals a room.
 box(g,0,.24,-3,30,.24,20,'concrete',.04);
 for(const z of [-13,7]){box(g,0,3.5,z,30,7,.3,'concrete',.06);box(g,0,1,z+(z>0?.18:-.18),30.15,1.6,.12,'dark');}
 for(const x of [-15,15]){box(g,x,3.5,-3,.3,7,20,'concrete',.06);box(g,x+Math.sign(x)*.18,1,-3,.12,1.6,20,'dark');}
 // Passive hydraulic plant and service infrastructure; monitored assets retain their catalog IDs.
 for(const x of [-9,7]){
 const skid=group(g,'plant/heat-exchanger-'+x,x,.4,-4);
 box(skid,0,.16,0,5.4,.3,5.2,'dark',.09);
 for(let z=-1.75;z<=1.75;z+=.14)box(skid,0,1.65,z,2.8,2.65,.065,'metal',.025);
 for(const z of [-1.9,1.9]){box(skid,0,1.65,z,3.3,3.05,.2,'pump',.1);for(const xx of [-1.4,1.4]){cylinder(skid,xx,.26,z,.12,.34,'metal',6);tube(skid,[[xx,.5,-2.05],[xx,.5,2.05]],.07,'metal');tube(skid,[[xx,2.8,-2.05],[xx,2.8,2.05]],.07,'metal');}}
 for(const xx of [-.85,.85])for(const yy of [.75,2.45]){const connector=cylinder(skid,xx,yy,2.16,.25,.36,'metal',24);connector.rotation.x=Math.PI/2;ring(skid,xx,yy,2.35,.28,.05,'metal',[0,0,0]);}
 tube(g,[[x-.85,2.85,-1.65],[x-.85,3.8,-.9],[x-.85,4.7,0],[x-.85,4.7,6.3]],.14,'pipe');
 tube(g,[[x+.85,1.15,-1.65],[x+.85,1.15,-.4],[x+.85,4.35,.4],[x+.85,4.35,6.3]],.14,'copper');
 box(g,x,.382,-4,7,.015,7,'paving');
 for(const zz of [-7.6,-.4])box(g,x,.393,zz,7.2,.013,.07,'amber');
 }
 for(const x of [-12,0,12])for(const z of [-10,4])box(g,x,3.4,z,.22,6.4,.24,'dark');
 for(const z of [-10,4])box(g,0,6.52,z,29,.25,.2,'dark');
 for(const x of [-12,0,12])box(g,x,6.5,-3,.2,.25,19,'dark');
 for(const [y,mat] of [[4.7,'pipe'],[4.35,'copper']])tube(g,[[-12,y,6.3],[-8,y,6.3],[8,y,6.3],[12,y,6.3],[13,y,5.5],[13,y,-10]],.18,mat);
 box(g,0,.38,-3,.62,.05,17,'dark');for(let z=-11;z<6;z+=.2)box(g,0,.417,z,.58,.02,.03,'metal');
 for(const x of [-4,3]){const vessel=cylinder(g,x,1.3,-10.3,.77,3.2,'metal',40);vessel.rotation.z=Math.PI/2;for(const xx of [-1.1,1.1]){ring(g,x+xx,1.3,-10.3,.79,.045,'metal',[0,Math.PI/2,0]);box(g,x+xx,.52,-10.3,.28,.5,1.5,'dark',.04);}}
 // Service hall has open structural bays facing the pump apron.
 for(let x=-14;x<=14;x+=7){box(g,x,.09,12,.75,.18,.8,'stone',.04);box(g,x,3.9,12,.3,7.6,.4,'copper');box(g,x,7.5,6,.22,.32,13,'dark');}
 box(g,0,7.7,1,31.8,.32,30,'ivory',.16);
 for(let x=-14;x<15;x+=.65)box(g,x,7.91,1,.035,.06,28.5,'metal');
 for(let x=-10;x<=10;x+=10){
 box(g,x,8.12,-3,7.5,.4,8,'dark',.12);
 cylinder(g,x,8.65,-3,2.1,1.1,'metal',40);cylinder(g,x,9.24,-3,1.85,.12,'black',40);
 ring(g,x,9.34,-3,1.75,.055,'metal');ring(g,x,9.34,-3,1.35,.035,'metal');ring(g,x,9.34,-3,.85,.035,'metal');
 for(let a=0;a<16;a++){const q=a*Math.PI/8;box(g,x,9.35,-3,.035,.03,3.45,'metal',0,q);}
 }
 for(const x of [-11,11]){cylinder(g,x,3.2,8.8,1.35,5.8,'metal',40);ring(g,x,1.3,8.8,1.36,.06);ring(g,x,4.9,8.8,1.36,.06);tube(g,[[x,5.8,8.8],[x,6.5,8.8],[x+2,6.5,8.8],[x+2,1,8.8]],.13,'pipe');}
 label(g,'4#  能源中心',0,5.4,7.18,7,1.1,'#a19370');
 for(let x=-13;x<=13;x+=1.1)box(g,x,3,7.25,.3,3.2,.12,'metal');
 for(let z=-12;z<7;z+=2)box(g,15.175,4.15,z,.018,5.5,.015,'metal');
 box(g,15.2,1.63,2,.18,3.1,2.45,'dark',.045);box(g,15.31,1.63,2,.025,2.92,2.25,'metal',.02);box(g,15.37,1.4,2.77,.07,.32,.05,'dark',.015);
 label(g,'4#',15.18,5,2,1.4,1,'#829081',null,Math.PI/2);
 return g;
}
export function architecture(root){
 const out=[hq(root),factory(root,'building/production-a',-32,-24,52,32,10.2,2),factory(root,'building/production-b',29,-30,44,28,11.6,3),energy(root)];
 const g=group(root,'building/gatehouse',13,0,58.8);
 box(g,0,.15,0,7,.3,4.2,'stone',.1);box(g,0,1.7,0,6,3.2,3.6,'glass',.25);box(g,0,.55,0,6.2,.8,3.8,'terra',.12);box(g,0,3.45,0,8,.25,4.6,'ivory',.1);
 for(const x of [-2.8,0,2.8])for(const z of [-1.83,1.83])box(g,x,1.95,z,.07,2.6,.08,'copper');
 box(g,-3.03,1.55,0,.08,2.75,1.2,'metal',.025);box(g,-3.08,1.72,0,.03,2.24,1.04,'glass');box(g,-3.12,1.3,.38,.06,.25,.04,'copper');
 box(g,-13,4.4,-2,20,.35,5,'dark',.14);for(const x of [-22,-4]){box(g,x,.14,-2,.65,.28,.65,'stone',.05);box(g,x,2.2,-2,.22,4.4,.22,'copper');}
 label(g,'来霖智造园',-13,4.38,.53,6,.55,'#f1e4c2');out.push(g);return out;
}

