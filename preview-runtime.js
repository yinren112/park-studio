(()=>{var qg=Object.defineProperty;var Yg=(s,e)=>{for(var t in e)qg(s,t,{get:e[t],enumerable:!0})};(globalThis.Lailin||={}).catalog=(()=>{let s={camera:{label:"\u89C6\u9891\u5B89\u9632",icon:"camera",metric:"latency",metricLabel:"\u94FE\u8DEF\u5EF6\u65F6",unit:"ms",range:[0,5e3],base:38,warning:180,alarm:400,recovery:130},light:{label:"\u9053\u8DEF\u7167\u660E",icon:"sun",metric:"power",metricLabel:"\u6709\u529F\u529F\u7387",unit:"W",range:[0,300],base:56,warning:95,alarm:120,recovery:85},meter:{label:"\u914D\u7535\u76D1\u6D4B",icon:"bolt",metric:"temperature",metricLabel:"\u67DC\u5185\u6E29\u5EA6",unit:"\xB0C",range:[-40,150],base:34,warning:55,alarm:70,recovery:48},hvac:{label:"\u6696\u901A\u7A7A\u8C03",icon:"fan",metric:"temperature",metricLabel:"\u51FA\u98CE\u6E29\u5EA6",unit:"\xB0C",range:[-30,120],base:18,warning:32,alarm:42,recovery:28},pump:{label:"\u7ED9\u6392\u6C34",icon:"drop",metric:"temperature",metricLabel:"\u8F74\u627F\u6E29\u5EA6",unit:"\xB0C",range:[-20,150],base:43,warning:65,alarm:78,recovery:58},charger:{label:"\u5145\u7535\u8BBE\u65BD",icon:"plug",metric:"temperature",metricLabel:"\u6A21\u5757\u6E29\u5EA6",unit:"\xB0C",range:[-40,130],base:36,warning:55,alarm:72,recovery:48},gate:{label:"\u51FA\u5165\u7BA1\u7406",icon:"gate",metric:"cycles",metricLabel:"\u7D2F\u8BA1\u901A\u884C",unit:"\u6B21",range:[0,1e8],base:260,warning:null,alarm:null,recovery:null},sensor:{label:"\u73AF\u5883\u611F\u77E5",icon:"leaf",metric:"pm25",metricLabel:"PM2.5",unit:"\u03BCg/m\xB3",range:[0,2e3],base:24,warning:75,alarm:150,recovery:60},bench:{label:"\u53F0\u67B6\u73AF\u5883",icon:"leaf",metric:"temperature",metricLabel:"\u63A2\u5934\u6E29\u5EA6",unit:"\xB0C",range:[-20,60],base:25,warning:28,alarm:30,recovery:27}},e=[],t={A:"\u7814\u53D1\u529E\u516C\u533A",B:"\u751F\u4EA7\u7269\u6D41\u533A",C:"\u80FD\u6E90\u8BBE\u5907\u533A",D:"\u9053\u8DEF\u4E0E\u516C\u5171\u533A"},n={camera:"CAM",light:"LGT",meter:"PWR",hvac:"AHU",pump:"PMP",charger:"EV",gate:"GAT",sensor:"ENV"};function i(r,a,o,l){let c=e.filter(d=>d.type===r).length+1,h=`${n[r]}-${String(c).padStart(2,"0")}`;e.push({id:h,type:r,name:l||`${s[r].label} ${String(c).padStart(2,"0")}`,zone:o,zoneName:t[o],position:a,modelNode:`asset/${h}`,serial:`LL-2609-${n[r]}-${String(c).padStart(4,"0")}`,manufacturer:"\u6765\u9716 \xB7 \u6F14\u793A\u8D44\u4EA7",installedAt:"2026-06-01",maintenanceDue:"2026-12-01",protocol:r==="camera"?"ONVIF / \u7F51\u5173\u8F6C\u53D1":r==="meter"?"Modbus RTU / \u7F51\u5173\u8F6C\u53D1":"MQTT / \u7F51\u5173\u8F6C\u53D1",source:"simulated",owner:"\u56ED\u533A\u8BBE\u65BD\u8FD0\u7EF4\u7EC4",metric:s[r].metric,unit:s[r].unit})}return[[-63,0,44],[63,0,44],[-63,0,-44],[63,0,-44],[-6,0,6.8],[8,0,46.5]].forEach((r,a)=>i("camera",r,"D",["\u897F\u5357\u9053\u8DEF\u7403\u673A","\u4E1C\u5357\u9053\u8DEF\u67AA\u673A","\u7269\u6D41\u5165\u53E3\u6444\u50CF\u673A","\u4E1C\u5317\u9053\u8DEF\u6444\u50CF\u673A","\u4E2D\u592E\u6B65\u9053\u6444\u50CF\u673A","\u5357\u95E8\u51FA\u5165\u53E3\u6444\u50CF\u673A"][a])),[[-65,0,27],[-65,0,-4.6],[-65,0,-27],[65,0,26],[65,0,-4.6],[65,0,-26],[-43,0,47],[-19,0,47],[22,0,-47],[45,0,-47]].forEach(r=>i("light",r,"D")),[[51,0,9],[51,0,12],[51,0,15],[-11,0,-7]].forEach((r,a)=>i("meter",r,a<3?"C":"B",`\u4F4E\u538B\u914D\u7535\u67DC ${a+1}`)),[[-45,16.5,18],[-34,16.5,18],[20,12,-29],[31,12,-29]].forEach((r,a)=>i("hvac",r,a<2?"A":"B",`\u5C4B\u9876\u7A7A\u8C03\u673A\u7EC4 ${a+1}`)),[[27,0,31.2],[33,0,31.2],[39,0,31.2],[45,0,31.2]].forEach((r,a)=>i("pump",r,"C",`\u5FAA\u73AF\u6C34\u6CF5 P-${String(a+1).padStart(2,"0")}`)),[[19,0,41.1],[26,0,41.1],[33,0,41.1],[40,0,41.1],[47,0,41.1],[54,0,41.1]].forEach((r,a)=>i("charger",r,"C",`\u53CC\u67AA\u5145\u7535\u6869 ${a+1}`)),[[-4.4,0,54.8],[4.4,0,54.8]].forEach((r,a)=>i("gate",r,"D",a?"\u5357\u95E8\u51FA\u53E3\u9053\u95F8":"\u5357\u95E8\u5165\u53E3\u9053\u95F8")),[[3.5,0,30],[-11,0,24],[-5,0,-30],[55,0,-13]].forEach((r,a)=>i("sensor",r,a===1?"A":"D",`\u5FAE\u73AF\u5883\u76D1\u6D4B\u7AD9 ${a+1}`)),Object.assign(e.find(r=>r.id==="ENV-01"),{type:"bench",name:"\u53F0\u67B6\u6E29\u6E7F\u5EA6\u63A2\u5934",metric:"temperature",unit:"\xB0C",protocol:"Modbus RTU / TCP \u534F\u8BAE\u6A21\u62DF",serial:"\u53F0\u67B6\u578B\u53F7\u4E0E\u5E8F\u5217\u53F7\u5F85\u5B9E\u7269\u6838\u9A8C",manufacturer:"\u53C2\u8003\u70B9\u8868\uFF1A\u5EFA\u5927\u4EC1\u79D1 RS-WS-N01-8-T",installedAt:null,maintenanceDue:"\u6309\u5B9E\u7269\u624B\u518C",owner:"\u53F0\u67B6\u9A8C\u8BC1",locationNote:"\u865A\u62DF\u5C55\u793A\u4F4D\u7F6E\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u7269\u56ED\u533A",historyNote:"\u6E29\u5EA6\u7559\u5B58\u5386\u53F2\uFF1B\u6E7F\u5EA6\u4EC5\u5B9E\u65F6\u663E\u793A"}),{types:s,assets:e,zones:t,site:{name:"\u6765\u9716\u667A\u9020\u56ED",width:164,depth:124,area:20336,coordinateSystem:"local-meters-y-up",version:"2.1.0",fictional:!0}}})();var Se={};Yg(Se,{ACESFilmicToneMapping:()=>Ba,AddEquation:()=>Kn,AddOperation:()=>wf,AdditiveAnimationBlendMode:()=>Xu,AdditiveBlending:()=>Ia,AgXToneMapping:()=>ka,AlphaFormat:()=>Hu,AlwaysCompare:()=>kf,AlwaysDepth:()=>Ao,AlwaysStencilFunc:()=>Nf,AmbientLight:()=>yl,AnimationAction:()=>Pl,AnimationClip:()=>Rs,AnimationLoader:()=>Zh,AnimationMixer:()=>lu,AnimationObjectGroup:()=>ou,AnimationUtils:()=>$h,ArcCurve:()=>Zo,ArrayCamera:()=>Al,ArrowHelper:()=>Pu,AttachedBindMode:()=>Ch,Audio:()=>Cl,AudioAnalyser:()=>au,AudioContext:()=>Ca,AudioListener:()=>su,AudioLoader:()=>nu,AxesHelper:()=>Iu,BackSide:()=>mn,BasicDepthPacking:()=>Df,BasicShadowMap:()=>Ym,BatchedMesh:()=>ko,BezierInterpolant:()=>ml,Bone:()=>la,BooleanKeyframeTrack:()=>Li,Box2:()=>Il,Box3:()=>on,Box3Helper:()=>Cu,BoxGeometry:()=>Gn,BoxHelper:()=>Au,BufferAttribute:()=>gt,BufferGeometry:()=>ot,BufferGeometryLoader:()=>Tl,ByteType:()=>zu,Cache:()=>xi,Camera:()=>xr,CameraHelper:()=>Eu,CanvasTexture:()=>ir,CapsuleGeometry:()=>Xo,CatmullRomCurve3:()=>rr,CineonToneMapping:()=>Oa,CircleGeometry:()=>qo,ClampToEdgeWrapping:()=>_n,Clock:()=>mu,Color:()=>Ce,ColorKeyframeTrack:()=>ba,ColorManagement:()=>mt,Compatibility:()=>D0,CompressedArrayTexture:()=>Wh,CompressedCubeTexture:()=>Xh,CompressedTexture:()=>ai,CompressedTextureLoader:()=>Jh,ConeGeometry:()=>ua,ConstantAlphaFactor:()=>Mf,ConstantColorFactor:()=>vf,Controls:()=>Ra,CubeCamera:()=>El,CubeDepthTexture:()=>Wo,CubeReflectionMapping:()=>wi,CubeRefractionMapping:()=>ns,CubeTexture:()=>ws,CubeTextureLoader:()=>Kh,CubeUVReflectionMapping:()=>br,CubicBezierCurve:()=>da,CubicBezierCurve3:()=>Jo,CubicInterpolant:()=>fl,CullFaceBack:()=>Nu,CullFaceFront:()=>of,CullFaceFrontBack:()=>qm,CullFaceNone:()=>af,Curve:()=>Hn,CurvePath:()=>or,CustomBlending:()=>Ll,CustomToneMapping:()=>za,CylinderGeometry:()=>Ts,Cylindrical:()=>gu,Data3DTexture:()=>Qs,DataArrayTexture:()=>js,DataTexture:()=>ln,DataTextureLoader:()=>jh,DataUtils:()=>Lh,DecrementStencilOp:()=>c0,DecrementWrapStencilOp:()=>u0,DefaultLoadingManager:()=>Xf,DepthFormat:()=>_i,DepthStencilFormat:()=>Ti,DepthTexture:()=>Mi,DetachedBindMode:()=>Tf,DirectionalLight:()=>vl,DirectionalLightHelper:()=>Tu,DiscreteInterpolant:()=>pl,DodecahedronGeometry:()=>Yo,DoubleSide:()=>Un,DstAlphaFactor:()=>Da,DstColorFactor:()=>La,DynamicCopyUsage:()=>E0,DynamicDrawUsage:()=>y0,DynamicReadUsage:()=>b0,EdgesGeometry:()=>$o,EllipseCurve:()=>sr,EqualCompare:()=>Of,EqualDepth:()=>Ro,EqualStencilFunc:()=>m0,EquirectangularReflectionMapping:()=>Ga,EquirectangularRefractionMapping:()=>Ha,Euler:()=>ri,EventDispatcher:()=>Vn,ExternalTexture:()=>ha,ExtrudeGeometry:()=>el,FileLoader:()=>oi,Float16BufferAttribute:()=>zh,Float32BufferAttribute:()=>Fe,FloatType:()=>En,Fog:()=>No,FogExp2:()=>Lo,FramebufferTexture:()=>Hh,FrontSide:()=>ts,Frustum:()=>Di,FrustumArray:()=>zo,GLBufferAttribute:()=>fu,GLSL1:()=>C0,GLSL3:()=>qu,GreaterCompare:()=>Bf,GreaterDepth:()=>Io,GreaterEqualCompare:()=>vc,GreaterEqualDepth:()=>Po,GreaterEqualStencilFunc:()=>v0,GreaterStencilFunc:()=>x0,GridHelper:()=>bu,Group:()=>gi,HTMLTexture:()=>qh,HalfFloatType:()=>Kt,HemisphereLight:()=>xl,HemisphereLightHelper:()=>Su,IcosahedronGeometry:()=>tl,ImageBitmapLoader:()=>tu,ImageLoader:()=>Ps,ImageUtils:()=>Ks,IncrementStencilOp:()=>l0,IncrementWrapStencilOp:()=>h0,InstancedBufferAttribute:()=>Ii,InstancedBufferGeometry:()=>wl,InstancedInterleavedBuffer:()=>du,InstancedMesh:()=>nr,Int16BufferAttribute:()=>Oh,Int32BufferAttribute:()=>Bh,Int8BufferAttribute:()=>Nh,IntType:()=>Ul,InterleavedBuffer:()=>bs,InterleavedBufferAttribute:()=>Zi,Interpolant:()=>ji,InterpolateBezier:()=>Rh,InterpolateDiscrete:()=>ys,InterpolateLinear:()=>Zs,InterpolateSmooth:()=>yo,InterpolationSamplingMode:()=>I0,InterpolationSamplingType:()=>P0,InvertStencilOp:()=>d0,KeepStencilOp:()=>Mo,KeyframeTrack:()=>Nn,LOD:()=>Fo,LatheGeometry:()=>nl,Layers:()=>er,LessCompare:()=>Ff,LessDepth:()=>Co,LessEqualCompare:()=>_c,LessEqualDepth:()=>$s,LessEqualStencilFunc:()=>g0,LessStencilFunc:()=>p0,Light:()=>bi,LightProbe:()=>Sl,LightShadow:()=>gr,Line:()=>yi,Line3:()=>_u,LineBasicMaterial:()=>pn,LineCurve:()=>fa,LineCurve3:()=>ar,LineDashedMaterial:()=>dl,LineLoop:()=>Vo,LineSegments:()=>Jn,LinearFilter:()=>Nt,LinearInterpolant:()=>Sa,LinearMipMapLinearFilter:()=>jm,LinearMipMapNearestFilter:()=>Km,LinearMipmapLinearFilter:()=>jn,LinearMipmapNearestFilter:()=>Ds,LinearSRGBColorSpace:()=>ea,LinearToneMapping:()=>Ua,LinearTransfer:()=>ta,Loader:()=>vn,LoaderUtils:()=>Aa,LoadingManager:()=>Ta,LoopOnce:()=>Ef,LoopPingPong:()=>Cf,LoopRepeat:()=>Af,MOUSE:()=>Qi,Material:()=>an,MaterialBlending:()=>$m,MaterialLoader:()=>bl,MathUtils:()=>Ls,Matrix2:()=>xu,Matrix3:()=>ct,Matrix4:()=>it,MaxEquation:()=>df,Mesh:()=>xt,MeshBasicMaterial:()=>Ln,MeshDepthMaterial:()=>ya,MeshDistanceMaterial:()=>Ma,MeshLambertMaterial:()=>fr,MeshMatcapMaterial:()=>ul,MeshNormalMaterial:()=>dr,MeshPhongMaterial:()=>cl,MeshPhysicalMaterial:()=>ur,MeshStandardMaterial:()=>Si,MeshToonMaterial:()=>hl,MinEquation:()=>uf,MirroredRepeatWrapping:()=>vs,MixOperation:()=>bf,MultiplyBlending:()=>Fu,MultiplyOperation:()=>Na,NearestFilter:()=>Ot,NearestMipMapLinearFilter:()=>Jm,NearestMipMapNearestFilter:()=>Zm,NearestMipmapLinearFilter:()=>is,NearestMipmapNearestFilter:()=>Wa,NeutralToneMapping:()=>Va,NeverCompare:()=>Uf,NeverDepth:()=>Eo,NeverStencilFunc:()=>f0,NoBlending:()=>$t,NoColorSpace:()=>Wn,NoNormalPacking:()=>i0,NoToneMapping:()=>li,NormalAnimationBlendMode:()=>xc,NormalBlending:()=>Sr,NormalGAPacking:()=>r0,NormalRGPacking:()=>s0,NotEqualCompare:()=>zf,NotEqualDepth:()=>Do,NotEqualStencilFunc:()=>_0,NumberKeyframeTrack:()=>pr,Object3D:()=>wt,ObjectLoader:()=>eu,ObjectSpaceNormalMap:()=>Lf,OctahedronGeometry:()=>_a,OneFactor:()=>ff,OneMinusConstantAlphaFactor:()=>Sf,OneMinusConstantColorFactor:()=>yf,OneMinusDstAlphaFactor:()=>gf,OneMinusDstColorFactor:()=>xf,OneMinusSrcAlphaFactor:()=>Bu,OneMinusSrcColorFactor:()=>mf,OrthographicCamera:()=>Ui,PCFShadowMap:()=>Pa,PCFSoftShadowMap:()=>lf,PMREMGenerator:()=>wc,Path:()=>Es,PerspectiveCamera:()=>nn,Plane:()=>zn,PlaneGeometry:()=>Ki,PlaneHelper:()=>Ru,PointLight:()=>_r,PointLightHelper:()=>Mu,Points:()=>Go,PointsMaterial:()=>ca,PolarGridHelper:()=>wu,PolyhedronGeometry:()=>Ji,PositionalAudio:()=>ru,PropertyBinding:()=>St,PropertyMixer:()=>Rl,QuadraticBezierCurve:()=>pa,QuadraticBezierCurve3:()=>ma,Quaternion:()=>Xt,QuaternionKeyframeTrack:()=>mr,QuaternionLinearInterpolant:()=>gl,R11_EAC_Format:()=>$l,RED_GREEN_RGTC2_Format:()=>Ka,RED_RGTC1_Format:()=>pc,REVISION:()=>Dl,RG11_EAC_Format:()=>Ja,RGBADepthPacking:()=>e0,RGBAFormat:()=>rn,RGBAIntegerFormat:()=>kl,RGBA_ASTC_10x10_Format:()=>lc,RGBA_ASTC_10x5_Format:()=>rc,RGBA_ASTC_10x6_Format:()=>ac,RGBA_ASTC_10x8_Format:()=>oc,RGBA_ASTC_12x10_Format:()=>cc,RGBA_ASTC_12x12_Format:()=>hc,RGBA_ASTC_4x4_Format:()=>Kl,RGBA_ASTC_5x4_Format:()=>jl,RGBA_ASTC_5x5_Format:()=>Ql,RGBA_ASTC_6x5_Format:()=>ec,RGBA_ASTC_6x6_Format:()=>tc,RGBA_ASTC_8x5_Format:()=>nc,RGBA_ASTC_8x6_Format:()=>ic,RGBA_ASTC_8x8_Format:()=>sc,RGBA_BPTC_Format:()=>uc,RGBA_ETC2_EAC_Format:()=>Yl,RGBA_PVRTC_2BPPV1_Format:()=>Wl,RGBA_PVRTC_4BPPV1_Format:()=>Hl,RGBA_S3TC_DXT1_Format:()=>Ya,RGBA_S3TC_DXT3_Format:()=>$a,RGBA_S3TC_DXT5_Format:()=>Za,RGBDepthPacking:()=>t0,RGBFormat:()=>Wu,RGBIntegerFormat:()=>Qm,RGB_BPTC_SIGNED_Format:()=>dc,RGB_BPTC_UNSIGNED_Format:()=>fc,RGB_ETC1_Format:()=>Xl,RGB_ETC2_Format:()=>ql,RGB_PVRTC_2BPPV1_Format:()=>Gl,RGB_PVRTC_4BPPV1_Format:()=>Vl,RGB_S3TC_DXT1_Format:()=>qa,RGDepthPacking:()=>n0,RGFormat:()=>rs,RGIntegerFormat:()=>zl,RawShaderMaterial:()=>Cs,Ray:()=>vi,Raycaster:()=>pu,RectAreaLight:()=>Ml,RedFormat:()=>Bl,RedIntegerFormat:()=>Xa,ReinhardToneMapping:()=>Fa,RenderObjectRefreshType:()=>L0,RenderTarget:()=>sa,RenderTarget3D:()=>cu,RepeatWrapping:()=>Tn,ReplaceStencilOp:()=>o0,ReverseSubtractEquation:()=>hf,RingGeometry:()=>il,SIGNED_R11_EAC_Format:()=>Zl,SIGNED_RED_GREEN_RGTC2_Format:()=>gc,SIGNED_RED_RGTC1_Format:()=>mc,SIGNED_RG11_EAC_Format:()=>Jl,SRGBColorSpace:()=>tn,SRGBTransfer:()=>At,Scene:()=>Pi,ShaderChunk:()=>ft,ShaderLib:()=>Ei,ShaderMaterial:()=>It,ShadowMaterial:()=>ll,Shape:()=>As,ShapeGeometry:()=>sl,ShapePath:()=>Du,ShapeUtils:()=>si,ShortType:()=>ku,Skeleton:()=>Bo,SkeletonHelper:()=>yu,SkinnedMesh:()=>Oo,Source:()=>Ph,Sphere:()=>sn,SphereGeometry:()=>va,Spherical:()=>yr,SphericalHarmonics3:()=>Ea,SplineCurve:()=>ga,SpotLight:()=>_l,SpotLightHelper:()=>vu,Sprite:()=>Uo,SpriteMaterial:()=>oa,SrcAlphaFactor:()=>Ou,SrcAlphaSaturateFactor:()=>_f,SrcColorFactor:()=>pf,StaticCopyUsage:()=>T0,StaticDrawUsage:()=>yc,StaticReadUsage:()=>S0,StereoCamera:()=>iu,StreamCopyUsage:()=>A0,StreamDrawUsage:()=>M0,StreamReadUsage:()=>w0,StringKeyframeTrack:()=>Ni,SubtractEquation:()=>cf,SubtractiveBlending:()=>Uu,TOUCH:()=>es,TangentSpaceNormalMap:()=>Fi,TetrahedronGeometry:()=>rl,Texture:()=>Yt,TextureLoader:()=>Qh,TextureSource:()=>Dn,TextureUtils:()=>Lu,Timer:()=>vr,TimestampQuery:()=>R0,TorusGeometry:()=>cr,TorusKnotGeometry:()=>al,Triangle:()=>mi,TriangleFanDrawMode:()=>If,TriangleStripDrawMode:()=>Pf,TrianglesDrawMode:()=>Rf,TubeGeometry:()=>hr,UVMapping:()=>Nl,Uint16BufferAttribute:()=>ra,Uint32BufferAttribute:()=>aa,Uint8BufferAttribute:()=>Uh,Uint8ClampedBufferAttribute:()=>Fh,Uniform:()=>hu,UniformsGroup:()=>uu,UniformsLib:()=>De,UniformsUtils:()=>Cn,UnsignedByteType:()=>yn,UnsignedInt101111Type:()=>Gu,UnsignedInt248Type:()=>ss,UnsignedInt5999Type:()=>Vu,UnsignedIntType:()=>Qn,UnsignedShort4444Type:()=>Fl,UnsignedShort5551Type:()=>Ol,UnsignedShortType:()=>wr,VSMShadowMap:()=>Mr,Vector2:()=>re,Vector3:()=>L,Vector4:()=>Pt,VectorKeyframeTrack:()=>wa,VideoFrameTexture:()=>Gh,VideoTexture:()=>Ho,WebGL3DRenderTarget:()=>Dh,WebGLArrayRenderTarget:()=>Ih,WebGLCoordinateSystem:()=>kn,WebGLCubeRenderTarget:()=>Tc,WebGLRenderTarget:()=>zt,WebGLRenderer:()=>cp,WebGLUtils:()=>bg,WebGPUCoordinateSystem:()=>Ms,WebXRController:()=>tr,WireframeGeometry:()=>ol,WrapAroundEnding:()=>Qr,ZeroCurvatureEnding:()=>xs,ZeroFactor:()=>Is,ZeroSlopeEnding:()=>_s,ZeroStencilOp:()=>a0,createCanvasElement:()=>Vf,error:()=>Ke,getConsoleFunction:()=>F0,log:()=>ia,setConsoleFunction:()=>U0,warn:()=>Ie,warnOnce:()=>Ri});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Dl="186",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},af=0,Nu=1,of=2,qm=3,Ym=0,Pa=1,lf=2,Mr=3,ts=0,mn=1,Un=2,$t=0,Sr=1,Ia=2,Uu=3,Fu=4,Ll=5,$m=6,Kn=100,cf=101,hf=102,uf=103,df=104,Is=200,ff=201,pf=202,mf=203,Ou=204,Bu=205,Da=206,gf=207,La=208,xf=209,_f=210,vf=211,yf=212,Mf=213,Sf=214,Eo=0,Ao=1,Co=2,$s=3,Ro=4,Po=5,Io=6,Do=7,Na=0,bf=1,wf=2,li=0,Ua=1,Fa=2,Oa=3,Ba=4,za=5,ka=6,Va=7,Ch="attached",Tf="detached",Nl=300,wi=301,ns=302,Ga=303,Ha=304,br=306,Tn=1e3,_n=1001,vs=1002,Ot=1003,Wa=1004,Zm=1004,is=1005,Jm=1005,Nt=1006,Ds=1007,Km=1007,jn=1008,jm=1008,yn=1009,zu=1010,ku=1011,wr=1012,Ul=1013,Qn=1014,En=1015,Kt=1016,Fl=1017,Ol=1018,ss=1020,Vu=35902,Gu=35899,Hu=1021,Wu=1022,rn=1023,_i=1026,Ti=1027,Bl=1028,Xa=1029,rs=1030,zl=1031,Qm=1032,kl=1033,qa=33776,Ya=33777,$a=33778,Za=33779,Vl=35840,Gl=35841,Hl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,$l=37488,Zl=37489,Ja=37490,Jl=37491,Kl=37808,jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Ka=36285,gc=36286,Ef=2200,Af=2201,Cf=2202,ys=2300,Zs=2301,yo=2302,Rh=2303,xs=2400,_s=2401,Qr=2402,xc=2500,Xu=2501,Rf=0,Pf=1,If=2,Df=3200,e0=3201,t0=3202,n0=3203,Fi=0,Lf=1,Wn="",tn="srgb",ea="srgb-linear",ta="linear",At="srgb",i0="",s0="rg",r0="ga",a0=0,Mo=7680,o0=7681,l0=7682,c0=7683,h0=34055,u0=34056,d0=5386,f0=512,p0=513,m0=514,g0=515,x0=516,_0=517,v0=518,Nf=519,Uf=512,Ff=513,Of=514,_c=515,Bf=516,zf=517,vc=518,kf=519,yc=35044,y0=35048,M0=35040,S0=35045,b0=35049,w0=35041,T0=35046,E0=35050,A0=35042,C0="100",qu="300 es",kn=2e3,Ms=2001,R0={COMPUTE:"compute",RENDER:"render"},P0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},I0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},D0={TEXTURE_COMPARE:"depthTextureCompare"},L0={NONE:0,SHARED:1,FULL:2};function $g(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var Zg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Kr(s,e){return new Zg[s](e)}function N0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vf(){let s=na("canvas");return s.style.display="block",s}var Up={},Ss=null;function U0(s){Ss=s}function F0(){return Ss}function ia(...s){let e="THREE."+s.shift();Ss?Ss("log",e,...s):console.log(e,...s)}function O0(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=O0(s);let e="THREE."+s.shift();if(Ss)Ss("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ke(...s){s=O0(s);let e="THREE."+s.shift();if(Ss)Ss("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ri(...s){let e=s.join(" ");e in Up||(Up[e]=!0,Ie(...s))}function B0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var z0={[Eo]:Ao,[Co]:Io,[Ro]:Do,[$s]:Po,[Ao]:Eo,[Io]:Co,[Do]:Ro,[Po]:$s},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fp=1234567,Ys=Math.PI/180,Js=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function Gf(s,e){return(s%e+e)%e}function Jg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Kg(s,e,t){return s!==e?(t-s)/(e-s):0}function So(s,e,t){return(1-t)*s+t*e}function jg(s,e,t,n){return So(s,e,1-Math.exp(-t*n))}function Qg(s,e=1){return e-Math.abs(Gf(s,e*2)-e)}function ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function tx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function nx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ix(s,e){return s+Math.random()*(e-s)}function sx(s){return s*(.5-Math.random())}function rx(s){s!==void 0&&(Fp=s);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ax(s){return s*Ys}function ox(s){return s*Js}function lx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function cx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ls={DEG2RAD:Ys,RAD2DEG:Js,generateUUID:Zn,clamp:at,euclideanModulo:Gf,mapLinear:Jg,inverseLerp:Kg,lerp:So,damp:jg,pingpong:Qg,smoothstep:ex,smootherstep:tx,randInt:nx,randFloat:ix,randFloatSpread:sx,seededRandom:rx,degToRad:ax,radToDeg:ox,isPowerOfTwo:lx,ceilPowerOfTwo:cx,floorPowerOfTwo:hx,setQuaternionFromProperEuler:ux,normalize:ut,denormalize:In},re=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ud=new L,Op=new Xt,ct=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],w=i[4],_=i[7],S=i[2],b=i[5],P=i[8];return r[0]=a*x+o*M+l*S,r[3]=a*m+o*w+l*b,r[6]=a*g+o*_+l*P,r[1]=c*x+h*M+d*S,r[4]=c*m+h*w+d*b,r[7]=c*g+h*_+d*P,r[2]=u*x+f*M+p*S,r[5]=u*m+f*w+p*b,r[8]=u*g+f*_+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dd.makeScale(e,t)),this}rotate(e){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dd=new ct,Bp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){let s={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?ta:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ea]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}var mt=dx();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ir,Ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=na("canvas")),Ir.width=e.width,Ir.height=e.height;let i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,Dn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(fd(i[a].image)):r.push(fd(i[a]))}else r=fd(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ks.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Ph=class extends Dn{constructor(e=null){Ri('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},px=0,pd=new L,Yt=class s extends Vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=_n,i=_n,r=Nt,a=jn,o=rn,l=yn,c=s.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Zn(),this.name="",this.source=new Dn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Nl;Yt.DEFAULT_ANISOTROPY=1;var Pt=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,S=(g+1)/2,b=(h+u)/4,P=(d+x)/4,y=(p+m)/4;return w>_&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=P/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=y/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=P/r,i=y/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Yt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dn(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends sa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},js=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ih=class extends zt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new js(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Qs=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Dh=class extends zt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Qs(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},it=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),us.crossVectors(n,Yn),us.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),us.crossVectors(n,Yn)),us.normalize(),zc.crossVectors(Yn,us),i[0]=us.x,i[4]=zc.x,i[8]=Yn.x,i[1]=us.y,i[5]=zc.y,i[9]=Yn.y,i[2]=us.z,i[6]=zc.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],w=n[7],_=n[11],S=n[15],b=i[0],P=i[4],y=i[8],R=i[12],D=i[1],F=i[5],B=i[9],G=i[13],z=i[2],X=i[6],te=i[10],K=i[14],ue=i[3],Z=i[7],ne=i[11],ae=i[15];return r[0]=a*b+o*D+l*z+c*ue,r[4]=a*P+o*F+l*X+c*Z,r[8]=a*y+o*B+l*te+c*ne,r[12]=a*R+o*G+l*K+c*ae,r[1]=h*b+d*D+u*z+f*ue,r[5]=h*P+d*F+u*X+f*Z,r[9]=h*y+d*B+u*te+f*ne,r[13]=h*R+d*G+u*K+f*ae,r[2]=p*b+x*D+m*z+g*ue,r[6]=p*P+x*F+m*X+g*Z,r[10]=p*y+x*B+m*te+g*ne,r[14]=p*R+x*G+m*K+g*ae,r[3]=M*b+w*D+_*z+S*ue,r[7]=M*P+w*F+_*X+S*Z,r[11]=M*y+w*B+_*te+S*ne,r[15]=M*R+w*G+_*K+S*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],M=l*f-c*u,w=o*f-c*d,_=o*u-l*d,S=a*f-c*h,b=a*u-l*h,P=a*d-o*h;return t*(x*M-m*w+g*_)-n*(p*M-m*S+g*b)+i*(p*w-x*S+g*P)-r*(p*_-x*b+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],M=t*o-n*a,w=t*l-i*a,_=t*c-r*a,S=n*l-i*o,b=n*c-r*o,P=i*c-r*l,y=h*x-d*p,R=h*m-u*p,D=h*g-f*p,F=d*m-u*x,B=d*g-f*x,G=u*g-f*m,z=M*G-w*B+_*F+S*D-b*R+P*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/z;return e[0]=(o*G-l*B+c*F)*X,e[1]=(i*B-n*G-r*F)*X,e[2]=(x*P-m*b+g*S)*X,e[3]=(u*b-d*P-f*S)*X,e[4]=(l*D-a*G-c*R)*X,e[5]=(t*G-i*D+r*R)*X,e[6]=(m*_-p*P-g*w)*X,e[7]=(h*P-u*_+f*w)*X,e[8]=(a*B-o*D+c*y)*X,e[9]=(n*D-t*B-r*y)*X,e[10]=(p*b-x*_+g*M)*X,e[11]=(d*_-h*b-f*M)*X,e[12]=(o*R-a*F-l*y)*X,e[13]=(t*F-n*R+i*y)*X,e[14]=(x*w-p*S-m*M)*X,e[15]=(h*S-d*w+u*M)*X,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,M=l*c,w=l*h,_=l*d,S=n.x,b=n.y,P=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+_)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+g))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(p+w)*P,i[9]=(m-M)*P,i[10]=(1-(u+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Dr.set(i[0],i[1],i[2]).length(),o=Dr.set(i[4],i[5],i[6]).length(),l=Dr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=kn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===kn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=kn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===kn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Dr=new L,ui=new it,mx=new L(0,0,0),gx=new L(1,1,1),us=new L,zc=new L,Yn=new L,kp=new it,Vp=new Xt,ri=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xx=0,Gp=new L,Lr=new Xt,Vi=new it,kc=new L,ro=new L,_x=new L,vx=new Xt,Hp=new L(1,0,0),Wp=new L(0,1,0),Xp=new L(0,0,1),qp={type:"added"},yx={type:"removed"},Nr={type:"childadded",child:null},md={type:"childremoved",child:null},wt=class s extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ri,n=new Xt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new ct}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kc.copy(e):kc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(ro,kc,this.up):Vi.lookAt(kc,ro,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Lr.setFromRotationMatrix(Vi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mx={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function gd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Gf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gd(a,r,e+1/3),this.g=gd(a,r,e),this.b=gd(a,r,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=k0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return mt.workingToColorSpace(bn.copy(this),e),Math.round(at(bn.r*255,0,255))*65536+Math.round(at(bn.g*255,0,255))*256+Math.round(at(bn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(bn.copy(this),t);let n=bn.r,i=bn.g,r=bn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=tn){mt.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,i=bn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Vc);let n=So(ds.h,Vc.h,t),i=So(ds.s,Vc.s,t),r=So(ds.l,Vc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ce;Ce.NAMES=k0;var Lo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},No=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pi=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new L,Gi=new L,xd=new L,Hi=new L,Ur=new L,Fr=new L,Yp=new L,_d=new L,vd=new L,yd=new L,Md=new Pt,Sd=new Pt,bd=new Pt,mi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),di.subVectors(e,t),i.cross(di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){di.subVectors(i,t),Gi.subVectors(n,t),xd.subVectors(e,t);let a=di.dot(di),o=di.dot(Gi),l=di.dot(xd),c=Gi.dot(Gi),h=Gi.dot(xd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Md.setScalar(0),Sd.setScalar(0),bd.setScalar(0),Md.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,n),bd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Md,r.x),a.addScaledVector(Sd,r.y),a.addScaledVector(bd,r.z),a}static isFrontFacing(e,t,n,i){return di.subVectors(n,t),Gi.subVectors(e,t),di.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),di.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ur.subVectors(i,n),Fr.subVectors(r,n),_d.subVectors(e,n);let l=Ur.dot(_d),c=Fr.dot(_d);if(l<=0&&c<=0)return t.copy(n);vd.subVectors(e,i);let h=Ur.dot(vd),d=Fr.dot(vd);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ur,a);yd.subVectors(e,r);let f=Ur.dot(yd),p=Fr.dot(yd);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fr,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Yp.subVectors(r,i),o=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(Yp,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gc.copy(n.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Hc.subVectors(this.max,ao),Or.subVectors(e.a,ao),Br.subVectors(e.b,ao),zr.subVectors(e.c,ao),fs.subVectors(Br,Or),ps.subVectors(zr,Br),Us.subVectors(Or,zr);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Us.z,Us.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Us.z,0,-Us.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Us.y,Us.x,0];return!wd(t,Or,Br,zr,Hc)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Or,Br,zr,Hc))?!1:(Wc.crossVectors(fs,ps),t=[Wc.x,Wc.y,Wc.z],wd(t,Or,Br,zr,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,Gc=new on,Or=new L,Br=new L,zr=new L,fs=new L,ps=new L,Us=new L,ao=new L,Hc=new L,Wc=new L,Fs=new L;function wd(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fs.fromArray(s,r);let o=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Yi=Sx();function Sx(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bn(s){Math.abs(s)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),s=at(s,-65504,65504),Yi.floatView[0]=s;let e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function _o(s){let e=s>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(s&1023)]+Yi.exponentTable[e],Yi.floatView[0]}var Lh=class{static toHalfFloat(e){return Bn(e)}static fromHalfFloat(e){return _o(e)}},en=new L,Xc=new re,bx=0,gt=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=class extends gt{constructor(e,t,n){super(new Int8Array(e),t,n)}},Uh=class extends gt{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Fh=class extends gt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Oh=class extends gt{constructor(e,t,n){super(new Int16Array(e),t,n)}},ra=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Bh=class extends gt{constructor(e,t,n){super(new Int32Array(e),t,n)}},aa=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},zh=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=_o(this.array[e*this.itemSize]);return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=Bn(t),this}getY(e){let t=_o(this.array[e*this.itemSize+1]);return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=Bn(t),this}getZ(e){let t=_o(this.array[e*this.itemSize+2]);return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=Bn(t),this}getW(e){let t=_o(this.array[e*this.itemSize+3]);return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=Bn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this.array[e+2]=Bn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this.array[e+2]=Bn(i),this.array[e+3]=Bn(r),this}},Fe=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wx=new on,oo=new L,Td=new L,sn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Td)),this.expandByPoint(oo.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tx=0,ii=new it,Ed=new wt,kr=new L,$n=new on,lo=new on,fn=new L,ot=class s extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?aa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lo.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors($n.min,lo.min),$n.expandByPoint(fn),fn.addVectors($n.max,lo.max),$n.expandByPoint(fn)):($n.expandByPoint(lo.min),$n.expandByPoint(lo.max))}$n.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),fn.add(kr)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new L,l[y]=new L;let c=new L,h=new L,d=new L,u=new re,f=new re,p=new re,x=new L,m=new L;function g(y,R,D){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,D),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),o[y].add(x),o[R].add(x),o[D].add(x),l[y].add(m),l[R].add(m),l[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,R=M.length;y<R;++y){let D=M[y],F=D.start,B=D.count;for(let G=F,z=F+B;G<z;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let w=new L,_=new L,S=new L,b=new L;function P(y){S.fromBufferAttribute(i,y),b.copy(S);let R=o[y];w.copy(R),w.sub(S.multiplyScalar(S.dot(R))).normalize(),_.crossVectors(b,R);let F=_.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,F)}for(let y=0,R=M.length;y<R;++y){let D=M[y],F=D.start,B=D.count;for(let G=F,z=F+B;G<z;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new gt(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new L,Zi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ad=new L,Ex=new L,Ax=new ct,zn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ad.subVectors(n,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ax.getNormalMatrix(e),i=this.coplanarPoint(Ad).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cx=0,an=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Sr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Bu,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oa=class extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,co=new L,Gr=new L,Hr=new L,Wr=new re,ho=new re,V0=new it,qc=new L,uo=new L,Yc=new L,$p=new re,Cd=new re,Zp=new re,Uo=class extends wt{constructor(e=new oa){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bs(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new Zi(n,3,0,!1)),Vr.setAttribute("uv",new Zi(n,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),V0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Hr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;$c(qc.set(-.5,-.5,0),Hr,a,Gr,i,r),$c(uo.set(.5,-.5,0),Hr,a,Gr,i,r),$c(Yc.set(.5,.5,0),Hr,a,Gr,i,r),$p.set(0,0),Cd.set(1,0),Zp.set(1,1);let o=e.ray.intersectTriangle(qc,uo,Yc,!1,co);if(o===null&&($c(uo.set(-.5,.5,0),Hr,a,Gr,i,r),Cd.set(0,1),o=e.ray.intersectTriangle(qc,Yc,uo,!1,co),o===null))return;let l=e.ray.origin.distanceTo(co);l<e.near||l>e.far||t.push({distance:l,point:co.clone(),uv:mi.getInterpolation(co,qc,uo,Yc,$p,Cd,Zp,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $c(s,e,t,n,i,r){Wr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ho.x=r*Wr.x-i*Wr.y,ho.y=i*Wr.x+r*Wr.y):ho.copy(Wr),s.copy(e),s.x+=ho.x,s.y+=ho.y,s.applyMatrix4(V0)}var Zc=new L,Jp=new L,Fo=class extends wt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Zc.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Zc);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Zc.setFromMatrixPosition(e.matrixWorld),Jp.setFromMatrixPosition(this.matrixWorld);let n=Zc.distanceTo(Jp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Xi=new L,Rd=new L,Jc=new L,Kc=new L,vi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rd.copy(e).add(t).multiplyScalar(.5),Jc.copy(t).sub(e).normalize(),Kc.copy(this.origin).sub(Rd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Jc),o=Kc.dot(this.direction),l=-Kc.dot(Jc),c=Kc.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Rd).addScaledVector(Jc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,M=n.y-a.y,w=n.z-a.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(h),P,y,R,D,F,B,G,z,X,te,K,ue;if(_>=S&&_>=b?(R=l,B=d,X=p,ue=g,l>=0?(P=c,y=h,D=u,F=f,G=x,z=m,te=M,K=w):(P=h,y=c,D=f,F=u,G=m,z=x,te=w,K=M)):S>=b?(R=c,B=u,X=x,ue=M,c>=0?(P=h,y=l,D=f,F=d,G=m,z=p,te=w,K=g):(P=l,y=h,D=d,F=f,G=p,z=m,te=g,K=w)):(R=h,B=f,X=m,ue=w,h>=0?(P=l,y=c,D=d,F=u,G=p,z=x,te=g,K=M):(P=c,y=l,D=u,F=d,G=x,z=p,te=M,K=g)),R===0)return null;let Z=P/R,ne=y/R,ae=1/R,E=D-Z*B,N=F-ne*B,V=G-Z*X,ce=z-ne*X,pe=te-Z*ue,H=K-ne*ue,$=pe*ce-H*V,fe=E*H-N*pe,Oe=V*N-ce*E;if(i){if($<0||fe<0||Oe<0)return null}else if(($<0||fe<0||Oe<0)&&($>0||fe>0||Oe>0))return null;let Ee=$+fe+Oe;if(Ee===0)return null;let Ze=ae*($*B+fe*X+Oe*ue);return(Ee>0?Ze<0:Ze>0)?null:this.at(Ze/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kp=new it,Os=new vi,jc=new sn,jp=new L,Qc=new L,eh=new L,th=new L,Pd=new L,nh=new L,Qp=new L,ih=new L,xt=class extends wt{constructor(e=new ot,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){nh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Pd.fromBufferAttribute(d,e),a?nh.addScaledVector(Pd,h):nh.addScaledVector(Pd.sub(t),h))}t.add(nh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(jc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(jc,jp)===null||Os.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Kp.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Kp),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=w;_<S;_+=3){let b=o.getX(_),P=o.getX(_+1),y=o.getX(_+2);i=sh(this,g,e,n,c,h,d,b,P,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);i=sh(this,a,e,n,c,h,d,M,w,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=w;_<S;_+=3){let b=_,P=_+1,y=_+2;i=sh(this,g,e,n,c,h,d,b,P,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=m,w=m+1,_=m+2;i=sh(this,a,e,n,c,h,d,M,w,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Rx(s,e,t,n,i,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ts,o),l===null)return null;ih.copy(o),ih.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ih);return c<t.near||c>t.far?null:{distance:c,point:ih.clone(),object:s}}function sh(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Qc),s.getVertexPosition(l,eh),s.getVertexPosition(c,th);let h=Rx(s,e,t,n,Qc,eh,th,Qp);if(h){let d=new L;mi.getBarycoord(Qp,Qc,eh,th,d),i&&(h.uv=mi.getInterpolatedAttribute(i,o,l,c,d,new re)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};mi.getNormal(Qc,eh,th,u.normal),h.face=u,h.barycoord=d}return h}var fo=new Pt,em=new Pt,tm=new Pt,Px=new Pt,nm=new it,rh=new L,Id=new sn,im=new it,Dd=new vi,Oo=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rh),this.boundingBox.expandByPoint(rh)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rh),this.boundingSphere.expandByPoint(rh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Id.copy(this.boundingSphere),Id.applyMatrix4(i),e.ray.intersectsSphere(Id)!==!1&&(im.copy(i).invert(),Dd.copy(e.ray).applyMatrix4(im),!(this.boundingBox!==null&&Dd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;em.fromBufferAttribute(i.attributes.skinIndex,e),tm.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(fo.copy(t),t.set(0,0,0,0)):(fo.set(...t,1),t.set(0,0,0)),fo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=tm.getComponent(r);if(a!==0){let o=em.getComponent(r);nm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Px.copy(fo).applyMatrix4(nm),a)}}return t.isVector4&&(t.w=fo.w),t.applyMatrix4(this.bindMatrixInverse)}},la=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ln=class extends Yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ot,h=Ot,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sm=new it,Ix=new it,Bo=class s{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ix;sm.multiplyMatrices(o,t[r]),sm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ln(t,e,e,rn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new la),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xr=new it,rm=new it,ah=[],am=new on,Dx=new it,po=new xt,mo=new sn,nr=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),am.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(am)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),mo.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xr),rm.multiplyMatrices(n,Xr),po.matrixWorld=rm,po.raycast(e,ah);for(let a=0,o=ah.length;a<o;a++){let l=ah[a];l.instanceId=r,l.object=this,t.push(l)}ah.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ln(new Float32Array(i*this.count),i,this.count,Bl,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new sn,Lx=new re(.5,.5),oh=new L,Di=class{constructor(e=new zn,t=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],w=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,g-p,S-M).normalize(),i[1].setComponents(c+a,f+h,g+p,S+M).normalize(),i[2].setComponents(c+o,f+d,g+x,S+w).normalize(),i[3].setComponents(c-o,f-d,g-x,S-w).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,f-u,g-m,S-_).normalize();else if(i[4].setComponents(c-l,f-u,g-m,S-_).normalize(),t===kn)i[5].setComponents(c+l,f+u,g+m,S+_).normalize();else if(t===Ms)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Lx.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(oh.x=i.normal.x>0?e.max.x:e.min.x,oh.y=i.normal.y>0?e.max.y:e.min.y,oh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},om=new it,zo=class s{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];om.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Di),n[i].setFromProjectionMatrix(om,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Di),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Ld(s,e){return s-e}function Nx(s,e){return s.z-e.z}function Ux(s,e){return e.z-s.z}var Yd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},On=new it,Fx=new Ce(1,1,1),Ox=new Di,Bx=new zo,lh=new on,zs=new sn,go=new L,lm=new L,zx=new L,Nd=new Yd,wn=new xt,ch=[];function kx(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function ks(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var ko=class extends xt{constructor(e,t,n=t*2,i){super(new ot,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ln(t,e,e,rn,En);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ln(t,e,e,Xa,Qn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ln(t,e,e,rn,En);n.colorSpace=mt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new gt(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new gt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,On),this.getBoundingBoxAt(r,lh).applyMatrix4(On),e.union(lh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,On),this.getBoundingSphereAt(r,zs).applyMatrix4(On),e.union(zs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ld),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;On.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Fx.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ld),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let d=t.getAttribute(h),u=n.getAttribute(h);kx(d,u,l);let f=d.itemSize;for(let p=d.count,x=c;p<x;p++){let m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=e-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:x,itemSize:m}=p;x.copyWithin(e*m,h*m,(h+d)*m),p.addUpdateRange(e*m,d*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new on,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(go.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new sn;this.getBoundingBoxAt(e,lh),lh.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),go.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(go))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ld);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);ks(this._multiDrawCounts,i),ks(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ks(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ks(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ks(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ot,this._initializeGeometry(r));let a=this.geometry;r.index&&ks(r.index.array,a.index.array);for(let o in r.attributes)ks(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;wn.material=this.material,wn.geometry.index=a.index,wn.geometry.attributes=a.attributes,wn.geometry.boundingBox===null&&(wn.geometry.boundingBox=new on),wn.geometry.boundingSphere===null&&(wn.geometry.boundingSphere=new sn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=i[c];wn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,wn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,wn.geometry.boundingBox),this.getBoundingSphereAt(c,wn.geometry.boundingSphere),wn.raycast(e,ch);for(let d=0,u=ch.length;d<u;d++){let f=ch[d];f.object=this,f.batchId=o,t.push(f)}ch.length=0}wn.material=null,wn.geometry.index=null,wn.geometry.attributes={},wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,m=n.isArrayCamera?Bx:Ox;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(On.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(On,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){On.copy(this.matrixWorld).invert(),go.setFromMatrixPosition(n.matrixWorld).applyMatrix4(On),lm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(On);for(let _=0,S=c.length;_<S;_++)if(c[_].visible&&c[_].active){let b=c[_].geometryIndex;this.getMatrixAt(_,On),this.getBoundingSphereAt(b,zs).applyMatrix4(On);let P=!1;if(f&&(P=!m.intersectsSphere(zs)),!P){let y=u[b],R=zx.subVectors(zs.center,go).dot(lm);Nd.push(y.start,y.count,R,_)}}let M=Nd.list,w=this.customSort;w===null?M.sort(r.transparent?Ux:Nx):w.call(this,M,n);for(let _=0,S=M.length;_<S;_++){let b=M[_];h[g]=b.start*o*l,d[g]=b.count*l,x[g]=b.index,g++}Nd.reset()}else for(let M=0,w=c.length;M<w;M++)if(c[M].visible&&c[M].active){let _=c[M].geometryIndex,S=!1;if(f&&(this.getMatrixAt(M,On),this.getBoundingSphereAt(_,zs).applyMatrix4(On),S=!m.intersectsSphere(zs)),!S){let b=u[_];h[g]=b.start*o*l,d[g]=b.count*l,x[g]=M,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},pn=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kh=new L,Vh=new L,cm=new it,xo=new vi,hh=new sn,Ud=new L,hm=new L,yi=class extends wt{constructor(e=new ot,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kh.fromBufferAttribute(t,i-1),Vh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kh.distanceTo(Vh);e.setAttribute("lineDistance",new Fe(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hh.copy(n.boundingSphere),hh.applyMatrix4(i),hh.radius+=r,e.ray.intersectsSphere(hh)===!1)return;cm.copy(i).invert(),xo.copy(e.ray).applyMatrix4(cm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),M=h.getX(x+1),w=uh(this,e,xo,l,g,M,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=uh(this,e,xo,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=uh(this,e,xo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=uh(this,e,xo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uh(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(kh.fromBufferAttribute(o,i),Vh.fromBufferAttribute(o,r),t.distanceSqToSegment(kh,Vh,Ud,hm)>n)return;Ud.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ud);if(!(c<e.near||c>e.far))return{distance:c,point:hm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var um=new L,dm=new L,Jn=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)um.fromBufferAttribute(t,i),dm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+um.distanceTo(dm);e.setAttribute("lineDistance",new Fe(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vo=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ca=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fm=new it,$d=new vi,dh=new sn,fh=new L,Go=class extends wt{constructor(e=new ot,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dh.copy(n.boundingSphere),dh.applyMatrix4(i),dh.radius+=r,e.ray.intersectsSphere(dh)===!1)return;fm.copy(i).invert(),$d.copy(e.ray).applyMatrix4(fm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);fh.fromBufferAttribute(d,m),pm(fh,m,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)fh.fromBufferAttribute(d,p),pm(fh,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pm(s,e,t,n,i,r,a){let o=$d.distanceSqToPoint(s);if(o<t){let l=new L;$d.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ho=class extends Yt{constructor(e,t,n,i,r=Nt,a=Nt,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Gh=class extends Ho{constructor(e,t,n,i,r,a,o,l){super({},e,t,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Hh=class extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ot,this.minFilter=Ot,this.generateMipmaps=!1,this.needsUpdate=!0}},ai=class extends Yt{constructor(e,t,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Wh=class extends ai{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=_n,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xh=class extends ai{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,wi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},ws=class extends Yt{constructor(e=[],t=wi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ir=class extends Yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qh=class extends Yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Mi=class extends Yt{constructor(e,t,n=Qn,i,r,a,o=Ot,l=Ot,c,h=_i,d=1){if(h!==_i&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wo=class extends Mi{constructor(e,t=Qn,n=wi,i,r,a=Ot,o=Ot,l,c=_i){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gn=class s extends ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function p(x,m,g,M,w,_,S,b,P,y,R){let D=_/P,F=S/y,B=_/2,G=S/2,z=b/2,X=P+1,te=y+1,K=0,ue=0,Z=new L;for(let ne=0;ne<te;ne++){let ae=ne*F-G;for(let E=0;E<X;E++){let N=E*D-B;Z[x]=N*M,Z[m]=ae*w,Z[g]=z,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(E/P),d.push(1-ne/y),K+=1}}for(let ne=0;ne<y;ne++)for(let ae=0;ae<P;ae++){let E=u+ae+X*ne,N=u+ae+X*(ne+1),V=u+(ae+1)+X*(ne+1),ce=u+(ae+1)+X*ne;l.push(E,N,ce),l.push(N,V,ce),ue+=6}o.addGroup(f,ue,R),f+=ue,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Xo=class s extends ot{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,x=i+1,m=new L,g=new L;for(let M=0;M<=p;M++){let w=0,_=0,S=0,b=0;if(M<=n){let R=M/n,D=R*Math.PI/2;_=-h-e*Math.cos(D),S=e*Math.sin(D),b=-e*Math.cos(D),w=R*d}else if(M<=n+r){let R=(M-n)/r;_=-h+R*t,S=e,b=0,w=d+R*u}else{let R=(M-n-r)/n,D=R*Math.PI/2;_=h+e*Math.sin(D),S=e*Math.cos(D),b=e*Math.sin(D),w=d+u+R*d}let P=Math.max(0,Math.min(1,w/f)),y=0;M===0?y=.5/i:M===p&&(y=-.5/i);for(let R=0;R<=i;R++){let D=R/i,F=D*Math.PI*2,B=Math.sin(F),G=Math.cos(F);g.x=-S*G,g.y=_,g.z=S*B,o.push(g.x,g.y,g.z),m.set(-S*G,b,S*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,P)}if(M>0){let R=(M-1)*x;for(let D=0;D<i;D++){let F=R+D,B=R+D+1,G=M*x+D,z=M*x+D+1;a.push(F,B,G),a.push(B,z,G)}}}this.setIndex(a),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qo=class s extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(o,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ts=class s extends ot{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(f,2));function M(){let _=new L,S=new L,b=0,P=(t-e)/n;for(let y=0;y<=r;y++){let R=[],D=y/r,F=D*(t-e)+e;for(let B=0;B<=i;B++){let G=B/i,z=G*l+o,X=Math.sin(z),te=Math.cos(z);S.x=F*X,S.y=-D*n+m,S.z=F*te,d.push(S.x,S.y,S.z),_.set(X,P,te).normalize(),u.push(_.x,_.y,_.z),f.push(G,1-D),R.push(p++)}x.push(R)}for(let y=0;y<i;y++)for(let R=0;R<r;R++){let D=x[R][y],F=x[R+1][y],B=x[R+1][y+1],G=x[R][y+1];(e>0||R!==0)&&(h.push(D,F,G),b+=3),(t>0||R!==r-1)&&(h.push(F,B,G),b+=3)}c.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new re,P=new L,y=0,R=_===!0?e:t,D=_===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*D,0),u.push(0,D,0),f.push(.5,.5),p++;let F=p;for(let B=0;B<=i;B++){let z=B/i*l+o,X=Math.cos(z),te=Math.sin(z);P.x=R*te,P.y=m*D,P.z=R*X,d.push(P.x,P.y,P.z),u.push(0,D,0),b.x=X*.5+.5,b.y=te*.5*D+.5,f.push(b.x,b.y),p++}for(let B=0;B<i;B++){let G=S+B,z=F+B;_===!0?h.push(z,z+1,G):h.push(z+1,z,G),y+=3}c.addGroup(g,y,_===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ua=class s extends Ts{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ji=class s extends ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(r.slice(),3)),this.setAttribute("uv",new Fe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new L,_=new L,S=new L;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],_),f(t[b+2],S),l(w,_,S,M)}function l(M,w,_,S){let b=S+1,P=[];for(let y=0;y<=b;y++){P[y]=[];let R=M.clone().lerp(_,y/b),D=w.clone().lerp(_,y/b),F=b-y;for(let B=0;B<=F;B++)B===0&&y===b?P[y][B]=R:P[y][B]=R.clone().lerp(D,B/F)}for(let y=0;y<b;y++)for(let R=0;R<2*(b-y)-1;R++){let D=Math.floor(R/2);R%2===0?(u(P[y][D+1]),u(P[y+1][D]),u(P[y][D])):(u(P[y][D+1]),u(P[y+1][D+1]),u(P[y+1][D]))}}function c(M){let w=new L;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(M),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let M=new L;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let _=m(M)/2/Math.PI+.5,S=g(M)/Math.PI+.5;a.push(_,1-S)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],_=a[M+2],S=a[M+4],b=Math.max(w,_,S),P=Math.min(w,_,S);b>.9&&P<.1&&(w<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let _=M*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let M=new L,w=new L,_=new L,S=new L,b=new re,P=new re,y=new re;for(let R=0,D=0;R<r.length;R+=9,D+=6){M.set(r[R+0],r[R+1],r[R+2]),w.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),b.set(a[D+0],a[D+1]),P.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),S.copy(M).add(w).add(_).divideScalar(3);let F=m(S);x(b,D+0,M,F),x(P,D+2,w,F),x(y,D+4,_,F)}}function x(M,w,_,S){S<0&&M.x===1&&(a[w]=M.x-1),_.x===0&&_.z===0&&(a[w]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Yo=class s extends Ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ph=new L,mh=new L,Fd=new L,gh=new mi,$o=class extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Ys*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=gh;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),gh.getNormal(Fd),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let w=(M+1)%3,_=d[M],S=d[w],b=gh[h[M]],P=gh[h[w]],y=`${_}_${S}`,R=`${S}_${_}`;R in u&&u[R]?(Fd.dot(u[R].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(P.x,P.y,P.z)),u[R]=null):y in u||(u[y]={index0:c[M],index1:c[w],normal:Fd.clone()})}}for(let p in u)if(u[p]){let{index0:x,index1:m}=u[p];ph.fromBufferAttribute(o,x),mh.fromBufferAttribute(o,m),f.push(ph.x,ph.y,ph.z),f.push(mh.x,mh.y,mh.z)}this.setAttribute("position",new Fe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new it;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(at(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends sr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hf(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var mm=new L,gm=new L,Od=new Hf,Bd=new Hf,zd=new Hf,rr=class extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(gm.subVectors(i[0],i[1]).add(i[0]),c=gm);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(mm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=mm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Od.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Bd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),zd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),zd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Od.calc(l),Bd.calc(l),zd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xm(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Vx(s,e){let t=1-s;return t*t*e}function Gx(s,e){return 2*(1-s)*s*e}function Hx(s,e){return s*s*e}function bo(s,e,t,n){return Vx(s,e)+Gx(s,t)+Hx(s,n)}function Wx(s,e){let t=1-s;return t*t*t*e}function Xx(s,e){let t=1-s;return 3*t*t*s*e}function qx(s,e){return 3*(1-s)*s*s*e}function Yx(s,e){return s*s*s*e}function wo(s,e,t,n,i){return Wx(s,e)+Xx(s,t)+qx(s,n)+Yx(s,i)}var da=class extends Hn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,i.x,r.x,a.x,o.x),wo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Hn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,i.x,r.x,a.x,o.x),wo(e,i.y,r.y,a.y,o.y),wo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends Hn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Hn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y),bo(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(xm(o,l.x,c.x,h.x,d.x),xm(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:rr,CubicBezierCurve:da,CubicBezierCurve3:Jo,EllipseCurve:sr,LineCurve:fa,LineCurve3:ar,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),or=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Yh[i.type]().fromJSON(i))}return this}},Es=class extends or{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fa(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new pa(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new da(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new sr(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class extends Es{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Es().fromJSON(i))}return this}};function $x(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=G0(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Qx(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,d=l;for(let u=t;u<i;u+=t){let f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ko(r,a,t,o,l,c,0),a}function G0(s,e,t,n,i){let r;if(i===h_(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=_m(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=_m(a/n|0,s[a],s[a+1],r);return r&&xa(r,r.next)&&(Qo(r),r=r.next),r}function lr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(xa(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ko(s,e,t,n,i,r,a){if(!s)return;!a&&r&&s_(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Jx(s,n,i,r):Zx(s)){e.push(l.i,s.i,c.i),Qo(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Kx(lr(s),e),Ko(s,e,t,n,i,r,2)):a===2&&jx(s,e,t,n,i,r):Ko(lr(s),e,t,n,i,r,1);break}}}function Zx(s){let e=s.prev,t=s,n=s.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&vo(i,o,r,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jx(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Wt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=Zd(f,p,e,t,n),M=Zd(x,m,e,t,n),w=s.prevZ,_=s.nextZ;for(;w&&w.z>=g&&_&&_.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==a&&vo(o,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&vo(o,h,l,d,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==a&&vo(o,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&vo(o,h,l,d,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Kx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!xa(n,i)&&W0(n,t,t.next,i)&&jo(n,i)&&jo(i,n)&&(e.push(n.i,t.i,i.i),Qo(t),Qo(t.next),t=s=i),t=t.next}while(t!==s);return lr(t)}function jx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o_(a,o)){let l=X0(a,o);a=lr(a,a.next),l=lr(l,l.next),Ko(a,e,t,n,i,r,0),Ko(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Qx(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=G0(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(a_(c))}i.sort(e_);for(let r=0;r<i.length;r++)t=t_(i[r],t);return t}function e_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function t_(s,e){let t=n_(s,e);if(!t)return e;let n=X0(t,s);return lr(n,n.next),lr(t,t.next)}function n_(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(xa(s,t))return t;do{if(xa(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&H0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);jo(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&i_(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function i_(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function s_(s,e,t,n){let i=s;do i.z===0&&(i.z=Zd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,r_(i)}function r_(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Zd(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function a_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function H0(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function vo(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&H0(s,e,t,n,i,r,a,o)}function o_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!l_(s,e)&&(jo(s,e)&&jo(e,s)&&c_(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||xa(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function xa(s,e){return s.x===e.x&&s.y===e.y}function W0(s,e,t,n){let i=_h(Wt(s,e,t)),r=_h(Wt(s,e,n)),a=_h(Wt(t,n,s)),o=_h(Wt(t,n,e));return!!(i!==r&&a!==o||i===0&&xh(s,t,e)||r===0&&xh(s,n,e)||a===0&&xh(t,s,n)||o===0&&xh(t,e,n))}function xh(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _h(s){return s>0?1:s<0?-1:0}function l_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&W0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function jo(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function c_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function X0(s,e){let t=Jd(s.i,s.x,s.y),n=Jd(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _m(s,e,t,n){let i=Jd(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Kd=class{static triangulate(e,t,n=2){return $x(e,t,n)}},si=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];vm(e),ym(n,e);let a=e.length;t.forEach(vm);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,ym(n,t[l]);let o=Kd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ym(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var el=class s extends ot{constructor(e=new As([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Fe(i,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:u_,w,_=!1,S,b,P,y;if(g){w=g.getSpacedPoints(h),_=!0,u=!1;let he=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,he),b=new L,P=new L,y=new L}u||(m=0,f=0,p=0,x=0);let R=o.extractPoints(c),D=R.shape,F=R.holes;if(!si.isClockWise(D)){D=D.reverse();for(let he=0,xe=F.length;he<xe;he++){let ge=F[he];si.isClockWise(ge)&&(F[he]=ge.reverse())}}function G(he){let ge=10000000000000001e-36,ye=he[0];for(let be=1;be<=he.length;be++){let Je=be%he.length,Ge=he[Je],tt=Ge.x-ye.x,st=Ge.y-ye.y,k=tt*tt+st*st,U=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(ye.x),Math.abs(ye.y)),ee=ge*U*U;if(k<=ee){he.splice(Je,1),be--;continue}ye=Ge}}G(D),F.forEach(G);let z=F.length,X=D;for(let he=0;he<z;he++){let xe=F[he];D=D.concat(xe)}function te(he,xe,ge){return xe||Ke("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(xe,ge)}let K=D.length;function ue(he,xe,ge){let ye,be,Je,Ge=he.x-xe.x,tt=he.y-xe.y,st=ge.x-he.x,k=ge.y-he.y,U=Ge*Ge+tt*tt,ee=Ge*k-tt*st;if(Math.abs(ee)>Number.EPSILON){let T=Math.sqrt(U),v=Math.sqrt(st*st+k*k),I=xe.x-tt/T,O=xe.y+Ge/T,q=ge.x-k/v,me=ge.y+st/v,se=((q-I)*k-(me-O)*st)/(Ge*k-tt*st);ye=I+Ge*se-he.x,be=O+tt*se-he.y;let J=ye*ye+be*be;if(J<=2)return new re(ye,be);Je=Math.sqrt(J/2)}else{let T=!1;Ge>Number.EPSILON?st>Number.EPSILON&&(T=!0):Ge<-Number.EPSILON?st<-Number.EPSILON&&(T=!0):Math.sign(tt)===Math.sign(k)&&(T=!0),T?(ye=-tt,be=Ge,Je=Math.sqrt(U)):(ye=Ge,be=tt,Je=Math.sqrt(U/2))}return new re(ye/Je,be/Je)}let Z=[];for(let he=0,xe=X.length,ge=xe-1,ye=he+1;he<xe;he++,ge++,ye++)ge===xe&&(ge=0),ye===xe&&(ye=0),Z[he]=ue(X[he],X[ge],X[ye]);let ne=[],ae,E=Z.concat();for(let he=0,xe=z;he<xe;he++){let ge=F[he];ae=[];for(let ye=0,be=ge.length,Je=be-1,Ge=ye+1;ye<be;ye++,Je++,Ge++)Je===be&&(Je=0),Ge===be&&(Ge=0),ae[ye]=ue(ge[ye],ge[Je],ge[Ge]);ne.push(ae),E=E.concat(ae)}let N;if(m===0)N=si.triangulateShape(X,F);else{let he=[],xe=[];for(let ge=0;ge<m;ge++){let ye=ge/m,be=f*Math.cos(ye*Math.PI/2),Je=p*Math.sin(ye*Math.PI/2)+x;for(let Ge=0,tt=X.length;Ge<tt;Ge++){let st=te(X[Ge],Z[Ge],Je);fe(st.x,st.y,-be),ye===0&&he.push(st)}for(let Ge=0,tt=z;Ge<tt;Ge++){let st=F[Ge];ae=ne[Ge];let k=[];for(let U=0,ee=st.length;U<ee;U++){let T=te(st[U],ae[U],Je);fe(T.x,T.y,-be),ye===0&&k.push(T)}ye===0&&xe.push(k)}}N=si.triangulateShape(he,xe)}let V=N.length,ce=p+x;for(let he=0;he<K;he++){let xe=u?te(D[he],E[he],ce):D[he];_?(P.copy(S.normals[0]).multiplyScalar(xe.x),b.copy(S.binormals[0]).multiplyScalar(xe.y),y.copy(w[0]).add(P).add(b),fe(y.x,y.y,y.z)):fe(xe.x,xe.y,0)}for(let he=1;he<=h;he++)for(let xe=0;xe<K;xe++){let ge=u?te(D[xe],E[xe],ce):D[xe];_?(P.copy(S.normals[he]).multiplyScalar(ge.x),b.copy(S.binormals[he]).multiplyScalar(ge.y),y.copy(w[he]).add(P).add(b),fe(y.x,y.y,y.z)):fe(ge.x,ge.y,d/h*he)}for(let he=m-1;he>=0;he--){let xe=he/m,ge=f*Math.cos(xe*Math.PI/2),ye=p*Math.sin(xe*Math.PI/2)+x;for(let be=0,Je=X.length;be<Je;be++){let Ge=te(X[be],Z[be],ye);fe(Ge.x,Ge.y,d+ge)}for(let be=0,Je=F.length;be<Je;be++){let Ge=F[be];ae=ne[be];for(let tt=0,st=Ge.length;tt<st;tt++){let k=te(Ge[tt],ae[tt],ye);_?fe(k.x,k.y+w[h-1].y,w[h-1].x+ge):fe(k.x,k.y,d+ge)}}}pe(),H();function pe(){let he=i.length/3;if(u){let xe=0,ge=K*xe;for(let ye=0;ye<V;ye++){let be=N[ye];Oe(be[2]+ge,be[1]+ge,be[0]+ge)}xe=h+m*2,ge=K*xe;for(let ye=0;ye<V;ye++){let be=N[ye];Oe(be[0]+ge,be[1]+ge,be[2]+ge)}}else{for(let xe=0;xe<V;xe++){let ge=N[xe];Oe(ge[2],ge[1],ge[0])}for(let xe=0;xe<V;xe++){let ge=N[xe];Oe(ge[0]+K*h,ge[1]+K*h,ge[2]+K*h)}}n.addGroup(he,i.length/3-he,0)}function H(){let he=i.length/3,xe=0;$(X,xe),xe+=X.length;for(let ge=0,ye=F.length;ge<ye;ge++){let be=F[ge];$(be,xe),xe+=be.length}n.addGroup(he,i.length/3-he,1)}function $(he,xe){let ge=he.length;for(;--ge>=0;){let ye=ge,be=ge-1;be<0&&(be=he.length-1);for(let Je=0,Ge=h+m*2;Je<Ge;Je++){let tt=K*Je,st=K*(Je+1),k=xe+ye+tt,U=xe+be+tt,ee=xe+be+st,T=xe+ye+st;Ee(k,U,ee,T)}}}function fe(he,xe,ge){l.push(he),l.push(xe),l.push(ge)}function Oe(he,xe,ge){Ze(he),Ze(xe),Ze(ge);let ye=i.length/3,be=M.generateTopUV(n,i,ye-3,ye-2,ye-1);ht(be[0]),ht(be[1]),ht(be[2])}function Ee(he,xe,ge,ye){Ze(he),Ze(xe),Ze(ye),Ze(xe),Ze(ge),Ze(ye);let be=i.length/3,Je=M.generateSideWallUV(n,i,be-6,be-3,be-2,be-1);ht(Je[0]),ht(Je[1]),ht(Je[3]),ht(Je[1]),ht(Je[2]),ht(Je[3])}function Ze(he){i.push(l[he*3+0]),i.push(l[he*3+1]),i.push(l[he*3+2])}function ht(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return d_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Yh[i.type]().fromJSON(i)),new s(n,e.options)}},u_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-p),new re(x,1-g)]:[new re(o,1-l),new re(h,1-d),new re(f,1-p),new re(m,1-g)]}};function d_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var tl=class s extends Ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},nl=class s extends ot{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=at(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new L,u=new re,f=new L,p=new L,x=new L,m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=t;M++){let w=n+M*h*i,_=Math.sin(w),S=Math.cos(w);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*_,d.y=e[b].y,d.z=e[b].x*S,a.push(d.x,d.y,d.z),u.x=M/t,u.y=b/(e.length-1),o.push(u.x,u.y);let P=l[3*b+0]*_,y=l[3*b+1],R=l[3*b+0]*S;c.push(P,y,R)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let _=w+M*e.length,S=_,b=_+e.length,P=_+e.length+1,y=_+1;r.push(S,b,y),r.push(P,y,b)}this.setIndex(r),this.setAttribute("position",new Fe(a,3)),this.setAttribute("uv",new Fe(o,2)),this.setAttribute("normal",new Fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},_a=class s extends Ji{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ki=class s extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let M=g*u-a;for(let w=0;w<c;w++){let _=w*d-r;p.push(_,-M,0),x.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let w=M+c*g,_=M+c*(g+1),S=M+1+c*(g+1),b=M+1+c*g;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},il=class s extends ot{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/i,f=new L,p=new re;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let M=g+m,w=M,_=M+n+1,S=M+n+2,b=M+1;o.push(w,_,b),o.push(_,S,b)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},sl=class s extends ot{constructor(e=new As([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(i,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(a,2));function c(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let M=p[m];si.isClockWise(M)===!0&&(p[m]=M.reverse())}let x=si.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){let M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,g=x.length;m<g;m++){let M=x[m],w=M[0]+d,_=M[1]+d,S=M[2]+d;n.push(w,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return f_(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function f_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var va=class s extends ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let M=[],w=g/n,_=a+w*o,S=e*Math.cos(_),b=Math.sqrt(e*e-S*S),P=0;g===0&&a===0?P=.5/t:g===n&&l===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){let R=y/t,D=i+R*r;d.x=-b*Math.cos(D),d.y=S,d.z=b*Math.sin(D),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(R+P,1-w),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let w=h[g][M+1],_=h[g][M],S=h[g+1][M],b=h[g+1][M+1];(g!==0||a>0)&&f.push(w,_,b),(g!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},rl=class s extends Ji{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},cr=class s extends ot{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new L,f=new L,p=new L;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=i;g++){let M=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,w=(i+1)*(x-1)+m,_=(i+1)*x+m;l.push(g,M,_),l.push(M,w,_)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},al=class s extends ot{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new L,u=new L,f=new L,p=new L,x=new L,m=new L,g=new L;for(let w=0;w<=n;++w){let _=w/n*r*Math.PI*2;M(_,r,a,e,f),M(_+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let S=0;S<=i;++S){let b=S/i*Math.PI*2,P=-t*Math.cos(b),y=t*Math.sin(b);d.x=f.x+(P*g.x+y*x.x),d.y=f.y+(P*g.y+y*x.y),d.z=f.z+(P*g.z+y*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(w/n),h.push(S/i)}}for(let w=1;w<=n;w++)for(let _=1;_<=i;_++){let S=(i+1)*(w-1)+(_-1),b=(i+1)*w+(_-1),P=(i+1)*w+_,y=(i+1)*(w-1)+_;o.push(S,b,y),o.push(b,P,y)}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2));function M(w,_,S,b,P){let y=Math.cos(w),R=Math.sin(w),D=S/_*w,F=Math.cos(D);P.x=b*(2+F)*.5*y,P.y=b*(2+F)*R*.5,P.z=b*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},hr=class s extends ot{constructor(e=new ma(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new re,h=new L,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(f,2));function x(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),g()}function m(w){h=e.getPointAt(w/t,h);let _=a.normals[w],S=a.binormals[w];for(let b=0;b<=i;b++){let P=b/i*Math.PI*2,y=Math.sin(P),R=-Math.cos(P);l.x=R*_.x+y*S.x,l.y=R*_.y+y*S.y,l.z=R*_.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=t;w++)for(let _=1;_<=i;_++){let S=(i+1)*(w-1)+(_-1),b=(i+1)*w+(_-1),P=(i+1)*w+_,y=(i+1)*(w-1)+_;p.push(S,b,y),p.push(b,P,y)}}function M(){for(let w=0;w<=t;w++)for(let _=0;_<=i;_++)c.x=w/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Yh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ol=class extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new L,r=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),M=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,M),Mm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Mm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Mm(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Sm=Object.freeze({__proto__:null,BoxGeometry:Gn,CapsuleGeometry:Xo,CircleGeometry:qo,ConeGeometry:ua,CylinderGeometry:Ts,DodecahedronGeometry:Yo,EdgesGeometry:$o,ExtrudeGeometry:el,IcosahedronGeometry:tl,LatheGeometry:nl,OctahedronGeometry:_a,PlaneGeometry:Ki,PolyhedronGeometry:Ji,RingGeometry:il,ShapeGeometry:sl,SphereGeometry:va,TetrahedronGeometry:rl,TorusGeometry:cr,TorusKnotGeometry:al,TubeGeometry:hr,WireframeGeometry:ol}),ll=class extends an{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Tr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(bm(i))i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bm(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function An(s){let e={};for(let t=0;t<s.length;t++){let n=Tr(s[t]);for(let i in n)e[i]=n[i]}return e}function bm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function p_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Cn={clone:Tr,merge:An},m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(i.value);break;case"m4":this.uniforms[n].value=new it().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cs=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Si=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ur=class extends Si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},cl=class extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hl=class extends an{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dr=class extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},fr=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ya=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ul=class extends an{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends pn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function pi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function To(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function q0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Y0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function x_(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<t||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=pi(d,c.times.constructor),c.values=pi(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function __(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=o.times.length-1,x;if(r<=o.times[0]){let g=h,M=d-h;x=o.values.slice(g,M)}else if(r>=o.times[p]){let g=p*d+h,M=g+d-h;x=o.values.slice(g,M)}else{let g=o.createInterpolant(),M=h,w=d-h;g.evaluate(r),x=g.resultBuffer.slice(M,w)}l==="quaternion"&&new Xt().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let M=g*f+u;if(l==="quaternion")Xt.multiplyQuaternionsFlat(c.values,M,x,0,c.values,M);else{let w=f-u*2;for(let _=0;_<w;++_)c.values[M+_]-=x[_]}}}return s.blendMode=Xu,s}var $h=class{static convertArray(e,t){return pi(e,t)}static isTypedArray(e){return N0(e)}static hasTangents(e){return To(e)}static getKeyframeOrder(e){return q0(e)}static sortedArray(e,t,n){return jd(e,t,n)}static flattenJSON(e,t,n,i){Y0(e,t,n,i)}static subclip(e,t,n,i,r=30){return x_(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return __(e,t,n,i)}},ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _s:r=e,o=2*t-n;break;case Qr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _s:a=e,l=2*n-t;break;case Qr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+M*a[c+S]+w*a[l+S]+_*a[d+S];return r}},Sa=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},pl=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends ji{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,M=d[g],w=d[g+1],_=e*u+p*2,S=h[_],b=h[_+1],P=y_(n,t,M,S,i);r[p]=$0(P,x,w,b,m)}return r}};function $0(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function v_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function y_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=$0(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=v_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Nn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),To(e.settings)&&(n.settings={inTangents:pi(e.settings.inTangents,Array),outTangents:pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break;case Rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;To(this.settings)&&(wm(this.settings.inTangents,e),wm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&N0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,To(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function wm(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Zs;var Li=class extends Nn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ys;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};ba.prototype.ValueTypeName="color";var pr=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};pr.prototype.ValueTypeName="number";var gl=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xt.slerpFlat(r,0,a,c-o,a,c,l);return r}},mr=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ys;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}};wa.prototype.ValueTypeName="vector";var Rs=class{constructor(e="",t=-1,n=[],i=xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(S_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=q0(l);l=jd(l,1,h),c=jd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new pr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function M_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return wa;case"color":return ba;case"quaternion":return mr;case"bool":case"boolean":return Li;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function S_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=M_(s.type);if(s.times===void 0){let n=[],i=[];Y0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),To(s.settings)&&(t.settings={inTangents:pi(s.settings.inTangents,Float32Array),outTangents:pi(s.settings.outTangents,Float32Array)}),t}var xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Tm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Tm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Tm(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ta=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xf=new Ta,vn=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vn.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Qd=class extends Error{constructor(e,t){super(e),this.response=t}},oi=class extends vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:i});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){M();function M(){d.read().then(({done:w,value:_})=>{if(w)g.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,P=h.length;b<P;b++){let y=h[b];y.onProgress&&y.onProgress(S)}g.enqueue(_),M()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Qd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{xi.add(`file:${e}`,c);let h=qi[e];delete qi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ke(l),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Rs.parse(e[n]);t.push(i)}return t}},Jh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],o=new ai,l=new oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(e[d],function(u){let f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Nt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Nt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}},qr=new WeakMap,Ps=class extends vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=qr.get(a);d===void 0&&(d=[],qr.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=na("img");function l(){h(),t&&t(this);let d=qr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}qr.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),xi.remove(`image:${e}`);let u=qr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Kh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=new ws;r.colorSpace=tn;let a=new Ps(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}},jh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ln,o=new oi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ke(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new ln;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:_n,e.wrapT=t.wrapT!==void 0?t.wrapT:_n,e.magFilter=t.magFilter!==void 0?t.magFilter:Nt,e.minFilter=t.minFilter!==void 0?t.minFilter:Nt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=jn),t.mipmapCount===1&&(e.minFilter=Nt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Qh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=new Yt,a=new Ps(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},bi=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xl=class extends bi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kd=new it,Em=new L,Am=new L,gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Em.setFromMatrixPosition(e.matrixWorld),t.position.copy(Em),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){kd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ms||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=new L,yh=new Xt,Ci=new L,xr=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vh,yh,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,yh,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vh,yh,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,yh,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new L,Cm=new re,Rm=new re,nn=class extends xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Rm),t.subVectors(Rm,Cm)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ef=class extends gr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_l=class extends bi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tf=class extends gr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},_r=class extends bi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ui=class extends xr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nf=class extends gr{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vl=class extends bi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new nf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},yl=class extends bi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Ml=class extends bi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Ea=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},Sl=class extends bi{constructor(e=new Ea,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Pm={},bl=class s extends vn{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new oi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ke(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return s.createMaterialFromType(e)}static createMaterialFromType(e){let n={ShadowMaterial:ll,SpriteMaterial:oa,RawShaderMaterial:Cs,ShaderMaterial:It,PointsMaterial:ca,MeshPhysicalMaterial:ur,MeshStandardMaterial:Si,MeshPhongMaterial:cl,MeshToonMaterial:hl,MeshNormalMaterial:dr,MeshLambertMaterial:fr,MeshDepthMaterial:ya,MeshDistanceMaterial:Ma,MeshBasicMaterial:Ln,MeshMatcapMaterial:ul,LineDashedMaterial:dl,LineBasicMaterial:pn,Material:an,...Pm}[e],i;return n===void 0?(Ri(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),i=new an):i=new n,i}static registerMaterial(e,t){Pm[e]=t}},Aa=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wl=class extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Tl=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ke(l),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),M=Kr(m.type,g),w=new bs(M,m.stride);return w.uuid=m.uuid,m.usage!==void 0&&w.setUsage(m.usage),t[p]=w,w}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let a=e.isInstancedBufferGeometry?new wl:new ot,o=e.data.index;if(o!==void 0){let f=Kr(o.type,o.array);a.setIndex(new gt(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],x;if(p.isInterleavedBufferAttribute){let m=i(e.data,p.data);x=new Zi(m,p.itemSize,p.offset,p.normalized)}else{let m=Kr(p.type,p.array),g=p.isInstancedBufferAttribute?Ii:gt;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){let M=p[m],w;if(M.isInterleavedBufferAttribute){let _=i(e.data,M.data);w=new Zi(_,M.itemSize,M.offset,M.normalized)}else{let _=Kr(M.type,M.array);w=new gt(_,M.itemSize,M.normalized)}M.name!==void 0&&(w.name=M.name),M.usage!==void 0&&w.setUsage(M.usage),M.gpuType!==void 0&&(w.gpuType=M.gpuType),x.push(w)}a.morphAttributes[f]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new sn().fromJSON(u)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Vd={},eu=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?Aa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new oi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),Ke("ObjectLoader: Can't parse "+e+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Ke("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?Aa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new oi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(let u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){Vd[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new As().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new Bo().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new Tl;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Sm?o=Sm[l.type].fromJSON(l,t):l.type in Vd?o=Vd[l.type].fromJSON(l,t):Ie(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new bl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Rs.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Kr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Ta(t);r=new Ps(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let d=e[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new ln(g.data,g.width,g.height)))}i[d.uuid]=new Dn(f)}else{let f=o(d.url);i[d.uuid]=new Dn(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Kr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Ps(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ln(p.data,p.width,p.height)))}n[l.uuid]=new Dn(h)}else{let h=await r(l.url);n[l.uuid]=new Dn(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Ie("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&Ie('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Ie("ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new ws,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ln:h=new Yt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,b_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Im),h.wrapT=n(o.wrap[1],Im)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Dm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Dm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(u){return t[u]===void 0&&Ie("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p];n[m]===void 0&&Ie("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&Ie("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&Ie("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(e.type){case"Scene":a=new Pi,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ce(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new No(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Lo(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new nn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ui(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new yl(e.color,e.intensity);break;case"DirectionalLight":a=new vl(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new _r(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Ml(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new _l(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new xl(e.color,e.groundColor,e.intensity);break;case"LightProbe":let u=new Ea().fromArray(e.sh);a=new Sl(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new Oo(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new xt(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);let f=e.count,p=e.instanceMatrix,x=e.instanceColor;a=new nr(h,d,f),a.instanceMatrix=new Ii(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new Ii(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),a=new ko(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,M=null;return m.boundingBox!==void 0&&(g=new on().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(M=new sn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:M}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new sn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new on().fromJSON(e.boundingBox));break;case"LOD":a=new Fo;break;case"Line":a=new yi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Vo(o(e.geometry),l(e.material));break;case"LineSegments":a=new Jn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Go(o(e.geometry),l(e.material));break;case"Sprite":a=new Uo(l(e.material));break;case"Group":a=new gi;break;case"Bone":a=new la;break;default:a=new wt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new L().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let u=e.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],t,n,i,r))}if(e.animations!==void 0){let u=e.animations;for(let f=0;f<u.length;f++){let p=u[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let u=e.levels;for(let f=0;f<u.length;f++){let p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?Ie("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new wt}})}},b_={UVMapping:Nl,CubeReflectionMapping:wi,CubeRefractionMapping:ns,EquirectangularReflectionMapping:Ga,EquirectangularRefractionMapping:Ha,CubeUVReflectionMapping:br},Im={RepeatWrapping:Tn,ClampToEdgeWrapping:_n,MirroredRepeatWrapping:vs},Dm={NearestFilter:Ot,NearestMipmapNearestFilter:Wa,NearestMipmapLinearFilter:is,LinearFilter:Nt,LinearMipmapNearestFilter:Ds,LinearMipmapLinearFilter:jn},Gd=new WeakMap,tu=class extends vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Gd.has(a)===!0?(i&&i(Gd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Gd.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Mh,Ca=class{static getContext(){return Mh===void 0&&(Mh=new(window.AudioContext||window.webkitAudioContext)),Mh}static setContext(e){Mh=e}},nu=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0),h=Ca.getContext(),d=e+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){t(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Ke(l),r.manager.itemError(e)}}},Lm=new it,Nm=new it,Vs=new it,iu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Vs.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Ys*t.fov*.5)/t.zoom,o,l;Nm.elements[12]=-i,Lm.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Vs.elements[0]=2*t.near/(l-o),Vs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Vs),o=-a*t.aspect-r,l=a*t.aspect-r,Vs.elements[0]=2*t.near/(l-o),Vs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Vs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Nm),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Lm),this.cameraR.matrixWorldNeedsUpdate=!0}},Yr=-90,$r=1,El=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Yr,$r,e,t);i.layers=this.layers,this.add(i);let r=new nn(Yr,$r,e,t);r.layers=this.layers,this.add(r);let a=new nn(Yr,$r,e,t);a.layers=this.layers,this.add(a);let o=new nn(Yr,$r,e,t);o.layers=this.layers,this.add(o);let l=new nn(Yr,$r,e,t);l.layers=this.layers,this.add(l);let c=new nn(Yr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Al=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},vr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=w_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function w_(){this._document.hidden===!1&&this.reset()}var Gs=new L,Hd=new Xt,T_=new L,Hs=new L,Ws=new L,su=class extends wt{constructor(){super(),this.type="AudioListener",this.context=Ca.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new vr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Gs,Hd,T_),Hs.set(0,0,-1).applyQuaternion(Hd),Ws.set(0,1,0).applyQuaternion(Hd),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Gs.x,n),t.positionY.linearRampToValueAtTime(Gs.y,n),t.positionZ.linearRampToValueAtTime(Gs.z,n),t.forwardX.linearRampToValueAtTime(Hs.x,n),t.forwardY.linearRampToValueAtTime(Hs.y,n),t.forwardZ.linearRampToValueAtTime(Hs.z,n),t.upX.linearRampToValueAtTime(Ws.x,n),t.upY.linearRampToValueAtTime(Ws.y,n),t.upZ.linearRampToValueAtTime(Ws.z,n)}else t.setPosition(Gs.x,Gs.y,Gs.z),t.setOrientation(Hs.x,Hs.y,Hs.z,Ws.x,Ws.y,Ws.z)}},Cl=class extends wt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ie("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ie("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ie("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Xs=new L,Um=new Xt,E_=new L,qs=new L,ru=class extends Cl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xs,Um,E_),qs.set(0,0,1).applyQuaternion(Um);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Xs.x,n),t.positionY.linearRampToValueAtTime(Xs.y,n),t.positionZ.linearRampToValueAtTime(Xs.z,n),t.orientationX.linearRampToValueAtTime(qs.x,n),t.orientationY.linearRampToValueAtTime(qs.y,n),t.orientationZ.linearRampToValueAtTime(qs.z,n)}else t.setPosition(Xs.x,Xs.y,Xs.z),t.setOrientation(qs.x,qs.y,qs.z)}},au=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Rl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,a,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},qf="\\[\\]\\.:\\/",A_=new RegExp("["+qf+"]","g"),Yf="[^"+qf+"]",C_="[^"+qf.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",Yf),P_=/(WCOD+)?/.source.replace("WCOD",C_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),D_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),L_=new RegExp("^"+R_+P_+I_+D_+"$"),N_=["material","materials","bones","map"],sf=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(e){let t=L_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=sf;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ou=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Zn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let x=0,m=a;x!==m;++x)r[x].push(new St(u,n[x],i[x]))}else if(p<c){o=e[p];let x=--c,m=e[x];t[m.uuid]=p,e[p]=m,t[f]=x,e[x]=u;for(let g=0,M=a;g!==M;++g){let w=r[g],_=w[x],S=w[p];w[p]=_,S===void 0&&(S=new St(u,n[g],i[g])),w[x]=S}}else e[p]!==o&&Ke("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let d=r++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=i;f!==p;++f){let x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<r){let u=--r,f=e[u],p=--a,x=e[p];d!==u&&(t[f.uuid]=d),e[d]=f,u!==p&&(t[x.uuid]=u),e[u]=x,e.pop();for(let m=0,g=i;m!==g;++m){let M=n[m],w=M[u],_=M[p];M[d]=w,M[u]=_,M.pop()}}else{let u=--a,f=e[u];d!==u&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,x=i;p!==x;++p){let m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new St(p,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=i[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},Pl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:xs,endingEnd:xs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Af,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case xc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Cf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Ef){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:xs:i.endingStart=Qr,t?i.endingEnd=this.zeroSlopeAtEnd?_s:xs:i.endingEnd=Qr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},U_=new Float32Array(1),lu=class extends Vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=i[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new Rl(St.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Sa(new Float32Array(2),new Float32Array(2),1,U_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Rs.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=xc),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Pl(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Rs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},cu=class extends sa{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new Qs(null,e,t,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}},hu=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},F_=0,uu=class extends Vn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:F_++}),this.name="",this.usage=yc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},du=class extends bs{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},fu=class{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Fm=new it,pu=class{constructor(e,t,n=0,i=1/0){this.ray=new vi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fm),this}intersectObject(e,t=!0,n=[]){return rf(e,this,n,t),n.sort(Om),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)rf(e[i],this,n,t);return n.sort(Om),n}};function Om(s,e){return s.distance-e.distance}function rf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)rf(r[a],e,t,!0)}}var mu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},yr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},gu=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},xu=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}},Bm=new re,Il=class{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zm=new L,Sh=new L,Zr=new L,Jr=new L,Wd=new L,O_=new L,B_=new L,_u=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zm.subVectors(e,this.start),Sh.subVectors(this.end,this.start);let n=Sh.dot(Sh);if(n===0)return 0;let r=Sh.dot(zm)/n;return t&&(r=at(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=O_,n=B_){let i=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,h=e.end;Zr.subVectors(c,o),Jr.subVectors(h,l),Wd.subVectors(o,l);let d=Zr.dot(Zr),u=Jr.dot(Jr),f=Jr.dot(Wd);if(d<=i&&u<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=i)r=0,a=f/u,a=at(a,0,1);else{let p=Zr.dot(Wd);if(u<=i)a=0,r=at(-p/d,0,1);else{let x=Zr.dot(Jr),m=d*u-x*x;m!==0?r=at((x*f-p*u)/m,0,1):r=0,a=(x*r+f)/u,a<0?(a=0,r=at(-p/d,0,1)):a>1&&(a=1,r=at((x-p)/d,0,1))}}return t.copy(o).addScaledVector(Zr,r),n.copy(l).addScaledVector(Jr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},km=new L,vu=class extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new ot,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Fe(i,3));let r=new pn({fog:!1,toneMapped:!1});this.cone=new Jn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),km.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(km),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},gs=new L,bh=new it,Xd=new it,yu=class extends Jn{constructor(e){let t=Z0(e),n=new ot,i=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Fe(i,3)),n.setAttribute("color",new Fe(r,3));let a=new pn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new Ce(255),l=new Ce(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Xd.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(bh.multiplyMatrices(Xd,o.matrixWorld),gs.setFromMatrixPosition(bh),i.setXYZ(a,gs.x,gs.y,gs.z),bh.multiplyMatrices(Xd,o.parent.matrixWorld),gs.setFromMatrixPosition(bh),i.setXYZ(a+1,gs.x,gs.y,gs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Z0(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...Z0(s.children[t]));return e}var Mu=class extends xt{constructor(e,t,n){let i=new va(t,4,2),r=new Ln({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},z_=new L,Vm=new Ce,Gm=new Ce,Su=class extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new _a(t);i.rotateY(Math.PI*.5),this.material=new Ln({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new gt(a,3)),this.add(new xt(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Vm.copy(this.light.color),Gm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?Vm:Gm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(z_.setFromMatrixPosition(this.light.matrixWorld).negate())}},bu=class extends Jn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new ot;h.setAttribute("position",new Fe(l,3)),h.setAttribute("color",new Fe(c,3));let d=new pn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},wu=class extends Jn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Ce(r),a=new Ce(a);let o=[],l=[];if(t>1)for(let d=0;d<t;d++){let u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,p);let x=d&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){let u=d&1?r:a,f=e-e/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;o.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,o.push(m,0,g),l.push(u.r,u.g,u.b)}}let c=new ot;c.setAttribute("position",new Fe(o,3)),c.setAttribute("color",new Fe(l,3));let h=new pn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Hm=new L,wh=new L,Wm=new L,Tu=class extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ot;i.setAttribute("position",new Fe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new pn({fog:!1,toneMapped:!1});this.lightPlane=new yi(i,r),this.add(this.lightPlane),i=new ot,i.setAttribute("position",new Fe([0,0,0,0,0,1],3)),this.targetLine=new yi(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Hm.setFromMatrixPosition(this.light.matrixWorld),wh.setFromMatrixPosition(this.light.target.matrixWorld),Wm.subVectors(wh,Hm),this.lightPlane.lookAt(wh),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wh),this.targetLine.scale.z=Wm.length()}},Th=new L,qt=new xr,Eu=class extends Jn{constructor(e){let t=new ot,n=new pn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Fe(i,3)),t.setAttribute("color",new Fe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Ce(16755200),h=new Ce(16711680),d=new Ce(43775),u=new Ce(16777215),f=new Ce(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,i=1,r,a;if(qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===kn)r=-1,a=1;else if(this.camera.coordinateSystem===Ms)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Jt("c",t,e,qt,0,0,r),Jt("t",t,e,qt,0,0,a),Jt("n1",t,e,qt,-n,-i,r),Jt("n2",t,e,qt,n,-i,r),Jt("n3",t,e,qt,-n,i,r),Jt("n4",t,e,qt,n,i,r),Jt("f1",t,e,qt,-n,-i,a),Jt("f2",t,e,qt,n,-i,a),Jt("f3",t,e,qt,-n,i,a),Jt("f4",t,e,qt,n,i,a),Jt("u1",t,e,qt,n*.7,i*1.1,r),Jt("u2",t,e,qt,-n*.7,i*1.1,r),Jt("u3",t,e,qt,0,i*2,r),Jt("cf1",t,e,qt,-n,0,a),Jt("cf2",t,e,qt,n,0,a),Jt("cf3",t,e,qt,0,-i,a),Jt("cf4",t,e,qt,0,i,a),Jt("cn1",t,e,qt,-n,0,r),Jt("cn2",t,e,qt,n,0,r),Jt("cn3",t,e,qt,0,-i,r),Jt("cn4",t,e,qt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Jt(s,e,t,n,i,r,a){Th.set(i,r,a).unproject(n);let o=e[s];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Th.x,Th.y,Th.z)}}var Eh=new on,Au=class extends Jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new ot;r.setIndex(new gt(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Eh.setFromObject(this.object),Eh.isEmpty())return;let e=Eh.min,t=Eh.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Cu=class extends Jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ot;r.setIndex(new gt(n,1)),r.setAttribute("position",new Fe(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ru=class extends yi{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ot;a.setAttribute("position",new Fe(r,3)),a.computeBoundingSphere(),super(a,new pn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ot;l.setAttribute("position",new Fe(o,3)),l.computeBoundingSphere(),this.add(new xt(l,new Ln({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Xm=new L,Ah,qd,Pu=class extends wt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ah===void 0&&(Ah=new ot,Ah.setAttribute("position",new Fe([0,0,0,0,1,0],3)),qd=new ua(.5,1,5,1),qd.translate(0,-.5,0)),this.position.copy(t),this.line=new yi(Ah,new pn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new xt(qd,new Ln({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Xm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Xm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Iu=class extends Jn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ot;i.setAttribute("position",new Fe(t,3)),i.setAttribute("color",new Fe(n,3));let r=new pn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new Ce,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Du=class{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Es,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new re);if(e(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],m=l[(p+1)%f];if(x.y>d!=m.y>d){let g=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);u.push(g)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ie('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=si.area(c);if(h===0)continue;let d=new Il;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new As;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Es;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Ra=class extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function k_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function V_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function G_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Yu(s,e,t,n){let i=H_(n);switch(t){case Hu:return s*e;case Bl:return s*e/i.components*i.byteLength;case Xa:return s*e/i.components*i.byteLength;case rs:return s*e*2/i.components*i.byteLength;case zl:return s*e*2/i.components*i.byteLength;case Wu:return s*e*3/i.components*i.byteLength;case rn:return s*e*4/i.components*i.byteLength;case kl:return s*e*4/i.components*i.byteLength;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(s,16)*Math.max(e,8)/4;case Vl:case Hl:return Math.max(s,8)*Math.max(e,8)/2;case Xl:case ql:case $l:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Ja:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uc:case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ka:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H_(s){switch(s){case yn:case zu:return{byteLength:1,components:1};case wr:case ku:case Kt:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case Qn:case Ul:case En:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Lu=class{static contain(e,t){return k_(e,t)}static cover(e,t){return V_(e,t)}static fill(e){return G_(e)}static getByteLength(e,t,n,i){return Yu(e,t,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xg(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function W_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ty=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:X_,alphahash_pars_fragment:q_,alphamap_fragment:Y_,alphamap_pars_fragment:$_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:K_,aomap_pars_fragment:j_,batching_pars_vertex:Q_,batching_vertex:ev,begin_vertex:tv,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:sv,bumpmap_pars_fragment:rv,clipping_planes_fragment:av,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:hv,color_pars_fragment:uv,color_pars_vertex:dv,color_vertex:fv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:xv,displacementmap_vertex:_v,emissivemap_fragment:vv,emissivemap_pars_fragment:yv,colorspace_fragment:Mv,colorspace_pars_fragment:Sv,envmap_fragment:bv,envmap_common_pars_fragment:wv,envmap_pars_fragment:Tv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Ov,envmap_vertex:Av,fog_vertex:Cv,fog_pars_vertex:Rv,fog_fragment:Pv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Dv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Uv,lights_pars_begin:Fv,lights_toon_fragment:Bv,lights_toon_pars_fragment:zv,lights_phong_fragment:kv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Gv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Wv,lights_fragment_maps:Xv,lights_fragment_end:qv,lightprobes_pars_fragment:Yv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Kv,map_fragment:jv,map_pars_fragment:Qv,map_particle_fragment:ey,map_particle_pars_fragment:ty,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:sy,morphcolor_vertex:ry,morphnormal_vertex:ay,morphtarget_pars_vertex:oy,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:hy,normal_pars_fragment:uy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:xy,iridescence_pars_fragment:_y,opaque_fragment:vy,packing:yy,premultiplied_alpha_fragment:My,project_vertex:Sy,dithering_fragment:by,dithering_pars_fragment:wy,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:Py,skinbase_vertex:Iy,skinning_pars_vertex:Dy,skinning_vertex:Ly,skinnormal_vertex:Ny,specularmap_fragment:Uy,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:By,transmission_fragment:zy,transmission_pars_fragment:ky,uv_pars_fragment:Vy,uv_pars_vertex:Gy,uv_vertex:Hy,worldpos_vertex:Wy,background_vert:Xy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:$y,cube_vert:Zy,cube_frag:Jy,depth_vert:Ky,depth_frag:jy,distance_vert:Qy,distance_frag:e1,equirect_vert:t1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:s1,meshbasic_vert:r1,meshbasic_frag:a1,meshlambert_vert:o1,meshlambert_frag:l1,meshmatcap_vert:c1,meshmatcap_frag:h1,meshnormal_vert:u1,meshnormal_frag:d1,meshphong_vert:f1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:x1,meshtoon_frag:_1,points_vert:v1,points_frag:y1,shadow_vert:M1,shadow_frag:S1,sprite_vert:b1,sprite_frag:w1},De={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ei={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:An([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var $u={r:0,b:0,g:0},T1=new it,_g=new ct;_g.set(-1,0,0,0,1,0,0,0,1);function E1(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let _=M.backgroundBlurriness>0;w=e.get(w,_)}return w}function p(M){let w=!1,_=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===br)?(c===void 0&&(c=new xt(new Gn(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Tr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_g),c.material.toneMapped=mt.getTransfer(_.colorSpace)!==At,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xt(new Ki(2,2),new It({name:"BackgroundMaterial",uniforms:Tr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=mt.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB($u,Wf(s)),t.buffers.color.setClear($u.r,$u.g,$u.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:x,dispose:g}}function A1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(F,B,G,z,X){let te=!1,K=d(F,z,G,B);r!==K&&(r=K,c(r.object)),te=f(F,z,G,X),te&&p(F,z,G,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,_(F,B,G,z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,B,G,z){let X=z.wireframe===!0,te=n[B.id];te===void 0&&(te={},n[B.id]=te);let K=F.isInstancedMesh===!0?F.id:0,ue=te[K];ue===void 0&&(ue={},te[K]=ue);let Z=ue[G.id];Z===void 0&&(Z={},ue[G.id]=Z);let ne=Z[X];return ne===void 0&&(ne=u(l()),Z[X]=ne),ne}function u(F){let B=[],G=[],z=[];for(let X=0;X<t;X++)B[X]=0,G[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:z,object:F,attributes:{},index:null}}function f(F,B,G,z){let X=r.attributes,te=B.attributes,K=0,ue=G.getAttributes();for(let Z in ue)if(ue[Z].location>=0){let ae=X[Z],E=te[Z];if(E===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(E=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(E=F.instanceColor)),ae===void 0||ae.attribute!==E||E&&ae.data!==E.data)return!0;K++}return r.attributesNum!==K||r.index!==z}function p(F,B,G,z){let X={},te=B.attributes,K=0,ue=G.getAttributes();for(let Z in ue)if(ue[Z].location>=0){let ae=te[Z];ae===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));let E={};E.attribute=ae,ae&&ae.data&&(E.data=ae.data),X[Z]=E,K++}r.attributes=X,r.attributesNum=K,r.index=z}function x(){let F=r.newAttributes;for(let B=0,G=F.length;B<G;B++)F[B]=0}function m(F){g(F,0)}function g(F,B){let G=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;G[F]=1,z[F]===0&&(s.enableVertexAttribArray(F),z[F]=1),X[F]!==B&&(s.vertexAttribDivisor(F,B),X[F]=B)}function M(){let F=r.newAttributes,B=r.enabledAttributes;for(let G=0,z=B.length;G<z;G++)B[G]!==F[G]&&(s.disableVertexAttribArray(G),B[G]=0)}function w(F,B,G,z,X,te,K){K===!0?s.vertexAttribIPointer(F,B,G,X,te):s.vertexAttribPointer(F,B,G,z,X,te)}function _(F,B,G,z){x();let X=z.attributes,te=G.getAttributes(),K=B.defaultAttributeValues;for(let ue in te){let Z=te[ue];if(Z.location>=0){let ne=X[ue];if(ne===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let ae=ne.normalized,E=ne.itemSize,N=e.get(ne);if(N===void 0)continue;let V=N.buffer,ce=N.type,pe=N.bytesPerElement,H=ce===s.INT||ce===s.UNSIGNED_INT||ne.gpuType===Ul;if(ne.isInterleavedBufferAttribute){let $=ne.data,fe=$.stride,Oe=ne.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)g(Z.location+Ee,$.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)m(Z.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,V);for(let Ee=0;Ee<Z.locationSize;Ee++)w(Z.location+Ee,E/Z.locationSize,ce,ae,fe*pe,(Oe+E/Z.locationSize*Ee)*pe,H)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)g(Z.location+$,ne.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<Z.locationSize;$++)m(Z.location+$);s.bindBuffer(s.ARRAY_BUFFER,V);for(let $=0;$<Z.locationSize;$++)w(Z.location+$,E/Z.locationSize,ce,ae,E*pe,E/Z.locationSize*$*pe,H)}}else if(K!==void 0){let ae=K[ue];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Z.location,ae);break;case 3:s.vertexAttrib3fv(Z.location,ae);break;case 4:s.vertexAttrib4fv(Z.location,ae);break;default:s.vertexAttrib1fv(Z.location,ae)}}}}M()}function S(){R();for(let F in n){let B=n[F];for(let G in B){let z=B[G];for(let X in z){let te=z[X];for(let K in te)h(te[K].object),delete te[K];delete z[X]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let B=n[F.id];for(let G in B){let z=B[G];for(let X in z){let te=z[X];for(let K in te)h(te[K].object),delete te[K];delete z[X]}}delete n[F.id]}function P(F){for(let B in n){let G=n[B];for(let z in G){let X=G[z];if(X[F.id]===void 0)continue;let te=X[F.id];for(let K in te)h(te[K].object),delete te[K];delete X[F.id]}}}function y(F){for(let B in n){let G=n[B],z=F.isInstancedMesh===!0?F.id:0,X=G[z];if(X!==void 0){for(let te in X){let K=X[te];for(let ue in K)h(K[ue].object),delete K[ue];delete X[te]}delete G[z],Object.keys(G).length===0&&delete n[B]}}}function R(){D(),a=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function C1(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function R1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==rn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==yn&&P!==En&&!y&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function P1(s){let e=this,t=null,n=0,i=!1,r=!1,a=new zn,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,_=g.clippingState||null;l.value=_,_=h(p,u,w,f);for(let S=0;S!==w;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=f;w!==x;++w,_+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Qa=4,I1=6,D1=20,L1=256,Mc=new Ui,J0=new Ce,$f=null,Zf=0,Jf=0,Kf=!1,N1=new L,Er=new L,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=N1}=r;$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Zf,Jf),this._renderer.xr.enabled=Kf,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Kt,format:rn,colorSpace:ea,depthBuffer:!1},i=K0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=U1(r)),this._blurMaterial=O1(r,e,t),this._ggxMaterial=F1(r,e,t)}return i}_compileMaterial(e){let t=new xt(new ot,e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i,r){let l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(J0),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Gn,new Ln({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(J0),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;ja(i,_*S,w>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===wi||e.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j0());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Qa?n-p+Qa:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,ja(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(o,Mc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ja(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(o,Mc)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Qa?i-this._lodMax+Qa:0),u=4*(this._cubeSize-h);ja(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Mc)}};function U1(s){let e=[],t=[],n=s,i=s-Qa+1+I1;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,w=g>2?0:-1,_=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(_,f*u*g);for(let S=0;S<u;S++){let b=h[S*2]*2-1,P=h[S*2+1]*2-1;g===0?Er.set(1,P,b):g===1?Er.set(-b,1,-P):g===2?Er.set(-b,P,1):g===3?Er.set(-1,P,-b):g===4?Er.set(-b,-1,P):Er.set(b,P,-1),Er.toArray(x,(g*u+S)*f)}}let m=new ot;m.setAttribute("position",new gt(p,f)),m.setAttribute("outputDirection",new gt(x,f)),t.push(new xt(m,null)),n>Qa&&n--}return{lodMeshes:t,sizeLods:e}}function K0(s,e,t){let n=new zt(s,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function F1(s,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function O1(s,e,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function j0(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Q0(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Ju(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tc=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ws(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gn(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:$t});r.uniforms.tEquirect.value=t;let a=new xt(i,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Nt),new El(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function B1(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ga||f===Ha)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Tc(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ga||f===Ha,x=f===wi||f===ns;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new wc(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new wc(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ga?u.mapping=wi:f===Ha&&(u.mapping=ns),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function z1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ri("WebGLRenderer: "+n+" extension not supported."),i}}}function k1(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let w=0,_=M.length;w<_;w+=3){let S=M[w+0],b=M[w+1],P=M[w+2];u.push(S,b,b,P,P,S)}}else{let M=p.array;x=p.version;for(let w=0,_=M.length/3-1;w<_;w+=3){let S=w+0,b=w+1,P=w+2;u.push(S,b,b,P,P,S)}}let m=new(p.count>=65535?aa:ra)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function V1(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function G1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H1(s,e,t){let n=new WeakMap,i=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let R=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=o.attributes.position.count*w,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*S*4*d),P=new js(b,_,S,d);P.type=En,P.needsUpdate=!0;let y=w*4;for(let D=0;D<d;D++){let F=m[D],B=g[D],G=M[D],z=_*S*4*D;for(let X=0;X<F.count;X++){let te=X*y;f===!0&&(i.fromBufferAttribute(F,X),b[z+te+0]=i.x,b[z+te+1]=i.y,b[z+te+2]=i.z,b[z+te+3]=0),p===!0&&(i.fromBufferAttribute(B,X),b[z+te+4]=i.x,b[z+te+5]=i.y,b[z+te+6]=i.z,b[z+te+7]=0),x===!0&&(i.fromBufferAttribute(G,X),b[z+te+8]=i.x,b[z+te+9]=i.y,b[z+te+10]=i.z,b[z+te+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new re(_,S)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function W1(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var X1={[Ua]:"LINEAR_TONE_MAPPING",[Fa]:"REINHARD_TONE_MAPPING",[Oa]:"CINEON_TONE_MAPPING",[Ba]:"ACES_FILMIC_TONE_MAPPING",[ka]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function q1(s,e,t,n,i,r){let a=new zt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ot;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let h=new Cs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(c,h),u=new Ui(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,M=[],w=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let b=0;b<M.length;b++){let P=M[b];P.setSize&&P.setSize(_,S)}},this.setEffects=function(_){M=_,w=M.length>0&&M[0].isRenderPass===!0;let S=a.width,b=a.height;M.length>0&&o===null&&(o=new zt(S,b,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new zt(S,b,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let y=M[P];y.setSize&&y.setSize(S,b)}},this.begin=function(_,S){if(x||_.toneMapping===li&&M.length===0)return!1;if(g=S,S!==null){let b=S.width,P=S.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=li,!0},this.hasRenderPass=function(){return w},this.end=function(_,S){_.toneMapping=m,x=!0;let b=a,P=o;for(let y=0;y<M.length;y++){let R=M[y];R.enabled!==!1&&(R.render(_,P,b,S),R.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},mt.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let y=X1[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(g),_.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vg=new Yt,ep=new Mi(1,1),yg=new js,Mg=new Qs,Sg=new ws,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),sg=new Float32Array(4);function to(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=eg[i];if(r===void 0&&(r=new Float32Array(i),eg[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ku(s,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Y1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function Z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function J1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function K1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;sg.set(n),s.uniformMatrix2fv(this.addr,!1,sg),hn(t,n)}}function j1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;ig.set(n),s.uniformMatrix3fv(this.addr,!1,ig),hn(t,n)}}function Q1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;ng.set(n),s.uniformMatrix4fv(this.addr,!1,ng),hn(t,n)}}function eM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function nM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function iM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function sM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function aM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function oM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function lM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ep.compareFunction=t.isReversedDepthBuffer()?vc:_c,r=ep):r=vg,t.setTexture2D(e||r,i)}function cM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mg,i)}function hM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sg,i)}function uM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yg,i)}function dM(s){switch(s){case 5126:return Y1;case 35664:return $1;case 35665:return Z1;case 35666:return J1;case 35674:return K1;case 35675:return j1;case 35676:return Q1;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(s,e){s.uniform1fv(this.addr,e)}function pM(s,e){let t=to(e,this.size,2);s.uniform2fv(this.addr,t)}function mM(s,e){let t=to(e,this.size,3);s.uniform3fv(this.addr,t)}function gM(s,e){let t=to(e,this.size,4);s.uniform4fv(this.addr,t)}function xM(s,e){let t=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _M(s,e){let t=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vM(s,e){let t=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yM(s,e){s.uniform1iv(this.addr,e)}function MM(s,e){s.uniform2iv(this.addr,e)}function SM(s,e){s.uniform3iv(this.addr,e)}function bM(s,e){s.uniform4iv(this.addr,e)}function wM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function EM(s,e){s.uniform3uiv(this.addr,e)}function AM(s,e){s.uniform4uiv(this.addr,e)}function CM(s,e,t){let n=this.cache,i=e.length,r=Ku(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ep:a=vg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function RM(s,e,t){let n=this.cache,i=e.length,r=Ku(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Mg,r[a])}function PM(s,e,t){let n=this.cache,i=e.length,r=Ku(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sg,r[a])}function IM(s,e,t){let n=this.cache,i=e.length,r=Ku(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yg,r[a])}function DM(s){switch(s){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return yM;case 35667:case 35671:return MM;case 35668:case 35672:return SM;case 35669:case 35673:return bM;case 5125:return wM;case 36294:return TM;case 36295:return EM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return IM}}var tp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dM(t.type)}},np=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DM(t.type)}},ip=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},jf=/(\w+)(\])?(\[|\.)?/g;function rg(s,e){s.seq.push(e),s.map[e.id]=e}function LM(s,e,t){let n=s.name,i=n.length;for(jf.lastIndex=0;;){let r=jf.exec(n),a=jf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rg(t,c===void 0?new tp(o,s,e):new np(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new ip(o),rg(t,d)),t=d}}}var eo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);LM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ag(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var NM=37297,UM=0;function FM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var og=new ct;function OM(s){mt._getMatrix(og,mt.workingColorSpace,s);let e=`mat3( ${og.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(s)){case ta:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+FM(s.getShaderSource(e),o)}else return r}function BM(s,e){let t=OM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zM={[Ua]:"Linear",[Fa]:"Reinhard",[Oa]:"Cineon",[Ba]:"ACESFilmic",[ka]:"AgX",[Va]:"Neutral",[za]:"Custom"};function kM(s,e){let t=zM[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zu=new L;function VM(){mt.getLuminanceCoefficients(Zu);let s=Zu.x.toFixed(4),e=Zu.y.toFixed(4),t=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bc).join(`
`)}function HM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function bc(s){return s!==""}function cg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(s){return s.replace(XM,YM)}var qM=new Map;function YM(s,e){let t=ft[e];if(t===void 0){let n=qM.get(e);if(n!==void 0)t=ft[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sp(t)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(s){return s.replace($M,ZM)}function ZM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var JM={[Pa]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function KM(s){return JM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jM={[wi]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function QM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":jM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var eS={[ns]:"ENVMAP_MODE_REFRACTION"};function tS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nS={[Na]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[wf]:"ENVMAP_BLENDING_ADD"};function iS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nS[s.combine]||"ENVMAP_BLENDING_NONE"}function sS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rS(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=KM(t),c=QM(t),h=tS(t),d=iS(t),u=sS(t),f=GM(t),p=HM(r),x=i.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bc).join(`
`),g.length>0&&(g+=`
`)):(m=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bc).join(`
`),g=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?ft.tonemapping_pars_fragment:"",t.toneMapping!==li?kM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,BM("linearToOutputTexel",t.outputColorSpace),VM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bc).join(`
`)),a=sp(a),a=cg(a,t),a=hg(a,t),o=sp(o),o=cg(o,t),o=hg(o,t),a=ug(a),o=ug(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=M+m+a,_=M+g+o,S=ag(i,i.VERTEX_SHADER,w),b=ag(i,i.FRAGMENT_SHADER,_);i.attachShader(x,S),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(F){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x)||"",G=i.getShaderInfoLog(S)||"",z=i.getShaderInfoLog(b)||"",X=B.trim(),te=G.trim(),K=z.trim(),ue=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{let ne=lg(i,S,"vertex"),ae=lg(i,b,"fragment");Ke("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+ne+`
`+ae)}else X!==""?Ie("WebGLProgram: Program Info Log:",X):(te===""||K==="")&&(Z=!1);Z&&(F.diagnostics={runnable:ue,programLog:X,vertexShader:{log:te,prefix:m},fragmentShader:{log:K,prefix:g}})}i.deleteShader(S),i.deleteShader(b),y=new eo(i,x),R=WM(i,x)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(x,NM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var aS=0,rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}},ap=class{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}};function oS(s){return s===rs||s===Ja||s===Ka}function lS(s,e,t,n,i,r){let a=new er,o=new rp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,R,D,F,B,G){let z=F.fog,X=B.geometry,te=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ue=e.get(y.envMap||te,K),Z=ue&&ue.mapping===br?ue.image.height:null,ne=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=ae!==void 0?ae.length:0,N=0;X.morphAttributes.position!==void 0&&(N=1),X.morphAttributes.normal!==void 0&&(N=2),X.morphAttributes.color!==void 0&&(N=3);let V,ce,pe,H;if(ne){let Ct=Ei[ne];V=Ct.vertexShader,ce=Ct.fragmentShader}else{V=y.vertexShader,ce=y.fragmentShader;let Ct=o.getVertexShaderStage(y),Tt=o.getFragmentShaderStage(y);o.update(y,Ct,Tt),pe=Ct.id,H=Tt.id}let $=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Ee=B.isBatchedMesh===!0,Ze=!!y.map,ht=!!y.matcap,he=!!ue,xe=!!y.aoMap,ge=!!y.lightMap,ye=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,Je=!!y.displacementMap,Ge=!!y.emissiveMap,tt=!!y.metalnessMap,st=!!y.roughnessMap,k=y.anisotropy>0,U=y.clearcoat>0,ee=y.dispersion>0,T=y.retroreflectivity>0,v=y.iridescence>0,I=y.sheen>0,O=y.transmission>0,q=k&&!!y.anisotropyMap,me=U&&!!y.clearcoatMap,se=U&&!!y.clearcoatNormalMap,J=U&&!!y.clearcoatRoughnessMap,oe=v&&!!y.iridescenceMap,we=v&&!!y.iridescenceThicknessMap,We=I&&!!y.sheenColorMap,Ae=I&&!!y.sheenRoughnessMap,Te=!!y.specularMap,Be=!!y.specularColorMap,je=!!y.specularIntensityMap,rt=O&&!!y.transmissionMap,Y=O&&!!y.thicknessMap,Re=!!y.gradientMap,de=!!y.alphaMap,Pe=y.alphaTest>0,Ne=!!y.alphaHash,ve=!!y.extensions,Qe=li;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=s.toneMapping);let Xe={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:ce,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:ht,envMap:he,envMapMode:he&&ue.mapping,envMapCubeUVHeight:Z,aoMap:xe,lightMap:ge,bumpMap:ye,normalMap:be,displacementMap:Je,emissiveMap:Ge,normalMapObjectSpace:be&&y.normalMapType===Lf,normalMapTangentSpace:be&&y.normalMapType===Fi,packedNormalMap:be&&y.normalMapType===Fi&&oS(y.normalMap.format),metalnessMap:tt,roughnessMap:st,anisotropy:k,anisotropyMap:q,clearcoat:U,clearcoatMap:me,clearcoatNormalMap:se,clearcoatRoughnessMap:J,dispersion:ee,retroreflection:T,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:we,sheen:I,sheenColorMap:We,sheenRoughnessMap:Ae,specularMap:Te,specularColorMap:Be,specularIntensityMap:je,transmission:O,transmissionMap:rt,thicknessMap:Y,gradientMap:Re,opaque:y.transparent===!1&&y.blending===Sr&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ne,combine:y.combine,mapUv:Ze&&p(y.map.channel),aoMapUv:xe&&p(y.aoMap.channel),lightMapUv:ge&&p(y.lightMap.channel),bumpMapUv:ye&&p(y.bumpMap.channel),normalMapUv:be&&p(y.normalMap.channel),displacementMapUv:Je&&p(y.displacementMap.channel),emissiveMapUv:Ge&&p(y.emissiveMap.channel),metalnessMapUv:tt&&p(y.metalnessMap.channel),roughnessMapUv:st&&p(y.roughnessMap.channel),anisotropyMapUv:q&&p(y.anisotropyMap.channel),clearcoatMapUv:me&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(y.sheenRoughnessMap.channel),specularMapUv:Te&&p(y.specularMap.channel),specularColorMapUv:Be&&p(y.specularColorMap.channel),specularIntensityMapUv:je&&p(y.specularIntensityMap.channel),transmissionMapUv:rt&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:de&&p(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||k),vertexNormals:!!X.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ze||de),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:N,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===At,decodeVideoTextureEmissive:Ge&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===At,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)R.push(D),R.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(R,y),M(R,y),R.push(s.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function g(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function M(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let R=f[y.type],D;if(R){let F=Ei[R];D=Cn.clone(F.uniforms)}else D=y.uniforms;return D}function _(y,R){let D=h.get(R);return D!==void 0?++D.usedTimes:(D=new rS(s,R,y,i),c.push(D),h.set(R,D)),D}function S(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:P}}function cS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function fg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=g),e++,M}function l(u,f,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);let w=o(u,f,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function c(u,f,p,x,m,g){let M=o(u,f,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||hS),n.length>1&&n.sort(f||fg),i.length>1&&i.sort(f||fg)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function uS(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new pg,s.set(n,[a])):i>=r.length?(a=new pg,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function dS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function fS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var pS=0;function mS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gS(s){let e=new dS,t=fS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new it,a=new it;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,w=0,_=0,S=0,b=0,P=0,y=0,R=0,D=0;c.sort(mS);for(let B=0,G=c.length;B<G;B++){let z=c[B],X=z.color,te=z.intensity,K=z.distance,ue=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===rs?ue=z.shadow.map.texture:ue=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=X.r*te,d+=X.g*te,u+=X.b*te;else if(z.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(z.sh.coefficients[Z],te);D++}else if(z.isSunLight){let Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ne=z.shadow,ae=t.get(z);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[p]=ae,n.sunShadowMap[p]=ue;let E=ne.getViewportCount();for(let N=0;N<E;N++)n.sunShadowMatrix[x+N]=ne.getMatrix(N),n.sunShadowCascade[x+N]=ne._cascadeData[N];x+=E,p++}n.sun[f]=Z,f++}else if(z.isDirectionalLight){let Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ne=z.shadow,ae=t.get(z);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=z.shadow.matrix,S++}n.directional[m]=Z,m++}else if(z.isSpotLight){let Z=e.get(z);Z.position.setFromMatrixPosition(z.matrixWorld),Z.color.copy(X).multiplyScalar(te),Z.distance=K,Z.coneCos=Math.cos(z.angle),Z.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Z.decay=z.decay,n.spot[M]=Z;let ne=z.shadow;if(z.map&&(n.spotLightMap[y]=z.map,y++,ne.updateMatrices(z),z.castShadow&&R++),n.spotLightMatrix[M]=ne.matrix,z.castShadow){let ae=t.get(z);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.spotShadow[M]=ae,n.spotShadowMap[M]=ue,P++}M++}else if(z.isRectAreaLight){let Z=e.get(z);Z.color.copy(X).multiplyScalar(te),Z.halfWidth.set(z.width*.5,0,0),Z.halfHeight.set(0,z.height*.5,0),n.rectArea[w]=Z,w++}else if(z.isPointLight){let Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),Z.distance=z.distance,Z.decay=z.decay,z.castShadow){let ne=z.shadow,ae=t.get(z);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=ue,n.pointShadowMatrix[g]=z.shadow.matrix,b++}n.point[g]=Z,g++}else if(z.isHemisphereLight){let Z=e.get(z);Z.skyColor.copy(z.color).multiplyScalar(te),Z.groundColor.copy(z.groundColor).multiplyScalar(te),n.hemi[_]=Z,_++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==w||F.hemiLength!==_||F.numSunShadows!==p||F.numDirectionalShadows!==S||F.numPointShadows!==b||F.numSpotShadows!==P||F.numSpotMaps!==y||F.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=M,F.rectAreaLength=w,F.hemiLength=_,F.numSunShadows=p,F.numDirectionalShadows=S,F.numPointShadows=b,F.numSpotShadows=P,F.numSpotMaps=y,F.numLightProbes=D,n.version=pS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let _=c[M];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function mg(s){let e=new gS(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xS(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new mg(s),e.set(i,[o])):r>=a.length?(o=new mg(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],MS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],gg=new it,Sc=new L,Qf=new L;function SS(s,e,t){let n=new Di,i=new re,r=new re,a=new Pt,o=new ya,l=new Ma,c={},h=t.maxTextureSize,d={[ts]:mn,[mn]:ts,[Un]:Un},u=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:_S,fragmentShader:vS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ot;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let g=this.type;this.render=function(b,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===lf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pa);let R=s.getRenderTarget(),D=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),B=s.state;B.setBlending($t),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=g!==this.type;G&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=b.length;z<X;z++){let te=b[z],K=te.shadow;if(K===void 0){Ie("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let ue=K.getFrameExtents();i.multiply(ue),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ue.x),i.x=r.x*ue.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ue.y),i.y=r.y*ue.y,K.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||G===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Mr){if(te.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new zt(i.x,i.y,{format:rs,type:Kt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Mi(i.x,i.y,En),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=_i,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ot,K.map.depthTexture.magFilter=Ot}else te.isPointLight?(K.map=new Tc(i.x),K.map.depthTexture=new Wo(i.x,Qn)):(K.map=new zt(i.x,i.y),K.map.depthTexture=new Mi(i.x,i.y,Qn)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=_i,this.type===Pa?(K.map.depthTexture.compareFunction=Z?vc:_c,K.map.depthTexture.minFilter=Nt,K.map.depthTexture.magFilter=Nt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ot,K.map.depthTexture.magFilter=Ot);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==i.x||K.map.height!==i.y)&&K.map.setSize(i.x,i.y);let ne=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();te.isPointLight!==!0&&K.updateMatrices(te,y);for(let ae=0;ae<ne;ae++){let E=K.getCamera(ae);if(te.isPointLight){let N=K.camera,V=K.matrix,ce=te.distance||N.far;ce!==N.far&&(N.far=ce,N.updateProjectionMatrix()),Sc.setFromMatrixPosition(te.matrixWorld),N.position.copy(Sc),Qf.copy(N.position),Qf.add(yS[ae]),N.up.copy(MS[ae]),N.lookAt(Qf),N.updateMatrixWorld(),V.makeTranslation(-Sc.x,-Sc.y,-Sc.z),gg.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K._frustum.setFromProjectionMatrix(gg,N.coordinateSystem,N.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(K.map),s.clear());let N=K.getViewport(ae);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),B.viewport(a)}n=K.getFrustum(ae),_(P,y,E,te,this.type)}K.isPointLightShadow!==!0&&this.type===Mr&&M(K,y),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(R,D,F)};function M(b,P){let y=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new zt(i.x,i.y,{format:rs,type:Kt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(P,null,y,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(P,null,y,f,x,null)}function w(b,P,y,R){let D=null,F=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)D=F;else if(D=y.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=D.uuid,G=P.uuid,z=c[B];z===void 0&&(z={},c[B]=z);let X=z[G];X===void 0&&(X=D.clone(),z[G]=X,P.addEventListener("dispose",S)),D=X}if(D.visible=P.visible,D.wireframe=P.wireframe,R===Mr?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let B=s.properties.get(D);B.light=y}return D}function _(b,P,y,R,D){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Mr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let G=e.update(b),z=b.material;if(Array.isArray(z)){let X=G.groups;for(let te=0,K=X.length;te<K;te++){let ue=X[te],Z=z[ue.materialIndex];if(Z&&Z.visible){let ne=w(b,Z,R,D);b.onBeforeShadow(s,b,P,y,G,ne,ue),s.renderBufferDirect(y,null,G,ne,b,ue),b.onAfterShadow(s,b,P,y,G,ne,ue)}}}else if(z.visible){let X=w(b,z,R,D);b.onBeforeShadow(s,b,P,y,G,X,null),s.renderBufferDirect(y,null,G,X,b,null),b.onAfterShadow(s,b,P,y,G,X,null)}}let B=b.children;for(let G=0,z=B.length;G<z;G++)_(B[G],P,y,R,D)}function S(b){b.target.removeEventListener("dispose",S);for(let y in c){let R=c[y],D=b.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function bS(s,e){function t(){let Y=!1,Re=new Pt,de=null,Pe=new Pt(0,0,0,0);return{setMask:function(Ne){de!==Ne&&!Y&&(s.colorMask(Ne,Ne,Ne,Ne),de=Ne)},setLocked:function(Ne){Y=Ne},setClear:function(Ne,ve,Qe,Xe,Ct){Ct===!0&&(Ne*=Xe,ve*=Xe,Qe*=Xe),Re.set(Ne,ve,Qe,Xe),Pe.equals(Re)===!1&&(s.clearColor(Ne,ve,Qe,Xe),Pe.copy(Re))},reset:function(){Y=!1,de=null,Pe.set(-1,0,0,0)}}}function n(){let Y=!1,Re=!1,de=null,Pe=null,Ne=null;return{setReversed:function(ve){if(Re!==ve){let Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;let Xe=Ne;Ne=null,this.setClear(Xe)}},getReversed:function(){return Re},setTest:function(ve){ve?$(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(ve){de!==ve&&!Y&&(s.depthMask(ve),de=ve)},setFunc:function(ve){if(Re&&(ve=z0[ve]),Pe!==ve){switch(ve){case Eo:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Co:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){Ne!==ve&&(Ne=ve,Re&&(ve=1-ve),s.clearDepth(ve))},reset:function(){Y=!1,de=null,Pe=null,Ne=null,Re=!1}}}function i(){let Y=!1,Re=null,de=null,Pe=null,Ne=null,ve=null,Qe=null,Xe=null,Ct=null;return{setTest:function(Tt){Y||(Tt?$(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!Y&&(s.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,qn,ti){(de!==Tt||Pe!==qn||Ne!==ti)&&(s.stencilFunc(Tt,qn,ti),de=Tt,Pe=qn,Ne=ti)},setOp:function(Tt,qn,ti){(ve!==Tt||Qe!==qn||Xe!==ti)&&(s.stencilOp(Tt,qn,ti),ve=Tt,Qe=qn,Xe=ti)},setLocked:function(Tt){Y=Tt},setClear:function(Tt){Ct!==Tt&&(s.clearStencil(Tt),Ct=Tt)},reset:function(){Y=!1,Re=null,de=null,Pe=null,Ne=null,ve=null,Qe=null,Xe=null,Ct=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,w=null,_=null,S=null,b=null,P=null,y=new Ce(0,0,0),R=0,D=!1,F=null,B=null,G=null,z=null,X=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ue=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=ue>=1):Z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=ue>=2);let ne=null,ae={},E=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),V=new Pt().fromArray(E),ce=new Pt().fromArray(N);function pe(Y,Re,de,Pe){let Ne=new Uint8Array(4),ve=s.createTexture();s.bindTexture(Y,ve),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<de;Qe++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Re+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return ve}let H={};H[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(s.DEPTH_TEST),a.setFunc($s),ye(!1),be(Nu),$(s.CULL_FACE),xe($t);function $(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function fe(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function Oe(Y,Re){return u[Y]!==Re?(s.bindFramebuffer(Y,Re),u[Y]=Re,Y===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Re),Y===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ee(Y,Re){let de=p,Pe=!1;if(Y){de=f.get(Re),de===void 0&&(de=[],f.set(Re,de));let Ne=Y.textures;if(de.length!==Ne.length||de[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Qe=Ne.length;ve<Qe;ve++)de[ve]=s.COLOR_ATTACHMENT0+ve;de.length=Ne.length,Pe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(de)}function Ze(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}let ht={[Kn]:s.FUNC_ADD,[cf]:s.FUNC_SUBTRACT,[hf]:s.FUNC_REVERSE_SUBTRACT};ht[uf]=s.MIN,ht[df]=s.MAX;let he={[Is]:s.ZERO,[ff]:s.ONE,[pf]:s.SRC_COLOR,[Ou]:s.SRC_ALPHA,[_f]:s.SRC_ALPHA_SATURATE,[La]:s.DST_COLOR,[Da]:s.DST_ALPHA,[mf]:s.ONE_MINUS_SRC_COLOR,[Bu]:s.ONE_MINUS_SRC_ALPHA,[xf]:s.ONE_MINUS_DST_COLOR,[gf]:s.ONE_MINUS_DST_ALPHA,[vf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Mf]:s.CONSTANT_ALPHA,[Sf]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(Y,Re,de,Pe,Ne,ve,Qe,Xe,Ct,Tt){if(Y===$t){m===!0&&(fe(s.BLEND),m=!1);return}if(m===!1&&($(s.BLEND),m=!0),Y!==Ll){if(Y!==g||Tt!==D){if((M!==Kn||S!==Kn)&&(s.blendEquation(s.FUNC_ADD),M=Kn,S=Kn),Tt)switch(Y){case Sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFunc(s.ONE,s.ONE);break;case Uu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Uu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",Y);break}w=null,_=null,b=null,P=null,y.set(0,0,0),R=0,g=Y,D=Tt}return}Ne=Ne||Re,ve=ve||de,Qe=Qe||Pe,(Re!==M||Ne!==S)&&(s.blendEquationSeparate(ht[Re],ht[Ne]),M=Re,S=Ne),(de!==w||Pe!==_||ve!==b||Qe!==P)&&(s.blendFuncSeparate(he[de],he[Pe],he[ve],he[Qe]),w=de,_=Pe,b=ve,P=Qe),(Xe.equals(y)===!1||Ct!==R)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Ct),y.copy(Xe),R=Ct),g=Y,D=!1}function ge(Y,Re){Y.side===Un?fe(s.CULL_FACE):$(s.CULL_FACE);let de=Y.side===mn;Re&&(de=!de),ye(de),Y.blending===Sr&&Y.transparent===!1?xe($t):xe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Pe=Y.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ge(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(Y){F!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),F=Y)}function be(Y){Y!==af?($(s.CULL_FACE),Y!==B&&(Y===Nu?s.cullFace(s.BACK):Y===of?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),B=Y}function Je(Y){Y!==G&&(K&&s.lineWidth(Y),G=Y)}function Ge(Y,Re,de){Y?($(s.POLYGON_OFFSET_FILL),(z!==Re||X!==de)&&(z=Re,X=de,a.getReversed()&&(Re=-Re),s.polygonOffset(Re,de))):fe(s.POLYGON_OFFSET_FILL)}function tt(Y){Y?$(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function st(Y){Y===void 0&&(Y=s.TEXTURE0+te-1),ne!==Y&&(s.activeTexture(Y),ne=Y)}function k(Y,Re,de){de===void 0&&(ne===null?de=s.TEXTURE0+te-1:de=ne);let Pe=ae[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},ae[de]=Pe),(Pe.type!==Y||Pe.texture!==Re)&&(ne!==de&&(s.activeTexture(de),ne=de),s.bindTexture(Y,Re||H[Y]),Pe.type=Y,Pe.texture=Re)}function U(){let Y=ae[ne];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function T(){try{s.compressedTexImage3D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function v(){try{s.texSubImage2D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function I(){try{s.texSubImage3D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function O(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function me(){try{s.texStorage2D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function se(){try{s.texStorage3D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function J(){try{s.texImage2D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function oe(){try{s.texImage3D(...arguments)}catch(Y){Ke("WebGLState:",Y)}}function we(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function We(Y,Re){d[Y]!==Re&&(s.pixelStorei(Y,Re),d[Y]=Re)}function Ae(Y){V.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),V.copy(Y))}function Te(Y){ce.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),ce.copy(Y))}function Be(Y,Re){let de=c.get(Re);de===void 0&&(de=new WeakMap,c.set(Re,de));let Pe=de.get(Y);Pe===void 0&&(Pe=s.getUniformBlockIndex(Re,Y.name),de.set(Y,Pe))}function je(Y,Re){let Pe=c.get(Re).get(Y);l.get(Re)!==Pe&&(s.uniformBlockBinding(Re,Pe,Y.__bindingPointIndex),l.set(Re,Pe))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ae={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,w=null,_=null,S=null,b=null,P=null,y=new Ce(0,0,0),R=0,D=!1,F=null,B=null,G=null,z=null,X=null,V.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:fe,bindFramebuffer:Oe,drawBuffers:Ee,useProgram:Ze,setBlending:xe,setMaterial:ge,setFlipSided:ye,setCullFace:be,setLineWidth:Je,setPolygonOffset:Ge,setScissorTest:tt,activeTexture:st,bindTexture:k,unbindTexture:U,compressedTexImage2D:ee,compressedTexImage3D:T,texImage2D:J,texImage3D:oe,pixelStorei:We,getParameter:we,updateUBOMapping:Be,uniformBlockBinding:je,texStorage2D:me,texStorage3D:se,texSubImage2D:v,texSubImage3D:I,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:Ae,viewport:Te,reset:rt}}function wS(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return p?new OffscreenCanvas(T,v):na("canvas")}function m(T,v,I){let O=1,q=ee(T);if((q.width>I||q.height>I)&&(O=I/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let me=Math.floor(O*q.width),se=Math.floor(O*q.height);u===void 0&&(u=x(me,se));let J=v?x(me,se):u;return J.width=me,J.height=se,J.getContext("2d").drawImage(T,0,0,me,se),Ie("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+me+"x"+se+")."),J}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function g(T){return T.generateMipmaps}function M(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,v,I,O,q,me=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se;O&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===s.RED&&(I===s.FLOAT&&(J=s.R32F),I===s.HALF_FLOAT&&(J=s.R16F),I===s.UNSIGNED_BYTE&&(J=s.R8),I===s.UNSIGNED_SHORT&&se&&(J=se.R16_EXT),I===s.SHORT&&se&&(J=se.R16_SNORM_EXT)),v===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.R8UI),I===s.UNSIGNED_SHORT&&(J=s.R16UI),I===s.UNSIGNED_INT&&(J=s.R32UI),I===s.BYTE&&(J=s.R8I),I===s.SHORT&&(J=s.R16I),I===s.INT&&(J=s.R32I)),v===s.RG&&(I===s.FLOAT&&(J=s.RG32F),I===s.HALF_FLOAT&&(J=s.RG16F),I===s.UNSIGNED_BYTE&&(J=s.RG8),I===s.UNSIGNED_SHORT&&se&&(J=se.RG16_EXT),I===s.SHORT&&se&&(J=se.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RG8UI),I===s.UNSIGNED_SHORT&&(J=s.RG16UI),I===s.UNSIGNED_INT&&(J=s.RG32UI),I===s.BYTE&&(J=s.RG8I),I===s.SHORT&&(J=s.RG16I),I===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RGB8UI),I===s.UNSIGNED_SHORT&&(J=s.RGB16UI),I===s.UNSIGNED_INT&&(J=s.RGB32UI),I===s.BYTE&&(J=s.RGB8I),I===s.SHORT&&(J=s.RGB16I),I===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),I===s.UNSIGNED_INT&&(J=s.RGBA32UI),I===s.BYTE&&(J=s.RGBA8I),I===s.SHORT&&(J=s.RGBA16I),I===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(I===s.UNSIGNED_SHORT&&se&&(J=se.RGB16_EXT),I===s.SHORT&&se&&(J=se.RGB16_SNORM_EXT),I===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){let oe=me?ta:mt.getTransfer(q);I===s.FLOAT&&(J=s.RGBA32F),I===s.HALF_FLOAT&&(J=s.RGBA16F),I===s.UNSIGNED_BYTE&&(J=oe===At?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT&&se&&(J=se.RGBA16_EXT),I===s.SHORT&&se&&(J=se.RGBA16_SNORM_EXT),I===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(T,v){let I;return T?v===null||v===Qn||v===ss?I=s.DEPTH24_STENCIL8:v===En?I=s.DEPTH32F_STENCIL8:v===wr&&(I=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qn||v===ss?I=s.DEPTH_COMPONENT24:v===En?I=s.DEPTH_COMPONENT32F:v===wr&&(I=s.DEPTH_COMPONENT16),I}function b(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function P(T){let v=T.target;v.removeEventListener("dispose",P),R(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(T){let v=T.target;v.removeEventListener("dispose",y),F(v)}function R(T){let v=n.get(T);if(v.__webglInit===void 0)return;let I=T.source,O=f.get(I);if(O){let q=O[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&D(T),Object.keys(O).length===0&&f.delete(I)}n.remove(T)}function D(T){let v=n.get(T);s.deleteTexture(v.__webglTexture);let I=T.source,O=f.get(I);delete O[v.__cacheKey],a.memory.textures--}function F(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let q=0;q<v.__webglFramebuffer[O].length;q++)s.deleteFramebuffer(v.__webglFramebuffer[O][q]);else s.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)s.deleteFramebuffer(v.__webglFramebuffer[O]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=T.textures;for(let O=0,q=I.length;O<q;O++){let me=n.get(I[O]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(I[O])}n.remove(T)}let B=0;function G(){B=0}function z(){return B}function X(T){B=T}function te(){let T=B;return T>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,T}function K(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ue(T,v){let I=n.get(T);if(T.isVideoTexture&&k(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let O=T.image;if(O===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(I,T,v);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+v)}function Z(T,v){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){fe(I,T,v);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+v)}function ne(T,v){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){fe(I,T,v);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+v)}function ae(T,v){let I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Oe(I,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+v)}let E={[Tn]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[vs]:s.MIRRORED_REPEAT},N={[Ot]:s.NEAREST,[Wa]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[Ds]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},V={[Uf]:s.NEVER,[kf]:s.ALWAYS,[Ff]:s.LESS,[_c]:s.LEQUAL,[Of]:s.EQUAL,[vc]:s.GEQUAL,[Bf]:s.GREATER,[zf]:s.NOTEQUAL};function ce(T,v){if(v.type===En&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===Ds||v.magFilter===is||v.magFilter===jn||v.minFilter===Nt||v.minFilter===Ds||v.minFilter===is||v.minFilter===jn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,E[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,E[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,E[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,N[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,N[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,V[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==is&&v.minFilter!==jn||v.type===En&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function pe(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));let O=v.source,q=f.get(O);q===void 0&&(q={},f.set(O,q));let me=K(v);if(me!==T.__cacheKey){q[me]===void 0&&(q[me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[me].usedTimes++;let se=q[T.__cacheKey];se!==void 0&&(q[T.__cacheKey].usedTimes--,se.usedTimes===0&&D(v)),T.__cacheKey=me,T.__webglTexture=q[me].texture}return I}function H(T,v,I){return Math.floor(Math.floor(T/I)/v)}function $(T,v,I,O){let me=T.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,I,O,v.data);else{me.sort((We,Ae)=>We.start-Ae.start);let se=0;for(let We=1;We<me.length;We++){let Ae=me[se],Te=me[We],Be=Ae.start+Ae.count,je=H(Te.start,v.width,4),rt=H(Ae.start,v.width,4);Te.start<=Be+1&&je===rt&&H(Te.start+Te.count-1,v.width,4)===je?Ae.count=Math.max(Ae.count,Te.start+Te.count-Ae.start):(++se,me[se]=Te)}me.length=se+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),oe=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let We=0,Ae=me.length;We<Ae;We++){let Te=me[We],Be=Math.floor(Te.start/4),je=Math.ceil(Te.count/4),rt=Be%v.width,Y=Math.floor(Be/v.width),Re=je,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,rt,Y,Re,de,I,O,v.data)}T.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function fe(T,v,I){let O=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=s.TEXTURE_3D);let q=pe(T,v),me=v.source;t.bindTexture(O,T.__webglTexture,s.TEXTURE0+I);let se=n.get(me);if(me.version!==se.__version||q===!0){if(t.activeTexture(s.TEXTURE0+I),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let de=mt.getPrimaries(mt.workingColorSpace),Pe=v.colorSpace===Wn?null:mt.getPrimaries(v.colorSpace),Ne=v.colorSpace===Wn||de===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=m(v.image,!1,i.maxTextureSize);oe=U(v,oe);let we=r.convert(v.format,v.colorSpace),We=r.convert(v.type),Ae=_(v.internalFormat,we,We,v.normalized,v.colorSpace,v.isVideoTexture);ce(O,v);let Te,Be=v.mipmaps,je=v.isVideoTexture!==!0,rt=se.__version===void 0||q===!0,Y=me.dataReady,Re=b(v,oe);if(v.isDepthTexture)Ae=S(v.format===Ti,v.type),rt&&(je?t.texStorage2D(s.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,we,We,null));else if(v.isDataTexture)if(Be.length>0){je&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,Ae,Be[0].width,Be[0].height);for(let de=0,Pe=Be.length;de<Pe;de++)Te=Be[de],je?Y&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Te.width,Te.height,we,We,Te.data):t.texImage2D(s.TEXTURE_2D,de,Ae,Te.width,Te.height,0,we,We,Te.data);v.generateMipmaps=!1}else je?(rt&&t.texStorage2D(s.TEXTURE_2D,Re,Ae,oe.width,oe.height),Y&&$(v,oe,we,We)):t.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,we,We,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ae,Be[0].width,Be[0].height,oe.depth);for(let de=0,Pe=Be.length;de<Pe;de++)if(Te=Be[de],v.format!==rn)if(we!==null)if(je){if(Y)if(v.layerUpdates.size>0){let Ne=Yu(Te.width,Te.height,v.format,v.type);for(let ve of v.layerUpdates){let Qe=Te.data.subarray(ve*Ne/Te.data.BYTES_PER_ELEMENT,(ve+1)*Ne/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,ve,Te.width,Te.height,1,we,Qe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,oe.depth,we,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ae,Te.width,Te.height,oe.depth,0,Te.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,oe.depth,we,We,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ae,Te.width,Te.height,oe.depth,0,we,We,Te.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{je&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,Ae,Be[0].width,Be[0].height);for(let de=0,Pe=Be.length;de<Pe;de++)Te=Be[de],v.format!==rn?we!==null?je?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ae,Te.width,Te.height,0,Te.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Y&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Te.width,Te.height,we,We,Te.data):t.texImage2D(s.TEXTURE_2D,de,Ae,Te.width,Te.height,0,we,We,Te.data)}else if(v.isDataArrayTexture)if(je){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ae,oe.width,oe.height,oe.depth),Y)if(v.layerUpdates.size>0){let de=Yu(oe.width,oe.height,v.format,v.type);for(let Pe of v.layerUpdates){let Ne=oe.data.subarray(Pe*de/oe.data.BYTES_PER_ELEMENT,(Pe+1)*de/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,oe.width,oe.height,1,we,We,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,We,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,we,We,oe.data);else if(v.isData3DTexture)je?(rt&&t.texStorage3D(s.TEXTURE_3D,Re,Ae,oe.width,oe.height,oe.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,We,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,we,We,oe.data);else if(v.isFramebufferTexture){if(rt)if(je)t.texStorage2D(s.TEXTURE_2D,Re,Ae,oe.width,oe.height);else{let de=oe.width,Pe=oe.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,Ae,de,Pe,0,we,We,null),de>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),oe.parentNode!==de){de.appendChild(oe),d.add(v),de.onpaint=Pe=>{let Ne=Pe.changedElements;for(let ve of d)Ne.includes(ve.image)&&(ve.needsUpdate=!0)},de.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,oe);else{let Ne=s.RGBA,ve=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ne,ve,Qe,oe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(je&&rt){let de=ee(Be[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ae,de.width,de.height)}for(let de=0,Pe=Be.length;de<Pe;de++)Te=Be[de],je?Y&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,we,We,Te):t.texImage2D(s.TEXTURE_2D,de,Ae,we,We,Te);v.generateMipmaps=!1}else if(je){if(rt){let de=ee(oe);t.texStorage2D(s.TEXTURE_2D,Re,Ae,de.width,de.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,We,oe)}else t.texImage2D(s.TEXTURE_2D,0,Ae,we,We,oe);g(v)&&M(O),se.__version=me.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Oe(T,v,I){if(v.image.length!==6)return;let O=pe(T,v),q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);let me=n.get(q);if(q.version!==me.__version||O===!0){t.activeTexture(s.TEXTURE0+I);let se=mt.getPrimaries(mt.workingColorSpace),J=v.colorSpace===Wn?null:mt.getPrimaries(v.colorSpace),oe=v.colorSpace===Wn||se===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,We=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!we&&!We?Ae[ve]=m(v.image[ve],!0,i.maxCubemapSize):Ae[ve]=We?v.image[ve].image:v.image[ve],Ae[ve]=U(v,Ae[ve]);let Te=Ae[0],Be=r.convert(v.format,v.colorSpace),je=r.convert(v.type),rt=_(v.internalFormat,Be,je,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Re=me.__version===void 0||O===!0,de=q.dataReady,Pe=b(v,Te);ce(s.TEXTURE_CUBE_MAP,v);let Ne;if(we){Y&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,rt,Te.width,Te.height);for(let ve=0;ve<6;ve++){Ne=Ae[ve].mipmaps;for(let Qe=0;Qe<Ne.length;Qe++){let Xe=Ne[Qe];v.format!==rn?Be!==null?Y?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Xe.width,Xe.height,Be,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,rt,Xe.width,Xe.height,0,Xe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Xe.width,Xe.height,Be,je,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,rt,Xe.width,Xe.height,0,Be,je,Xe.data)}}}else{if(Ne=v.mipmaps,Y&&Re){Ne.length>0&&Pe++;let ve=ee(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,rt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(We){Y?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,Be,je,Ae[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Ae[ve].width,Ae[ve].height,0,Be,je,Ae[ve].data);for(let Qe=0;Qe<Ne.length;Qe++){let Ct=Ne[Qe].image[ve].image;Y?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ct.width,Ct.height,Be,je,Ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,rt,Ct.width,Ct.height,0,Be,je,Ct.data)}}else{Y?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be,je,Ae[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Be,je,Ae[ve]);for(let Qe=0;Qe<Ne.length;Qe++){let Xe=Ne[Qe];Y?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Be,je,Xe.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,rt,Be,je,Xe.image[ve])}}}g(v)&&M(s.TEXTURE_CUBE_MAP),me.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ee(T,v,I,O,q,me){let se=r.convert(I.format,I.colorSpace),J=r.convert(I.type),oe=_(I.internalFormat,se,J,I.normalized,I.colorSpace),we=n.get(v),We=n.get(I);if(We.__renderTarget=v,!we.__hasExternalTextures){let Ae=Math.max(1,v.width>>me),Te=Math.max(1,v.height>>me);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,me,oe,Ae,Te,v.depth,0,se,J,null):t.texImage2D(q,me,oe,Ae,Te,0,se,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),st(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,O,q,We.__webglTexture,0,tt(v)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,O,q,We.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(T,v,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){let O=v.depthTexture,q=O&&O.isDepthTexture?O.type:null,me=S(v.stencilBuffer,q),se=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;st(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt(v),me,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt(v),me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,me,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,T)}else{let O=v.textures;for(let q=0;q<O.length;q++){let me=O[q],se=r.convert(me.format,me.colorSpace),J=r.convert(me.type),oe=_(me.internalFormat,se,J,me.normalized,me.colorSpace);st(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt(v),oe,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt(v),oe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,oe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(T,v,I){let O=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ce(s.TEXTURE_CUBE_MAP,v.depthTexture);let we=r.convert(v.depthTexture.format),We=r.convert(v.depthTexture.type),Ae;v.depthTexture.format===_i?Ae=s.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(Ae=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ae,v.width,v.height,0,we,We,null)}}else ue(v.depthTexture,0);let me=q.__webglTexture,se=tt(v),J=O?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,oe=v.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===_i)st(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,J,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,oe,J,me,0);else if(v.depthTexture.format===Ti)st(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,J,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,oe,J,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(T){let v=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let O=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=O}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)ht(v.__webglFramebuffer[O],T,O);else{let O=T.texture.mipmaps;O&&O.length>0?ht(v.__webglFramebuffer[0],T,0):ht(v.__webglFramebuffer,T,0)}else if(I){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=s.createRenderbuffer(),Ze(v.__webglDepthbuffer[O],T,!1);else{let q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[O];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,me)}}else{let O=T.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ze(v.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(T,v,I){let O=n.get(T);v!==void 0&&Ee(O.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&he(T)}function ge(T){let v=T.texture,I=n.get(T),O=n.get(v);T.addEventListener("dispose",y);let q=T.textures,me=T.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture()),O.__version=v.version,a.memory.textures++),me){I.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[J]=[];for(let oe=0;oe<v.mipmaps.length;oe++)I.__webglFramebuffer[J][oe]=s.createFramebuffer()}else I.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)I.__webglFramebuffer[J]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(se)for(let J=0,oe=q.length;J<oe;J++){let we=n.get(q[J]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&st(T)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){let oe=q[J];I.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[J]);let we=r.convert(oe.format,oe.colorSpace),We=r.convert(oe.type),Ae=_(oe.internalFormat,we,We,oe.normalized,oe.colorSpace,T.isXRRenderTarget===!0),Te=tt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ae,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,I.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ze(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture),ce(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)Ee(I.__webglFramebuffer[J][oe],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe);else Ee(I.__webglFramebuffer[J],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(v)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,oe=q.length;J<oe;J++){let we=q[J],We=n.get(we),Ae=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ae=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,We.__webglTexture),ce(Ae,we),Ee(I.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+J,Ae,0),g(we)&&M(Ae)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,O.__webglTexture),ce(J,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)Ee(I.__webglFramebuffer[oe],T,v,s.COLOR_ATTACHMENT0,J,oe);else Ee(I.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,J,0);g(v)&&M(J),t.unbindTexture()}T.depthBuffer&&he(T)}function ye(T){let v=T.textures;for(let I=0,O=v.length;I<O;I++){let q=v[I];if(g(q)){let me=w(T),se=n.get(q).__webglTexture;t.bindTexture(me,se),M(me),t.unbindTexture()}}}let be=[],Je=[];function Ge(T){if(T.samples>0){if(st(T)===!1){let v=T.textures,I=T.width,O=T.height,q=s.COLOR_BUFFER_BIT,me=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(T),J=v.length>1;if(J)for(let we=0;we<v.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let oe=T.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let we=0;we<v.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[we]);let We=n.get(v[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,I,O,0,0,I,O,q,s.NEAREST),l===!0&&(be.length=0,Je.length=0,be.push(s.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(be.push(me),Je.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let we=0;we<v.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,se.__webglColorRenderbuffer[we]);let We=n.get(v[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function tt(T){return Math.min(i.maxSamples,T.samples)}function st(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function U(T,v){let I=T.colorSpace,O=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==ea&&I!==Wn&&(mt.getTransfer(I)===At?(O!==rn||q!==yn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",I)),v}function ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=G,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=ue,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=ae,this.rebindTextures=xe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bg(s,e){function t(n,i=Wn){let r,a=mt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zu)return s.BYTE;if(n===ku)return s.SHORT;if(n===wr)return s.UNSIGNED_SHORT;if(n===Ul)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===Kt)return s.HALF_FLOAT;if(n===Hu)return s.ALPHA;if(n===Wu)return s.RGB;if(n===rn)return s.RGBA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===Xa)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===qa||n===Ya||n===$a||n===Za)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Ja||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return r.COMPRESSED_R11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ja)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Ka||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var TS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:TS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lp=class extends Vn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new op,g={},M=t.getContextAttributes(),w=null,_=null,S=[],b=[],P=new re,y=null,R=null,D=new nn;D.viewport=new Pt;let F=new nn;F.viewport=new Pt;let B=[D,F],G=new Al,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=S[H];return $===void 0&&($=new tr,S[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=S[H];return $===void 0&&($=new tr,S[H]=$),$.getGripSpace()},this.getHand=function(H){let $=S[H];return $===void 0&&($=new tr,S[H]=$),$.getHandSpace()};function te(H){let $=b.indexOf(H.inputSource);if($===-1)return;let fe=S[$];fe!==void 0&&(fe.update(H.inputSource,H.frame,c||a),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function K(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ue);for(let H=0;H<S.length;H++){let $=b[H];$!==null&&(b[H]=null,S[H].disconnect($))}z=null,X=null,m.reset();for(let H in g)delete g[H];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),R!==null){let H=R.camera;H.fov=R.fov,H.zoom=R.zoom,H.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Oe=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Ti:_i,Oe=M.stencil?ss:Qn);let Ze={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ze),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new zt(u.textureWidth,u.textureHeight,{format:rn,type:yn,depthTexture:new Mi(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new zt(f.framebufferWidth,f.framebufferHeight,{format:rn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(H){for(let $=0;$<H.removed.length;$++){let fe=H.removed[$],Oe=b.indexOf(fe);Oe>=0&&(b[Oe]=null,S[Oe].disconnect(fe))}for(let $=0;$<H.added.length;$++){let fe=H.added[$],Oe=b.indexOf(fe);if(Oe===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=b.length){b.push(fe),Oe=Ze;break}else if(b[Ze]===null){b[Ze]=fe,Oe=Ze;break}if(Oe===-1)break}let Ee=S[Oe];Ee&&Ee.connect(fe)}}let Z=new L,ne=new L;function ae(H,$,fe){Z.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);let Oe=Z.distanceTo(ne),Ee=$.projectionMatrix.elements,Ze=fe.projectionMatrix.elements,ht=Ee[14]/(Ee[10]-1),he=Ee[14]/(Ee[10]+1),xe=(Ee[9]+1)/Ee[5],ge=(Ee[9]-1)/Ee[5],ye=(Ee[8]-1)/Ee[0],be=(Ze[8]+1)/Ze[0],Je=ht*ye,Ge=ht*be,tt=Oe/(-ye+be),st=tt*-ye;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(st),H.translateZ(tt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ee[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let k=ht+tt,U=he+tt,ee=Je-st,T=Ge+(Oe-st),v=xe*he/U*k,I=ge*he/U*k;H.projectionMatrix.makePerspective(ee,T,v,I,k,U),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function E(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let $=H.near,fe=H.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),G.near=F.near=D.near=$,G.far=F.far=D.far=fe,(z!==G.near||X!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,X=G.far),G.layers.mask=H.layers.mask|6,D.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Oe=H.parent,Ee=G.cameras;E(G,Oe);for(let Ze=0;Ze<Ee.length;Ze++)E(Ee[Ze],Oe);Ee.length===2?ae(G,D,F):G.projectionMatrix.copy(D.projectionMatrix),R===null&&H.isPerspectiveCamera&&(R={camera:H,fov:H.fov,zoom:H.zoom}),N(H,G,Oe)};function N(H,$,fe){fe===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Js*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(H){return g[H]};let V=null;function ce(H,$){if(h=$.getViewerPose(c||a),p=$,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Oe=!1;fe.length!==G.cameras.length&&(G.cameras.length=0,Oe=!0);for(let he=0;he<fe.length;he++){let xe=fe[he],ge=null;if(f!==null)ge=f.getViewport(xe);else{let be=d.getViewSubImage(u,xe);ge=be.viewport,he===0&&(e.setRenderTargetTextures(_,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(_))}let ye=B[he];ye===void 0&&(ye=new nn,ye.layers.enable(he),ye.viewport=new Pt,B[he]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),he===0&&(G.matrix.copy(ye.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Oe===!0&&G.cameras.push(ye)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let he=d.getDepthInformation(fe[0]);he&&he.isValid&&he.texture&&m.init(he,i.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let he=0;he<fe.length;he++){let xe=fe[he].camera;if(xe){let ge=g[xe];ge||(ge=new ha,g[xe]=ge);let ye=d.getCameraImage(xe);ge.sourceTexture=ye}}}}for(let fe=0;fe<S.length;fe++){let Oe=b[fe],Ee=S[fe];Oe!==null&&Ee!==void 0&&Ee.update(Oe,$,c||a)}V&&V(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}let pe=new xg;pe.setAnimationLoop(ce),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}},AS=new it,wg=new ct;wg.set(-1,0,0,0,1,0,0,0,1);function CS(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function RS(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=i[_.id];b===void 0&&(m(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",M));let P=S.program;n.updateUBOMapping(_,P);let y=e.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let S=d();_.__bindingPointIndex=S;let b=s.createBuffer(),P=_.__size,y=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=i[_.id],b=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let y=0,R=b.length;y<R;y++){let D=b[y];if(Array.isArray(D))for(let F=0,B=D.length;F<B;F++)f(D[F],y,F,P);else f(D,y,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,S,b,P){if(x(_,S,b,P)===!0){let y=_.__offset,R=_.value;if(Array.isArray(R)){let D=0;for(let F=0;F<R.length;F++){let B=R[F],G=g(B);p(B,_.__data,D),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function p(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function x(_,S,b,P){let y=_.value,R=S+"_"+b;if(P[R]===void 0)return typeof y=="number"||typeof y=="boolean"?P[R]=y:ArrayBuffer.isView(y)?P[R]=y.slice():P[R]=y.clone(),!0;{let D=P[R];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return P[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(_){let S=_.uniforms,b=0,P=16;for(let R=0,D=S.length;R<D;R++){let F=Array.isArray(S[R])?S[R]:[S[R]];for(let B=0,G=F.length;B<G;B++){let z=F[B],X=Array.isArray(z.value)?z.value:[z.value];for(let te=0,K=X.length;te<K;te++){let ue=X[te],Z=g(ue),ne=b%P,ae=ne%Z.boundary,E=ne+ae;b+=ae,E!==0&&P-E<Z.storage&&(b+=P-E),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=Z.storage}}}let y=b%P;return y>0&&(b+=P-y),_.__size=b,_.__cache={},this}function g(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){let S=_.target;S.removeEventListener("dispose",M);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var PS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function IS(){return Oi===null&&(Oi=new ln(PS,16,16,rs,Kt),Oi.name="DFG_LUT",Oi.minFilter=Nt,Oi.magFilter=Nt,Oi.wrapS=_n,Oi.wrapT=_n,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var cp=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,m=new Set([kl,zl,Xa]),g=new Set([yn,Qn,wr,ss,Fl,Ol]),M=new Uint32Array(4),w=new Int32Array(4),_=new L,S=null,b=null,P=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,B=null,G=null,z=null,X=null;this._outputColorSpace=tn;let te=0,K=0,ue=null,Z=-1,ne=null,ae=new Pt,E=new Pt,N=null,V=new Ce(0),ce=0,pe=t.width,H=t.height,$=1,fe=null,Oe=null,Ee=new Pt(0,0,pe,H),Ze=new Pt(0,0,pe,H),ht=!1,he=new Di,xe=!1,ge=!1,ye=new it,be=new L,Je=new Pt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function st(){return ue===null?$:1}let k=n;function U(C,W){return t.getContext(C,W)}let ee,T,v,I,O,q,me,se,J,oe,we,We,Ae,Te,Be,je,rt,Y,Re,de,Pe,Ne,ve;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",qn,!1),k===null){let W="webgl2";if(k=U(W,C),k===null)throw U(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Ke("WebGLRenderer: "+C.message),C}function Qe(){ee=new z1(k),ee.init(),Pe=new bg(k,ee),T=new R1(k,ee,e,Pe),v=new bS(k,ee),T.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),G=k.createFramebuffer(),z=k.createFramebuffer(),X=k.createFramebuffer(),I=new G1(k),O=new cS,q=new wS(k,ee,v,O,T,Pe,I),me=new B1(D),se=new W_(k),Ne=new A1(k,se),J=new k1(k,se,I,Ne),oe=new W1(k,J,se,Ne,I),Y=new H1(k,T,q),Be=new P1(O),we=new lS(D,me,ee,T,Ne,Be),We=new CS(D,O),Ae=new uS,Te=new xS(ee),rt=new E1(D,me,v,oe,p,l),je=new SS(D,oe,T),ve=new RS(k,I,T,v),Re=new C1(k,ee,I),de=new V1(k,ee,I),I.programs=we.programs,D.capabilities=T,D.extensions=ee,D.properties=O,D.renderLists=Ae,D.shadowMap=je,D.state=v,D.info=I}x!==yn&&(R=new q1(x,t.width,t.height,o,i,r));let Xe=new lp(D,k);this.xr=Xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(pe,H,!1))},this.getSize=function(C){return C.set(pe,H)},this.setSize=function(C,W,ie=!0){if(Xe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=C,H=W,t.width=Math.floor(C*$),t.height=Math.floor(W*$),ie===!0&&(t.style.width=C+"px",t.style.height=W+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(pe*$,H*$).floor()},this.setDrawingBufferSize=function(C,W,ie){pe=C,H=W,$=ie,t.width=Math.floor(C*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(x===yn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ae)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,W,ie,j){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,W,ie,j),v.viewport(ae.copy(Ee).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(Ze)},this.setScissor=function(C,W,ie,j){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,W,ie,j),v.scissor(E.copy(Ze).multiplyScalar($).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){v.setScissorTest(ht=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){Oe=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ie=!0){let j=0;if(C){let Q=!1;if(ue!==null){let Ue=ue.texture.format;Q=m.has(Ue)}if(Q){let Ue=ue.texture.type,Ve=g.has(Ue),Le=rt.getClearColor(),qe=rt.getClearAlpha(),et=Le.r,pt=Le.g,vt=Le.b;Ve?(M[0]=et,M[1]=pt,M[2]=vt,M[3]=qe,k.clearBufferuiv(k.COLOR,0,M)):(w[0]=et,w[1]=pt,w[2]=vt,w[3]=qe,k.clearBufferiv(k.COLOR,0,w))}else j|=k.COLOR_BUFFER_BIT}W&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),rt.dispose(),Ae.dispose(),Te.dispose(),O.dispose(),me.dispose(),oe.dispose(),Ne.dispose(),ve.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Fc),Xe.removeEventListener("sessionend",Oc),le.stop()};function Ct(C){C.preventDefault(),ia("WebGLRenderer: Context Lost."),F=!0}function Tt(){ia("WebGLRenderer: Context Restored."),F=!1;let C=I.autoReset,W=je.enabled,ie=je.autoUpdate,j=je.needsUpdate,Q=je.type;Qe(),I.autoReset=C,je.enabled=W,je.autoUpdate=ie,je.needsUpdate=j,je.type=Q}function qn(C){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){let W=C.target;W.removeEventListener("dispose",ti),ld(W)}function ld(C){cd(C),O.remove(C)}function cd(C){let W=O.get(C).programs;W!==void 0&&(W.forEach(function(ie){we.releaseProgram(ie)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ie,j,Q,Ue){W===null&&(W=Ge);let Ve=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Le=xn(C,W,ie,j,Q);v.setMaterial(j,Ve);let qe=ie.index,et=1;if(j.wireframe===!0){if(qe=J.getWireframeAttribute(ie),qe===void 0)return;et=2}let pt=ie.drawRange,vt=ie.attributes.position,Ye=pt.start*et,Rt=(pt.start+pt.count)*et;Ue!==null&&(Ye=Math.max(Ye,Ue.start*et),Rt=Math.min(Rt,(Ue.start+Ue.count)*et)),qe!==null?(Ye=Math.max(Ye,0),Rt=Math.min(Rt,qe.count)):vt!=null&&(Ye=Math.max(Ye,0),Rt=Math.min(Rt,vt.count));let Qt=Rt-Ye;if(Qt<0||Qt===1/0)return;Ne.setup(Q,j,Le,ie,qe);let Gt,Ft=Re;if(qe!==null&&(Gt=se.get(qe),Ft=de,Ft.setIndex(Gt)),Q.isMesh)j.wireframe===!0?(v.setLineWidth(j.wireframeLinewidth*st()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(Q.isLine){let Mn=j.linewidth;Mn===void 0&&(Mn=1),v.setLineWidth(Mn*st()),Q.isLineSegments?Ft.setMode(k.LINES):Q.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else Q.isPoints?Ft.setMode(k.POINTS):Q.isSprite&&Ft.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Mn=Q._multiDrawStarts,ke=Q._multiDrawCounts,Rn=Q._multiDrawCount,Et=qe?se.get(qe).bytesPerElement:1,ni=O.get(j).currentProgram.getUniforms();for(let Ai=0;Ai<Rn;Ai++)ni.setValue(k,"_gl_DrawID",Ai),Ft.render(Mn[Ai]/Et,ke[Ai])}else if(Q.isInstancedMesh)Ft.renderInstances(Ye,Qt,Q.count);else if(ie.isInstancedBufferGeometry){let Mn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ke=Math.min(ie.instanceCount,Mn);Ft.renderInstances(Ye,Qt,ke)}else Ft.render(Ye,Qt)};function Uc(C,W,ie,j){B!==null&&C.isNodeMaterial&&B.setObject(j,C),xe===!0&&Be.setState(C,ie,!1),C.transparent===!0&&C.side===Un&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,ze(C,W,j),C.side=ts,C.needsUpdate=!0,ze(C,W,j),C.side=Un):ze(C,W,j)}this.compile=function(C,W,ie=null){ie===null&&(ie=C),B!==null&&B.renderStart(C,W,ie),b=Te.get(ie),b.init(W),y.push(b),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),C!==ie&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ge=this.localClippingEnabled,xe=Be.init(this.clippingPlanes,ge),xe===!0&&Be.setGlobalState(this.clippingPlanes,W),B!==null&&je.render(b.state.shadowsArray,ie,W);let j=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let Ve=0;Ve<Ue.length;Ve++){let Le=Ue[Ve];Uc(Le,ie,W,Q),j.add(Le)}else Uc(Ue,ie,W,Q),j.add(Ue)}),b=y.pop(),B!==null&&B.renderEnd(),j},this.compileAsync=function(C,W,ie=null){let j=this.compile(C,W,ie);return new Promise(Q=>{function Ue(){if(j.forEach(function(Ve){let qe=O.get(Ve).currentProgram;(qe===void 0||qe.isReady())&&j.delete(Ve)}),j.size===0){Q(C);return}setTimeout(Ue,10)}ee.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let so=null;function hd(C){so&&so(C)}function Fc(){le.stop()}function Oc(){le.start()}let le=new xg;le.setAnimationLoop(hd),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(C){so=C,Xe.setAnimationLoop(C),C===null?le.stop():le.start()},Xe.addEventListener("sessionstart",Fc),Xe.addEventListener("sessionend",Oc),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(C,W);let ie=Xe.enabled===!0&&Xe.isPresenting===!0,j=R!==null&&(ue===null||ie)&&R.begin(D,ue);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(W),W=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,ue),b=Te.get(C,y.length),b.init(W),b.state.textureUnits=q.getTextureUnits(),y.push(b),ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),he.setFromProjectionMatrix(ye,kn,W.reversedDepth),ge=this.localClippingEnabled,xe=Be.init(this.clippingPlanes,ge),S=Ae.get(C,P.length),S.init(),P.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){let Ve=D.xr.getDepthSensingMesh();Ve!==null&&_e(Ve,W,-1/0,D.sortObjects)}_e(C,W,0,D.sortObjects),S.finish(),B!==null&&B.updateLights(b.state.lightsArray),D.sortObjects===!0&&S.sort(fe,Oe),tt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,tt&&rt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Be.beginShadows();let Q=b.state.shadowsArray;if(je.render(Q,C,W),xe===!0&&Be.endShadows(),(j&&R.hasRenderPass())===!1){let Ve=S.opaque,Le=S.transmissive;if(b.setupLights(),W.isArrayCamera){let qe=W.cameras;if(Le.length>0)for(let et=0,pt=qe.length;et<pt;et++){let vt=qe[et];nt(Ve,Le,C,vt)}tt&&rt.render(C);for(let et=0,pt=qe.length;et<pt;et++){let vt=qe[et];Me(S,C,vt,vt.viewport)}}else Le.length>0&&nt(Ve,Le,C,W),tt&&rt.render(C),Me(S,C,W)}ue!==null&&K===0&&(q.updateMultisampleRenderTarget(ue),q.updateRenderTargetMipmap(ue)),j&&R.end(D),C.isScene===!0&&C.onAfterRender(D,C,W),Ne.resetDefaultState(),Z=-1,ne=null,y.pop(),y.length>0?(b=y[y.length-1],q.setTextureUnits(b.state.textureUnits),xe===!0&&Be.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,B!==null&&B.renderEnd()};function _e(C,W,ie,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(he)){j&&Je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);let Ve=oe.update(C),Le=C.material;Le.visible&&S.push(C,Ve,Le,ie,Je.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(he))){let Ve=oe.update(C),Le=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Je.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Je.copy(Ve.boundingSphere.center)),Je.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){let qe=Ve.groups;for(let et=0,pt=qe.length;et<pt;et++){let vt=qe[et],Ye=Le[vt.materialIndex];Ye&&Ye.visible&&S.push(C,Ve,Ye,ie,Je.z,vt,W)}}else Le.visible&&S.push(C,Ve,Le,ie,Je.z,null,W)}}let Ue=C.children;for(let Ve=0,Le=Ue.length;Ve<Le;Ve++)_e(Ue[Ve],W,ie,j)}function Me(C,W,ie,j){let{opaque:Q,transmissive:Ue,transparent:Ve}=C;b.setupLightsView(ie),xe===!0&&Be.setGlobalState(D.clippingPlanes,ie),j&&v.viewport(ae.copy(j)),Q.length>0&&dt(Q,W,ie),Ue.length>0&&dt(Ue,W,ie),Ve.length>0&&dt(Ve,W,ie),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function nt(C,W,ie,j){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){let Ye=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new zt(1,1,{generateMipmaps:!0,type:Ye?Kt:yn,minFilter:jn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Ue=b.state.transmissionRenderTarget[j.id],Ve=j.viewport||ae;Ue.setSize(Ve.z*D.transmissionResolutionScale,Ve.w*D.transmissionResolutionScale);let Le=D.getRenderTarget(),qe=D.getActiveCubeFace(),et=D.getActiveMipmapLevel();D.setRenderTarget(Ue),D.getClearColor(V),ce=D.getClearAlpha(),ce<1&&D.setClearColor(16777215,.5),D.clear(),tt&&rt.render(ie);let pt=D.toneMapping;D.toneMapping=li;let vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),xe===!0&&Be.setGlobalState(D.clippingPlanes,j),dt(C,ie,j),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Rt=0,Qt=W.length;Rt<Qt;Rt++){let Gt=W[Rt],{object:Ft,geometry:Mn,material:ke,group:Rn}=Gt;if(ke.side===Un&&Ft.layers.test(j.layers)){let Et=ke.side;ke.side=mn,ke.needsUpdate=!0,Ht(Ft,ie,j,Mn,ke,Rn),ke.side=Et,ke.needsUpdate=!0,Ye=!0}}Ye===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}D.setRenderTarget(Le,qe,et),D.setClearColor(V,ce),vt!==void 0&&(j.viewport=vt),D.toneMapping=pt}function dt(C,W,ie){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ue=C.length;Q<Ue;Q++){let Ve=C[Q],{object:Le,geometry:qe,group:et}=Ve,pt=Ve.material;pt.allowOverride===!0&&j!==null&&(pt=j),Le.layers.test(ie.layers)&&Ht(Le,W,ie,qe,pt,et)}}function Ht(C,W,ie,j,Q,Ue){B!==null&&Q.isNodeMaterial&&B.setObject(C,Q),C.onBeforeRender(D,W,ie,j,Q,Ue),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,W,ie,j,C,Ue),Q.transparent===!0&&Q.side===Un&&Q.forceSinglePass===!1?(Q.side=mn,Q.needsUpdate=!0,D.renderBufferDirect(ie,W,j,Q,C,Ue),Q.side=ts,Q.needsUpdate=!0,D.renderBufferDirect(ie,W,j,Q,C,Ue),Q.side=Un):D.renderBufferDirect(ie,W,j,Q,C,Ue),C.onAfterRender(D,W,ie,j,Q,Ue)}function ze(C,W,ie){W.isScene!==!0&&(W=Ge);let j=O.get(C),Q=b.state.lights,Ue=b.state.shadowsArray,Ve=Q.state.version,Le=we.getParameters(C,Q.state,Ue,W,ie,b.state.lightProbeGridArray),qe=we.getProgramCacheKey(Le),et=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let pt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=me.get(C.envMap||j.environment,pt),j.envMapRotation=j.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",ti),et=new Map,j.programs=et);let vt=et.get(qe);if(vt!==void 0){if(j.currentProgram===vt&&j.lightsStateVersion===Ve)return jt(C,Le),vt}else Le.uniforms=we.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,ie,Le),C.onBeforeCompile(Le,D),vt=we.acquireProgram(Le,qe),et.set(qe,vt),j.uniforms=Le.uniforms;let Ye=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=Be.uniform),jt(C,Le),j.needsLights=ki(C),j.lightsStateVersion=Ve,j.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.sunLights.value=Q.state.sun,Ye.sunLightShadows.value=Q.state.sunShadow,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ye.sunShadowCascade.value=Q.state.sunShadowCascade,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=vt,j.uniformsList=null,vt}function lt(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=eo.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function jt(C,W){let ie=O.get(C);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function dn(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(W.matrixWorld);for(let ie=0,j=C.length;ie<j;ie++){let Q=C[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function xn(C,W,ie,j,Q){W.isScene!==!0&&(W=Ge),q.resetTextureUnits();let Ue=W.fog,Ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Le=ue===null?D.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:mt.workingColorSpace,qe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,et=me.get(j.envMap||Ve,qe),pt=j.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vt=!!ie.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ye=!!ie.morphAttributes.position,Rt=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color,Gt=li;j.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Gt=D.toneMapping);let Ft=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Mn=Ft!==void 0?Ft.length:0,ke=O.get(j),Rn=b.state.lights;if(xe===!0&&(ge===!0||C!==ne)){let Bt=C===ne&&j.id===Z;Be.setState(j,C,Bt)}let Et=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Rn.state.version||ke.outputColorSpace!==Le||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isBatchedMesh&&ke.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ke.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==et||j.fog===!0&&ke.fog!==Ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==pt||ke.vertexTangents!==vt||ke.morphTargets!==Ye||ke.morphNormals!==Rt||ke.morphColors!==Qt||ke.toneMapping!==Gt||ke.morphTargetsCount!==Mn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ke.__version=j.version);let ni=ke.currentProgram;Et===!0&&(ni=ze(j,W,Q),B&&j.isNodeMaterial&&B.onUpdateProgram(j,ni,ke));let Ai=!1,ls=!1,Rr=!1,Lt=ni.getUniforms(),Zt=ke.uniforms;if(v.useProgram(ni.program)&&(Ai=!0,ls=!0,Rr=!0),j.id!==Z&&(Z=j.id,ls=!0),ke.needsLights){let Bt=dn(b.state.lightProbeGridArray,Q);ke.lightProbeGrid!==Bt&&(ke.lightProbeGrid=Bt,ls=!0)}if(Ai||ne!==C){v.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(k,"projectionMatrix",C.projectionMatrix),Lt.setValue(k,"viewMatrix",C.matrixWorldInverse);let hs=Lt.map.cameraPosition;hs!==void 0&&hs.setValue(k,be.setFromMatrixPosition(C.matrixWorld)),T.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,ls=!0,Rr=!0)}if(ke.needsLights&&(Rn.state.sunShadowMap.length>0&&Lt.setValue(k,"sunShadowMap",Rn.state.sunShadowMap,q),Rn.state.directionalShadowMap.length>0&&Lt.setValue(k,"directionalShadowMap",Rn.state.directionalShadowMap,q),Rn.state.spotShadowMap.length>0&&Lt.setValue(k,"spotShadowMap",Rn.state.spotShadowMap,q),Rn.state.pointShadowMap.length>0&&Lt.setValue(k,"pointShadowMap",Rn.state.pointShadowMap,q)),Q.isSkinnedMesh){Lt.setOptional(k,Q,"bindMatrix"),Lt.setOptional(k,Q,"bindMatrixInverse");let Bt=Q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(k,"boneTexture",Bt.boneTexture,q))}Q.isBatchedMesh&&(Lt.setOptional(k,Q,"batchingTexture"),Lt.setValue(k,"batchingTexture",Q._matricesTexture,q),Lt.setOptional(k,Q,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",Q._indirectTexture,q),Lt.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",Q._colorsTexture,q));let cs=ie.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Y.update(Q,ie,ni),(ls||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,Lt.setValue(k,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Zt.envMapIntensity.value=W.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=IS()),ls){if(Lt.setValue(k,"toneMappingExposure",D.toneMappingExposure),ke.needsLights&&hi(Zt,Rr),Ue&&j.fog===!0&&We.refreshFogUniforms(Zt,Ue),We.refreshMaterialUniforms(Zt,j,$,H,b.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){let Bt=ke.lightProbeGrid;Zt.probesSH.value=Bt.texture,Zt.probesMin.value.copy(Bt.boundingBox.min),Zt.probesMax.value.copy(Bt.boundingBox.max),Zt.probesResolution.value.copy(Bt.resolution)}eo.upload(k,lt(ke),Zt,q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(eo.upload(k,lt(ke),Zt,q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Lt.setValue(k,"center",Q.center),Lt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(k,"normalMatrix",Q.normalMatrix),Lt.setValue(k,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Bt=j.uniformsGroups;for(let hs=0,Pr=Bt.length;hs<Pr;hs++){let Np=Bt[hs];ve.update(Np,ni),ve.bind(Np,ni)}}return ni}function hi(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ki(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(C,W,ie){let j=O.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),O.get(C.texture).__webglTexture=W,O.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ie,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let ie=O.get(C);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ie=0){ue=C,te=W,K=ie;let j=null,Q=!1,Ue=!1;if(C){let Le=O.get(C);if(Le.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,Le.__webglFramebuffer),ae.copy(C.viewport),E.copy(C.scissor),N=C.scissorTest,v.viewport(ae),v.scissor(E),v.setScissorTest(N),Z=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Le.__hasExternalTextures)q.rebindTextures(C,O.get(C.texture).__webglTexture,O.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let pt=C.depthTexture;if(Le.__boundDepthTexture!==pt){if(pt!==null&&O.has(pt)&&(C.width!==pt.image.width||C.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}let qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);let et=O.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[W])?j=et[W][ie]:j=et[W],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?j=O.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?j=et[ie]:j=et,ae.copy(C.viewport),E.copy(C.scissor),N=C.scissorTest}else ae.copy(Ee).multiplyScalar($).floor(),E.copy(Ze).multiplyScalar($).floor(),N=ht;if(ie!==0&&(j=G),v.bindFramebuffer(k.FRAMEBUFFER,j)&&v.drawBuffers(C,j),v.viewport(ae),v.scissor(E),v.setScissorTest(N),Q){let Le=O.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ie)}else if(Ue){let Le=W;for(let qe=0;qe<C.textures.length;qe++){let et=O.get(C.textures[qe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+qe,et.__webglTexture,ie,Le)}}else if(C!==null&&ie!==0){let Le=O.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Le.__webglTexture,ie)}Z=-1};function Bc(C){let W=O.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=T.textureFormatReadable(C.format),W.__typeReadable=T.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,ie,j,Q,Ue,Ve,Le=0){if(!(C&&C.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){v.bindFramebuffer(k.FRAMEBUFFER,qe);try{let et=C.textures[Le],pt=et.format,vt=et.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le);let Ye=Bc(et);if(Ye.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&ie>=0&&ie<=C.height-Q&&k.readPixels(W,ie,j,Q,Pe.convert(pt),Pe.convert(vt),Ue)}finally{let et=ue!==null?O.get(ue).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,W,ie,j,Q,Ue,Ve,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe)if(W>=0&&W<=C.width-j&&ie>=0&&ie<=C.height-Q){v.bindFramebuffer(k.FRAMEBUFFER,qe);let et=C.textures[Le],pt=et.format,vt=et.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le);let Ye=Bc(et);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Rt),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),k.readPixels(W,ie,j,Q,Pe.convert(pt),Pe.convert(vt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Qt=ue!==null?O.get(ue).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Qt);let Gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await B0(k,Gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Rt),k.deleteSync(Gt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ie=0){let j=Math.pow(2,-ie),Q=Math.floor(C.image.width*j),Ue=Math.floor(C.image.height*j),Ve=W!==null?W.x:0,Le=W!==null?W.y:0;q.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ie,0,0,Ve,Le,Q,Ue),v.unbindTexture()},this.copyTextureToTexture=function(C,W,ie=null,j=null,Q=0,Ue=0){let Ve,Le,qe,et,pt,vt,Ye,Rt,Qt,Gt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(ie!==null)Ve=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,et=ie.min.x,pt=ie.min.y,vt=ie.isBox3?ie.min.z:0;else{let Zt=Math.pow(2,-Q);Ve=Math.floor(Gt.width*Zt),Le=Math.floor(Gt.height*Zt),C.isDataArrayTexture?qe=Gt.depth:C.isData3DTexture?qe=Math.floor(Gt.depth*Zt):qe=1,et=0,pt=0,vt=0}j!==null?(Ye=j.x,Rt=j.y,Qt=j.z):(Ye=0,Rt=0,Qt=0);let Ft=Pe.convert(W.format),Mn=Pe.convert(W.type),ke;W.isData3DTexture?(q.setTexture3D(W,0),ke=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),ke=k.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),ke=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let Rn=v.getParameter(k.UNPACK_ROW_LENGTH),Et=v.getParameter(k.UNPACK_IMAGE_HEIGHT),ni=v.getParameter(k.UNPACK_SKIP_PIXELS),Ai=v.getParameter(k.UNPACK_SKIP_ROWS),ls=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,Gt.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,et),v.pixelStorei(k.UNPACK_SKIP_ROWS,pt),v.pixelStorei(k.UNPACK_SKIP_IMAGES,vt);let Rr=C.isDataArrayTexture||C.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let Zt=O.get(C),cs=O.get(W),Bt=O.get(Zt.__renderTarget),hs=O.get(cs.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,Bt.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Pr=0;Pr<qe;Pr++)Rr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,O.get(C).__webglTexture,Q,vt+Pr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,O.get(W).__webglTexture,Ue,Qt+Pr)),k.blitFramebuffer(et,pt,Ve,Le,Ye,Rt,Ve,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||O.has(C)){let Zt=O.get(C),cs=O.get(W);v.bindFramebuffer(k.READ_FRAMEBUFFER,z),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,X);for(let Bt=0;Bt<qe;Bt++)Rr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zt.__webglTexture,Q,vt+Bt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zt.__webglTexture,Q),Lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cs.__webglTexture,Ue,Qt+Bt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cs.__webglTexture,Ue),Q!==0?k.blitFramebuffer(et,pt,Ve,Le,Ye,Rt,Ve,Le,k.COLOR_BUFFER_BIT,k.NEAREST):Lt?k.copyTexSubImage3D(ke,Ue,Ye,Rt,Qt+Bt,et,pt,Ve,Le):k.copyTexSubImage2D(ke,Ue,Ye,Rt,et,pt,Ve,Le);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ke,Ue,Ye,Rt,Qt,Ve,Le,qe,Ft,Mn,Gt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,Ue,Ye,Rt,Qt,Ve,Le,qe,Ft,Gt.data):k.texSubImage3D(ke,Ue,Ye,Rt,Qt,Ve,Le,qe,Ft,Mn,Gt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,Ye,Rt,Ve,Le,Ft,Mn,Gt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,Ye,Rt,Gt.width,Gt.height,Ft,Gt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,Ye,Rt,Ve,Le,Ft,Mn,Gt);v.pixelStorei(k.UNPACK_ROW_LENGTH,Rn),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),v.pixelStorei(k.UNPACK_SKIP_PIXELS,ni),v.pixelStorei(k.UNPACK_SKIP_ROWS,Ai),v.pixelStorei(k.UNPACK_SKIP_IMAGES,ls),Ue===0&&W.generateMipmaps&&k.generateMipmap(ke),v.unbindTexture()},this.initRenderTarget=function(C){O.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),v.unbindTexture()},this.resetState=function(){te=0,K=0,ue=null,v.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Ec=new L;function ci(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ec.copy(e),Ec[n]=0,Ec.normalize();let c=.5*a/(a+o),h=1-Ec.angleTo(s)/l;return Math.sign(Ec[t])===1?h*c:o/(a+o)+c+c*(1-h)}var ju=class s extends Gn{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new L,m=.5/a;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[M+0]=ci(x,c,"z","y",r,n),f[M+1]=1-ci(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-ci(x,c,"z","y",r,n),f[M+1]=1-ci(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-ci(x,c,"x","z",r,e),f[M+1]=ci(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-ci(x,c,"x","z",r,e),f[M+1]=1-ci(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-ci(x,c,"x","y",r,e),f[M+1]=1-ci(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=ci(x,c,"x","y",r,e),f[M+1]=1-ci(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Eg(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ot,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Tg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Tg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Tg(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new gt(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}var Ut=(s=0,e=0,t=0)=>new L(s,e,t),hp=71823;function $e(){return hp=Math.imul(hp,1664525)+1013904223>>>0,hp/4294967296}var as=new Map,Mt={};function bt(s,e,t=.65,n=0,i={}){let r=i.clearcoat!==void 0?ur:Si;return Mt[s]||=new r({name:s,color:e,roughness:t,metalness:n,...i})}function Ar(s,e,t=1){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,256);for(let a=0;a<18e3;a++){let o=$e();i.fillStyle=`rgba(${o>.5?"255,255,255":"0,0,0"},${$e()*(s==="grass"?.1:.055)})`,i.fillRect($e()*256,$e()*256,1+$e()*1.2,1+$e()*1.2)}if(s==="weathered"){for(let a=0;a<60;a++){let o=$e()*256,l=$e()*256,c=20+$e()*60,h=i.createRadialGradient(o,l,0,o,l,c),d=.035+$e()*.04,u=$e()>.5?"255,255,255":"40,45,40";h.addColorStop(0,`rgba(${u},${d})`),h.addColorStop(1,`rgba(${u},0)`),i.fillStyle=h;for(let f of[-256,0,256])for(let p of[-256,0,256])i.save(),i.translate(f,p),i.fillRect(o-c,l-c,c*2,c*2),i.restore()}for(let a=0;a<40;a++)i.fillStyle=`rgba(30,35,30,${.015+$e()*.03})`,i.fillRect($e()*256,$e()*256,1+$e()*2,30+$e()*90)}if(s==="pavers"){i.strokeStyle="#00000022",i.lineWidth=1;for(let a=0;a<=256;a+=32)i.beginPath(),i.moveTo(a,0),i.lineTo(a,256),i.moveTo(0,a),i.lineTo(256,a),i.stroke()}let r=new ir(n);return r.colorSpace=tn,r.wrapS=r.wrapT=Tn,r.repeat.set(t,t),r.anisotropy=8,r}function Ag(){bt("stone","#c8c1af",.92,0,{map:Ar("stone","#e5e0d5",2),bumpScale:.013}),Mt.stone.bumpMap=Mt.stone.map,bt("concrete","#ece9df",.8,.02,{map:Ar("concrete","#edece6",1)}),bt("ivory","#eee7d7",.43,.13),bt("roof","#bec1b7",.83,.15,{map:Ar("weathered","#f2f2ec",1)}),bt("dark","#263937",.56,.55),bt("metal","#9ba8a4",.32,.82),bt("copper","#a99572",.42,.62),bt("terra","#b96e48",.83,.1),bt("glass","#345356",.18,.32,{envMapIntensity:1.3,clearcoat:1,clearcoatRoughness:.075,ior:1.5}),bt("glassLight","#5c8684",.19,.66,{envMapIntensity:1.5}),bt("black","#101f21",.62,.3),bt("asphalt","#747b75",.94,0,{map:Ar("asphalt","#b2b3aa",8),bumpScale:.03}),Mt.asphalt.bumpMap=Mt.asphalt.map,bt("paving","#e2ddcb",.84,0,{map:Ar("pavers","#dfdacb",5)}),bt("grass","#80906b",1,0,{map:Ar("grass","#b0b590",6)}),bt("districtWall","#a5b2ad",.88,.03),bt("districtGlass","#6c8789",.38,.18,{envMapIntensity:.45}),bt("districtRoof","#a3afa9",.9,.08),bt("hedge","#344f30",.96),bt("white","#e6e5d3",.75),bt("water","#406e69",.14,.2,{envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.09,ior:1.33}),bt("solar","#1b3c47",.38,.16,{envMapIntensity:.35}),bt("roofGlass","#355958",.32,.08,{envMapIntensity:.3}),bt("pump","#236b67",.43,.35,{clearcoat:.18,clearcoatRoughness:.22});let s=Ar("cast","#808080",1);s.colorSpace=Wn,Mt.pump.bumpMap=s,Mt.pump.bumpScale=.002,Mt.pump.userData.worldUV=.3,bt("pipe","#497975",.36,.7),bt("hydrant","#b3352c",.55,.25),bt("paintBlue","#3a4d5e",.42,.45),bt("accessible","#3f6d9e",.9,0),bt("red","#ad583a",.5,.4),bt("amber","#e7b25c",.4,.2,{emissive:"#efb955",emissiveIntensity:.2}),bt("lamp","#fff1cd",.3,.1,{emissive:"#ffe3ae",emissiveIntensity:1}),bt("windowLight","#6f8272",.5,.15,{emissive:"#ffd092",emissiveIntensity:0}),bt("rubber","#202823",.93),bt("bark","#675445",1),bt("parkingPaint","#496552",.94,0,{map:Mt.asphalt.map}),Mt.parkingPaint.userData.worldUV=3;for(let[e,t]of[["stone",1.6],["concrete",1],["paving",8],["asphalt",3],["grass",2],["roof",9]])Mt[e].userData.worldUV=t,Mt[e].map.repeat.set(1,1);for(let e=0;e<6;e++)bt("leaf"+e,["#344c31","#4d623b","#5b7044","#718452","#7f8c5e","#4b6750"][e],.92);return Mt}function A(s,e,t,n,i,r,a,o="concrete",l=0,c=0){l=Math.max(i,r,a)>4?0:Math.min(l,Math.min(i,r,a)/4);let h=[i,r,a,l].join("/");as.has(h)||as.set(h,l>0?new ju(i,r,a,2,Math.min(l,i/2,r/2,a/2)):new Gn(i,r,a));let d=new xt(as.get(h),typeof o=="string"?Mt[o]:o);return d.position.set(e,t,n),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,s.add(d),d}function He(s,e,t,n,i,r,a="metal",o=24,l=i){let c=`c${i}/${l}/${r}/${o}`;as.has(c)||as.set(c,new Ts(l,i,r,o));let h=new xt(as.get(c),typeof a=="string"?Mt[a]:a);return h.position.set(e,t,n),h.castShadow=h.receiveShadow=!0,s.add(h),h}function kt(s,e,t=.1,n="metal",i=!0){let r=i?new rr(e.map(o=>Ut(...o)),!1,"centripetal"):new or;if(!i)for(let o=1;o<e.length;o++)r.add(new ar(Ut(...e[o-1]),Ut(...e[o])));let a=new xt(new hr(r,Math.max(12,e.length*8),t,8,!1),Mt[n]);return a.castShadow=a.receiveShadow=!0,s.add(a),a}function gn(s,e,t,n,i,r=.03,a="metal",o=[Math.PI/2,0,0]){let l=`t${i}/${r}`;as.has(l)||as.set(l,new cr(i,r,8,32));let c=new xt(as.get(l),Mt[a]);return c.position.set(e,t,n),c.rotation.set(...o),c.castShadow=c.receiveShadow=!0,s.add(c),c}function _t(s,e,t=0,n=0,i=0){let r=new gi;return r.name=e,r.position.set(t,n,i),s.add(r),r}function Vt(s,e,t,n,i,r=8,a=1.2,o="#e6e2cc",l=null,c=0){let h=document.createElement("canvas");h.width=1024,h.height=Math.max(64,Math.round(1024*a/r));let d=h.getContext("2d");l&&(d.fillStyle=l,d.fillRect(0,0,h.width,h.height)),d.fillStyle=o,d.font=`600 ${h.height*.65}px 'Microsoft YaHei UI','Microsoft YaHei','PingFang SC',sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,h.width/2,h.height*.53,h.width*.95);let u=new ir(h);u.colorSpace=tn,u.anisotropy=8;let f=new xt(new Ki(r,a),new Ln({map:u,transparent:!0,depthWrite:!1,side:Un,toneMapped:!1}));return f.position.set(t,n,i),f.rotation.y=c,s.add(f),f}function Ac(s){s.updateMatrixWorld(!0);let e=new Map,t=[],n=s.matrixWorld.clone().invert();s.traverse(i=>{if(!i.isMesh||i.userData.dynamic||i.material.transparent||i.isInstancedMesh)return;let r=i.parent;for(;r&&r!==s;){if(r.userData.dynamic)return;r=r.parent}let a=i.material.uuid,o=e.get(a)||{mat:i.material,geos:[]},l=i.geometry.clone().applyMatrix4(n.clone().multiply(i.matrixWorld));l.index&&(l=l.toNonIndexed());let c=i.material.userData.worldUV;if(c&&l.attributes.uv){let h=l.attributes.position,d=l.attributes.normal,u=l.attributes.uv;for(let f=0;f<h.count;f++){let p=Math.abs(d.getX(f)),x=Math.abs(d.getY(f)),m=Math.abs(d.getZ(f));x>p&&x>m?u.setXY(f,h.getX(f)/c,h.getZ(f)/c):p>m?u.setXY(f,h.getZ(f)/c,h.getY(f)/c):u.setXY(f,h.getX(f)/c,h.getY(f)/c)}u.needsUpdate=!0}o.geos.push(l),e.set(a,o),t.push(i)}),t.forEach(i=>i.removeFromParent());for(let{mat:i,geos:r}of e.values()){let a=Eg(r,!1);if(r.forEach(l=>l.dispose()),!a)continue;let o=new xt(a,i);o.castShadow=o.receiveShadow=!0,s.add(o)}}function DS(s,e,t,n,i,r){for(let a of[.35,1.05])A(s,e,t+a,n-r/2,i,.035,.035,"metal"),A(s,e,t+a,n+r/2,i,.035,.035,"metal"),A(s,e-i/2,t+a,n,.035,.035,r,"metal"),A(s,e+i/2,t+a,n,.035,.035,r,"metal");for(let a=e-i/2;a<=e+i/2;a+=2)A(s,a,t+.55,n-r/2,.035,1.1,.035,"metal"),A(s,a,t+.55,n+r/2,.035,1.1,.035,"metal")}function Cg(s,e,t,n,i,r,a){for(let o=0;o<i;o++)for(let l=0;l<r;l++){let c=e+o*2.35,h=n+l*3.35,d=_t(s,"photovoltaic-panel",c,t,h);d.rotation.x=.09,A(d,0,0,0,2.1,.075,2.9,"metal",.03),A(d,0,.047,0,1.99,.015,2.8,"solar");for(let u=-.66;u<1;u+=.66)A(d,u,.06,0,.015,.01,2.8,"metal");for(let u=-1.15;u<1.4;u+=.46)A(d,0,.06,u,2,.01,.014,"metal");for(let u of[-.8,.8])for(let f of[-1,1]){let p=t-Math.sin(.09)*f-.0375*Math.cos(.09),x=h+Math.cos(.09)*f-.0375*Math.sin(.09);A(s,c+u,(a+p)/2,x,.055,p-a,.055,"metal"),A(s,c+u,a,x,.28,.08,.28,"dark")}}}function LS(s,e,t){A(s,e,2.3,t+.3,6.6,4.6,.4,"ivory",.08),A(s,e,2.15,t+.52,5.8,4.1,.05,"dark");for(let n=.4;n<4.2;n+=.32)A(s,e,n,t+.59,5.65,.025,.03,"metal");for(let n of[-1,1])A(s,e+n*2.98,2.1,t+.66,.34,4.05,.32,"rubber",.05);A(s,e,4.32,t+.66,6.3,.36,.32,"rubber",.05),A(s,e,.36,t+.86,2.3,.05,1.1,"metal",.012);for(let n=-1;n<=1.01;n+=.4)A(s,e+n,.392,t+.86,.025,.012,1,"dark");A(s,e,.37,t+1.43,2.3,.06,.08,"amber");for(let n of[-1,1])A(s,e+n*1.19,.37,t+.86,.06,.07,1.12,"amber");A(s,e,4.9,t+1.8,7.6,.15,3,"dark",.06),A(s,e,5.02,t+3.27,7.7,.4,.08,"metal",.02);for(let n of[-1,1])A(s,e+n*3.82,5.02,t+1.8,.08,.4,3,"metal",.02),kt(s,[[e+n*3.4,6.9,t+.42],[e+n*3.4,5.06,t+3.15]],.03,"metal",!1),A(s,e+n*3.4,6.9,t+.36,.22,.22,.08,"dark");for(let n of[-2,0,2])A(s,e+n,4.81,t+2,.9,.03,.18,"lamp",.01);for(let n of[-3.2,3.2]){He(s,e+n,.7,t+1,.085,1.4,"amber"),A(s,e+n,.5,t+1,.21,.12,.21,"dark");for(let i of[.9,1.2])He(s,e+n,i,t+1,.088,.08,"black",14)}for(let n of[-2.45,2.45])A(s,e+n,.56,t+.68,.3,.8,.16,"rubber",.025)}function NS(s,e,t,n){for(let[i,r,a]of[[e,!0,t/2],[e,!0,-t/2],[t,!1,e/2],[t,!1,-e/2]]){for(let o=-i/2;o<=i/2+.01;o+=2.5){let l=r?o:a,c=r?a:o;A(s,l,n+.12,c,.03,.24,.03,"metal")}A(s,r?0:a,n+.24,r?a:0,r?i:.025,.025,r?.025:i,"metal")}}function US(s){let e=_t(s,"building/research-center",-36,0,25);A(e,0,.18,0,44,.36,27,"stone");for(let n=0;n<4;n++){let i=1.1+n*3.75;A(e,0,i-.12,0,41,.42,25,"ivory"),A(e,0,i+1.5,0,39.6,2.82,23.6,"glass"),A(e,0,i+3.18,0,39.7,.66,23.7,"dark");for(let a of[-11.87,11.87])A(e,0,i+.95,a,39.6,.05,.07,"metal");for(let a=-18.75;a<=18.8;a+=1.5)for(let o of[-11.86,11.86])A(e,a,i+1.5,o,.06,2.82,.12,"metal");for(let a=-10.5;a<=10.6;a+=1.5)for(let o of[-19.86,19.86])A(e,o,i+1.5,a,.12,2.82,.06,"metal");let r=n<2?[[-20,.2],[9.8,20]]:[[-20,20]];for(let[a,o]of r){A(e,(a+o)/2,i+2.98,12.3,o-a,.07,.9,"metal");for(let l=a+.6;l<o;l+=3)A(e,l,i+2.94,12.3,.05,.12,.9,"dark")}for(let a=-17.6;a<=17.6;a+=1.5)Math.abs(Math.round(a*10)+n*13)%5<2&&(n>1||a<0||a>10)&&A(e,a+.75,i+1.5,11.83,1.36,2.5,.015,"windowLight");for(let a=-10.2;a<10.5;a+=1.2)A(e,20.08,i+1.5,a,.42,2.82,.07,"copper"),A(e,-20.08,i+1.5,a,.42,2.82,.07,"copper"),Math.abs(Math.round(a*10)+n*3)%6<3&&A(e,19.8,i+1.5,a+.6,.02,2.5,1.1,"windowLight");for(let a=-18;a<=18;a+=6)A(e,a,i+1.5,-11.95,1.1,2.82,.12,"ivory")}A(e,0,16.2,0,41,.4,25,"ivory"),A(e,0,16.44,0,40.5,.08,24.5,"roof");for(let n of[-12.375,12.375])A(e,0,16.95,n,41,1.1,.25,"ivory"),A(e,0,17.52,n,41.1,.05,.36,"metal");for(let n of[-20.375,20.375])A(e,n,16.95,0,.25,1.1,25,"ivory"),A(e,n,17.52,0,.36,.05,25.1,"metal");A(e,-16.5,18,-3,5,3.2,4.5,"ivory"),A(e,-16.5,19.65,-3,5.3,.12,4.8,"metal"),A(e,-16.5,17.5,-.73,1,2.1,.05,"dark"),A(e,-16.5,16.62,-.3,1.4,.3,.9,"concrete");for(let n=0;n<6;n++)A(e,-18.5+n*.07,16.5+n*.001,-3,.9,.02,.3,"metal");for(let[n,i]of[[-19.4,-11.4],[19.4,-11.4],[-19.4,11.4],[19.4,11.4],[0,-11.4],[0,11.4]])He(e,n,16.5,i,.12,.08,"dark",10);A(e,11,16.55,6,12,.16,7,"paving"),DS(e,11,16.55,6,13,8);for(let n=6;n<17;n+=2.2)A(e,n,16.85,9,1.9,.6,.8,"stone",.06),A(e,n,17.2,9,1.7,.3,.65,"hedge",.1);for(let n of[-15,-10])A(e,n,16.6,6.5,4.5,.25,6,"stone"),A(e,n,16.75,6.5,4.25,.1,5.75,"grass");A(e,5,3.7,12.3,9.4,7.3,1,"copper",.12),A(e,5,3.4,12.88,8.4,6.4,.15,"glass");for(let n=2;n<=8;n+=1.5)A(e,n,2,13.03,.05,3.8,.08,"metal");A(e,5,3.94,13.04,8.4,.07,.09,"metal");for(let n of[4.7,5.3])kt(e,[[n,1.1,13.12],[n,1.1,13.22],[n,2.1,13.22],[n,2.1,13.12]],.025,"copper",!1);A(e,5,1.35,13.045,8.35,.045,.01,"ivory"),A(e,5,4.8,15.2,13,.26,6,"ivory",.12),A(e,5,4.63,15.1,11.5,.035,4.8,"copper");for(let n of[-.5,10.5])He(e,n,2.35,17,.065,4.7,"metal");for(let n=0;n<3;n++)A(e,5,.09+n*.12,16.5-n*.7,14,.15,6-n*1.4,"stone",.035);for(let n=0;n<3;n++)A(e,5,.171+n*.12,19.43-n*1.4,13.8,.012,.1,"copper");let t=A(e,13,.21,18.05,1.8,.1,5.9,"stone");t.rotation.x=Math.atan(.29/5.9),A(e,12.5,.35,14.8,2.8,.11,1.4,"stone",.025);for(let n of[12.15,13.85]){kt(e,[[n,1.31,15.1],[n,1.02,21]],.025,"metal",!1);for(let i of[15.1,18.05,21])He(e,n,.565+(21-i)*.29/5.9,i,.022,.9,"metal",12)}NS(e,40.75,24.75,17.55),A(e,12,16.75,-5,8.4,.62,5.4,"ivory",.05),A(e,12,17.09,-5,8.6,.06,5.6,"metal",.02);for(let n of[-1,1]){let i=A(e,12,17.55,-5+n*1.32,8,.04,2.75,"roofGlass");i.rotation.x=n*.42}A(e,12,18.12,-5,8.1,.1,.12,"metal",.02);for(let n=8.4;n<=15.7;n+=1.2)for(let i of[-1,1]){let r=A(e,n,17.58,-5+i*1.32,.05,.06,2.8,"metal");r.rotation.x=i*.42}for(let n of[-4,-1])A(e,n,16.62,1.2,1.5,.24,1.5,"dark",.04),He(e,n,17.05,1.2,.5,.65,"metal",20),He(e,n,17.42,1.2,.56,.08,"dark",20),He(e,n,17.62,1.2,.16,.32,"metal",12),He(e,n,17.86,1.2,.42,.12,"metal",20,.08);A(e,-6,16.86,-4.5,16,.07,.46,"metal");for(let n of[-1,1])A(e,-6,16.93,-4.5+n*.22,16,.1,.025,"metal");for(let n=-13.5;n<=1.6;n+=2.5)A(e,n,16.63,-4.5,.12,.38,.12,"dark"),A(e,n,16.5,-4.5,.5,.06,.5,"rubber",.02);return Vt(e,"\u6765\u9716\u667A\u9020\u56ED  \u7814\u53D1\u4E2D\u5FC3",-8,16.95,12.52,9,.72,"#2f4a42"),Vt(e,"1#",-18.4,2.3,12.9,.9,.6,"#2f4a42","#e9e4d6"),e}function Rg(s,e,t,n,i,r,a,o){let l=_t(s,e,t,0,n);A(l,0,.17,0,i+2,.34,r+2,"stone",.1),A(l,0,a/2,0,i,a,r,"concrete",.18),A(l,0,1,0,i+.12,1.8,r+.12,"dark"),A(l,0,a-1.55,r/2+.035,i-.5,1.7,.08,"glassLight"),A(l,0,a-1.55,-r/2-.035,i-.5,1.7,.08,"glass");for(let _=-i/2+.25;_<i/2;_+=.78)A(l,_,a/2+.9,r/2+.13,.09,a-1.6,.28,o===2?"metal":"terra"),A(l,_,a/2+.9,-r/2-.13,.09,a-1.6,.28,"metal");for(let _=-r/2;_<=r/2;_+=.8)A(l,i/2+.12,a/2,_,.28,a-.3,.09,o===2?"metal":"terra"),A(l,-i/2-.12,a/2,_,.28,a-.3,.09,"metal");A(l,0,a+.08,0,i+1,.25,r+1,"ivory",.1);let c=a+.24;A(l,0,a+.21,0,i-.4,.06,r-.4,"roof");for(let _=-i/2+1;_<i/2;_+=1.8)A(l,_,c+.022,0,.035,.045,r-.6,"metal");for(let _ of[-r/2+.04,r/2-.04])A(l,0,a+.31,_,i+.4,.18,.18,"ivory",.035);for(let _ of[-i/2+.04,i/2-.04])A(l,_,a+.31,0,.18,.18,r,"ivory",.035);let h=o===2?[[-4,-7,8],[4,-7,8],[-4,6,8],[4,6,8]]:[[-14,8.5,5],[0,8.5,5],[14,8.5,5]];for(let[_,S,b]of h){let P=_t(l,"rooflight",_,c,S);A(P,0,.14,0,2.8,.28,b+.4,"dark",.035),A(P,0,.302,0,2.55,.045,b+.15,"roofGlass",.015);for(let y of[-1,1])A(P,y*1.34,.33,0,.09,.065,b+.3,"metal");for(let y=-b/2;y<=b/2;y+=b/4)A(P,0,.335,y,2.7,.065,.075,"metal")}if(o===2)for(let _ of[-21,10])Cg(l,_,c+.34,-10,6,4,c);else Cg(l,-18,c+.34,-10,15,2,c);for(let _=-i/2+6;_<i/2-3;_+=10)o===2&&_>17||(LS(l,_,r/2),Vt(l,`${o===2?"A":"B"}${String(Math.round((_+i/2-6)/10)+1).padStart(2,"0")}`,_,4.55,r/2+.535,1.3,.28,"#496155"));for(let _ of[-1,1]){A(l,0,a-.2,_*(r/2+.6),i+.6,.2,.22,"metal",.04);for(let S=-i/2+1.1;S<i/2;S+=10){let b=_*(r/2+.56);He(l,S,a/2+.1,b,.085,a-.6,"metal",10);for(let P=1.6;P<a-.5;P+=2.4)A(l,S,P,b-_*.1,.24,.05,.2,"dark");A(l,S,.48,b+_*.12,.2,.12,.32,"metal",.03)}}for(let _ of[-1,1])for(let S of[-1,1])A(l,_*(i/2+.17),a/2+.05,S*(r/2+.17),.38,a-.1,.38,"metal",.02);let d=-r/2+6.5,u=-i/2-.3;A(l,u,1.45,d,.3,2.7,1.5,"ivory",.03),A(l,u-.1,1.35,d,.12,2.35,1.15,"dark",.02),A(l,u-.2,1.3,d+.4,.08,.05,.22,"metal"),A(l,u-.6,2.95,d,1.2,.1,1.9,"dark",.03),A(l,u-.12,3.25,d,.14,.2,.26,"lamp",.02);for(let _ of[-1,1])kt(l,[[u-.05,3.7,d+_*.8],[u-1.15,3,d+_*.8]],.018,"metal",!1);for(let _=0;_<3;_++)A(l,u-.6-_*.3,.38-_*.12,d,.32,.12,1.6,"stone",.02);let f=-r/2+3,p=-i/2-.72;for(let _ of[-1,1])A(l,p,a/2+.7,f+_*.24,.06,a+1.2,.06,"metal");for(let _=.6;_<a+1;_+=.3)A(l,p,_,f,.035,.035,.48,"metal");for(let _=2.6;_<a+1.1;_+=.9)gn(l,p-.32,_,f,.36,.022,"metal");for(let _ of[-.9,0,.9])A(l,p-.32-Math.cos(_)*.36,(a+3.7)/2,f+Math.sin(_)*.36,.04,a-1.5,.04,"metal");let x=a+.24,m=-i/2+1.7,g=o===2?11:11.6,M=o===2?12.5:12.9;A(l,m,x+.06,-r/2+3,1.6,.12,1.6,"dark",.03),A(l,m,x+.15,-r/2+3,1.45,.06,1.45,"metal",.02),A(l,(m+i/2-3)/2,x+.035,g,i/2-3-m,.05,.7,"paving"),A(l,m,x+.035,(-r/2+3.8+g)/2,.7,.05,g+r/2-3.8,"paving");let w=(o===2?[-20,-12,0,12,20]:[-18,-10.5,-4,4,10.5,18]).map(_=>[_,M]);for(let[_,S]of w){A(l,_,x+.12,S,1.1,.24,1.1,"dark",.04),He(l,_,x+.6,S,.3,.75,"metal",16),He(l,_,x+1.14,S,.42,.36,"metal",20,.2),He(l,_,x+1.38,S,.18,.12,"metal",16,.04);for(let b=0;b<12;b++){let P=A(l,_+Math.cos(b*Math.PI/6)*.36,x+1.13,S+Math.sin(b*Math.PI/6)*.36,.025,.34,.1,"metal");P.rotation.y=-b*Math.PI/6+.35}}if(Vt(l,`${o===2?"2#  \u751F\u4EA7\u8F66\u95F4 A":"3#  \u751F\u4EA7\u8F66\u95F4 B"}`,-i/4,a-3.35,r/2+.3,i*.3,.9,"#29413a"),o===3){A(l,-3.5,11.88,1,23,.22,6.2,"roof",.06);for(let _ of[-2.15,4.15])A(l,-3.5,12.002,_,23.2,.025,.09,"amber");for(let _ of[-15.1,8.1])A(l,_,12.002,1,.09,.025,6.4,"amber")}return l}function FS(s){let e=_t(s,"building/energy-center",35,0,18);A(e,0,.2,-1.6,32,.4,23.8,"stone",.15),A(e,0,.24,-3,30,.24,20,"concrete",.04);for(let t of[-13,7])A(e,0,3.5,t,30,7,.3,"concrete",.06),A(e,0,1,t+(t>0?.18:-.18),30.15,1.6,.12,"dark");for(let t of[-15,15])A(e,t,3.5,-3,.3,7,20,"concrete",.06),A(e,t+Math.sign(t)*.18,1,-3,.12,1.6,20,"dark");for(let t of[-9,7]){let n=_t(e,"plant/heat-exchanger-"+t,t,.4,-4);A(n,0,.16,0,5.4,.3,5.2,"dark",.09);for(let i=-1.75;i<=1.75;i+=.14)A(n,0,1.65,i,2.8,2.65,.065,"metal",.025);for(let i of[-1.9,1.9]){A(n,0,1.65,i,3.3,3.05,.2,"pump",.1);for(let r of[-1.4,1.4])He(n,r,.26,i,.12,.34,"metal",6),kt(n,[[r,.5,-2.05],[r,.5,2.05]],.07,"metal"),kt(n,[[r,2.8,-2.05],[r,2.8,2.05]],.07,"metal")}for(let i of[-.85,.85])for(let r of[.75,2.45]){let a=He(n,i,r,2.16,.25,.36,"metal",24);a.rotation.x=Math.PI/2,gn(n,i,r,2.35,.28,.05,"metal",[0,0,0])}kt(e,[[t-.85,2.85,-1.65],[t-.85,3.8,-.9],[t-.85,4.7,0],[t-.85,4.7,6.3]],.14,"pipe"),kt(e,[[t+.85,1.15,-1.65],[t+.85,1.15,-.4],[t+.85,4.35,.4],[t+.85,4.35,6.3]],.14,"copper"),A(e,t,.382,-4,7,.015,7,"paving");for(let i of[-7.6,-.4])A(e,t,.393,i,7.2,.013,.07,"amber")}for(let t of[-12,0,12])for(let n of[-10,4])A(e,t,3.4,n,.22,6.4,.24,"dark");for(let t of[-10,4])A(e,0,6.52,t,29,.25,.2,"dark");for(let t of[-12,0,12])A(e,t,6.5,-3,.2,.25,19,"dark");for(let[t,n]of[[4.7,"pipe"],[4.35,"copper"]])kt(e,[[-12,t,6.3],[-8,t,6.3],[8,t,6.3],[12,t,6.3],[13,t,5.5],[13,t,-10]],.18,n);A(e,0,.38,-3,.62,.05,17,"dark");for(let t=-11;t<6;t+=.2)A(e,0,.417,t,.58,.02,.03,"metal");for(let t of[-4,3]){let n=He(e,t,1.3,-10.3,.77,3.2,"metal",40);n.rotation.z=Math.PI/2;for(let i of[-1.1,1.1])gn(e,t+i,1.3,-10.3,.79,.045,"metal",[0,Math.PI/2,0]),A(e,t+i,.52,-10.3,.28,.5,1.5,"dark",.04)}for(let t=-14;t<=14;t+=7)A(e,t,.09,12,.75,.18,.8,"stone",.04),A(e,t,3.9,12,.3,7.6,.4,"copper"),A(e,t,7.5,6,.22,.32,13,"dark");A(e,0,7.7,1,31.8,.32,30,"ivory",.16);for(let t=-14;t<15;t+=.65)A(e,t,7.91,1,.035,.06,28.5,"metal");for(let t=-10;t<=10;t+=10){A(e,t,8.12,-3,7.5,.4,8,"dark",.12),He(e,t,8.65,-3,2.1,1.1,"metal",40),He(e,t,9.24,-3,1.85,.12,"black",40),gn(e,t,9.34,-3,1.75,.055,"metal"),gn(e,t,9.34,-3,1.35,.035,"metal"),gn(e,t,9.34,-3,.85,.035,"metal");for(let n=0;n<16;n++){let i=n*Math.PI/8;A(e,t,9.35,-3,.035,.03,3.45,"metal",0,i)}}for(let t of[-11,11])He(e,t,3.2,8.8,1.35,5.8,"metal",40),gn(e,t,1.3,8.8,1.36,.06),gn(e,t,4.9,8.8,1.36,.06),kt(e,[[t,5.8,8.8],[t,6.5,8.8],[t+2,6.5,8.8],[t+2,1,8.8]],.13,"pipe");Vt(e,"4#  \u80FD\u6E90\u4E2D\u5FC3",0,5.4,7.18,7,1.1,"#a19370");for(let t=-13;t<=13;t+=1.1)A(e,t,3,7.25,.3,3.2,.12,"metal");for(let t=-12;t<7;t+=2)A(e,15.175,4.15,t,.018,5.5,.015,"metal");return A(e,15.2,1.63,2,.18,3.1,2.45,"dark",.045),A(e,15.31,1.63,2,.025,2.92,2.25,"metal",.02),A(e,15.37,1.4,2.77,.07,.32,.05,"dark",.015),Vt(e,"4#",15.18,5,2,1.4,1,"#829081",null,Math.PI/2),e}function Pg(s){let e=[US(s),Rg(s,"building/production-a",-32,-24,52,32,10.2,2),Rg(s,"building/production-b",29,-30,44,28,11.6,3),FS(s)],t=_t(s,"building/gatehouse",13,0,58.8);A(t,0,.15,0,7,.3,4.2,"stone",.1),A(t,0,1.7,0,6,3.2,3.6,"glass",.25),A(t,0,.55,0,6.2,.8,3.8,"terra",.12),A(t,0,3.45,0,8,.25,4.6,"ivory",.1);for(let n of[-2.8,0,2.8])for(let i of[-1.83,1.83])A(t,n,1.95,i,.07,2.6,.08,"copper");A(t,-3.03,1.55,0,.08,2.75,1.2,"metal",.025),A(t,-3.08,1.72,0,.03,2.24,1.04,"glass"),A(t,-3.12,1.3,.38,.06,.25,.04,"copper"),A(t,-13,4.4,-2,20,.35,5,"dark",.14);for(let n of[-22,-4])A(t,n,.14,-2,.65,.28,.65,"stone",.05),A(t,n,2.2,-2,.22,4.4,.22,"copper");return Vt(t,"\u6765\u9716\u667A\u9020\u56ED",-13,4.38,.53,6,.55,"#f1e4c2"),e.push(t),e}function OS(){let s=new Se.IcosahedronGeometry(1,1),e=s.attributes.position,t=new Se.Vector3,n=Array.from({length:5},()=>[new Se.Vector3($e()-.5,$e()*.6-.1,$e()-.5).normalize(),.14+$e()*.12]);for(let r=0;r<e.count;r++){t.fromBufferAttribute(e,r).normalize();let a=.9;for(let[o,l]of n)a+=l*Math.max(0,t.dot(o))**3;a+=Math.sin(t.x*7.1+t.z*3.3)*Math.cos(t.y*5.7)*.05,t.y<-.4&&(a*=.84),t.multiplyScalar(a),e.setXYZ(r,t.x,t.y,t.z)}s.computeVertexNormals();let i=s.attributes.normal;for(let r=0;r<i.count;r++){t.fromBufferAttribute(e,r).normalize();let a=new Se.Vector3().fromBufferAttribute(i,r);a.lerp(t,.55).normalize(),i.setXYZ(r,a.x,a.y,a.z)}return s}function Ig(s){let e=_t(s,"site/plinth");e.userData.layer="ground",A(e,0,-.15,0,164,.16,124,"stone",.12),A(e,0,-.03,0,162,.16,122,"paving",.35);let t=_t(s,"site/district");t.userData.layer="ground",A(t,0,-.3,0,1100,.35,1100,"districtRoof");for(let E of[-96,96])A(t,E,-.09,0,14,.06,620,"asphalt");for(let E of[-76,76,-190,192])A(t,0,-.089,E,620,.06,14,"asphalt");A(t,0,-.065,68,8,.1,16,"asphalt");for(let E of[-85.2,85.2])A(t,E,-.025,0,6,.15,130,"paving",.08);for(let E of[-65.7,65.7])for(let[N,V]of[[-88,-5],[5,88]])A(t,(N+V)/2,-.025,E,V-N,.15,6,"paving",.08);for(let E=-300;E<=300;E+=8){for(let N of[-76,76,-190,192])if(Math.abs(Math.abs(E)-96)>14)for(let V of[-1,1])A(t,E,-.052,N+V*.23,4,.018,.12,"white");for(let N of[-96,96])if(![-190,-76,76,192].some(V=>Math.abs(E-V)<14))for(let V of[-1,1])A(t,N+V*.23,-.052,E,.12,.018,4,"white")}for(let E of[-106.5,-85.5,85.5,106.5])for(let N of[-76,76])for(let V=-5;V<=5;V++)A(t,E,-.048,N+V*.95,3.2,.02,.5,"white");for(let E of[-96,96])for(let N of[-86.5,-65.5,65.5,86.5])for(let V=-5;V<=5;V++)A(t,E+V*.95,-.048,N,.5,.02,3.2,"white");for(let E of[-88.5,88.5,-103.5,103.5])for(let[N,V]of[[-178,-90],[-62,62],[90,178]])A(t,E,.02,(N+V)/2,.28,.24,V-N,"stone",.04);for(let E of[-83.5,-68.5,68.5,83.5])for(let[N,V]of[[-250,-110],[-82,-5],[5,82],[110,250]])A(t,(N+V)/2,.02,E,V-N,.24,.28,"stone",.04);function n(E,N,V,ce,pe){let H=_t(t,"district/industrial-building",E,0,N);A(H,0,.05,0,V+6,.24,ce+6,"paving",.08),A(H,0,pe/2,0,V,pe,ce,"districtWall");for(let $ of[-1,1]){for(let fe of[2.9,6.7])fe<pe-1&&A(H,0,fe,$*(ce/2+.025),V-.7,1.55,.055,"districtGlass");for(let fe=-V/2+1;fe<V/2;fe+=3.5)A(H,fe,pe/2,$*(ce/2+.1),.15,pe,.26,"districtWall");A(H,$*(V/2-.13),pe+.36,0,.26,.6,ce,"districtWall"),A(H,0,pe+.36,$*(ce/2-.13),V,.6,.26,"districtWall")}A(H,0,pe+.05,0,V-.6,.2,ce-.6,"districtRoof");for(let $=-V/2+5;$<V/2-3;$+=10)A(H,$,pe+.35,0,3.2,.5,ce*.64,"districtGlass"),A(H,$,pe+.64,0,3.1,.08,ce*.64,"metal");for(let $ of[-V*.27,V*.27])A(H,$,pe+.55,-ce*.28,4,.7,3,"districtWall"),A(H,$,pe+.94,-ce*.28,3.6,.08,2.6,"dark");for(let $=-V/2+7;$<V/2;$+=12)A(H,$,2.1,ce/2+.04,4.4,4.2,.12,"districtGlass"),A(H,$,4.4,ce/2+1.7,6,.16,3.4,"districtWall");for(let $ of[-1,1]){A(H,0,pe+.68,$*(ce/2-.13),V+.1,.05,.36,"metal"),A(H,$*(V/2-.13),pe+.68,0,.36,.05,ce+.1,"metal");for(let fe=-V/2+1.2;fe<V/2;fe+=12)He(H,fe,pe/2,$*(ce/2+.32),.08,pe,"metal",8)}for(let $=-V/2+3;$<V/2-2;$+=7)for(let fe of[ce*.36])He(H,$,pe+.5,fe,.28,.7,"metal",10),He(H,$,pe+.92,fe,.4,.16,"metal",10,.12)}for(let E of[[-145,-31,53,60,11],[148,-28,54,64,12],[-48,-131,61,60,13],[37,-132,64,61,10],[145,-133,55,58,14],[-145,-132,52,60,12],[-142,129,52,63,8],[145,130,56,61,10],[-45,-244,66,61,18],[42,-246,65,65,15]])n(...E);A(t,0,0,130,156,.24,73,"grass",.3),A(t,0,.14,130,5,.12,73,"paving",.06),A(t,0,.14,115,156,.12,4,"paving",.06),A(t,42,.14,142,51,.2,34,"stone",.15),A(t,42,.25,142,49,.03,32,"water",.1);for(let E of[124.7,159.3])A(t,42,.32,E,52,.18,.6,"paving");for(let E of[16.2,67.8])A(t,E,.32,142,.6,.18,35,"paving");for(let E=126;E<=158;E+=8)A(t,10,.5,E,4,.38,.85,"dark",.04),A(t,10,.74,E,4.1,.09,.9,"copper",.02);let i=_t(s,"site/mobility");i.userData.layer="ground";for(let E of[-73,73])A(i,E,.08,0,8,.07,114,"asphalt",.3);A(i,0,.081,-53,150,.07,8,"asphalt",.2),A(i,0,.081,51,150,.07,6,"asphalt",.2),A(i,0,.08,1,137,.07,6.8,"asphalt"),A(i,0,.08,0,6,.07,102,"asphalt"),A(i,0,.08,55.5,8,.07,13,"asphalt");for(let E=-48;E<=48;E+=5)for(let N of[-73,73])A(i,N,.128,E,.13,.014,2.25,"white");for(let E=-67;E<=67;E+=5)for(let N of[-53,51,1])Math.abs(E)<6||N===51&&Math.abs(E+31)<5||A(i,E,.13,N,2.25,.014,.13,"white");for(let E=-46;E<47;E+=5)E>-7&&E<10||A(i,0,.13,E,.13,.014,2.25,"white");for(let E of[-68.65,68.65])for(let[N,V]of[[-48.5,-3.1],[5.1,48.5]])A(i,E,.16,(N+V)/2,.28,.23,V-N,"ivory",.06);for(let[E,N]of[[-68.5,-3.5],[3.5,68.5]])A(i,(E+N)/2,.16,-48.65,N-E,.23,.28,"ivory",.06);for(let[E,N]of[[-68.5,-56.5],[-39.5,-35],[-27,-5],[5,15.5],[58,68.5]])A(i,(E+N)/2,.16,47.65,N-E,.23,.28,"ivory",.06);for(let E of[-3.35,3.35])for(let[N,V]of[[-48,-3.4],[8,47]])A(i,E,.16,(N+V)/2,.2,.23,V-N,"ivory",.045);for(let E of[-.9,6.6])for(let N=-3;N<=3;N++)A(i,N*.8,.14,E,.5,.016,1.8,"white");for(let E of[-66.5,66.5])for(let N=-3;N<=3;N++)A(i,E,.14,1+N*.95,2,.016,.55,"white");for(let E=-3;E<=3;E++)A(i,-31,.14,51+E*.78,4,.016,.44,"white");A(i,0,.17,58.2,.55,.24,7.5,"stone",.1),A(i,-2,.135,56.4,2.7,.015,.16,"white");for(let E of[-2,2]){let N=_t(i,"gate-lane-arrow",E,.14,60.4);N.rotation.y=E<0?Math.PI:0,A(N,0,0,0,.13,.014,1.1,"white");for(let V of[-1,1])A(N,V*.19,0,.38,.12,.014,.6,"white",0,-V*.7)}for(let[E,N,V,ce]of[[-14,43,14,7],[-62,22,8,36],[60,22,9,38],[-62,-25,8,38],[59,-32,8,29],[-10,21,5.5,29],[16,23,1.6,23]])A(e,E,.14,N,V,.17,ce,"grass",.3);let r=_t(s,"site/garden");r.userData.layer="landscape",A(r,10.8,.09,23,11.6,.05,31,"paving",.12),A(r,10.8,.19,24,5.2,.15,17,"stone",.12),A(r,10.8,.273,24,4.72,.016,16.52,"water",.08);for(let E of[8.32,13.28])A(r,E,.29,24,.24,.1,17,"ivory",.04);for(let E of[15.62,32.38])A(r,10.8,.29,E,5.2,.1,.24,"ivory",.04);A(r,10.8,.29,12,4.2,.32,2,"stone");for(let[E,N]of[[9.3,11],[10.8,12.5],[12.3,11]]){He(r,E,.45+N/2,12,.05,N,"metal",12,.035),He(r,E,.5,12,.12,.12,"metal",12);let V=new Se.Mesh(new Se.SphereGeometry(.07,10,6),Mt.metal);V.position.set(E,.45+N+.06,12),r.add(V)}for(let E=16;E<=31;E+=5)A(r,16,.36,E,1.5,.45,3.8,"stone",.1),A(r,16,.69,E,1.28,.25,3.5,"hedge",.12);A(e,-31,.09,43.1,16,.05,9,"paving",.06),A(e,-23,.09,46.6,2,.05,1.2,"paving",.04),A(i,-48,.08,44.5,16.8,.07,7,"asphalt",.1),A(i,36.75,.08,44.5,42.5,.07,7,"asphalt",.1);for(let E of[-48,36.75]){let N=E<0?16.8:42.5;A(i,E,.125,41.65,N,.025,.18,"dark");for(let V=E-N/2+.15;V<E+N/2;V+=.25)A(i,V,.14,41.65,.07,.01,.15,"metal")}A(e,-42,.15,45.6,3.4,.22,3.8,"stone",.09),A(e,-42,.271,45.6,3.1,.025,3.5,"grass",.05);for(let[E,N]of[[-7,15],[-7,28],[-19,39.8],[10.8,35.8]]){A(r,E,.46,N,3.3,.23,.85,"dark",.07);for(let V=-4;V<=4;V++)A(r,E+V*.32,.62,N,.25,.08,.83,"copper",.025);for(let V of[-1.2,1.2])A(r,E+V,.27,N,.12,.52,.6,"dark",.02)}let a=_t(s,"site/trees");a.userData.layer="landscape";let o=Array.from({length:6},()=>[]),l=[],c=[];function h(E,N,V=4.8,ce=1.6,pe=!1){if(pe){A(e,E,.064,N,1.15,.025,1.15,"bark");for(let H of[-1,1])A(e,E+H*.61,.082,N,.09,.065,1.3,"stone"),A(e,E,.082,N+H*.61,1.13,.065,.09,"stone")}l.push({x:E,y:V*.36,z:N,h:V*.72});for(let H=0;H<6;H++){let $=H/6*Math.PI*2+$e()*.4;c.push({from:Ut(E,V*(.35+$e()*.2),N),to:Ut(E+Math.cos($)*ce*.72,V*(.72+$e()*.2),N+Math.sin($)*ce*.72)})}for(let H=0;H<14;H++){let $=$e()*Math.PI*2,fe=Math.sqrt($e())*ce*.65,Oe=V*.53+$e()*V*.33;o[Math.floor($e()*6)].push({x:E+Math.cos($)*fe,y:Oe,z:N+Math.sin($)*fe,sx:ce*(.42+$e()*.38),sy:ce*(.45+$e()*.55),sz:ce*(.42+$e()*.38),r:$e()*6})}}for(let E=-55;E<=57;E+=6.3)for(let N of[-79,79])h(N+($e()-.5)*.65,E,4.5+$e()*2,1.8,!0);for(let E=-72;E<=73;E+=7)for(let N of[-59,59])N>0&&Math.abs(E)<19||h(E,N,4.4+$e()*1.8,1.65,!0);for(let[E,N]of[[-61,10],[-61,20],[-61,31],[-17.5,43.5],[-9,43.5],[-10,10],[-10,33],[15.8,9],[15.8,37],[60,34],[60,24],[60,8],[59,-42],[59,-22],[-61,-35],[-61,-12]])h(E,N,4.4+$e()*1.5,1.5);for(let E=-174;E<=174;E+=15)for(let N of[-109,109])Math.abs(Math.abs(E)-76)<16||h(N,E,5.5+$e()*1.8,2.2);for(let E=-75;E<=75;E+=13)for(let N of[-88,88])h(E,N,5.5+$e()*1.5,2.1);for(let E of[-69,-48,-26])for(let N of[105,127,151,166])h(E+$e()*3,N,5.6+$e()*2,2.6);for(let E of[101,168])for(let N of[15,40,65])h(N,E,5.5,2.2);h(-42,44.8,5.2,1.9);for(let E=0;E<14;E++)o[1].push({x:-42+($e()-.5)*2.2,y:.45,z:44.8+($e()-.5)*4.2,sx:.3,sy:.26,sz:.3,r:$e()*6});for(let[E,N,V,ce]of[[-50,39.8,10,1],[-17,40.3,6,1],[-59.2,22,1.2,30],[-12.2,22,1,22],[60,-32,1.2,20],[-61.5,-25,1.2,24]])for(let pe=0;pe<Math.max(V,ce)*1.6;pe++)o[pe%2?0:3].push({x:E+($e()-.5)*V,y:.42,z:N+($e()-.5)*ce,sx:.42,sy:.36,sz:.42,r:$e()*6});for(let[E,N,V,ce]of[[-48,39.5,15,1],[-14,46,13,1],[61,21,1.2,30],[-61,21,1.2,30],[16,23,1,19]])for(let pe=0;pe<Math.max(V,ce)*4;pe++){let H=E+($e()-.5)*V,$=N+($e()-.5)*ce;o[2].push({x:H,y:.35,z:$,sx:.36,sy:.3,sz:.38,r:$e()*6})}let d=new Se.Object3D,u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d");for(let E=0;E<1250;E++){let N=$e()*Math.PI*2,V=Math.pow($e(),.6)*116,ce=128+Math.cos(N)*V,pe=128+Math.sin(N)*V;f.save(),f.translate(ce,pe),f.rotate($e()*6.28),f.fillStyle=["#5e7943","#71904e","#8a9e60","#496436","#93a568"][Math.floor($e()*5)],f.beginPath(),f.ellipse(0,0,2+$e()*4,1.4+$e()*2,0,0,Math.PI*2),f.fill(),f.restore()}let p=new Se.CanvasTexture(u);p.colorSpace=Se.SRGBColorSpace,p.anisotropy=8;let x=new Se.MeshStandardMaterial({name:"leaf-clusters",map:p,alphaTest:.45,side:Se.DoubleSide,roughness:.96,metalness:0,color:"#aec195"}),m=o.flat(),g=new Se.InstancedMesh(new Se.PlaneGeometry(1,1),x,m.length*3),M=0;for(let E of m)for(let N=0;N<3;N++)d.position.set(E.x,E.y,E.z),d.scale.set(E.sx*2.2,E.sy*2.2,1),d.rotation.set(($e()-.5)*1.7,E.r+N*Math.PI/3,($e()-.5)*.6),d.updateMatrix(),g.setMatrixAt(M++,d.matrix);g.castShadow=g.receiveShadow=!0,g.instanceMatrix.needsUpdate=!0,a.add(g);let w=OS(),_=new Se.Color;for(let E=0;E<6;E++){let N=o[E],V=new Se.InstancedMesh(w,Mt["leaf"+E],N.length);for(let ce=0;ce<N.length;ce++){let pe=N[ce];d.position.set(pe.x,pe.y,pe.z),d.scale.set(pe.sx*.2,pe.sy*.24,pe.sz*.2),d.rotation.set(($e()-.5)*.5,pe.r,.15+($e()-.5)*.4),d.updateMatrix(),V.setMatrixAt(ce,d.matrix);let H=.86+$e()*.2+Math.min(1,pe.y/7)*.07;_.setRGB(H*(.98+$e()*.06),H,H*(.94+$e()*.06)),V.setColorAt(ce,_)}V.instanceColor&&(V.instanceColor.needsUpdate=!0),V.castShadow=V.receiveShadow=!0,V.instanceMatrix.needsUpdate=!0,a.add(V)}let S=new Se.InstancedMesh(new Se.CylinderGeometry(.055,.14,1,7),Mt.bark,l.length);l.forEach((E,N)=>{d.position.set(E.x,E.y,E.z),d.rotation.set(0,0,0),d.scale.set(1,E.h,1),d.updateMatrix(),S.setMatrixAt(N,d.matrix)}),S.castShadow=!0,a.add(S);let b=new Se.InstancedMesh(new Se.CylinderGeometry(.024,.062,1,7),Mt.bark,c.length);c.forEach((E,N)=>{d.position.copy(E.from).lerp(E.to,.5);let V=E.to.clone().sub(E.from);d.quaternion.setFromUnitVectors(Ut(0,1,0),V.clone().normalize()),d.scale.set(1,V.length(),1),d.updateMatrix(),b.setMatrixAt(N,d.matrix)}),b.castShadow=!0,a.add(b);let P=_t(s,"site/boundary");P.userData.layer="landscape";for(let E=-60;E<=60;E+=3)for(let N of[-81,81])A(P,N,.6,E,.07,1.2,.07,"dark"),E<60&&(A(P,N,1.1,E+1.5,.04,.04,3,"dark"),A(P,N,.4,E+1.5,.035,.035,3,"metal"));for(let E=-80;E<80;E+=3)for(let N of[-61,61])N>0&&Math.abs(E)<18||(A(P,E,.6,N,.07,1.2,.07,"dark"),A(P,E+1.5,1.1,N,3,.04,.04,"dark"));let y=_t(s,"site/vehicles");y.userData.layer="landscape";function R(E,N,V,ce=0){let pe=_t(y,"electric-vehicle",E,.075,N);pe.rotation.y=ce,A(pe,0,.59,0,1.8,.54,4.15,V,.22),A(pe,0,1.04,-.18,1.55,.61,2.05,"glass",.25),A(pe,0,1.36,-.23,1.46,.13,1.15,V,.06);for(let H of[-.78,.78]){A(pe,H,1.05,-.15,.045,.54,.065,"dark",.025),A(pe,H,.78,-.25,.026,.035,2.35,"metal"),A(pe,H*1.17,1,.55,.18,.11,.24,V,.045);for(let $ of[-.65,.32])A(pe,H*1.06,.86,$,.035,.027,.18,"metal",.01)}A(pe,0,.6,2.104,.47,.13,.016,"dark",.02),A(pe,0,.32,1.85,1.45,.08,.18,"dark",.04);for(let H of[-.86,.86])for(let $ of[-1.3,1.3]){let fe=He(pe,H,.38,$,.34,.16,"rubber",24);fe.rotation.z=Math.PI/2;let Oe=He(pe,H*1.08,.38,$,.2,.025,"metal",16);Oe.rotation.z=Math.PI/2}for(let H of[-.57,.57])A(pe,H,.67,2.06,.4,.1,.05,"lamp",.035),A(pe,H,.68,-2.06,.42,.07,.035,"red",.015);return pe}A(y,-46,.128,45,3.2,.012,5.7,"accessible");let D=Vt(y,"\u65E0\u969C\u788D",-46,.14,46.2,1.4,.45,"#f1f4f6");D.rotation.x=-Math.PI/2,A(e,-42,.16,44.8,3,.2,5.2,"stone"),A(e,-42,.27,44.8,2.7,.03,4.9,"grass");for(let[E,N]of[-54,-50,-46].entries()){for(let ce of[-1,1])A(y,N+ce*1.65,.13,45,.08,.012,5.8,"white");A(y,N,.13,42.1,3.3,.012,.08,"white"),A(y,N,.22,42.55,1.45,.2,.18,"rubber",.035);let V=Vt(y,String(E+1).padStart(2,"0"),N,.14,47.55,.65,.35,"#e6e5d3");V.rotation.x=-Math.PI/2,E<2&&R(N,44.7,E%2?"dark":"ivory")}for(let E=19;E<=54;E+=7){A(y,E,.13,44.9,3.1,.015,5.6,"parkingPaint",.04);for(let V of[-1,1])A(y,E+V*1.65,.145,44.9,.08,.012,5.8,"white");A(y,E,.145,42,3.3,.012,.08,"white"),A(y,E,.22,42.55,1.45,.2,.18,"rubber",.035);let N=Vt(y,"EV",E,.152,47.35,.75,.38,"#dce7cc");N.rotation.x=-Math.PI/2,E!==33&&E!==47&&R(E,44.8,["ivory","metal","paintBlue","dark"][(E-19)/7%4],Math.PI)}R(-75,25,"ivory"),R(75,-18,"dark",Math.PI);for(let[E,N,V,ce]of[[-52,72,"ivory",Math.PI/2],[32,80,"paintBlue",-Math.PI/2],[78,72,"dark",Math.PI/2],[92,-21,"ivory",0],[100,30,"metal",Math.PI],[-92,19,"dark",Math.PI],[-100,-40,"ivory",0],[14,-72,"dark",-Math.PI/2]])R(E,N,V,ce);let F=_t(t,"district/bus-stop",-30,0,86);for(let E of[-4.5,4.5])A(F,E,1.6,0,.14,3.2,.14,"dark");A(F,0,3.25,0,10,.18,3.2,"ivory",.1),A(F,0,1.65,-1.15,9,2.7,.06,"districtGlass"),A(F,0,.55,-.5,7,.12,.65,"copper",.03);for(let[E,N]of[[-52,-5.25],[-32,-5.25],[23,-12.5]]){let V=_t(y,"logistics-van",E,.085,N);A(V,0,1.24,-.4,1.95,1.72,3.1,"ivory",.1),A(V,0,.98,1.6,1.9,1.35,1.1,"ivory",.14),A(V,0,1.43,2.11,1.66,.55,.07,"glass",.055),A(V,0,.54,2.18,1.8,.15,.12,"dark",.04),A(V,0,.82,2.2,.72,.2,.02,"black",.02),A(V,0,.39,0,1.6,.17,4.2,"dark",.04);for(let ce of[-1,1]){A(V,ce*.961,1.38,1.57,.04,.52,.78,"glass",.04),A(V,ce*1.075,1.43,1.87,.14,.2,.16,"dark",.025),A(V,ce*.975,.99,1.52,.035,.045,.19,"metal"),A(V,ce*.67,.93,2.2,.35,.17,.02,"lamp",.025),A(V,ce*.7,.65,-1.97,.22,.16,.025,"red",.02),A(V,ce*.49,1.24,-1.962,.94,1.57,.028,"metal",.03),A(V,ce*.11,1.24,-1.985,.024,1.32,.025,"dark"),A(V,ce*.985,.57,-.4,.035,.12,2.8,"metal");for(let pe of[-1.28,1.48]){let H=He(V,ce*.97,.44,pe,.41,.16,"rubber",24);H.rotation.z=Math.PI/2;let $=He(V,ce*1.061,.44,pe,.23,.025,"metal",16);$.rotation.z=Math.PI/2}}Vt(V,"\u6765\u9716\u7269\u6D41",.995,1.47,-.4,1.4,.35,"#537660",null,Math.PI/2);for(let ce of[-1,1])A(y,E+ce*1.5,.135,N,.08,.016,4.6,"amber")}let B=_t(s,"site/civil");B.userData.layer="landscape";function G(E,N){A(B,E,.2,N,.6,.12,.6,"concrete"),He(B,E,.62,N,.13,.72,"hydrant",16),He(B,E,1.02,N,.16,.08,"hydrant",16);let V=new Se.Mesh(new Se.SphereGeometry(.13,14,8,0,Math.PI*2,0,Math.PI/2),Mt.hydrant);V.position.set(E,1.06,N),V.castShadow=!0,B.add(V);for(let ce of[0,Math.PI]){let pe=He(B,E+Math.cos(ce)*.17,.72,N+Math.sin(ce)*.17,.055,.14,"hydrant",10);pe.rotation.z=Math.PI/2}}for(let[E,N]of[[-67.9,-30],[-67.9,18],[67.9,-36],[67.9,12],[-40,-47.9],[10,-47.9],[-22,47.4],[62,47.4],[-4.1,-22],[4.1,14]])G(E,N);function z(E,N){He(B,E,.12,N,.36,.02,"dark",20),gn(B,E,.128,N,.375,.022,"metal");for(let V of[0,Math.PI/2])A(B,E,.132,N,.05,.008,.58,"metal",0,V);gn(B,E,.13,N,.2,.012,"metal")}for(let E=-44;E<=44;E+=16)z(1.2,E);for(let E=-60;E<=60;E+=20)z(E,-.2);for(let E of[-73,73])for(let N=-40;N<=40;N+=20)z(E+1.6,N+6);for(let E of[-73,73])for(let N of[-1,1])for(let[V,ce]of[[-48,-4],[6,48]])A(i,E+N*3.55,.128,(V+ce)/2,.12,.012,ce-V,"white");for(let[E,N]of[[-65,-4],[4,65]])for(let V of[-1,1])A(i,(E+N)/2,.128,1+V*3,N-E,.012,.12,"white"),A(i,(E+N)/2,.129,-53+V*3.55,N-E,.012,.12,"white");for(let E of[-73,73])for(let N of[-4.6,6.6])A(i,E+(N<0?-2:2),.131,N,3.6,.013,.32,"white");for(let E of[-69.3,69.3])for(let N=-45;N<=45;N+=18){A(B,E,.12,N,.36,.02,.75,"dark");for(let V=-.3;V<=.31;V+=.1)A(B,E,.132,N+V,.3,.01,.03,"metal")}for(let E=-60;E<=60;E+=24)for(let N of[-49.3,48.3]){A(B,E,.12,N,.75,.02,.36,"dark");for(let V=-.3;V<=.31;V+=.1)A(B,E+V,.132,N,.03,.01,.3,"metal")}function X(E,N,V){let ce=_t(B,"street-light",E,0,N);ce.rotation.y=V,A(ce,0,.1,0,.6,.2,.6,"concrete"),He(ce,0,3.4,0,.075,6.6,"dark",12,.05),kt(ce,[[0,6.5,0],[0,6.75,.2],[0,6.75,1.2]],.045,"dark"),A(ce,0,6.7,1.2,.36,.1,.7,"dark"),A(ce,0,6.64,1.2,.28,.012,.5,"lamp")}for(let E of[-50,-25,25,50])X(E,5.1,Math.PI);function te(E,N){let V=_t(B,"car-park-light",E,0,N);A(V,0,.25,0,.55,.5,.55,"concrete",.04),He(V,0,4.3,0,.07,7.6,"dark",12,.05),A(V,0,8.05,0,.12,.1,2.4,"dark",.02);for(let ce of[-1,1])A(V,0,8,ce*1.2,.42,.12,.62,"dark",.04),A(V,0,7.935,ce*1.2,.34,.012,.5,"lamp");A(V,0,1.1,.08,.16,.3,.06,"metal",.01)}for(let E of[29.5,43.5])te(E,41.2);for(let E of[-36,-16,20,40])X(3.9,E,-Math.PI/2);for(let E=-34.4;E<=-27.5;E+=1.35)He(B,E,.55,47.3,.08,.9,"metal",14),A(B,E,.93,47.3,.17,.03,.17,"dark");let K=_t(B,"cycle-shelter",-60,0,43.5);A(K,0,.11,0,3.4,.05,7.6,"paving");for(let E of[-3.4,0,3.4])He(K,-1.3,1.2,E,.06,2.2,"dark",10),A(K,-.4,2.28,E,2,.08,.1,"dark");A(K,-.3,2.36,0,2.6,.05,7.4,"roofGlass"),A(K,-1.35,1.5,0,.04,1.6,7.2,"districtGlass");for(let E=-3;E<=3.1;E+=.75)kt(K,[[.1,.14,E],[.1,.72,E],[.9,.72,E],[.9,.14,E]],.022,"metal",!1);let ue=_t(B,"box-substation",58.5,0,15);A(ue,0,.15,0,4.8,.3,3.4,"concrete"),A(ue,0,1.5,0,4,2.4,2.6,"districtWall"),A(ue,0,2.76,0,4.3,.12,2.9,"districtRoof");for(let E of[-1.3,0,1.3]){A(ue,E,1.35,1.31,1.1,1.9,.03,"districtRoof");for(let N=2.1;N<2.5;N+=.1)A(ue,E,N,1.33,.9,.03,.03,"dark")}Vt(ue,"\u7BB1\u53D8 10/0.4 kV",0,2.45,1.34,1.6,.24,"#2f3d38","#e3c95a");for(let[E,N]of["dark","paintBlue","hydrant","dark"].entries())A(B,47.5+E*.8,.55,-12.5,.62,1,.7,N,.05),A(B,47.5+E*.8,1.07,-12.5,.66,.05,.74,"dark");for(let E of[-80.1,80.1])A(B,E,.5,0,.9,1,116,"hedge",.3);for(let[E,N]of[[-78,-19],[19,78],[-78,78]])for(let V of N===78&&E===-78?[-60.1]:[60.1])A(B,(E+N)/2,.5,V,N-E,1,.9,"hedge",.3);let Z=_t(s,"site/people");Z.userData.layer="landscape";for(let[E,N]of[[-31,45.5],[-29.8,45],[-22,46.5],[7,38],[8,37.5],[8,59],[-6,13],[45,36],[-58,-5.5]]){He(Z,E,.95,N,.17,.75,"dark",12,.23);let V=new Se.Mesh(new Se.SphereGeometry(.15,12,8),Mt.stone);V.position.set(E,1.5,N),Z.add(V);for(let ce of[-.1,.1])A(Z,E+ce,.38,N,.12,.68,.15,"dark",.05)}let ne=_t(s,"site/pipe-network");ne.userData.layer="pipes";for(let[E,N]of[[29.55,"pipe"],[33.9,"copper"]]){kt(ne,[[23,.42,E],[27,.42,E],[45,.42,E],[48,.42,E],[49,.65,E],[49,2,E-2],[49,2,23]],.16,N);for(let V=24;V<=48;V+=4)A(ne,V,.13,E,.7,.26,.7,"concrete",.06),gn(ne,V,.42,E,.25,.04,"metal",[0,Math.PI/2,0])}for(let E of[27,33,39,45])kt(ne,[[E+.5,.2,30.375],[E+.5,.4,30.05],[E+.5,.42,29.55]],.115,"pipe"),kt(ne,[[E+.5,.35,32.26],[E+.5,.42,32.8],[E+.5,.42,33.9]],.09,"copper");let ae=_t(s,"site/signage");ae.userData.layer="landscape";for(let[E,N,V]of[[-65,7,"A \u7814\u53D1\u529E\u516C\u533A"],[63,-8,"B \u751F\u4EA7\u7269\u6D41\u533A"],[17,36,"C \u80FD\u6E90\u8BBE\u5907\u533A"]])A(ae,E,.9,N,.17,1.8,2.5,"dark",.06),Vt(ae,V,E+.094,1.2,N,2.05,.35,"#e2d5b3",null,Math.PI/2);return[e,i,r,a,P,y,B,Z,ne,ae,t]}function up(s,e,t,n,i=.4,r="z",a=8){for(let o=0;o<a;o++){let l=o*Math.PI*2/a,c;r==="x"?(c=He(s,e,t+Math.sin(l)*i,n+Math.cos(l)*i,.047,.07,"metal",6),c.rotation.z=Math.PI/2):r==="y"?c=He(s,e+Math.cos(l)*i,t,n+Math.sin(l)*i,.047,.07,"metal",6):(c=He(s,e+Math.cos(l)*i,t+Math.sin(l)*i,n,.047,.07,"metal",6),c.rotation.x=Math.PI/2)}}function Cc(s,e,t,n,i=.35,r="z",a="metal"){let o=i*.59,l=[[o+.008,-.055],[i-.008,-.055],[i,-.047],[i,.047],[i-.008,.055],[o+.008,.055],[o,.047],[o,-.047],[o+.008,-.055]].map(([d,u])=>new Se.Vector2(d,u)),c=new Se.LatheGeometry(l,80);c.rotateX(Math.PI/2);let h=new Se.Mesh(c,Mt[a]);return h.position.set(e,t,n),h.rotation.x=r==="y"?-Math.PI/2:0,h.rotation.y=r==="x"?Math.PI/2:0,h.castShadow=h.receiveShadow=!0,s.add(h),up(s,e+(r==="x"?.075:0),t+(r==="y"?.075:0),n+(r==="z"?.075:0),i*.78,r),h}function BS(s,e,t,n,i=.18){let r=He(s,e,t,n,i,.09,"metal",32);r.rotation.x=Math.PI/2;let a=He(s,e,t,n+.053,i*.88,.018,"ivory",32);a.rotation.x=Math.PI/2;for(let l=0;l<10;l++){let c=l/9*Math.PI*1.5+Math.PI*.75,h=A(s,e+Math.cos(c)*i*.68,t+Math.sin(c)*i*.68,n+.07,.012,i*.16,.007,"dark");h.rotation.z=c-Math.PI/2}let o=A(s,e+.035,t+.035,n+.08,.012,i*.65,.01,"red");o.rotation.z=-.7}function zS(s,e,t){A(s,0,.17,0,4.8,.34,1.95,"concrete",.1);for(let c of[-.7,.7])A(s,0,.43,c,4.4,.25,.22,"dark",.035);for(let c of[-1.9,1.9])for(let h of[-.67,.67])He(s,c,.6,h,.07,.18,"metal",6),gn(s,c,.57,h,.11,.025,"metal");let n=_t(s,"motor-and-coupling",-1.1,.98,0);n.userData.explode=[-1.4,.6,0];let i=He(n,0,0,0,.49,1.55,"pump",48);i.rotation.z=Math.PI/2;for(let c=0;c<22;c++){let h=c*Math.PI/11,d=A(n,0,Math.sin(h)*.5,Math.cos(h)*.5,1.35,.055,.1,"pump",.018);d.rotation.x=-h}for(let c of[-.83,.83])i=He(n,c,0,0,.5,.14,"pump",40),i.rotation.z=Math.PI/2,up(n,c+(c>0?.09:-.09),0,0,.4,"x");A(n,0,.6,0,.58,.28,.52,"pump",.06),A(n,0,.76,0,.62,.06,.55,"metal",.02);for(let c of[-.5,.5])A(n,c,-.46,0,.26,.23,1.1,"pump",.03);let r=_t(n,"motor-fan",-.92,0,0);r.userData.dynamic=!0;for(let c=0;c<8;c++){let h=A(r,0,0,0,.025,.08,.73,"dark",.02);h.rotation.x=c*Math.PI/4}t.push({object:r,axis:"x",assetId:e.id,speed:5});for(let c of[.2,.32,.44])gn(n,-.96,0,0,c,.013,"metal",[0,Math.PI/2,0]);for(let c=0;c<10;c++){let h=A(n,-.98,0,0,.02,.025,.93,"metal");h.rotation.x=c*Math.PI/5}let a=_t(s,"shaft-coupling",.13,.98,0);a.userData.explode=[0,.9,0],i=He(a,0,0,0,.19,.62,"metal",32),i.rotation.z=Math.PI/2;for(let c of[-.2,.2])i=He(a,c,0,0,.26,.12,"amber",32),i.rotation.z=Math.PI/2;let o=_t(s,"cast-volute",1,.99,0);o.userData.explode=[1.35,0,0],i=new Se.Mesh(new Se.SphereGeometry(.62,40,24),Mt.pump),i.scale.set(.52,1,1),o.add(i),i.castShadow=i.receiveShadow=!0;let l=[];for(let c=0;c<=40;c++){let h=c/40*Math.PI*1.8,d=.22+c/40*.36;l.push([.04,Math.sin(h)*d,Math.cos(h)*d])}kt(o,l,.14,"pump"),Cc(o,.34,0,0,.47,"x","pump"),Cc(o,-.34,0,0,.47,"x","pump"),A(o,0,-.53,0,.85,.25,1.3,"pump",.08),kt(o,[[0,.42,.28],[0,.77,.28],[0,.95,.28],[0,1.04,.53],[0,1.04,1.18]],.2,"pump"),Cc(o,0,1.04,1.22,.32,"z"),Cc(o,0,1.04,1.36,.32,"z"),kt(s,[[1,2.03,1.45],[1,2.03,1.78],[1,1.95,2.12],[1,.7,2.12]],.18,"pipe"),He(s,1,2.41,1.72,.033,.7,"metal"),gn(s,1,2.79,1.72,.22,.035,"red");for(let c=0;c<4;c++)A(s,1,2.79,1.72,.4,.035,.025,"red",0,c*Math.PI/2);kt(s,[[1,.99,-.6],[1,.99,-1.3],[1,.8,-1.65],[1,.4,-1.65]],.23,"pipe"),Cc(s,1,.99,-.9,.37,"z"),He(s,1,2.27,1.42,.025,.42,"metal"),BS(s,1,2.58,1.47),Vt(s,e.id,0,.19,.981,1.2,.18,"#e9e2c9","#233d36"),Vt(n,"11 kW  380 V",0,.17,.51,.82,.16,"#d0d4c5","#203a36")}function kS(s,e,t){A(s,0,.18,0,7.6,.35,3.6,"dark",.08),A(s,0,1.2,0,7.3,1.95,3.3,"ivory",.18);for(let n=-3.1;n<3.5;n+=1.25)A(s,n,1.15,1.69,.025,1.7,.02,"dark");for(let n of[-1.67,1.67])for(let i=.5;i<1.55;i+=.12)A(s,-2.6,i,n,1.35,.045,.06,"dark");for(let n of[-1.1,1.25]){He(s,n,2.25,0,1.16,.25,"metal",48),He(s,n,2.4,0,1.04,.08,"black",48);let i=_t(s,"axial-fan",n,2.48,0);i.userData.dynamic=!0;for(let r=0;r<6;r++){let a=A(i,0,0,0,.23,.045,1.78,"metal",.08);a.rotation.y=r*Math.PI/3}He(i,0,.02,0,.19,.1,"dark"),t.push({object:i,axis:"y",assetId:e.id,speed:3});for(let r of[.32,.54,.78,1])gn(s,n,2.54,0,r,.015,"metal");for(let r=0;r<8;r++)A(s,n,2.55,0,.025,.03,2.1,"metal",0,r*Math.PI/4)}A(s,2.85,1.23,1.75,.57,.85,.18,"dark",.05),Vt(s,e.id,2.85,1.32,1.85,.48,.2,"#d1dece");for(let n=-1;n<1.2;n+=.26)kt(s,[[-3.66,.65,n],[-4.15,.65,n],[-4.5,.9,n],[-4.5,.05,n]],.055,"copper")}function VS(s,e){A(s,0,.12,0,1.8,.24,1.4,"concrete",.07),A(s,0,1.4,0,1.45,2.5,1.08,"ivory",.09),A(s,0,1.4,.56,1.31,2.25,.065,"metal",.04),A(s,0,2.03,.62,.6,.4,.075,"dark",.045),Vt(s,e.id,0,2.06,.666,.48,.13,"#cee2bb");for(let t=-.35;t<=.36;t+=.35)He(s,t,1.64,.64,.04,.02,t<0?"red":"amber",16).rotation.x=Math.PI/2;A(s,.5,1.36,.63,.055,.3,.07,"black",.02);for(let t=.46;t<.99;t+=.085)A(s,0,t,.61,.95,.025,.03,"dark");Vt(s,"400 V",0,1.17,.64,.52,.2,"#5a4512","#dfbe60");for(let t of[.6,2.2])A(s,-.66,t,.62,.07,.17,.05,"metal",.015)}function GS(s,e){A(s,0,.1,0,1.4,.2,1.2,"concrete",.08),A(s,0,1.25,0,.9,2.3,.6,"ivory",.15),A(s,0,1.65,.316,.66,1.1,.05,"black",.09),A(s,0,1.88,.35,.49,.38,.015,"glassLight",.03),Vt(s,"DC 120",0,1.88,.363,.4,.13,"#adc7ba"),Vt(s,e.id,0,.54,.314,.49,.2,"#385249");for(let t of[-1,1])kt(s,[[t*.4,1.8,0],[t*.72,1.7,0],[t*.8,.42,.05],[t*.67,.36,.23],[t*.55,1.33,.3]],.039,"rubber"),A(s,t*.51,1.35,.31,.12,.27,.16,"dark",.035);A(s,0,2.15,.33,.51,.025,.015,"lamp");for(let t of[-.9,.9])He(s,t,.48,.1,.07,.95,"amber"),He(s,t,.35,.1,.075,.15,"dark")}function Dg(s,e,t){let n=e.type==="light"?6.8:5.4;if(A(s,0,.1,0,.7,.2,.7,"concrete",.07),He(s,0,.25,0,.17,.24,"metal"),up(s,0,.38,0,.23,"y",4),He(s,0,n/2,0,.09,n,"dark",16,.055),e.type==="light"){kt(s,[[0,n-.1,0],[0,n+.22,0],[0,n+.48,.22],[0,n+.48,1.5]],.06,"dark"),A(s,0,n+.44,1.47,.48,.12,.9,"dark",.08);let i=A(s,0,n+.37,1.47,.38,.015,.68,"lamp",.035);i.material=Mt.lamp.clone(),i.userData.luminaire=!0,i.userData.dynamic=!0;let r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,217,146,.72)"),o.addColorStop(.35,"rgba(255,207,127,.4)"),o.addColorStop(1,"rgba(255,207,127,0)"),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new Se.CanvasTexture(r);l.colorSpace=Se.SRGBColorSpace;let c=new Se.Mesh(new Se.PlaneGeometry(10,13),new Se.MeshBasicMaterial({map:l,transparent:!0,opacity:0,depthWrite:!1,blending:Se.AdditiveBlending,toneMapped:!1}));c.rotation.x=-Math.PI/2,c.position.set(0,.19,1.5),c.userData.lightPool=!0,c.userData.nonPhysical=!0,c.userData.dynamic=!0,c.name="downlight-footprint",s.add(c)}else{A(s,0,n-.35,.35,.13,.12,.7,"metal",.03);let i=_t(s,"camera-head",0,n-.1,.58);He(i,0,0,0,.27,.28,"ivory",32);let r=new Se.Mesh(new Se.SphereGeometry(.24,32,16,0,Math.PI*2,0,Math.PI/2),Mt.glass);r.rotation.x=Math.PI,r.position.y=-.12,i.add(r),r.castShadow=!0,A(i,0,.2,0,.22,.15,.22,"ivory",.06),Vt(s,e.id,0,3.7,.1,.5,.14,"#c8d1c1","#203a34")}}function HS(s,e,t){A(s,0,.09,0,.9,.18,.9,"concrete",.08),A(s,0,.7,0,.52,1.3,.5,"ivory",.08),A(s,0,1.3,0,.56,.1,.55,"dark",.04),Vt(s,e.id,0,.9,.26,.35,.15,"#32483c");let n=_t(s,"barrier-arm",0,1.1,0);n.userData.dynamic=!0;let i=e.position[0]<0?1:-1;A(n,i*1.8,0,0,3.6,.13,.09,"white",.025);for(let r=0;r<6;r++)A(n,i*(.3+r*.6),0,.052,.27,.13,.015,"red");t.push({object:n,axis:"z",assetId:e.id,gate:!0,sign:i})}function Lg(s,e){A(s,0,.1,0,.7,.2,.7,"concrete",.04),He(s,0,1.8,0,.055,3.6,"metal",16),A(s,0,2.2,.2,.47,.62,.38,"ivory",.07),Vt(s,e.id,0,2.25,.4,.4,.16,"#335146");for(let t=0;t<7;t++)He(s,0,3+t*.07,0,.19,.028,"white",24);A(s,0,3.7,0,1.25,.04,.06,"metal"),He(s,-.55,3.83,0,.08,.24,"white",20);for(let t=0;t<3;t++){let n=t*Math.PI*2/3;kt(s,[[.4,3.83,0],[.4+Math.cos(n)*.22,3.83,Math.sin(n)*.22]],.018,"metal")}}function Ng(s,e){let t=[],n=new Map;for(let i of e.assets){let r=_t(s,i.modelNode,...i.position);r.userData.assetId=i.id,r.userData.layer="equipment",{pump:zS,hvac:kS,meter:VS,charger:GS,gate:HS,sensor:Lg,bench:Lg,camera:Dg,light:Dg}[i.type](r,i,t);let a={pump:[-1.1,1.74,.25],hvac:[2.85,1.63,1.87],meter:[.32,1.64,.66],charger:[0,2.17,.35],gate:[0,1.33,.26],sensor:[.14,2.45,.405],bench:[.14,2.45,.405],camera:[.2,5.25,.58],light:[0,1.2,.095]},o=new Se.Mesh(new Se.SphereGeometry(i.type==="hvac"?.065:.035,12,8),new Se.MeshStandardMaterial({color:"#759568",emissive:"#759568",emissiveIntensity:.6,roughness:.35}));o.position.set(...a[i.type]),o.userData.indicator=!0,o.userData.dynamic=!0,o.name="telemetry-status-indicator",r.add(o),i.type==="pump"&&(r.getObjectByName("motor-and-coupling").add(o),o.position.set(0,.76,.25)),i.type==="pump"&&r.scale.setScalar(.5),n.set(i.id,r)}return{assets:n,animations:t}}var Ug={type:"change"},fp={type:"start"},Og={type:"end"},Qu=new vi,Fg=new zn,WS=Math.cos(70*Ls.DEG2RAD),un=new L,Xn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dp=1e-6,ed=class extends Ra{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Xt,this._lastTargetPosition=new L,this._quat=new Xt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yr,this._sphericalDelta=new yr,this._scale=1,this._panOffset=new L,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new L,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qS.bind(this),this._onPointerDown=XS.bind(this),this._onPointerUp=YS.bind(this),this._onContextMenu=eb.bind(this),this._onMouseWheel=JS.bind(this),this._onKeyDown=KS.bind(this),this._onTouchStart=jS.bind(this),this._onTouchMove=QS.bind(this),this._onMouseDown=$S.bind(this),this._onMouseMove=ZS.bind(this),this._interceptControlDown=tb.bind(this),this._interceptControlUp=nb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Dt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ug),this.update(),this.state=Dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Xn:n>Math.PI&&(n-=Xn),i<-Math.PI?i+=Xn:i>Math.PI&&(i-=Xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=un.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qu.origin.copy(this.object.position),Qu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qu.direction))<WS?this.object.lookAt(this.target):(Fg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qu.intersectPlane(Fg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dp||this._lastTargetPosition.distanceToSquared(this.target)>dp?(this.dispatchEvent(Ug),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;un.copy(i).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function XS(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qS(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YS(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Og),this.state=Dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $S(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Qi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Qi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(fp)}function ZS(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function JS(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(fp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Og))}function KS(s){this.enabled!==!1&&this._handleKeyDown(s)}function jS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(fp)}function QS(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function eb(s){this.enabled!==!1&&s.preventDefault()}function tb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var td=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Gn;e.deleteAttribute("uv");let t=new Si({side:mn}),n=new Si,i=new _r(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new xt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new nr(e,n,6),o=new wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new xt(e,no(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new xt(e,no(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new xt(e,no(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new xt(e,no(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new xt(e,no(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new xt(e,no(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function no(s){return new fr({color:0,emissive:16777215,emissiveIntensity:s})}var Bi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ib=new Ui(-1,1,1,-1,0,1),pp=class extends ot{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}},sb=new pp,zi=class{constructor(e){this._mesh=new xt(sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends Fn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Rc=class extends Fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},nd=class extends Fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var id=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(Bi),this.copyPass.material.blending=$t,this.timer=new vr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Rc!==void 0&&(a instanceof Rc?n=!0:a instanceof nd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sd=class extends Fn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Pc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ic={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},rd={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Bg(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=rb(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new ln(i,e,e);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}function rb(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Dc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:mp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function mp(s,e,t){let n=ab(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function ab(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var ad=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,p=e-u,x=t-f,m,g;p>x?(m=1,g=0):(m=0,g=1);let M=p-m+h,w=x-g+h,_=p-1+2*h,S=x-1+2*h,b=l&255,P=c&255,y=this.perm[b+this.perm[P]]%12,R=this.perm[b+m+this.perm[P+g]]%12,D=this.perm[b+1+this.perm[P+1]]%12,F=.5-p*p-x*x;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[y],p,x));let B=.5-M*M-w*w;B<0?i=0:(B*=B,i=B*B*this._dot(this.grad3[R],M,w));let G=.5-_*_-S*S;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[D],_,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,p=(h+d+u)*f,x=h-p,m=d-p,g=u-p,M=e-x,w=t-m,_=n-g,S,b,P,y,R,D;M>=w?w>=_?(S=1,b=0,P=0,y=1,R=1,D=0):M>=_?(S=1,b=0,P=0,y=1,R=0,D=1):(S=0,b=0,P=1,y=1,R=0,D=1):w<_?(S=0,b=0,P=1,y=0,R=1,D=1):M<_?(S=0,b=1,P=0,y=0,R=1,D=1):(S=0,b=1,P=0,y=1,R=1,D=0);let F=M-S+f,B=w-b+f,G=_-P+f,z=M-y+2*f,X=w-R+2*f,te=_-D+2*f,K=M-1+3*f,ue=w-1+3*f,Z=_-1+3*f,ne=h&255,ae=d&255,E=u&255,N=this.perm[ne+this.perm[ae+this.perm[E]]]%12,V=this.perm[ne+S+this.perm[ae+b+this.perm[E+P]]]%12,ce=this.perm[ne+y+this.perm[ae+R+this.perm[E+D]]]%12,pe=this.perm[ne+1+this.perm[ae+1+this.perm[E+1]]]%12,H=.6-M*M-w*w-_*_;H<0?i=0:(H*=H,i=H*H*this._dot3(this.grad3[N],M,w,_));let $=.6-F*F-B*B-G*G;$<0?r=0:($*=$,r=$*$*this._dot3(this.grad3[V],F,B,G));let fe=.6-z*z-X*X-te*te;fe<0?a=0:(fe*=fe,a=fe*fe*this._dot3(this.grad3[ce],z,X,te));let Oe=.6-K*K-ue*ue-Z*Z;return Oe<0?o=0:(Oe*=Oe,o=Oe*Oe*this._dot3(this.grad3[pe],K,ue,Z)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(e+t+n+i)*l,m=Math.floor(e+x),g=Math.floor(t+x),M=Math.floor(n+x),w=Math.floor(i+x),_=(m+g+M+w)*c,S=m-_,b=g-_,P=M-_,y=w-_,R=e-S,D=t-b,F=n-P,B=i-y,G=R>D?32:0,z=R>F?16:0,X=D>F?8:0,te=R>B?4:0,K=D>B?2:0,ue=F>B?1:0,Z=G+z+X+te+K+ue,ne=a[Z][0]>=3?1:0,ae=a[Z][1]>=3?1:0,E=a[Z][2]>=3?1:0,N=a[Z][3]>=3?1:0,V=a[Z][0]>=2?1:0,ce=a[Z][1]>=2?1:0,pe=a[Z][2]>=2?1:0,H=a[Z][3]>=2?1:0,$=a[Z][0]>=1?1:0,fe=a[Z][1]>=1?1:0,Oe=a[Z][2]>=1?1:0,Ee=a[Z][3]>=1?1:0,Ze=R-ne+c,ht=D-ae+c,he=F-E+c,xe=B-N+c,ge=R-V+2*c,ye=D-ce+2*c,be=F-pe+2*c,Je=B-H+2*c,Ge=R-$+3*c,tt=D-fe+3*c,st=F-Oe+3*c,k=B-Ee+3*c,U=R-1+4*c,ee=D-1+4*c,T=F-1+4*c,v=B-1+4*c,I=m&255,O=g&255,q=M&255,me=w&255,se=o[I+o[O+o[q+o[me]]]]%32,J=o[I+ne+o[O+ae+o[q+E+o[me+N]]]]%32,oe=o[I+V+o[O+ce+o[q+pe+o[me+H]]]]%32,we=o[I+$+o[O+fe+o[q+Oe+o[me+Ee]]]]%32,We=o[I+1+o[O+1+o[q+1+o[me+1]]]]%32,Ae=.6-R*R-D*D-F*F-B*B;Ae<0?h=0:(Ae*=Ae,h=Ae*Ae*this._dot4(r[se],R,D,F,B));let Te=.6-Ze*Ze-ht*ht-he*he-xe*xe;Te<0?d=0:(Te*=Te,d=Te*Te*this._dot4(r[J],Ze,ht,he,xe));let Be=.6-ge*ge-ye*ye-be*be-Je*Je;Be<0?u=0:(Be*=Be,u=Be*Be*this._dot4(r[oe],ge,ye,be,Je));let je=.6-Ge*Ge-tt*tt-st*st-k*k;je<0?f=0:(je*=je,f=je*je*this._dot4(r[we],Ge,tt,st,k));let rt=.6-U*U-ee*ee-T*T-v*v;return rt<0?p=0:(rt*=rt,p=rt*rt*this._dot4(r[We],U,ee,T,v)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Lc=class s extends Fn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Bg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new zt(this.width,this.height,{type:Kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},Pc.defines),uniforms:Cn.clone(Pc.uniforms),vertexShader:Pc.vertexShader,fragmentShader:Pc.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new dr,this.normalMaterial.blending=$t,this.pdMaterial=new It({defines:Object.assign({},Dc.defines),uniforms:Cn.clone(Dc.uniforms),vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Ic.defines),uniforms:Cn.clone(Ic.uniforms),vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:Cn.clone(Bi.uniforms),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:La,blendDst:Is,blendEquation:Kn,blendSrcAlpha:Da,blendDstAlpha:Is,blendEquationAlpha:Kn}),this.blendMaterial=new It({uniforms:Cn.clone(rd.uniforms),vertexShader:rd.vertexShader,fragmentShader:rd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ll,blendSrc:La,blendDst:Is,blendEquation:Kn,blendSrcAlpha:Da,blendDstAlpha:Is,blendEquationAlpha:Kn}),this._fsQuad=new zi(null),this._originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Mi,this.depthTexture.format=Ti,this.depthTexture.type=ss,this.normalRenderTarget=new zt(this.width,this.height,{minFilter:Ot,magFilter:Ot,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=mp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ad,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ln(i,e,e,rn,yn);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}};Lc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var od=class extends Fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cn.clone(Nc.uniforms),this.material=new Cs({name:Nc.name,uniforms:this.uniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader}),this._fsQuad=new zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===za&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var io=class s extends Fn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,a,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new zt(r,a,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new zt(r,a,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=zg;this.highPassUniforms=Cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cn.clone(Bi.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader,premultipliedAlpha:!0,blending:Ia,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new It({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};io.BlurDirectionX=new re(1,0);io.BlurDirectionY=new re(0,1);var kg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Vg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Ns=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new yp(e)}),this.register(function(e){return new Mp(e)}),this.register(function(e){return new Tp(e)}),this.register(function(e){return new Ep(e)}),this.register(function(e){return new Ap(e)}),this.register(function(e){return new Cp(e)}),this.register(function(e){return new Sp(e)}),this.register(function(e){return new bp(e)}),this.register(function(e){return new wp(e)}),this.register(function(e){return new Rp(e)}),this.register(function(e){return new Pp(e)}),this.register(function(e){return new Ip(e)}),this.register(function(e){return new Dp(e)}),this.register(function(e){return new Lp(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){let r=new vp,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}},yt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},gp="KHR_mesh_quantization",ei={};ei[Ot]=yt.NEAREST;ei[Wa]=yt.NEAREST_MIPMAP_NEAREST;ei[is]=yt.NEAREST_MIPMAP_LINEAR;ei[Nt]=yt.LINEAR;ei[Ds]=yt.LINEAR_MIPMAP_NEAREST;ei[jn]=yt.LINEAR_MIPMAP_LINEAR;ei[_n]=yt.CLAMP_TO_EDGE;ei[Tn]=yt.REPEAT;ei[vs]=yt.MIRRORED_REPEAT;var Gg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ob=new Ce,Hg=12,lb=1179937895,cb=2,Wg=8,hb=1313821514,ub=5130562;function os(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function db(s){return new TextEncoder().encode(s).buffer}function fb(s){return os(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function pb(s,e,t){let n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=Ls.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Xg(s){return Math.ceil(s/4)*4}function xp(s,e=0){let t=Xg(s.byteLength);if(t!==s.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function _p(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function mb(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}var vp=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r186"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,r=i.buffers,a=i.json;n=i.options;let o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),d=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),d.length>0&&(a.extensionsRequired=d),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.copyright&&(a.asset.copyright=n.copyright),n.binary===!0){let u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){let f=xp(u.result),p=new DataView(new ArrayBuffer(Wg));p.setUint32(0,f.byteLength,!0),p.setUint32(4,ub,!0);let x=xp(db(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Wg));m.setUint32(0,x.byteLength,!0),m.setUint32(4,hb,!0);let g=new ArrayBuffer(Hg),M=new DataView(g);M.setUint32(0,lb,!0),M.setUint32(4,cb,!0);let w=Hg+m.byteLength+x.byteLength+p.byteLength+f.byteLength;M.setUint32(8,w,!0);let _=new Blob([g,m,x,p,f],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(_),S.onloadend=function(){t(S.result)}}}else if(a.buffers&&a.buffers.length>0){let u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){let f=u.result;a.buffers[0].uri=f,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new L;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),i=new L;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===tn?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof ai&&(e=await this.decompressTextureAsync(e)),t instanceof ai&&(t=await this.decompressTextureAsync(t));let i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=_p();l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);let h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);let f=n(e),p=c.getImageData(0,0,a,o).data;for(let x=2;x<p.length;x+=4)h.data[x]=f(p[x]/256)*256}if(r){c.drawImage(r,0,0,a,o);let f=n(t),p=c.getImageData(0,0,a,o).data;for(let x=1;x<p.length;x+=4)h.data[x]=f(p[x]/256)*256}c.putImageData(h,0,0);let u=(e||t).clone();return u.source=new Dn(l),u.colorSpace=Wn,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async buildNormalMapTextureAsync(e,t,n){e instanceof ai&&(e=await this.decompressTextureAsync(e));let i=e.image,r=_p();r.width=i.width,r.height=i.height;let a=r.getContext("2d",{willReadFrequently:!0});a.drawImage(i,0,0,r.width,r.height);let o=a.getImageData(0,0,r.width,r.height),l=o.data;for(let h=0;h<l.length;h+=4)t&&(l[h+0]=255-l[h+0]),n&&(l[h+1]=255-l[h+1]);a.putImageData(o,0,0);let c=e.clone();return c.source=new Dn(r),c}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case yt.BYTE:case yt.UNSIGNED_BYTE:o=1;break;case yt.SHORT:case yt.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===yt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Xg(i*l),h=new DataView(new ArrayBuffer(c)),d=0;for(let p=n;p<n+i;p++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[p*e.itemSize+x]:(x===0?m=e.getX(p):x===1?m=e.getY(p):x===2?m=e.getZ(p):x===3&&(m=e.getW(p)),e.normalized===!0&&(m=Ls.normalize(m,e.array))),t===yt.FLOAT?h.setFloat32(d,m,!0):t===yt.INT?h.setInt32(d,m,!0):t===yt.UNSIGNED_INT?h.setUint32(d,m,!0):t===yt.SHORT?h.setInt16(d,m,!0):t===yt.UNSIGNED_SHORT?h.setUint16(d,m,!0):t===yt.BYTE?h.setInt8(d,m):t===yt.UNSIGNED_BYTE&&h.setUint8(d,m),d+=o}d%l!==0&&(d+=l-d%l)}let u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===yt.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=xp(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=yt.FLOAT;else if(e.array.constructor===Int32Array)o=yt.INT;else if(e.array.constructor===Uint32Array)o=yt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=yt.SHORT;else if(e.array.constructor===Uint16Array)o=yt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=yt.BYTE;else if(e.array.constructor===Uint8Array)o=yt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=pb(e,n,i),c;t!==void 0&&(c=e===t.index?yt.ELEMENT_ARRAY_BUFFER:yt.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,i,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,i="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),d=i+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];o.images||(o.images=[]);let u={mimeType:i},f=_p();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let p=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(p.translate(0,f.height),p.scale(1,-1)),e.data!==void 0){t!==rn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<m.length;g+=4)m[g+0]=e.data[g+0],m[g+1]=e.data[g+1],m[g+2]=e.data[g+2],m[g+3]=e.data[g+3];p.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)p.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(mb(f,i).then(m=>r.processBufferViewImage(m)).then(m=>{u.bufferView=m})):u.uri=Ks.getDataURL(f,i);let x=o.images.push(u)-1;return h[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:ei[e.magFilter],minFilter:ei[e.minFilter],wrapS:ei[e.wrapS],wrapT:ei[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof ai&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType,o=this.processImage(e.image,e.format,e.flipY,a),l={sampler:this.processSampler(e)};a==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:o},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=o,e.name&&(l.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,l)});let c=r.textures.push(l)-1;return i.textures.set(e,c),c}async processMaterialAsync(e,t){let n=this.cache,i=this.json,r=t!==void 0&&t.hasAttribute("tangent"),a=e.normalMap?e.uuid+":"+r:e.uuid;if(n.materials.has(a))return n.materials.get(a);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);let o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=e.color.toArray().concat([e.opacity]);if(os(l,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),d={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(d,h),o.pbrMetallicRoughness.metallicRoughnessTexture=d}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),o.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let u={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),o.emissiveTexture=u}}if(e.normalMap){let h=e.normalScale,d=h.x<0,u=r?h.y<0:h.y>0,f=e.normalMap;if(d||u){n.normalMaps.has(e.normalMap)===!1&&n.normalMaps.set(e.normalMap,{});let x=n.normalMaps.get(e.normalMap),m=`${d}:${u}`;x[m]===void 0&&(x[m]=await this.buildNormalMapTextureAsync(e.normalMap,d,u)),f=x[m]}let p={index:await this.processTextureAsync(f),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(p.scale=Math.abs(h.x)),this.applyTextureTransform(p,e.normalMap),o.normalTexture=p}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),o.occlusionTexture=h}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===Un&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,o)});let c=i.materials.push(o)-1;return n.materials.set(a,c),c}async processMeshAsync(e){let t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,S=e.material.length;_<S;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);let r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=yt.LINES:e.isLineLoop?o=yt.LINE_LOOP:e.isLine?o=yt.LINE_STRIP:e.isPoints?o=yt.POINTS:o=e.material.wireframe?yt.LINES:yt.TRIANGLES;let l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let p=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;let S=a.attributes[_];if(_=u[_]||_.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)&&!_.startsWith("_")&&(_="_"+_),t.attributes.has(this.getUID(S))){c[_]=t.attributes.get(this.getUID(S));continue}p=null;let P=S.array;_==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=Ns.Utils.toTypedBufferAttribute(S,Uint16Array)):(P instanceof Uint32Array||P instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),p=Ns.Utils.toTypedBufferAttribute(S,Float32Array));let y=this.processAccessor(p||S,a);y!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,S),c[_]=y,t.attributes.set(this.getUID(S),y))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let _=[],S=[],b={};if(e.morphTargetDictionary!==void 0)for(let P in e.morphTargetDictionary)b[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){let y={},R=!1;for(let D in a.morphAttributes){if(D!=="position"&&D!=="normal"){R||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),R=!0);continue}let F=a.morphAttributes[D][P],B=D.toUpperCase(),G=a.attributes[D];if(t.attributes.has(this.getUID(F,!0))){y[B]=t.attributes.get(this.getUID(F,!0));continue}let z=F.clone();if(!a.morphTargetsRelative)for(let X=0,te=F.count;X<te;X++)for(let K=0;K<F.itemSize;K++)K===0&&z.setX(X,F.getX(X)-G.getX(X)),K===1&&z.setY(X,F.getY(X)-G.getY(X)),K===2&&z.setZ(X,F.getZ(X)-G.getZ(X)),K===3&&z.setW(X,F.getW(X)-G.getW(X));y[B]=this.processAccessor(z,a),t.attributes.set(this.getUID(G,!0),y[B])}d.push(y),_.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&S.push(b[P])}l.weights=_,S.length>0&&(l.extras={},l.extras.targetNames=S)}let x=Array.isArray(e.material);if(x&&a.groups.length===0)return null;let m=!1;if(x&&a.index===null){let _=[];for(let S=0,b=a.attributes.position.count;S<b;S++)_[S]=S;a.setIndex(_),m=!0}let g=x?e.material:[e.material],M=x?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,S=M.length;_<S;_++){let b={mode:o,attributes:c};if(this.serializeUserData(a,b),d.length>0&&(b.targets=d),a.index!==null){let y=this.getUID(a.index);(M[_].start!==void 0||M[_].count!==void 0)&&(y+=":"+M[_].start+":"+M[_].count),t.attributes.has(y)?b.indices=t.attributes.get(y):(b.indices=this.processAccessor(a.index,a,M[_].start,M[_].count),t.attributes.set(y,b.indices)),b.indices===null&&delete b.indices}let P=await this.processMaterialAsync(g[M[_].materialIndex],a);P!==null&&(b.material=P),h.push(b)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});let w=n.meshes.push(l)-1;return t.meshes.set(r,w),w}detectMeshQuantization(e,t){if(this.extensionsUsed[gp])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let i=e.split("_",1)[0];Vg[i]&&Vg[i].includes(n)&&(this.extensionsUsed[gp]=!0,this.extensionsRequired[gp]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Ls.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Ns.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let h=r[c],d=St.parseTrackName(h.name),u=St.findNode(t,d.nodeName),f=Gg[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let p=1,x=h.values.length/h.times.length;f===Gg.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):h.getInterpolation()===ys?m="STEP":m="LINEAR",o.push({input:this.processAccessor(new gt(h.times,p)),output:this.processAccessor(new gt(h.values,x)),interpolation:m}),a.push({sampler:o.length-1,target:{node:i.get(u),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],l=new Float32Array(r.bones.length*16),c=new it;for(let d=0;d<r.bones.length;++d)o.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(e.bindMatrix).toArray(l,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new gt(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,i=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();os(o,[0,0,0,1])||(r.rotation=o),os(l,[0,0,0])||(r.translation=l),os(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),fb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let a=t.nodes.push(r)-1;if(i.set(e,a),e.children.length>0){let o=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let d=await this.processNodeAsync(h);d!==null&&o.push(d)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,i=this.nodeMap,r=e.pivot,a={},o=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();os(o,[0,0,0,1])||(a.rotation=o),os(l,[0,0,0])||(a.translation=l),os(c,[1,1,1])||(a.scale=c),a.extras={pivot:r.toArray()},e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a);let h=t.nodes.push(a)-1;i.set(e,h);let d={},u=[-r.x,-r.y,-r.z];if(os(u,[0,0,0])||(d.translation=u),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(d.mesh=x)}else e.isCamera&&(d.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let p=[t.nodes.push(d)-1];if(e.children.length>0){let x=[];for(let m=0,g=e.children.length;m<g;m++){let M=e.children[m];if(M.visible||n.onlyVisible===!1){let w=await this.processNodeAsync(M);w!==null&&x.push(w)}}x.length>0&&(d.children=x)}return a.children=p,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,a)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);let r=[];for(let a=0,o=e.children.length;a<o;a++){let l=e.children[a];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){let t=new Pi;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof Pi?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);if(e.length===1)for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);else for(let i=0;i<e.length;i++){let r=t.animations[i]||[];for(let a=0;a<r.length;++a)this.processAnimation(r[a],e[i])}await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},yp=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);let o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},Mp=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Sp=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},bp=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},wp=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Tp=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ep=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ap=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Cp=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(ob)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Rp=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Pp=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ip=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Dp=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){let a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Lp=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new it,c=new L,h=new Xt,d=new L;for(let f=0;f<i.count;f++)i.getMatrixAt(f,l),l.decompose(c,h,d),c.toArray(r,f*3),h.toArray(a,f*4),d.toArray(o,f*3);let u={TRANSLATION:n.processAccessor(new gt(r,3)),ROTATION:n.processAccessor(new gt(a,4)),SCALE:n.processAccessor(new gt(o,3))};i.instanceColor&&(u._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Ns.Utils={insertKeyframe:function(s,e){let n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n)),o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){let t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r],o=St.parseTrackName(a.name),l=St.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Zs)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let d;if(n[l.uuid]===void 0){d=a.clone();let f=new d.ValueBufferType(c*d.times.length);for(let p=0;p<d.times.length;p++)f[p*c+h]=d.values[p];d.name=(o.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,t.push(d);continue}let u=a.createInterpolant(new a.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+h]=u.evaluate(d.times[f]);for(let f=0;f<a.times.length;f++){let p=this.insertKeyframe(d,a.times[f]);d.values[p*c+h]=a.values[f]}}return s.tracks=t,s},toTypedBufferAttribute:function(s,e){let t=new gt(new e(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return t.array.set(s.array),t;for(let n=0,i=s.count;n<i;n++)for(let r=0;r<s.itemSize;r++)t.setComponent(n,r,s.getComponent(n,r));return t}};function gb(s,e,t,{onPick:n=()=>{},onFrame:i=()=>{},onError:r=()=>{}}={}){function a(le){let _e=new Se.Box3;return le.updateWorldMatrix(!0,!0),le.traverse(Me=>{Me.isMesh&&!Me.userData.nonPhysical&&_e.union(new Se.Box3().setFromObject(Me))}),_e}let o=new Se.WebGLRenderer({canvas:s,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});o.setPixelRatio(Math.min(devicePixelRatio,1.5)),o.shadowMap.enabled=!0,o.shadowMap.type=Se.PCFShadowMap,o.shadowMap.autoUpdate=!1,o.localClippingEnabled=!0,o.info.autoReset=!1,o.toneMapping=Se.ACESFilmicToneMapping,o.toneMappingExposure=.9,o.outputColorSpace=Se.SRGBColorSpace;let l=new Se.Scene;l.background=new Se.Color("#cdd9d9"),l.fog=new Se.Fog("#cdd9d9",350,850);let c=new Se.PerspectiveCamera(34,1,.15,1300);c.position.set(146,125,189);let h=new ed(c,s);h.target.set(-12,1,11),h.enableDamping=!0,h.dampingFactor=.065,h.minDistance=3,h.maxDistance=420,h.maxPolarAngle=Math.PI*.485,h.screenSpacePanning=!0,h.zoomSpeed=.8,h.rotateSpeed=.55,h.update(),Ag();let d;function u(){let le=new Se.PMREMGenerator(o),_e=new td,Me=le.fromScene(_e,.03);d?.dispose(),d=Me,l.environment=Me.texture,_e.dispose(),le.dispose()}u(),l.environmentIntensity=.63,l.environmentRotation.set(0,.7,0);let f=new Se.HemisphereLight("#dfeaf3","#7b8065",1.55);l.add(f);let p=new Se.DirectionalLight("#fff0d6",2.45);p.position.set(-90,105,65),p.castShadow=!0,p.shadow.mapSize.set(4096,4096),Object.assign(p.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340}),p.shadow.normalBias=.08,p.shadow.bias=-8e-5,p.shadow.radius=2.6,l.add(p),l.add(p.target);let x=new Se.DirectionalLight("#bad4e1",.6);x.position.set(80,50,-95),l.add(x);let m=new Se.Mesh(new Se.PlaneGeometry(2200,2200),new Se.MeshStandardMaterial({color:"#d7d6cb",roughness:.94}));m.rotation.x=-Math.PI/2,m.position.y=-2.1,m.receiveShadow=!0,l.add(m);let g=_t(l,"lailin-campus"),M=Pg(g),w=Ig(g),{assets:_,animations:S}=Ng(g,Lailin.catalog);M.forEach(le=>{le.userData.layer="architecture",Ac(le)}),w.forEach(le=>Ac(le));for(let le of _.values()){for(let Me of[...le.children])Me.isGroup&&!Me.userData.dynamic&&Ac(Me);let _e=le.children.filter(Me=>Me.isGroup);_e.forEach(Me=>Me.userData.dynamic=!0),Ac(le),_e.forEach(Me=>{S.some(nt=>nt.object===Me)||(Me.userData.dynamic=!1)})}g.updateMatrixWorld(!0),e.groups=[];let b=0,P=0;for(let le of g.children){let _e=le.userData.assetId?a(le):new Se.Box3().setFromObject(le);e.groups.push({name:le.name,assetId:le.userData.assetId||null,layer:le.userData.layer,min:_e.min.toArray(),max:_e.max.toArray(),center:_e.getCenter(Ut()).toArray()})}g.traverse(le=>{le.isMesh&&(P++,b+=(le.geometry.index?le.geometry.index.count:le.geometry.attributes.position.count)/3*(le.isInstancedMesh?le.count:1))}),e.stats={triangles:b,groups:e.groups.length,assets:_.size,meshes:P};let y=new Se.Group;y.name="selection-indicator",l.add(y);let R=new Se.LineBasicMaterial({color:"#cf9556",transparent:!0,opacity:.88,depthTest:!1}),D=new Se.Mesh(new Se.CylinderGeometry(5,5.03,.35,96),new Se.MeshStandardMaterial({color:"#c6cbbf",roughness:.76,metalness:.08}));D.visible=!1,l.add(D),D.receiveShadow=!0,D.castShadow=!0;let F=new Se.PointLight("#ffd49b",0,15,2);F.position.set(35,7,30),l.add(F);let B=new Se.WebGLRenderTarget(100,100,{type:Se.HalfFloatType,samples:Math.min(4,o.capabilities.maxSamples)}),G=new id(o,B);G.addPass(new sd(l,c));let z=new Lc(l,c,100,100);z.blendIntensity=.62,z.updateGtaoMaterial({radius:.8,thickness:1.4,distanceExponent:1.3,distanceFallOff:1,samples:8,scale:1,screenSpaceRadius:!1}),G.addPass(z);let X=new io(new Se.Vector2(64,64),0,.35,.92);X.enabled=!1,G.addPass(X),G.addPass(new od);let te=new Cr(kg);G.addPass(te);let K=new Cr({uniforms:{tDiffuse:{value:null},night:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse; uniform float night; varying vec2 vUv; void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;c=mix(c,c*vec3(.97,1.005,1.03),night);gl_FragColor=vec4(c,1.);}"});G.addPass(K);let ue={lost:!1,theta:h.getAzimuthalAngle()},Z=null,ne=!1,ae=!1,E=!1,N=0,V=0,ce=0,pe=null,H=!1,$=0,fe=!1,Oe=0,Ee=performance.now(),Ze=0,ht=0,he=0,xe=!0,ge=!0,ye=!1,be=0,Je=null,Ge=matchMedia("(prefers-reduced-motion: reduce)").matches,tt=new Set,st=new Map,k=new Map,U=[];for(let le of _.values())le.traverse(_e=>{_e.userData.explode&&(U.push(_e),k.set(_e,_e.position.clone()),_e.userData.restPosition=_e.position.toArray())});for(let le of S)le.object.userData.restRotation=le.object.rotation.toArray();let ee=document.createElement("div");ee.className="part-labels",s.parentElement.append(ee);let T={"motor-and-coupling":["1","\u7535\u673A\u4E0E\u98CE\u6247\u7F69"],"shaft-coupling":["2","\u5F39\u6027\u8054\u8F74\u5668"],"cast-volute":["3","\u8717\u58F3\u4E0E\u8FDB\u51FA\u53E3\u6CD5\u5170"]},v=new Map;for(let[le,[_e,Me]]of Object.entries(T)){let nt=document.createElement("div");nt.className="part-label",nt.innerHTML=`<span class="tag"><b>${_e}</b>${Me}</span><i class="stem"></i>`,ee.append(nt),v.set(le,nt)}function I(){if(V>=700)return{position:[146,125,189],target:[-12,1,11]};let le=204/(2*Math.tan(Se.MathUtils.degToRad(c.fov/2))*c.aspect)*1.1;return{position:Ut(.58,.5,.65).normalize().multiplyScalar(le).toArray(),target:[0,0,0]}}function O(){let le=s.clientWidth,_e=s.clientHeight;if(le<1||_e<1||le===V&&_e===ce)return;V=le,ce=_e,o.setSize(le,_e,!1),c.aspect=le/_e;let Me=le<700;if(c.fov=Me?46:34,c.updateProjectionMatrix(),h.maxDistance=Me?1100:420,l.fog.near=Me?850:380,l.fog.far=Me?1600:820,Je!==Me&&!ne){pe=null,me();let dt=I();c.position.fromArray(dt.position),h.target.fromArray(dt.target),h.update()}Je=Me,G.setSize(le,_e);let nt=o.getPixelRatio();z.setSize(Math.round(le*nt*.55),Math.round(_e*nt*.55)),X.setSize(Math.round(le*nt*.5),Math.round(_e*nt*.5)),te.material.uniforms.resolution.value.set(1/(le*nt),1/(_e*nt)),ge=!0}let q=new ResizeObserver(O);q.observe(s),O();function me(){if(H){let _e=document.getElementById("view-label");_e&&(_e.textContent="\u900F\u89C6")}H=!1,document.body.classList.remove("touring");let le=document.getElementById("tour-button");le?.classList.remove("active"),le?.setAttribute("aria-pressed","false")}function se(le,_e,Me=1600){me(),pe={from:c.position.clone(),to:Ut(...le),start:performance.now(),duration:Ge?1:Me,fromTarget:h.target.clone(),target:Ut(..._e)},ge=!0}function J(){for(let le of g.children)le.visible=(!ne||le.userData.assetId===Z)&&!tt.has(le.userData.layer);y.visible=!!Z&&!H,o.shadowMap.needsUpdate=!0}function oe(le=null,_e=0){if(le){let Me=Math.max(3,_e*1.5);p.position.copy(le).add(Ut(-Me*4.5,Me*5.25,Me*3.25)),p.target.position.copy(le),Object.assign(p.shadow.camera,{left:-Me,right:Me,top:Me,bottom:-Me,near:.1,far:Me*14}),p.shadow.normalBias=.015,p.shadow.bias=-3e-5}else p.position.set(-90,105,65),p.target.position.set(0,0,0),Object.assign(p.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340}),p.shadow.normalBias=.08,p.shadow.bias=-8e-5;p.shadow.camera.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}function we(le){if(!_.has(le))return;Z=le,y.traverse(hi=>hi.geometry?.dispose()),y.clear();let _e=a(_.get(le)),Me=[],nt=.18,dt=_e.min.x-nt,Ht=_e.max.x+nt,ze=_e.min.z-nt,lt=_e.max.z+nt,jt=_e.min.y+.015,dn=Math.min(.6,(Ht-dt)*.15);for(let[hi,ki,Bc,C]of[[dt,ze,1,1],[Ht,ze,-1,1],[Ht,lt,-1,-1],[dt,lt,1,-1]])Me.push(Ut(hi+Bc*dn,jt,ki),Ut(hi,jt,ki),Ut(hi,jt,ki),Ut(hi,jt,ki+C*dn));let xn=new Se.BufferGeometry().setFromPoints(Me);y.add(new Se.LineSegments(xn,R)),J()}function We(le=!1){if(ne=!1,fe=!1,D.visible=!1,m.position.y=-2.1,oe(),J(),le){let _e=Math.tan(Se.MathUtils.degToRad(c.fov/2)),Me=Math.max(164/(2*_e*c.aspect),124/(2*_e))*1.12;se([0,Me,.01],[0,0,0])}else{let _e=I();se(_e.position,_e.target,1800)}document.getElementById("explode-device")?.classList.remove("active")}function Ae(le,_e=!1){if(!_.has(le))return;Z=le,ne=_e,fe=!1;for(let dn of U)dn.position.copy(k.get(dn));J();let Me=a(_.get(le)),nt=Me.getCenter(Ut()),dt=Me.getSize(Ut()),Ht=Math.max(dt.x,dt.y,dt.z)*(_e?2.05:4.4),ze=nt.clone();ze.y-=_e?dt.y*.27:0,D.visible=_e;let lt=Math.max(dt.x,dt.z)/6.8;D.scale.setScalar(lt),D.position.set(nt.x,Me.min.y-.35*lt/2-.008,nt.z),m.position.y=_e?Me.min.y-.35*lt-.015:-2.1,oe(_e?nt:null,Math.max(dt.x,dt.y,dt.z));let jt=V<700;se([nt.x+Ht*.86,nt.y+Ht*.6,nt.z+Ht*1.03],ze.toArray(),1700),we(le),jt&&h.target.copy(ze)}function Te(le){ae=!!le,ge=!0,o.shadowMap.needsUpdate=!0}let Be={normal:"#628e65",alarm:"#ce593c",warning:"#d2a14f",offline:"#788882",unknown:"#788882"};function je(le){for(let _e of le){st.set(_e.id,_e);let Me=_.get(_e.id);Me&&(Me.userData.status=_e.status,Me.traverse(nt=>{if(nt.userData.indicator){let dt=Be[_e.status]||Be.unknown;nt.material.color.set(dt),nt.material.emissive.set(dt),nt.material.emissiveIntensity=_e.status==="offline"?0:.65}})),_e.id===Z&&R.color.set(Be[_e.status]||Be.normal)}ge=!0}let rt=new Se.Raycaster,Y=new Se.Vector2,Re=null;function de(le){if(!Re||Math.hypot(le.clientX-Re.x,le.clientY-Re.y)>5||le.button!==0)return;let _e=s.getBoundingClientRect();Y.set((le.clientX-_e.left)/_e.width*2-1,-(le.clientY-_e.top)/_e.height*2+1),rt.setFromCamera(Y,c);let Me=rt.intersectObjects(g.children,!0);for(let nt of Me){let dt=nt.object;if(!dt.visible||dt.userData.nonPhysical||dt.material?.clippingPlanes?.some(lt=>lt.distanceToPoint(nt.point)<0))continue;let Ht=!0;for(let lt=dt.parent;lt;lt=lt.parent)lt.visible||(Ht=!1);if(!Ht)continue;let ze;for(let lt=dt;lt&&lt!==g;lt=lt.parent)if(lt.userData.assetId){ze=lt.userData.assetId;break}ze&&n(ze);break}}let Pe=le=>{Re={x:le.clientX,y:le.clientY},pe=null,me()};s.addEventListener("pointerdown",Pe),s.addEventListener("pointerup",de);let Ne=()=>{pe=null,me(),ge=!0};h.addEventListener("start",Ne),h.addEventListener("change",()=>ge=!0);let ve=le=>{le.preventDefault(),ue.lost=!0,cancelAnimationFrame(N),d=void 0,l.environment=null,r("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\u3002\u8BBE\u5907\u6570\u636E\u4ECD\u53EF\u4F7F\u7528\uFF1B\u6062\u590D\u540E\u4F1A\u81EA\u52A8\u91CD\u5EFA\u753B\u9762\u3002")},Qe=()=>{try{u(),ue.lost=!1,ge=!0,o.shadowMap.needsUpdate=!0,Ee=performance.now(),N=requestAnimationFrame(Ct)}catch{ue.lost=!0,r("\u56FE\u5F62\u6062\u590D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8F7D\u5165\u3002\u8BBE\u5907\u6570\u636E\u4ECD\u53EF\u4F7F\u7528\u3002")}};s.addEventListener("webglcontextlost",ve),s.addEventListener("webglcontextrestored",Qe);function Xe(le){let _e=ae?1:0;Oe=Ge?_e:Se.MathUtils.damp(Oe,_e,3,le);let Me=Oe;l.background.set("#cdd9d9").lerp(new Se.Color("#3c5665"),Me),l.fog.color.copy(l.background),m.material.color.set("#d7d6cb").lerp(new Se.Color("#46616b"),Me),p.intensity=Se.MathUtils.lerp(2.75,.38,Me),p.color.set("#fff0d9").lerp(new Se.Color("#bfdcf7"),Me),f.intensity=Se.MathUtils.lerp(.7,.32,Me),x.intensity=Se.MathUtils.lerp(.48,.55,Me),l.environmentIntensity=Se.MathUtils.lerp(.56,.32,Me),Mt.lamp.emissiveIntensity=Se.MathUtils.lerp(.5,3,Me),Mt.amber.emissiveIntensity=Se.MathUtils.lerp(.05,1.3,Me),Mt.glass.emissive.set("#af7540"),Mt.glass.emissiveIntensity=Me*.025,Mt.windowLight&&(Mt.windowLight.emissiveIntensity=Me*1.6),F.intensity=Me*80,K.uniforms.night.value=Me,X.strength=Me*.42,X.enabled=xe&&Me>.02;for(let[nt,dt]of _){if(!nt.startsWith("LGT"))continue;let Ht=st.get(nt),ze=Ht?.powered&&Ht?.status!=="offline";dt.traverse(lt=>{lt.userData.lightPool&&(lt.material.opacity=Me*(ze?.28:0)),lt.userData.luminaire&&(lt.material.emissiveIntensity=ze?Se.MathUtils.lerp(.5,3,Me):0)})}}function Ct(le){if(E||ue.lost)return;if(N=requestAnimationFrame(Ct),document.hidden){Ee=le;return}let _e=le-Ee,Me=Math.min(_e/1e3,.06);if(Ee=le,pe){let ze=Math.min(1,(le-pe.start)/pe.duration),lt=ze*ze*ze*(ze*(ze*6-15)+10);c.position.lerpVectors(pe.from,pe.to,lt),h.target.lerpVectors(pe.fromTarget,pe.target,lt),ze===1&&(pe=null),ge=!0}if(H&&!Ge){$+=Me;let ze=[{p:[146,125,189],t:[-12,1,11],name:"\u56ED\u533A\u5168\u666F"},{p:[8,40,92],t:[-32,7,23],name:"1# \u7814\u53D1\u4E2D\u5FC3"},{p:[89,36,87],t:[34,3,23],name:"4# \u80FD\u6E90\u4E2D\u5FC3"},{p:[121,72,-98],t:[3,6,-23],name:"2# 3# \u751F\u4EA7\u8F66\u95F4"}],lt=Math.floor($/13)%ze.length,jt=ze[lt],dn=ze[(lt+1)%ze.length],xn=Math.max(0,Math.min(1,($%13-2)/11)),hi=xn*xn*xn*(xn*(xn*6-15)+10);c.position.lerpVectors(Ut(...jt.p),Ut(...dn.p),hi),h.target.lerpVectors(Ut(...jt.t),Ut(...dn.t),hi),V<700&&c.position.sub(h.target).multiplyScalar(1.9).add(h.target);let ki=document.getElementById("view-label");ki&&(ki.textContent="\u955C\u5934\u5DE1\u6E38 \xB7 "+(xn<.5?jt.name:dn.name)),ge=!0}h.update(),ue.theta=h.getAzimuthalAngle();let nt=Math.max(.045,Math.min(3,c.position.distanceTo(h.target)/70));Math.abs(c.near-nt)>.01&&(c.near=nt,c.updateProjectionMatrix(),ge=!0),Xe(Me);for(let ze of S){let lt=st.get(ze.assetId),jt=lt&&lt.status!=="offline"&&lt.powered!==!1;if(ze.gate){let dn=lt?.controlState==="open"?ze.sign*1.47:0,xn=ze.object.rotation.z;ze.object.rotation.z=Se.MathUtils.damp(xn,dn,3,Me),Math.abs(xn-ze.object.rotation.z)>.001&&(o.shadowMap.needsUpdate=!0,ge=!0)}else jt&&!Ge&&(!ne||Z===ze.assetId)&&(ze.object.rotation[ze.axis]+=Me*ze.speed)}for(let ze of U){let lt=k.get(ze),jt=fe&&ze.parent.userData.assetId===Z?Ut(...ze.userData.explode):Ut(),dn=lt.clone().add(jt);ze.position.lerp(dn,1-Math.exp(-5*Me))}fe&&(o.shadowMap.needsUpdate=!0);let dt=Math.abs(Oe-(ae?1:0))>.001,Ht=(ne||c.position.distanceTo(h.target)<65)&&S.some(ze=>!ze.gate&&ze.assetId===Z&&st.get(ze.assetId)?.status!=="offline");if(ge||pe||H||dt||Ht||fe){o.info.reset(),G.render(),be=o.info.render.calls,i(),ee.hidden=!fe||!ne;for(let ze of U){if(ze.parent.userData.assetId!==Z)continue;let lt=v.get(ze.name);if(!lt)continue;let jt=new Se.Box3().setFromObject(ze),dn=jt.getCenter(Ut());dn.y=jt.max.y+.2;let xn=Tt(dn.toArray());lt.hidden=!xn.visible,lt.style.left=xn.x+"px",lt.style.top=xn.y+"px"}ge=!1,he+=_e,ht++,ht===30&&(Ze=he/ht,he=0,ht=0)}}o.shadowMap.needsUpdate=!0,N=requestAnimationFrame(Ct);function Tt(le){let _e=Ut(...le).project(c);return{x:(_e.x*.5+.5)*V,y:(-.5*_e.y+.5)*ce,visible:_e.z>-1&&_e.z<1&&Number.isFinite(_e.x)}}function qn(){return H?(me(),!1):(We(),pe=null,H=!0,$=0,Z=null,y.visible=!1,document.body.classList.add("touring"),!0)}function ti(){return!ne||!Z?!1:(fe=!fe,o.shadowMap.needsUpdate=!0,fe)}function ld(){ne=!1,D.visible=!1,m.position.y=-2.1,fe=!1,oe(),J(),se(V<700?[108,48,110]:[85,34,83],[34,3,23],2e3)}let cd=g.getObjectByName("building/energy-center"),Uc=new Se.Plane(Ut(0,-1,0),6.8);function so(){return ye=!ye,cd.traverse(le=>{le.isMesh&&(le.userData.sectionMaterial||(le.material=le.material.clone(),le.userData.sectionMaterial=!0),le.material.clippingPlanes=ye?[Uc]:[],le.material.clipShadows=!0,le.material.needsUpdate=!0)}),z.enabled=xe&&!ye,o.shadowMap.needsUpdate=!0,ge=!0,ye}async function hd(){let le=new Ns,_e=g.clone(!0),Me=[];_e.userData={coordinateSystem:"local-meters-y-up",modelVersion:Lailin.catalog.site.version,conceptDesign:!0,assetCount:_.size},_e.traverse(ze=>{ze.visible=!0,ze.userData.nonPhysical&&Me.push(ze),ze.userData.restPosition&&ze.position.fromArray(ze.userData.restPosition),ze.userData.restRotation&&ze.rotation.fromArray(ze.userData.restRotation),delete ze.userData.status}),Me.forEach(ze=>ze.removeFromParent()),_e.updateMatrixWorld(!0);let nt=await le.parseAsync(_e,{binary:!0,onlyVisible:!1,trs:!1}),dt=document.createElement("a"),Ht=URL.createObjectURL(new Blob([nt],{type:"model/gltf-binary"}));dt.href=Ht,dt.download="lailin-campus.glb",dt.click(),setTimeout(()=>URL.revokeObjectURL(Ht),1e3)}function Fc(){let le=o.getPixelRatio(),_e=Math.min(2,3840/V);try{o.setPixelRatio(_e),G.setPixelRatio(_e),z.setSize(Math.round(V*_e*.65),Math.round(ce*_e*.65)),te.material.uniforms.resolution.value.set(1/(V*_e),1/(ce*_e)),G.render();let Me=document.createElement("a");Me.download="lailin-campus-"+(ne?Z:ae?"blue-hour":"daylight")+".png",Me.href=s.toDataURL("image/png"),Me.click()}finally{o.setPixelRatio(le),G.setPixelRatio(le),V=0,O(),ge=!0}}function Oc(){if(E)return;E=!0,cancelAnimationFrame(N),q.disconnect(),h.dispose(),s.removeEventListener("pointerdown",Pe),s.removeEventListener("pointerup",de),s.removeEventListener("webglcontextlost",ve),s.removeEventListener("webglcontextrestored",Qe);let le=new Set,_e=new Set,Me=new Set;l.traverse(nt=>{nt.geometry&&le.add(nt.geometry);for(let dt of nt.material?Array.isArray(nt.material)?nt.material:[nt.material]:[])_e.add(dt),Object.values(dt).forEach(Ht=>{Ht?.isTexture&&Me.add(Ht)})}),le.forEach(nt=>nt.dispose()),_e.forEach(nt=>nt.dispose()),Me.forEach(nt=>nt.dispose()),d.dispose(),z.dispose(),X.dispose(),G.dispose(),o.dispose()}return{select:we,home:We,focus:Ae,setNight:Te,setStates:je,project:Tt,capture:Fc,exportGLB:hd,toggleExplode:ti,toggleTour:qn,energyView:ld,toggleSection:so,render:()=>{O(),ge=!0},setLayer:(le,_e)=>{_e?tt.delete(le):tt.add(le),J()},quality:le=>{xe=le,z.enabled=le&&!ye;for(let _e of[G.renderTarget1,G.renderTarget2]){let Me=le?Math.min(4,o.capabilities.maxSamples):0;_e.samples!==Me&&(_e.samples=Me,_e.dispose())}o.setPixelRatio(le?Math.min(devicePixelRatio,1.5):1),G.setPixelRatio(o.getPixelRatio()),p.shadow.mapSize.set(le?4096:2048,le?4096:2048),p.shadow.map?.dispose(),p.shadow.map=null,o.shadowMap.needsUpdate=!0,V=0,O()},dispose:Oc,get night(){return ae},get isolated(){return ne},get state(){return{...ue,distance:c.position.distanceTo(h.target),triangles:e.stats.triangles,drawCalls:be,frameMS:Ze,high:xe,exploded:fe,section:ye}},debug:{scene:l,camera:c,controls:h,assets:_,meta:e,renderer:o,composer:G,ao:z}}}(globalThis.Lailin||={}).viewer={create:gb};(globalThis.Lailin||={}).chart=(s,e,t)=>{let n="http://www.w3.org/2000/svg",i=Math.max(240,s.clientWidth||300),r=Math.max(65,s.clientHeight||96);s.replaceChildren(),s.setAttribute("viewBox",`0 0 ${i} ${r}`);let a=(S,b,P)=>{let y=document.createElementNS(n,S);return Object.entries(b).forEach(([R,D])=>y.setAttribute(R,D)),P!==void 0&&(y.textContent=P),s.append(y),y},o=e.points.filter(S=>S.value!==null).map(S=>S.value);if(!o.length)return;let l=28,c=4,h=8,d=18,u=i-l-c,f=r-h-d,p=Math.min(...o),x=Math.max(...o);t.alarm!==null&&t.alarm<x*1.5&&(x=Math.max(x,t.alarm));let m=Math.max((x-p)*.2,2);p=Math.max(t.range[0],p-m),x+=m;let g=S=>l+(S-e.from)/(e.to-e.from)*u,M=S=>h+(x-S)/(x-p)*f;for(let S=0;S<3;S++){let b=p+(x-p)*S/2,P=M(b);a("line",{x1:l,y1:P,x2:i-c,y2:P,class:"chart-grid"}),a("text",{x:l-6,y:P+4,"text-anchor":"end",class:"chart-text"},Number(b.toFixed(0)).toString())}t.alarm!==null&&t.alarm>=p&&t.alarm<=x&&(a("line",{x1:l,y1:M(t.alarm),x2:i-c,y2:M(t.alarm),class:"chart-limit"}),a("text",{x:i-c,y:M(t.alarm)-4,"text-anchor":"end",class:"chart-limit-text"},`\u544A\u8B66 ${t.alarm}`));let w=[],_=[];for(let S of e.points)S.value===null?(_.length&&w.push(_),_=[]):_.push(S);_.length&&w.push(_);for(let S of w){let b=S.map((P,y)=>`${y?"L":"M"}${g(P.ts).toFixed(2)},${M(P.value).toFixed(2)}`).join(" ");S.length>1?(a("path",{d:`${b} L${g(S.at(-1).ts)},${r-d} L${g(S[0].ts)},${r-d}Z`,class:"chart-area"}),a("path",{d:b,class:"chart-line"})):a("circle",{cx:g(S[0].ts),cy:M(S[0].value),r:1.5,class:"chart-dot"})}for(let S=0;S<3;S++){let b=e.from+(e.to-e.from)*S/2;a("text",{x:g(b),y:r-2,"text-anchor":S===0?"start":S===2?"end":"middle",class:"chart-text"},new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1}))}s.setAttribute("aria-label",`${e.deviceId} ${e.metric}\uFF0C${e.sampleCount} \u4E2A\u6709\u6548\u6837\u672C\uFF0C\u6700\u4F4E ${Math.min(...o)}\uFF0C\u6700\u9AD8 ${Math.max(...o)} ${e.unit}\u3002\u7F3A\u6D4B\u533A\u95F4\u4E0D\u8865\u503C\u3002`)};(globalThis.Lailin||={}).app=(()=>{"use strict";let s=U=>document.getElementById(U),e=U=>Array.from(document.querySelectorAll(U)),t=Lailin.catalog,n=globalThis.LAILIN_LIVE?null:globalThis.LAILIN_PREVIEW||null,i=U=>String(U??"").replace(/[&<>"']/g,ee=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ee]),r={normal:"\u6B63\u5E38",warning:"\u9884\u8B66",alarm:"\u544A\u8B66",offline:"\u79BB\u7EBF",unknown:"\u672A\u77E5"},a={open:"\u5F85\u786E\u8BA4",acknowledged:"\u5DF2\u786E\u8BA4",resolved:"\u5DF2\u6062\u590D"},o=(U,ee=1)=>typeof U=="number"&&Number.isFinite(U)?U.toLocaleString("zh-CN",{maximumFractionDigits:ee,minimumFractionDigits:ee}):"\u2014",l=(U,ee=!1)=>U?new Date(U).toLocaleString("zh-CN",ee?{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}:{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}):"\u6682\u65E0",c={latency:["\u94FE\u8DEF\u5EF6\u65F6","ms"],fps:["\u5E27\u7387","fps"],bitrate:["\u7801\u7387","Mbps"],power:["\u6709\u529F\u529F\u7387","kW"],voltage:["\u7535\u538B","V"],current:["\u7535\u6D41","A"],temperature:["\u6E29\u5EA6","\xB0C"],rpm:["\u98CE\u673A\u8F6C\u901F","rpm"],flow:["\u6D41\u91CF","m\xB3/h"],pressure:["\u538B\u529B","MPa"],humidity:["\u76F8\u5BF9\u6E7F\u5EA6","%"],wind:["\u98CE\u901F","m/s"],cycles:["\u7D2F\u8BA1\u901A\u884C","\u6B21"],position:["\u95F8\u6746\u72B6\u6001",""]},h={selected:"PMP-01",snapshot:null,devices:new Map(t.assets.map(U=>[U.id,{...U,status:"unknown",metrics:{},quality:"missing"}])),session:{authenticated:!1},view:"scene",status:"all",type:"all",zone:"all",query:"",hours:1,history:null,labels:!0,alarmFilter:"active",received:0,connected:!1,preview:!!n,loginNext:null},d=globalThis.LAILIN_SOURCE_LABEL||"\u7F51\u5173\u63A5\u5165 \xB7 \u6765\u6E90\u5F85\u6838\u9A8C",u=null,f=null,p=null,x=0,m=null,g=null,M=!1,w=!1,_=new Map,S=new Map,b=[],P=[];function y(U,ee=!1){let T=document.createElement("div");T.className=`toast${ee?" error":""}`,T.textContent=U,s("toasts").append(T),setTimeout(()=>T.remove(),6e3)}function R(U){y(U.message||String(U),!0)}async function D(U,{method:ee="GET",body:T,headers:v={},signal:I}={}){let O=new AbortController,q=setTimeout(()=>O.abort(),8e3),me=()=>O.abort();I?.addEventListener("abort",me,{once:!0});try{let se=await fetch(`/api${U}`,{method:ee,credentials:"same-origin",signal:O.signal,headers:{...T?{"Content-Type":"application/json"}:{},...ee!=="GET"&&h.session.csrfToken?{"X-CSRF-Token":h.session.csrfToken}:{},...v},...T?{body:JSON.stringify(T)}:{}}),J;try{J=await se.json()}catch{throw new Error(`\u670D\u52A1\u54CD\u5E94\u683C\u5F0F\u65E0\u6548\uFF08HTTP ${se.status}\uFF09`)}if(!se.ok){let oe=new Error(J.error?.message||`\u670D\u52A1\u9519\u8BEF ${se.status}`);throw oe.code=J.error?.code,oe.status=se.status,oe.requestId=J.error?.requestId,oe.status===401&&(h.session={authenticated:!1},F()),oe}return J}catch(se){throw se.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6\u6216\u5DF2\u53D6\u6D88\uFF0C\u672A\u5C06\u64CD\u4F5C\u6807\u8BB0\u4E3A\u6210\u529F\u3002"):se}finally{clearTimeout(q),I?.removeEventListener("abort",me)}}function F(){let U=!!h.session.authenticated,ee=U?globalThis.LAILIN_SOURCE_LABEL?"\u64CD\u4F5C\u5458 \xB7 \u544A\u8B66\u786E\u8BA4":"\u64CD\u4F5C\u5458 \xB7 \u6A21\u62DF\u63A7\u5236":n?"\u8BBF\u5BA2 \xB7 \u53EA\u8BFB":"\u8BBF\u5BA2 \xB7 \u767B\u5F55";s("user-label").textContent=ee,s("login-button").setAttribute("aria-label",ee),s("login-button").title=U?`${ee} \xB7 \u70B9\u51FB\u9000\u51FA`:`${ee} \xB7 \u70B9\u51FB\u767B\u5F55`,s("demo-credentials").hidden=h.session.demo===!1,s("mobile-account")&&(s("mobile-account").textContent=U?"\u9000\u51FA":"\u767B\u5F55")}function B(U){if(n){y("\u5F53\u524D\u4E3A\u79BB\u7EBF\u53EA\u8BFB\u9884\u89C8\u3002\u8FD0\u884C\u5B8C\u6574\u9879\u76EE\u540E\u53EF\u767B\u5F55\u3001\u786E\u8BA4\u544A\u8B66\u548C\u6267\u884C\u6A21\u62DF\u63A7\u5236\u3002");return}if(h.session.authenticated){U();return}h.loginNext=U,s("login-error").textContent="",s("login-dialog").showModal(),s("login-password").focus()}function G({title:U,description:ee,note:T=!1,label:v="\u786E\u8BA4",callback:I}){g=I,s("confirm-title").textContent=U,s("confirm-description").textContent=ee,s("confirm-note-label").hidden=!T,s("confirm-note").value="",s("confirm-submit").textContent=v,s("confirm-dialog").showModal()}function z(){let U=!h.connected||Date.now()-h.received>8500;s("data-source").textContent=n?"\u6A21\u62DF\u5FEB\u7167":globalThis.LAILIN_SOURCE_LABEL?d:U?"\u6A21\u62DF \xB7 \u672A\u540C\u6B65":"\u6A21\u62DF \xB7 SSE",s("data-source").parentElement.classList.toggle("stale",!n&&U),s("data-source").parentElement.title=n?"\u79BB\u7EBF\u53EA\u8BFB\u9884\u89C8\uFF0C\u56FA\u5B9A\u6A21\u62DF\u5FEB\u7167\uFF1B\u65F6\u95F4\u4E3A\u5FEB\u7167\u91C7\u6837\u65F6\u95F4":U?"\u6570\u636E\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u4FDD\u7559\u6700\u540E\u5FEB\u7167":"\u5B9E\u65F6\u6A21\u62DF\u6570\u636E\u5DF2\u8FDE\u63A5",s("clock").textContent=n?h.snapshot?l(h.snapshot.serverTime,!0):"\u2014":l(Date.now(),!0),s("connection-banner").hidden=!U||!!n,U&&!n&&(s("connection-message").textContent="\u65E0\u6CD5\u83B7\u53D6\u6700\u65B0\u72B6\u6001\u3002\u663E\u793A\u6700\u540E\u5FEB\u7167\uFF0C\u4E0D\u5C06\u8FDE\u63A5\u4E2D\u65AD\u8BEF\u5224\u4E3A\u8BBE\u5907\u79BB\u7EBF\u3002")}function X(){if(!f)return;let U=new Set(t.assets.map(O=>O.id)),ee=f.groups.filter(O=>O.assetId),T=new Set(ee.map(O=>O.assetId)),v=new Set(h.devices.keys()),I=ee.length===U.size&&T.size===U.size&&[...U].every(O=>T.has(O)&&v.has(O))&&v.size===U.size;if(s("binding-status").textContent=I?`${T.size}/${U.size} \u8D44\u4EA7\u8282\u70B9\u5DF2\u6821\u9A8C`:"\u8D44\u4EA7\u4E0E\u6A21\u578B\u4E0D\u4E00\u81F4\uFF0C\u5DF2\u963B\u6B62\u9519\u7ED1",!I)throw new Error("\u8D44\u4EA7\u4E0E\u4E09\u7EF4\u6A21\u578B\u7684\u552F\u4E00\u7F16\u53F7\u4E0D\u4E00\u81F4\u3002\u8BF7\u68C0\u67E5\u76EE\u5F55\u548C\u6A21\u578B\u7248\u672C\u3002")}function te(U){if(U?.dataHealthy===!1){h.connected=!1,z();return}if(!U||!Array.isArray(U.devices)||!U.summary||!Number.isFinite(U.serverTime))throw new Error("\u670D\u52A1\u5FEB\u7167\u7ED3\u6784\u65E0\u6548");if(!Number.isSafeInteger(U.version)||U.version<0||!n&&typeof U.bootId!="string")throw new Error("\u670D\u52A1\u6570\u636E\u7248\u672C\u65E0\u6548\uFF0C\u4FDD\u7559\u6700\u540E\u4E00\u6B21\u5B8C\u6574\u5FEB\u7167\u3002");let ee=new Set(t.assets.map(I=>I.id));if(U.devices.length!==ee.size||U.devices.some(I=>!ee.delete(I.id))||ee.size)throw new Error("\u670D\u52A1\u8D44\u4EA7\u76EE\u5F55\u4E0E\u6A21\u578B\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u5DF2\u62D2\u7EDD\u5E94\u7528\u5FEB\u7167\u3002");if(h.snapshot&&U.bootId===h.snapshot.bootId&&U.version<h.snapshot.version)return;let T=new Map(t.assets.map(I=>[I.id,I])),v=U.devices.map(I=>{let O=T.get(I.id),q=t.types[O.type].metric;if(!Object.hasOwn(r,I.status)||!["good","stale","missing"].includes(I.quality)||!I.metrics||Array.isArray(I.metrics)||typeof I.metrics!="object"||Object.values(I.metrics).some(me=>typeof me!="number"||!Number.isFinite(me))||!Number.isSafeInteger(I.seq)||I.seq<0)throw new Error("\u8BBE\u5907\u91C7\u6837\u5B57\u6BB5\u65E0\u6548\uFF0C\u5DF2\u62D2\u7EDD\u8986\u76D6\u5F53\u524D\u72B6\u6001\u3002");if(I.quality==="good"&&(!Number.isFinite(I.metrics[q])||!Number.isFinite(I.sampleAt)||!Number.isFinite(I.lastSeen)))throw new Error("\u6709\u6548\u91C7\u6837\u7F3A\u5C11\u4E3B\u6307\u6807\u6216\u65F6\u95F4\u6233\u3002");if(h.snapshot?.bootId===U.bootId&&I.seq<(h.devices.get(I.id)?.seq||0))throw new Error("\u68C0\u6D4B\u5230\u5012\u5E8F\u8BBE\u5907\u91C7\u6837\uFF0C\u4FDD\u7559\u6700\u65B0\u72B6\u6001\u3002");return{...O,status:I.status,quality:I.quality,metrics:{...I.metrics},seq:I.seq,sampleAt:I.sampleAt,lastSeen:I.lastSeen,powered:I.powered,controlState:I.controlState,source:I.source}});if(U.summary.total!==v.length||!Number.isFinite(U.summary.powerKW)||U.summary.online!==v.filter(I=>!["offline","unknown"].includes(I.status)).length)throw new Error("\u8FD0\u884C\u6982\u89C8\u4E0E\u8BBE\u5907\u5FEB\u7167\u4E0D\u4E00\u81F4\u3002");if(!Array.isArray(U.alarms)||U.alarms.some(I=>typeof I.id!="string"||!T.has(I.device_id)||!Object.hasOwn(a,I.state)||!["critical","warning"].includes(I.severity)||!Number.isFinite(I.opened_at)))throw new Error("\u544A\u8B66\u5FEB\u7167\u65E0\u6548\uFF0C\u5DF2\u4FDD\u7559\u6700\u540E\u6709\u6548\u8BB0\u5F55\u3002");h.snapshot={...U,devices:v},h.devices=new Map(v.map(I=>[I.id,I])),h.received=Date.now(),h.connected=!0,u?.setStates(U.devices),Z(),ne(),V(),Oe(),z(),h.view==="alarms"&&he(U.alarms||[]),X()}async function K(){if(!n){p?.close(),h.connected=!1,z();try{te(await D("/bootstrap")),ue()}catch(U){z(),U.status===401?B(()=>K()):R(U)}}}function ue(){n||M||(p?.close(),p=new EventSource("/api/stream"),p.addEventListener("snapshot",U=>{try{te(JSON.parse(U.data))}catch(ee){h.connected=!1,z(),R(ee)}}),p.addEventListener("auth-required",()=>{p?.close(),h.connected=!1,h.session={authenticated:!1},F(),z(),s("connection-message").textContent="\u64CD\u4F5C\u5458\u4F1A\u8BDD\u5DF2\u7ED3\u675F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u7EE7\u7EED\u67E5\u770B\u5B9E\u65F6\u6570\u636E\u3002"}),p.onerror=()=>{h.connected=!1,z()})}function Z(){let U=h.snapshot?.summary;if(!U)return;s("open-alarms").classList.toggle("is-alarm",U.activeAlarms>0);let ee={"kpi-total":U.total,"kpi-online":U.online,"kpi-alarms":U.activeAlarms,"kpi-ack":U.unacknowledged,"kpi-power":o(U.powerKW,1),"nav-alarm-count":U.activeAlarms,"asset-total":U.total,"filter-all":U.total,"filter-abnormal":U.alarm+U.warning+U.offline,"filter-offline":U.offline};for(let[T,v]of Object.entries(ee))s(T).textContent=v}function ne(){let U=[...h.devices.values()].sort((v,I)=>({alarm:0,offline:1,warning:2,normal:3,unknown:4})[v.status]-{alarm:0,offline:1,warning:2,normal:3,unknown:4}[I.status]||v.id.localeCompare(I.id)),ee=0,T=0;for(let v of U){let I=_.get(v.id);I||(I=document.createElement("button"),I.type="button",I.className="asset-row",I.dataset.assetId=v.id,I.innerHTML=`<code>${i(v.id)}</code><span><b>${i(v.name)}</b><small>${i(t.types[v.type].label)} \xB7 ${i(v.zoneName)}</small></span><i></i>`,I.onclick=()=>ce(v.id),I.ondblclick=()=>$(!1),_.set(v.id,I),s("asset-list").append(I)),I.style.order=String(T++),I.classList.toggle("selected",v.id===h.selected),I.setAttribute("aria-label",`${v.name} ${v.id} ${r[v.status]}`),I.setAttribute("aria-pressed",String(v.id===h.selected)),I.querySelector("i").className=`st-${v.status}`,I.classList.toggle("alarm",v.status==="alarm");let O=(h.type==="all"||v.type===h.type)&&(h.zone==="all"||v.zone===h.zone)&&(h.status==="all"||h.status==="abnormal"&&["alarm","warning","offline"].includes(v.status)||v.status===h.status)&&`${v.name} ${v.id}`.toLowerCase().includes(h.query.toLowerCase());I.hidden=!O,O&&ee++}s("list-empty").hidden=ee!==0}let ae=null,E=null,N="";function V(){let U=h.devices.get(h.selected);if(!U)return;let ee=t.types[U.type],T=U.metrics[ee.metric],v=n?"preview":h.snapshot?.mode||"pending";if(ae!==U.id||E!==v){ae=U.id,E=v,N=null,s("device-name").textContent=U.name,s("device-subtitle").textContent=`${U.id} \xB7 ${ee.label}`,s("metric-name").textContent=ee.metricLabel,s("metric-unit").textContent=ee.unit,s("trend-unit").textContent=`${ee.metricLabel} \xB7 ${ee.unit}`,s("device-node").textContent=U.modelNode;let se=[["\u8D44\u4EA7\u7F16\u53F7",U.id],["\u6240\u5C5E\u5206\u533A",U.zoneName],["\u8BBE\u5907\u5E8F\u5217\u53F7",U.serial],["\u8FD0\u7EF4\u8D23\u4EFB",U.owner],["\u6A21\u578B\u4F4D\u7F6E",U.position.map(J=>Number(J).toFixed(1)).join(", ")+" m"],["\u6570\u636E\u6765\u6E90",v==="gateway"?d:v==="pending"?"\u7B49\u5F85\u6570\u636E\u6E90":"\u6A21\u62DF\u5668 \xB7 \u975E\u5B9E\u7269\u6570\u636E"],["\u5EFA\u8BAE\u534F\u8BAE",U.protocol],["\u8BA1\u5212\u4FDD\u517B",U.maintenanceDue]];U.locationNote&&se.push(["\u4F4D\u7F6E\u8BF4\u660E",U.locationNote],["\u5386\u53F2\u8303\u56F4",U.historyNote]),s("asset-details").innerHTML=se.map(([J,oe])=>`<dt>${i(J)}</dt><dd>${i(oe)}</dd>`).join(""),s("command-status").textContent=""}s("device-status").textContent=r[U.status]||"\u672A\u77E5",s("device-dot").className=`st-${U.status}`,s("device-status").parentElement.classList.toggle("alarm",U.status==="alarm"),s("quality-badge").textContent=U.quality==="good"?"\u6709\u6548\u6837\u672C":U.quality==="stale"?"\u6700\u540E\u6837\u672C\u5DF2\u8FC7\u671F":"\u5C1A\u65E0\u6570\u636E",s("metric-value").textContent=o(T,U.type==="gate"?0:1),document.querySelector(".main-reading").className=`main-reading ${U.status}`;let I=ee.alarm!==null?ee.alarm*1.3:Math.max(T||1,100);s("reading-fill").style.width=`${Math.max(0,Math.min(100,(T||0)/I*100))}%`,s("warning-threshold").hidden=ee.alarm===null,s("warning-threshold").style.left=`${(ee.alarm||0)/I*100}%`,s("threshold-caption").textContent=ee.alarm!==null?`${U.type==="bench"?"\u53F0\u67B6\u6F14\u793A\u9608\u503C \xB7 ":""}\u9884\u8B66 \u2265 ${ee.warning} / \u544A\u8B66 \u2265 ${ee.alarm} / \u6062\u590D \u2264 ${ee.recovery} ${ee.unit}`:"\u7D2F\u8BA1\u901A\u884C\u6307\u6807\uFF0C\u4E0D\u914D\u7F6E\u8D8A\u9650\u544A\u8B66";let O=Object.entries(U.metrics).filter(([se])=>se!==ee.metric).slice(0,2);s("secondary-readings").innerHTML=O.map(([se,J])=>{let[oe,we]=c[se]||[se,""];return se==="power"&&U.type==="light"&&(we="W"),`<dt>${i(oe)}</dt><dd>${se==="position"?J===1?"\u5DF2\u62AC\u6746":"\u5DF2\u843D\u6746":`${o(J,se==="pressure"?3:1)} ${i(we)}`}</dd>`}).join(""),s("sample-time").textContent=`${U.status==="offline"?"\u6700\u540E\u6709\u6548\u91C7\u6837":"\u91C7\u6837\u65F6\u95F4"} ${l(U.sampleAt)}${U.source==="simulated"?" \xB7 \u6A21\u62DF":""}`;let q=(h.snapshot?.alarms||[]).filter(se=>se.device_id===U.id&&se.state!=="resolved");s("device-alarm-count").textContent=q.length;let me=q.map(se=>se.id+se.state+se.severity).join(",");(me!==N||!s("device-alarms").children.length)&&(N=me,s("device-alarms").innerHTML=q.length?q.map(se=>`<div class="alarm-box"><header>${i(se.rule_code==="OFFLINE"?"\u8BBE\u5907\u5FC3\u8DF3\u8D85\u65F6":ee.metricLabel+"\u6301\u7EED\u8D8A\u9650")}<span>${i(l(se.opened_at))}</span></header><p>${se.rule_code==="OFFLINE"?"\u901A\u4FE1\u6062\u590D\u540E\u81EA\u52A8\u5173\u95ED\uFF1B\u4E0D\u662F\u4E3B\u52A8\u65AD\u7535\u3002":"\u786E\u8BA4\u53EA\u4EE3\u8868\u5DF2\u77E5\u6089\uFF0C\u6307\u6807\u6062\u590D\u540E\u624D\u5173\u95ED\u3002"}</p>${se.state==="open"?`<button class="btn" data-ack="${i(se.id)}">\u786E\u8BA4\u544A\u8B66</button>`:'<span class="acked">\u5DF2\u786E\u8BA4\uFF0C\u6301\u7EED\u89C2\u5BDF</span>'}</div>`).join(""):'<p class="quiet-line">\u65E0\u6D3B\u52A8\u544A\u8B66</p>'),s("control-section").hidden=!["light","gate"].includes(U.type)||h.snapshot?.mode==="gateway",s("device-control").textContent=U.type==="gate"?U.controlState==="open"?"\u843D\u4E0B\u95F8\u6746":"\u62AC\u8D77\u95F8\u6746":U.powered?"\u5173\u95ED\u8DEF\u706F":"\u6253\u5F00\u8DEF\u706F",s("device-control").disabled=U.status==="offline"||U.status==="unknown",s("demo-alarm").disabled=ee.alarm===null,s("explode-device").classList.toggle("available",U.type==="pump"),s("demo-tools").hidden=h.snapshot?.mode==="gateway"}function ce(U){h.devices.has(U)&&(h.selected=U,u?.isolated?$(!0):u?.select(U),document.body.classList.remove("panel-hidden","assets-open"),ne(),V(),Oe(),Ze())}function pe(U,ee){s("view-name").textContent=U,s("view-label").textContent=ee}function H(U){for(let ee of["view-home","view-top","view-energy"])s(ee).classList.toggle("active",ee===U)}function $(U){if(!u)return;u.focus(h.selected,U);let ee=h.devices.get(h.selected);pe(`${ee.id} ${ee.name}`,U?"\u5355\u72EC\u67E5\u770B \xB7 \u7C73\u5236\u6BD4\u4F8B":"\u5B9A\u4F4D"),document.body.classList.toggle("isolated",U),s("isolate-device").textContent=U?"\u8FD4\u56DE\u56ED\u533A":"\u5355\u72EC\u67E5\u770B",H(null),Ee()}function fe(U=!1){document.body.classList.remove("energy-view"),u?.home(U),document.body.classList.remove("isolated"),pe(U?"\u56ED\u533A\u5E73\u9762":"\u56ED\u533A\u5168\u666F",U?"\u4FEF\u89C6":"\u900F\u89C6"),s("isolate-device").textContent="\u5355\u72EC\u67E5\u770B",s("explode-device").textContent="\u5C55\u5F00\u7ED3\u6784",H(U?"view-top":"view-home"),Ee()}function Oe(){if(!f)return;let U=new Set([h.selected,...[...h.devices.values()].filter(ee=>["alarm","warning","offline"].includes(ee.status)).map(ee=>ee.id),"EV-03","AHU-03","GAT-01"]);for(let ee of U){let T=S.get(ee);T||(T=document.createElement("button"),T.type="button",T.dataset.assetMarker=ee,T.onclick=()=>ce(ee),s("scene-markers").append(T),S.set(ee,T));let v=h.devices.get(ee);T.className=`marker ${v.status}${ee===h.selected?" selected":""}`;let I=t.types[v.type],O=v.metrics[I.metric],q=v.status==="offline"||v.quality!=="good"?r[v.status]:["alarm","warning"].includes(v.status)?`${r[v.status]} ${o(O,v.type==="gate"?0:1)} ${I.unit}`:`${o(O,v.type==="gate"?0:1)} ${I.unit}`;T.innerHTML=`<span class="tag">${i(ee)}${ee===h.selected||["alarm","warning","offline"].includes(v.status)?`<span>${i(q)}</span>`:""}</span><i class="stem"></i><i class="foot"></i>`,T.setAttribute("aria-label",`\u9009\u62E9 ${v.name}\uFF0C${r[v.status]}`)}for(let[ee,T]of S)U.has(ee)||(T.remove(),S.delete(ee));Ee()}function Ee(){if(!u)return;let U=s("viewport").clientWidth,ee=s("viewport").clientHeight,T=[];for(let[v,I]of[...S].sort(([O],[q])=>+(q===h.selected)-+(O===h.selected))){let O=f.groups.find(me=>me.assetId===v);if(!O)continue;let q=u.project([O.center[0],O.max[1]+.15,O.center[2]]);if(I.hidden=!h.labels||!q.visible||q.x<24||q.x>U-24||q.y<25||q.y>ee-48||u.isolated&&v!==h.selected,!I.hidden){let me=I.offsetWidth;T.some(J=>Math.abs(J.x-q.x)<(me+J.w)/2+8&&Math.abs(J.y-q.y)<30)&&v!==h.selected?I.hidden=!0:T.push({...q,w:me})}I.style.left=`${q.x}px`,I.style.top=`${q.y}px`}for(let{el:v,position:I}of b){let O=u.project(I);v.hidden=!h.labels||!O.visible||O.x<10||O.x>U-10||O.y<20||O.y>ee-45,v.style.left=`${O.x}px`,v.style.top=`${O.y}px`}s("compass-needle").style.transform=`rotate(${-u.state.theta*180/Math.PI}deg)`}async function Ze(){let U=++x,ee=h.selected,T=h.devices.get(ee);if(!T)return;m?.abort(),m=new AbortController;let v=n?n.snapshot.serverTime:Date.now(),I=v-h.hours*36e5,O=h.history?.deviceId===ee&&Math.abs(h.history.to-h.history.from-h.hours*36e5)<1e3?h.history:null;s("chart-message").hidden=!!O,s("chart-message").textContent="\u8BFB\u53D6\u5386\u53F2\u8BB0\u5F55\u2026",O||s("trend-chart").replaceChildren();try{let q;if(n){let se=n.histories[ee];q={...se,from:I,to:v,points:se.points.filter(J=>J.ts>=I&&J.ts<=v)},q.sampleCount=q.points.reduce((J,oe)=>J+oe.count,0)}else q=await D(`/devices/${ee}/history?from=${I}&to=${v}&buckets=${h.hours===1?60:120}`,{signal:m.signal});if(U!==x)return;if(q.deviceId!==ee||q.metric!==t.types[T.type].metric||q.unit!==t.types[T.type].unit||q.from!==I||q.to!==v||!Array.isArray(q.points)||q.points.length>500||q.points.some((se,J)=>!Number.isFinite(se.ts)||se.ts<I||se.ts>v||J>0&&se.ts<q.points[J-1].ts||se.value!==null&&!Number.isFinite(se.value)||!Number.isSafeInteger(se.count)||se.count<0||!Array.isArray(se.sources))||q.sampleCount!==q.points.reduce((se,J)=>se+J.count,0))throw new Error("\u5386\u53F2\u6570\u636E\u4E0E\u6240\u9009\u8D44\u4EA7\u6216\u67E5\u8BE2\u7A97\u53E3\u4E0D\u4E00\u81F4\uFF0C\u672A\u663E\u793A\u8BE5\u7ED3\u679C\u3002");h.history=q,Lailin.chart(s("trend-chart"),q,t.types[T.type]),s("chart-message").hidden=q.sampleCount>0,s("chart-message").textContent="\u8BE5\u65F6\u95F4\u7A97\u53E3\u5C1A\u65E0\u6709\u6548\u6837\u672C\uFF0C\u4E0D\u586B\u5145\u865A\u6784\u66F2\u7EBF\u3002",s("history-description").textContent=`${n?"\u6A21\u62DF\u5386\u53F2":"\u6570\u636E\u5E93\u5386\u53F2"} \xB7 ${q.sampleCount} \u6837\u672C`;let me=q.points.filter(se=>se.value!==null).map(se=>se.value);s("history-stats").textContent=me.length?`${o(Math.min(...me))}\u2013${o(Math.max(...me))} ${q.unit}`:"\u2014"}catch(q){if(U!==x)return;h.history=O,O?(s("chart-message").hidden=!0,s("history-description").textContent="\u66F4\u65B0\u5931\u8D25\uFF0C\u4FDD\u7559\u4E0A\u6B21\u67E5\u8BE2"):(s("trend-chart").replaceChildren(),s("chart-message").hidden=!1,s("chart-message").textContent=q.message),s("history-stats").textContent=O?"\u6700\u540E\u6709\u6548\u5386\u53F2":"\u67E5\u8BE2\u5931\u8D25"}}function ht(U){if(document.body.classList.toggle("data-mode",U!=="scene"),h.view=U,e("[data-view]").forEach(ee=>ee.classList.toggle("active",ee.dataset.view===U)),s("data-section").hidden=U==="scene",U==="scene"){setTimeout(()=>u?.render(),30);return}s("data-title").textContent=U==="audit"?"\u64CD\u4F5C\u8BB0\u5F55":"\u544A\u8B66\u8BB0\u5F55",s("data-subtitle").textContent=U==="audit"?"\u89C4\u5219\u53D8\u5316\u3001\u767B\u5F55\u3001\u786E\u8BA4\u4E0E\u63A7\u5236\u5747\u5728\u670D\u52A1\u7AEF\u7559\u75D5\u3002":"\u786E\u8BA4\u53EA\u8868\u793A\u5DF2\u77E5\u6089\uFF0C\u6D4B\u91CF\u503C\u6062\u590D\u540E\u544A\u8B66\u624D\u4F1A\u5173\u95ED\u3002",s("alarm-state-filters").hidden=U!=="alarms",xe()}function he(U){if(h.view!=="alarms")return;let ee=U.filter(T=>h.alarmFilter==="all"||h.alarmFilter==="active"&&T.state!=="resolved"||T.state===h.alarmFilter);s("data-content").innerHTML=ee.length?`<table class="records-table"><thead><tr><th>\u7EA7\u522B / \u8BBE\u5907</th><th>\u544A\u8B66\u5185\u5BB9</th><th>\u9996\u6B21\u53D1\u751F</th><th>\u5904\u7406\u72B6\u6001</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${ee.map(T=>`<tr><td><span class="sev ${T.severity==="critical"?"alarm":"warning"}">${T.severity==="critical"?"\u544A\u8B66":"\u9884\u8B66"}</span><small><code>${i(T.device_id)}</code></small></td><td><strong>${i(T.title)}</strong><small>${T.rule_code==="OFFLINE"?"\u5FC3\u8DF3\u8D85\u65F6":`\u89C4\u5219\u9608\u503C ${i(T.threshold)} ${i(T.unit)}`}</small></td><td>${i(l(T.opened_at))}</td><td>${a[T.state]}<small>${i(T.acknowledged_by||"\u2014")}</small></td><td>${T.state==="open"?`<button class="table-ack" data-ack="${i(T.id)}">\u786E\u8BA4</button>`:`<button class="link" data-locate="${i(T.device_id)}">\u5728\u573A\u666F\u4E2D\u5B9A\u4F4D</button>`}</td></tr>`).join("")}</tbody></table>`:'<div class="empty-state"><strong>\u6B64\u7B5B\u9009\u4E0B\u6CA1\u6709\u544A\u8B66\u8BB0\u5F55</strong><p>\u5DF2\u6062\u590D\u8BB0\u5F55\u53EF\u5728\u201C\u5168\u90E8\u201D\u6216\u201C\u5DF2\u6062\u590D\u201D\u4E2D\u67E5\u770B\u3002</p></div>'}async function xe(){if(h.view==="alarms"){if(n){he(h.snapshot.alarms);return}try{let U=await D("/alarms?limit=100");he(U.items)}catch(U){R(U)}}else if(h.view==="audit"){if(n){s("data-content").innerHTML='<div class="empty-state"><strong>\u79BB\u7EBF\u9884\u89C8\u4E0D\u5305\u542B\u767B\u5F55\u548C\u64CD\u4F5C\u8BB0\u5F55</strong><p>\u542F\u52A8\u5B8C\u6574\u670D\u52A1\u540E\uFF0C\u6240\u6709\u5199\u64CD\u4F5C\u53EF\u5728\u6B64\u67E5\u8BE2\u3002</p></div>';return}try{let U=await D("/audit?limit=100"),ee={"system.start":"\u670D\u52A1\u542F\u52A8","system.seed":"\u521D\u59CB\u5316\u76EE\u5F55","auth.login":"\u64CD\u4F5C\u5458\u767B\u5F55","auth.logout":"\u9000\u51FA\u767B\u5F55","auth.failed":"\u767B\u5F55\u5931\u8D25","alarm.opened":"\u4EA7\u751F\u544A\u8B66","alarm.resolved":"\u544A\u8B66\u6062\u590D","alarm.acknowledged":"\u786E\u8BA4\u544A\u8B66","demo.scenario":"\u5207\u6362\u6A21\u62DF\u5DE5\u51B5","command.accepted":"\u63A5\u6536\u63A7\u5236\u6307\u4EE4","command.confirmed":"\u6536\u5230\u6A21\u62DF\u56DE\u6267","command.failed":"\u6307\u4EE4\u5931\u8D25"};s("data-content").innerHTML=`<table class="records-table"><thead><tr><th>\u65F6\u95F4</th><th>\u64CD\u4F5C\u4EBA</th><th>\u52A8\u4F5C</th><th>\u8D44\u4EA7 / \u8BE6\u60C5</th></tr></thead><tbody>${U.items.map(T=>`<tr><td>${l(T.at)}</td><td>${i(T.actor)}</td><td><strong>${i(ee[T.action]||T.action)}</strong><small>${i(T.action)}</small></td><td>${i(T.device_id||"\u7CFB\u7EDF")}<small title="${i(T.detail)}">${i(T.detail.slice(0,72))}</small></td></tr>`).join("")}</tbody></table>`}catch(U){R(U)}}}function ge(U){let ee=h.snapshot?.alarms.find(T=>T.id===U);B(()=>G({title:"\u786E\u8BA4\u5DF2\u77E5\u6089\u6B64\u544A\u8B66",description:`${ee?.title||"\u6240\u9009\u544A\u8B66"}\u3002\u672C\u64CD\u4F5C\u53EA\u8BB0\u5F55\u5904\u7406\u4EBA\u548C\u8BF4\u660E\uFF0C\u4E0D\u4F1A\u6E05\u9664\u8D8A\u9650\u72B6\u6001\uFF0C\u4E5F\u4E0D\u4F1A\u4EE3\u66FF\u73B0\u573A\u5904\u7F6E\u3002`,note:!0,label:"\u786E\u8BA4\u544A\u8B66",callback:async T=>{await D(`/alarms/${U}/acknowledge`,{method:"POST",body:{note:T}}),y("\u544A\u8B66\u5DF2\u786E\u8BA4\uFF1B\u7B49\u5F85\u76D1\u6D4B\u503C\u6216\u901A\u4FE1\u72B6\u6001\u5B9E\u9645\u6062\u590D\u3002"),te(await D("/bootstrap"))}}))}function ye(U){let ee=h.selected,T=h.devices.get(ee),v={alarm:"\u6CE8\u5165\u8F74\u627F\u8FC7\u70ED\u544A\u8B66",offline:"\u6A21\u62DF\u7F51\u7EDC\u901A\u4FE1\u4E2D\u65AD",normal:"\u6062\u590D\u5065\u5EB7\u5DE5\u51B5"},I=v[U]||"\u5207\u6362\u6A21\u62DF\u5DE5\u51B5";B(()=>G({title:I,description:`\u76EE\u6807\uFF1A${T.name}\uFF08${ee}\uFF09\u3002${U==="offline"?"\u505C\u6B62\u8BE5\u8D44\u4EA7\u7684\u6A21\u62DF\u4E0A\u62A5\uFF0C\u7531\u670D\u52A1\u5668\u8D85\u65F6\u89C4\u5219\u5224\u5B9A\u901A\u4FE1\u4E2D\u65AD\uFF1B\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u524D\u7AEF\u989C\u8272\u3002":U==="alarm"?"\u4E0B\u4E00\u6B21\u6A21\u62DF\u91C7\u6837\u5C06\u4F9D\u636E\u8BE5\u8D44\u4EA7\u4E3B\u6307\u6807\u9A71\u52A8\u670D\u52A1\u5668\u544A\u8B66\u89C4\u5219\u3002":"\u4E0B\u4E00\u6B21\u6A21\u62DF\u91C7\u6837\u5C06\u4F9D\u636E\u8BE5\u8D44\u4EA7\u72B6\u6001\u9A71\u52A8\u670D\u52A1\u5668\u6062\u590D\u89C4\u5219\u3002"}\u6B64\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u5B9E\u7269\u8BBE\u5907\u3002`,callback:async()=>{let O=await D("/demo/scenario",{method:"POST",body:{deviceId:ee,scenario:U}});y(O.message)}}))}function be(){let U=h.devices.get(h.selected),ee={deviceId:U.id,action:U.type==="light"?"setPower":"setGate",value:U.type==="light"?!U.powered:U.controlState==="open"?"closed":"open"};B(()=>G({title:`${s("device-control").textContent} \xB7 \u6A21\u62DF\u63A7\u5236`,description:`${U.name}\uFF08${U.id}\uFF09\u3002\u670D\u52A1\u5668\u5C06\u6821\u9A8C\u6743\u9650\u548C\u5728\u7EBF\u72B6\u6001\uFF1B\u6536\u5230\u6A21\u62DF\u8BBE\u5907\u56DE\u6267\u540E\u624D\u663E\u793A\u6210\u529F\u3002\u672C\u6848\u4F8B\u4E0D\u5411\u5B9E\u7269\u4E0B\u53D1\u547D\u4EE4\u3002`,callback:async()=>{let T=globalThis.crypto?.randomUUID?crypto.randomUUID():`cmd_${Date.now()}_${Math.random().toString(16).slice(2)}`,v=await D("/commands",{method:"POST",body:ee,headers:{"Idempotency-Key":T}});s("command-status").textContent=`\u6307\u4EE4 ${v.id.slice(0,8)} \u5DF2\u63A5\u6536\uFF0C\u7B49\u5F85\u8BBE\u5907\u56DE\u6267\u2026`;for(let I=0;I<16;I++){await new Promise(q=>setTimeout(q,600));let O=await D(`/commands/${v.id}`);if(O.status==="confirmed"){h.selected===U.id&&(s("command-status").textContent=O.message),y(O.message),te(await D("/bootstrap"));return}if(O.status==="failed")throw new Error(O.message||"\u6307\u4EE4\u6267\u884C\u5931\u8D25")}throw new Error(`\u672A\u5728\u7B49\u5F85\u7A97\u53E3\u5185\u53D6\u5F97\u56DE\u6267\u3002\u6307\u4EE4 ${v.id} \u72B6\u6001\u672A\u77E5\uFF0C\u8BF7\u901A\u8FC7\u6307\u4EE4\u67E5\u8BE2\u63A5\u53E3\u6838\u5B9E\uFF0C\u4E0D\u8981\u76F2\u76EE\u91CD\u53D1\u3002`)}}))}function Je(){if(!h.history){y("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5386\u53F2\u67E5\u8BE2\u7ED3\u679C\u3002");return}let U=h.history,ee=O=>`"${String(O??"").replace(/^([=+\-@])/,"	$1").replaceAll('"','""')}"`,T=[["asset_id","sample_bin_time","metric","mean","min","max","unit","count","sources","data_mode"],...U.points.map(O=>[U.deviceId,new Date(O.ts).toISOString(),U.metric,O.value,O.min,O.max,U.unit,O.count,O.sources.join("|"),U.mode])].map(O=>O.map(ee).join(",")).join(`\r
`),v=URL.createObjectURL(new Blob(["\uFEFF"+T],{type:"text/csv;charset=utf-8"})),I=document.createElement("a");I.href=v,I.download=`${U.deviceId}-history-${h.hours}h.csv`,I.click(),setTimeout(()=>URL.revokeObjectURL(v),1e3),y("\u5DF2\u5BFC\u51FA\u5F53\u524D\u7A97\u53E3\u805A\u5408\u6570\u636E\uFF0C\u5305\u542B\u7F3A\u6D4B\u7A7A\u503C\u548C\u6570\u636E\u6765\u6E90\u3002")}async function Ge(){try{await new Promise(T=>requestAnimationFrame(()=>setTimeout(T,0))),f=globalThis.LAILIN_PREVIEW.meta;let U=null;X(),u=Lailin.viewer.create(s("scene-canvas"),f,U,{onPick:T=>ce(T),onFrame:()=>{Ee(),u?.state.lost||(s("graphics-error").hidden=!0)},onError:T=>{s("graphics-error").textContent=T,s("graphics-error").hidden=!1}}),u.select(h.selected),h.snapshot&&u.setStates(h.snapshot.devices),s("model-loading").hidden=!0,document.body.classList.add("scene-ready"),s("model-stats").textContent=`WebGL 2 \xB7 ${Math.round(f.stats.triangles/1e3)}k \u4E09\u89D2\u9762 \xB7 ${f.stats.meshes} \u7F51\u683C`;let ee=[["1#","\u7814\u53D1\u4E2D\u5FC3",[-36,19.5,24]],["2#","\u751F\u4EA7\u8F66\u95F4 A",[-32,12.5,-24]],["3#","\u751F\u4EA7\u8F66\u95F4 B",[29,13.5,-30]],["4#","\u80FD\u6E90\u4E2D\u5FC3",[35,11,18]],["5#","\u5357\u95E8\u5C97\u4EAD",[13,5,58.8]]];for(let[T,v,I]of ee){let O=document.createElement("div");O.className="building-label",O.innerHTML=`<b>${T}</b>${v}`,s("building-labels").append(O),b.push({el:O,position:I})}Oe(),u.render()}catch(U){s("model-loading").hidden=!0,s("graphics-error").hidden=!1,s("graphics-error").textContent=U.message,s("model-stats").textContent="\u56FE\u5F62\u672A\u5C31\u7EEA\uFF0C\u8D44\u4EA7\u4E0E\u544A\u8B66\u4ECD\u53EF\u4F7F\u7528",R(U)}}function tt(){let U=()=>{let v=innerWidth<=900,I=s("asset-panel"),O=s("right-panel");I.inert=v&&!document.body.classList.contains("assets-open"),O.inert=v&&document.body.classList.contains("panel-hidden")};new MutationObserver(U).observe(document.body,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("resize",U),U();let ee=(v,I)=>(s(v).classList.toggle("active",I),s(v).setAttribute("aria-pressed",String(I)),I),T=v=>ee(v,!s(v).classList.contains("active"));for(let[v,I]of Object.entries(t.types)){let O=document.createElement("option");O.value=v,O.textContent=I.label,s("type-filter").append(O)}for(let[v,I]of Object.entries(t.zones)){let O=document.createElement("option");O.value=v,O.textContent=I,s("zone-filter").append(O)}s("asset-search").oninput=v=>{h.query=v.target.value,ne()},s("type-filter").onchange=v=>{h.type=v.target.value,ne()},s("zone-filter").onchange=v=>{h.zone=v.target.value,ne()},e("[data-status]").forEach(v=>v.onclick=()=>{h.status=v.dataset.status,e("[data-status]").forEach(I=>I.classList.toggle("active",I===v)),ne()}),s("clear-filters").onclick=()=>{h.type=h.zone=h.status="all",h.query="",s("asset-search").value="",s("type-filter").value="all",s("zone-filter").value="all",e("[data-status]").forEach(v=>v.classList.toggle("active",v.dataset.status==="all")),ne()},s("focus-device").onclick=()=>$(!1),s("isolate-device").onclick=()=>u?.isolated?fe():$(!0),s("view-home").onclick=()=>fe(),s("view-top").onclick=()=>fe(!0),s("reset-scene").onclick=()=>fe(),s("tour-button").onclick=()=>{document.body.classList.contains("touring")||fe();let v=!!u?.toggleTour();ee("tour-button",v),v&&pe("\u56ED\u533A\u5168\u666F","\u955C\u5934\u5DE1\u6E38")},s("view-energy").onclick=()=>{fe(),document.body.classList.add("energy-view"),pe("4# \u80FD\u6E90\u4E2D\u5FC3","\u5FAA\u73AF\u6C34\u6CF5\u4E0E\u6362\u70ED\u673A\u7EC4"),u?.energyView(),H("view-energy")},s("section-toggle").onclick=()=>ee("section-toggle",!!u?.toggleSection()),s("photo-button").onclick=()=>{document.body.classList.toggle("photo-mode"),s("photo-button").classList.toggle("active",document.body.classList.contains("photo-mode")),setTimeout(()=>u?.render(),30)},s("snapshot-button").onclick=()=>u?.capture(),s("export-model").onclick=async()=>{try{s("export-model").disabled=!0,await u?.exportGLB(),y("\u5DF2\u5BFC\u51FA\u5B8C\u6574 GLB\uFF0C\u8D44\u4EA7\u7F16\u53F7\u4FDD\u7559\u5728\u8282\u70B9\u4E2D\u3002")}catch(v){R(v)}finally{s("export-model").disabled=!1}},s("explode-device").onclick=()=>{let v=!!u?.toggleExplode();s("explode-device").classList.toggle("active",v),s("explode-device").textContent=v?"\u5408\u62E2\u7ED3\u6784":"\u5C55\u5F00\u7ED3\u6784"},document.addEventListener("keydown",v=>{if(v.key==="Escape"&&!document.querySelector("dialog[open]")){let I=document.body.classList.contains("photo-mode");document.body.classList.remove("photo-mode","assets-open"),s("photo-button").classList.remove("active"),I?u?.render():fe()}}),s("toggle-night").onclick=()=>{u&&(u.setNight(!u.night),document.body.classList.toggle("night",u.night),ee("toggle-night",u.night),h.history&&Lailin.chart(s("trend-chart"),h.history,t.types[h.devices.get(h.selected).type]))},s("toggle-labels").onclick=()=>{h.labels=T("toggle-labels"),Ee()},s("layer-landscape").onclick=()=>u?.setLayer("landscape",T("layer-landscape")),s("layer-pipes").onclick=()=>u?.setLayer("pipes",T("layer-pipes")),s("high-quality").onclick=()=>u?.quality(T("high-quality")),e("[data-hours]").forEach(v=>v.onclick=()=>{h.hours=Number(v.dataset.hours),e("[data-hours]").forEach(I=>I.classList.toggle("active",I===v)),Ze()}),s("export-history").onclick=Je,e("[data-view]").forEach(v=>v.onclick=()=>ht(v.dataset.view)),s("open-alarms").onclick=()=>ht("alarms"),s("refresh-data").onclick=xe,e("[data-alarm-state]").forEach(v=>v.onclick=()=>{h.alarmFilter=v.dataset.alarmState,e("[data-alarm-state]").forEach(I=>I.classList.toggle("active",I===v)),xe()}),document.addEventListener("click",v=>{let I=v.target.closest("[data-ack]");I&&ge(I.dataset.ack);let O=v.target.closest("[data-locate]");O&&(ce(O.dataset.locate),ht("scene"),$(!1));let q=v.target.closest("[data-close]");q&&s(q.dataset.close).close()}),s("login-button").onclick=()=>{if(n){y("\u79BB\u7EBF\u9884\u89C8\u53EA\u8BFB\u3002\u5B8C\u6574\u9879\u76EE\u63D0\u4F9B\u64CD\u4F5C\u5458\u767B\u5F55\u4E0E\u5BA1\u8BA1\u3002");return}h.session.authenticated?G({title:"\u9000\u51FA\u64CD\u4F5C\u5458\u4F1A\u8BDD",description:"\u9000\u51FA\u540E\u4ECD\u53EF\u6D4F\u89C8\u6F14\u793A\u8D44\u4EA7\uFF0C\u5199\u64CD\u4F5C\u9700\u8981\u91CD\u65B0\u767B\u5F55\u3002",callback:async()=>{await D("/auth/logout",{method:"POST"}),h.session={authenticated:!1},F(),y("\u5DF2\u9000\u51FA\u767B\u5F55")}}):B(()=>y("\u64CD\u4F5C\u5458\u5DF2\u767B\u5F55"))},s("login-form").onsubmit=async v=>{if(v.preventDefault(),!w){w=!0,s("submit-login").disabled=!0,s("login-error").textContent="";try{h.session=await D("/auth/login",{method:"POST",body:{username:s("login-username").value,password:s("login-password").value}}),s("login-password").value="",s("login-dialog").close(),F();let I=h.loginNext;h.loginNext=null,await I?.()}catch(I){s("login-error").textContent=I.message}finally{w=!1,s("submit-login").disabled=!1}}},s("confirm-form").onsubmit=async v=>{v.preventDefault();let I=g,O=s("confirm-note").value;g=null,s("confirm-dialog").close();try{await I?.(O)}catch(q){R(q)}},s("demo-alarm").onclick=()=>ye("alarm"),s("demo-offline").onclick=()=>ye("offline"),s("demo-restore").onclick=()=>ye("normal"),s("device-control").onclick=be,s("help-button").onclick=()=>s("help-dialog").showModal(),s("reconnect-button").onclick=K,s("mobile-assets").onclick=()=>document.body.classList.toggle("assets-open"),s("mobile-account").onclick=()=>s("login-button").click(),s("close-sidebar").onclick=()=>document.body.classList.remove("assets-open"),s("close-inspector").onclick=()=>document.body.classList.add("panel-hidden"),window.addEventListener("resize",()=>{h.history&&Lailin.chart(s("trend-chart"),h.history,t.types[h.devices.get(h.selected).type]),Ee()})}async function st(){if(tt(),ne(),V(),await Ge(),await new Promise(U=>requestAnimationFrame(()=>setTimeout(U,0))),n)te(n.snapshot),Ze();else try{h.session=await D("/auth/session"),F(),await K(),h.connected&&Ze()}catch(U){R(U)}P.push(setInterval(z,1e3)),P.push(setInterval(()=>{!n&&h.view==="scene"&&Ze()},15e3))}function k(){M||(M=!0,p?.close(),P.forEach(clearInterval),m?.abort(),u?.dispose())}return window.addEventListener("pagehide",k,{once:!0}),window.addEventListener("pageshow",U=>{U.persisted&&location.reload()}),st().catch(R),{get viewer(){return u},get state(){return{selected:h.selected,view:h.view,hours:h.hours,preview:h.preview,version:h.snapshot?.version,connected:h.connected,authenticated:h.session.authenticated,deviceCount:h.devices.size}},dispose:k}})();})();
