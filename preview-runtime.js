(()=>{var Yg=Object.defineProperty;var $g=(s,e)=>{for(var t in e)Yg(s,t,{get:e[t],enumerable:!0})};(globalThis.Lailin||={}).catalog=(()=>{let s={camera:{label:"\u89C6\u9891\u5B89\u9632",icon:"camera",metric:"latency",metricLabel:"\u94FE\u8DEF\u5EF6\u65F6",unit:"ms",range:[0,5e3],base:38,warning:180,alarm:400,recovery:130},light:{label:"\u9053\u8DEF\u7167\u660E",icon:"sun",metric:"power",metricLabel:"\u6709\u529F\u529F\u7387",unit:"W",range:[0,300],base:56,warning:95,alarm:120,recovery:85},meter:{label:"\u914D\u7535\u76D1\u6D4B",icon:"bolt",metric:"temperature",metricLabel:"\u67DC\u5185\u6E29\u5EA6",unit:"\xB0C",range:[-40,150],base:34,warning:55,alarm:70,recovery:48},hvac:{label:"\u6696\u901A\u7A7A\u8C03",icon:"fan",metric:"temperature",metricLabel:"\u51FA\u98CE\u6E29\u5EA6",unit:"\xB0C",range:[-30,120],base:18,warning:32,alarm:42,recovery:28},pump:{label:"\u7ED9\u6392\u6C34",icon:"drop",metric:"temperature",metricLabel:"\u8F74\u627F\u6E29\u5EA6",unit:"\xB0C",range:[-20,150],base:43,warning:65,alarm:78,recovery:58},charger:{label:"\u5145\u7535\u8BBE\u65BD",icon:"plug",metric:"temperature",metricLabel:"\u6A21\u5757\u6E29\u5EA6",unit:"\xB0C",range:[-40,130],base:36,warning:55,alarm:72,recovery:48},gate:{label:"\u51FA\u5165\u7BA1\u7406",icon:"gate",metric:"cycles",metricLabel:"\u7D2F\u8BA1\u901A\u884C",unit:"\u6B21",range:[0,1e8],base:260,warning:null,alarm:null,recovery:null},sensor:{label:"\u73AF\u5883\u611F\u77E5",icon:"leaf",metric:"pm25",metricLabel:"PM2.5",unit:"\u03BCg/m\xB3",range:[0,2e3],base:24,warning:75,alarm:150,recovery:60},bench:{label:"\u53F0\u67B6\u73AF\u5883",icon:"leaf",metric:"temperature",metricLabel:"\u63A2\u5934\u6E29\u5EA6",unit:"\xB0C",range:[-20,60],base:25,warning:28,alarm:30,recovery:27}},e=[],t={A:"\u7814\u53D1\u529E\u516C\u533A",B:"\u751F\u4EA7\u7269\u6D41\u533A",C:"\u80FD\u6E90\u8BBE\u5907\u533A",D:"\u9053\u8DEF\u4E0E\u516C\u5171\u533A"},n={camera:"CAM",light:"LGT",meter:"PWR",hvac:"AHU",pump:"PMP",charger:"EV",gate:"GAT",sensor:"ENV"};function i(r,a,o,l){let c=e.filter(d=>d.type===r).length+1,h=`${n[r]}-${String(c).padStart(2,"0")}`;e.push({id:h,type:r,name:l||`${s[r].label} ${String(c).padStart(2,"0")}`,zone:o,zoneName:t[o],position:a,modelNode:`asset/${h}`,serial:`LL-2609-${n[r]}-${String(c).padStart(4,"0")}`,manufacturer:"\u6765\u9716 \xB7 \u6F14\u793A\u8D44\u4EA7",installedAt:"2026-06-01",maintenanceDue:"2026-12-01",protocol:r==="camera"?"ONVIF / \u7F51\u5173\u8F6C\u53D1":r==="meter"?"Modbus RTU / \u7F51\u5173\u8F6C\u53D1":"MQTT / \u7F51\u5173\u8F6C\u53D1",source:"simulated",owner:"\u56ED\u533A\u8BBE\u65BD\u8FD0\u7EF4\u7EC4",metric:s[r].metric,unit:s[r].unit})}return[[-63,0,44],[63,0,44],[-63,0,-44],[63,0,-44],[-6,0,6.8],[8,0,46.5]].forEach((r,a)=>i("camera",r,"D",["\u897F\u5357\u9053\u8DEF\u7403\u673A","\u4E1C\u5357\u9053\u8DEF\u67AA\u673A","\u7269\u6D41\u5165\u53E3\u6444\u50CF\u673A","\u4E1C\u5317\u9053\u8DEF\u6444\u50CF\u673A","\u4E2D\u592E\u6B65\u9053\u6444\u50CF\u673A","\u5357\u95E8\u51FA\u5165\u53E3\u6444\u50CF\u673A"][a])),[[-65,0,27],[-65,0,-4.6],[-65,0,-27],[65,0,26],[65,0,-4.6],[65,0,-26],[-43,0,47],[-19,0,47],[22,0,-47],[45,0,-47]].forEach(r=>i("light",r,"D")),[[51,0,9],[51,0,12],[51,0,15],[-11,0,-7]].forEach((r,a)=>i("meter",r,a<3?"C":"B",`\u4F4E\u538B\u914D\u7535\u67DC ${a+1}`)),[[-45,16.5,18],[-34,16.5,18],[20,12,-29],[31,12,-29]].forEach((r,a)=>i("hvac",r,a<2?"A":"B",`\u5C4B\u9876\u7A7A\u8C03\u673A\u7EC4 ${a+1}`)),[[27,0,31.2],[33,0,31.2],[39,0,31.2],[45,0,31.2]].forEach((r,a)=>i("pump",r,"C",`\u5FAA\u73AF\u6C34\u6CF5 P-${String(a+1).padStart(2,"0")}`)),[[19,0,41.1],[26,0,41.1],[33,0,41.1],[40,0,41.1],[47,0,41.1],[54,0,41.1]].forEach((r,a)=>i("charger",r,"C",`\u53CC\u67AA\u5145\u7535\u6869 ${a+1}`)),[[-4.4,0,54.8],[4.4,0,54.8]].forEach((r,a)=>i("gate",r,"D",a?"\u5357\u95E8\u51FA\u53E3\u9053\u95F8":"\u5357\u95E8\u5165\u53E3\u9053\u95F8")),[[3.5,0,30],[-11,0,24],[-5,0,-30],[55,0,-13]].forEach((r,a)=>i("sensor",r,a===1?"A":"D",`\u5FAE\u73AF\u5883\u76D1\u6D4B\u7AD9 ${a+1}`)),Object.assign(e.find(r=>r.id==="ENV-01"),{type:"bench",name:"\u53F0\u67B6\u6E29\u6E7F\u5EA6\u63A2\u5934",metric:"temperature",unit:"\xB0C",protocol:"Modbus RTU / TCP \u534F\u8BAE\u6A21\u62DF",serial:"\u53F0\u67B6\u578B\u53F7\u4E0E\u5E8F\u5217\u53F7\u5F85\u5B9E\u7269\u6838\u9A8C",manufacturer:"\u53C2\u8003\u70B9\u8868\uFF1A\u5EFA\u5927\u4EC1\u79D1 RS-WS-N01-8-T",installedAt:null,maintenanceDue:"\u6309\u5B9E\u7269\u624B\u518C",owner:"\u53F0\u67B6\u9A8C\u8BC1",locationNote:"\u865A\u62DF\u5C55\u793A\u4F4D\u7F6E\uFF0C\u4E0D\u4EE3\u8868\u5B9E\u7269\u56ED\u533A",historyNote:"\u6E29\u5EA6\u7559\u5B58\u5386\u53F2\uFF1B\u6E7F\u5EA6\u4EC5\u5B9E\u65F6\u663E\u793A"}),{types:s,assets:e,zones:t,site:{name:"\u6765\u9716\u667A\u9020\u56ED",width:164,depth:124,area:20336,coordinateSystem:"local-meters-y-up",version:"2.1.0",fictional:!0}}})();var be={};$g(be,{ACESFilmicToneMapping:()=>ka,AddEquation:()=>Kn,AddOperation:()=>Tf,AdditiveAnimationBlendMode:()=>qu,AdditiveBlending:()=>La,AgXToneMapping:()=>Ga,AlphaFormat:()=>Wu,AlwaysCompare:()=>Vf,AlwaysDepth:()=>Ro,AlwaysStencilFunc:()=>Uf,AmbientLight:()=>Sl,AnimationAction:()=>Dl,AnimationClip:()=>Ps,AnimationLoader:()=>Jh,AnimationMixer:()=>cu,AnimationObjectGroup:()=>lu,AnimationUtils:()=>Zh,ArcCurve:()=>Ko,ArrayCamera:()=>Rl,ArrowHelper:()=>Iu,AttachedBindMode:()=>Rh,Audio:()=>Pl,AudioAnalyser:()=>ou,AudioContext:()=>Pa,AudioListener:()=>ru,AudioLoader:()=>iu,AxesHelper:()=>Du,BackSide:()=>mn,BasicDepthPacking:()=>Lf,BasicShadowMap:()=>$m,BatchedMesh:()=>Go,BezierInterpolant:()=>xl,Bone:()=>ha,BooleanKeyframeTrack:()=>Ni,Box2:()=>Ll,Box3:()=>on,Box3Helper:()=>Ru,BoxGeometry:()=>Hn,BoxHelper:()=>Cu,BufferAttribute:()=>_t,BufferGeometry:()=>st,BufferGeometryLoader:()=>Al,ByteType:()=>ku,Cache:()=>xi,Camera:()=>vr,CameraHelper:()=>Au,CanvasTexture:()=>rr,CapsuleGeometry:()=>Yo,CatmullRomCurve3:()=>or,CineonToneMapping:()=>za,CircleGeometry:()=>$o,ClampToEdgeWrapping:()=>_n,Clock:()=>gu,Color:()=>Ce,ColorKeyframeTrack:()=>Ta,ColorManagement:()=>xt,Compatibility:()=>L0,CompressedArrayTexture:()=>Xh,CompressedCubeTexture:()=>qh,CompressedTexture:()=>ai,CompressedTextureLoader:()=>Kh,ConeGeometry:()=>fa,ConstantAlphaFactor:()=>Sf,ConstantColorFactor:()=>yf,Controls:()=>Ia,CubeCamera:()=>Cl,CubeDepthTexture:()=>qo,CubeReflectionMapping:()=>wi,CubeRefractionMapping:()=>is,CubeTexture:()=>Ts,CubeTextureLoader:()=>jh,CubeUVReflectionMapping:()=>Tr,CubicBezierCurve:()=>pa,CubicBezierCurve3:()=>jo,CubicInterpolant:()=>ml,CullFaceBack:()=>Uu,CullFaceFront:()=>lf,CullFaceFrontBack:()=>Ym,CullFaceNone:()=>of,Curve:()=>Wn,CurvePath:()=>cr,CustomBlending:()=>Ul,CustomToneMapping:()=>Va,CylinderGeometry:()=>Es,Cylindrical:()=>xu,Data3DTexture:()=>tr,DataArrayTexture:()=>er,DataTexture:()=>ln,DataTextureLoader:()=>Qh,DataUtils:()=>Nh,DecrementStencilOp:()=>h0,DecrementWrapStencilOp:()=>d0,DefaultLoadingManager:()=>qf,DepthFormat:()=>_i,DepthStencilFormat:()=>Ti,DepthTexture:()=>Mi,DetachedBindMode:()=>Ef,DirectionalLight:()=>Ml,DirectionalLightHelper:()=>Eu,DiscreteInterpolant:()=>gl,DodecahedronGeometry:()=>Zo,DoubleSide:()=>Cn,DstAlphaFactor:()=>Na,DstColorFactor:()=>Ua,DynamicCopyUsage:()=>A0,DynamicDrawUsage:()=>M0,DynamicReadUsage:()=>w0,EdgesGeometry:()=>Jo,EllipseCurve:()=>ar,EqualCompare:()=>Bf,EqualDepth:()=>Io,EqualStencilFunc:()=>g0,EquirectangularReflectionMapping:()=>Wa,EquirectangularRefractionMapping:()=>Xa,Euler:()=>ri,EventDispatcher:()=>Gn,ExternalTexture:()=>da,ExtrudeGeometry:()=>nl,FileLoader:()=>oi,Float16BufferAttribute:()=>kh,Float32BufferAttribute:()=>Le,FloatType:()=>En,Fog:()=>Fo,FogExp2:()=>Uo,FramebufferTexture:()=>Wh,FrontSide:()=>ns,Frustum:()=>Li,FrustumArray:()=>Vo,GLBufferAttribute:()=>pu,GLSL1:()=>R0,GLSL3:()=>Yu,GreaterCompare:()=>zf,GreaterDepth:()=>Lo,GreaterEqualCompare:()=>Mc,GreaterEqualDepth:()=>Do,GreaterEqualStencilFunc:()=>y0,GreaterStencilFunc:()=>_0,GridHelper:()=>wu,Group:()=>gi,HTMLTexture:()=>Yh,HalfFloatType:()=>Kt,HemisphereLight:()=>vl,HemisphereLightHelper:()=>bu,IcosahedronGeometry:()=>il,ImageBitmapLoader:()=>nu,ImageLoader:()=>Is,ImageUtils:()=>Qs,IncrementStencilOp:()=>c0,IncrementWrapStencilOp:()=>u0,InstancedBufferAttribute:()=>Di,InstancedBufferGeometry:()=>El,InstancedInterleavedBuffer:()=>fu,InstancedMesh:()=>sr,Int16BufferAttribute:()=>Bh,Int32BufferAttribute:()=>zh,Int8BufferAttribute:()=>Uh,IntType:()=>Ol,InterleavedBuffer:()=>ws,InterleavedBufferAttribute:()=>Ji,Interpolant:()=>Qi,InterpolateBezier:()=>Ph,InterpolateDiscrete:()=>Ms,InterpolateLinear:()=>Ks,InterpolateSmooth:()=>So,InterpolationSamplingMode:()=>D0,InterpolationSamplingType:()=>I0,InvertStencilOp:()=>f0,KeepStencilOp:()=>bo,KeyframeTrack:()=>Un,LOD:()=>Bo,LatheGeometry:()=>sl,Layers:()=>nr,LessCompare:()=>Of,LessDepth:()=>Po,LessEqualCompare:()=>yc,LessEqualDepth:()=>Js,LessEqualStencilFunc:()=>x0,LessStencilFunc:()=>m0,Light:()=>bi,LightProbe:()=>wl,LightShadow:()=>_r,Line:()=>yi,Line3:()=>vu,LineBasicMaterial:()=>pn,LineCurve:()=>ma,LineCurve3:()=>lr,LineDashedMaterial:()=>pl,LineLoop:()=>Ho,LineSegments:()=>Jn,LinearFilter:()=>Nt,LinearInterpolant:()=>wa,LinearMipMapLinearFilter:()=>Qm,LinearMipMapNearestFilter:()=>jm,LinearMipmapLinearFilter:()=>jn,LinearMipmapNearestFilter:()=>Ls,LinearSRGBColorSpace:()=>na,LinearToneMapping:()=>Oa,LinearTransfer:()=>ia,Loader:()=>vn,LoaderUtils:()=>Ra,LoadingManager:()=>Aa,LoopOnce:()=>Af,LoopPingPong:()=>Rf,LoopRepeat:()=>Cf,MOUSE:()=>es,Material:()=>rn,MaterialBlending:()=>Zm,MaterialLoader:()=>Tl,MathUtils:()=>Ns,Matrix2:()=>_u,Matrix3:()=>lt,Matrix4:()=>nt,MaxEquation:()=>ff,Mesh:()=>ft,MeshBasicMaterial:()=>An,MeshDepthMaterial:()=>Sa,MeshDistanceMaterial:()=>ba,MeshLambertMaterial:()=>mr,MeshMatcapMaterial:()=>fl,MeshNormalMaterial:()=>pr,MeshPhongMaterial:()=>ul,MeshPhysicalMaterial:()=>fr,MeshStandardMaterial:()=>Si,MeshToonMaterial:()=>dl,MinEquation:()=>df,MirroredRepeatWrapping:()=>ys,MixOperation:()=>wf,MultiplyBlending:()=>Ou,MultiplyOperation:()=>Fa,NearestFilter:()=>Ot,NearestMipMapLinearFilter:()=>Km,NearestMipMapNearestFilter:()=>Jm,NearestMipmapLinearFilter:()=>ss,NearestMipmapNearestFilter:()=>qa,NeutralToneMapping:()=>Ha,NeverCompare:()=>Ff,NeverDepth:()=>Co,NeverStencilFunc:()=>p0,NoBlending:()=>$t,NoColorSpace:()=>Xn,NoNormalPacking:()=>s0,NoToneMapping:()=>li,NormalAnimationBlendMode:()=>vc,NormalBlending:()=>wr,NormalGAPacking:()=>a0,NormalRGPacking:()=>r0,NotEqualCompare:()=>kf,NotEqualDepth:()=>No,NotEqualStencilFunc:()=>v0,NumberKeyframeTrack:()=>gr,Object3D:()=>Tt,ObjectLoader:()=>tu,ObjectSpaceNormalMap:()=>Nf,OctahedronGeometry:()=>ya,OneFactor:()=>pf,OneMinusConstantAlphaFactor:()=>bf,OneMinusConstantColorFactor:()=>Mf,OneMinusDstAlphaFactor:()=>xf,OneMinusDstColorFactor:()=>_f,OneMinusSrcAlphaFactor:()=>zu,OneMinusSrcColorFactor:()=>gf,OrthographicCamera:()=>Fi,PCFShadowMap:()=>Da,PCFSoftShadowMap:()=>cf,PMREMGenerator:()=>Ec,Path:()=>As,PerspectiveCamera:()=>tn,Plane:()=>kn,PlaneGeometry:()=>ji,PlaneHelper:()=>Pu,PointLight:()=>yr,PointLightHelper:()=>Su,Points:()=>Wo,PointsMaterial:()=>ua,PolarGridHelper:()=>Tu,PolyhedronGeometry:()=>Ki,PositionalAudio:()=>au,PropertyBinding:()=>bt,PropertyMixer:()=>Il,QuadraticBezierCurve:()=>ga,QuadraticBezierCurve3:()=>xa,Quaternion:()=>Xt,QuaternionKeyframeTrack:()=>xr,QuaternionLinearInterpolant:()=>_l,R11_EAC_Format:()=>Jl,RED_GREEN_RGTC2_Format:()=>Qa,RED_RGTC1_Format:()=>gc,REVISION:()=>Nl,RG11_EAC_Format:()=>ja,RGBADepthPacking:()=>t0,RGBAFormat:()=>sn,RGBAIntegerFormat:()=>Gl,RGBA_ASTC_10x10_Format:()=>hc,RGBA_ASTC_10x5_Format:()=>oc,RGBA_ASTC_10x6_Format:()=>lc,RGBA_ASTC_10x8_Format:()=>cc,RGBA_ASTC_12x10_Format:()=>uc,RGBA_ASTC_12x12_Format:()=>dc,RGBA_ASTC_4x4_Format:()=>Ql,RGBA_ASTC_5x4_Format:()=>ec,RGBA_ASTC_5x5_Format:()=>tc,RGBA_ASTC_6x5_Format:()=>nc,RGBA_ASTC_6x6_Format:()=>ic,RGBA_ASTC_8x5_Format:()=>sc,RGBA_ASTC_8x6_Format:()=>rc,RGBA_ASTC_8x8_Format:()=>ac,RGBA_BPTC_Format:()=>fc,RGBA_ETC2_EAC_Format:()=>Zl,RGBA_PVRTC_2BPPV1_Format:()=>ql,RGBA_PVRTC_4BPPV1_Format:()=>Xl,RGBA_S3TC_DXT1_Format:()=>Za,RGBA_S3TC_DXT3_Format:()=>Ja,RGBA_S3TC_DXT5_Format:()=>Ka,RGBDepthPacking:()=>n0,RGBFormat:()=>Xu,RGBIntegerFormat:()=>e0,RGB_BPTC_SIGNED_Format:()=>pc,RGB_BPTC_UNSIGNED_Format:()=>mc,RGB_ETC1_Format:()=>Yl,RGB_ETC2_Format:()=>$l,RGB_PVRTC_2BPPV1_Format:()=>Wl,RGB_PVRTC_4BPPV1_Format:()=>Hl,RGB_S3TC_DXT1_Format:()=>$a,RGDepthPacking:()=>i0,RGFormat:()=>as,RGIntegerFormat:()=>Vl,RawShaderMaterial:()=>Rs,Ray:()=>vi,Raycaster:()=>mu,RectAreaLight:()=>bl,RedFormat:()=>kl,RedIntegerFormat:()=>Ya,ReinhardToneMapping:()=>Ba,RenderObjectRefreshType:()=>N0,RenderTarget:()=>aa,RenderTarget3D:()=>hu,RepeatWrapping:()=>Tn,ReplaceStencilOp:()=>l0,ReverseSubtractEquation:()=>uf,RingGeometry:()=>rl,SIGNED_R11_EAC_Format:()=>Kl,SIGNED_RED_GREEN_RGTC2_Format:()=>_c,SIGNED_RED_RGTC1_Format:()=>xc,SIGNED_RG11_EAC_Format:()=>jl,SRGBColorSpace:()=>en,SRGBTransfer:()=>At,Scene:()=>Ii,ShaderChunk:()=>pt,ShaderLib:()=>Ei,ShaderMaterial:()=>Pt,ShadowMaterial:()=>hl,Shape:()=>Cs,ShapeGeometry:()=>al,ShapePath:()=>Lu,ShapeUtils:()=>si,ShortType:()=>Vu,Skeleton:()=>ko,SkeletonHelper:()=>Mu,SkinnedMesh:()=>zo,Source:()=>Ih,Sphere:()=>nn,SphereGeometry:()=>Ma,Spherical:()=>Sr,SphericalHarmonics3:()=>Ca,SplineCurve:()=>_a,SpotLight:()=>yl,SpotLightHelper:()=>yu,Sprite:()=>Oo,SpriteMaterial:()=>ca,SrcAlphaFactor:()=>Bu,SrcAlphaSaturateFactor:()=>vf,SrcColorFactor:()=>mf,StaticCopyUsage:()=>E0,StaticDrawUsage:()=>Sc,StaticReadUsage:()=>b0,StereoCamera:()=>su,StreamCopyUsage:()=>C0,StreamDrawUsage:()=>S0,StreamReadUsage:()=>T0,StringKeyframeTrack:()=>Ui,SubtractEquation:()=>hf,SubtractiveBlending:()=>Fu,TOUCH:()=>ts,TangentSpaceNormalMap:()=>Oi,TetrahedronGeometry:()=>ol,Texture:()=>Yt,TextureLoader:()=>eu,TextureSource:()=>Nn,TextureUtils:()=>Nu,Timer:()=>Mr,TimestampQuery:()=>P0,TorusGeometry:()=>ur,TorusKnotGeometry:()=>ll,Triangle:()=>mi,TriangleFanDrawMode:()=>Df,TriangleStripDrawMode:()=>If,TrianglesDrawMode:()=>Pf,TubeGeometry:()=>dr,UVMapping:()=>Fl,Uint16BufferAttribute:()=>oa,Uint32BufferAttribute:()=>la,Uint8BufferAttribute:()=>Fh,Uint8ClampedBufferAttribute:()=>Oh,Uniform:()=>uu,UniformsGroup:()=>du,UniformsLib:()=>Ne,UniformsUtils:()=>Pn,UnsignedByteType:()=>yn,UnsignedInt101111Type:()=>Hu,UnsignedInt248Type:()=>rs,UnsignedInt5999Type:()=>Gu,UnsignedIntType:()=>Qn,UnsignedShort4444Type:()=>Bl,UnsignedShort5551Type:()=>zl,UnsignedShortType:()=>Er,VSMShadowMap:()=>br,Vector2:()=>oe,Vector3:()=>L,Vector4:()=>Rt,VectorKeyframeTrack:()=>Ea,VideoFrameTexture:()=>Hh,VideoTexture:()=>Xo,WebGL3DRenderTarget:()=>Lh,WebGLArrayRenderTarget:()=>Dh,WebGLCoordinateSystem:()=>Vn,WebGLCubeRenderTarget:()=>Ac,WebGLRenderTarget:()=>kt,WebGLRenderer:()=>hp,WebGLUtils:()=>wg,WebGPUCoordinateSystem:()=>Ss,WebXRController:()=>ir,WireframeGeometry:()=>cl,WrapAroundEnding:()=>ta,ZeroCurvatureEnding:()=>_s,ZeroFactor:()=>Ds,ZeroSlopeEnding:()=>vs,ZeroStencilOp:()=>o0,createCanvasElement:()=>Gf,error:()=>je,getConsoleFunction:()=>O0,log:()=>ra,setConsoleFunction:()=>F0,warn:()=>De,warnOnce:()=>Pi});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Nl="186",es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,Uu=1,lf=2,Ym=3,$m=0,Da=1,cf=2,br=3,ns=0,mn=1,Cn=2,$t=0,wr=1,La=2,Fu=3,Ou=4,Ul=5,Zm=6,Kn=100,hf=101,uf=102,df=103,ff=104,Ds=200,pf=201,mf=202,gf=203,Bu=204,zu=205,Na=206,xf=207,Ua=208,_f=209,vf=210,yf=211,Mf=212,Sf=213,bf=214,Co=0,Ro=1,Po=2,Js=3,Io=4,Do=5,Lo=6,No=7,Fa=0,wf=1,Tf=2,li=0,Oa=1,Ba=2,za=3,ka=4,Va=5,Ga=6,Ha=7,Rh="attached",Ef="detached",Fl=300,wi=301,is=302,Wa=303,Xa=304,Tr=306,Tn=1e3,_n=1001,ys=1002,Ot=1003,qa=1004,Jm=1004,ss=1005,Km=1005,Nt=1006,Ls=1007,jm=1007,jn=1008,Qm=1008,yn=1009,ku=1010,Vu=1011,Er=1012,Ol=1013,Qn=1014,En=1015,Kt=1016,Bl=1017,zl=1018,rs=1020,Gu=35902,Hu=35899,Wu=1021,Xu=1022,sn=1023,_i=1026,Ti=1027,kl=1028,Ya=1029,as=1030,Vl=1031,e0=1032,Gl=1033,$a=33776,Za=33777,Ja=33778,Ka=33779,Hl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,$l=37492,Zl=37496,Jl=37488,Kl=37489,ja=37490,jl=37491,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,ac=37815,oc=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,xc=36284,Qa=36285,_c=36286,Af=2200,Cf=2201,Rf=2202,Ms=2300,Ks=2301,So=2302,Ph=2303,_s=2400,vs=2401,ta=2402,vc=2500,qu=2501,Pf=0,If=1,Df=2,Lf=3200,t0=3201,n0=3202,i0=3203,Oi=0,Nf=1,Xn="",en="srgb",na="srgb-linear",ia="linear",At="srgb",s0="",r0="rg",a0="ga",o0=0,bo=7680,l0=7681,c0=7682,h0=7683,u0=34055,d0=34056,f0=5386,p0=512,m0=513,g0=514,x0=515,_0=516,v0=517,y0=518,Uf=519,Ff=512,Of=513,Bf=514,yc=515,zf=516,kf=517,Mc=518,Vf=519,Sc=35044,M0=35048,S0=35040,b0=35045,w0=35049,T0=35041,E0=35046,A0=35050,C0=35042,R0="100",Yu="300 es",Vn=2e3,Ss=2001,P0={COMPUTE:"compute",RENDER:"render"},I0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},D0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},L0={TEXTURE_COMPARE:"depthTextureCompare"},N0={NONE:0,SHARED:1,FULL:2};function Zg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var Jg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Qr(s,e){return new Jg[s](e)}function U0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gf(){let s=sa("canvas");return s.style.display="block",s}var Fp={},bs=null;function F0(s){bs=s}function O0(){return bs}function ra(...s){let e="THREE."+s.shift();bs?bs("log",e,...s):console.log(e,...s)}function B0(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=B0(s);let e="THREE."+s.shift();if(bs)bs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function je(...s){s=B0(s);let e="THREE."+s.shift();if(bs)bs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Pi(...s){let e=s.join(" ");e in Fp||(Fp[e]=!0,De(...s))}function z0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var k0={[Co]:Ro,[Po]:Lo,[Io]:No,[Js]:Do,[Ro]:Co,[Lo]:Po,[No]:Io,[Do]:Js},Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Op=1234567,Zs=Math.PI/180,js=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function Hf(s,e){return(s%e+e)%e}function Kg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jg(s,e,t){return s!==e?(t-s)/(e-s):0}function wo(s,e,t){return(1-t)*s+t*e}function Qg(s,e,t,n){return wo(s,e,1-Math.exp(-t*n))}function ex(s,e=1){return e-Math.abs(Hf(s,e*2)-e)}function tx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ix(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sx(s,e){return s+Math.random()*(e-s)}function rx(s){return s*(.5-Math.random())}function ax(s){s!==void 0&&(Op=s);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ox(s){return s*Zs}function lx(s){return s*js}function cx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ux(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ns={DEG2RAD:Zs,RAD2DEG:js,generateUUID:Zn,clamp:at,euclideanModulo:Hf,mapLinear:Kg,inverseLerp:jg,lerp:wo,damp:Qg,pingpong:ex,smoothstep:tx,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ax,degToRad:ox,radToDeg:lx,isPowerOfTwo:cx,ceilPowerOfTwo:hx,floorPowerOfTwo:ux,setQuaternionFromProperEuler:dx,normalize:dt,denormalize:Ln},oe=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,o=Math.sin(o*y)/w,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dd=new L,Bp=new Xt,lt=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],y=i[1],w=i[4],_=i[7],S=i[2],b=i[5],P=i[8];return r[0]=a*x+o*y+l*S,r[3]=a*m+o*w+l*b,r[6]=a*g+o*_+l*P,r[1]=c*x+h*y+d*S,r[4]=c*m+h*w+d*b,r[7]=c*g+h*_+d*P,r[2]=u*x+f*y+p*S,r[5]=u*m+f*w+p*b,r[8]=u*g+f*_+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fd=new lt,zp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fx(){let s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(i.r=ea(i.r),i.g=ea(i.g),i.b=ea(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[na]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:At,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),s}var xt=fx();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Lr,Qs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=sa("canvas")),Lr.width=e.width,Lr.height=e.height;let i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},px=0,Nn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pd(i[a].image)):r.push(pd(i[a]))}else r=pd(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qs.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Ih=class extends Nn{constructor(e=null){Pi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},mx=0,md=new L,Yt=class s extends Gn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=_n,i=_n,r=Nt,a=jn,o=sn,l=yn,c=s.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Zn(),this.name="",this.source=new Nn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Fl;Yt.DEFAULT_ANISOTROPY=1;var Rt=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,S=(g+1)/2,b=(h+u)/4,P=(d+x)/4,M=(p+m)/4;return w>_&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=P/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=M/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=P/r,i=M/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Yt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Nn(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Dh=class extends kt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new er(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},tr=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Lh=class extends kt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new tr(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},nt=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,xx)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ds.crossVectors(n,Yn),ds.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ds.crossVectors(n,Yn)),ds.normalize(),kc.crossVectors(Yn,ds),i[0]=ds.x,i[4]=kc.x,i[8]=Yn.x,i[1]=ds.y,i[5]=kc.y,i[9]=Yn.y,i[2]=ds.z,i[6]=kc.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],_=n[11],S=n[15],b=i[0],P=i[4],M=i[8],A=i[12],D=i[1],F=i[5],G=i[9],$=i[13],N=i[2],X=i[6],ee=i[10],K=i[14],fe=i[3],Z=i[7],ne=i[11],re=i[15];return r[0]=a*b+o*D+l*N+c*fe,r[4]=a*P+o*F+l*X+c*Z,r[8]=a*M+o*G+l*ee+c*ne,r[12]=a*A+o*$+l*K+c*re,r[1]=h*b+d*D+u*N+f*fe,r[5]=h*P+d*F+u*X+f*Z,r[9]=h*M+d*G+u*ee+f*ne,r[13]=h*A+d*$+u*K+f*re,r[2]=p*b+x*D+m*N+g*fe,r[6]=p*P+x*F+m*X+g*Z,r[10]=p*M+x*G+m*ee+g*ne,r[14]=p*A+x*$+m*K+g*re,r[3]=y*b+w*D+_*N+S*fe,r[7]=y*P+w*F+_*X+S*Z,r[11]=y*M+w*G+_*ee+S*ne,r[15]=y*A+w*$+_*K+S*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*u,w=o*f-c*d,_=o*u-l*d,S=a*f-c*h,b=a*u-l*h,P=a*d-o*h;return t*(x*y-m*w+g*_)-n*(p*y-m*S+g*b)+i*(p*w-x*S+g*P)-r*(p*_-x*b+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*o-n*a,w=t*l-i*a,_=t*c-r*a,S=n*l-i*o,b=n*c-r*o,P=i*c-r*l,M=h*x-d*p,A=h*m-u*p,D=h*g-f*p,F=d*m-u*x,G=d*g-f*x,$=u*g-f*m,N=y*$-w*G+_*F+S*D-b*A+P*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return e[0]=(o*$-l*G+c*F)*X,e[1]=(i*G-n*$-r*F)*X,e[2]=(x*P-m*b+g*S)*X,e[3]=(u*b-d*P-f*S)*X,e[4]=(l*D-a*$-c*A)*X,e[5]=(t*$-i*D+r*A)*X,e[6]=(m*_-p*P-g*w)*X,e[7]=(h*P-u*_+f*w)*X,e[8]=(a*G-o*D+c*M)*X,e[9]=(n*D-t*G-r*M)*X,e[10]=(p*b-x*_+g*y)*X,e[11]=(d*_-h*b-f*y)*X,e[12]=(o*A-a*F-l*M)*X,e[13]=(t*F-n*A+i*M)*X,e[14]=(x*w-p*S-m*y)*X,e[15]=(h*S-d*w+u*y)*X,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,y=l*c,w=l*h,_=l*d,S=n.x,b=n.y,P=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+_)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+g))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(p+w)*P,i[9]=(m-y)*P,i[10]=(1-(u+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Nr.set(i[0],i[1],i[2]).length(),o=Nr.set(i[4],i[5],i[6]).length(),l=Nr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ss)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Vn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ss)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nr=new L,ui=new nt,gx=new L(0,0,0),xx=new L(1,1,1),ds=new L,kc=new L,Yn=new L,Vp=new nt,Gp=new Xt,ri=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_x=0,Hp=new L,Ur=new Xt,Gi=new nt,Vc=new L,oo=new L,vx=new L,yx=new Xt,Wp=new L(1,0,0),Xp=new L(0,1,0),qp=new L(0,0,1),Yp={type:"added"},Mx={type:"removed"},Fr={type:"childadded",child:null},gd={type:"childremoved",child:null},Tt=class s extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ri,n=new Xt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new lt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vc.copy(e):Vc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(oo,Vc,this.up):Gi.lookAt(Vc,oo,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),Ur.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mx),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function xd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Hf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xd(a,r,e+1/3),this.g=xd(a,r,e),this.b=xd(a,r,e-1/3)}return xt.colorSpaceToWorking(this,i),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=V0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return xt.workingToColorSpace(bn.copy(this),e),Math.round(at(bn.r*255,0,255))*65536+Math.round(at(bn.g*255,0,255))*256+Math.round(at(bn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(bn.copy(this),t);let n=bn.r,i=bn.g,r=bn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=en){xt.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,i=bn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Gc);let n=wo(fs.h,Gc.h,t),i=wo(fs.s,Gc.s,t),r=wo(fs.l,Gc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ce;Ce.NAMES=V0;var Uo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Fo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new L,Hi=new L,_d=new L,Wi=new L,Or=new L,Br=new L,$p=new L,vd=new L,yd=new L,Md=new L,Sd=new Rt,bd=new Rt,wd=new Rt,mi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),di.subVectors(e,t),i.cross(di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){di.subVectors(i,t),Hi.subVectors(n,t),_d.subVectors(e,t);let a=di.dot(di),o=di.dot(Hi),l=di.dot(_d),c=Hi.dot(Hi),h=Hi.dot(_d),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Sd.setScalar(0),bd.setScalar(0),wd.setScalar(0),Sd.fromBufferAttribute(e,t),bd.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Sd,r.x),a.addScaledVector(bd,r.y),a.addScaledVector(wd,r.z),a}static isFrontFacing(e,t,n,i){return di.subVectors(n,t),Hi.subVectors(e,t),di.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Or.subVectors(i,n),Br.subVectors(r,n),vd.subVectors(e,n);let l=Or.dot(vd),c=Br.dot(vd);if(l<=0&&c<=0)return t.copy(n);yd.subVectors(e,i);let h=Or.dot(yd),d=Br.dot(yd);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Or,a);Md.subVectors(e,r);let f=Or.dot(Md),p=Br.dot(Md);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Br,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return $p.subVectors(r,i),o=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector($p,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(Or,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hc.copy(n.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Wc.subVectors(this.max,lo),zr.subVectors(e.a,lo),kr.subVectors(e.b,lo),Vr.subVectors(e.c,lo),ps.subVectors(kr,zr),ms.subVectors(Vr,kr),Os.subVectors(zr,Vr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Os.z,Os.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Os.z,0,-Os.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Os.y,Os.x,0];return!Td(t,zr,kr,Vr,Wc)||(t=[1,0,0,0,1,0,0,0,1],!Td(t,zr,kr,Vr,Wc))?!1:(Xc.crossVectors(ps,ms),t=[Xc.x,Xc.y,Xc.z],Td(t,zr,kr,Vr,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xi=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,Hc=new on,zr=new L,kr=new L,Vr=new L,ps=new L,ms=new L,Os=new L,lo=new L,Wc=new L,Xc=new L,Bs=new L;function Td(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bs.fromArray(s,r);let o=i.x*Math.abs(Bs.x)+i.y*Math.abs(Bs.y)+i.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $i=bx();function bx(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function zn(s){Math.abs(s)>65504&&De("DataUtils.toHalfFloat(): Value out of range."),s=at(s,-65504,65504),$i.floatView[0]=s;let e=$i.uint32View[0],t=e>>23&511;return $i.baseTable[t]+((e&8388607)>>$i.shiftTable[t])}function yo(s){let e=s>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[e]+(s&1023)]+$i.exponentTable[e],$i.floatView[0]}var Nh=class{static toHalfFloat(e){return zn(e)}static fromHalfFloat(e){return yo(e)}},Qt=new L,qc=new oe,wx=0,_t=class extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qc.fromBufferAttribute(this,t),qc.applyMatrix3(e),this.setXY(t,qc.x,qc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=class extends _t{constructor(e,t,n){super(new Int8Array(e),t,n)}},Fh=class extends _t{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Oh=class extends _t{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Bh=class extends _t{constructor(e,t,n){super(new Int16Array(e),t,n)}},oa=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}},zh=class extends _t{constructor(e,t,n){super(new Int32Array(e),t,n)}},la=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kh=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=yo(this.array[e*this.itemSize]);return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=zn(t),this}getY(e){let t=yo(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=zn(t),this}getZ(e){let t=yo(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=zn(t),this}getW(e){let t=yo(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=zn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this.array[e+2]=zn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=zn(t),this.array[e+1]=zn(n),this.array[e+2]=zn(i),this.array[e+3]=zn(r),this}},Le=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tx=new on,co=new L,Ed=new L,nn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(co,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Ed)),this.expandByPoint(co.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ex=0,ii=new nt,Ad=new Tt,Gr=new L,$n=new on,ho=new on,fn=new L,st=class s extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?la:oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors($n.min,ho.min),$n.expandByPoint(fn),fn.addVectors($n.max,ho.max),$n.expandByPoint(fn)):($n.expandByPoint(ho.min),$n.expandByPoint(ho.max))}$n.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),fn.add(Gr)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new L,l[M]=new L;let c=new L,h=new L,d=new L,u=new oe,f=new oe,p=new oe,x=new L,m=new L;function g(M,A,D){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,D),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),o[M].add(x),o[A].add(x),o[D].add(x),l[M].add(m),l[A].add(m),l[D].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,A=y.length;M<A;++M){let D=y[M],F=D.start,G=D.count;for(let $=F,N=F+G;$<N;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}let w=new L,_=new L,S=new L,b=new L;function P(M){S.fromBufferAttribute(i,M),b.copy(S);let A=o[M];w.copy(A),w.sub(S.multiplyScalar(S.dot(A))).normalize(),_.crossVectors(b,A);let F=_.dot(l[M])<0?-1:1;a.setXYZW(M,w.x,w.y,w.z,F)}for(let M=0,A=y.length;M<A;++M){let D=y[M],F=D.start,G=D.count;for(let $=F,N=F+G;$<N;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new _t(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Dn=new L,Ji=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cd=new L,Ax=new L,Cx=new lt,kn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Cd.subVectors(n,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Cd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cx.getNormalMatrix(e),i=this.coplanarPoint(Cd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rx=0,rn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=zu,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ca=class extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,uo=new L,Wr=new L,Xr=new L,qr=new oe,fo=new oe,G0=new nt,Yc=new L,po=new L,$c=new L,Zp=new oe,Rd=new oe,Jp=new oe,Oo=class extends Tt{constructor(e=new ca){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ws(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Ji(n,3,0,!1)),Hr.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),G0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Zc(Yc.set(-.5,-.5,0),Xr,a,Wr,i,r),Zc(po.set(.5,-.5,0),Xr,a,Wr,i,r),Zc($c.set(.5,.5,0),Xr,a,Wr,i,r),Zp.set(0,0),Rd.set(1,0),Jp.set(1,1);let o=e.ray.intersectTriangle(Yc,po,$c,!1,uo);if(o===null&&(Zc(po.set(-.5,.5,0),Xr,a,Wr,i,r),Rd.set(0,1),o=e.ray.intersectTriangle(Yc,$c,po,!1,uo),o===null))return;let l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||t.push({distance:l,point:uo.clone(),uv:mi.getInterpolation(uo,Yc,po,$c,Zp,Rd,Jp,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zc(s,e,t,n,i,r){qr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(fo.x=r*qr.x-i*qr.y,fo.y=i*qr.x+r*qr.y):fo.copy(qr),s.copy(e),s.x+=fo.x,s.y+=fo.y,s.applyMatrix4(G0)}var Jc=new L,Kp=new L,Bo=class extends Tt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Jc.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Jc);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Jc.setFromMatrixPosition(e.matrixWorld),Kp.setFromMatrixPosition(this.matrixWorld);let n=Jc.distanceTo(Kp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},qi=new L,Pd=new L,Kc=new L,jc=new L,vi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pd.copy(e).add(t).multiplyScalar(.5),Kc.copy(t).sub(e).normalize(),jc.copy(this.origin).sub(Pd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Kc),o=jc.dot(this.direction),l=-jc.dot(Kc),c=jc.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pd).addScaledVector(Kc,u),f}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,y=n.y-a.y,w=n.z-a.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(h),P,M,A,D,F,G,$,N,X,ee,K,fe;if(_>=S&&_>=b?(A=l,G=d,X=p,fe=g,l>=0?(P=c,M=h,D=u,F=f,$=x,N=m,ee=y,K=w):(P=h,M=c,D=f,F=u,$=m,N=x,ee=w,K=y)):S>=b?(A=c,G=u,X=x,fe=y,c>=0?(P=h,M=l,D=f,F=d,$=m,N=p,ee=w,K=g):(P=l,M=h,D=d,F=f,$=p,N=m,ee=g,K=w)):(A=h,G=f,X=m,fe=w,h>=0?(P=l,M=c,D=d,F=u,$=p,N=x,ee=g,K=y):(P=c,M=l,D=u,F=d,$=x,N=p,ee=y,K=g)),A===0)return null;let Z=P/A,ne=M/A,re=1/A,Ae=D-Z*G,Re=F-ne*G,R=$-Z*X,U=N-ne*X,k=ee-Z*fe,z=K-ne*fe,H=k*U-z*R,ie=Ae*z-Re*k,de=R*Re-U*Ae;if(i){if(H<0||ie<0||de<0)return null}else if((H<0||ie<0||de<0)&&(H>0||ie>0||de>0))return null;let ve=H+ie+de;if(ve===0)return null;let ze=re*(H*G+ie*X+de*fe);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jp=new nt,zs=new vi,Qc=new nn,Qp=new L,eh=new L,th=new L,nh=new L,Id=new L,ih=new L,em=new L,sh=new L,ft=class extends Tt{constructor(e=new st,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ih.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Id.fromBufferAttribute(d,e),a?ih.addScaledVector(Id,h):ih.addScaledVector(Id.sub(t),h))}t.add(ih)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Qc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Qc,Qp)===null||zs.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(jp.copy(r).invert(),zs.copy(e.ray).applyMatrix4(jp),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=o.getX(_),P=o.getX(_+1),M=o.getX(_+2);i=rh(this,g,e,n,c,h,d,b,P,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);i=rh(this,a,e,n,c,h,d,y,w,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=_,P=_+1,M=_+2;i=rh(this,g,e,n,c,h,d,b,P,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,_=m+2;i=rh(this,a,e,n,c,h,d,y,w,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Px(s,e,t,n,i,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ns,o),l===null)return null;sh.copy(o),sh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(sh);return c<t.near||c>t.far?null:{distance:c,point:sh.clone(),object:s}}function rh(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,eh),s.getVertexPosition(l,th),s.getVertexPosition(c,nh);let h=Px(s,e,t,n,eh,th,nh,em);if(h){let d=new L;mi.getBarycoord(em,eh,th,nh,d),i&&(h.uv=mi.getInterpolatedAttribute(i,o,l,c,d,new oe)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};mi.getNormal(eh,th,nh,u.normal),h.face=u,h.barycoord=d}return h}var mo=new Rt,tm=new Rt,nm=new Rt,Ix=new Rt,im=new nt,ah=new L,Dd=new nn,sm=new nt,Ld=new vi,zo=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rh,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ah),this.boundingBox.expandByPoint(ah)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ah),this.boundingSphere.expandByPoint(ah)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dd.copy(this.boundingSphere),Dd.applyMatrix4(i),e.ray.intersectsSphere(Dd)!==!1&&(sm.copy(i).invert(),Ld.copy(e.ray).applyMatrix4(sm),!(this.boundingBox!==null&&Ld.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ld)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;tm.fromBufferAttribute(i.attributes.skinIndex,e),nm.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(mo.copy(t),t.set(0,0,0,0)):(mo.set(...t,1),t.set(0,0,0)),mo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=nm.getComponent(r);if(a!==0){let o=tm.getComponent(r);im.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ix.copy(mo).applyMatrix4(im),a)}}return t.isVector4&&(t.w=mo.w),t.applyMatrix4(this.bindMatrixInverse)}},ha=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ln=class extends Yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ot,h=Ot,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rm=new nt,Dx=new nt,ko=class s{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Dx;rm.multiplyMatrices(o,t[r]),rm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ln(t,e,e,sn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new ha),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Di=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new nt,am=new nt,oh=[],om=new on,Lx=new nt,go=new ft,xo=new nn,sr=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),om.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(om)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),xo.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),e.ray.intersectsSphere(xo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yr),am.multiplyMatrices(n,Yr),go.matrixWorld=am,go.raycast(e,oh);for(let a=0,o=oh.length;a<o;a++){let l=oh[a];l.instanceId=r,l.object=this,t.push(l)}oh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ln(new Float32Array(i*this.count),i,this.count,kl,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new nn,Nx=new oe(.5,.5),lh=new L,Li=class{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,g-p,S-y).normalize(),i[1].setComponents(c+a,f+h,g+p,S+y).normalize(),i[2].setComponents(c+o,f+d,g+x,S+w).normalize(),i[3].setComponents(c-o,f-d,g-x,S-w).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,f-u,g-m,S-_).normalize();else if(i[4].setComponents(c-l,f-u,g-m,S-_).normalize(),t===Vn)i[5].setComponents(c+l,f+u,g+m,S+_).normalize();else if(t===Ss)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=Nx.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lh.x=i.normal.x>0?e.max.x:e.min.x,lh.y=i.normal.y>0?e.max.y:e.min.y,lh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lm=new nt,Vo=class s{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];lm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Li),n[i].setFromProjectionMatrix(lm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Li),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Nd(s,e){return s-e}function Ux(s,e){return s.z-e.z}function Fx(s,e){return e.z-s.z}var $d=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Bn=new nt,Ox=new Ce(1,1,1),Bx=new Li,zx=new Vo,ch=new on,Vs=new nn,_o=new L,cm=new L,kx=new L,Ud=new $d,wn=new ft,hh=[];function Vx(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Gs(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var Go=class extends ft{constructor(e,t,n=t*2,i){super(new st,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ln(t,e,e,sn,En);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ln(t,e,e,Ya,Qn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ln(t,e,e,sn,En);n.colorSpace=xt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new _t(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new _t(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Bn),this.getBoundingBoxAt(r,ch).applyMatrix4(Bn),e.union(ch)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Bn),this.getBoundingSphereAt(r,Vs).applyMatrix4(Bn),e.union(Vs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Nd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Bn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Ox.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Nd),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let d=t.getAttribute(h),u=n.getAttribute(h);Vx(d,u,l);let f=d.itemSize;for(let p=d.count,x=c;p<x;p++){let m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=e-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:x,itemSize:m}=p;x.copyWithin(e*m,h*m,(h+d)*m),p.addUpdateRange(e*m,d*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new on,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(_o.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new nn;this.getBoundingBoxAt(e,ch),ch.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),_o.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(_o))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Nd);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Gs(this._multiDrawCounts,i),Gs(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Gs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Gs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Gs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new st,this._initializeGeometry(r));let a=this.geometry;r.index&&Gs(r.index.array,a.index.array);for(let o in r.attributes)Gs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;wn.material=this.material,wn.geometry.index=a.index,wn.geometry.attributes=a.attributes,wn.geometry.boundingBox===null&&(wn.geometry.boundingBox=new on),wn.geometry.boundingSphere===null&&(wn.geometry.boundingSphere=new nn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=i[c];wn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,wn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,wn.geometry.boundingBox),this.getBoundingSphereAt(c,wn.geometry.boundingSphere),wn.raycast(e,hh);for(let d=0,u=hh.length;d<u;d++){let f=hh[d];f.object=this,f.batchId=o,t.push(f)}hh.length=0}wn.material=null,wn.geometry.index=null,wn.geometry.attributes={},wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,m=n.isArrayCamera?zx:Bx;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(Bn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(Bn,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){Bn.copy(this.matrixWorld).invert(),_o.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Bn),cm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Bn);for(let _=0,S=c.length;_<S;_++)if(c[_].visible&&c[_].active){let b=c[_].geometryIndex;this.getMatrixAt(_,Bn),this.getBoundingSphereAt(b,Vs).applyMatrix4(Bn);let P=!1;if(f&&(P=!m.intersectsSphere(Vs)),!P){let M=u[b],A=kx.subVectors(Vs.center,_o).dot(cm);Ud.push(M.start,M.count,A,_)}}let y=Ud.list,w=this.customSort;w===null?y.sort(r.transparent?Fx:Ux):w.call(this,y,n);for(let _=0,S=y.length;_<S;_++){let b=y[_];h[g]=b.start*o*l,d[g]=b.count*l,x[g]=b.index,g++}Ud.reset()}else for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){let _=c[y].geometryIndex,S=!1;if(f&&(this.getMatrixAt(y,Bn),this.getBoundingSphereAt(_,Vs).applyMatrix4(Bn),S=!m.intersectsSphere(Vs)),!S){let b=u[_];h[g]=b.start*o*l,d[g]=b.count*l,x[g]=y,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},pn=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vh=new L,Gh=new L,hm=new nt,vo=new vi,uh=new nn,Fd=new L,um=new L,yi=class extends Tt{constructor(e=new st,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vh.fromBufferAttribute(t,i-1),Gh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vh.distanceTo(Gh);e.setAttribute("lineDistance",new Le(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uh.copy(n.boundingSphere),uh.applyMatrix4(i),uh.radius+=r,e.ray.intersectsSphere(uh)===!1)return;hm.copy(i).invert(),vo.copy(e.ray).applyMatrix4(hm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),w=dh(this,e,vo,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=dh(this,e,vo,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=dh(this,e,vo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=dh(this,e,vo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Vh.fromBufferAttribute(o,i),Gh.fromBufferAttribute(o,r),t.distanceSqToSegment(Vh,Gh,Fd,um)>n)return;Fd.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fd);if(!(c<e.near||c>e.far))return{distance:c,point:um.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var dm=new L,fm=new L,Jn=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)dm.fromBufferAttribute(t,i),fm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dm.distanceTo(fm);e.setAttribute("lineDistance",new Le(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ho=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ua=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pm=new nt,Zd=new vi,fh=new nn,ph=new L,Wo=class extends Tt{constructor(e=new st,t=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fh.copy(n.boundingSphere),fh.applyMatrix4(i),fh.radius+=r,e.ray.intersectsSphere(fh)===!1)return;pm.copy(i).invert(),Zd.copy(e.ray).applyMatrix4(pm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);ph.fromBufferAttribute(d,m),mm(ph,m,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)ph.fromBufferAttribute(d,p),mm(ph,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mm(s,e,t,n,i,r,a){let o=Zd.distanceSqToPoint(s);if(o<t){let l=new L;Zd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xo=class extends Yt{constructor(e,t,n,i,r=Nt,a=Nt,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Hh=class extends Xo{constructor(e,t,n,i,r,a,o,l){super({},e,t,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Wh=class extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ot,this.minFilter=Ot,this.generateMipmaps=!1,this.needsUpdate=!0}},ai=class extends Yt{constructor(e,t,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Xh=class extends ai{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=_n,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qh=class extends ai{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,wi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Ts=class extends Yt{constructor(e=[],t=wi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rr=class extends Yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yh=class extends Yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Mi=class extends Yt{constructor(e,t,n=Qn,i,r,a,o=Ot,l=Ot,c,h=_i,d=1){if(h!==_i&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends Mi{constructor(e,t=Qn,n=wi,i,r,a=Ot,o=Ot,l,c=_i){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},da=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hn=class s extends st{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function p(x,m,g,y,w,_,S,b,P,M,A){let D=_/P,F=S/M,G=_/2,$=S/2,N=b/2,X=P+1,ee=M+1,K=0,fe=0,Z=new L;for(let ne=0;ne<ee;ne++){let re=ne*F-$;for(let Ae=0;Ae<X;Ae++){let Re=Ae*D-G;Z[x]=Re*y,Z[m]=re*w,Z[g]=N,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ae/P),d.push(1-ne/M),K+=1}}for(let ne=0;ne<M;ne++)for(let re=0;re<P;re++){let Ae=u+re+X*ne,Re=u+re+X*(ne+1),R=u+(re+1)+X*(ne+1),U=u+(re+1)+X*ne;l.push(Ae,Re,U),l.push(Re,R,U),fe+=6}o.addGroup(f,fe,A),f+=fe,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Yo=class s extends st{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,x=i+1,m=new L,g=new L;for(let y=0;y<=p;y++){let w=0,_=0,S=0,b=0;if(y<=n){let A=y/n,D=A*Math.PI/2;_=-h-e*Math.cos(D),S=e*Math.sin(D),b=-e*Math.cos(D),w=A*d}else if(y<=n+r){let A=(y-n)/r;_=-h+A*t,S=e,b=0,w=d+A*u}else{let A=(y-n-r)/n,D=A*Math.PI/2;_=h+e*Math.sin(D),S=e*Math.cos(D),b=e*Math.sin(D),w=d+u+A*d}let P=Math.max(0,Math.min(1,w/f)),M=0;y===0?M=.5/i:y===p&&(M=-.5/i);for(let A=0;A<=i;A++){let D=A/i,F=D*Math.PI*2,G=Math.sin(F),$=Math.cos(F);g.x=-S*$,g.y=_,g.z=S*G,o.push(g.x,g.y,g.z),m.set(-S*$,b,S*G),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+M,P)}if(y>0){let A=(y-1)*x;for(let D=0;D<i;D++){let F=A+D,G=A+D+1,$=y*x+D,N=y*x+D+1;a.push(F,G,$),a.push(G,N,$)}}}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$o=class s extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Es=class s extends st{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function y(){let _=new L,S=new L,b=0,P=(t-e)/n;for(let M=0;M<=r;M++){let A=[],D=M/r,F=D*(t-e)+e;for(let G=0;G<=i;G++){let $=G/i,N=$*l+o,X=Math.sin(N),ee=Math.cos(N);S.x=F*X,S.y=-D*n+m,S.z=F*ee,d.push(S.x,S.y,S.z),_.set(X,P,ee).normalize(),u.push(_.x,_.y,_.z),f.push($,1-D),A.push(p++)}x.push(A)}for(let M=0;M<i;M++)for(let A=0;A<r;A++){let D=x[A][M],F=x[A+1][M],G=x[A+1][M+1],$=x[A][M+1];(e>0||A!==0)&&(h.push(D,F,$),b+=3),(t>0||A!==r-1)&&(h.push(F,G,$),b+=3)}c.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new oe,P=new L,M=0,A=_===!0?e:t,D=_===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*D,0),u.push(0,D,0),f.push(.5,.5),p++;let F=p;for(let G=0;G<=i;G++){let N=G/i*l+o,X=Math.cos(N),ee=Math.sin(N);P.x=A*ee,P.y=m*D,P.z=A*X,d.push(P.x,P.y,P.z),u.push(0,D,0),b.x=X*.5+.5,b.y=ee*.5*D+.5,f.push(b.x,b.y),p++}for(let G=0;G<i;G++){let $=S+G,N=F+G;_===!0?h.push(N,N+1,$):h.push(N+1,N,$),M+=3}c.addGroup(g,M,_===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fa=class s extends Es{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class s extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let w=new L,_=new L,S=new L;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],_),f(t[b+2],S),l(w,_,S,y)}function l(y,w,_,S){let b=S+1,P=[];for(let M=0;M<=b;M++){P[M]=[];let A=y.clone().lerp(_,M/b),D=w.clone().lerp(_,M/b),F=b-M;for(let G=0;G<=F;G++)G===0&&M===b?P[M][G]=A:P[M][G]=A.clone().lerp(D,G/F)}for(let M=0;M<b;M++)for(let A=0;A<2*(b-M)-1;A++){let D=Math.floor(A/2);A%2===0?(u(P[M][D+1]),u(P[M+1][D]),u(P[M][D])):(u(P[M][D+1]),u(P[M+1][D+1]),u(P[M+1][D]))}}function c(y){let w=new L;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let y=new L;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;a.push(_,1-S)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){let w=a[y+0],_=a[y+2],S=a[y+4],b=Math.max(w,_,S),P=Math.min(w,_,S);b>.9&&P<.1&&(w<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let _=y*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let y=new L,w=new L,_=new L,S=new L,b=new oe,P=new oe,M=new oe;for(let A=0,D=0;A<r.length;A+=9,D+=6){y.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),b.set(a[D+0],a[D+1]),P.set(a[D+2],a[D+3]),M.set(a[D+4],a[D+5]),S.copy(y).add(w).add(_).divideScalar(3);let F=m(S);x(b,D+0,y,F),x(P,D+2,w,F),x(M,D+4,_,F)}}function x(y,w,_,S){S<0&&y.x===1&&(a[w]=y.x-1),_.x===0&&_.z===0&&(a[w]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Zo=class s extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},mh=new L,gh=new L,Od=new L,xh=new mi,Jo=class extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Zs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=xh;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),xh.getNormal(Od),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let w=(y+1)%3,_=d[y],S=d[w],b=xh[h[y]],P=xh[h[w]],M=`${_}_${S}`,A=`${S}_${_}`;A in u&&u[A]?(Od.dot(u[A].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(P.x,P.y,P.z)),u[A]=null):M in u||(u[M]={index0:c[y],index1:c[w],normal:Od.clone()})}}for(let p in u)if(u[p]){let{index0:x,index1:m}=u[p];mh.fromBufferAttribute(o,x),gh.fromBufferAttribute(o,m),f.push(mh.x,mh.y,mh.z),f.push(gh.x,gh.y,gh.z)}this.setAttribute("position",new Le(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new oe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new nt;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(at(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ar=class extends Wn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ko=class extends ar{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wf(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var gm=new L,xm=new L,Bd=new Wf,zd=new Wf,kd=new Wf,or=class extends Wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(xm.subVectors(i[0],i[1]).add(i[0]),c=xm);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Bd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),zd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),kd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Bd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),kd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bd.calc(l),zd.calc(l),kd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _m(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Gx(s,e){let t=1-s;return t*t*e}function Hx(s,e){return 2*(1-s)*s*e}function Wx(s,e){return s*s*e}function To(s,e,t,n){return Gx(s,e)+Hx(s,t)+Wx(s,n)}function Xx(s,e){let t=1-s;return t*t*t*e}function qx(s,e){let t=1-s;return 3*t*t*s*e}function Yx(s,e){return 3*(1-s)*s*s*e}function $x(s,e){return s*s*s*e}function Eo(s,e,t,n,i){return Xx(s,e)+qx(s,t)+Yx(s,n)+$x(s,i)}var pa=class extends Wn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,r.x,a.x,o.x),Eo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends Wn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,r.x,a.x,o.x),Eo(e,i.y,r.y,a.y,o.y),Eo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends Wn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends Wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Wn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(To(e,i.x,r.x,a.x),To(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Wn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(To(e,i.x,r.x,a.x),To(e,i.y,r.y,a.y),To(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(_m(o,l.x,c.x,h.x,d.x),_m(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},$h=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:or,CubicBezierCurve:pa,CubicBezierCurve3:jo,EllipseCurve:ar,LineCurve:ma,LineCurve3:lr,QuadraticBezierCurve:ga,QuadraticBezierCurve3:xa,SplineCurve:_a}),cr=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new $h[i.type]().fromJSON(i))}return this}},As=class extends cr{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ma(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ga(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new pa(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ar(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cs=class extends As{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new As().fromJSON(i))}return this}};function Zx(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=H0(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=e_(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,d=l;for(let u=t;u<i;u+=t){let f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Qo(r,a,t,o,l,c,0),a}function H0(s,e,t,n,i){let r;if(i===u_(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=vm(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=vm(a/n|0,s[a],s[a+1],r);return r&&va(r,r.next)&&(tl(r),r=r.next),r}function hr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(va(t,t.next)||Wt(t.prev,t,t.next)===0)){if(tl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(s,e,t,n,i,r,a){if(!s)return;!a&&r&&r_(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Kx(s,n,i,r):Jx(s)){e.push(l.i,s.i,c.i),tl(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=jx(hr(s),e),Qo(s,e,t,n,i,r,2)):a===2&&Qx(s,e,t,n,i,r):Qo(hr(s),e,t,n,i,r,1);break}}}function Jx(s){let e=s.prev,t=s,n=s.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Mo(i,o,r,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Kx(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Wt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=Jd(f,p,e,t,n),y=Jd(x,m,e,t,n),w=s.prevZ,_=s.nextZ;for(;w&&w.z>=g&&_&&_.z<=y;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==a&&Mo(o,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&Mo(o,h,l,d,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==i&&w!==a&&Mo(o,h,l,d,c,u,w.x,w.y)&&Wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&Mo(o,h,l,d,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!va(n,i)&&X0(n,t,t.next,i)&&el(n,i)&&el(i,n)&&(e.push(n.i,t.i,i.i),tl(t),tl(t.next),t=s=i),t=t.next}while(t!==s);return hr(t)}function Qx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&l_(a,o)){let l=q0(a,o);a=hr(a,a.next),l=hr(l,l.next),Qo(a,e,t,n,i,r,0),Qo(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function e_(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=H0(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(o_(c))}i.sort(t_);for(let r=0;r<i.length;r++)t=n_(i[r],t);return t}function t_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function n_(s,e){let t=i_(s,e);if(!t)return e;let n=q0(t,s);return hr(n,n.next),hr(t,t.next)}function i_(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(va(s,t))return t;do{if(va(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&W0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);el(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&s_(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function s_(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function r_(s,e,t,n){let i=s;do i.z===0&&(i.z=Jd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,a_(i)}function a_(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Jd(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function o_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function W0(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Mo(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&W0(s,e,t,n,i,r,a,o)}function l_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!c_(s,e)&&(el(s,e)&&el(e,s)&&h_(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||va(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function va(s,e){return s.x===e.x&&s.y===e.y}function X0(s,e,t,n){let i=vh(Wt(s,e,t)),r=vh(Wt(s,e,n)),a=vh(Wt(t,n,s)),o=vh(Wt(t,n,e));return!!(i!==r&&a!==o||i===0&&_h(s,t,e)||r===0&&_h(s,n,e)||a===0&&_h(t,s,n)||o===0&&_h(t,e,n))}function _h(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function vh(s){return s>0?1:s<0?-1:0}function c_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&X0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function el(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function h_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function q0(s,e){let t=Kd(s.i,s.x,s.y),n=Kd(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vm(s,e,t,n){let i=Kd(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var jd=class{static triangulate(e,t,n=2){return Zx(e,t,n)}},si=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ym(e),Mm(n,e);let a=e.length;t.forEach(ym);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Mm(n,t[l]);let o=jd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ym(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var nl=class s extends st{constructor(e=new Cs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:d_,w,_=!1,S,b,P,M;if(g){w=g.getSpacedPoints(h),_=!0,u=!1;let ce=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,ce),b=new L,P=new L,M=new L}u||(m=0,f=0,p=0,x=0);let A=o.extractPoints(c),D=A.shape,F=A.holes;if(!si.isClockWise(D)){D=D.reverse();for(let ce=0,ge=F.length;ce<ge;ce++){let ye=F[ce];si.isClockWise(ye)&&(F[ce]=ye.reverse())}}function $(ce){let ye=10000000000000001e-36,pe=ce[0];for(let Se=1;Se<=ce.length;Se++){let Ke=Se%ce.length,Xe=ce[Ke],Qe=Xe.x-pe.x,it=Xe.y-pe.y,V=Qe*Qe+it*it,O=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(pe.x),Math.abs(pe.y)),te=ye*O*O;if(V<=te){ce.splice(Ke,1),Se--;continue}pe=Xe}}$(D),F.forEach($);let N=F.length,X=D;for(let ce=0;ce<N;ce++){let ge=F[ce];D=D.concat(ge)}function ee(ce,ge,ye){return ge||je("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ge,ye)}let K=D.length;function fe(ce,ge,ye){let pe,Se,Ke,Xe=ce.x-ge.x,Qe=ce.y-ge.y,it=ye.x-ce.x,V=ye.y-ce.y,O=Xe*Xe+Qe*Qe,te=Xe*V-Qe*it;if(Math.abs(te)>Number.EPSILON){let T=Math.sqrt(O),v=Math.sqrt(it*it+V*V),I=ge.x-Qe/T,B=ge.y+Xe/T,q=ye.x-V/v,me=ye.y+it/v,ae=((q-I)*V-(me-B)*it)/(Xe*V-Qe*it);pe=I+Xe*ae-ce.x,Se=B+Qe*ae-ce.y;let J=pe*pe+Se*Se;if(J<=2)return new oe(pe,Se);Ke=Math.sqrt(J/2)}else{let T=!1;Xe>Number.EPSILON?it>Number.EPSILON&&(T=!0):Xe<-Number.EPSILON?it<-Number.EPSILON&&(T=!0):Math.sign(Qe)===Math.sign(V)&&(T=!0),T?(pe=-Qe,Se=Xe,Ke=Math.sqrt(O)):(pe=Xe,Se=Qe,Ke=Math.sqrt(O/2))}return new oe(pe/Ke,Se/Ke)}let Z=[];for(let ce=0,ge=X.length,ye=ge-1,pe=ce+1;ce<ge;ce++,ye++,pe++)ye===ge&&(ye=0),pe===ge&&(pe=0),Z[ce]=fe(X[ce],X[ye],X[pe]);let ne=[],re,Ae=Z.concat();for(let ce=0,ge=N;ce<ge;ce++){let ye=F[ce];re=[];for(let pe=0,Se=ye.length,Ke=Se-1,Xe=pe+1;pe<Se;pe++,Ke++,Xe++)Ke===Se&&(Ke=0),Xe===Se&&(Xe=0),re[pe]=fe(ye[pe],ye[Ke],ye[Xe]);ne.push(re),Ae=Ae.concat(re)}let Re;if(m===0)Re=si.triangulateShape(X,F);else{let ce=[],ge=[];for(let ye=0;ye<m;ye++){let pe=ye/m,Se=f*Math.cos(pe*Math.PI/2),Ke=p*Math.sin(pe*Math.PI/2)+x;for(let Xe=0,Qe=X.length;Xe<Qe;Xe++){let it=ee(X[Xe],Z[Xe],Ke);ie(it.x,it.y,-Se),pe===0&&ce.push(it)}for(let Xe=0,Qe=N;Xe<Qe;Xe++){let it=F[Xe];re=ne[Xe];let V=[];for(let O=0,te=it.length;O<te;O++){let T=ee(it[O],re[O],Ke);ie(T.x,T.y,-Se),pe===0&&V.push(T)}pe===0&&ge.push(V)}}Re=si.triangulateShape(ce,ge)}let R=Re.length,U=p+x;for(let ce=0;ce<K;ce++){let ge=u?ee(D[ce],Ae[ce],U):D[ce];_?(P.copy(S.normals[0]).multiplyScalar(ge.x),b.copy(S.binormals[0]).multiplyScalar(ge.y),M.copy(w[0]).add(P).add(b),ie(M.x,M.y,M.z)):ie(ge.x,ge.y,0)}for(let ce=1;ce<=h;ce++)for(let ge=0;ge<K;ge++){let ye=u?ee(D[ge],Ae[ge],U):D[ge];_?(P.copy(S.normals[ce]).multiplyScalar(ye.x),b.copy(S.binormals[ce]).multiplyScalar(ye.y),M.copy(w[ce]).add(P).add(b),ie(M.x,M.y,M.z)):ie(ye.x,ye.y,d/h*ce)}for(let ce=m-1;ce>=0;ce--){let ge=ce/m,ye=f*Math.cos(ge*Math.PI/2),pe=p*Math.sin(ge*Math.PI/2)+x;for(let Se=0,Ke=X.length;Se<Ke;Se++){let Xe=ee(X[Se],Z[Se],pe);ie(Xe.x,Xe.y,d+ye)}for(let Se=0,Ke=F.length;Se<Ke;Se++){let Xe=F[Se];re=ne[Se];for(let Qe=0,it=Xe.length;Qe<it;Qe++){let V=ee(Xe[Qe],re[Qe],pe);_?ie(V.x,V.y+w[h-1].y,w[h-1].x+ye):ie(V.x,V.y,d+ye)}}}k(),z();function k(){let ce=i.length/3;if(u){let ge=0,ye=K*ge;for(let pe=0;pe<R;pe++){let Se=Re[pe];de(Se[2]+ye,Se[1]+ye,Se[0]+ye)}ge=h+m*2,ye=K*ge;for(let pe=0;pe<R;pe++){let Se=Re[pe];de(Se[0]+ye,Se[1]+ye,Se[2]+ye)}}else{for(let ge=0;ge<R;ge++){let ye=Re[ge];de(ye[2],ye[1],ye[0])}for(let ge=0;ge<R;ge++){let ye=Re[ge];de(ye[0]+K*h,ye[1]+K*h,ye[2]+K*h)}}n.addGroup(ce,i.length/3-ce,0)}function z(){let ce=i.length/3,ge=0;H(X,ge),ge+=X.length;for(let ye=0,pe=F.length;ye<pe;ye++){let Se=F[ye];H(Se,ge),ge+=Se.length}n.addGroup(ce,i.length/3-ce,1)}function H(ce,ge){let ye=ce.length;for(;--ye>=0;){let pe=ye,Se=ye-1;Se<0&&(Se=ce.length-1);for(let Ke=0,Xe=h+m*2;Ke<Xe;Ke++){let Qe=K*Ke,it=K*(Ke+1),V=ge+pe+Qe,O=ge+Se+Qe,te=ge+Se+it,T=ge+pe+it;ve(V,O,te,T)}}}function ie(ce,ge,ye){l.push(ce),l.push(ge),l.push(ye)}function de(ce,ge,ye){ze(ce),ze(ge),ze(ye);let pe=i.length/3,Se=y.generateTopUV(n,i,pe-3,pe-2,pe-1);mt(Se[0]),mt(Se[1]),mt(Se[2])}function ve(ce,ge,ye,pe){ze(ce),ze(ge),ze(pe),ze(ge),ze(ye),ze(pe);let Se=i.length/3,Ke=y.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);mt(Ke[0]),mt(Ke[1]),mt(Ke[3]),mt(Ke[1]),mt(Ke[2]),mt(Ke[3])}function ze(ce){i.push(l[ce*3+0]),i.push(l[ce*3+1]),i.push(l[ce*3+2])}function mt(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return f_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $h[i.type]().fromJSON(i)),new s(n,e.options)}},d_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(u,1-p),new oe(x,1-g)]:[new oe(o,1-l),new oe(h,1-d),new oe(f,1-p),new oe(m,1-g)]}};function f_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var il=class s extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},sl=class s extends st{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=at(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new L,u=new oe,f=new L,p=new L,x=new L,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){let w=n+y*h*i,_=Math.sin(w),S=Math.cos(w);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*_,d.y=e[b].y,d.z=e[b].x*S,a.push(d.x,d.y,d.z),u.x=y/t,u.y=b/(e.length-1),o.push(u.x,u.y);let P=l[3*b+0]*_,M=l[3*b+1],A=l[3*b+0]*S;c.push(P,M,A)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let _=w+y*e.length,S=_,b=_+e.length,P=_+e.length+1,M=_+1;r.push(S,b,M),r.push(P,M,b)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ya=class s extends Ki{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ji=class s extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-a;for(let w=0;w<c;w++){let _=w*d-r;p.push(_,-y,0),x.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let w=y+c*g,_=y+c*(g+1),S=y+1+c*(g+1),b=y+1+c*g;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},rl=class s extends st{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/i,f=new L,p=new oe;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let y=g+m,w=y,_=y+n+1,S=y+n+2,b=y+1;o.push(w,_,b),o.push(_,S,b)}}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},al=class s extends st{constructor(e=new Cs([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(a,2));function c(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];si.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=si.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){let y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+d,_=y[1]+d,S=y[2]+d;n.push(w,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return p_(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function p_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ma=class s extends st{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,_=a+w*o,S=e*Math.cos(_),b=Math.sqrt(e*e-S*S),P=0;g===0&&a===0?P=.5/t:g===n&&l===Math.PI&&(P=-.5/t);for(let M=0;M<=t;M++){let A=M/t,D=i+A*r;d.x=-b*Math.cos(D),d.y=S,d.z=b*Math.sin(D),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+P,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],_=h[g][y],S=h[g+1][y],b=h[g+1][y+1];(g!==0||a>0)&&f.push(w,_,b),(g!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ol=class s extends Ki{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ur=class s extends st{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new L,f=new L,p=new L;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=i;g++){let y=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,y=(i+1)*(x-1)+m-1,w=(i+1)*(x-1)+m,_=(i+1)*x+m;l.push(g,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},ll=class s extends st{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new L,u=new L,f=new L,p=new L,x=new L,m=new L,g=new L;for(let w=0;w<=n;++w){let _=w/n*r*Math.PI*2;y(_,r,a,e,f),y(_+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let S=0;S<=i;++S){let b=S/i*Math.PI*2,P=-t*Math.cos(b),M=t*Math.sin(b);d.x=f.x+(P*g.x+M*x.x),d.y=f.y+(P*g.y+M*x.y),d.z=f.z+(P*g.z+M*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(w/n),h.push(S/i)}}for(let w=1;w<=n;w++)for(let _=1;_<=i;_++){let S=(i+1)*(w-1)+(_-1),b=(i+1)*w+(_-1),P=(i+1)*w+_,M=(i+1)*(w-1)+_;o.push(S,b,M),o.push(b,P,M)}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function y(w,_,S,b,P){let M=Math.cos(w),A=Math.sin(w),D=S/_*w,F=Math.cos(D);P.x=b*(2+F)*.5*M,P.y=b*(2+F)*A*.5,P.z=b*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},dr=class s extends st{constructor(e=new xa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new oe,h=new L,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function x(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),y(),g()}function m(w){h=e.getPointAt(w/t,h);let _=a.normals[w],S=a.binormals[w];for(let b=0;b<=i;b++){let P=b/i*Math.PI*2,M=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+M*S.x,l.y=A*_.y+M*S.y,l.z=A*_.z+M*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=t;w++)for(let _=1;_<=i;_++){let S=(i+1)*(w-1)+(_-1),b=(i+1)*w+(_-1),P=(i+1)*w+_,M=(i+1)*(w-1)+_;p.push(S,b,M),p.push(b,P,M)}}function y(){for(let w=0;w<=t;w++)for(let _=0;_<=i;_++)c.x=w/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new $h[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},cl=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new L,r=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),y=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),Sm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Sm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Sm(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var bm=Object.freeze({__proto__:null,BoxGeometry:Hn,CapsuleGeometry:Yo,CircleGeometry:$o,ConeGeometry:fa,CylinderGeometry:Es,DodecahedronGeometry:Zo,EdgesGeometry:Jo,ExtrudeGeometry:nl,IcosahedronGeometry:il,LatheGeometry:sl,OctahedronGeometry:ya,PlaneGeometry:ji,PolyhedronGeometry:Ki,RingGeometry:rl,ShapeGeometry:al,SphereGeometry:Ma,TetrahedronGeometry:ol,TorusGeometry:ur,TorusKnotGeometry:ll,TubeGeometry:dr,WireframeGeometry:cl}),hl=class extends rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(wm(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wm(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Rn(s){let e={};for(let t=0;t<s.length;t++){let n=Ar(s[t]);for(let i in n)e[i]=n[i]}return e}function wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function m_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Pn={clone:Ar,merge:Rn},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rs=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Si=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fr=class extends Si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ul=class extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pr=class extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},mr=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fl=class extends rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},pl=class extends pn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function pi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ao(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Y0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function $0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function __(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<t||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=pi(d,c.times.constructor),c.values=pi(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function v_(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=o.times.length-1,x;if(r<=o.times[0]){let g=h,y=d-h;x=o.values.slice(g,y)}else if(r>=o.times[p]){let g=p*d+h,y=g+d-h;x=o.values.slice(g,y)}else{let g=o.createInterpolant(),y=h,w=d-h;g.evaluate(r),x=g.resultBuffer.slice(y,w)}l==="quaternion"&&new Xt().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let y=g*f+u;if(l==="quaternion")Xt.multiplyQuaternionsFlat(c.values,y,x,0,c.values,y);else{let w=f-u*2;for(let _=0;_<w;++_)c.values[y+_]-=x[_]}}}return s.blendMode=qu,s}var Zh=class{static convertArray(e,t){return pi(e,t)}static isTypedArray(e){return U0(e)}static hasTangents(e){return Ao(e)}static getKeyframeOrder(e){return Y0(e)}static sortedArray(e,t,n){return Qd(e,t,n)}static flattenJSON(e,t,n,i){$0(e,t,n,i)}static subclip(e,t,n,i,r=30){return __(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return v_(e,t,n,i)}},Qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vs:r=e,o=2*t-n;break;case ta:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:a=e,l=2*n-t;break;case ta:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+y*a[c+S]+w*a[l+S]+_*a[d+S];return r}},wa=class extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},gl=class extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends Qi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,y=d[g],w=d[g+1],_=e*u+p*2,S=h[_],b=h[_+1],P=M_(n,t,y,S,i);r[p]=Z0(P,x,w,b,m)}return r}};function Z0(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function y_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function M_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Z0(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=y_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ao(e.settings)&&(n.settings={inTangents:pi(e.settings.inTangents,Array),outTangents:pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ao(this.settings)&&(Tm(this.settings.inTangents,e),Tm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&U0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ao(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Tm(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ks;var Ni=class extends Un{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Ms;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}};Ta.prototype.ValueTypeName="color";var gr=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}};gr.prototype.ValueTypeName="number";var _l=class extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xt.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Un{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Ms;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}};Ea.prototype.ValueTypeName="vector";var Ps=class{constructor(e="",t=-1,n=[],i=vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(b_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Y0(l);l=Qd(l,1,h),c=Qd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function S_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return Ta;case"quaternion":return xr;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function b_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=S_(s.type);if(s.times===void 0){let n=[],i=[];$0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ao(s.settings)&&(t.settings={inTangents:pi(s.settings.inTangents,Float32Array),outTangents:pi(s.settings.outTangents,Float32Array)}),t}var xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Em(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Em(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Em(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Aa=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qf=new Aa,vn=class{constructor(e){this.manager=e!==void 0?e:qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yi={},ef=class extends Error{constructor(e,t){super(e),this.response=t}},oi=class extends vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:i});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Yi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){y();function y(){d.read().then(({done:w,value:_})=>{if(w)g.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,P=h.length;b<P;b++){let M=h[b];M.onProgress&&M.onProgress(S)}g.enqueue(_),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new ef(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{xi.add(`file:${e}`,c);let h=Yi[e];delete Yi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Jh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):je(l),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Ps.parse(e[n]);t.push(i)}return t}},Kh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],o=new ai,l=new oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(e[d],function(u){let f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Nt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Nt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}},$r=new WeakMap,Is=class extends vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=$r.get(a);d===void 0&&(d=[],$r.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=sa("img");function l(){h(),t&&t(this);let d=$r.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}$r.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),xi.remove(`image:${e}`);let u=$r.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}$r.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},jh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=new Ts;r.colorSpace=en;let a=new Is(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}},Qh=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ln,o=new oi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):je(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new ln;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:_n,e.wrapT=t.wrapT!==void 0?t.wrapT:_n,e.magFilter=t.magFilter!==void 0?t.magFilter:Nt,e.minFilter=t.minFilter!==void 0?t.minFilter:Nt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=jn),t.mipmapCount===1&&(e.minFilter=Nt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},eu=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=new Yt,a=new Is(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},bi=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vl=class extends bi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vd=new nt,Am=new L,Cm=new L,_r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Am.setFromMatrixPosition(e.matrixWorld),t.position.copy(Am),Cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yh=new L,Mh=new Xt,Ri=new L,vr=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yh,Mh,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yh,Mh,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yh,Mh,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yh,Mh,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new L,Rm=new oe,Pm=new oe,tn=class extends vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Rm,Pm),t.subVectors(Pm,Rm)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tf=class extends _r{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},yl=class extends bi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nf=class extends _r{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},yr=class extends bi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends vr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sf=class extends _r{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ml=class extends bi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Sl=class extends bi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},bl=class extends bi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Ca=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},wl=class extends bi{constructor(e=new Ca,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Im={},Tl=class s extends vn{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new oi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):je(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return s.createMaterialFromType(e)}static createMaterialFromType(e){let n={ShadowMaterial:hl,SpriteMaterial:ca,RawShaderMaterial:Rs,ShaderMaterial:Pt,PointsMaterial:ua,MeshPhysicalMaterial:fr,MeshStandardMaterial:Si,MeshPhongMaterial:ul,MeshToonMaterial:dl,MeshNormalMaterial:pr,MeshLambertMaterial:mr,MeshDepthMaterial:Sa,MeshDistanceMaterial:ba,MeshBasicMaterial:An,MeshMatcapMaterial:fl,LineDashedMaterial:pl,LineBasicMaterial:pn,Material:rn,...Im}[e],i;return n===void 0?(Pi(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),i=new rn):i=new n,i}static registerMaterial(e,t){Im[e]=t}},Ra=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},El=class extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Al=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):je(l),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),y=Qr(m.type,g),w=new ws(y,m.stride);return w.uuid=m.uuid,m.usage!==void 0&&w.setUsage(m.usage),t[p]=w,w}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let a=e.isInstancedBufferGeometry?new El:new st,o=e.data.index;if(o!==void 0){let f=Qr(o.type,o.array);a.setIndex(new _t(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],x;if(p.isInterleavedBufferAttribute){let m=i(e.data,p.data);x=new Ji(m,p.itemSize,p.offset,p.normalized)}else{let m=Qr(p.type,p.array),g=p.isInstancedBufferAttribute?Di:_t;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){let y=p[m],w;if(y.isInterleavedBufferAttribute){let _=i(e.data,y.data);w=new Ji(_,y.itemSize,y.offset,y.normalized)}else{let _=Qr(y.type,y.array);w=new _t(_,y.itemSize,y.normalized)}y.name!==void 0&&(w.name=y.name),y.usage!==void 0&&w.setUsage(y.usage),y.gpuType!==void 0&&(w.gpuType=y.gpuType),x.push(w)}a.morphAttributes[f]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new nn().fromJSON(u)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Gd={},tu=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?Ra.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new oi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),je("ObjectLoader: Can't parse "+e+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),je("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?Ra.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new oi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(let u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){Gd[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Cs().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new ko().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new Al;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in bm?o=bm[l.type].fromJSON(l,t):l.type in Gd?o=Gd[l.type].fromJSON(l,t):De(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new Tl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Ps.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Qr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Aa(t);r=new Is(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let d=e[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new ln(g.data,g.width,g.height)))}i[d.uuid]=new Nn(f)}else{let f=o(d.url);i[d.uuid]=new Nn(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Qr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Is(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ln(p.data,p.width,p.height)))}n[l.uuid]=new Nn(h)}else{let h=await r(l.url);n[l.uuid]=new Nn(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(De("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&De('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&De("ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new Ts,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ln:h=new Yt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,w_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Dm),h.wrapT=n(o.wrap[1],Dm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Lm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Lm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(u){return t[u]===void 0&&De("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p];n[m]===void 0&&De("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&De("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&De("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(e.type){case"Scene":a=new Ii,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ce(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Fo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Uo(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new tn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Fi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Sl(e.color,e.intensity);break;case"DirectionalLight":a=new Ml(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new yr(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new bl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new yl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new vl(e.color,e.groundColor,e.intensity);break;case"LightProbe":let u=new Ca().fromArray(e.sh);a=new wl(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new zo(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new ft(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);let f=e.count,p=e.instanceMatrix,x=e.instanceColor;a=new sr(h,d,f),a.instanceMatrix=new Di(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new Di(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),a=new Go(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new on().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new nn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new nn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new on().fromJSON(e.boundingBox));break;case"LOD":a=new Bo;break;case"Line":a=new yi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Ho(o(e.geometry),l(e.material));break;case"LineSegments":a=new Jn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Wo(o(e.geometry),l(e.material));break;case"Sprite":a=new Oo(l(e.material));break;case"Group":a=new gi;break;case"Bone":a=new ha;break;default:a=new Tt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new L().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let u=e.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],t,n,i,r))}if(e.animations!==void 0){let u=e.animations;for(let f=0;f<u.length;f++){let p=u[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let u=e.levels;for(let f=0;f<u.length;f++){let p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?De("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Tt}})}},w_={UVMapping:Fl,CubeReflectionMapping:wi,CubeRefractionMapping:is,EquirectangularReflectionMapping:Wa,EquirectangularRefractionMapping:Xa,CubeUVReflectionMapping:Tr},Dm={RepeatWrapping:Tn,ClampToEdgeWrapping:_n,MirroredRepeatWrapping:ys},Lm={NearestFilter:Ot,NearestMipmapNearestFilter:qa,NearestMipmapLinearFilter:ss,LinearFilter:Nt,LinearMipmapNearestFilter:Ls,LinearMipmapLinearFilter:jn},Hd=new WeakMap,nu=class extends vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Hd.has(a)===!0?(i&&i(Hd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Hd.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Sh,Pa=class{static getContext(){return Sh===void 0&&(Sh=new(window.AudioContext||window.webkitAudioContext)),Sh}static setContext(e){Sh=e}},iu=class extends vn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new oi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0),h=Pa.getContext(),d=e+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){t(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):je(l),r.manager.itemError(e)}}},Nm=new nt,Um=new nt,Hs=new nt,su=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new tn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new tn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Hs.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Zs*t.fov*.5)/t.zoom,o,l;Um.elements[12]=-i,Nm.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Hs.elements[0]=2*t.near/(l-o),Hs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Hs),o=-a*t.aspect-r,l=a*t.aspect-r,Hs.elements[0]=2*t.near/(l-o),Hs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Hs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Um),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Nm),this.cameraR.matrixWorldNeedsUpdate=!0}},Zr=-90,Jr=1,Cl=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tn(Zr,Jr,e,t);i.layers=this.layers,this.add(i);let r=new tn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);let a=new tn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);let o=new tn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);let l=new tn(Zr,Jr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Mr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=T_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function T_(){this._document.hidden===!1&&this.reset()}var Ws=new L,Wd=new Xt,E_=new L,Xs=new L,qs=new L,ru=class extends Tt{constructor(){super(),this.type="AudioListener",this.context=Pa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Mr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ws,Wd,E_),Xs.set(0,0,-1).applyQuaternion(Wd),qs.set(0,1,0).applyQuaternion(Wd),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ws.x,n),t.positionY.linearRampToValueAtTime(Ws.y,n),t.positionZ.linearRampToValueAtTime(Ws.z,n),t.forwardX.linearRampToValueAtTime(Xs.x,n),t.forwardY.linearRampToValueAtTime(Xs.y,n),t.forwardZ.linearRampToValueAtTime(Xs.z,n),t.upX.linearRampToValueAtTime(qs.x,n),t.upY.linearRampToValueAtTime(qs.y,n),t.upZ.linearRampToValueAtTime(qs.z,n)}else t.setPosition(Ws.x,Ws.y,Ws.z),t.setOrientation(Xs.x,Xs.y,Xs.z,qs.x,qs.y,qs.z)}},Pl=class extends Tt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){De("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){De("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){De("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){De("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){De("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(De("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){De("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(De("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Ys=new L,Fm=new Xt,A_=new L,$s=new L,au=class extends Pl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ys,Fm,A_),$s.set(0,0,1).applyQuaternion(Fm);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ys.x,n),t.positionY.linearRampToValueAtTime(Ys.y,n),t.positionZ.linearRampToValueAtTime(Ys.z,n),t.orientationX.linearRampToValueAtTime($s.x,n),t.orientationY.linearRampToValueAtTime($s.y,n),t.orientationZ.linearRampToValueAtTime($s.z,n)}else t.setPosition(Ys.x,Ys.y,Ys.z),t.setOrientation($s.x,$s.y,$s.z)}},ou=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,a,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Yf="\\[\\]\\.:\\/",C_=new RegExp("["+Yf+"]","g"),$f="[^"+Yf+"]",R_="[^"+Yf.replace("\\.","")+"]",P_=/((?:WC+[\/:])*)/.source.replace("WC",$f),I_=/(WCOD+)?/.source.replace("WCOD",R_),D_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$f),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$f),N_=new RegExp("^"+P_+I_+D_+L_+"$"),U_=["material","materials","bones","map"],rf=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C_,"")}static parseTrackName(e){let t=N_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);U_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=rf;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Zn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let x=0,m=a;x!==m;++x)r[x].push(new bt(u,n[x],i[x]))}else if(p<c){o=e[p];let x=--c,m=e[x];t[m.uuid]=p,e[p]=m,t[f]=x,e[x]=u;for(let g=0,y=a;g!==y;++g){let w=r[g],_=w[x],S=w[p];w[p]=_,S===void 0&&(S=new bt(u,n[g],i[g])),w[x]=S}}else e[p]!==o&&je("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let d=r++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=i;f!==p;++f){let x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<r){let u=--r,f=e[u],p=--a,x=e[p];d!==u&&(t[f.uuid]=d),e[d]=f,u!==p&&(t[x.uuid]=u),e[u]=x,e.pop();for(let m=0,g=i;m!==g;++m){let y=n[m],w=y[u],_=y[p];y[d]=w,y[u]=_,y.pop()}}else{let u=--a,f=e[u];d!==u&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,x=i;p!==x;++p){let m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new bt(p,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=i[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},Dl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Cf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case vc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Rf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Af){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(e?i.endingStart=this.zeroSlopeAtStart?vs:_s:i.endingStart=ta,t?i.endingEnd=this.zeroSlopeAtEnd?vs:_s:i.endingEnd=ta)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},F_=new Float32Array(1),cu=class extends Gn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=i[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new Il(bt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new wa(new Float32Array(2),new Float32Array(2),1,F_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ps.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=vc),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Dl(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ps.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},hu=class extends aa{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new tr(null,e,t,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}},uu=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},O_=0,du=class extends Gn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.usage=Sc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},fu=class extends ws{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},pu=class{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Om=new nt,mu=class{constructor(e,t,n=0,i=1/0){this.ray=new vi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Om.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Om),this}intersectObject(e,t=!0,n=[]){return af(e,this,n,t),n.sort(Bm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)af(e[i],this,n,t);return n.sort(Bm),n}};function Bm(s,e){return s.distance-e.distance}function af(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)af(r[a],e,t,!0)}}var gu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Sr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},xu=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},_u=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}},zm=new oe,Ll=class{constructor(e=new oe(1/0,1/0),t=new oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},km=new L,bh=new L,Kr=new L,jr=new L,Xd=new L,B_=new L,z_=new L,vu=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){km.subVectors(e,this.start),bh.subVectors(this.end,this.start);let n=bh.dot(bh);if(n===0)return 0;let r=bh.dot(km)/n;return t&&(r=at(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=B_,n=z_){let i=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,h=e.end;Kr.subVectors(c,o),jr.subVectors(h,l),Xd.subVectors(o,l);let d=Kr.dot(Kr),u=jr.dot(jr),f=jr.dot(Xd);if(d<=i&&u<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=i)r=0,a=f/u,a=at(a,0,1);else{let p=Kr.dot(Xd);if(u<=i)a=0,r=at(-p/d,0,1);else{let x=Kr.dot(jr),m=d*u-x*x;m!==0?r=at((x*f-p*u)/m,0,1):r=0,a=(x*r+f)/u,a<0?(a=0,r=at(-p/d,0,1)):a>1&&(a=1,r=at((x-p)/d,0,1))}}return t.copy(o).addScaledVector(Kr,r),n.copy(l).addScaledVector(jr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Vm=new L,yu=class extends Tt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new st,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Le(i,3));let r=new pn({fog:!1,toneMapped:!1});this.cone=new Jn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Vm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Vm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},xs=new L,wh=new nt,qd=new nt,Mu=class extends Jn{constructor(e){let t=J0(e),n=new st,i=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Le(i,3)),n.setAttribute("color",new Le(r,3));let a=new pn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new Ce(255),l=new Ce(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");qd.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(wh.multiplyMatrices(qd,o.matrixWorld),xs.setFromMatrixPosition(wh),i.setXYZ(a,xs.x,xs.y,xs.z),wh.multiplyMatrices(qd,o.parent.matrixWorld),xs.setFromMatrixPosition(wh),i.setXYZ(a+1,xs.x,xs.y,xs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function J0(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...J0(s.children[t]));return e}var Su=class extends ft{constructor(e,t,n){let i=new Ma(t,4,2),r=new An({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},k_=new L,Gm=new Ce,Hm=new Ce,bu=class extends Tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new ya(t);i.rotateY(Math.PI*.5),this.material=new An({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new _t(a,3)),this.add(new ft(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Gm.copy(this.light.color),Hm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?Gm:Hm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(k_.setFromMatrixPosition(this.light.matrixWorld).negate())}},wu=class extends Jn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new st;h.setAttribute("position",new Le(l,3)),h.setAttribute("color",new Le(c,3));let d=new pn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Tu=class extends Jn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Ce(r),a=new Ce(a);let o=[],l=[];if(t>1)for(let d=0;d<t;d++){let u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,p);let x=d&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){let u=d&1?r:a,f=e-e/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;o.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,o.push(m,0,g),l.push(u.r,u.g,u.b)}}let c=new st;c.setAttribute("position",new Le(o,3)),c.setAttribute("color",new Le(l,3));let h=new pn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Wm=new L,Th=new L,Xm=new L,Eu=class extends Tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new st;i.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new pn({fog:!1,toneMapped:!1});this.lightPlane=new yi(i,r),this.add(this.lightPlane),i=new st,i.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new yi(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Wm.setFromMatrixPosition(this.light.matrixWorld),Th.setFromMatrixPosition(this.light.target.matrixWorld),Xm.subVectors(Th,Wm),this.lightPlane.lookAt(Th),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Th),this.targetLine.scale.z=Xm.length()}},Eh=new L,qt=new vr,Au=class extends Jn{constructor(e){let t=new st,n=new pn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Le(i,3)),t.setAttribute("color",new Le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Ce(16755200),h=new Ce(16711680),d=new Ce(43775),u=new Ce(16777215),f=new Ce(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,i=1,r,a;if(qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Vn)r=-1,a=1;else if(this.camera.coordinateSystem===Ss)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Jt("c",t,e,qt,0,0,r),Jt("t",t,e,qt,0,0,a),Jt("n1",t,e,qt,-n,-i,r),Jt("n2",t,e,qt,n,-i,r),Jt("n3",t,e,qt,-n,i,r),Jt("n4",t,e,qt,n,i,r),Jt("f1",t,e,qt,-n,-i,a),Jt("f2",t,e,qt,n,-i,a),Jt("f3",t,e,qt,-n,i,a),Jt("f4",t,e,qt,n,i,a),Jt("u1",t,e,qt,n*.7,i*1.1,r),Jt("u2",t,e,qt,-n*.7,i*1.1,r),Jt("u3",t,e,qt,0,i*2,r),Jt("cf1",t,e,qt,-n,0,a),Jt("cf2",t,e,qt,n,0,a),Jt("cf3",t,e,qt,0,-i,a),Jt("cf4",t,e,qt,0,i,a),Jt("cn1",t,e,qt,-n,0,r),Jt("cn2",t,e,qt,n,0,r),Jt("cn3",t,e,qt,0,-i,r),Jt("cn4",t,e,qt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Jt(s,e,t,n,i,r,a){Eh.set(i,r,a).unproject(n);let o=e[s];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Eh.x,Eh.y,Eh.z)}}var Ah=new on,Cu=class extends Jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new st;r.setIndex(new _t(n,1)),r.setAttribute("position",new _t(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ah.setFromObject(this.object),Ah.isEmpty())return;let e=Ah.min,t=Ah.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ru=class extends Jn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new st;r.setIndex(new _t(n,1)),r.setAttribute("position",new Le(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Pu=class extends yi{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new st;a.setAttribute("position",new Le(r,3)),a.computeBoundingSphere(),super(a,new pn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new st;l.setAttribute("position",new Le(o,3)),l.computeBoundingSphere(),this.add(new ft(l,new An({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},qm=new L,Ch,Yd,Iu=class extends Tt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ch===void 0&&(Ch=new st,Ch.setAttribute("position",new Le([0,0,0,0,1,0],3)),Yd=new fa(.5,1,5,1),Yd.translate(0,-.5,0)),this.position.copy(t),this.line=new yi(Ch,new pn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ft(Yd,new An({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{qm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(qm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Du=class extends Jn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new st;i.setAttribute("position",new Le(t,3)),i.setAttribute("color",new Le(n,3));let r=new pn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new Ce,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Lu=class{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new As,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new oe);if(e(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],m=l[(p+1)%f];if(x.y>d!=m.y>d){let g=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);u.push(g)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(De('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=si.area(c);if(h===0)continue;let d=new Ll;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Cs;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new As;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Ia=class extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function V_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function G_(s,e){let t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function H_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function $u(s,e,t,n){let i=W_(n);switch(t){case Wu:return s*e;case kl:return s*e/i.components*i.byteLength;case Ya:return s*e/i.components*i.byteLength;case as:return s*e*2/i.components*i.byteLength;case Vl:return s*e*2/i.components*i.byteLength;case Xu:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case Gl:return s*e*4/i.components*i.byteLength;case $a:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(s,16)*Math.max(e,8)/4;case Hl:case Xl:return Math.max(s,8)*Math.max(e,8)/2;case Yl:case $l:case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case ja:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fc:case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gc:case xc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qa:case _c:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W_(s){switch(s){case yn:case ku:return{byteLength:1,components:1};case Er:case Vu:case Kt:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case Qn:case Ol:case En:return{byteLength:4,components:1};case Gu:case Hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Nu=class{static contain(e,t){return V_(e,t)}static cover(e,t){return G_(e,t)}static fill(e){return H_(e)}static getByteLength(e,t,n,i){return $u(e,t,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _g(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function X_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y_=`#ifdef USE_ALPHAHASH
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
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j_=`#ifdef USE_AOMAP
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
#endif`,Q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev=`#ifdef USE_BATCHING
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
#endif`,tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rv=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mv=`#define PI 3.141592653589793
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
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hv=`PhysicalMaterial material;
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
#endif`,Wv=`uniform sampler2D dfgLUT;
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
}`,Xv=`
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
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
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,o1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,f1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,x1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,v1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:q_,alphahash_pars_fragment:Y_,alphamap_fragment:$_,alphamap_pars_fragment:Z_,alphatest_fragment:J_,alphatest_pars_fragment:K_,aomap_fragment:j_,aomap_pars_fragment:Q_,batching_pars_vertex:ev,batching_vertex:tv,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:sv,iridescence_fragment:rv,bumpmap_pars_fragment:av,clipping_planes_fragment:ov,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:hv,color_fragment:uv,color_pars_fragment:dv,color_pars_vertex:fv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:xv,displacementmap_pars_vertex:_v,displacementmap_vertex:vv,emissivemap_fragment:yv,emissivemap_pars_fragment:Mv,colorspace_fragment:Sv,colorspace_pars_fragment:bv,envmap_fragment:wv,envmap_common_pars_fragment:Tv,envmap_pars_fragment:Ev,envmap_pars_vertex:Av,envmap_physical_pars_fragment:Bv,envmap_vertex:Cv,fog_vertex:Rv,fog_pars_vertex:Pv,fog_fragment:Iv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Lv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Fv,lights_pars_begin:Ov,lights_toon_fragment:zv,lights_toon_pars_fragment:kv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Hv,lights_physical_pars_fragment:Wv,lights_fragment_begin:Xv,lights_fragment_maps:qv,lights_fragment_end:Yv,lightprobes_pars_fragment:$v,logdepthbuf_fragment:Zv,logdepthbuf_pars_fragment:Jv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:jv,map_fragment:Qv,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:sy,morphinstance_vertex:ry,morphcolor_vertex:ay,morphnormal_vertex:oy,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:hy,normal_fragment_maps:uy,normal_pars_fragment:dy,normal_pars_vertex:fy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:vy,opaque_fragment:yy,packing:My,premultiplied_alpha_fragment:Sy,project_vertex:by,dithering_fragment:wy,dithering_pars_fragment:Ty,roughnessmap_fragment:Ey,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Ry,shadowmap_vertex:Py,shadowmask_pars_fragment:Iy,skinbase_vertex:Dy,skinning_pars_vertex:Ly,skinning_vertex:Ny,skinnormal_vertex:Uy,specularmap_fragment:Fy,specularmap_pars_fragment:Oy,tonemapping_fragment:By,tonemapping_pars_fragment:zy,transmission_fragment:ky,transmission_pars_fragment:Vy,uv_pars_fragment:Gy,uv_pars_vertex:Hy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:qy,background_frag:Yy,backgroundCube_vert:$y,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:Ky,depth_vert:jy,depth_frag:Qy,distance_vert:e1,distance_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:s1,linedashed_frag:r1,meshbasic_vert:a1,meshbasic_frag:o1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:h1,meshmatcap_frag:u1,meshnormal_vert:d1,meshnormal_frag:f1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:x1,meshtoon_vert:_1,meshtoon_frag:v1,points_vert:y1,points_frag:M1,shadow_vert:S1,shadow_frag:b1,sprite_vert:w1,sprite_frag:T1},Ne={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ei={basic:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Rn([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Rn([Ne.lights,Ne.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ei.physical={uniforms:Rn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Zu={r:0,b:0,g:0},E1=new nt,vg=new lt;vg.set(-1,0,0,0,1,0,0,0,1);function A1(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=e.get(w,_)}return w}function p(y){let w=!1,_=f(y);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Tr)?(c===void 0&&(c=new ft(new Hn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ar(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vg),c.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ft(new ji(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ar(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Zu,Xf(s)),t.buffers.color.setClear(Zu.r,Zu.g,Zu.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:x,dispose:g}}function C1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(F,G,$,N,X){let ee=!1,K=d(F,N,$,G);r!==K&&(r=K,c(r.object)),ee=f(F,N,$,X),ee&&p(F,N,$,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,_(F,G,$,N),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,G,$,N){let X=N.wireframe===!0,ee=n[G.id];ee===void 0&&(ee={},n[G.id]=ee);let K=F.isInstancedMesh===!0?F.id:0,fe=ee[K];fe===void 0&&(fe={},ee[K]=fe);let Z=fe[$.id];Z===void 0&&(Z={},fe[$.id]=Z);let ne=Z[X];return ne===void 0&&(ne=u(l()),Z[X]=ne),ne}function u(F){let G=[],$=[],N=[];for(let X=0;X<t;X++)G[X]=0,$[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,G,$,N){let X=r.attributes,ee=G.attributes,K=0,fe=$.getAttributes();for(let Z in fe)if(fe[Z].location>=0){let re=X[Z],Ae=ee[Z];if(Ae===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor)),re===void 0||re.attribute!==Ae||Ae&&re.data!==Ae.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function p(F,G,$,N){let X={},ee=G.attributes,K=0,fe=$.getAttributes();for(let Z in fe)if(fe[Z].location>=0){let re=ee[Z];re===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));let Ae={};Ae.attribute=re,re&&re.data&&(Ae.data=re.data),X[Z]=Ae,K++}r.attributes=X,r.attributesNum=K,r.index=N}function x(){let F=r.newAttributes;for(let G=0,$=F.length;G<$;G++)F[G]=0}function m(F){g(F,0)}function g(F,G){let $=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;$[F]=1,N[F]===0&&(s.enableVertexAttribArray(F),N[F]=1),X[F]!==G&&(s.vertexAttribDivisor(F,G),X[F]=G)}function y(){let F=r.newAttributes,G=r.enabledAttributes;for(let $=0,N=G.length;$<N;$++)G[$]!==F[$]&&(s.disableVertexAttribArray($),G[$]=0)}function w(F,G,$,N,X,ee,K){K===!0?s.vertexAttribIPointer(F,G,$,X,ee):s.vertexAttribPointer(F,G,$,N,X,ee)}function _(F,G,$,N){x();let X=N.attributes,ee=$.getAttributes(),K=G.defaultAttributeValues;for(let fe in ee){let Z=ee[fe];if(Z.location>=0){let ne=X[fe];if(ne===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let re=ne.normalized,Ae=ne.itemSize,Re=e.get(ne);if(Re===void 0)continue;let R=Re.buffer,U=Re.type,k=Re.bytesPerElement,z=U===s.INT||U===s.UNSIGNED_INT||ne.gpuType===Ol;if(ne.isInterleavedBufferAttribute){let H=ne.data,ie=H.stride,de=ne.offset;if(H.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)g(Z.location+ve,H.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ve=0;ve<Z.locationSize;ve++)m(Z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,R);for(let ve=0;ve<Z.locationSize;ve++)w(Z.location+ve,Ae/Z.locationSize,U,re,ie*k,(de+Ae/Z.locationSize*ve)*k,z)}else{if(ne.isInstancedBufferAttribute){for(let H=0;H<Z.locationSize;H++)g(Z.location+H,ne.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let H=0;H<Z.locationSize;H++)m(Z.location+H);s.bindBuffer(s.ARRAY_BUFFER,R);for(let H=0;H<Z.locationSize;H++)w(Z.location+H,Ae/Z.locationSize,U,re,Ae*k,Ae/Z.locationSize*H*k,z)}}else if(K!==void 0){let re=K[fe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(Z.location,re);break;case 3:s.vertexAttrib3fv(Z.location,re);break;case 4:s.vertexAttrib4fv(Z.location,re);break;default:s.vertexAttrib1fv(Z.location,re)}}}}y()}function S(){A();for(let F in n){let G=n[F];for(let $ in G){let N=G[$];for(let X in N){let ee=N[X];for(let K in ee)h(ee[K].object),delete ee[K];delete N[X]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let G=n[F.id];for(let $ in G){let N=G[$];for(let X in N){let ee=N[X];for(let K in ee)h(ee[K].object),delete ee[K];delete N[X]}}delete n[F.id]}function P(F){for(let G in n){let $=n[G];for(let N in $){let X=$[N];if(X[F.id]===void 0)continue;let ee=X[F.id];for(let K in ee)h(ee[K].object),delete ee[K];delete X[F.id]}}}function M(F){for(let G in n){let $=n[G],N=F.isInstancedMesh===!0?F.id:0,X=$[N];if(X!==void 0){for(let ee in X){let K=X[ee];for(let fe in K)h(K[fe].object),delete K[fe];delete X[ee]}delete $[N],Object.keys($).length===0&&delete n[G]}}}function A(){D(),a=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function R1(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function P1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==sn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let M=P===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==yn&&P!==En&&!M&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function I1(s){let e=this,t=null,n=0,i=!1,r=!1,a=new kn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,_=g.clippingState||null;l.value=_,_=h(p,u,w,f);for(let S=0;S!==w;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=f;w!==x;++w,_+=4)a.copy(d[w]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var to=4,D1=6,L1=20,N1=256,bc=new Fi,K0=new Ce,Zf=null,Jf=0,Kf=0,jf=!1,U1=new L,Cr=new L,Ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=U1}=r;Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Kf),this._renderer.xr.enabled=jf,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Kt,format:sn,colorSpace:na,depthBuffer:!1},i=j0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=F1(r)),this._blurMaterial=B1(r,e,t),this._ggxMaterial=O1(r,e,t)}return i}_compileMaterial(e){let t=new ft(new st,e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,i,r){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(K0),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Hn,new An({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(K0),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;eo(i,_*S,w>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===wi||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-to?n-p+to:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,eo(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(o,bc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,eo(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(o,bc)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-to?i-this._lodMax+to:0),u=4*(this._cubeSize-h);eo(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,bc)}};function F1(s){let e=[],t=[],n=s,i=s-to+1+D1;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let y=g%3*2/3-1,w=g>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(_,f*u*g);for(let S=0;S<u;S++){let b=h[S*2]*2-1,P=h[S*2+1]*2-1;g===0?Cr.set(1,P,b):g===1?Cr.set(-b,1,-P):g===2?Cr.set(-b,P,1):g===3?Cr.set(-1,P,-b):g===4?Cr.set(-b,-1,P):Cr.set(b,P,-1),Cr.toArray(x,(g*u+S)*f)}}let m=new st;m.setAttribute("position",new _t(p,f)),m.setAttribute("outputDirection",new _t(x,f)),t.push(new ft(m,null)),n>to&&n--}return{lodMeshes:t,sizeLods:e}}function j0(s,e,t){let n=new kt(s,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function O1(s,e,t){return new Pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function B1(s,e,t){return new Pt({name:"SphericalGaussianBlur",defines:{SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Q0(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function eg(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ac=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ts(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hn(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:$t});r.uniforms.tEquirect.value=t;let a=new ft(i,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Nt),new Cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function z1(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wa||f===Xa)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ac(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Wa||f===Xa,x=f===wi||f===is;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ec(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Ec(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Wa?u.mapping=wi:f===Xa&&(u.mapping=is),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function k1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Pi("WebGLRenderer: "+n+" extension not supported."),i}}}function V1(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let w=0,_=y.length;w<_;w+=3){let S=y[w+0],b=y[w+1],P=y[w+2];u.push(S,b,b,P,P,S)}}else{let y=p.array;x=p.version;for(let w=0,_=y.length/3-1;w<_;w+=3){let S=w+0,b=w+1,P=w+2;u.push(S,b,b,P,P,S)}}let m=new(p.count>=65535?la:oa)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function G1(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function H1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function W1(s,e,t){let n=new WeakMap,i=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=o.attributes.position.count*w,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*S*4*d),P=new er(b,_,S,d);P.type=En,P.needsUpdate=!0;let M=w*4;for(let D=0;D<d;D++){let F=m[D],G=g[D],$=y[D],N=_*S*4*D;for(let X=0;X<F.count;X++){let ee=X*M;f===!0&&(i.fromBufferAttribute(F,X),b[N+ee+0]=i.x,b[N+ee+1]=i.y,b[N+ee+2]=i.z,b[N+ee+3]=0),p===!0&&(i.fromBufferAttribute(G,X),b[N+ee+4]=i.x,b[N+ee+5]=i.y,b[N+ee+6]=i.z,b[N+ee+7]=0),x===!0&&(i.fromBufferAttribute($,X),b[N+ee+8]=i.x,b[N+ee+9]=i.y,b[N+ee+10]=i.z,b[N+ee+11]=$.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new oe(_,S)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function X1(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var q1={[Oa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[za]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[Ga]:"AGX_TONE_MAPPING",[Ha]:"NEUTRAL_TONE_MAPPING",[Va]:"CUSTOM_TONE_MAPPING"};function Y1(s,e,t,n,i,r){let a=new kt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new st;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let h=new Rs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ft(c,h),u=new Fi(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,y=[],w=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let b=0;b<y.length;b++){let P=y[b];P.setSize&&P.setSize(_,S)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;let S=a.width,b=a.height;y.length>0&&o===null&&(o=new kt(S,b,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new kt(S,b,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let M=y[P];M.setSize&&M.setSize(S,b)}},this.begin=function(_,S){if(x||_.toneMapping===li&&y.length===0)return!1;if(g=S,S!==null){let b=S.width,P=S.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=li,!0},this.hasRenderPass=function(){return w},this.end=function(_,S){_.toneMapping=m,x=!0;let b=a,P=o;for(let M=0;M<y.length;M++){let A=y[M];A.enabled!==!1&&(A.render(_,P,b,S),A.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},xt.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let M=q1[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(g),_.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var yg=new Yt,tp=new Mi(1,1),Mg=new er,Sg=new tr,bg=new Ts,tg=[],ng=[],ig=new Float32Array(16),sg=new Float32Array(9),rg=new Float32Array(4);function io(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=tg[i];if(r===void 0&&(r=new Float32Array(i),tg[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ju(s,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function J1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function K1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function j1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;rg.set(n),s.uniformMatrix2fv(this.addr,!1,rg),hn(t,n)}}function Q1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;sg.set(n),s.uniformMatrix3fv(this.addr,!1,sg),hn(t,n)}}function eM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;ig.set(n),s.uniformMatrix4fv(this.addr,!1,ig),hn(t,n)}}function tM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function iM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function sM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function rM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function aM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function oM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function lM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function cM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(tp.compareFunction=t.isReversedDepthBuffer()?Mc:yc,r=tp):r=yg,t.setTexture2D(e||r,i)}function hM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sg,i)}function uM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bg,i)}function dM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mg,i)}function fM(s){switch(s){case 5126:return $1;case 35664:return Z1;case 35665:return J1;case 35666:return K1;case 35674:return j1;case 35675:return Q1;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}function pM(s,e){s.uniform1fv(this.addr,e)}function mM(s,e){let t=io(e,this.size,2);s.uniform2fv(this.addr,t)}function gM(s,e){let t=io(e,this.size,3);s.uniform3fv(this.addr,t)}function xM(s,e){let t=io(e,this.size,4);s.uniform4fv(this.addr,t)}function _M(s,e){let t=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vM(s,e){let t=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yM(s,e){let t=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MM(s,e){s.uniform1iv(this.addr,e)}function SM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function wM(s,e){s.uniform4iv(this.addr,e)}function TM(s,e){s.uniform1uiv(this.addr,e)}function EM(s,e){s.uniform2uiv(this.addr,e)}function AM(s,e){s.uniform3uiv(this.addr,e)}function CM(s,e){s.uniform4uiv(this.addr,e)}function RM(s,e,t){let n=this.cache,i=e.length,r=ju(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=tp:a=yg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function PM(s,e,t){let n=this.cache,i=e.length,r=ju(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sg,r[a])}function IM(s,e,t){let n=this.cache,i=e.length,r=ju(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bg,r[a])}function DM(s,e,t){let n=this.cache,i=e.length,r=ju(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mg,r[a])}function LM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return _M;case 35675:return vM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return wM;case 5125:return TM;case 36294:return EM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return DM}}var np=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fM(t.type)}},ip=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}},sp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Qf=/(\w+)(\])?(\[|\.)?/g;function ag(s,e){s.seq.push(e),s.map[e.id]=e}function NM(s,e,t){let n=s.name,i=n.length;for(Qf.lastIndex=0;;){let r=Qf.exec(n),a=Qf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ag(t,c===void 0?new np(o,s,e):new ip(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new sp(o),ag(t,d)),t=d}}}var no=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);NM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function og(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var UM=37297,FM=0;function OM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lg=new lt;function BM(s){xt._getMatrix(lg,xt.workingColorSpace,s);let e=`mat3( ${lg.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(s)){case ia:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+OM(s.getShaderSource(e),o)}else return r}function zM(s,e){let t=BM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var kM={[Oa]:"Linear",[Ba]:"Reinhard",[za]:"Cineon",[ka]:"ACESFilmic",[Ga]:"AgX",[Ha]:"Neutral",[Va]:"Custom"};function VM(s,e){let t=kM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ju=new L;function GM(){xt.getLuminanceCoefficients(Ju);let s=Ju.x.toFixed(4),e=Ju.y.toFixed(4),t=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function WM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function XM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Tc(s){return s!==""}function hg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(s){return s.replace(qM,$M)}var YM=new Map;function $M(s,e){let t=pt[e];if(t===void 0){let n=YM.get(e);if(n!==void 0)t=pt[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rp(t)}var ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(s){return s.replace(ZM,JM)}function JM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var KM={[Da]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function jM(s){return KM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var QM={[wi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function eS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var tS={[is]:"ENVMAP_MODE_REFRACTION"};function nS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iS={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function sS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iS[s.combine]||"ENVMAP_BLENDING_NONE"}function rS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aS(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jM(t),c=eS(t),h=nS(t),d=sS(t),u=rS(t),f=HM(t),p=WM(r),x=i.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tc).join(`
`),g.length>0&&(g+=`
`)):(m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),g=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?pt.tonemapping_pars_fragment:"",t.toneMapping!==li?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tc).join(`
`)),a=rp(a),a=hg(a,t),a=ug(a,t),o=rp(o),o=hg(o,t),o=ug(o,t),a=dg(a),o=dg(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+a,_=y+g+o,S=og(i,i.VERTEX_SHADER,w),b=og(i,i.FRAGMENT_SHADER,_);i.attachShader(x,S),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(F){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(x)||"",$=i.getShaderInfoLog(S)||"",N=i.getShaderInfoLog(b)||"",X=G.trim(),ee=$.trim(),K=N.trim(),fe=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{let ne=cg(i,S,"vertex"),re=cg(i,b,"fragment");je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+ne+`
`+re)}else X!==""?De("WebGLProgram: Program Info Log:",X):(ee===""||K==="")&&(Z=!1);Z&&(F.diagnostics={runnable:fe,programLog:X,vertexShader:{log:ee,prefix:m},fragmentShader:{log:K,prefix:g}})}i.deleteShader(S),i.deleteShader(b),M=new no(i,x),A=XM(i,x)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(x,UM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var oS=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}},op=class{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}};function lS(s){return s===as||s===ja||s===Qa}function cS(s,e,t,n,i,r){let a=new nr,o=new ap,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,A,D,F,G,$){let N=F.fog,X=G.geometry,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,fe=e.get(M.envMap||ee,K),Z=fe&&fe.mapping===Tr?fe.image.height:null,ne=f[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&De("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ae=re!==void 0?re.length:0,Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let R,U,k,z;if(ne){let Dt=Ei[ne];R=Dt.vertexShader,U=Dt.fragmentShader}else{R=M.vertexShader,U=M.fragmentShader;let Dt=o.getVertexShaderStage(M),wt=o.getFragmentShaderStage(M);o.update(M,Dt,wt),k=Dt.id,z=wt.id}let H=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),de=G.isInstancedMesh===!0,ve=G.isBatchedMesh===!0,ze=!!M.map,mt=!!M.matcap,ce=!!fe,ge=!!M.aoMap,ye=!!M.lightMap,pe=!!M.bumpMap&&M.wireframe===!1,Se=!!M.normalMap,Ke=!!M.displacementMap,Xe=!!M.emissiveMap,Qe=!!M.metalnessMap,it=!!M.roughnessMap,V=M.anisotropy>0,O=M.clearcoat>0,te=M.dispersion>0,T=M.retroreflectivity>0,v=M.iridescence>0,I=M.sheen>0,B=M.transmission>0,q=V&&!!M.anisotropyMap,me=O&&!!M.clearcoatMap,ae=O&&!!M.clearcoatNormalMap,J=O&&!!M.clearcoatRoughnessMap,le=v&&!!M.iridescenceMap,we=v&&!!M.iridescenceThicknessMap,Ye=I&&!!M.sheenColorMap,Ee=I&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Ge=!!M.specularColorMap,$e=!!M.specularIntensityMap,rt=B&&!!M.transmissionMap,Y=B&&!!M.thicknessMap,Pe=!!M.gradientMap,ue=!!M.alphaMap,Ie=M.alphaTest>0,Ue=!!M.alphaHash,_e=!!M.extensions,et=li;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(et=s.toneMapping);let qe={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:R,fragmentShader:U,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:ve,batchingColor:ve&&G._colorsTexture!==null,instancing:de,instancingColor:de&&G.instanceColor!==null,instancingMorph:de&&G.morphTexture!==null,outputColorSpace:H===null?s.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:mt,envMap:ce,envMapMode:ce&&fe.mapping,envMapCubeUVHeight:Z,aoMap:ge,lightMap:ye,bumpMap:pe,normalMap:Se,displacementMap:Ke,emissiveMap:Xe,normalMapObjectSpace:Se&&M.normalMapType===Nf,normalMapTangentSpace:Se&&M.normalMapType===Oi,packedNormalMap:Se&&M.normalMapType===Oi&&lS(M.normalMap.format),metalnessMap:Qe,roughnessMap:it,anisotropy:V,anisotropyMap:q,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:te,retroreflection:T,iridescence:v,iridescenceMap:le,iridescenceThicknessMap:we,sheen:I,sheenColorMap:Ye,sheenRoughnessMap:Ee,specularMap:Te,specularColorMap:Ge,specularIntensityMap:$e,transmission:B,transmissionMap:rt,thicknessMap:Y,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===wr&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ie,alphaHash:Ue,combine:M.combine,mapUv:ze&&p(M.map.channel),aoMapUv:ge&&p(M.aoMap.channel),lightMapUv:ye&&p(M.lightMap.channel),bumpMapUv:pe&&p(M.bumpMap.channel),normalMapUv:Se&&p(M.normalMap.channel),displacementMapUv:Ke&&p(M.displacementMap.channel),emissiveMapUv:Xe&&p(M.emissiveMap.channel),metalnessMapUv:Qe&&p(M.metalnessMap.channel),roughnessMapUv:it&&p(M.roughnessMap.channel),anisotropyMapUv:q&&p(M.anisotropyMap.channel),clearcoatMapUv:me&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(M.sheenRoughnessMap.channel),specularMapUv:Te&&p(M.specularMap.channel),specularColorMapUv:Ge&&p(M.specularColorMap.channel),specularIntensityMapUv:$e&&p(M.specularIntensityMap.channel),transmissionMapUv:rt&&p(M.transmissionMap.channel),thicknessMapUv:Y&&p(M.thicknessMap.channel),alphaMapUv:ue&&p(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Se||V),vertexNormals:!!X.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(ze||ue),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||X.attributes.normal===void 0&&Se===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Re,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===At,decodeVideoTextureEmissive:Xe&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===At,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function m(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)A.push(D),A.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(g(A,M),y(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function g(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function w(M){let A=f[M.type],D;if(A){let F=Ei[A];D=Pn.clone(F.uniforms)}else D=M.uniforms;return D}function _(M,A){let D=h.get(A);return D!==void 0?++D.usedTimes:(D=new aS(s,A,M,i),c.push(D),h.set(A,D)),D}function S(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){o.remove(M)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:P}}function hS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function pg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let y=s[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let w=o(u,f,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function c(u,f,p,x,m,g){let y=o(u,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||uS),n.length>1&&n.sort(f||pg),i.length>1&&i.sort(f||pg)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function dS(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new mg,s.set(n,[a])):i>=r.length?(a=new mg,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function fS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function pS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var mS=0;function gS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xS(s){let e=new fS,t=pS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new nt,a=new nt;function o(c){let h=0,d=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,w=0,_=0,S=0,b=0,P=0,M=0,A=0,D=0;c.sort(gS);for(let G=0,$=c.length;G<$;G++){let N=c[G],X=N.color,ee=N.intensity,K=N.distance,fe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===as?fe=N.shadow.map.texture:fe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=X.r*ee,d+=X.g*ee,u+=X.b*ee;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],ee);D++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[p]=re,n.sunShadowMap[p]=fe;let Ae=ne.getViewportCount();for(let Re=0;Re<Ae;Re++)n.sunShadowMatrix[x+Re]=ne.getMatrix(Re),n.sunShadowCascade[x+Re]=ne._cascadeData[Re];x+=Ae,p++}n.sun[f]=Z,f++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=fe,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=Z,m++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(X).multiplyScalar(ee),Z.distance=K,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[y]=Z;let ne=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,ne.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[y]=ne.matrix,N.castShadow){let re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.spotShadow[y]=re,n.spotShadowMap[y]=fe,P++}y++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(X).multiplyScalar(ee),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=Z,w++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=fe,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=Z,g++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(ee),Z.groundColor.copy(N.groundColor).multiplyScalar(ee),n.hemi[_]=Z,_++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==w||F.hemiLength!==_||F.numSunShadows!==p||F.numDirectionalShadows!==S||F.numPointShadows!==b||F.numSpotShadows!==P||F.numSpotMaps!==M||F.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=y,F.rectAreaLength=w,F.hemiLength=_,F.numSunShadows=p,F.numDirectionalShadows=S,F.numPointShadows=b,F.numSpotShadows=P,F.numSpotMaps=M,F.numLightProbes=D,n.version=mS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let _=c[y];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function gg(s){let e=new xS(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _S(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new gg(s),e.set(i,[o])):r>=a.length?(o=new gg(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
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
}`,MS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],SS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xg=new nt,wc=new L,ep=new L;function bS(s,e,t){let n=new Li,i=new oe,r=new oe,a=new Rt,o=new Sa,l=new ba,c={},h=t.maxTextureSize,d={[ns]:mn,[mn]:ns,[Cn]:Cn},u=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:vS,fragmentShader:yS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new st;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let g=this.type;this.render=function(b,P,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===cf&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Da);let A=s.getRenderTarget(),D=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),G=s.state;G.setBlending($t),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=g!==this.type;$&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=b.length;N<X;N++){let ee=b[N],K=ee.shadow;if(K===void 0){De("WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let fe=K.getFrameExtents();i.multiply(fe),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,K.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||$===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===br){if(ee.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new kt(i.x,i.y,{format:as,type:Kt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),K.map.texture.name=ee.name+".shadowMap",K.map.depthTexture=new Mi(i.x,i.y,En),K.map.depthTexture.name=ee.name+".shadowMapDepth",K.map.depthTexture.format=_i,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ot,K.map.depthTexture.magFilter=Ot}else ee.isPointLight?(K.map=new Ac(i.x),K.map.depthTexture=new qo(i.x,Qn)):(K.map=new kt(i.x,i.y),K.map.depthTexture=new Mi(i.x,i.y,Qn)),K.map.depthTexture.name=ee.name+".shadowMap",K.map.depthTexture.format=_i,this.type===Da?(K.map.depthTexture.compareFunction=Z?Mc:yc,K.map.depthTexture.minFilter=Nt,K.map.depthTexture.magFilter=Nt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ot,K.map.depthTexture.magFilter=Ot);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==i.x||K.map.height!==i.y)&&K.map.setSize(i.x,i.y);let ne=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ee.isPointLight!==!0&&K.updateMatrices(ee,M);for(let re=0;re<ne;re++){let Ae=K.getCamera(re);if(ee.isPointLight){let Re=K.camera,R=K.matrix,U=ee.distance||Re.far;U!==Re.far&&(Re.far=U,Re.updateProjectionMatrix()),wc.setFromMatrixPosition(ee.matrixWorld),Re.position.copy(wc),ep.copy(Re.position),ep.add(MS[re]),Re.up.copy(SS[re]),Re.lookAt(ep),Re.updateMatrixWorld(),R.makeTranslation(-wc.x,-wc.y,-wc.z),xg.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(xg,Re.coordinateSystem,Re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,re),s.clear();else{re===0&&(s.setRenderTarget(K.map),s.clear());let Re=K.getViewport(re);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),G.viewport(a)}n=K.getFrustum(re),_(P,M,Ae,ee,this.type)}K.isPointLightShadow!==!0&&this.type===br&&y(K,M),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(A,D,F)};function y(b,P){let M=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new kt(i.x,i.y,{format:as,type:Kt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(P,null,M,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(P,null,M,f,x,null)}function w(b,P,M,A){let D=null,F=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)D=F;else if(D=M.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=D.uuid,$=P.uuid,N=c[G];N===void 0&&(N={},c[G]=N);let X=N[$];X===void 0&&(X=D.clone(),N[$]=X,P.addEventListener("dispose",S)),D=X}if(D.visible=P.visible,D.wireframe=P.wireframe,A===br?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=s.properties.get(D);G.light=M}return D}function _(b,P,M,A,D){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===br)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let $=e.update(b),N=b.material;if(Array.isArray(N)){let X=$.groups;for(let ee=0,K=X.length;ee<K;ee++){let fe=X[ee],Z=N[fe.materialIndex];if(Z&&Z.visible){let ne=w(b,Z,A,D);b.onBeforeShadow(s,b,P,M,$,ne,fe),s.renderBufferDirect(M,null,$,ne,b,fe),b.onAfterShadow(s,b,P,M,$,ne,fe)}}}else if(N.visible){let X=w(b,N,A,D);b.onBeforeShadow(s,b,P,M,$,X,null),s.renderBufferDirect(M,null,$,X,b,null),b.onAfterShadow(s,b,P,M,$,X,null)}}let G=b.children;for(let $=0,N=G.length;$<N;$++)_(G[$],P,M,A,D)}function S(b){b.target.removeEventListener("dispose",S);for(let M in c){let A=c[M],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function wS(s,e){function t(){let Y=!1,Pe=new Rt,ue=null,Ie=new Rt(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!Y&&(s.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){Y=Ue},setClear:function(Ue,_e,et,qe,Dt){Dt===!0&&(Ue*=qe,_e*=qe,et*=qe),Pe.set(Ue,_e,et,qe),Ie.equals(Pe)===!1&&(s.clearColor(Ue,_e,et,qe),Ie.copy(Pe))},reset:function(){Y=!1,ue=null,Ie.set(-1,0,0,0)}}}function n(){let Y=!1,Pe=!1,ue=null,Ie=null,Ue=null;return{setReversed:function(_e){if(Pe!==_e){let et=e.get("EXT_clip_control");_e?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Pe=_e;let qe=Ue;Ue=null,this.setClear(qe)}},getReversed:function(){return Pe},setTest:function(_e){_e?H(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(_e){ue!==_e&&!Y&&(s.depthMask(_e),ue=_e)},setFunc:function(_e){if(Pe&&(_e=k0[_e]),Ie!==_e){switch(_e){case Co:s.depthFunc(s.NEVER);break;case Ro:s.depthFunc(s.ALWAYS);break;case Po:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Io:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=_e}},setLocked:function(_e){Y=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Pe&&(_e=1-_e),s.clearDepth(_e))},reset:function(){Y=!1,ue=null,Ie=null,Ue=null,Pe=!1}}}function i(){let Y=!1,Pe=null,ue=null,Ie=null,Ue=null,_e=null,et=null,qe=null,Dt=null;return{setTest:function(wt){Y||(wt?H(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!Y&&(s.stencilMask(wt),Pe=wt)},setFunc:function(wt,On,ti){(ue!==wt||Ie!==On||Ue!==ti)&&(s.stencilFunc(wt,On,ti),ue=wt,Ie=On,Ue=ti)},setOp:function(wt,On,ti){(_e!==wt||et!==On||qe!==ti)&&(s.stencilOp(wt,On,ti),_e=wt,et=On,qe=ti)},setLocked:function(wt){Y=wt},setClear:function(wt){Dt!==wt&&(s.clearStencil(wt),Dt=wt)},reset:function(){Y=!1,Pe=null,ue=null,Ie=null,Ue=null,_e=null,et=null,qe=null,Dt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,_=null,S=null,b=null,P=null,M=new Ce(0,0,0),A=0,D=!1,F=null,G=null,$=null,N=null,X=null,ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,fe=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=fe>=1):Z.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=fe>=2);let ne=null,re={},Ae=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),R=new Rt().fromArray(Ae),U=new Rt().fromArray(Re);function k(Y,Pe,ue,Ie){let Ue=new Uint8Array(4),_e=s.createTexture();s.bindTexture(Y,_e),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ue;et++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Pe+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return _e}let z={};z[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(s.DEPTH_TEST),a.setFunc(Js),pe(!1),Se(Uu),H(s.CULL_FACE),ge($t);function H(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function ie(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function de(Y,Pe){return u[Y]!==Pe?(s.bindFramebuffer(Y,Pe),u[Y]=Pe,Y===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Pe),Y===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ve(Y,Pe){let ue=p,Ie=!1;if(Y){ue=f.get(Pe),ue===void 0&&(ue=[],f.set(Pe,ue));let Ue=Y.textures;if(ue.length!==Ue.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,et=Ue.length;_e<et;_e++)ue[_e]=s.COLOR_ATTACHMENT0+_e;ue.length=Ue.length,Ie=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ue)}function ze(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}let mt={[Kn]:s.FUNC_ADD,[hf]:s.FUNC_SUBTRACT,[uf]:s.FUNC_REVERSE_SUBTRACT};mt[df]=s.MIN,mt[ff]=s.MAX;let ce={[Ds]:s.ZERO,[pf]:s.ONE,[mf]:s.SRC_COLOR,[Bu]:s.SRC_ALPHA,[vf]:s.SRC_ALPHA_SATURATE,[Ua]:s.DST_COLOR,[Na]:s.DST_ALPHA,[gf]:s.ONE_MINUS_SRC_COLOR,[zu]:s.ONE_MINUS_SRC_ALPHA,[_f]:s.ONE_MINUS_DST_COLOR,[xf]:s.ONE_MINUS_DST_ALPHA,[yf]:s.CONSTANT_COLOR,[Mf]:s.ONE_MINUS_CONSTANT_COLOR,[Sf]:s.CONSTANT_ALPHA,[bf]:s.ONE_MINUS_CONSTANT_ALPHA};function ge(Y,Pe,ue,Ie,Ue,_e,et,qe,Dt,wt){if(Y===$t){m===!0&&(ie(s.BLEND),m=!1);return}if(m===!1&&(H(s.BLEND),m=!0),Y!==Ul){if(Y!==g||wt!==D){if((y!==Kn||S!==Kn)&&(s.blendEquation(s.FUNC_ADD),y=Kn,S=Kn),wt)switch(Y){case wr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ou:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:je("WebGLState: Invalid blending: ",Y);break}else switch(Y){case wr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",Y);break}w=null,_=null,b=null,P=null,M.set(0,0,0),A=0,g=Y,D=wt}return}Ue=Ue||Pe,_e=_e||ue,et=et||Ie,(Pe!==y||Ue!==S)&&(s.blendEquationSeparate(mt[Pe],mt[Ue]),y=Pe,S=Ue),(ue!==w||Ie!==_||_e!==b||et!==P)&&(s.blendFuncSeparate(ce[ue],ce[Ie],ce[_e],ce[et]),w=ue,_=Ie,b=_e,P=et),(qe.equals(M)===!1||Dt!==A)&&(s.blendColor(qe.r,qe.g,qe.b,Dt),M.copy(qe),A=Dt),g=Y,D=!1}function ye(Y,Pe){Y.side===Cn?ie(s.CULL_FACE):H(s.CULL_FACE);let ue=Y.side===mn;Pe&&(ue=!ue),pe(ue),Y.blending===wr&&Y.transparent===!1?ge($t):ge(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Ie=Y.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Xe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(Y){F!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),F=Y)}function Se(Y){Y!==of?(H(s.CULL_FACE),Y!==G&&(Y===Uu?s.cullFace(s.BACK):Y===lf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),G=Y}function Ke(Y){Y!==$&&(K&&s.lineWidth(Y),$=Y)}function Xe(Y,Pe,ue){Y?(H(s.POLYGON_OFFSET_FILL),(N!==Pe||X!==ue)&&(N=Pe,X=ue,a.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ue))):ie(s.POLYGON_OFFSET_FILL)}function Qe(Y){Y?H(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function it(Y){Y===void 0&&(Y=s.TEXTURE0+ee-1),ne!==Y&&(s.activeTexture(Y),ne=Y)}function V(Y,Pe,ue){ue===void 0&&(ne===null?ue=s.TEXTURE0+ee-1:ue=ne);let Ie=re[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[ue]=Ie),(Ie.type!==Y||Ie.texture!==Pe)&&(ne!==ue&&(s.activeTexture(ue),ne=ue),s.bindTexture(Y,Pe||z[Y]),Ie.type=Y,Ie.texture=Pe)}function O(){let Y=re[ne];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function T(){try{s.compressedTexImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function v(){try{s.texSubImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function I(){try{s.texSubImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function B(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function me(){try{s.texStorage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function ae(){try{s.texStorage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function J(){try{s.texImage2D(...arguments)}catch(Y){je("WebGLState:",Y)}}function le(){try{s.texImage3D(...arguments)}catch(Y){je("WebGLState:",Y)}}function we(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function Ye(Y,Pe){d[Y]!==Pe&&(s.pixelStorei(Y,Pe),d[Y]=Pe)}function Ee(Y){R.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),R.copy(Y))}function Te(Y){U.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),U.copy(Y))}function Ge(Y,Pe){let ue=c.get(Pe);ue===void 0&&(ue=new WeakMap,c.set(Pe,ue));let Ie=ue.get(Y);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,Y.name),ue.set(Y,Ie))}function $e(Y,Pe){let Ie=c.get(Pe).get(Y);l.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,Y.__bindingPointIndex),l.set(Pe,Ie))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,re={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,_=null,S=null,b=null,P=null,M=new Ce(0,0,0),A=0,D=!1,F=null,G=null,$=null,N=null,X=null,R.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:ie,bindFramebuffer:de,drawBuffers:ve,useProgram:ze,setBlending:ge,setMaterial:ye,setFlipSided:pe,setCullFace:Se,setLineWidth:Ke,setPolygonOffset:Xe,setScissorTest:Qe,activeTexture:it,bindTexture:V,unbindTexture:O,compressedTexImage2D:te,compressedTexImage3D:T,texImage2D:J,texImage3D:le,pixelStorei:Ye,getParameter:we,updateUBOMapping:Ge,uniformBlockBinding:$e,texStorage2D:me,texStorage3D:ae,texSubImage2D:v,texSubImage3D:I,compressedTexSubImage2D:B,compressedTexSubImage3D:q,scissor:Ee,viewport:Te,reset:rt}}function TS(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return p?new OffscreenCanvas(T,v):sa("canvas")}function m(T,v,I){let B=1,q=te(T);if((q.width>I||q.height>I)&&(B=I/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let me=Math.floor(B*q.width),ae=Math.floor(B*q.height);u===void 0&&(u=x(me,ae));let J=v?x(me,ae):u;return J.width=me,J.height=ae,J.getContext("2d").drawImage(T,0,0,me,ae),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+me+"x"+ae+")."),J}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function g(T){return T.generateMipmaps}function y(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,v,I,B,q,me=!1){if(T!==null){if(s[T]!==void 0)return s[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae;B&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===s.RED&&(I===s.FLOAT&&(J=s.R32F),I===s.HALF_FLOAT&&(J=s.R16F),I===s.UNSIGNED_BYTE&&(J=s.R8),I===s.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),I===s.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),v===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.R8UI),I===s.UNSIGNED_SHORT&&(J=s.R16UI),I===s.UNSIGNED_INT&&(J=s.R32UI),I===s.BYTE&&(J=s.R8I),I===s.SHORT&&(J=s.R16I),I===s.INT&&(J=s.R32I)),v===s.RG&&(I===s.FLOAT&&(J=s.RG32F),I===s.HALF_FLOAT&&(J=s.RG16F),I===s.UNSIGNED_BYTE&&(J=s.RG8),I===s.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),I===s.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RG8UI),I===s.UNSIGNED_SHORT&&(J=s.RG16UI),I===s.UNSIGNED_INT&&(J=s.RG32UI),I===s.BYTE&&(J=s.RG8I),I===s.SHORT&&(J=s.RG16I),I===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RGB8UI),I===s.UNSIGNED_SHORT&&(J=s.RGB16UI),I===s.UNSIGNED_INT&&(J=s.RGB32UI),I===s.BYTE&&(J=s.RGB8I),I===s.SHORT&&(J=s.RGB16I),I===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),I===s.UNSIGNED_INT&&(J=s.RGBA32UI),I===s.BYTE&&(J=s.RGBA8I),I===s.SHORT&&(J=s.RGBA16I),I===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(I===s.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),I===s.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),I===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){let le=me?ia:xt.getTransfer(q);I===s.FLOAT&&(J=s.RGBA32F),I===s.HALF_FLOAT&&(J=s.RGBA16F),I===s.UNSIGNED_BYTE&&(J=le===At?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),I===s.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),I===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(T,v){let I;return T?v===null||v===Qn||v===rs?I=s.DEPTH24_STENCIL8:v===En?I=s.DEPTH32F_STENCIL8:v===Er&&(I=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qn||v===rs?I=s.DEPTH_COMPONENT24:v===En?I=s.DEPTH_COMPONENT32F:v===Er&&(I=s.DEPTH_COMPONENT16),I}function b(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function P(T){let v=T.target;v.removeEventListener("dispose",P),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function M(T){let v=T.target;v.removeEventListener("dispose",M),F(v)}function A(T){let v=n.get(T);if(v.__webglInit===void 0)return;let I=T.source,B=f.get(I);if(B){let q=B[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&D(T),Object.keys(B).length===0&&f.delete(I)}n.remove(T)}function D(T){let v=n.get(T);s.deleteTexture(v.__webglTexture);let I=T.source,B=f.get(I);delete B[v.__cacheKey],a.memory.textures--}function F(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(v.__webglFramebuffer[B]))for(let q=0;q<v.__webglFramebuffer[B].length;q++)s.deleteFramebuffer(v.__webglFramebuffer[B][q]);else s.deleteFramebuffer(v.__webglFramebuffer[B]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[B])}else{if(Array.isArray(v.__webglFramebuffer))for(let B=0;B<v.__webglFramebuffer.length;B++)s.deleteFramebuffer(v.__webglFramebuffer[B]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let B=0;B<v.__webglColorRenderbuffer.length;B++)v.__webglColorRenderbuffer[B]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[B]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=T.textures;for(let B=0,q=I.length;B<q;B++){let me=n.get(I[B]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(I[B])}n.remove(T)}let G=0;function $(){G=0}function N(){return G}function X(T){G=T}function ee(){let T=G;return T>=i.maxTextures&&De("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,T}function K(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function fe(T,v){let I=n.get(T);if(T.isVideoTexture&&V(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let B=T.image;if(B===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,T,v);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+v)}function Z(T,v){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){ie(I,T,v);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+v)}function ne(T,v){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){ie(I,T,v);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+v)}function re(T,v){let I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){de(I,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+v)}let Ae={[Tn]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[ys]:s.MIRRORED_REPEAT},Re={[Ot]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[ss]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[Ls]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},R={[Ff]:s.NEVER,[Vf]:s.ALWAYS,[Of]:s.LESS,[yc]:s.LEQUAL,[Bf]:s.EQUAL,[Mc]:s.GEQUAL,[zf]:s.GREATER,[kf]:s.NOTEQUAL};function U(T,v){if(v.type===En&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===Ls||v.magFilter===ss||v.magFilter===jn||v.minFilter===Nt||v.minFilter===Ls||v.minFilter===ss||v.minFilter===jn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Ae[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Ae[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Ae[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Re[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Re[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,R[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==ss&&v.minFilter!==jn||v.type===En&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function k(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));let B=v.source,q=f.get(B);q===void 0&&(q={},f.set(B,q));let me=K(v);if(me!==T.__cacheKey){q[me]===void 0&&(q[me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[me].usedTimes++;let ae=q[T.__cacheKey];ae!==void 0&&(q[T.__cacheKey].usedTimes--,ae.usedTimes===0&&D(v)),T.__cacheKey=me,T.__webglTexture=q[me].texture}return I}function z(T,v,I){return Math.floor(Math.floor(T/I)/v)}function H(T,v,I,B){let me=T.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,I,B,v.data);else{me.sort((Ye,Ee)=>Ye.start-Ee.start);let ae=0;for(let Ye=1;Ye<me.length;Ye++){let Ee=me[ae],Te=me[Ye],Ge=Ee.start+Ee.count,$e=z(Te.start,v.width,4),rt=z(Ee.start,v.width,4);Te.start<=Ge+1&&$e===rt&&z(Te.start+Te.count-1,v.width,4)===$e?Ee.count=Math.max(Ee.count,Te.start+Te.count-Ee.start):(++ae,me[ae]=Te)}me.length=ae+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),le=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Ye=0,Ee=me.length;Ye<Ee;Ye++){let Te=me[Ye],Ge=Math.floor(Te.start/4),$e=Math.ceil(Te.count/4),rt=Ge%v.width,Y=Math.floor(Ge/v.width),Pe=$e,ue=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,rt,Y,Pe,ue,I,B,v.data)}T.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function ie(T,v,I){let B=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(B=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(B=s.TEXTURE_3D);let q=k(T,v),me=v.source;t.bindTexture(B,T.__webglTexture,s.TEXTURE0+I);let ae=n.get(me);if(me.version!==ae.__version||q===!0){if(t.activeTexture(s.TEXTURE0+I),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ue=xt.getPrimaries(xt.workingColorSpace),Ie=v.colorSpace===Xn?null:xt.getPrimaries(v.colorSpace),Ue=v.colorSpace===Xn||ue===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let le=m(v.image,!1,i.maxTextureSize);le=O(v,le);let we=r.convert(v.format,v.colorSpace),Ye=r.convert(v.type),Ee=_(v.internalFormat,we,Ye,v.normalized,v.colorSpace,v.isVideoTexture);U(B,v);let Te,Ge=v.mipmaps,$e=v.isVideoTexture!==!0,rt=ae.__version===void 0||q===!0,Y=me.dataReady,Pe=b(v,le);if(v.isDepthTexture)Ee=S(v.format===Ti,v.type),rt&&($e?t.texStorage2D(s.TEXTURE_2D,1,Ee,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ee,le.width,le.height,0,we,Ye,null));else if(v.isDataTexture)if(Ge.length>0){$e&&rt&&t.texStorage2D(s.TEXTURE_2D,Pe,Ee,Ge[0].width,Ge[0].height);for(let ue=0,Ie=Ge.length;ue<Ie;ue++)Te=Ge[ue],$e?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Ye,Te.data):t.texImage2D(s.TEXTURE_2D,ue,Ee,Te.width,Te.height,0,we,Ye,Te.data);v.generateMipmaps=!1}else $e?(rt&&t.texStorage2D(s.TEXTURE_2D,Pe,Ee,le.width,le.height),Y&&H(v,le,we,Ye)):t.texImage2D(s.TEXTURE_2D,0,Ee,le.width,le.height,0,we,Ye,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ee,Ge[0].width,Ge[0].height,le.depth);for(let ue=0,Ie=Ge.length;ue<Ie;ue++)if(Te=Ge[ue],v.format!==sn)if(we!==null)if($e){if(Y)if(v.layerUpdates.size>0){let Ue=$u(Te.width,Te.height,v.format,v.type);for(let _e of v.layerUpdates){let et=Te.data.subarray(_e*Ue/Te.data.BYTES_PER_ELEMENT,(_e+1)*Ue/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,_e,Te.width,Te.height,1,we,et)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,le.depth,we,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Ee,Te.width,Te.height,le.depth,0,Te.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,le.depth,we,Ye,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,Ee,Te.width,Te.height,le.depth,0,we,Ye,Te.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{$e&&rt&&t.texStorage2D(s.TEXTURE_2D,Pe,Ee,Ge[0].width,Ge[0].height);for(let ue=0,Ie=Ge.length;ue<Ie;ue++)Te=Ge[ue],v.format!==sn?we!==null?$e?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,Ee,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Ye,Te.data):t.texImage2D(s.TEXTURE_2D,ue,Ee,Te.width,Te.height,0,we,Ye,Te.data)}else if(v.isDataArrayTexture)if($e){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ee,le.width,le.height,le.depth),Y)if(v.layerUpdates.size>0){let ue=$u(le.width,le.height,v.format,v.type);for(let Ie of v.layerUpdates){let Ue=le.data.subarray(Ie*ue/le.data.BYTES_PER_ELEMENT,(Ie+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,le.width,le.height,1,we,Ye,Ue)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,we,Ye,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,le.width,le.height,le.depth,0,we,Ye,le.data);else if(v.isData3DTexture)$e?(rt&&t.texStorage3D(s.TEXTURE_3D,Pe,Ee,le.width,le.height,le.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,we,Ye,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,le.width,le.height,le.depth,0,we,Ye,le.data);else if(v.isFramebufferTexture){if(rt)if($e)t.texStorage2D(s.TEXTURE_2D,Pe,Ee,le.width,le.height);else{let ue=le.width,Ie=le.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Ee,ue,Ie,0,we,Ye,null),ue>>=1,Ie>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),le.parentNode!==ue){ue.appendChild(le),d.add(v),ue.onpaint=Ie=>{let Ue=Ie.changedElements;for(let _e of d)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,le);else{let Ue=s.RGBA,_e=s.RGBA,et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,_e,et,le)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ge.length>0){if($e&&rt){let ue=te(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Ee,ue.width,ue.height)}for(let ue=0,Ie=Ge.length;ue<Ie;ue++)Te=Ge[ue],$e?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,we,Ye,Te):t.texImage2D(s.TEXTURE_2D,ue,Ee,we,Ye,Te);v.generateMipmaps=!1}else if($e){if(rt){let ue=te(le);t.texStorage2D(s.TEXTURE_2D,Pe,Ee,ue.width,ue.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ye,le)}else t.texImage2D(s.TEXTURE_2D,0,Ee,we,Ye,le);g(v)&&y(B),ae.__version=me.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function de(T,v,I){if(v.image.length!==6)return;let B=k(T,v),q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);let me=n.get(q);if(q.version!==me.__version||B===!0){t.activeTexture(s.TEXTURE0+I);let ae=xt.getPrimaries(xt.workingColorSpace),J=v.colorSpace===Xn?null:xt.getPrimaries(v.colorSpace),le=v.colorSpace===Xn||ae===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,Ye=v.image[0]&&v.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!we&&!Ye?Ee[_e]=m(v.image[_e],!0,i.maxCubemapSize):Ee[_e]=Ye?v.image[_e].image:v.image[_e],Ee[_e]=O(v,Ee[_e]);let Te=Ee[0],Ge=r.convert(v.format,v.colorSpace),$e=r.convert(v.type),rt=_(v.internalFormat,Ge,$e,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Pe=me.__version===void 0||B===!0,ue=q.dataReady,Ie=b(v,Te);U(s.TEXTURE_CUBE_MAP,v);let Ue;if(we){Y&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,rt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Ue=Ee[_e].mipmaps;for(let et=0;et<Ue.length;et++){let qe=Ue[et];v.format!==sn?Ge!==null?Y?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,qe.width,qe.height,Ge,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,rt,qe.width,qe.height,0,qe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,qe.width,qe.height,Ge,$e,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,rt,qe.width,qe.height,0,Ge,$e,qe.data)}}}else{if(Ue=v.mipmaps,Y&&Pe){Ue.length>0&&Ie++;let _e=te(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,rt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ye){Y?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Ge,$e,Ee[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Ee[_e].width,Ee[_e].height,0,Ge,$e,Ee[_e].data);for(let et=0;et<Ue.length;et++){let Dt=Ue[et].image[_e].image;Y?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Dt.width,Dt.height,Ge,$e,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,rt,Dt.width,Dt.height,0,Ge,$e,Dt.data)}}else{Y?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ge,$e,Ee[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Ge,$e,Ee[_e]);for(let et=0;et<Ue.length;et++){let qe=Ue[et];Y?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Ge,$e,qe.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,rt,Ge,$e,qe.image[_e])}}}g(v)&&y(s.TEXTURE_CUBE_MAP),me.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ve(T,v,I,B,q,me){let ae=r.convert(I.format,I.colorSpace),J=r.convert(I.type),le=_(I.internalFormat,ae,J,I.normalized,I.colorSpace),we=n.get(v),Ye=n.get(I);if(Ye.__renderTarget=v,!we.__hasExternalTextures){let Ee=Math.max(1,v.width>>me),Te=Math.max(1,v.height>>me);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,me,le,Ee,Te,v.depth,0,ae,J,null):t.texImage2D(q,me,le,Ee,Te,0,ae,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),it(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,q,Ye.__webglTexture,0,Qe(v)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,B,q,Ye.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(T,v,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){let B=v.depthTexture,q=B&&B.isDepthTexture?B.type:null,me=S(v.stencilBuffer,q),ae=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;it(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(v),me,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(v),me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,me,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,T)}else{let B=v.textures;for(let q=0;q<B.length;q++){let me=B[q],ae=r.convert(me.format,me.colorSpace),J=r.convert(me.type),le=_(me.internalFormat,ae,J,me.normalized,me.colorSpace);it(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(v),le,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(v),le,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,le,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function mt(T,v,I){let B=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),U(s.TEXTURE_CUBE_MAP,v.depthTexture);let we=r.convert(v.depthTexture.format),Ye=r.convert(v.depthTexture.type),Ee;v.depthTexture.format===_i?Ee=s.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(Ee=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ee,v.width,v.height,0,we,Ye,null)}}else fe(v.depthTexture,0);let me=q.__webglTexture,ae=Qe(v),J=B?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,le=v.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===_i)it(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,J,me,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,le,J,me,0);else if(v.depthTexture.format===Ti)it(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,J,me,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,le,J,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(T){let v=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let B=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),B){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=B}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let B=0;B<6;B++)mt(v.__webglFramebuffer[B],T,B);else{let B=T.texture.mipmaps;B&&B.length>0?mt(v.__webglFramebuffer[0],T,0):mt(v.__webglFramebuffer,T,0)}else if(I){v.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[B]),v.__webglDepthbuffer[B]===void 0)v.__webglDepthbuffer[B]=s.createRenderbuffer(),ze(v.__webglDepthbuffer[B],T,!1);else{let q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[B];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,me)}}else{let B=T.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ze(v.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(T,v,I){let B=n.get(T);v!==void 0&&ve(B.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&ce(T)}function ye(T){let v=T.texture,I=n.get(T),B=n.get(v);T.addEventListener("dispose",M);let q=T.textures,me=T.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=v.version,a.memory.textures++),me){I.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[J]=[];for(let le=0;le<v.mipmaps.length;le++)I.__webglFramebuffer[J][le]=s.createFramebuffer()}else I.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)I.__webglFramebuffer[J]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(ae)for(let J=0,le=q.length;J<le;J++){let we=n.get(q[J]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&it(T)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){let le=q[J];I.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[J]);let we=r.convert(le.format,le.colorSpace),Ye=r.convert(le.type),Ee=_(le.internalFormat,we,Ye,le.normalized,le.colorSpace,T.isXRRenderTarget===!0),Te=Qe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,I.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture),U(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)ve(I.__webglFramebuffer[J][le],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le);else ve(I.__webglFramebuffer[J],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(v)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,le=q.length;J<le;J++){let we=q[J],Ye=n.get(we),Ee=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ye.__webglTexture),U(Ee,we),ve(I.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+J,Ee,0),g(we)&&y(Ee)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,B.__webglTexture),U(J,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)ve(I.__webglFramebuffer[le],T,v,s.COLOR_ATTACHMENT0,J,le);else ve(I.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,J,0);g(v)&&y(J),t.unbindTexture()}T.depthBuffer&&ce(T)}function pe(T){let v=T.textures;for(let I=0,B=v.length;I<B;I++){let q=v[I];if(g(q)){let me=w(T),ae=n.get(q).__webglTexture;t.bindTexture(me,ae),y(me),t.unbindTexture()}}}let Se=[],Ke=[];function Xe(T){if(T.samples>0){if(it(T)===!1){let v=T.textures,I=T.width,B=T.height,q=s.COLOR_BUFFER_BIT,me=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(T),J=v.length>1;if(J)for(let we=0;we<v.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let le=T.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let we=0;we<v.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);let Ye=n.get(v[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,I,B,0,0,I,B,q,s.NEAREST),l===!0&&(Se.length=0,Ke.length=0,Se.push(s.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Se.push(me),Ke.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let we=0;we<v.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);let Ye=n.get(v[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Qe(T){return Math.min(i.maxSamples,T.samples)}function it(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function V(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function O(T,v){let I=T.colorSpace,B=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==na&&I!==Xn&&(xt.getTransfer(I)===At?(B!==sn||q!==yn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",I)),v}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=$,this.getTextureUnits=N,this.setTextureUnits=X,this.setTexture2D=fe,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=ge,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wg(s,e){function t(n,i=Xn){let r,a=xt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return s.BYTE;if(n===Vu)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Ol)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===Kt)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===Xu)return s.RGB;if(n===sn)return s.RGBA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===kl)return s.RED;if(n===Ya)return s.RED_INTEGER;if(n===as)return s.RG;if(n===Vl)return s.RG_INTEGER;if(n===Gl)return s.RGBA_INTEGER;if(n===$a||n===Za||n===Ja||n===Ka)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===ja||n===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===$l)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===xc||n===Qa||n===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AS=`
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

}`,lp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:ES,fragmentShader:AS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cp=class extends Gn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new lp,g={},y=t.getContextAttributes(),w=null,_=null,S=[],b=[],P=new oe,M=null,A=null,D=new tn;D.viewport=new Rt;let F=new tn;F.viewport=new Rt;let G=[D,F],$=new Rl,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=S[z];return H===void 0&&(H=new ir,S[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=S[z];return H===void 0&&(H=new ir,S[z]=H),H.getGripSpace()},this.getHand=function(z){let H=S[z];return H===void 0&&(H=new ir,S[z]=H),H.getHandSpace()};function ee(z){let H=b.indexOf(z.inputSource);if(H===-1)return;let ie=S[H];ie!==void 0&&(ie.update(z.inputSource,z.frame,c||a),ie.dispatchEvent({type:z.type,data:z.inputSource}))}function K(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",fe);for(let z=0;z<S.length;z++){let H=b[z];H!==null&&(b[z]=null,S[z].disconnect(H))}N=null,X=null,m.reset();for(let z in g)delete g[z];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,_=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),A!==null){let z=A.camera;z.fov=A.fov,z.zoom=A.zoom,z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",K),i.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,de=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?Ti:_i,de=y.stencil?rs:Qn);let ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new kt(u.textureWidth,u.textureHeight,{format:sn,type:yn,depthTexture:new Mi(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new kt(f.framebufferWidth,f.framebufferHeight,{format:sn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function fe(z){for(let H=0;H<z.removed.length;H++){let ie=z.removed[H],de=b.indexOf(ie);de>=0&&(b[de]=null,S[de].disconnect(ie))}for(let H=0;H<z.added.length;H++){let ie=z.added[H],de=b.indexOf(ie);if(de===-1){for(let ze=0;ze<S.length;ze++)if(ze>=b.length){b.push(ie),de=ze;break}else if(b[ze]===null){b[ze]=ie,de=ze;break}if(de===-1)break}let ve=S[de];ve&&ve.connect(ie)}}let Z=new L,ne=new L;function re(z,H,ie){Z.setFromMatrixPosition(H.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);let de=Z.distanceTo(ne),ve=H.projectionMatrix.elements,ze=ie.projectionMatrix.elements,mt=ve[14]/(ve[10]-1),ce=ve[14]/(ve[10]+1),ge=(ve[9]+1)/ve[5],ye=(ve[9]-1)/ve[5],pe=(ve[8]-1)/ve[0],Se=(ze[8]+1)/ze[0],Ke=mt*pe,Xe=mt*Se,Qe=de/(-pe+Se),it=Qe*-pe;if(H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(it),z.translateZ(Qe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ve[10]===-1)z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let V=mt+Qe,O=ce+Qe,te=Ke-it,T=Xe+(de-it),v=ge*ce/O*V,I=ye*ce/O*V;z.projectionMatrix.makePerspective(te,T,v,I,V,O),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Ae(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let H=z.near,ie=z.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),$.near=F.near=D.near=H,$.far=F.far=D.far=ie,(N!==$.near||X!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),N=$.near,X=$.far),$.layers.mask=z.layers.mask|6,D.layers.mask=$.layers.mask&-5,F.layers.mask=$.layers.mask&-3;let de=z.parent,ve=$.cameras;Ae($,de);for(let ze=0;ze<ve.length;ze++)Ae(ve[ze],de);ve.length===2?re($,D,F):$.projectionMatrix.copy(D.projectionMatrix),A===null&&z.isPerspectiveCamera&&(A={camera:z,fov:z.fov,zoom:z.zoom}),Re(z,$,de)};function Re(z,H,ie){ie===null?z.matrix.copy(H.matrixWorld):(z.matrix.copy(ie.matrixWorld),z.matrix.invert(),z.matrix.multiply(H.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=js*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(z){return g[z]};let R=null;function U(z,H){if(h=H.getViewerPose(c||a),p=H,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let de=!1;ie.length!==$.cameras.length&&($.cameras.length=0,de=!0);for(let ce=0;ce<ie.length;ce++){let ge=ie[ce],ye=null;if(f!==null)ye=f.getViewport(ge);else{let Se=d.getViewSubImage(u,ge);ye=Se.viewport,ce===0&&(e.setRenderTargetTextures(_,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(_))}let pe=G[ce];pe===void 0&&(pe=new tn,pe.layers.enable(ce),pe.viewport=new Rt,G[ce]=pe),pe.matrix.fromArray(ge.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ge.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ye.x,ye.y,ye.width,ye.height),ce===0&&($.matrix.copy(pe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),de===!0&&$.cameras.push(pe)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ce=d.getDepthInformation(ie[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,i.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ce=0;ce<ie.length;ce++){let ge=ie[ce].camera;if(ge){let ye=g[ge];ye||(ye=new da,g[ge]=ye);let pe=d.getCameraImage(ge);ye.sourceTexture=pe}}}}for(let ie=0;ie<S.length;ie++){let de=b[ie],ve=S[ie];de!==null&&ve!==void 0&&ve.update(de,H,c||a)}R&&R(z,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let k=new _g;k.setAnimationLoop(U),this.setAnimationLoop=function(z){R=z},this.dispose=function(){}}},CS=new nt,Tg=new lt;Tg.set(-1,0,0,0,1,0,0,0,1);function RS(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Xf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,_=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(CS.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PS(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=i[_.id];b===void 0&&(m(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",y));let P=S.program;n.updateUBOMapping(_,P);let M=e.render.frame;r[_.id]!==M&&(u(_),r[_.id]=M)}function h(_){let S=d();_.__bindingPointIndex=S;let b=s.createBuffer(),P=_.__size,M=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=i[_.id],b=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let M=0,A=b.length;M<A;M++){let D=b[M];if(Array.isArray(D))for(let F=0,G=D.length;F<G;F++)f(D[F],M,F,P);else f(D,M,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,S,b,P){if(x(_,S,b,P)===!0){let M=_.__offset,A=_.value;if(Array.isArray(A)){let D=0;for(let F=0;F<A.length;F++){let G=A[F],$=g(G);p(G,_.__data,D),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,_.__data)}}function p(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function x(_,S,b,P){let M=_.value,A=S+"_"+b;if(P[A]===void 0)return typeof M=="number"||typeof M=="boolean"?P[A]=M:ArrayBuffer.isView(M)?P[A]=M.slice():P[A]=M.clone(),!0;{let D=P[A];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return P[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(D.equals(M)===!1)return D.copy(M),!0}}return!1}function m(_){let S=_.uniforms,b=0,P=16;for(let A=0,D=S.length;A<D;A++){let F=Array.isArray(S[A])?S[A]:[S[A]];for(let G=0,$=F.length;G<$;G++){let N=F[G],X=Array.isArray(N.value)?N.value:[N.value];for(let ee=0,K=X.length;ee<K;ee++){let fe=X[ee],Z=g(fe),ne=b%P,re=ne%Z.boundary,Ae=ne+re;b+=re,Ae!==0&&P-Ae<Z.storage&&(b+=P-Ae),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Z.storage}}}let M=b%P;return M>0&&(b+=P-M),_.__size=b,_.__cache={},this}function g(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):De("WebGLRenderer: Unsupported uniform value type.",_),S}function y(_){let S=_.target;S.removeEventListener("dispose",y);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var IS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function DS(){return Bi===null&&(Bi=new ln(IS,16,16,as,Kt),Bi.name="DFG_LUT",Bi.minFilter=Nt,Bi.magFilter=Nt,Bi.wrapS=_n,Bi.wrapT=_n,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var hp=class{constructor(e={}){let{canvas:t=Gf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Gl,Vl,Ya]),g=new Set([yn,Qn,Er,rs,Bl,zl]),y=new Uint32Array(4),w=new Int32Array(4),_=new L,S=null,b=null,P=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,G=null,$=null,N=null,X=null;this._outputColorSpace=en;let ee=0,K=0,fe=null,Z=-1,ne=null,re=new Rt,Ae=new Rt,Re=null,R=new Ce(0),U=0,k=t.width,z=t.height,H=1,ie=null,de=null,ve=new Rt(0,0,k,z),ze=new Rt(0,0,k,z),mt=!1,ce=new Li,ge=!1,ye=!1,pe=new nt,Se=new L,Ke=new Rt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function it(){return fe===null?H:1}let V=n;function O(C,W){return t.getContext(C,W)}let te,T,v,I,B,q,me,ae,J,le,we,Ye,Ee,Te,Ge,$e,rt,Y,Pe,ue,Ie,Ue,_e;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",On,!1),V===null){let W="webgl2";if(V=O(W,C),V===null)throw O(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(C){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),je("WebGLRenderer: "+C.message),C}function et(){te=new k1(V),te.init(),Ie=new wg(V,te),T=new P1(V,te,e,Ie),v=new wS(V,te),T.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),$=V.createFramebuffer(),N=V.createFramebuffer(),X=V.createFramebuffer(),I=new H1(V),B=new hS,q=new TS(V,te,v,B,T,Ie,I),me=new z1(D),ae=new X_(V),Ue=new C1(V,ae),J=new V1(V,ae,I,Ue),le=new X1(V,J,ae,Ue,I),Y=new W1(V,T,q),Ge=new I1(B),we=new cS(D,me,te,T,Ue,Ge),Ye=new RS(D,B),Ee=new dS,Te=new _S(te),rt=new A1(D,me,v,le,p,l),$e=new bS(D,le,T),_e=new PS(V,I,T,v),Pe=new R1(V,te,I),ue=new G1(V,te,I),I.programs=we.programs,D.capabilities=T,D.extensions=te,D.properties=B,D.renderLists=Ee,D.shadowMap=$e,D.state=v,D.info=I}x!==yn&&(A=new Y1(x,t.width,t.height,o,i,r));let qe=new cp(D,V);this.xr=qe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(k,z,!1))},this.getSize=function(C){return C.set(k,z)},this.setSize=function(C,W,se=!0){if(qe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,z=W,t.width=Math.floor(C*H),t.height=Math.floor(W*H),se===!0&&(t.style.width=C+"px",t.style.height=W+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(k*H,z*H).floor()},this.setDrawingBufferSize=function(C,W,se){k=C,z=W,H=se,t.width=Math.floor(C*se),t.height=Math.floor(W*se),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(x===yn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(re)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,W,se,j){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,W,se,j),v.viewport(re.copy(ve).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,W,se,j){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,W,se,j),v.scissor(Ae.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(C){v.setScissorTest(mt=C)},this.setOpaqueSort=function(C){ie=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,se=!0){let j=0;if(C){let Q=!1;if(fe!==null){let Oe=fe.texture.format;Q=m.has(Oe)}if(Q){let Oe=fe.texture.type,Ve=g.has(Oe),Fe=rt.getClearColor(),Ze=rt.getClearAlpha(),tt=Fe.r,gt=Fe.g,yt=Fe.b;Ve?(y[0]=tt,y[1]=gt,y[2]=yt,y[3]=Ze,V.clearBufferuiv(V.COLOR,0,y)):(w[0]=tt,w[1]=gt,w[2]=yt,w[3]=Ze,V.clearBufferiv(V.COLOR,0,w))}else j|=V.COLOR_BUFFER_BIT}W&&(j|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),G=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),rt.dispose(),Ee.dispose(),Te.dispose(),B.dispose(),me.dispose(),le.dispose(),Ue.dispose(),_e.dispose(),we.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Bc),qe.removeEventListener("sessionend",zc),Vi.stop()};function Dt(C){C.preventDefault(),ra("WebGLRenderer: Context Lost."),F=!0}function wt(){ra("WebGLRenderer: Context Restored."),F=!1;let C=I.autoReset,W=$e.enabled,se=$e.autoUpdate,j=$e.needsUpdate,Q=$e.type;et(),I.autoReset=C,$e.enabled=W,$e.autoUpdate=se,$e.needsUpdate=j,$e.type=Q}function On(C){je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){let W=C.target;W.removeEventListener("dispose",ti),cd(W)}function cd(C){hd(C),B.remove(C)}function hd(C){let W=B.get(C).programs;W!==void 0&&(W.forEach(function(se){we.releaseProgram(se)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,se,j,Q,Oe){W===null&&(W=Xe);let Ve=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Fe=dn(C,W,se,j,Q);v.setMaterial(j,Ve);let Ze=se.index,tt=1;if(j.wireframe===!0){if(Ze=J.getWireframeAttribute(se),Ze===void 0)return;tt=2}let gt=se.drawRange,yt=se.attributes.position,Je=gt.start*tt,Ct=(gt.start+gt.count)*tt;Oe!==null&&(Je=Math.max(Je,Oe.start*tt),Ct=Math.min(Ct,(Oe.start+Oe.count)*tt)),Ze!==null?(Je=Math.max(Je,0),Ct=Math.min(Ct,Ze.count)):yt!=null&&(Je=Math.max(Je,0),Ct=Math.min(Ct,yt.count));let jt=Ct-Je;if(jt<0||jt===1/0)return;Ue.setup(Q,j,Fe,se,Ze);let Ht,Ft=Pe;if(Ze!==null&&(Ht=ae.get(Ze),Ft=ue,Ft.setIndex(Ht)),Q.isMesh)j.wireframe===!0?(v.setLineWidth(j.wireframeLinewidth*it()),Ft.setMode(V.LINES)):Ft.setMode(V.TRIANGLES);else if(Q.isLine){let Mn=j.linewidth;Mn===void 0&&(Mn=1),v.setLineWidth(Mn*it()),Q.isLineSegments?Ft.setMode(V.LINES):Q.isLineLoop?Ft.setMode(V.LINE_LOOP):Ft.setMode(V.LINE_STRIP)}else Q.isPoints?Ft.setMode(V.POINTS):Q.isSprite&&Ft.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Mn=Q._multiDrawStarts,ke=Q._multiDrawCounts,In=Q._multiDrawCount,Et=Ze?ae.get(Ze).bytesPerElement:1,ni=B.get(j).currentProgram.getUniforms();for(let Ci=0;Ci<In;Ci++)ni.setValue(V,"_gl_DrawID",Ci),Ft.render(Mn[Ci]/Et,ke[Ci])}else if(Q.isInstancedMesh)Ft.renderInstances(Je,jt,Q.count);else if(se.isInstancedBufferGeometry){let Mn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,Mn);Ft.renderInstances(Je,jt,ke)}else Ft.render(Je,jt)};function Oc(C,W,se,j){G!==null&&C.isNodeMaterial&&G.setObject(j,C),ge===!0&&Ge.setState(C,se,!1),C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,Bt(C,W,j),C.side=ns,C.needsUpdate=!0,Bt(C,W,j),C.side=Cn):Bt(C,W,j)}this.compile=function(C,W,se=null){se===null&&(se=C),G!==null&&G.renderStart(C,W,se),b=Te.get(se),b.init(W),M.push(b),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),C!==se&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),ye=this.localClippingEnabled,ge=Ge.init(this.clippingPlanes,ye),ge===!0&&Ge.setGlobalState(this.clippingPlanes,W),G!==null&&$e.render(b.state.shadowsArray,se,W);let j=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Oe=Q.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let Fe=Oe[Ve];Oc(Fe,se,W,Q),j.add(Fe)}else Oc(Oe,se,W,Q),j.add(Oe)}),b=M.pop(),G!==null&&G.renderEnd(),j},this.compileAsync=function(C,W,se=null){let j=this.compile(C,W,se);return new Promise(Q=>{function Oe(){if(j.forEach(function(Ve){let Ze=B.get(Ve).currentProgram;(Ze===void 0||Ze.isReady())&&j.delete(Ve)}),j.size===0){Q(C);return}setTimeout(Oe,10)}te.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ao=null;function ud(C){ao&&ao(C)}function Bc(){Vi.stop()}function zc(){Vi.start()}let Vi=new _g;Vi.setAnimationLoop(ud),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){ao=C,qe.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},qe.addEventListener("sessionstart",Bc),qe.addEventListener("sessionend",zc),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(C,W);let se=qe.enabled===!0&&qe.isPresenting===!0,j=A!==null&&(fe===null||se)&&A.begin(D,fe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(W),W=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,fe),b=Te.get(C,M.length),b.init(W),b.state.textureUnits=q.getTextureUnits(),M.push(b),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(pe,Vn,W.reversedDepth),ye=this.localClippingEnabled,ge=Ge.init(this.clippingPlanes,ye),S=Ee.get(C,P.length),S.init(),P.push(S),qe.enabled===!0&&qe.isPresenting===!0){let Ve=D.xr.getDepthSensingMesh();Ve!==null&&he(Ve,W,-1/0,D.sortObjects)}he(C,W,0,D.sortObjects),S.finish(),G!==null&&G.updateLights(b.state.lightsArray),D.sortObjects===!0&&S.sort(ie,de),Qe=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Qe&&rt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ge.beginShadows();let Q=b.state.shadowsArray;if($e.render(Q,C,W),ge===!0&&Ge.endShadows(),(j&&A.hasRenderPass())===!1){let Ve=S.opaque,Fe=S.transmissive;if(b.setupLights(),W.isArrayCamera){let Ze=W.cameras;if(Fe.length>0)for(let tt=0,gt=Ze.length;tt<gt;tt++){let yt=Ze[tt];Me(Ve,Fe,C,yt)}Qe&&rt.render(C);for(let tt=0,gt=Ze.length;tt<gt;tt++){let yt=Ze[tt];xe(S,C,yt,yt.viewport)}}else Fe.length>0&&Me(Ve,Fe,C,W),Qe&&rt.render(C),xe(S,C,W)}fe!==null&&K===0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe)),j&&A.end(D),C.isScene===!0&&C.onAfterRender(D,C,W),Ue.resetDefaultState(),Z=-1,ne=null,M.pop(),M.length>0?(b=M[M.length-1],q.setTextureUnits(b.state.textureUnits),ge===!0&&Ge.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,G!==null&&G.renderEnd()};function he(C,W,se,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ce)){j&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);let Ve=le.update(C),Fe=C.material;Fe.visible&&S.push(C,Ve,Fe,se,Ke.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ce))){let Ve=le.update(C),Fe=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ke.copy(Ve.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){let Ze=Ve.groups;for(let tt=0,gt=Ze.length;tt<gt;tt++){let yt=Ze[tt],Je=Fe[yt.materialIndex];Je&&Je.visible&&S.push(C,Ve,Je,se,Ke.z,yt,W)}}else Fe.visible&&S.push(C,Ve,Fe,se,Ke.z,null,W)}}let Oe=C.children;for(let Ve=0,Fe=Oe.length;Ve<Fe;Ve++)he(Oe[Ve],W,se,j)}function xe(C,W,se,j){let{opaque:Q,transmissive:Oe,transparent:Ve}=C;b.setupLightsView(se),ge===!0&&Ge.setGlobalState(D.clippingPlanes,se),j&&v.viewport(re.copy(j)),Q.length>0&&Be(Q,W,se),Oe.length>0&&Be(Oe,W,se),Ve.length>0&&Be(Ve,W,se),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Me(C,W,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){let Je=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new kt(1,1,{generateMipmaps:!0,type:Je?Kt:yn,minFilter:jn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Oe=b.state.transmissionRenderTarget[j.id],Ve=j.viewport||re;Oe.setSize(Ve.z*D.transmissionResolutionScale,Ve.w*D.transmissionResolutionScale);let Fe=D.getRenderTarget(),Ze=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(Oe),D.getClearColor(R),U=D.getClearAlpha(),U<1&&D.setClearColor(16777215,.5),D.clear(),Qe&&rt.render(se);let gt=D.toneMapping;D.toneMapping=li;let yt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),ge===!0&&Ge.setGlobalState(D.clippingPlanes,j),Be(C,se,j),q.updateMultisampleRenderTarget(Oe),q.updateRenderTargetMipmap(Oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ct=0,jt=W.length;Ct<jt;Ct++){let Ht=W[Ct],{object:Ft,geometry:Mn,material:ke,group:In}=Ht;if(ke.side===Cn&&Ft.layers.test(j.layers)){let Et=ke.side;ke.side=mn,ke.needsUpdate=!0,ut(Ft,se,j,Mn,ke,In),ke.side=Et,ke.needsUpdate=!0,Je=!0}}Je===!0&&(q.updateMultisampleRenderTarget(Oe),q.updateRenderTargetMipmap(Oe))}D.setRenderTarget(Fe,Ze,tt),D.setClearColor(R,U),yt!==void 0&&(j.viewport=yt),D.toneMapping=gt}function Be(C,W,se){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Oe=C.length;Q<Oe;Q++){let Ve=C[Q],{object:Fe,geometry:Ze,group:tt}=Ve,gt=Ve.material;gt.allowOverride===!0&&j!==null&&(gt=j),Fe.layers.test(se.layers)&&ut(Fe,W,se,Ze,gt,tt)}}function ut(C,W,se,j,Q,Oe){G!==null&&Q.isNodeMaterial&&G.setObject(C,Q),C.onBeforeRender(D,W,se,j,Q,Oe),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,W,se,j,C,Oe),Q.transparent===!0&&Q.side===Cn&&Q.forceSinglePass===!1?(Q.side=mn,Q.needsUpdate=!0,D.renderBufferDirect(se,W,j,Q,C,Oe),Q.side=ns,Q.needsUpdate=!0,D.renderBufferDirect(se,W,j,Q,C,Oe),Q.side=Cn):D.renderBufferDirect(se,W,j,Q,C,Oe),C.onAfterRender(D,W,se,j,Q,Oe)}function Bt(C,W,se){W.isScene!==!0&&(W=Xe);let j=B.get(C),Q=b.state.lights,Oe=b.state.shadowsArray,Ve=Q.state.version,Fe=we.getParameters(C,Q.state,Oe,W,se,b.state.lightProbeGridArray),Ze=we.getProgramCacheKey(Fe),tt=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let gt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=me.get(C.envMap||j.environment,gt),j.envMapRotation=j.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",ti),tt=new Map,j.programs=tt);let yt=tt.get(Ze);if(yt!==void 0){if(j.currentProgram===yt&&j.lightsStateVersion===Ve)return ot(C,Fe),yt}else Fe.uniforms=we.getUniforms(C),G!==null&&C.isNodeMaterial&&G.build(C,se,Fe),C.onBeforeCompile(Fe,D),yt=we.acquireProgram(Fe,Ze),tt.set(Ze,yt),j.uniforms=Fe.uniforms;let Je=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),ot(C,Fe),j.needsLights=hi(C),j.lightsStateVersion=Ve,j.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.sunLights.value=Q.state.sun,Je.sunLightShadows.value=Q.state.sunShadow,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.sunShadowMatrix.value=Q.state.sunShadowMatrix,Je.sunShadowCascade.value=Q.state.sunShadowCascade,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=yt,j.uniformsList=null,yt}function He(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=no.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ot(C,W){let se=B.get(C);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function an(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(W.matrixWorld);for(let se=0,j=C.length;se<j;se++){let Q=C[se];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function dn(C,W,se,j,Q){W.isScene!==!0&&(W=Xe),q.resetTextureUnits();let Oe=W.fog,Ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Fe=fe===null?D.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:xt.workingColorSpace,Ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,tt=me.get(j.envMap||Ve,Ze),gt=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,yt=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Je=!!se.morphAttributes.position,Ct=!!se.morphAttributes.normal,jt=!!se.morphAttributes.color,Ht=li;j.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ht=D.toneMapping);let Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Mn=Ft!==void 0?Ft.length:0,ke=B.get(j),In=b.state.lights;if(ge===!0&&(ye===!0||C!==ne)){let zt=C===ne&&j.id===Z;Ge.setState(j,C,zt)}let Et=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==In.state.version||ke.outputColorSpace!==Fe||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isBatchedMesh&&ke.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ke.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==tt||j.fog===!0&&ke.fog!==Oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ge.numPlanes||ke.numIntersection!==Ge.numIntersection)||ke.vertexAlphas!==gt||ke.vertexTangents!==yt||ke.morphTargets!==Je||ke.morphNormals!==Ct||ke.morphColors!==jt||ke.toneMapping!==Ht||ke.morphTargetsCount!==Mn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ke.__version=j.version);let ni=ke.currentProgram;Et===!0&&(ni=Bt(j,W,Q),G&&j.isNodeMaterial&&G.onUpdateProgram(j,ni,ke));let Ci=!1,cs=!1,Ir=!1,Lt=ni.getUniforms(),Zt=ke.uniforms;if(v.useProgram(ni.program)&&(Ci=!0,cs=!0,Ir=!0),j.id!==Z&&(Z=j.id,cs=!0),ke.needsLights){let zt=an(b.state.lightProbeGridArray,Q);ke.lightProbeGrid!==zt&&(ke.lightProbeGrid=zt,cs=!0)}if(Ci||ne!==C){v.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",C.projectionMatrix),Lt.setValue(V,"viewMatrix",C.matrixWorldInverse);let us=Lt.map.cameraPosition;us!==void 0&&us.setValue(V,Se.setFromMatrixPosition(C.matrixWorld)),T.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,cs=!0,Ir=!0)}if(ke.needsLights&&(In.state.sunShadowMap.length>0&&Lt.setValue(V,"sunShadowMap",In.state.sunShadowMap,q),In.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",In.state.directionalShadowMap,q),In.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",In.state.spotShadowMap,q),In.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",In.state.pointShadowMap,q)),Q.isSkinnedMesh){Lt.setOptional(V,Q,"bindMatrix"),Lt.setOptional(V,Q,"bindMatrixInverse");let zt=Q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Lt.setValue(V,"boneTexture",zt.boneTexture,q))}Q.isBatchedMesh&&(Lt.setOptional(V,Q,"batchingTexture"),Lt.setValue(V,"batchingTexture",Q._matricesTexture,q),Lt.setOptional(V,Q,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",Q._indirectTexture,q),Lt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",Q._colorsTexture,q));let hs=se.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Y.update(Q,se,ni),(cs||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,Lt.setValue(V,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Zt.envMapIntensity.value=W.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=DS()),cs){if(Lt.setValue(V,"toneMappingExposure",D.toneMappingExposure),ke.needsLights&&xn(Zt,Ir),Oe&&j.fog===!0&&Ye.refreshFogUniforms(Zt,Oe),Ye.refreshMaterialUniforms(Zt,j,H,z,b.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){let zt=ke.lightProbeGrid;Zt.probesSH.value=zt.texture,Zt.probesMin.value.copy(zt.boundingBox.min),Zt.probesMax.value.copy(zt.boundingBox.max),Zt.probesResolution.value.copy(zt.resolution)}no.upload(V,He(ke),Zt,q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(no.upload(V,He(ke),Zt,q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Lt.setValue(V,"center",Q.center),Lt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(V,"normalMatrix",Q.normalMatrix),Lt.setValue(V,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let zt=j.uniformsGroups;for(let us=0,Dr=zt.length;us<Dr;us++){let Up=zt[us];_e.update(Up,ni),_e.bind(Up,ni)}}return ni}function xn(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function hi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(C,W,se){let j=B.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),B.get(C.texture).__webglTexture=W,B.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let se=B.get(C);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,se=0){fe=C,ee=W,K=se;let j=null,Q=!1,Oe=!1;if(C){let Fe=B.get(C);if(Fe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),re.copy(C.viewport),Ae.copy(C.scissor),Re=C.scissorTest,v.viewport(re),v.scissor(Ae),v.setScissorTest(Re),Z=-1;return}else if(Fe.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Fe.__hasExternalTextures)q.rebindTextures(C,B.get(C.texture).__webglTexture,B.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let gt=C.depthTexture;if(Fe.__boundDepthTexture!==gt){if(gt!==null&&B.has(gt)&&(C.width!==gt.image.width||C.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}let Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Oe=!0);let tt=B.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?j=tt[W][se]:j=tt[W],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?j=B.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?j=tt[se]:j=tt,re.copy(C.viewport),Ae.copy(C.scissor),Re=C.scissorTest}else re.copy(ve).multiplyScalar(H).floor(),Ae.copy(ze).multiplyScalar(H).floor(),Re=mt;if(se!==0&&(j=$),v.bindFramebuffer(V.FRAMEBUFFER,j)&&v.drawBuffers(C,j),v.viewport(re),v.scissor(Ae),v.setScissorTest(Re),Q){let Fe=B.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,se)}else if(Oe){let Fe=W;for(let Ze=0;Ze<C.textures.length;Ze++){let tt=B.get(C.textures[Ze]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ze,tt.__webglTexture,se,Fe)}}else if(C!==null&&se!==0){let Fe=B.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,se)}Z=-1};function Ai(C){let W=B.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=T.textureFormatReadable(C.format),W.__typeReadable=T.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,se,j,Q,Oe,Ve,Fe=0){if(!(C&&C.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=B.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze){v.bindFramebuffer(V.FRAMEBUFFER,Ze);try{let tt=C.textures[Fe],gt=tt.format,yt=tt.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe);let Je=Ai(tt);if(Je.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&se>=0&&se<=C.height-Q&&V.readPixels(W,se,j,Q,Ie.convert(gt),Ie.convert(yt),Oe)}finally{let tt=fe!==null?B.get(fe).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,W,se,j,Q,Oe,Ve,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=B.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze)if(W>=0&&W<=C.width-j&&se>=0&&se<=C.height-Q){v.bindFramebuffer(V.FRAMEBUFFER,Ze);let tt=C.textures[Fe],gt=tt.format,yt=tt.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe);let Je=Ai(tt);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ct),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(W,se,j,Q,Ie.convert(gt),Ie.convert(yt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let jt=fe!==null?B.get(fe).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,jt);let Ht=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await z0(V,Ht,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Ct),V.deleteSync(Ht),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,se=0){let j=Math.pow(2,-se),Q=Math.floor(C.image.width*j),Oe=Math.floor(C.image.height*j),Ve=W!==null?W.x:0,Fe=W!==null?W.y:0;q.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Ve,Fe,Q,Oe),v.unbindTexture()},this.copyTextureToTexture=function(C,W,se=null,j=null,Q=0,Oe=0){let Ve,Fe,Ze,tt,gt,yt,Je,Ct,jt,Ht=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(se!==null)Ve=se.max.x-se.min.x,Fe=se.max.y-se.min.y,Ze=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,gt=se.min.y,yt=se.isBox3?se.min.z:0;else{let Zt=Math.pow(2,-Q);Ve=Math.floor(Ht.width*Zt),Fe=Math.floor(Ht.height*Zt),C.isDataArrayTexture?Ze=Ht.depth:C.isData3DTexture?Ze=Math.floor(Ht.depth*Zt):Ze=1,tt=0,gt=0,yt=0}j!==null?(Je=j.x,Ct=j.y,jt=j.z):(Je=0,Ct=0,jt=0);let Ft=Ie.convert(W.format),Mn=Ie.convert(W.type),ke;W.isData3DTexture?(q.setTexture3D(W,0),ke=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),ke=V.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),ke=V.TEXTURE_2D),v.activeTexture(V.TEXTURE0),v.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),v.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),v.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let In=v.getParameter(V.UNPACK_ROW_LENGTH),Et=v.getParameter(V.UNPACK_IMAGE_HEIGHT),ni=v.getParameter(V.UNPACK_SKIP_PIXELS),Ci=v.getParameter(V.UNPACK_SKIP_ROWS),cs=v.getParameter(V.UNPACK_SKIP_IMAGES);v.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),v.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),v.pixelStorei(V.UNPACK_SKIP_ROWS,gt),v.pixelStorei(V.UNPACK_SKIP_IMAGES,yt);let Ir=C.isDataArrayTexture||C.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let Zt=B.get(C),hs=B.get(W),zt=B.get(Zt.__renderTarget),us=B.get(hs.__renderTarget);v.bindFramebuffer(V.READ_FRAMEBUFFER,zt.__webglFramebuffer),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let Dr=0;Dr<Ze;Dr++)Ir&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,B.get(C).__webglTexture,Q,yt+Dr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,B.get(W).__webglTexture,Oe,jt+Dr)),V.blitFramebuffer(tt,gt,Ve,Fe,Je,Ct,Ve,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||B.has(C)){let Zt=B.get(C),hs=B.get(W);v.bindFramebuffer(V.READ_FRAMEBUFFER,N),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,X);for(let zt=0;zt<Ze;zt++)Ir?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,Q,yt+zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Zt.__webglTexture,Q),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hs.__webglTexture,Oe,jt+zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hs.__webglTexture,Oe),Q!==0?V.blitFramebuffer(tt,gt,Ve,Fe,Je,Ct,Ve,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(ke,Oe,Je,Ct,jt+zt,tt,gt,Ve,Fe):V.copyTexSubImage2D(ke,Oe,Je,Ct,tt,gt,Ve,Fe);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ke,Oe,Je,Ct,jt,Ve,Fe,Ze,Ft,Mn,Ht.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Oe,Je,Ct,jt,Ve,Fe,Ze,Ft,Ht.data):V.texSubImage3D(ke,Oe,Je,Ct,jt,Ve,Fe,Ze,Ft,Mn,Ht):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,Je,Ct,Ve,Fe,Ft,Mn,Ht.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,Je,Ct,Ht.width,Ht.height,Ft,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Oe,Je,Ct,Ve,Fe,Ft,Mn,Ht);v.pixelStorei(V.UNPACK_ROW_LENGTH,In),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et),v.pixelStorei(V.UNPACK_SKIP_PIXELS,ni),v.pixelStorei(V.UNPACK_SKIP_ROWS,Ci),v.pixelStorei(V.UNPACK_SKIP_IMAGES,cs),Oe===0&&W.generateMipmaps&&V.generateMipmap(ke),v.unbindTexture()},this.initRenderTarget=function(C){B.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),v.unbindTexture()},this.resetState=function(){ee=0,K=0,fe=null,v.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Cc=new L;function ci(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Cc.copy(e),Cc[n]=0,Cc.normalize();let c=.5*a/(a+o),h=1-Cc.angleTo(s)/l;return Math.sign(Cc[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Qu=class s extends Hn{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new L,m=.5/a;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[y+0]=ci(x,c,"z","y",r,n),f[y+1]=1-ci(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-ci(x,c,"z","y",r,n),f[y+1]=1-ci(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-ci(x,c,"x","z",r,e),f[y+1]=ci(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-ci(x,c,"x","z",r,e),f[y+1]=1-ci(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-ci(x,c,"x","y",r,e),f[y+1]=1-ci(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=ci(x,c,"x","y",r,e),f[y+1]=1-ci(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Ag(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new st,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Eg(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Eg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Eg(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new _t(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}var Ut=(s=0,e=0,t=0)=>new L(s,e,t),up=71823;function ct(){return up=Math.imul(up,1664525)+1013904223>>>0,up/4294967296}var os=new Map,ht={};function St(s,e,t=.65,n=0,i={}){let r=i.clearcoat!==void 0?fr:Si;return ht[s]||=new r({name:s,color:e,roughness:t,metalness:n,...i})}function Us(s,e,t=1){let n=[...s].reduce((f,p)=>Math.imul(f^p.charCodeAt(0),16777619)>>>0,2166136261),i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=["grass","pavers","asphalt","district"].includes(s)?512:256,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d");o.fillStyle=e,o.fillRect(0,0,r,r);let l=f=>{for(let p of[-r,0,r])for(let x of[-r,0,r])o.save(),o.translate(p,x),f(),o.restore()},c=(f,p,x,m,g)=>{let y=o.createRadialGradient(f,p,0,f,p,x);y.addColorStop(0,`rgba(${m},${g})`),y.addColorStop(1,`rgba(${m},0)`),o.fillStyle=y,l(()=>o.fillRect(f-x,p-x,x*2,x*2))},h=r/256;if(s==="grass")for(let f=0;f<70;f++)c(i()*r,i()*r,(30+i()*110)*h,i()>.55?"226,232,150":i()>.5?"40,70,30":"120,110,60",.08+i()*.1);if(s==="asphalt"){for(let f=0;f<40;f++)c(i()*r,i()*r,(25+i()*90)*h,i()>.5?"255,255,255":"20,22,20",.035+i()*.05);for(let f=0;f<6;f++){o.fillStyle=`rgba(20,22,20,${.04+i()*.04})`;let p=i()*r,x=i()*r,m=(20+i()*60)*h,g=(15+i()*40)*h;l(()=>o.fillRect(p,x,m,g))}}if(s==="district"||s==="weathered"){let f=s==="district"?.6:1;for(let p=0;p<60;p++)c(i()*r,i()*r,(20+i()*60)*h,i()>.5?"255,255,255":"40,45,40",(.035+i()*.04)*f);for(let p=0;p<40;p++){o.fillStyle=`rgba(30,35,30,${.015+i()*.03})`;let x=i()*r,m=i()*r,g=(30+i()*90)*h;l(()=>o.fillRect(x,m,1+i()*2,g))}}if(s==="pavers"){let f=r/8;for(let p=0;p<8;p++)for(let x=0;x<8;x++){let m=i();o.fillStyle=`rgba(${m>.5?"255,255,255":"60,55,45"},${.03+i()*.06})`,o.fillRect(p*f,x*f,f,f)}for(let p=0;p<12;p++)c(i()*r,i()*r,(30+i()*70)*h,"80,75,60",.05+i()*.05)}let d=s==="grass"?4e4:18e3*h*h;for(let f=0;f<d;f++){let p=i();o.fillStyle=`rgba(${p>.5?"255,255,255":"0,0,0"},${i()*(s==="grass"?.1:.055)})`,o.fillRect(i()*r,i()*r,1+i()*1.2*h,1+i()*1.2*h)}if(s==="pavers"){let f=r/8;o.fillStyle="rgba(40,36,28,.28)";for(let p=0;p<=8;p++)o.fillRect(p*f-1,0,2,r),o.fillRect(0,p*f-1,r,2)}let u=new rr(a);return u.colorSpace=en,u.wrapS=u.wrapT=Tn,u.repeat.set(t,t),u.anisotropy=8,u}function Cg(){St("stone","#c8c1af",.92,0,{map:Us("stone","#e5e0d5",2),bumpScale:.013}),ht.stone.bumpMap=ht.stone.map,St("concrete","#ece9df",.8,.02,{map:Us("concrete","#edece6",1)}),St("ivory","#eee7d7",.43,.13),St("roof","#bec1b7",.83,.15,{map:Us("weathered","#f2f2ec",1)}),St("dark","#263937",.56,.55),St("metal","#9ba8a4",.32,.82),St("copper","#a99572",.42,.62),St("terra","#b96e48",.83,.1),St("glass","#2b4749",.1,.28,{envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.04,ior:1.5}),St("glassLight","#5c8684",.19,.66,{envMapIntensity:1.5}),St("black","#101f21",.62,.3),St("asphalt","#7c837d",.94,0,{map:Us("asphalt","#b2b3aa",8),bumpScale:.03}),ht.asphalt.bumpMap=ht.asphalt.map,St("asphaltWorn","#646b66",.9,0,{map:ht.asphalt.map}),ht.asphaltWorn.userData.worldUV=10,St("paving","#e2ddcb",.84,0,{map:Us("pavers","#dfdacb",5)}),St("grass","#889770",1,0,{map:Us("grass","#b0b590",6)}),St("districtWall","#a5b2ad",.88,.03),St("districtGlass","#567275",.24,.25,{envMapIntensity:.8}),St("districtRoof","#a3afa9",.9,.08,{map:Us("district","#f0f0ea",1)}),St("hedge","#344f30",.96),St("white","#e6e5d3",.75),St("water","#406e69",.14,.2,{envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.09,ior:1.33}),St("solar","#1b3c47",.38,.16,{envMapIntensity:.35}),St("roofGlass","#355958",.32,.08,{envMapIntensity:.3}),St("pump","#236b67",.43,.35,{clearcoat:.18,clearcoatRoughness:.22});let s=Us("cast","#808080",1);s.colorSpace=Xn,ht.pump.bumpMap=s,ht.pump.bumpScale=.002,ht.pump.userData.worldUV=.3,St("pipe","#497975",.36,.7),St("hydrant","#b3352c",.55,.25),St("paintBlue","#3a4d5e",.42,.45),St("accessible","#3f6d9e",.9,0),St("red","#ad583a",.5,.4),St("amber","#e7b25c",.4,.2,{emissive:"#efb955",emissiveIntensity:.2}),St("lamp","#fff1cd",.3,.1,{emissive:"#ffe3ae",emissiveIntensity:1}),St("windowLight","#6f8272",.5,.15,{emissive:"#ffd092",emissiveIntensity:0}),St("rubber","#202823",.93),St("bark","#675445",1),St("parkingPaint","#496552",.94,0,{map:ht.asphalt.map}),ht.parkingPaint.userData.worldUV=10;for(let[e,t]of[["stone",1.6],["concrete",1],["paving",8],["asphalt",10],["grass",16],["roof",9],["districtRoof",28]])ht[e].userData.worldUV=t,ht[e].map.repeat.set(1,1);for(let e=0;e<6;e++)St("leaf"+e,["#344c31","#4d623b","#5b7044","#718452","#7f8c5e","#4b6750"][e],.92);return ht}function E(s,e,t,n,i,r,a,o="concrete",l=0,c=0){l=Math.max(i,r,a)>4?0:Math.min(l,Math.min(i,r,a)/4);let h=[i,r,a,l].join("/");os.has(h)||os.set(h,l>0?new Qu(i,r,a,2,Math.min(l,i/2,r/2,a/2)):new Hn(i,r,a));let d=new ft(os.get(h),typeof o=="string"?ht[o]:o);return d.position.set(e,t,n),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,s.add(d),d}function We(s,e,t,n,i,r,a="metal",o=24,l=i){let c=`c${i}/${l}/${r}/${o}`;os.has(c)||os.set(c,new Es(l,i,r,o));let h=new ft(os.get(c),typeof a=="string"?ht[a]:a);return h.position.set(e,t,n),h.castShadow=h.receiveShadow=!0,s.add(h),h}function Vt(s,e,t=.1,n="metal",i=!0){let r=i?new or(e.map(o=>Ut(...o)),!1,"centripetal"):new cr;if(!i)for(let o=1;o<e.length;o++)r.add(new lr(Ut(...e[o-1]),Ut(...e[o])));let a=new ft(new dr(r,Math.max(12,e.length*8),t,8,!1),ht[n]);return a.castShadow=a.receiveShadow=!0,s.add(a),a}function gn(s,e,t,n,i,r=.03,a="metal",o=[Math.PI/2,0,0]){let l=`t${i}/${r}`;os.has(l)||os.set(l,new ur(i,r,8,32));let c=new ft(os.get(l),ht[a]);return c.position.set(e,t,n),c.rotation.set(...o),c.castShadow=c.receiveShadow=!0,s.add(c),c}function vt(s,e,t=0,n=0,i=0){let r=new gi;return r.name=e,r.position.set(t,n,i),s.add(r),r}function Gt(s,e,t,n,i,r=8,a=1.2,o="#e6e2cc",l=null,c=0){let h=document.createElement("canvas");h.width=1024,h.height=Math.max(64,Math.round(1024*a/r));let d=h.getContext("2d");l&&(d.fillStyle=l,d.fillRect(0,0,h.width,h.height)),d.fillStyle=o,d.font=`600 ${h.height*.65}px 'Microsoft YaHei UI','Microsoft YaHei','PingFang SC',sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,h.width/2,h.height*.53,h.width*.95);let u=new rr(h);u.colorSpace=en,u.anisotropy=8;let f=new ft(new ji(r,a),new An({map:u,transparent:!0,depthWrite:!1,side:Cn,toneMapped:!1}));return f.position.set(t,n,i),f.rotation.y=c,s.add(f),f}var LS=()=>ht.contact||=new An({name:"contact-shadow",color:"#1d2622",vertexColors:!0,transparent:!0,side:Cn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function Rr(s,e,t=2.4,n=.42){let i=[],r=[],a=[],o=[[0,1],[.18,.55],[.45,.22],[1,0]];for(let[h,d,u,f,p]of e){let x=o.map(([m,g])=>{let y=u/2+m*t,w=f/2+m*t;return{a:g*g*n,p:[[-y,-w],[y,-w],[y,w],[-y,w]]}});for(let m=0;m<x.length-1;m++)for(let g=0;g<4;g++){let y=i.length/3,w=x[m],_=x[m+1],S=(g+1)%4;for(let[b,P]of[[w.p[g],w.a],[w.p[S],w.a],[_.p[S],_.a],[_.p[g],_.a]])i.push(h+b[0],p,d+b[1]),r.push(1,1,1,P);a.push(y,y+2,y+1,y,y+3,y+2)}}let l=new st;l.setAttribute("position",new Le(i,3)),l.setAttribute("color",new Le(r,4)),l.setIndex(a),l.computeVertexNormals();let c=new ft(l,LS());return c.userData.nonPhysical=!0,c.renderOrder=1,c.name="contact-shadow",s.add(c),c}function Rc(s){s.updateMatrixWorld(!0);let e=new Map,t=[],n=s.matrixWorld.clone().invert();s.traverse(i=>{if(!i.isMesh||i.userData.dynamic||i.material.transparent||i.isInstancedMesh)return;let r=i.parent;for(;r&&r!==s;){if(r.userData.dynamic)return;r=r.parent}let a=i.material.uuid,o=e.get(a)||{mat:i.material,geos:[]},l=i.geometry.clone().applyMatrix4(n.clone().multiply(i.matrixWorld));l.index&&(l=l.toNonIndexed());let c=i.material.userData.worldUV;if(c&&l.attributes.uv){let h=l.attributes.position,d=l.attributes.normal,u=l.attributes.uv;for(let f=0;f<h.count;f++){let p=Math.abs(d.getX(f)),x=Math.abs(d.getY(f)),m=Math.abs(d.getZ(f));x>p&&x>m?u.setXY(f,h.getX(f)/c,h.getZ(f)/c):p>m?u.setXY(f,h.getZ(f)/c,h.getY(f)/c):u.setXY(f,h.getX(f)/c,h.getY(f)/c)}u.needsUpdate=!0}o.geos.push(l),e.set(a,o),t.push(i)}),t.forEach(i=>i.removeFromParent());for(let{mat:i,geos:r}of e.values()){let a=Ag(r,!1);if(r.forEach(l=>l.dispose()),!a)continue;let o=new ft(a,i);o.castShadow=o.receiveShadow=!0,s.add(o)}}function NS(s,e,t,n,i,r){for(let a of[.35,1.05])E(s,e,t+a,n-r/2,i,.035,.035,"metal"),E(s,e,t+a,n+r/2,i,.035,.035,"metal"),E(s,e-i/2,t+a,n,.035,.035,r,"metal"),E(s,e+i/2,t+a,n,.035,.035,r,"metal");for(let a=e-i/2;a<=e+i/2;a+=2)E(s,a,t+.55,n-r/2,.035,1.1,.035,"metal"),E(s,a,t+.55,n+r/2,.035,1.1,.035,"metal")}function Rg(s,e,t,n,i,r,a){for(let o=0;o<i;o++)for(let l=0;l<r;l++){let c=e+o*2.35,h=n+l*3.35,d=vt(s,"photovoltaic-panel",c,t,h);d.rotation.x=.09,E(d,0,0,0,2.1,.075,2.9,"metal",.03),E(d,0,.047,0,1.99,.015,2.8,"solar");for(let u=-.66;u<1;u+=.66)E(d,u,.06,0,.015,.01,2.8,"metal");for(let u=-1.15;u<1.4;u+=.46)E(d,0,.06,u,2,.01,.014,"metal");for(let u of[-.8,.8])for(let f of[-1,1]){let p=t-Math.sin(.09)*f-.0375*Math.cos(.09),x=h+Math.cos(.09)*f-.0375*Math.sin(.09);E(s,c+u,(a+p)/2,x,.055,p-a,.055,"metal"),E(s,c+u,a,x,.28,.08,.28,"dark")}}}function US(s,e,t){E(s,e,2.3,t+.3,6.6,4.6,.4,"ivory",.08),E(s,e,2.15,t+.52,5.8,4.1,.05,"dark");for(let n=.4;n<4.2;n+=.32)E(s,e,n,t+.59,5.65,.025,.03,"metal");for(let n of[-1,1])E(s,e+n*2.98,2.1,t+.66,.34,4.05,.32,"rubber",.05);E(s,e,4.32,t+.66,6.3,.36,.32,"rubber",.05),E(s,e,.36,t+.86,2.3,.05,1.1,"metal",.012);for(let n=-1;n<=1.01;n+=.4)E(s,e+n,.392,t+.86,.025,.012,1,"dark");E(s,e,.37,t+1.43,2.3,.06,.08,"amber");for(let n of[-1,1])E(s,e+n*1.19,.37,t+.86,.06,.07,1.12,"amber");E(s,e,4.9,t+1.8,7.6,.15,3,"dark",.06),E(s,e,5.02,t+3.27,7.7,.4,.08,"metal",.02);for(let n of[-1,1])E(s,e+n*3.82,5.02,t+1.8,.08,.4,3,"metal",.02),Vt(s,[[e+n*3.4,6.9,t+.42],[e+n*3.4,5.06,t+3.15]],.03,"metal",!1),E(s,e+n*3.4,6.9,t+.36,.22,.22,.08,"dark");for(let n of[-2,0,2])E(s,e+n,4.81,t+2,.9,.03,.18,"lamp",.01);for(let n of[-3.2,3.2]){We(s,e+n,.7,t+1,.085,1.4,"amber"),E(s,e+n,.5,t+1,.21,.12,.21,"dark");for(let i of[.9,1.2])We(s,e+n,i,t+1,.088,.08,"black",14)}for(let n of[-2.45,2.45])E(s,e+n,.56,t+.68,.3,.8,.16,"rubber",.025)}function FS(s,e,t,n){for(let[i,r,a]of[[e,!0,t/2],[e,!0,-t/2],[t,!1,e/2],[t,!1,-e/2]]){for(let o=-i/2;o<=i/2+.01;o+=2.5){let l=r?o:a,c=r?a:o;E(s,l,n+.12,c,.03,.24,.03,"metal")}E(s,r?0:a,n+.24,r?a:0,r?i:.025,.025,r?.025:i,"metal")}}function OS(s){let e=vt(s,"building/research-center",-36,0,25);E(e,0,.18,0,44,.36,27,"stone"),Rr(e,[[0,0,41,25,.37]],2.2);for(let n=0;n<4;n++){let i=1.1+n*3.75;E(e,0,i-.12,0,41,.42,25,"ivory"),E(e,0,i+1.5,0,39.6,2.82,23.6,"glass"),E(e,0,i+3.18,0,39.7,.66,23.7,"dark");for(let a of[-11.87,11.87])E(e,0,i+.95,a,39.6,.05,.07,"metal");for(let a=-18.75;a<=18.8;a+=1.5)for(let o of[-11.86,11.86])E(e,a,i+1.5,o,.06,2.82,.12,"metal");for(let a=-10.5;a<=10.6;a+=1.5)for(let o of[-19.86,19.86])E(e,o,i+1.5,a,.12,2.82,.06,"metal");let r=n<2?[[-20,.2],[9.8,20]]:[[-20,20]];for(let[a,o]of r){E(e,(a+o)/2,i+2.98,12.3,o-a,.07,.9,"metal");for(let l=a+.6;l<o;l+=3)E(e,l,i+2.94,12.3,.05,.12,.9,"dark")}for(let a=-17.6;a<=17.6;a+=1.5)Math.abs(Math.round(a*10)+n*13)%5<2&&(n>1||a<0||a>10)&&E(e,a+.75,i+1.5,11.83,1.36,2.5,.015,"windowLight");for(let a=-10.2;a<10.5;a+=1.2)E(e,20.08,i+1.5,a,.42,2.82,.07,"copper"),E(e,-20.08,i+1.5,a,.42,2.82,.07,"copper"),Math.abs(Math.round(a*10)+n*3)%6<3&&E(e,19.8,i+1.5,a+.6,.02,2.5,1.1,"windowLight");for(let a=-18;a<=18;a+=6)E(e,a,i+1.5,-11.95,1.1,2.82,.12,"ivory")}E(e,0,16.2,0,41,.4,25,"ivory"),E(e,0,16.44,0,40.5,.08,24.5,"roof");for(let n of[-12.375,12.375])E(e,0,16.95,n,41,1.1,.25,"ivory"),E(e,0,17.52,n,41.1,.05,.36,"metal");for(let n of[-20.375,20.375])E(e,n,16.95,0,.25,1.1,25,"ivory"),E(e,n,17.52,0,.36,.05,25.1,"metal");E(e,-16.5,18,-3,5,3.2,4.5,"ivory"),E(e,-16.5,19.65,-3,5.3,.12,4.8,"metal"),E(e,-16.5,17.5,-.73,1,2.1,.05,"dark"),E(e,-16.5,16.62,-.3,1.4,.3,.9,"concrete");for(let n=0;n<6;n++)E(e,-18.5+n*.07,16.5+n*.001,-3,.9,.02,.3,"metal");for(let[n,i]of[[-19.4,-11.4],[19.4,-11.4],[-19.4,11.4],[19.4,11.4],[0,-11.4],[0,11.4]])We(e,n,16.5,i,.12,.08,"dark",10);E(e,11,16.55,6,12,.16,7,"paving"),NS(e,11,16.55,6,13,8);for(let n=6;n<17;n+=2.2)E(e,n,16.85,9,1.9,.6,.8,"stone",.06),E(e,n,17.2,9,1.7,.3,.65,"hedge",.1);for(let n of[-15,-10])E(e,n,16.6,6.5,4.5,.25,6,"stone"),E(e,n,16.75,6.5,4.25,.1,5.75,"grass");E(e,5,3.7,12.3,9.4,7.3,1,"copper",.12),E(e,5,3.4,12.88,8.4,6.4,.15,"glass");for(let n=2;n<=8;n+=1.5)E(e,n,2,13.03,.05,3.8,.08,"metal");E(e,5,3.94,13.04,8.4,.07,.09,"metal");for(let n of[4.7,5.3])Vt(e,[[n,1.1,13.12],[n,1.1,13.22],[n,2.1,13.22],[n,2.1,13.12]],.025,"copper",!1);E(e,5,1.35,13.045,8.35,.045,.01,"ivory"),E(e,5,4.8,15.2,13,.26,6,"ivory",.12),E(e,5,4.63,15.1,11.5,.035,4.8,"copper");for(let n of[-.5,10.5])We(e,n,2.35,17,.065,4.7,"metal");for(let n=0;n<3;n++)E(e,5,.09+n*.12,16.5-n*.7,14,.15,6-n*1.4,"stone",.035);for(let n=0;n<3;n++)E(e,5,.171+n*.12,19.43-n*1.4,13.8,.012,.1,"copper");let t=E(e,13,.21,18.05,1.8,.1,5.9,"stone");t.rotation.x=Math.atan(.29/5.9),E(e,12.5,.35,14.8,2.8,.11,1.4,"stone",.025);for(let n of[12.15,13.85]){Vt(e,[[n,1.31,15.1],[n,1.02,21]],.025,"metal",!1);for(let i of[15.1,18.05,21])We(e,n,.565+(21-i)*.29/5.9,i,.022,.9,"metal",12)}FS(e,40.75,24.75,17.55),E(e,12,16.75,-5,8.4,.62,5.4,"ivory",.05),E(e,12,17.09,-5,8.6,.06,5.6,"metal",.02);for(let n of[-1,1]){let i=E(e,12,17.55,-5+n*1.32,8,.04,2.75,"roofGlass");i.rotation.x=n*.42}E(e,12,18.12,-5,8.1,.1,.12,"metal",.02);for(let n=8.4;n<=15.7;n+=1.2)for(let i of[-1,1]){let r=E(e,n,17.58,-5+i*1.32,.05,.06,2.8,"metal");r.rotation.x=i*.42}for(let n of[-4,-1])E(e,n,16.62,1.2,1.5,.24,1.5,"dark",.04),We(e,n,17.05,1.2,.5,.65,"metal",20),We(e,n,17.42,1.2,.56,.08,"dark",20),We(e,n,17.62,1.2,.16,.32,"metal",12),We(e,n,17.86,1.2,.42,.12,"metal",20,.08);E(e,-6,16.86,-4.5,16,.07,.46,"metal");for(let n of[-1,1])E(e,-6,16.93,-4.5+n*.22,16,.1,.025,"metal");for(let n=-13.5;n<=1.6;n+=2.5)E(e,n,16.63,-4.5,.12,.38,.12,"dark"),E(e,n,16.5,-4.5,.5,.06,.5,"rubber",.02);return Gt(e,"\u6765\u9716\u667A\u9020\u56ED  \u7814\u53D1\u4E2D\u5FC3",-8,16.95,12.52,9,.72,"#2f4a42"),Gt(e,"1#",-18.4,2.3,12.9,.9,.6,"#2f4a42","#e9e4d6"),e}function Pg(s,e,t,n,i,r,a,o){let l=vt(s,e,t,0,n);E(l,0,.17,0,i+2,.34,r+2,"stone",.1),Rr(l,[[0,0,i+.3,r+.3,.35]],2.6),E(l,0,a/2,0,i,a,r,"concrete",.18),E(l,0,1,0,i+.12,1.8,r+.12,"dark"),E(l,0,a-1.55,r/2+.035,i-.5,1.7,.08,"glassLight"),E(l,0,a-1.55,-r/2-.035,i-.5,1.7,.08,"glass");for(let _=-i/2+.25;_<i/2;_+=.78)E(l,_,a/2+.9,r/2+.13,.09,a-1.6,.28,o===2?"metal":"terra"),E(l,_,a/2+.9,-r/2-.13,.09,a-1.6,.28,"metal");for(let _=-r/2;_<=r/2;_+=.8)E(l,i/2+.12,a/2,_,.28,a-.3,.09,o===2?"metal":"terra"),E(l,-i/2-.12,a/2,_,.28,a-.3,.09,"metal");E(l,0,a+.08,0,i+1,.25,r+1,"ivory",.1);let c=a+.24;E(l,0,a+.21,0,i-.4,.06,r-.4,"roof");for(let _=-i/2+1;_<i/2;_+=1.8)E(l,_,c+.022,0,.035,.045,r-.6,"metal");for(let _ of[-r/2+.04,r/2-.04])E(l,0,a+.31,_,i+.4,.18,.18,"ivory",.035);for(let _ of[-i/2+.04,i/2-.04])E(l,_,a+.31,0,.18,.18,r,"ivory",.035);let h=o===2?[[-4,-7,8],[4,-7,8],[-4,6,8],[4,6,8]]:[[-14,8.5,5],[0,8.5,5],[14,8.5,5]];for(let[_,S,b]of h){let P=vt(l,"rooflight",_,c,S);E(P,0,.14,0,2.8,.28,b+.4,"dark",.035),E(P,0,.302,0,2.55,.045,b+.15,"roofGlass",.015);for(let M of[-1,1])E(P,M*1.34,.33,0,.09,.065,b+.3,"metal");for(let M=-b/2;M<=b/2;M+=b/4)E(P,0,.335,M,2.7,.065,.075,"metal")}if(o===2)for(let _ of[-21,10])Rg(l,_,c+.34,-10,6,4,c);else Rg(l,-18,c+.34,-10,15,2,c);for(let _=-i/2+6;_<i/2-3;_+=10)o===2&&_>17||(US(l,_,r/2),Gt(l,`${o===2?"A":"B"}${String(Math.round((_+i/2-6)/10)+1).padStart(2,"0")}`,_,4.55,r/2+.535,1.3,.28,"#496155"));for(let _ of[-1,1]){E(l,0,a-.2,_*(r/2+.6),i+.6,.2,.22,"metal",.04);for(let S=-i/2+1.1;S<i/2;S+=10){let b=_*(r/2+.56);We(l,S,a/2+.1,b,.085,a-.6,"metal",10);for(let P=1.6;P<a-.5;P+=2.4)E(l,S,P,b-_*.1,.24,.05,.2,"dark");E(l,S,.48,b+_*.12,.2,.12,.32,"metal",.03)}}for(let _ of[-1,1])for(let S of[-1,1])E(l,_*(i/2+.17),a/2+.05,S*(r/2+.17),.38,a-.1,.38,"metal",.02);let d=-r/2+6.5,u=-i/2-.3;E(l,u,1.45,d,.3,2.7,1.5,"ivory",.03),E(l,u-.1,1.35,d,.12,2.35,1.15,"dark",.02),E(l,u-.2,1.3,d+.4,.08,.05,.22,"metal"),E(l,u-.6,2.95,d,1.2,.1,1.9,"dark",.03),E(l,u-.12,3.25,d,.14,.2,.26,"lamp",.02);for(let _ of[-1,1])Vt(l,[[u-.05,3.7,d+_*.8],[u-1.15,3,d+_*.8]],.018,"metal",!1);for(let _=0;_<3;_++)E(l,u-.6-_*.3,.38-_*.12,d,.32,.12,1.6,"stone",.02);let f=-r/2+3,p=-i/2-.72;for(let _ of[-1,1])E(l,p,a/2+.7,f+_*.24,.06,a+1.2,.06,"metal");for(let _=.6;_<a+1;_+=.3)E(l,p,_,f,.035,.035,.48,"metal");for(let _=2.6;_<a+1.1;_+=.9)gn(l,p-.32,_,f,.36,.022,"metal");for(let _ of[-.9,0,.9])E(l,p-.32-Math.cos(_)*.36,(a+3.7)/2,f+Math.sin(_)*.36,.04,a-1.5,.04,"metal");let x=a+.24,m=-i/2+1.7,g=o===2?11:11.6,y=o===2?12.5:12.9;E(l,m,x+.06,-r/2+3,1.6,.12,1.6,"dark",.03),E(l,m,x+.15,-r/2+3,1.45,.06,1.45,"metal",.02),E(l,(m+i/2-3)/2,x+.035,g,i/2-3-m,.05,.7,"paving"),E(l,m,x+.035,(-r/2+3.8+g)/2,.7,.05,g+r/2-3.8,"paving");let w=(o===2?[-20,-12,0,12,20]:[-18,-10.5,-4,4,10.5,18]).map(_=>[_,y]);for(let[_,S]of w){E(l,_,x+.12,S,1.1,.24,1.1,"dark",.04),We(l,_,x+.6,S,.3,.75,"metal",16),We(l,_,x+1.14,S,.42,.36,"metal",20,.2),We(l,_,x+1.38,S,.18,.12,"metal",16,.04);for(let b=0;b<12;b++){let P=E(l,_+Math.cos(b*Math.PI/6)*.36,x+1.13,S+Math.sin(b*Math.PI/6)*.36,.025,.34,.1,"metal");P.rotation.y=-b*Math.PI/6+.35}}if(Gt(l,`${o===2?"2#  \u751F\u4EA7\u8F66\u95F4 A":"3#  \u751F\u4EA7\u8F66\u95F4 B"}`,-i/4,a-3.35,r/2+.3,i*.3,.9,"#29413a"),o===3){E(l,-3.5,11.88,1,23,.22,6.2,"roof",.06);for(let _ of[-2.15,4.15])E(l,-3.5,12.002,_,23.2,.025,.09,"amber");for(let _ of[-15.1,8.1])E(l,_,12.002,1,.09,.025,6.4,"amber")}return l}function BS(s){let e=vt(s,"building/energy-center",35,0,18);E(e,0,.2,-1.6,32,.4,23.8,"stone",.15),E(e,0,.24,-3,30,.24,20,"concrete",.04),Rr(e,[[0,-3,30.4,20.4,.41]],2.2);for(let t of[-13,7])E(e,0,3.5,t,30,7,.3,"concrete",.06),E(e,0,1,t+(t>0?.18:-.18),30.15,1.6,.12,"dark");for(let t of[-15,15])E(e,t,3.5,-3,.3,7,20,"concrete",.06),E(e,t+Math.sign(t)*.18,1,-3,.12,1.6,20,"dark");for(let t of[-9,7]){let n=vt(e,"plant/heat-exchanger-"+t,t,.4,-4);E(n,0,.16,0,5.4,.3,5.2,"dark",.09);for(let i=-1.75;i<=1.75;i+=.14)E(n,0,1.65,i,2.8,2.65,.065,"metal",.025);for(let i of[-1.9,1.9]){E(n,0,1.65,i,3.3,3.05,.2,"pump",.1);for(let r of[-1.4,1.4])We(n,r,.26,i,.12,.34,"metal",6),Vt(n,[[r,.5,-2.05],[r,.5,2.05]],.07,"metal"),Vt(n,[[r,2.8,-2.05],[r,2.8,2.05]],.07,"metal")}for(let i of[-.85,.85])for(let r of[.75,2.45]){let a=We(n,i,r,2.16,.25,.36,"metal",24);a.rotation.x=Math.PI/2,gn(n,i,r,2.35,.28,.05,"metal",[0,0,0])}Vt(e,[[t-.85,2.85,-1.65],[t-.85,3.8,-.9],[t-.85,4.7,0],[t-.85,4.7,6.3]],.14,"pipe"),Vt(e,[[t+.85,1.15,-1.65],[t+.85,1.15,-.4],[t+.85,4.35,.4],[t+.85,4.35,6.3]],.14,"copper"),E(e,t,.382,-4,7,.015,7,"paving");for(let i of[-7.6,-.4])E(e,t,.393,i,7.2,.013,.07,"amber")}for(let t of[-12,0,12])for(let n of[-10,4])E(e,t,3.4,n,.22,6.4,.24,"dark");for(let t of[-10,4])E(e,0,6.52,t,29,.25,.2,"dark");for(let t of[-12,0,12])E(e,t,6.5,-3,.2,.25,19,"dark");for(let[t,n]of[[4.7,"pipe"],[4.35,"copper"]])Vt(e,[[-12,t,6.3],[-8,t,6.3],[8,t,6.3],[12,t,6.3],[13,t,5.5],[13,t,-10]],.18,n);E(e,0,.38,-3,.62,.05,17,"dark");for(let t=-11;t<6;t+=.2)E(e,0,.417,t,.58,.02,.03,"metal");for(let t of[-4,3]){let n=We(e,t,1.3,-10.3,.77,3.2,"metal",40);n.rotation.z=Math.PI/2;for(let i of[-1.1,1.1])gn(e,t+i,1.3,-10.3,.79,.045,"metal",[0,Math.PI/2,0]),E(e,t+i,.52,-10.3,.28,.5,1.5,"dark",.04)}for(let t=-14;t<=14;t+=7)E(e,t,.09,12,.75,.18,.8,"stone",.04),E(e,t,3.9,12,.3,7.6,.4,"copper"),E(e,t,7.5,6,.22,.32,13,"dark");E(e,0,7.7,1,31.8,.32,30,"ivory",.16);for(let t=-14;t<15;t+=.65)E(e,t,7.91,1,.035,.06,28.5,"metal");for(let t=-10;t<=10;t+=10){E(e,t,8.12,-3,7.5,.4,8,"dark",.12),We(e,t,8.65,-3,2.1,1.1,"metal",40),We(e,t,9.24,-3,1.85,.12,"black",40),gn(e,t,9.34,-3,1.75,.055,"metal"),gn(e,t,9.34,-3,1.35,.035,"metal"),gn(e,t,9.34,-3,.85,.035,"metal");for(let n=0;n<16;n++){let i=n*Math.PI/8;E(e,t,9.35,-3,.035,.03,3.45,"metal",0,i)}}for(let t of[-11,11])We(e,t,3.2,8.8,1.35,5.8,"metal",40),gn(e,t,1.3,8.8,1.36,.06),gn(e,t,4.9,8.8,1.36,.06),Vt(e,[[t,5.8,8.8],[t,6.5,8.8],[t+2,6.5,8.8],[t+2,1,8.8]],.13,"pipe");Gt(e,"4#  \u80FD\u6E90\u4E2D\u5FC3",0,5.4,7.18,7,1.1,"#a19370");for(let t=-13;t<=13;t+=1.1)E(e,t,3,7.25,.3,3.2,.12,"metal");for(let t=-12;t<7;t+=2)E(e,15.175,4.15,t,.018,5.5,.015,"metal");return E(e,15.2,1.63,2,.18,3.1,2.45,"dark",.045),E(e,15.31,1.63,2,.025,2.92,2.25,"metal",.02),E(e,15.37,1.4,2.77,.07,.32,.05,"dark",.015),Gt(e,"4#",15.18,5,2,1.4,1,"#829081",null,Math.PI/2),e}function Ig(s){let e=[OS(s),Pg(s,"building/production-a",-32,-24,52,32,10.2,2),Pg(s,"building/production-b",29,-30,44,28,11.6,3),BS(s)],t=vt(s,"building/gatehouse",13,0,58.8);E(t,0,.15,0,7,.3,4.2,"stone",.1),E(t,0,1.7,0,6,3.2,3.6,"glass",.25),Rr(t,[[0,0,6.2,3.8,.31]],1.1),E(t,0,.55,0,6.2,.8,3.8,"terra",.12),E(t,0,3.45,0,8,.25,4.6,"ivory",.1);for(let n of[-2.8,0,2.8])for(let i of[-1.83,1.83])E(t,n,1.95,i,.07,2.6,.08,"copper");E(t,-3.03,1.55,0,.08,2.75,1.2,"metal",.025),E(t,-3.08,1.72,0,.03,2.24,1.04,"glass"),E(t,-3.12,1.3,.38,.06,.25,.04,"copper"),E(t,-13,4.4,-2,20,.35,5,"dark",.14);for(let n of[-22,-4])E(t,n,.14,-2,.65,.28,.65,"stone",.05),E(t,n,2.2,-2,.22,4.4,.22,"copper");return Gt(t,"\u6765\u9716\u667A\u9020\u56ED",-13,4.38,.53,6,.55,"#f1e4c2"),e.push(t),e}function zS(){let s=new be.IcosahedronGeometry(1,1),e=s.attributes.position,t=new be.Vector3,n=Array.from({length:5},()=>[new be.Vector3(ct()-.5,ct()*.6-.1,ct()-.5).normalize(),.14+ct()*.12]);for(let r=0;r<e.count;r++){t.fromBufferAttribute(e,r).normalize();let a=.9;for(let[o,l]of n)a+=l*Math.max(0,t.dot(o))**3;a+=Math.sin(t.x*7.1+t.z*3.3)*Math.cos(t.y*5.7)*.05,t.y<-.4&&(a*=.84),t.multiplyScalar(a),e.setXYZ(r,t.x,t.y,t.z)}s.computeVertexNormals();let i=s.attributes.normal;for(let r=0;r<i.count;r++){t.fromBufferAttribute(e,r).normalize();let a=new be.Vector3().fromBufferAttribute(i,r);a.lerp(t,.55).normalize(),i.setXYZ(r,a.x,a.y,a.z)}return s}function Dg(s){let e=vt(s,"site/plinth");e.userData.layer="ground",E(e,0,-.15,0,164,.16,124,"stone",.12),E(e,0,-.03,0,162,.16,122,"paving",.35);let t=vt(s,"site/district");t.userData.layer="ground",E(t,0,-.3,0,1100,.35,1100,"districtRoof");for(let R of[-96,96])E(t,R,-.09,0,14,.06,620,"asphalt");for(let R of[-76,76,-190,192])E(t,0,-.089,R,620,.06,14,"asphalt");E(t,0,-.065,68,8,.1,16,"asphalt");for(let R of[-85.2,85.2])E(t,R,-.025,0,6,.15,130,"paving",.08);for(let R of[-65.7,65.7])for(let[U,k]of[[-88,-5],[5,88]])E(t,(U+k)/2,-.025,R,k-U,.15,6,"paving",.08);for(let R=-300;R<=300;R+=8){for(let U of[-76,76,-190,192])if(Math.abs(Math.abs(R)-96)>14)for(let k of[-1,1])E(t,R,-.052,U+k*.23,4,.018,.12,"white");for(let U of[-96,96])if(![-190,-76,76,192].some(k=>Math.abs(R-k)<14))for(let k of[-1,1])E(t,U+k*.23,-.052,R,.12,.018,4,"white")}for(let R of[-106.5,-85.5,85.5,106.5])for(let U of[-76,76])for(let k=-5;k<=5;k++)E(t,R,-.048,U+k*.95,3.2,.02,.5,"white");for(let R of[-96,96])for(let U of[-86.5,-65.5,65.5,86.5])for(let k=-5;k<=5;k++)E(t,R+k*.95,-.048,U,.5,.02,3.2,"white");for(let R of[-88.5,88.5,-103.5,103.5])for(let[U,k]of[[-178,-90],[-62,62],[90,178]])E(t,R,.02,(U+k)/2,.28,.24,k-U,"stone",.04);for(let R of[-83.5,-68.5,68.5,83.5])for(let[U,k]of[[-250,-110],[-82,-5],[5,82],[110,250]])E(t,(U+k)/2,.02,R,k-U,.24,.28,"stone",.04);let n=[];function i(R,U,k,z,H){n.push([R,U,k+.3,z+.3,.18]);let ie=vt(t,"district/industrial-building",R,0,U);E(ie,0,.05,0,k+6,.24,z+6,"paving",.08),E(ie,0,H/2,0,k,H,z,"districtWall");for(let de of[-1,1]){for(let ve of[2.9,6.7])ve<H-1&&E(ie,0,ve,de*(z/2+.025),k-.7,1.55,.055,"districtGlass");for(let ve=-k/2+1;ve<k/2;ve+=3.5)E(ie,ve,H/2,de*(z/2+.1),.15,H,.26,"districtWall");E(ie,de*(k/2-.13),H+.36,0,.26,.6,z,"districtWall"),E(ie,0,H+.36,de*(z/2-.13),k,.6,.26,"districtWall")}E(ie,0,H+.05,0,k-.6,.2,z-.6,"districtRoof");for(let de=-k/2+5;de<k/2-3;de+=10)E(ie,de,H+.35,0,3.2,.5,z*.64,"districtGlass"),E(ie,de,H+.64,0,3.1,.08,z*.64,"metal");for(let de of[-k*.27,k*.27])E(ie,de,H+.55,-z*.28,4,.7,3,"districtWall"),E(ie,de,H+.94,-z*.28,3.6,.08,2.6,"dark");for(let de=-k/2+7;de<k/2;de+=12)E(ie,de,2.1,z/2+.04,4.4,4.2,.12,"districtGlass"),E(ie,de,4.4,z/2+1.7,6,.16,3.4,"districtWall");for(let de of[-1,1]){E(ie,0,H+.68,de*(z/2-.13),k+.1,.05,.36,"metal"),E(ie,de*(k/2-.13),H+.68,0,.36,.05,z+.1,"metal");for(let ve=-k/2+1.2;ve<k/2;ve+=12)We(ie,ve,H/2,de*(z/2+.32),.08,H,"metal",8)}for(let de=-k/2+3;de<k/2-2;de+=7)for(let ve of[z*.36])We(ie,de,H+.5,ve,.28,.7,"metal",10),We(ie,de,H+.92,ve,.4,.16,"metal",10,.12)}for(let R of[[-145,-31,53,60,11],[148,-28,54,64,12],[-48,-131,61,60,13],[37,-132,64,61,10],[145,-133,55,58,14],[-145,-132,52,60,12],[-142,129,52,63,8],[145,130,56,61,10],[-45,-244,66,61,18],[42,-246,65,65,15]])i(...R);Rr(t,n,3.2,.38);let r=(R,U,k,z,H,ie)=>E(R,U,ie,k,z,.008,H,"asphaltWorn");for(let R of[-96,96])for(let[U,k]of[[-300,-199],[-181,-85],[-67,67],[85,183],[201,300]])for(let z of[-6.05,-4.45,-2.55,-.95,.95,2.55,4.45,6.05])r(t,R+z,(U+k)/2,.6,k-U,-.056);for(let R of[-76,76,-190,192])for(let[U,k]of[[-300,-105],[-87,87],[105,300]])for(let z of[-6.05,-4.45,-2.55,-.95,.95,2.55,4.45,6.05])r(t,(U+k)/2,R+z,k-U,.6,-.056);E(t,0,0,130,156,.24,73,"grass",.3),E(t,0,.14,130,5,.12,73,"paving",.06),E(t,0,.14,115,156,.12,4,"paving",.06),E(t,42,.14,142,51,.2,34,"stone",.15),E(t,42,.25,142,49,.03,32,"water",.1);for(let R of[124.7,159.3])E(t,42,.32,R,52,.18,.6,"paving");for(let R of[16.2,67.8])E(t,R,.32,142,.6,.18,35,"paving");for(let R=126;R<=158;R+=8)E(t,10,.5,R,4,.38,.85,"dark",.04),E(t,10,.74,R,4.1,.09,.9,"copper",.02);let a=vt(s,"site/mobility");a.userData.layer="ground";for(let R of[-73,73])E(a,R,.08,0,8,.07,114,"asphalt",.3);E(a,0,.081,-53,150,.07,8,"asphalt",.2),E(a,0,.081,51,150,.07,6,"asphalt",.2),E(a,0,.08,1,137,.07,6.8,"asphalt"),E(a,0,.08,0,6,.07,102,"asphalt"),E(a,0,.08,55.5,8,.07,13,"asphalt");for(let R=-48;R<=48;R+=5)for(let U of[-73,73])E(a,U,.128,R,.13,.014,2.25,"white");for(let R of[-73,73])for(let[U,k]of[[-48,-4],[6,48]])for(let z of[-2.8,-1.2,1.2,2.8])r(a,R+z,(U+k)/2,.55,k-U,.119);for(let[R,U]of[[-53,[-2.8,-1.2,1.2,2.8]],[1,[-2.45,-.95,.95,2.45]],[51,[-2.15,-.85,.85,2.15]]])for(let[k,z]of[[-68,-4],[4,68]])for(let H of U)r(a,(k+z)/2,R+H,z-k,.5,.119);for(let[R,U]of[[-48,-5],[7,48]])for(let k of[-2.15,-.85,.85,2.15])r(a,k,(R+U)/2,.5,U-R,.119);for(let R=-67;R<=67;R+=5)for(let U of[-53,51,1])Math.abs(R)<6||U===51&&Math.abs(R+31)<5||E(a,R,.13,U,2.25,.014,.13,"white");for(let R=-46;R<47;R+=5)R>-7&&R<10||E(a,0,.13,R,.13,.014,2.25,"white");for(let R of[-68.65,68.65])for(let[U,k]of[[-48.5,-3.1],[5.1,48.5]])E(a,R,.16,(U+k)/2,.28,.23,k-U,"ivory",.06);for(let[R,U]of[[-68.5,-3.5],[3.5,68.5]])E(a,(R+U)/2,.16,-48.65,U-R,.23,.28,"ivory",.06);for(let[R,U]of[[-68.5,-56.5],[-39.5,-35],[-27,-5],[5,15.5],[58,68.5]])E(a,(R+U)/2,.16,47.65,U-R,.23,.28,"ivory",.06);for(let R of[-3.35,3.35])for(let[U,k]of[[-48,-3.4],[8,47]])E(a,R,.16,(U+k)/2,.2,.23,k-U,"ivory",.045);for(let R of[-.9,6.6])for(let U=-3;U<=3;U++)E(a,U*.8,.14,R,.5,.016,1.8,"white");for(let R of[-66.5,66.5])for(let U=-3;U<=3;U++)E(a,R,.14,1+U*.95,2,.016,.55,"white");for(let R=-3;R<=3;R++)E(a,-31,.14,51+R*.78,4,.016,.44,"white");E(a,0,.17,58.2,.55,.24,7.5,"stone",.1),E(a,-2,.135,56.4,2.7,.015,.16,"white");for(let R of[-2,2]){let U=vt(a,"gate-lane-arrow",R,.14,60.4);U.rotation.y=R<0?Math.PI:0,E(U,0,0,0,.13,.014,1.1,"white");for(let k of[-1,1])E(U,k*.19,0,.38,.12,.014,.6,"white",0,-k*.7)}for(let[R,U,k,z]of[[-14,43,14,7],[-62,22,8,36],[60,22,9,38],[-62,-25,8,38],[59,-32,8,29],[-10,21,5.5,29],[16,23,1.6,23]])E(e,R,.14,U,k,.17,z,"grass",.3);let o=vt(s,"site/garden");o.userData.layer="landscape",E(o,10.8,.09,23,11.6,.05,31,"paving",.12),E(o,10.8,.19,24,5.2,.15,17,"stone",.12),E(o,10.8,.273,24,4.72,.016,16.52,"water",.08);for(let R of[8.32,13.28])E(o,R,.29,24,.24,.1,17,"ivory",.04);for(let R of[15.62,32.38])E(o,10.8,.29,R,5.2,.1,.24,"ivory",.04);E(o,10.8,.29,12,4.2,.32,2,"stone");for(let[R,U]of[[9.3,11],[10.8,12.5],[12.3,11]]){We(o,R,.45+U/2,12,.05,U,"metal",12,.035),We(o,R,.5,12,.12,.12,"metal",12);let k=new be.Mesh(new be.SphereGeometry(.07,10,6),ht.metal);k.position.set(R,.45+U+.06,12),o.add(k)}for(let R=16;R<=31;R+=5)E(o,16,.36,R,1.5,.45,3.8,"stone",.1),E(o,16,.69,R,1.28,.25,3.5,"hedge",.12);E(e,-31,.09,43.1,16,.05,9,"paving",.06),E(e,-23,.09,46.6,2,.05,1.2,"paving",.04),E(a,-48,.08,44.5,16.8,.07,7,"asphalt",.1),E(a,36.75,.08,44.5,42.5,.07,7,"asphalt",.1);for(let R of[-48,36.75]){let U=R<0?16.8:42.5;E(a,R,.125,41.65,U,.025,.18,"dark");for(let k=R-U/2+.15;k<R+U/2;k+=.25)E(a,k,.14,41.65,.07,.01,.15,"metal")}E(e,-42,.15,45.6,3.4,.22,3.8,"stone",.09),E(e,-42,.271,45.6,3.1,.025,3.5,"grass",.05);for(let[R,U]of[[-7,15],[-7,28],[-19,39.8],[10.8,35.8]]){E(o,R,.46,U,3.3,.23,.85,"dark",.07);for(let k=-4;k<=4;k++)E(o,R+k*.32,.62,U,.25,.08,.83,"copper",.025);for(let k of[-1.2,1.2])E(o,R+k,.27,U,.12,.52,.6,"dark",.02)}let l=vt(s,"site/trees");l.userData.layer="landscape";let c=Array.from({length:6},()=>[]),h=[],d=[];function u(R,U,k=4.8,z=1.6,H=!1){if(H){E(e,R,.064,U,1.15,.025,1.15,"bark");for(let ie of[-1,1])E(e,R+ie*.61,.082,U,.09,.065,1.3,"stone"),E(e,R,.082,U+ie*.61,1.13,.065,.09,"stone")}h.push({x:R,y:k*.36,z:U,h:k*.72});for(let ie=0;ie<6;ie++){let de=ie/6*Math.PI*2+ct()*.4;d.push({from:Ut(R,k*(.35+ct()*.2),U),to:Ut(R+Math.cos(de)*z*.72,k*(.72+ct()*.2),U+Math.sin(de)*z*.72)})}for(let ie=0;ie<14;ie++){let de=ct()*Math.PI*2,ve=Math.sqrt(ct())*z*.65,ze=k*.53+ct()*k*.33;c[Math.floor(ct()*6)].push({x:R+Math.cos(de)*ve,y:ze,z:U+Math.sin(de)*ve,sx:z*(.42+ct()*.38),sy:z*(.45+ct()*.55),sz:z*(.42+ct()*.38),r:ct()*6})}}for(let R=-55;R<=57;R+=6.3)for(let U of[-79,79])u(U+(ct()-.5)*.65,R,4.5+ct()*2,1.8,!0);for(let R=-72;R<=73;R+=7)for(let U of[-59,59])U>0&&Math.abs(R)<19||u(R,U,4.4+ct()*1.8,1.65,!0);for(let[R,U]of[[-61,10],[-61,20],[-61,31],[-17.5,43.5],[-9,43.5],[-10,10],[-10,33],[15.8,9],[15.8,37],[60,34],[60,24],[60,8],[59,-42],[59,-22],[-61,-35],[-61,-12]])u(R,U,4.4+ct()*1.5,1.5);for(let R=-174;R<=174;R+=15)for(let U of[-109,109])Math.abs(Math.abs(R)-76)<16||u(U,R,5.5+ct()*1.8,2.2);for(let R=-75;R<=75;R+=13)for(let U of[-88,88])u(R,U,5.5+ct()*1.5,2.1);for(let R of[-69,-48,-26])for(let U of[105,127,151,166])u(R+ct()*3,U,5.6+ct()*2,2.6);for(let R of[101,168])for(let U of[15,40,65])u(U,R,5.5,2.2);u(-42,44.8,5.2,1.9);for(let R=0;R<14;R++)c[1].push({x:-42+(ct()-.5)*2.2,y:.45,z:44.8+(ct()-.5)*4.2,sx:.3,sy:.26,sz:.3,r:ct()*6});for(let[R,U,k,z]of[[-50,39.8,10,1],[-17,40.3,6,1],[-59.2,22,1.2,30],[-12.2,22,1,22],[60,-32,1.2,20],[-61.5,-25,1.2,24]])for(let H=0;H<Math.max(k,z)*1.6;H++)c[H%2?0:3].push({x:R+(ct()-.5)*k,y:.42,z:U+(ct()-.5)*z,sx:.42,sy:.36,sz:.42,r:ct()*6});for(let[R,U,k,z]of[[-48,39.5,15,1],[-14,46,13,1],[61,21,1.2,30],[-61,21,1.2,30],[16,23,1,19]])for(let H=0;H<Math.max(k,z)*4;H++){let ie=R+(ct()-.5)*k,de=U+(ct()-.5)*z;c[2].push({x:ie,y:.35,z:de,sx:.36,sy:.3,sz:.38,r:ct()*6})}let f=new be.Object3D,p=document.createElement("canvas");p.width=p.height=256;let x=p.getContext("2d");for(let R=0;R<1250;R++){let U=ct()*Math.PI*2,k=Math.pow(ct(),.6)*116,z=128+Math.cos(U)*k,H=128+Math.sin(U)*k;x.save(),x.translate(z,H),x.rotate(ct()*6.28),x.fillStyle=["#5e7943","#71904e","#8a9e60","#496436","#93a568"][Math.floor(ct()*5)],x.beginPath(),x.ellipse(0,0,2+ct()*4,1.4+ct()*2,0,0,Math.PI*2),x.fill(),x.restore()}let m=new be.CanvasTexture(p);m.colorSpace=be.SRGBColorSpace,m.anisotropy=8;let g=new be.MeshStandardMaterial({name:"leaf-clusters",map:m,alphaTest:.45,side:be.DoubleSide,roughness:.96,metalness:0,color:"#aec195"}),y=c.flat(),w=new be.InstancedMesh(new be.PlaneGeometry(1,1),g,y.length*3),_=0;for(let R of y)for(let U=0;U<3;U++)f.position.set(R.x,R.y,R.z),f.scale.set(R.sx*2.2,R.sy*2.2,1),f.rotation.set((ct()-.5)*1.7,R.r+U*Math.PI/3,(ct()-.5)*.6),f.updateMatrix(),w.setMatrixAt(_++,f.matrix);w.castShadow=w.receiveShadow=!0,w.instanceMatrix.needsUpdate=!0,l.add(w);let S=zS(),b=new be.Color;for(let R=0;R<6;R++){let U=c[R],k=new be.InstancedMesh(S,ht["leaf"+R],U.length);for(let z=0;z<U.length;z++){let H=U[z];f.position.set(H.x,H.y,H.z),f.scale.set(H.sx*.2,H.sy*.24,H.sz*.2),f.rotation.set((ct()-.5)*.5,H.r,.15+(ct()-.5)*.4),f.updateMatrix(),k.setMatrixAt(z,f.matrix);let ie=.86+ct()*.2+Math.min(1,H.y/7)*.07;b.setRGB(ie*(.98+ct()*.06),ie,ie*(.94+ct()*.06)),k.setColorAt(z,b)}k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.castShadow=k.receiveShadow=!0,k.instanceMatrix.needsUpdate=!0,l.add(k)}let P=new be.InstancedMesh(new be.CylinderGeometry(.055,.14,1,7),ht.bark,h.length);h.forEach((R,U)=>{f.position.set(R.x,R.y,R.z),f.rotation.set(0,0,0),f.scale.set(1,R.h,1),f.updateMatrix(),P.setMatrixAt(U,f.matrix)}),P.castShadow=!0,l.add(P);let M=new be.InstancedMesh(new be.CylinderGeometry(.024,.062,1,7),ht.bark,d.length);d.forEach((R,U)=>{f.position.copy(R.from).lerp(R.to,.5);let k=R.to.clone().sub(R.from);f.quaternion.setFromUnitVectors(Ut(0,1,0),k.clone().normalize()),f.scale.set(1,k.length(),1),f.updateMatrix(),M.setMatrixAt(U,f.matrix)}),M.castShadow=!0,l.add(M);let A=vt(s,"site/boundary");A.userData.layer="landscape";for(let R=-60;R<=60;R+=3)for(let U of[-81,81])E(A,U,.6,R,.07,1.2,.07,"dark"),R<60&&(E(A,U,1.1,R+1.5,.04,.04,3,"dark"),E(A,U,.4,R+1.5,.035,.035,3,"metal"));for(let R=-80;R<80;R+=3)for(let U of[-61,61])U>0&&Math.abs(R)<18||(E(A,R,.6,U,.07,1.2,.07,"dark"),E(A,R+1.5,1.1,U,3,.04,.04,"dark"));let D=vt(s,"site/vehicles");D.userData.layer="landscape";function F(R,U,k,z=0){let H=vt(D,"electric-vehicle",R,.075,U);H.rotation.y=z,E(H,0,.59,0,1.8,.54,4.15,k,.22),E(H,0,1.04,-.18,1.55,.61,2.05,"glass",.25),E(H,0,1.36,-.23,1.46,.13,1.15,k,.06);for(let ie of[-.78,.78]){E(H,ie,1.05,-.15,.045,.54,.065,"dark",.025),E(H,ie,.78,-.25,.026,.035,2.35,"metal"),E(H,ie*1.17,1,.55,.18,.11,.24,k,.045);for(let de of[-.65,.32])E(H,ie*1.06,.86,de,.035,.027,.18,"metal",.01)}E(H,0,.6,2.104,.47,.13,.016,"dark",.02),E(H,0,.32,1.85,1.45,.08,.18,"dark",.04);for(let ie of[-.86,.86])for(let de of[-1.3,1.3]){let ve=We(H,ie,.38,de,.34,.16,"rubber",24);ve.rotation.z=Math.PI/2;let ze=We(H,ie*1.08,.38,de,.2,.025,"metal",16);ze.rotation.z=Math.PI/2}for(let ie of[-.57,.57])E(H,ie,.67,2.06,.4,.1,.05,"lamp",.035),E(H,ie,.68,-2.06,.42,.07,.035,"red",.015);return H}E(D,-46,.128,45,3.2,.012,5.7,"accessible");let G=Gt(D,"\u65E0\u969C\u788D",-46,.14,46.2,1.4,.45,"#f1f4f6");G.rotation.x=-Math.PI/2,E(e,-42,.16,44.8,3,.2,5.2,"stone"),E(e,-42,.27,44.8,2.7,.03,4.9,"grass");for(let[R,U]of[-54,-50,-46].entries()){for(let z of[-1,1])E(D,U+z*1.65,.13,45,.08,.012,5.8,"white");E(D,U,.13,42.1,3.3,.012,.08,"white"),E(D,U,.22,42.55,1.45,.2,.18,"rubber",.035);let k=Gt(D,String(R+1).padStart(2,"0"),U,.14,47.55,.65,.35,"#e6e5d3");k.rotation.x=-Math.PI/2,R<2&&F(U,44.7,R%2?"dark":"ivory")}for(let R=19;R<=54;R+=7){E(D,R,.13,44.9,3.1,.015,5.6,"parkingPaint",.04);for(let k of[-1,1])E(D,R+k*1.65,.145,44.9,.08,.012,5.8,"white");E(D,R,.145,42,3.3,.012,.08,"white"),E(D,R,.22,42.55,1.45,.2,.18,"rubber",.035);let U=Gt(D,"EV",R,.152,47.35,.75,.38,"#dce7cc");U.rotation.x=-Math.PI/2,R!==33&&R!==47&&F(R,44.8,["ivory","metal","paintBlue","dark"][(R-19)/7%4],Math.PI)}F(-75,25,"ivory"),F(75,-18,"dark",Math.PI);for(let[R,U,k,z]of[[-52,72,"ivory",Math.PI/2],[32,80,"paintBlue",-Math.PI/2],[78,72,"dark",Math.PI/2],[92,-21,"ivory",0],[100,30,"metal",Math.PI],[-92,19,"dark",Math.PI],[-100,-40,"ivory",0],[14,-72,"dark",-Math.PI/2]])F(R,U,k,z);let $=vt(t,"district/bus-stop",-30,0,86);for(let R of[-4.5,4.5])E($,R,1.6,0,.14,3.2,.14,"dark");E($,0,3.25,0,10,.18,3.2,"ivory",.1),E($,0,1.65,-1.15,9,2.7,.06,"districtGlass"),E($,0,.55,-.5,7,.12,.65,"copper",.03);for(let[R,U]of[[-52,-5.25],[-32,-5.25],[23,-12.5]]){let k=vt(D,"logistics-van",R,.085,U);E(k,0,1.24,-.4,1.95,1.72,3.1,"ivory",.1),E(k,0,.98,1.6,1.9,1.35,1.1,"ivory",.14),E(k,0,1.43,2.11,1.66,.55,.07,"glass",.055),E(k,0,.54,2.18,1.8,.15,.12,"dark",.04),E(k,0,.82,2.2,.72,.2,.02,"black",.02),E(k,0,.39,0,1.6,.17,4.2,"dark",.04);for(let z of[-1,1]){E(k,z*.961,1.38,1.57,.04,.52,.78,"glass",.04),E(k,z*1.075,1.43,1.87,.14,.2,.16,"dark",.025),E(k,z*.975,.99,1.52,.035,.045,.19,"metal"),E(k,z*.67,.93,2.2,.35,.17,.02,"lamp",.025),E(k,z*.7,.65,-1.97,.22,.16,.025,"red",.02),E(k,z*.49,1.24,-1.962,.94,1.57,.028,"metal",.03),E(k,z*.11,1.24,-1.985,.024,1.32,.025,"dark"),E(k,z*.985,.57,-.4,.035,.12,2.8,"metal");for(let H of[-1.28,1.48]){let ie=We(k,z*.97,.44,H,.41,.16,"rubber",24);ie.rotation.z=Math.PI/2;let de=We(k,z*1.061,.44,H,.23,.025,"metal",16);de.rotation.z=Math.PI/2}}Gt(k,"\u6765\u9716\u7269\u6D41",.995,1.47,-.4,1.4,.35,"#537660",null,Math.PI/2);for(let z of[-1,1])E(D,R+z*1.5,.135,U,.08,.016,4.6,"amber")}let N=vt(s,"site/civil");N.userData.layer="landscape";function X(R,U){E(N,R,.2,U,.6,.12,.6,"concrete"),We(N,R,.62,U,.13,.72,"hydrant",16),We(N,R,1.02,U,.16,.08,"hydrant",16);let k=new be.Mesh(new be.SphereGeometry(.13,14,8,0,Math.PI*2,0,Math.PI/2),ht.hydrant);k.position.set(R,1.06,U),k.castShadow=!0,N.add(k);for(let z of[0,Math.PI]){let H=We(N,R+Math.cos(z)*.17,.72,U+Math.sin(z)*.17,.055,.14,"hydrant",10);H.rotation.z=Math.PI/2}}for(let[R,U]of[[-67.9,-30],[-67.9,18],[67.9,-36],[67.9,12],[-40,-47.9],[10,-47.9],[-22,47.4],[62,47.4],[-4.1,-22],[4.1,14]])X(R,U);function ee(R,U){We(N,R,.12,U,.36,.02,"dark",20),gn(N,R,.128,U,.375,.022,"metal");for(let k of[0,Math.PI/2])E(N,R,.132,U,.05,.008,.58,"metal",0,k);gn(N,R,.13,U,.2,.012,"metal")}for(let R=-44;R<=44;R+=16)ee(1.2,R);for(let R=-60;R<=60;R+=20)ee(R,-.2);for(let R of[-73,73])for(let U=-40;U<=40;U+=20)ee(R+1.6,U+6);for(let R of[-73,73])for(let U of[-1,1])for(let[k,z]of[[-48,-4],[6,48]])E(a,R+U*3.55,.128,(k+z)/2,.12,.012,z-k,"white");for(let[R,U]of[[-65,-4],[4,65]])for(let k of[-1,1])E(a,(R+U)/2,.128,1+k*3,U-R,.012,.12,"white"),E(a,(R+U)/2,.129,-53+k*3.55,U-R,.012,.12,"white");for(let R of[-73,73])for(let U of[-4.6,6.6])E(a,R+(U<0?-2:2),.131,U,3.6,.013,.32,"white");for(let R of[-69.3,69.3])for(let U=-45;U<=45;U+=18){E(N,R,.12,U,.36,.02,.75,"dark");for(let k=-.3;k<=.31;k+=.1)E(N,R,.132,U+k,.3,.01,.03,"metal")}for(let R=-60;R<=60;R+=24)for(let U of[-49.3,48.3]){E(N,R,.12,U,.75,.02,.36,"dark");for(let k=-.3;k<=.31;k+=.1)E(N,R+k,.132,U,.03,.01,.3,"metal")}function K(R,U,k){let z=vt(N,"street-light",R,0,U);z.rotation.y=k,E(z,0,.1,0,.6,.2,.6,"concrete"),We(z,0,3.4,0,.075,6.6,"dark",12,.05),Vt(z,[[0,6.5,0],[0,6.75,.2],[0,6.75,1.2]],.045,"dark"),E(z,0,6.7,1.2,.36,.1,.7,"dark"),E(z,0,6.64,1.2,.28,.012,.5,"lamp")}for(let R of[-50,-25,25,50])K(R,5.1,Math.PI);function fe(R,U){let k=vt(N,"car-park-light",R,0,U);E(k,0,.25,0,.55,.5,.55,"concrete",.04),We(k,0,4.3,0,.07,7.6,"dark",12,.05),E(k,0,8.05,0,.12,.1,2.4,"dark",.02);for(let z of[-1,1])E(k,0,8,z*1.2,.42,.12,.62,"dark",.04),E(k,0,7.935,z*1.2,.34,.012,.5,"lamp");E(k,0,1.1,.08,.16,.3,.06,"metal",.01)}for(let R of[29.5,43.5])fe(R,41.2);for(let R of[-36,-16,20,40])K(3.9,R,-Math.PI/2);for(let R=-34.4;R<=-27.5;R+=1.35)We(N,R,.55,47.3,.08,.9,"metal",14),E(N,R,.93,47.3,.17,.03,.17,"dark");let Z=vt(N,"cycle-shelter",-60,0,43.5);E(Z,0,.11,0,3.4,.05,7.6,"paving");for(let R of[-3.4,0,3.4])We(Z,-1.3,1.2,R,.06,2.2,"dark",10),E(Z,-.4,2.28,R,2,.08,.1,"dark");E(Z,-.3,2.36,0,2.6,.05,7.4,"roofGlass"),E(Z,-1.35,1.5,0,.04,1.6,7.2,"districtGlass");for(let R=-3;R<=3.1;R+=.75)Vt(Z,[[.1,.14,R],[.1,.72,R],[.9,.72,R],[.9,.14,R]],.022,"metal",!1);let ne=vt(N,"box-substation",58.5,0,15);E(ne,0,.15,0,4.8,.3,3.4,"concrete"),E(ne,0,1.5,0,4,2.4,2.6,"districtWall"),E(ne,0,2.76,0,4.3,.12,2.9,"districtRoof");for(let R of[-1.3,0,1.3]){E(ne,R,1.35,1.31,1.1,1.9,.03,"districtRoof");for(let U=2.1;U<2.5;U+=.1)E(ne,R,U,1.33,.9,.03,.03,"dark")}Gt(ne,"\u7BB1\u53D8 10/0.4 kV",0,2.45,1.34,1.6,.24,"#2f3d38","#e3c95a");for(let[R,U]of["dark","paintBlue","hydrant","dark"].entries())E(N,47.5+R*.8,.55,-12.5,.62,1,.7,U,.05),E(N,47.5+R*.8,1.07,-12.5,.66,.05,.74,"dark");for(let R of[-80.1,80.1])E(N,R,.5,0,.9,1,116,"hedge",.3);for(let[R,U]of[[-78,-19],[19,78],[-78,78]])for(let k of U===78&&R===-78?[-60.1]:[60.1])E(N,(R+U)/2,.5,k,U-R,1,.9,"hedge",.3);let re=vt(s,"site/people");re.userData.layer="landscape";for(let[R,U]of[[-31,45.5],[-29.8,45],[-22,46.5],[7,38],[8,37.5],[8,59],[-6,13],[45,36],[-58,-5.5]]){We(re,R,.95,U,.17,.75,"dark",12,.23);let k=new be.Mesh(new be.SphereGeometry(.15,12,8),ht.stone);k.position.set(R,1.5,U),re.add(k);for(let z of[-.1,.1])E(re,R+z,.38,U,.12,.68,.15,"dark",.05)}let Ae=vt(s,"site/pipe-network");Ae.userData.layer="pipes";for(let[R,U]of[[29.55,"pipe"],[33.9,"copper"]]){Vt(Ae,[[23,.42,R],[27,.42,R],[45,.42,R],[48,.42,R],[49,.65,R],[49,2,R-2],[49,2,23]],.16,U);for(let k=24;k<=48;k+=4)E(Ae,k,.13,R,.7,.26,.7,"concrete",.06),gn(Ae,k,.42,R,.25,.04,"metal",[0,Math.PI/2,0])}for(let R of[27,33,39,45])Vt(Ae,[[R+.5,.2,30.375],[R+.5,.4,30.05],[R+.5,.42,29.55]],.115,"pipe"),Vt(Ae,[[R+.5,.35,32.26],[R+.5,.42,32.8],[R+.5,.42,33.9]],.09,"copper");let Re=vt(s,"site/signage");Re.userData.layer="landscape";for(let[R,U,k]of[[-65,7,"A \u7814\u53D1\u529E\u516C\u533A"],[63,-8,"B \u751F\u4EA7\u7269\u6D41\u533A"],[17,36,"C \u80FD\u6E90\u8BBE\u5907\u533A"]])E(Re,R,.9,U,.17,1.8,2.5,"dark",.06),Gt(Re,k,R+.094,1.2,U,2.05,.35,"#e2d5b3",null,Math.PI/2);return[e,a,o,l,A,D,N,re,Ae,Re,t]}function dp(s,e,t,n,i=.4,r="z",a=8){for(let o=0;o<a;o++){let l=o*Math.PI*2/a,c;r==="x"?(c=We(s,e,t+Math.sin(l)*i,n+Math.cos(l)*i,.047,.07,"metal",6),c.rotation.z=Math.PI/2):r==="y"?c=We(s,e+Math.cos(l)*i,t,n+Math.sin(l)*i,.047,.07,"metal",6):(c=We(s,e+Math.cos(l)*i,t+Math.sin(l)*i,n,.047,.07,"metal",6),c.rotation.x=Math.PI/2)}}function Pc(s,e,t,n,i=.35,r="z",a="metal"){let o=i*.59,l=[[o+.008,-.055],[i-.008,-.055],[i,-.047],[i,.047],[i-.008,.055],[o+.008,.055],[o,.047],[o,-.047],[o+.008,-.055]].map(([d,u])=>new be.Vector2(d,u)),c=new be.LatheGeometry(l,80);c.rotateX(Math.PI/2);let h=new be.Mesh(c,ht[a]);return h.position.set(e,t,n),h.rotation.x=r==="y"?-Math.PI/2:0,h.rotation.y=r==="x"?Math.PI/2:0,h.castShadow=h.receiveShadow=!0,s.add(h),dp(s,e+(r==="x"?.075:0),t+(r==="y"?.075:0),n+(r==="z"?.075:0),i*.78,r),h}function kS(s,e,t,n,i=.18){let r=We(s,e,t,n,i,.09,"metal",32);r.rotation.x=Math.PI/2;let a=We(s,e,t,n+.053,i*.88,.018,"ivory",32);a.rotation.x=Math.PI/2;for(let l=0;l<10;l++){let c=l/9*Math.PI*1.5+Math.PI*.75,h=E(s,e+Math.cos(c)*i*.68,t+Math.sin(c)*i*.68,n+.07,.012,i*.16,.007,"dark");h.rotation.z=c-Math.PI/2}let o=E(s,e+.035,t+.035,n+.08,.012,i*.65,.01,"red");o.rotation.z=-.7}function VS(s,e,t){E(s,0,.17,0,4.8,.34,1.95,"concrete",.1);for(let c of[-.7,.7])E(s,0,.43,c,4.4,.25,.22,"dark",.035);for(let c of[-1.9,1.9])for(let h of[-.67,.67])We(s,c,.6,h,.07,.18,"metal",6),gn(s,c,.57,h,.11,.025,"metal");let n=vt(s,"motor-and-coupling",-1.1,.98,0);n.userData.explode=[-1.4,.6,0];let i=We(n,0,0,0,.49,1.55,"pump",48);i.rotation.z=Math.PI/2;for(let c=0;c<22;c++){let h=c*Math.PI/11,d=E(n,0,Math.sin(h)*.5,Math.cos(h)*.5,1.35,.055,.1,"pump",.018);d.rotation.x=-h}for(let c of[-.83,.83])i=We(n,c,0,0,.5,.14,"pump",40),i.rotation.z=Math.PI/2,dp(n,c+(c>0?.09:-.09),0,0,.4,"x");E(n,0,.6,0,.58,.28,.52,"pump",.06),E(n,0,.76,0,.62,.06,.55,"metal",.02);for(let c of[-.5,.5])E(n,c,-.46,0,.26,.23,1.1,"pump",.03);let r=vt(n,"motor-fan",-.92,0,0);r.userData.dynamic=!0;for(let c=0;c<8;c++){let h=E(r,0,0,0,.025,.08,.73,"dark",.02);h.rotation.x=c*Math.PI/4}t.push({object:r,axis:"x",assetId:e.id,speed:5});for(let c of[.2,.32,.44])gn(n,-.96,0,0,c,.013,"metal",[0,Math.PI/2,0]);for(let c=0;c<10;c++){let h=E(n,-.98,0,0,.02,.025,.93,"metal");h.rotation.x=c*Math.PI/5}let a=vt(s,"shaft-coupling",.13,.98,0);a.userData.explode=[0,.9,0],i=We(a,0,0,0,.19,.62,"metal",32),i.rotation.z=Math.PI/2;for(let c of[-.2,.2])i=We(a,c,0,0,.26,.12,"amber",32),i.rotation.z=Math.PI/2;let o=vt(s,"cast-volute",1,.99,0);o.userData.explode=[1.35,0,0],i=new be.Mesh(new be.SphereGeometry(.62,40,24),ht.pump),i.scale.set(.52,1,1),o.add(i),i.castShadow=i.receiveShadow=!0;let l=[];for(let c=0;c<=40;c++){let h=c/40*Math.PI*1.8,d=.22+c/40*.36;l.push([.04,Math.sin(h)*d,Math.cos(h)*d])}Vt(o,l,.14,"pump"),Pc(o,.34,0,0,.47,"x","pump"),Pc(o,-.34,0,0,.47,"x","pump"),E(o,0,-.53,0,.85,.25,1.3,"pump",.08),Vt(o,[[0,.42,.28],[0,.77,.28],[0,.95,.28],[0,1.04,.53],[0,1.04,1.18]],.2,"pump"),Pc(o,0,1.04,1.22,.32,"z"),Pc(o,0,1.04,1.36,.32,"z"),Vt(s,[[1,2.03,1.45],[1,2.03,1.78],[1,1.95,2.12],[1,.7,2.12]],.18,"pipe"),We(s,1,2.41,1.72,.033,.7,"metal"),gn(s,1,2.79,1.72,.22,.035,"red");for(let c=0;c<4;c++)E(s,1,2.79,1.72,.4,.035,.025,"red",0,c*Math.PI/2);Vt(s,[[1,.99,-.6],[1,.99,-1.3],[1,.8,-1.65],[1,.4,-1.65]],.23,"pipe"),Pc(s,1,.99,-.9,.37,"z"),We(s,1,2.27,1.42,.025,.42,"metal"),kS(s,1,2.58,1.47),Gt(s,e.id,0,.19,.981,1.2,.18,"#e9e2c9","#233d36"),Gt(n,"11 kW  380 V",0,.17,.51,.82,.16,"#d0d4c5","#203a36")}function GS(s,e,t){E(s,0,.18,0,7.6,.35,3.6,"dark",.08),E(s,0,1.2,0,7.3,1.95,3.3,"ivory",.18);for(let n=-3.1;n<3.5;n+=1.25)E(s,n,1.15,1.69,.025,1.7,.02,"dark");for(let n of[-1.67,1.67])for(let i=.5;i<1.55;i+=.12)E(s,-2.6,i,n,1.35,.045,.06,"dark");for(let n of[-1.1,1.25]){We(s,n,2.25,0,1.16,.25,"metal",48),We(s,n,2.4,0,1.04,.08,"black",48);let i=vt(s,"axial-fan",n,2.48,0);i.userData.dynamic=!0;for(let r=0;r<6;r++){let a=E(i,0,0,0,.23,.045,1.78,"metal",.08);a.rotation.y=r*Math.PI/3}We(i,0,.02,0,.19,.1,"dark"),t.push({object:i,axis:"y",assetId:e.id,speed:3});for(let r of[.32,.54,.78,1])gn(s,n,2.54,0,r,.015,"metal");for(let r=0;r<8;r++)E(s,n,2.55,0,.025,.03,2.1,"metal",0,r*Math.PI/4)}E(s,2.85,1.23,1.75,.57,.85,.18,"dark",.05),Gt(s,e.id,2.85,1.32,1.85,.48,.2,"#d1dece");for(let n=-1;n<1.2;n+=.26)Vt(s,[[-3.66,.65,n],[-4.15,.65,n],[-4.5,.9,n],[-4.5,.05,n]],.055,"copper")}function HS(s,e){E(s,0,.12,0,1.8,.24,1.4,"concrete",.07),E(s,0,1.4,0,1.45,2.5,1.08,"ivory",.09),E(s,0,1.4,.56,1.31,2.25,.065,"metal",.04),E(s,0,2.03,.62,.6,.4,.075,"dark",.045),Gt(s,e.id,0,2.06,.666,.48,.13,"#cee2bb");for(let t=-.35;t<=.36;t+=.35)We(s,t,1.64,.64,.04,.02,t<0?"red":"amber",16).rotation.x=Math.PI/2;E(s,.5,1.36,.63,.055,.3,.07,"black",.02);for(let t=.46;t<.99;t+=.085)E(s,0,t,.61,.95,.025,.03,"dark");Gt(s,"400 V",0,1.17,.64,.52,.2,"#5a4512","#dfbe60");for(let t of[.6,2.2])E(s,-.66,t,.62,.07,.17,.05,"metal",.015)}function WS(s,e){E(s,0,.1,0,1.4,.2,1.2,"concrete",.08),E(s,0,1.25,0,.9,2.3,.6,"ivory",.15),E(s,0,1.65,.316,.66,1.1,.05,"black",.09),E(s,0,1.88,.35,.49,.38,.015,"glassLight",.03),Gt(s,"DC 120",0,1.88,.363,.4,.13,"#adc7ba"),Gt(s,e.id,0,.54,.314,.49,.2,"#385249");for(let t of[-1,1])Vt(s,[[t*.4,1.8,0],[t*.72,1.7,0],[t*.8,.42,.05],[t*.67,.36,.23],[t*.55,1.33,.3]],.039,"rubber"),E(s,t*.51,1.35,.31,.12,.27,.16,"dark",.035);E(s,0,2.15,.33,.51,.025,.015,"lamp");for(let t of[-.9,.9])We(s,t,.48,.1,.07,.95,"amber"),We(s,t,.35,.1,.075,.15,"dark")}function Lg(s,e,t){let n=e.type==="light"?6.8:5.4;if(E(s,0,.1,0,.7,.2,.7,"concrete",.07),We(s,0,.25,0,.17,.24,"metal"),dp(s,0,.38,0,.23,"y",4),We(s,0,n/2,0,.09,n,"dark",16,.055),e.type==="light"){Vt(s,[[0,n-.1,0],[0,n+.22,0],[0,n+.48,.22],[0,n+.48,1.5]],.06,"dark"),E(s,0,n+.44,1.47,.48,.12,.9,"dark",.08);let i=E(s,0,n+.37,1.47,.38,.015,.68,"lamp",.035);i.material=ht.lamp.clone(),i.userData.luminaire=!0,i.userData.dynamic=!0;let r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,217,146,.72)"),o.addColorStop(.35,"rgba(255,207,127,.4)"),o.addColorStop(1,"rgba(255,207,127,0)"),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new be.CanvasTexture(r);l.colorSpace=be.SRGBColorSpace;let c=new be.Mesh(new be.PlaneGeometry(10,13),new be.MeshBasicMaterial({map:l,transparent:!0,opacity:0,depthWrite:!1,blending:be.AdditiveBlending,toneMapped:!1}));c.rotation.x=-Math.PI/2,c.position.set(0,.19,1.5),c.userData.lightPool=!0,c.userData.nonPhysical=!0,c.userData.dynamic=!0,c.name="downlight-footprint",s.add(c)}else{E(s,0,n-.35,.35,.13,.12,.7,"metal",.03);let i=vt(s,"camera-head",0,n-.1,.58);We(i,0,0,0,.27,.28,"ivory",32);let r=new be.Mesh(new be.SphereGeometry(.24,32,16,0,Math.PI*2,0,Math.PI/2),ht.glass);r.rotation.x=Math.PI,r.position.y=-.12,i.add(r),r.castShadow=!0,E(i,0,.2,0,.22,.15,.22,"ivory",.06),Gt(s,e.id,0,3.7,.1,.5,.14,"#c8d1c1","#203a34")}}function XS(s,e,t){E(s,0,.09,0,.9,.18,.9,"concrete",.08),E(s,0,.7,0,.52,1.3,.5,"ivory",.08),E(s,0,1.3,0,.56,.1,.55,"dark",.04),Gt(s,e.id,0,.9,.26,.35,.15,"#32483c");let n=vt(s,"barrier-arm",0,1.1,0);n.userData.dynamic=!0;let i=e.position[0]<0?1:-1;E(n,i*1.8,0,0,3.6,.13,.09,"white",.025);for(let r=0;r<6;r++)E(n,i*(.3+r*.6),0,.052,.27,.13,.015,"red");t.push({object:n,axis:"z",assetId:e.id,gate:!0,sign:i})}function Ng(s,e){E(s,0,.1,0,.7,.2,.7,"concrete",.04),We(s,0,1.8,0,.055,3.6,"metal",16),E(s,0,2.2,.2,.47,.62,.38,"ivory",.07),Gt(s,e.id,0,2.25,.4,.4,.16,"#335146");for(let t=0;t<7;t++)We(s,0,3+t*.07,0,.19,.028,"white",24);E(s,0,3.7,0,1.25,.04,.06,"metal"),We(s,-.55,3.83,0,.08,.24,"white",20);for(let t=0;t<3;t++){let n=t*Math.PI*2/3;Vt(s,[[.4,3.83,0],[.4+Math.cos(n)*.22,3.83,Math.sin(n)*.22]],.018,"metal")}}function Ug(s,e){let t=[],n=new Map;for(let i of e.assets){let r=vt(s,i.modelNode,...i.position);r.userData.assetId=i.id,r.userData.layer="equipment",{pump:VS,hvac:GS,meter:HS,charger:WS,gate:XS,sensor:Ng,bench:Ng,camera:Lg,light:Lg}[i.type](r,i,t);let a={pump:[-1.1,1.74,.25],hvac:[2.85,1.63,1.87],meter:[.32,1.64,.66],charger:[0,2.17,.35],gate:[0,1.33,.26],sensor:[.14,2.45,.405],bench:[.14,2.45,.405],camera:[.2,5.25,.58],light:[0,1.2,.095]},o=new be.Mesh(new be.SphereGeometry(i.type==="hvac"?.065:.035,12,8),new be.MeshStandardMaterial({color:"#759568",emissive:"#759568",emissiveIntensity:.6,roughness:.35}));o.position.set(...a[i.type]),o.userData.indicator=!0,o.userData.dynamic=!0,o.name="telemetry-status-indicator",r.add(o),i.type==="pump"&&(r.getObjectByName("motor-and-coupling").add(o),o.position.set(0,.76,.25)),i.type==="pump"&&r.scale.setScalar(.5),n.set(i.id,r)}return{assets:n,animations:t}}var Fg={type:"change"},pp={type:"start"},Bg={type:"end"},ed=new vi,Og=new kn,qS=Math.cos(70*Ns.DEG2RAD),un=new L,qn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fp=1e-6,td=class extends Ia{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Xt,this._lastTargetPosition=new L,this._quat=new Xt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sr,this._sphericalDelta=new Sr,this._scale=1,this._panOffset=new L,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new L,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$S.bind(this),this._onPointerDown=YS.bind(this),this._onPointerUp=ZS.bind(this),this._onContextMenu=nb.bind(this),this._onMouseWheel=jS.bind(this),this._onKeyDown=QS.bind(this),this._onTouchStart=eb.bind(this),this._onTouchMove=tb.bind(this),this._onMouseDown=JS.bind(this),this._onMouseMove=KS.bind(this),this._interceptControlDown=ib.bind(this),this._interceptControlUp=sb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=It.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=It.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=qn:n>Math.PI&&(n-=qn),i<-Math.PI?i+=qn:i>Math.PI&&(i-=qn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=un.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ed.origin.copy(this.object.position),ed.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ed.direction))<qS?this.object.lookAt(this.target):(Og.setFromNormalAndCoplanarPoint(this.object.up,this.target),ed.intersectPlane(Og,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fp||this._lastTargetPosition.distanceToSquared(this.target)>fp?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;un.copy(i).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function YS(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $S(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ZS(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bg),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function JS(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=It.DOLLY;break;case es.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}break;case es.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(pp)}function KS(s){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function jS(s){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(s.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Bg))}function QS(s){this.enabled!==!1&&this._handleKeyDown(s)}function eb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=It.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=It.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(pp)}function tb(s){switch(this._trackPointer(s),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=It.NONE}}function nb(s){this.enabled!==!1&&s.preventDefault()}function ib(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nd=class extends Ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Hn;e.deleteAttribute("uv");let t=new Si({side:mn}),n=new Si,i=new yr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ft(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new sr(e,n,6),o=new Tt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ft(e,so(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ft(e,so(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ft(e,so(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ft(e,so(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ft(e,so(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ft(e,so(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function so(s){return new mr({color:0,emissive:16777215,emissiveIntensity:s})}var zi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rb=new Fi(-1,1,1,-1,0,1),mp=class extends st{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}},ab=new mp,ki=class{constructor(e){this._mesh=new ft(ab,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pr=class extends Fn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ic=class extends Fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},id=class extends Fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pr(zi),this.copyPass.material.blending=$t,this.timer=new Mr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ic!==void 0&&(a instanceof Ic?n=!0:a instanceof id&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rd=class extends Fn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Dc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Lc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ad={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function zg(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=ob(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new ln(i,e,e);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}function ob(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Nc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:gp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function gp(s,e,t){let n=lb(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function lb(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var od=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,p=e-u,x=t-f,m,g;p>x?(m=1,g=0):(m=0,g=1);let y=p-m+h,w=x-g+h,_=p-1+2*h,S=x-1+2*h,b=l&255,P=c&255,M=this.perm[b+this.perm[P]]%12,A=this.perm[b+m+this.perm[P+g]]%12,D=this.perm[b+1+this.perm[P+1]]%12,F=.5-p*p-x*x;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[M],p,x));let G=.5-y*y-w*w;G<0?i=0:(G*=G,i=G*G*this._dot(this.grad3[A],y,w));let $=.5-_*_-S*S;return $<0?r=0:($*=$,r=$*$*this._dot(this.grad3[D],_,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,p=(h+d+u)*f,x=h-p,m=d-p,g=u-p,y=e-x,w=t-m,_=n-g,S,b,P,M,A,D;y>=w?w>=_?(S=1,b=0,P=0,M=1,A=1,D=0):y>=_?(S=1,b=0,P=0,M=1,A=0,D=1):(S=0,b=0,P=1,M=1,A=0,D=1):w<_?(S=0,b=0,P=1,M=0,A=1,D=1):y<_?(S=0,b=1,P=0,M=0,A=1,D=1):(S=0,b=1,P=0,M=1,A=1,D=0);let F=y-S+f,G=w-b+f,$=_-P+f,N=y-M+2*f,X=w-A+2*f,ee=_-D+2*f,K=y-1+3*f,fe=w-1+3*f,Z=_-1+3*f,ne=h&255,re=d&255,Ae=u&255,Re=this.perm[ne+this.perm[re+this.perm[Ae]]]%12,R=this.perm[ne+S+this.perm[re+b+this.perm[Ae+P]]]%12,U=this.perm[ne+M+this.perm[re+A+this.perm[Ae+D]]]%12,k=this.perm[ne+1+this.perm[re+1+this.perm[Ae+1]]]%12,z=.6-y*y-w*w-_*_;z<0?i=0:(z*=z,i=z*z*this._dot3(this.grad3[Re],y,w,_));let H=.6-F*F-G*G-$*$;H<0?r=0:(H*=H,r=H*H*this._dot3(this.grad3[R],F,G,$));let ie=.6-N*N-X*X-ee*ee;ie<0?a=0:(ie*=ie,a=ie*ie*this._dot3(this.grad3[U],N,X,ee));let de=.6-K*K-fe*fe-Z*Z;return de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[k],K,fe,Z)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(e+t+n+i)*l,m=Math.floor(e+x),g=Math.floor(t+x),y=Math.floor(n+x),w=Math.floor(i+x),_=(m+g+y+w)*c,S=m-_,b=g-_,P=y-_,M=w-_,A=e-S,D=t-b,F=n-P,G=i-M,$=A>D?32:0,N=A>F?16:0,X=D>F?8:0,ee=A>G?4:0,K=D>G?2:0,fe=F>G?1:0,Z=$+N+X+ee+K+fe,ne=a[Z][0]>=3?1:0,re=a[Z][1]>=3?1:0,Ae=a[Z][2]>=3?1:0,Re=a[Z][3]>=3?1:0,R=a[Z][0]>=2?1:0,U=a[Z][1]>=2?1:0,k=a[Z][2]>=2?1:0,z=a[Z][3]>=2?1:0,H=a[Z][0]>=1?1:0,ie=a[Z][1]>=1?1:0,de=a[Z][2]>=1?1:0,ve=a[Z][3]>=1?1:0,ze=A-ne+c,mt=D-re+c,ce=F-Ae+c,ge=G-Re+c,ye=A-R+2*c,pe=D-U+2*c,Se=F-k+2*c,Ke=G-z+2*c,Xe=A-H+3*c,Qe=D-ie+3*c,it=F-de+3*c,V=G-ve+3*c,O=A-1+4*c,te=D-1+4*c,T=F-1+4*c,v=G-1+4*c,I=m&255,B=g&255,q=y&255,me=w&255,ae=o[I+o[B+o[q+o[me]]]]%32,J=o[I+ne+o[B+re+o[q+Ae+o[me+Re]]]]%32,le=o[I+R+o[B+U+o[q+k+o[me+z]]]]%32,we=o[I+H+o[B+ie+o[q+de+o[me+ve]]]]%32,Ye=o[I+1+o[B+1+o[q+1+o[me+1]]]]%32,Ee=.6-A*A-D*D-F*F-G*G;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this._dot4(r[ae],A,D,F,G));let Te=.6-ze*ze-mt*mt-ce*ce-ge*ge;Te<0?d=0:(Te*=Te,d=Te*Te*this._dot4(r[J],ze,mt,ce,ge));let Ge=.6-ye*ye-pe*pe-Se*Se-Ke*Ke;Ge<0?u=0:(Ge*=Ge,u=Ge*Ge*this._dot4(r[le],ye,pe,Se,Ke));let $e=.6-Xe*Xe-Qe*Qe-it*it-V*V;$e<0?f=0:($e*=$e,f=$e*$e*this._dot4(r[we],Xe,Qe,it,V));let rt=.6-O*O-te*te-T*T-v*v;return rt<0?p=0:(rt*=rt,p=rt*rt*this._dot4(r[Ye],O,te,T,v)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Uc=class s extends Fn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},Dc.defines),uniforms:Pn.clone(Dc.uniforms),vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new pr,this.normalMaterial.blending=$t,this.pdMaterial=new Pt({defines:Object.assign({},Nc.defines),uniforms:Pn.clone(Nc.uniforms),vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},Lc.defines),uniforms:Pn.clone(Lc.uniforms),vertexShader:Lc.vertexShader,fragmentShader:Lc.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:Pn.clone(zi.uniforms),vertexShader:zi.vertexShader,fragmentShader:zi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ua,blendDst:Ds,blendEquation:Kn,blendSrcAlpha:Na,blendDstAlpha:Ds,blendEquationAlpha:Kn}),this.blendMaterial=new Pt({uniforms:Pn.clone(ad.uniforms),vertexShader:ad.vertexShader,fragmentShader:ad.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ul,blendSrc:Ua,blendDst:Ds,blendEquation:Kn,blendSrcAlpha:Na,blendDstAlpha:Ds,blendEquationAlpha:Kn}),this._fsQuad=new ki(null),this._originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Mi,this.depthTexture.format=Ti,this.depthTexture.type=rs,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:Ot,magFilter:Ot,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=gp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new od,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ln(i,e,e,sn,yn);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}};Uc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Fc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ld=class extends Fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pn.clone(Fc.uniforms),this.material=new Rs({name:Fc.name,uniforms:this.uniforms,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Va&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ro=class s extends Fn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new kt(r,a,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new kt(r,a,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=kg;this.highPassUniforms=Pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pn.clone(zi.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:zi.vertexShader,fragmentShader:zi.fragmentShader,premultipliedAlpha:!0,blending:La,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ro.BlurDirectionX=new oe(1,0);ro.BlurDirectionY=new oe(0,1);var Vg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new oe(1/1024,1/512)}},vertexShader:`

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

		}`};var Gg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Fs=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Mp(e)}),this.register(function(e){return new Sp(e)}),this.register(function(e){return new Ep(e)}),this.register(function(e){return new Ap(e)}),this.register(function(e){return new Cp(e)}),this.register(function(e){return new Rp(e)}),this.register(function(e){return new bp(e)}),this.register(function(e){return new wp(e)}),this.register(function(e){return new Tp(e)}),this.register(function(e){return new Pp(e)}),this.register(function(e){return new Ip(e)}),this.register(function(e){return new Dp(e)}),this.register(function(e){return new Lp(e)}),this.register(function(e){return new Np(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){let r=new yp,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}},Mt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},xp="KHR_mesh_quantization",ei={};ei[Ot]=Mt.NEAREST;ei[qa]=Mt.NEAREST_MIPMAP_NEAREST;ei[ss]=Mt.NEAREST_MIPMAP_LINEAR;ei[Nt]=Mt.LINEAR;ei[Ls]=Mt.LINEAR_MIPMAP_NEAREST;ei[jn]=Mt.LINEAR_MIPMAP_LINEAR;ei[_n]=Mt.CLAMP_TO_EDGE;ei[Tn]=Mt.REPEAT;ei[ys]=Mt.MIRRORED_REPEAT;var Hg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},cb=new Ce,Wg=12,hb=1179937895,ub=2,Xg=8,db=1313821514,fb=5130562;function ls(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function pb(s){return new TextEncoder().encode(s).buffer}function mb(s){return ls(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function gb(s,e,t){let n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=Ns.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function qg(s){return Math.ceil(s/4)*4}function _p(s,e=0){let t=qg(s.byteLength);if(t!==s.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function vp(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xb(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}var yp=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r186"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let i=this,r=i.buffers,a=i.json;n=i.options;let o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),d=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),d.length>0&&(a.extensionsRequired=d),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.copyright&&(a.asset.copyright=n.copyright),n.binary===!0){let u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){let f=_p(u.result),p=new DataView(new ArrayBuffer(Xg));p.setUint32(0,f.byteLength,!0),p.setUint32(4,fb,!0);let x=_p(pb(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Xg));m.setUint32(0,x.byteLength,!0),m.setUint32(4,db,!0);let g=new ArrayBuffer(Wg),y=new DataView(g);y.setUint32(0,hb,!0),y.setUint32(4,ub,!0);let w=Wg+m.byteLength+x.byteLength+p.byteLength+f.byteLength;y.setUint32(8,w,!0);let _=new Blob([g,m,x,p,f],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(_),S.onloadend=function(){t(S.result)}}}else if(a.buffers&&a.buffers.length>0){let u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){let f=u.result;a.buffers[0].uri=f,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,i=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new L;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),i=new L;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===en?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof ai&&(e=await this.decompressTextureAsync(e)),t instanceof ai&&(t=await this.decompressTextureAsync(t));let i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=vp();l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);let h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);let f=n(e),p=c.getImageData(0,0,a,o).data;for(let x=2;x<p.length;x+=4)h.data[x]=f(p[x]/256)*256}if(r){c.drawImage(r,0,0,a,o);let f=n(t),p=c.getImageData(0,0,a,o).data;for(let x=1;x<p.length;x+=4)h.data[x]=f(p[x]/256)*256}c.putImageData(h,0,0);let u=(e||t).clone();return u.source=new Nn(l),u.colorSpace=Xn,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async buildNormalMapTextureAsync(e,t,n){e instanceof ai&&(e=await this.decompressTextureAsync(e));let i=e.image,r=vp();r.width=i.width,r.height=i.height;let a=r.getContext("2d",{willReadFrequently:!0});a.drawImage(i,0,0,r.width,r.height);let o=a.getImageData(0,0,r.width,r.height),l=o.data;for(let h=0;h<l.length;h+=4)t&&(l[h+0]=255-l[h+0]),n&&(l[h+1]=255-l[h+1]);a.putImageData(o,0,0);let c=e.clone();return c.source=new Nn(r),c}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Mt.BYTE:case Mt.UNSIGNED_BYTE:o=1;break;case Mt.SHORT:case Mt.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===Mt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=qg(i*l),h=new DataView(new ArrayBuffer(c)),d=0;for(let p=n;p<n+i;p++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[p*e.itemSize+x]:(x===0?m=e.getX(p):x===1?m=e.getY(p):x===2?m=e.getZ(p):x===3&&(m=e.getW(p)),e.normalized===!0&&(m=Ns.normalize(m,e.array))),t===Mt.FLOAT?h.setFloat32(d,m,!0):t===Mt.INT?h.setInt32(d,m,!0):t===Mt.UNSIGNED_INT?h.setUint32(d,m,!0):t===Mt.SHORT?h.setInt16(d,m,!0):t===Mt.UNSIGNED_SHORT?h.setUint16(d,m,!0):t===Mt.BYTE?h.setInt8(d,m):t===Mt.UNSIGNED_BYTE&&h.setUint8(d,m),d+=o}d%l!==0&&(d+=l-d%l)}let u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===Mt.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=_p(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=Mt.FLOAT;else if(e.array.constructor===Int32Array)o=Mt.INT;else if(e.array.constructor===Uint32Array)o=Mt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Mt.SHORT;else if(e.array.constructor===Uint16Array)o=Mt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Mt.BYTE;else if(e.array.constructor===Uint8Array)o=Mt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;let l=gb(e,n,i),c;t!==void 0&&(c=e===t.index?Mt.ELEMENT_ARRAY_BUFFER:Mt.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,i,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,i="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),d=i+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];o.images||(o.images=[]);let u={mimeType:i},f=vp();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let p=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(p.translate(0,f.height),p.scale(1,-1)),e.data!==void 0){t!==sn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<m.length;g+=4)m[g+0]=e.data[g+0],m[g+1]=e.data[g+1],m[g+2]=e.data[g+2],m[g+3]=e.data[g+3];p.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)p.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(xb(f,i).then(m=>r.processBufferViewImage(m)).then(m=>{u.bufferView=m})):u.uri=Qs.getDataURL(f,i);let x=o.images.push(u)-1;return h[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:ei[e.magFilter],minFilter:ei[e.minFilter],wrapS:ei[e.wrapS],wrapT:ei[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof ai&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType,o=this.processImage(e.image,e.format,e.flipY,a),l={sampler:this.processSampler(e)};a==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:o},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=o,e.name&&(l.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,l)});let c=r.textures.push(l)-1;return i.textures.set(e,c),c}async processMaterialAsync(e,t){let n=this.cache,i=this.json,r=t!==void 0&&t.hasAttribute("tangent"),a=e.normalMap?e.uuid+":"+r:e.uuid;if(n.materials.has(a))return n.materials.get(a);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);let o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=e.color.toArray().concat([e.opacity]);if(ls(l,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),d={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(d,h),o.pbrMetallicRoughness.metallicRoughnessTexture=d}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),o.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let u={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),o.emissiveTexture=u}}if(e.normalMap){let h=e.normalScale,d=h.x<0,u=r?h.y<0:h.y>0,f=e.normalMap;if(d||u){n.normalMaps.has(e.normalMap)===!1&&n.normalMaps.set(e.normalMap,{});let x=n.normalMaps.get(e.normalMap),m=`${d}:${u}`;x[m]===void 0&&(x[m]=await this.buildNormalMapTextureAsync(e.normalMap,d,u)),f=x[m]}let p={index:await this.processTextureAsync(f),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(p.scale=Math.abs(h.x)),this.applyTextureTransform(p,e.normalMap),o.normalTexture=p}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),o.occlusionTexture=h}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===Cn&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,o)});let c=i.materials.push(o)-1;return n.materials.set(a,c),c}async processMeshAsync(e){let t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,S=e.material.length;_<S;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);let r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=Mt.LINES:e.isLineLoop?o=Mt.LINE_LOOP:e.isLine?o=Mt.LINE_STRIP:e.isPoints?o=Mt.POINTS:o=e.material.wireframe?Mt.LINES:Mt.TRIANGLES;let l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let p=null;for(let _ in a.attributes){if(_.slice(0,5)==="morph")continue;let S=a.attributes[_];if(_=u[_]||_.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)&&!_.startsWith("_")&&(_="_"+_),t.attributes.has(this.getUID(S))){c[_]=t.attributes.get(this.getUID(S));continue}p=null;let P=S.array;_==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=Fs.Utils.toTypedBufferAttribute(S,Uint16Array)):(P instanceof Uint32Array||P instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),p=Fs.Utils.toTypedBufferAttribute(S,Float32Array));let M=this.processAccessor(p||S,a);M!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,S),c[_]=M,t.attributes.set(this.getUID(S),M))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let _=[],S=[],b={};if(e.morphTargetDictionary!==void 0)for(let P in e.morphTargetDictionary)b[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){let M={},A=!1;for(let D in a.morphAttributes){if(D!=="position"&&D!=="normal"){A||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),A=!0);continue}let F=a.morphAttributes[D][P],G=D.toUpperCase(),$=a.attributes[D];if(t.attributes.has(this.getUID(F,!0))){M[G]=t.attributes.get(this.getUID(F,!0));continue}let N=F.clone();if(!a.morphTargetsRelative)for(let X=0,ee=F.count;X<ee;X++)for(let K=0;K<F.itemSize;K++)K===0&&N.setX(X,F.getX(X)-$.getX(X)),K===1&&N.setY(X,F.getY(X)-$.getY(X)),K===2&&N.setZ(X,F.getZ(X)-$.getZ(X)),K===3&&N.setW(X,F.getW(X)-$.getW(X));M[G]=this.processAccessor(N,a),t.attributes.set(this.getUID($,!0),M[G])}d.push(M),_.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&S.push(b[P])}l.weights=_,S.length>0&&(l.extras={},l.extras.targetNames=S)}let x=Array.isArray(e.material);if(x&&a.groups.length===0)return null;let m=!1;if(x&&a.index===null){let _=[];for(let S=0,b=a.attributes.position.count;S<b;S++)_[S]=S;a.setIndex(_),m=!0}let g=x?e.material:[e.material],y=x?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,S=y.length;_<S;_++){let b={mode:o,attributes:c};if(this.serializeUserData(a,b),d.length>0&&(b.targets=d),a.index!==null){let M=this.getUID(a.index);(y[_].start!==void 0||y[_].count!==void 0)&&(M+=":"+y[_].start+":"+y[_].count),t.attributes.has(M)?b.indices=t.attributes.get(M):(b.indices=this.processAccessor(a.index,a,y[_].start,y[_].count),t.attributes.set(M,b.indices)),b.indices===null&&delete b.indices}let P=await this.processMaterialAsync(g[y[_].materialIndex],a);P!==null&&(b.material=P),h.push(b)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});let w=n.meshes.push(l)-1;return t.meshes.set(r,w),w}detectMeshQuantization(e,t){if(this.extensionsUsed[xp])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let i=e.split("_",1)[0];Gg[i]&&Gg[i].includes(n)&&(this.extensionsUsed[xp]=!0,this.extensionsRequired[xp]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Ns.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){let n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Fs.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let h=r[c],d=bt.parseTrackName(h.name),u=bt.findNode(t,d.nodeName),f=Hg[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let p=1,x=h.values.length/h.times.length;f===Hg.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):h.getInterpolation()===Ms?m="STEP":m="LINEAR",o.push({input:this.processAccessor(new _t(h.times,p)),output:this.processAccessor(new _t(h.values,x)),interpolation:m}),a.push({sampler:o.length-1,target:{node:i.get(u),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],l=new Float32Array(r.bones.length*16),c=new nt;for(let d=0;d<r.bones.length;++d)o.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(e.bindMatrix).toArray(l,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new _t(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,i=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();ls(o,[0,0,0,1])||(r.rotation=o),ls(l,[0,0,0])||(r.translation=l),ls(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),mb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let a=t.nodes.push(r)-1;if(i.set(e,a),e.children.length>0){let o=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let d=await this.processNodeAsync(h);d!==null&&o.push(d)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,i=this.nodeMap,r=e.pivot,a={},o=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();ls(o,[0,0,0,1])||(a.rotation=o),ls(l,[0,0,0])||(a.translation=l),ls(c,[1,1,1])||(a.scale=c),a.extras={pivot:r.toArray()},e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a);let h=t.nodes.push(a)-1;i.set(e,h);let d={},u=[-r.x,-r.y,-r.z];if(ls(u,[0,0,0])||(d.translation=u),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(d.mesh=x)}else e.isCamera&&(d.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let p=[t.nodes.push(d)-1];if(e.children.length>0){let x=[];for(let m=0,g=e.children.length;m<g;m++){let y=e.children[m];if(y.visible||n.onlyVisible===!1){let w=await this.processNodeAsync(y);w!==null&&x.push(w)}}x.length>0&&(d.children=x)}return a.children=p,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,a)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);let r=[];for(let a=0,o=e.children.length;a<o;a++){let l=e.children[a];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){let t=new Ii;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});let n=[];for(let i=0;i<e.length;i++)e[i]instanceof Ii?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);if(e.length===1)for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);else for(let i=0;i<e.length;i++){let r=t.animations[i]||[];for(let a=0;a<r.length;++a)this.processAnimation(r[a],e[i])}await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Mp=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);let o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},Sp=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},bp=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},wp=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Tp=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ep=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ap=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Cp=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Rp=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(cb)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Pp=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Ip=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Dp=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Lp=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){let a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}},Np=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new nt,c=new L,h=new Xt,d=new L;for(let f=0;f<i.count;f++)i.getMatrixAt(f,l),l.decompose(c,h,d),c.toArray(r,f*3),h.toArray(a,f*4),d.toArray(o,f*3);let u={TRANSLATION:n.processAccessor(new _t(r,3)),ROTATION:n.processAccessor(new _t(a,4)),SCALE:n.processAccessor(new _t(o,3))};i.instanceColor&&(u._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Fs.Utils={insertKeyframe:function(s,e){let n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n)),o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){let t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r],o=bt.parseTrackName(a.name),l=bt.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Ks)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let d;if(n[l.uuid]===void 0){d=a.clone();let f=new d.ValueBufferType(c*d.times.length);for(let p=0;p<d.times.length;p++)f[p*c+h]=d.values[p];d.name=(o.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,t.push(d);continue}let u=a.createInterpolant(new a.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+h]=u.evaluate(d.times[f]);for(let f=0;f<a.times.length;f++){let p=this.insertKeyframe(d,a.times[f]);d.values[p*c+h]=a.values[f]}}return s.tracks=t,s},toTypedBufferAttribute:function(s,e){let t=new _t(new e(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return t.array.set(s.array),t;for(let n=0,i=s.count;n<i;n++)for(let r=0;r<s.itemSize;r++)t.setComponent(n,r,s.getComponent(n,r));return t}};function _b(s,e,t,{onPick:n=()=>{},onFrame:i=()=>{},onError:r=()=>{}}={}){function a(he){let xe=new be.Box3;return he.updateWorldMatrix(!0,!0),he.traverse(Me=>{Me.isMesh&&!Me.userData.nonPhysical&&xe.union(new be.Box3().setFromObject(Me))}),xe}let o=new be.WebGLRenderer({canvas:s,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});o.setPixelRatio(Math.min(devicePixelRatio,1.5)),o.shadowMap.enabled=!0,o.shadowMap.type=be.PCFShadowMap,o.shadowMap.autoUpdate=!1,o.localClippingEnabled=!0,o.info.autoReset=!1,o.toneMapping=be.ACESFilmicToneMapping,o.toneMappingExposure=1,o.outputColorSpace=be.SRGBColorSpace;let l=new be.Scene;l.background=new be.Color("#cdd9d9"),l.fog=new be.Fog("#cdd9d9",350,850);let c=new be.PerspectiveCamera(34,1,.15,1300);c.position.set(146,125,189);let h=new td(c,s);h.target.set(-12,1,11),h.enableDamping=!0,h.dampingFactor=.065,h.minDistance=3,h.maxDistance=420,h.maxPolarAngle=Math.PI*.485,h.screenSpacePanning=!0,h.zoomSpeed=.8,h.rotateSpeed=.55,h.update(),Cg();let d,u={glass:.5,glassLight:.55,districtGlass:.75,roofGlass:.7,water:1.1,solar:.6,metal:.8,copper:.7,dark:.5,black:.45,pump:.6,pipe:.65,paintBlue:.55,hydrant:.4};function f(){let he=new be.PMREMGenerator(o),xe=new nd,Me=he.fromScene(xe,.03);d?.dispose(),d=Me,l.environment=Me.texture;for(let[Be,ut]of Object.entries(u))ht[Be]&&(ht[Be].envMap=Me.texture,ht[Be].envMapIntensity=ut,ht[Be].needsUpdate=!0);xe.dispose(),he.dispose()}f(),l.environmentIntensity=.63,l.environmentRotation.set(0,.7,0);let p=new be.HemisphereLight("#dfeaf3","#7b8065",1.55);l.add(p);let x=new be.DirectionalLight("#fff0d6",2.45);x.position.set(-90,105,65),x.castShadow=!0,x.shadow.mapSize.set(4096,4096),Object.assign(x.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340}),x.shadow.normalBias=.08,x.shadow.bias=-8e-5,x.shadow.radius=2.6,l.add(x),l.add(x.target);let m=new be.DirectionalLight("#bad4e1",.6);m.position.set(80,50,-95),l.add(m);let g=new be.Mesh(new be.PlaneGeometry(2200,2200),new be.MeshStandardMaterial({color:"#d7d6cb",roughness:.94}));g.rotation.x=-Math.PI/2,g.position.y=-2.1,g.receiveShadow=!0,l.add(g);let y=vt(l,"lailin-campus"),w=Ig(y),_=Dg(y),{assets:S,animations:b}=Ug(y,Lailin.catalog);w.forEach(he=>{he.userData.layer="architecture",Rc(he)}),_.forEach(he=>Rc(he));for(let he of S.values()){for(let Me of[...he.children])Me.isGroup&&!Me.userData.dynamic&&Rc(Me);let xe=he.children.filter(Me=>Me.isGroup);xe.forEach(Me=>Me.userData.dynamic=!0),Rc(he),xe.forEach(Me=>{b.some(Be=>Be.object===Me)||(Me.userData.dynamic=!1)})}y.updateMatrixWorld(!0),e.groups=[];let P=0,M=0;for(let he of y.children){let xe=he.userData.assetId?a(he):new be.Box3().setFromObject(he);e.groups.push({name:he.name,assetId:he.userData.assetId||null,layer:he.userData.layer,min:xe.min.toArray(),max:xe.max.toArray(),center:xe.getCenter(Ut()).toArray()})}y.traverse(he=>{he.isMesh&&(M++,P+=(he.geometry.index?he.geometry.index.count:he.geometry.attributes.position.count)/3*(he.isInstancedMesh?he.count:1))}),e.stats={triangles:P,groups:e.groups.length,assets:S.size,meshes:M};let A=new be.Group;A.name="selection-indicator",l.add(A);let D=new be.LineBasicMaterial({color:"#cf9556",transparent:!0,opacity:.88,depthTest:!1}),F=new be.Mesh(new be.CylinderGeometry(5,5.03,.35,96),new be.MeshStandardMaterial({color:"#c6cbbf",roughness:.76,metalness:.08}));F.visible=!1,l.add(F),F.receiveShadow=!0,F.castShadow=!0;let G=new be.PointLight("#ffd49b",0,15,2);G.position.set(35,7,30),l.add(G);let $=new be.WebGLRenderTarget(100,100,{type:be.HalfFloatType,samples:Math.min(4,o.capabilities.maxSamples)}),N=new sd(o,$);N.addPass(new rd(l,c));let X=new Uc(l,c,100,100);X.blendIntensity=.7,X.updateGtaoMaterial({radius:1.6,thickness:1.4,distanceExponent:1.3,distanceFallOff:1,samples:8,scale:1,screenSpaceRadius:!1}),N.addPass(X);let ee=new ro(new be.Vector2(64,64),0,.35,.92);ee.enabled=!1,N.addPass(ee),N.addPass(new ld);let K=new Pr(Vg);N.addPass(K);let fe=new Pr({uniforms:{tDiffuse:{value:null},night:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse; uniform float night; varying vec2 vUv; void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;c=mix(c,c*vec3(.97,1.005,1.03),night);gl_FragColor=vec4(c,1.);}"});N.addPass(fe);let Z={lost:!1,theta:h.getAzimuthalAngle()},ne=null,re=!1,Ae=!1,Re=!1,R=0,U=0,k=0,z=null,H=!1,ie=0,de=!1,ve=0,ze=performance.now(),mt=0,ce=0,ge=0,ye=!0,pe=!0,Se=!1,Ke=0,Xe=null,Qe=matchMedia("(prefers-reduced-motion: reduce)").matches,it=new Set,V=new Map,O=new Map,te=[];for(let he of S.values())he.traverse(xe=>{xe.userData.explode&&(te.push(xe),O.set(xe,xe.position.clone()),xe.userData.restPosition=xe.position.toArray())});for(let he of b)he.object.userData.restRotation=he.object.rotation.toArray();let T=document.createElement("div");T.className="part-labels",s.parentElement.append(T);let v={"motor-and-coupling":["1","\u7535\u673A\u4E0E\u98CE\u6247\u7F69"],"shaft-coupling":["2","\u5F39\u6027\u8054\u8F74\u5668"],"cast-volute":["3","\u8717\u58F3\u4E0E\u8FDB\u51FA\u53E3\u6CD5\u5170"]},I=new Map;for(let[he,[xe,Me]]of Object.entries(v)){let Be=document.createElement("div");Be.className="part-label",Be.innerHTML=`<span class="tag"><b>${xe}</b>${Me}</span><i class="stem"></i>`,T.append(Be),I.set(he,Be)}function B(){if(U>=700)return{position:[146,125,189],target:[-12,1,11]};let he=204/(2*Math.tan(be.MathUtils.degToRad(c.fov/2))*c.aspect)*1.1;return{position:Ut(.58,.5,.65).normalize().multiplyScalar(he).toArray(),target:[0,0,0]}}function q(){let he=s.clientWidth,xe=s.clientHeight;if(he<1||xe<1||he===U&&xe===k)return;U=he,k=xe,o.setSize(he,xe,!1),c.aspect=he/xe;let Me=he<700;if(c.fov=Me?46:34,c.updateProjectionMatrix(),h.maxDistance=Me?1100:420,l.fog.near=Me?850:380,l.fog.far=Me?1600:820,Xe!==Me&&!re){z=null,ae();let ut=B();c.position.fromArray(ut.position),h.target.fromArray(ut.target),h.update()}Xe=Me,N.setSize(he,xe);let Be=o.getPixelRatio();X.setSize(Math.round(he*Be*.55),Math.round(xe*Be*.55)),ee.setSize(Math.round(he*Be*.5),Math.round(xe*Be*.5)),K.material.uniforms.resolution.value.set(1/(he*Be),1/(xe*Be)),pe=!0}let me=new ResizeObserver(q);me.observe(s),q();function ae(){if(H){let xe=document.getElementById("view-label");xe&&(xe.textContent="\u900F\u89C6")}H=!1,document.body.classList.remove("touring");let he=document.getElementById("tour-button");he?.classList.remove("active"),he?.setAttribute("aria-pressed","false")}function J(he,xe,Me=1600){ae(),z={from:c.position.clone(),to:Ut(...he),start:performance.now(),duration:Qe?1:Me,fromTarget:h.target.clone(),target:Ut(...xe)},pe=!0}function le(){for(let he of y.children)he.visible=(!re||he.userData.assetId===ne)&&!it.has(he.userData.layer);A.visible=!!ne&&!H,o.shadowMap.needsUpdate=!0}function we(he=null,xe=0){if(he){let Me=Math.max(3,xe*1.5);x.position.copy(he).add(Ut(-Me*4.5,Me*5.25,Me*3.25)),x.target.position.copy(he),Object.assign(x.shadow.camera,{left:-Me,right:Me,top:Me,bottom:-Me,near:.1,far:Me*14}),x.shadow.normalBias=.015,x.shadow.bias=-3e-5}else x.position.set(-90,105,65),x.target.position.set(0,0,0),Object.assign(x.shadow.camera,{left:-122,right:122,top:105,bottom:-105,near:1,far:340}),x.shadow.normalBias=.08,x.shadow.bias=-8e-5;x.shadow.camera.updateProjectionMatrix(),o.shadowMap.needsUpdate=!0}function Ye(he){if(!S.has(he))return;ne=he,A.traverse(hi=>hi.geometry?.dispose()),A.clear();let xe=a(S.get(he)),Me=[],Be=.18,ut=xe.min.x-Be,Bt=xe.max.x+Be,He=xe.min.z-Be,ot=xe.max.z+Be,an=xe.min.y+.015,dn=Math.min(.6,(Bt-ut)*.15);for(let[hi,Ai,C,W]of[[ut,He,1,1],[Bt,He,-1,1],[Bt,ot,-1,-1],[ut,ot,1,-1]])Me.push(Ut(hi+C*dn,an,Ai),Ut(hi,an,Ai),Ut(hi,an,Ai),Ut(hi,an,Ai+W*dn));let xn=new be.BufferGeometry().setFromPoints(Me);A.add(new be.LineSegments(xn,D)),le()}function Ee(he=!1){if(re=!1,de=!1,F.visible=!1,g.position.y=-2.1,we(),le(),he){let xe=Math.tan(be.MathUtils.degToRad(c.fov/2)),Me=Math.max(164/(2*xe*c.aspect),124/(2*xe))*1.12;J([0,Me,.01],[0,0,0])}else{let xe=B();J(xe.position,xe.target,1800)}document.getElementById("explode-device")?.classList.remove("active")}function Te(he,xe=!1){if(!S.has(he))return;ne=he,re=xe,de=!1;for(let dn of te)dn.position.copy(O.get(dn));le();let Me=a(S.get(he)),Be=Me.getCenter(Ut()),ut=Me.getSize(Ut()),Bt=Math.max(ut.x,ut.y,ut.z)*(xe?2.05:4.4),He=Be.clone();He.y-=xe?ut.y*.27:0,F.visible=xe;let ot=Math.max(ut.x,ut.z)/6.8;F.scale.setScalar(ot),F.position.set(Be.x,Me.min.y-.35*ot/2-.008,Be.z),g.position.y=xe?Me.min.y-.35*ot-.015:-2.1,we(xe?Be:null,Math.max(ut.x,ut.y,ut.z));let an=U<700;J([Be.x+Bt*.86,Be.y+Bt*.6,Be.z+Bt*1.03],He.toArray(),1700),Ye(he),an&&h.target.copy(He)}function Ge(he){Ae=!!he,pe=!0,o.shadowMap.needsUpdate=!0}let $e={normal:"#628e65",alarm:"#ce593c",warning:"#d2a14f",offline:"#788882",unknown:"#788882"};function rt(he){for(let xe of he){V.set(xe.id,xe);let Me=S.get(xe.id);Me&&(Me.userData.status=xe.status,Me.traverse(Be=>{if(Be.userData.indicator){let ut=$e[xe.status]||$e.unknown;Be.material.color.set(ut),Be.material.emissive.set(ut),Be.material.emissiveIntensity=xe.status==="offline"?0:.65}})),xe.id===ne&&D.color.set($e[xe.status]||$e.normal)}pe=!0}let Y=new be.Raycaster,Pe=new be.Vector2,ue=null;function Ie(he){if(!ue||Math.hypot(he.clientX-ue.x,he.clientY-ue.y)>5||he.button!==0)return;let xe=s.getBoundingClientRect();Pe.set((he.clientX-xe.left)/xe.width*2-1,-(he.clientY-xe.top)/xe.height*2+1),Y.setFromCamera(Pe,c);let Me=Y.intersectObjects(y.children,!0);for(let Be of Me){let ut=Be.object;if(!ut.visible||ut.userData.nonPhysical||ut.material?.clippingPlanes?.some(ot=>ot.distanceToPoint(Be.point)<0))continue;let Bt=!0;for(let ot=ut.parent;ot;ot=ot.parent)ot.visible||(Bt=!1);if(!Bt)continue;let He;for(let ot=ut;ot&&ot!==y;ot=ot.parent)if(ot.userData.assetId){He=ot.userData.assetId;break}He&&n(He);break}}let Ue=he=>{ue={x:he.clientX,y:he.clientY},z=null,ae()};s.addEventListener("pointerdown",Ue),s.addEventListener("pointerup",Ie);let _e=()=>{z=null,ae(),pe=!0};h.addEventListener("start",_e),h.addEventListener("change",()=>pe=!0);let et=he=>{he.preventDefault(),Z.lost=!0,cancelAnimationFrame(R),d=void 0,l.environment=null,r("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\u3002\u8BBE\u5907\u6570\u636E\u4ECD\u53EF\u4F7F\u7528\uFF1B\u6062\u590D\u540E\u4F1A\u81EA\u52A8\u91CD\u5EFA\u753B\u9762\u3002")},qe=()=>{try{f(),Z.lost=!1,pe=!0,o.shadowMap.needsUpdate=!0,ze=performance.now(),R=requestAnimationFrame(wt)}catch{Z.lost=!0,r("\u56FE\u5F62\u6062\u590D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8F7D\u5165\u3002\u8BBE\u5907\u6570\u636E\u4ECD\u53EF\u4F7F\u7528\u3002")}};s.addEventListener("webglcontextlost",et),s.addEventListener("webglcontextrestored",qe);function Dt(he){let xe=Ae?1:0;ve=Qe?xe:be.MathUtils.damp(ve,xe,3,he);let Me=ve;l.background.set("#cdd9d9").lerp(new be.Color("#3c5665"),Me),l.fog.color.copy(l.background),g.material.color.set("#d7d6cb").lerp(new be.Color("#46616b"),Me),x.intensity=be.MathUtils.lerp(3.35,.38,Me),x.color.set("#fff0d9").lerp(new be.Color("#bfdcf7"),Me),p.intensity=be.MathUtils.lerp(.5,.32,Me),m.intensity=be.MathUtils.lerp(.18,.55,Me),l.environmentIntensity=be.MathUtils.lerp(.16,.3,Me);for(let[Be,ut]of Object.entries(u))ht[Be]&&(ht[Be].envMapIntensity=ut*be.MathUtils.lerp(1,.6,Me));ht.lamp.emissiveIntensity=be.MathUtils.lerp(.5,3,Me),ht.amber.emissiveIntensity=be.MathUtils.lerp(.05,1.3,Me),ht.glass.emissive.set("#af7540"),ht.glass.emissiveIntensity=Me*.025,ht.windowLight&&(ht.windowLight.emissiveIntensity=Me*1.6),G.intensity=Me*80,fe.uniforms.night.value=Me,ee.strength=Me*.42,ee.enabled=ye&&Me>.02;for(let[Be,ut]of S){if(!Be.startsWith("LGT"))continue;let Bt=V.get(Be),He=Bt?.powered&&Bt?.status!=="offline";ut.traverse(ot=>{ot.userData.lightPool&&(ot.material.opacity=Me*(He?.28:0)),ot.userData.luminaire&&(ot.material.emissiveIntensity=He?be.MathUtils.lerp(.5,3,Me):0)})}}function wt(he){if(Re||Z.lost)return;if(R=requestAnimationFrame(wt),document.hidden){ze=he;return}let xe=he-ze,Me=Math.min(xe/1e3,.06);if(ze=he,z){let He=Math.min(1,(he-z.start)/z.duration),ot=He*He*He*(He*(He*6-15)+10);c.position.lerpVectors(z.from,z.to,ot),h.target.lerpVectors(z.fromTarget,z.target,ot),He===1&&(z=null),pe=!0}if(H&&!Qe){ie+=Me;let He=[{p:[146,125,189],t:[-12,1,11],name:"\u56ED\u533A\u5168\u666F"},{p:[8,40,92],t:[-32,7,23],name:"1# \u7814\u53D1\u4E2D\u5FC3"},{p:[89,36,87],t:[34,3,23],name:"4# \u80FD\u6E90\u4E2D\u5FC3"},{p:[121,72,-98],t:[3,6,-23],name:"2# 3# \u751F\u4EA7\u8F66\u95F4"}],ot=Math.floor(ie/13)%He.length,an=He[ot],dn=He[(ot+1)%He.length],xn=Math.max(0,Math.min(1,(ie%13-2)/11)),hi=xn*xn*xn*(xn*(xn*6-15)+10);c.position.lerpVectors(Ut(...an.p),Ut(...dn.p),hi),h.target.lerpVectors(Ut(...an.t),Ut(...dn.t),hi),U<700&&c.position.sub(h.target).multiplyScalar(1.9).add(h.target);let Ai=document.getElementById("view-label");Ai&&(Ai.textContent="\u955C\u5934\u5DE1\u6E38 \xB7 "+(xn<.5?an.name:dn.name)),pe=!0}h.update(),Z.theta=h.getAzimuthalAngle();let Be=Math.max(.045,Math.min(3,c.position.distanceTo(h.target)/70));Math.abs(c.near-Be)>.01&&(c.near=Be,c.updateProjectionMatrix(),pe=!0),Dt(Me);for(let He of b){let ot=V.get(He.assetId),an=ot&&ot.status!=="offline"&&ot.powered!==!1;if(He.gate){let dn=ot?.controlState==="open"?He.sign*1.47:0,xn=He.object.rotation.z;He.object.rotation.z=be.MathUtils.damp(xn,dn,3,Me),Math.abs(xn-He.object.rotation.z)>.001&&(o.shadowMap.needsUpdate=!0,pe=!0)}else an&&!Qe&&(!re||ne===He.assetId)&&(He.object.rotation[He.axis]+=Me*He.speed)}for(let He of te){let ot=O.get(He),an=de&&He.parent.userData.assetId===ne?Ut(...He.userData.explode):Ut(),dn=ot.clone().add(an);He.position.lerp(dn,1-Math.exp(-5*Me))}de&&(o.shadowMap.needsUpdate=!0);let ut=Math.abs(ve-(Ae?1:0))>.001,Bt=(re||c.position.distanceTo(h.target)<65)&&b.some(He=>!He.gate&&He.assetId===ne&&V.get(He.assetId)?.status!=="offline");if(pe||z||H||ut||Bt||de){o.info.reset(),N.render(),Ke=o.info.render.calls,i(),T.hidden=!de||!re;for(let He of te){if(He.parent.userData.assetId!==ne)continue;let ot=I.get(He.name);if(!ot)continue;let an=new be.Box3().setFromObject(He),dn=an.getCenter(Ut());dn.y=an.max.y+.2;let xn=On(dn.toArray());ot.hidden=!xn.visible,ot.style.left=xn.x+"px",ot.style.top=xn.y+"px"}pe=!1,ge+=xe,ce++,ce===30&&(mt=ge/ce,ge=0,ce=0)}}o.shadowMap.needsUpdate=!0,R=requestAnimationFrame(wt);function On(he){let xe=Ut(...he).project(c);return{x:(xe.x*.5+.5)*U,y:(-.5*xe.y+.5)*k,visible:xe.z>-1&&xe.z<1&&Number.isFinite(xe.x)}}function ti(){return H?(ae(),!1):(Ee(),z=null,H=!0,ie=0,ne=null,A.visible=!1,document.body.classList.add("touring"),!0)}function cd(){return!re||!ne?!1:(de=!de,o.shadowMap.needsUpdate=!0,de)}function hd(){re=!1,F.visible=!1,g.position.y=-2.1,de=!1,we(),le(),J(U<700?[108,48,110]:[85,34,83],[34,3,23],2e3)}let Oc=y.getObjectByName("building/energy-center"),ao=new be.Plane(Ut(0,-1,0),6.8);function ud(){return Se=!Se,Oc.traverse(he=>{he.isMesh&&(he.userData.sectionMaterial||(he.material=he.material.clone(),he.userData.sectionMaterial=!0),he.material.clippingPlanes=Se?[ao]:[],he.material.clipShadows=!0,he.material.needsUpdate=!0)}),X.enabled=ye&&!Se,o.shadowMap.needsUpdate=!0,pe=!0,Se}async function Bc(){let he=new Fs,xe=y.clone(!0),Me=[];xe.userData={coordinateSystem:"local-meters-y-up",modelVersion:Lailin.catalog.site.version,conceptDesign:!0,assetCount:S.size},xe.traverse(He=>{He.visible=!0,He.userData.nonPhysical&&Me.push(He),He.userData.restPosition&&He.position.fromArray(He.userData.restPosition),He.userData.restRotation&&He.rotation.fromArray(He.userData.restRotation),delete He.userData.status}),Me.forEach(He=>He.removeFromParent()),xe.updateMatrixWorld(!0);let Be=await he.parseAsync(xe,{binary:!0,onlyVisible:!1,trs:!1}),ut=document.createElement("a"),Bt=URL.createObjectURL(new Blob([Be],{type:"model/gltf-binary"}));ut.href=Bt,ut.download="lailin-campus.glb",ut.click(),setTimeout(()=>URL.revokeObjectURL(Bt),1e3)}function zc(){let he=o.getPixelRatio(),xe=Math.min(2,3840/U);try{o.setPixelRatio(xe),N.setPixelRatio(xe),X.setSize(Math.round(U*xe*.65),Math.round(k*xe*.65)),K.material.uniforms.resolution.value.set(1/(U*xe),1/(k*xe)),N.render();let Me=document.createElement("a");Me.download="lailin-campus-"+(re?ne:Ae?"blue-hour":"daylight")+".png",Me.href=s.toDataURL("image/png"),Me.click()}finally{o.setPixelRatio(he),N.setPixelRatio(he),U=0,q(),pe=!0}}function Vi(){if(Re)return;Re=!0,cancelAnimationFrame(R),me.disconnect(),h.dispose(),s.removeEventListener("pointerdown",Ue),s.removeEventListener("pointerup",Ie),s.removeEventListener("webglcontextlost",et),s.removeEventListener("webglcontextrestored",qe);let he=new Set,xe=new Set,Me=new Set;l.traverse(Be=>{Be.geometry&&he.add(Be.geometry);for(let ut of Be.material?Array.isArray(Be.material)?Be.material:[Be.material]:[])xe.add(ut),Object.values(ut).forEach(Bt=>{Bt?.isTexture&&Me.add(Bt)})}),he.forEach(Be=>Be.dispose()),xe.forEach(Be=>Be.dispose()),Me.forEach(Be=>Be.dispose()),d.dispose(),X.dispose(),ee.dispose(),N.dispose(),o.dispose()}return{select:Ye,home:Ee,focus:Te,setNight:Ge,setStates:rt,project:On,capture:zc,exportGLB:Bc,toggleExplode:cd,toggleTour:ti,energyView:hd,toggleSection:ud,render:()=>{q(),pe=!0},setLayer:(he,xe)=>{xe?it.delete(he):it.add(he),le()},quality:he=>{ye=he,X.enabled=he&&!Se;for(let xe of[N.renderTarget1,N.renderTarget2]){let Me=he?Math.min(4,o.capabilities.maxSamples):0;xe.samples!==Me&&(xe.samples=Me,xe.dispose())}o.setPixelRatio(he?Math.min(devicePixelRatio,1.5):1),N.setPixelRatio(o.getPixelRatio()),x.shadow.mapSize.set(he?4096:2048,he?4096:2048),x.shadow.map?.dispose(),x.shadow.map=null,o.shadowMap.needsUpdate=!0,U=0,q()},dispose:Vi,get night(){return Ae},get isolated(){return re},get state(){return{...Z,distance:c.position.distanceTo(h.target),triangles:e.stats.triangles,drawCalls:Ke,frameMS:mt,high:ye,exploded:de,section:Se}},debug:{scene:l,camera:c,controls:h,assets:S,meta:e,renderer:o,composer:N,ao:X}}}(globalThis.Lailin||={}).viewer={create:_b};(globalThis.Lailin||={}).chart=(s,e,t)=>{let n="http://www.w3.org/2000/svg",i=Math.max(240,s.clientWidth||300),r=Math.max(65,s.clientHeight||96);s.replaceChildren(),s.setAttribute("viewBox",`0 0 ${i} ${r}`);let a=(S,b,P)=>{let M=document.createElementNS(n,S);return Object.entries(b).forEach(([A,D])=>M.setAttribute(A,D)),P!==void 0&&(M.textContent=P),s.append(M),M},o=e.points.filter(S=>S.value!==null).map(S=>S.value);if(!o.length)return;let l=28,c=4,h=8,d=18,u=i-l-c,f=r-h-d,p=Math.min(...o),x=Math.max(...o);t.alarm!==null&&t.alarm<x*1.5&&(x=Math.max(x,t.alarm));let m=Math.max((x-p)*.2,2);p=Math.max(t.range[0],p-m),x+=m;let g=S=>l+(S-e.from)/(e.to-e.from)*u,y=S=>h+(x-S)/(x-p)*f;for(let S=0;S<3;S++){let b=p+(x-p)*S/2,P=y(b);a("line",{x1:l,y1:P,x2:i-c,y2:P,class:"chart-grid"}),a("text",{x:l-6,y:P+4,"text-anchor":"end",class:"chart-text"},Number(b.toFixed(0)).toString())}t.alarm!==null&&t.alarm>=p&&t.alarm<=x&&(a("line",{x1:l,y1:y(t.alarm),x2:i-c,y2:y(t.alarm),class:"chart-limit"}),a("text",{x:i-c,y:y(t.alarm)-4,"text-anchor":"end",class:"chart-limit-text"},`\u544A\u8B66 ${t.alarm}`));let w=[],_=[];for(let S of e.points)S.value===null?(_.length&&w.push(_),_=[]):_.push(S);_.length&&w.push(_);for(let S of w){let b=S.map((P,M)=>`${M?"L":"M"}${g(P.ts).toFixed(2)},${y(P.value).toFixed(2)}`).join(" ");S.length>1?(a("path",{d:`${b} L${g(S.at(-1).ts)},${r-d} L${g(S[0].ts)},${r-d}Z`,class:"chart-area"}),a("path",{d:b,class:"chart-line"})):a("circle",{cx:g(S[0].ts),cy:y(S[0].value),r:1.5,class:"chart-dot"})}for(let S=0;S<3;S++){let b=e.from+(e.to-e.from)*S/2;a("text",{x:g(b),y:r-2,"text-anchor":S===0?"start":S===2?"end":"middle",class:"chart-text"},new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1}))}s.setAttribute("aria-label",`${e.deviceId} ${e.metric}\uFF0C${e.sampleCount} \u4E2A\u6709\u6548\u6837\u672C\uFF0C\u6700\u4F4E ${Math.min(...o)}\uFF0C\u6700\u9AD8 ${Math.max(...o)} ${e.unit}\u3002\u7F3A\u6D4B\u533A\u95F4\u4E0D\u8865\u503C\u3002`)};(globalThis.Lailin||={}).app=(()=>{"use strict";let s=O=>document.getElementById(O),e=O=>Array.from(document.querySelectorAll(O)),t=Lailin.catalog,n=globalThis.LAILIN_LIVE?null:globalThis.LAILIN_PREVIEW||null,i=O=>String(O??"").replace(/[&<>"']/g,te=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[te]),r={normal:"\u6B63\u5E38",warning:"\u9884\u8B66",alarm:"\u544A\u8B66",offline:"\u79BB\u7EBF",unknown:"\u672A\u77E5"},a={open:"\u5F85\u786E\u8BA4",acknowledged:"\u5DF2\u786E\u8BA4",resolved:"\u5DF2\u6062\u590D"},o=(O,te=1)=>typeof O=="number"&&Number.isFinite(O)?O.toLocaleString("zh-CN",{maximumFractionDigits:te,minimumFractionDigits:te}):"\u2014",l=(O,te=!1)=>O?new Date(O).toLocaleString("zh-CN",te?{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}:{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}):"\u6682\u65E0",c={latency:["\u94FE\u8DEF\u5EF6\u65F6","ms"],fps:["\u5E27\u7387","fps"],bitrate:["\u7801\u7387","Mbps"],power:["\u6709\u529F\u529F\u7387","kW"],voltage:["\u7535\u538B","V"],current:["\u7535\u6D41","A"],temperature:["\u6E29\u5EA6","\xB0C"],rpm:["\u98CE\u673A\u8F6C\u901F","rpm"],flow:["\u6D41\u91CF","m\xB3/h"],pressure:["\u538B\u529B","MPa"],humidity:["\u76F8\u5BF9\u6E7F\u5EA6","%"],wind:["\u98CE\u901F","m/s"],cycles:["\u7D2F\u8BA1\u901A\u884C","\u6B21"],position:["\u95F8\u6746\u72B6\u6001",""]},h={selected:"PMP-01",snapshot:null,devices:new Map(t.assets.map(O=>[O.id,{...O,status:"unknown",metrics:{},quality:"missing"}])),session:{authenticated:!1},view:"scene",status:"all",type:"all",zone:"all",query:"",hours:1,history:null,labels:!0,alarmFilter:"active",received:0,connected:!1,preview:!!n,loginNext:null},d=globalThis.LAILIN_SOURCE_LABEL||"\u7F51\u5173\u63A5\u5165 \xB7 \u6765\u6E90\u5F85\u6838\u9A8C",u=null,f=null,p=null,x=0,m=null,g=null,y=!1,w=!1,_=new Map,S=new Map,b=[],P=[];function M(O,te=!1){let T=document.createElement("div");T.className=`toast${te?" error":""}`,T.textContent=O,s("toasts").append(T),setTimeout(()=>T.remove(),6e3)}function A(O){M(O.message||String(O),!0)}async function D(O,{method:te="GET",body:T,headers:v={},signal:I}={}){let B=new AbortController,q=setTimeout(()=>B.abort(),8e3),me=()=>B.abort();I?.addEventListener("abort",me,{once:!0});try{let ae=await fetch(`/api${O}`,{method:te,credentials:"same-origin",signal:B.signal,headers:{...T?{"Content-Type":"application/json"}:{},...te!=="GET"&&h.session.csrfToken?{"X-CSRF-Token":h.session.csrfToken}:{},...v},...T?{body:JSON.stringify(T)}:{}}),J;try{J=await ae.json()}catch{throw new Error(`\u670D\u52A1\u54CD\u5E94\u683C\u5F0F\u65E0\u6548\uFF08HTTP ${ae.status}\uFF09`)}if(!ae.ok){let le=new Error(J.error?.message||`\u670D\u52A1\u9519\u8BEF ${ae.status}`);throw le.code=J.error?.code,le.status=ae.status,le.requestId=J.error?.requestId,le.status===401&&(h.session={authenticated:!1},F()),le}return J}catch(ae){throw ae.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6\u6216\u5DF2\u53D6\u6D88\uFF0C\u672A\u5C06\u64CD\u4F5C\u6807\u8BB0\u4E3A\u6210\u529F\u3002"):ae}finally{clearTimeout(q),I?.removeEventListener("abort",me)}}function F(){let O=!!h.session.authenticated,te=O?globalThis.LAILIN_SOURCE_LABEL?"\u64CD\u4F5C\u5458 \xB7 \u544A\u8B66\u786E\u8BA4":"\u64CD\u4F5C\u5458 \xB7 \u6A21\u62DF\u63A7\u5236":n?"\u8BBF\u5BA2 \xB7 \u53EA\u8BFB":"\u8BBF\u5BA2 \xB7 \u767B\u5F55";s("user-label").textContent=te,s("login-button").setAttribute("aria-label",te),s("login-button").title=O?`${te} \xB7 \u70B9\u51FB\u9000\u51FA`:`${te} \xB7 \u70B9\u51FB\u767B\u5F55`,s("demo-credentials").hidden=h.session.demo===!1,s("mobile-account")&&(s("mobile-account").textContent=O?"\u9000\u51FA":"\u767B\u5F55")}function G(O){if(n){M("\u5F53\u524D\u4E3A\u79BB\u7EBF\u53EA\u8BFB\u9884\u89C8\u3002\u8FD0\u884C\u5B8C\u6574\u9879\u76EE\u540E\u53EF\u767B\u5F55\u3001\u786E\u8BA4\u544A\u8B66\u548C\u6267\u884C\u6A21\u62DF\u63A7\u5236\u3002");return}if(h.session.authenticated){O();return}h.loginNext=O,s("login-error").textContent="",s("login-dialog").showModal(),s("login-password").focus()}function $({title:O,description:te,note:T=!1,label:v="\u786E\u8BA4",callback:I}){g=I,s("confirm-title").textContent=O,s("confirm-description").textContent=te,s("confirm-note-label").hidden=!T,s("confirm-note").value="",s("confirm-submit").textContent=v,s("confirm-dialog").showModal()}function N(){let O=!h.connected||Date.now()-h.received>8500;s("data-source").textContent=n?"\u6A21\u62DF\u5FEB\u7167":globalThis.LAILIN_SOURCE_LABEL?d:O?"\u6A21\u62DF \xB7 \u672A\u540C\u6B65":"\u6A21\u62DF \xB7 SSE",s("data-source").parentElement.classList.toggle("stale",!n&&O),s("data-source").parentElement.title=n?"\u79BB\u7EBF\u53EA\u8BFB\u9884\u89C8\uFF0C\u56FA\u5B9A\u6A21\u62DF\u5FEB\u7167\uFF1B\u65F6\u95F4\u4E3A\u5FEB\u7167\u91C7\u6837\u65F6\u95F4":O?"\u6570\u636E\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u4FDD\u7559\u6700\u540E\u5FEB\u7167":"\u5B9E\u65F6\u6A21\u62DF\u6570\u636E\u5DF2\u8FDE\u63A5",s("clock").textContent=n?h.snapshot?l(h.snapshot.serverTime,!0):"\u2014":l(Date.now(),!0),s("connection-banner").hidden=!O||!!n,O&&!n&&(s("connection-message").textContent="\u65E0\u6CD5\u83B7\u53D6\u6700\u65B0\u72B6\u6001\u3002\u663E\u793A\u6700\u540E\u5FEB\u7167\uFF0C\u4E0D\u5C06\u8FDE\u63A5\u4E2D\u65AD\u8BEF\u5224\u4E3A\u8BBE\u5907\u79BB\u7EBF\u3002")}function X(){if(!f)return;let O=new Set(t.assets.map(B=>B.id)),te=f.groups.filter(B=>B.assetId),T=new Set(te.map(B=>B.assetId)),v=new Set(h.devices.keys()),I=te.length===O.size&&T.size===O.size&&[...O].every(B=>T.has(B)&&v.has(B))&&v.size===O.size;if(s("binding-status").textContent=I?`${T.size}/${O.size} \u8D44\u4EA7\u8282\u70B9\u5DF2\u6821\u9A8C`:"\u8D44\u4EA7\u4E0E\u6A21\u578B\u4E0D\u4E00\u81F4\uFF0C\u5DF2\u963B\u6B62\u9519\u7ED1",!I)throw new Error("\u8D44\u4EA7\u4E0E\u4E09\u7EF4\u6A21\u578B\u7684\u552F\u4E00\u7F16\u53F7\u4E0D\u4E00\u81F4\u3002\u8BF7\u68C0\u67E5\u76EE\u5F55\u548C\u6A21\u578B\u7248\u672C\u3002")}function ee(O){if(O?.dataHealthy===!1){h.connected=!1,N();return}if(!O||!Array.isArray(O.devices)||!O.summary||!Number.isFinite(O.serverTime))throw new Error("\u670D\u52A1\u5FEB\u7167\u7ED3\u6784\u65E0\u6548");if(!Number.isSafeInteger(O.version)||O.version<0||!n&&typeof O.bootId!="string")throw new Error("\u670D\u52A1\u6570\u636E\u7248\u672C\u65E0\u6548\uFF0C\u4FDD\u7559\u6700\u540E\u4E00\u6B21\u5B8C\u6574\u5FEB\u7167\u3002");let te=new Set(t.assets.map(I=>I.id));if(O.devices.length!==te.size||O.devices.some(I=>!te.delete(I.id))||te.size)throw new Error("\u670D\u52A1\u8D44\u4EA7\u76EE\u5F55\u4E0E\u6A21\u578B\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u5DF2\u62D2\u7EDD\u5E94\u7528\u5FEB\u7167\u3002");if(h.snapshot&&O.bootId===h.snapshot.bootId&&O.version<h.snapshot.version)return;let T=new Map(t.assets.map(I=>[I.id,I])),v=O.devices.map(I=>{let B=T.get(I.id),q=t.types[B.type].metric;if(!Object.hasOwn(r,I.status)||!["good","stale","missing"].includes(I.quality)||!I.metrics||Array.isArray(I.metrics)||typeof I.metrics!="object"||Object.values(I.metrics).some(me=>typeof me!="number"||!Number.isFinite(me))||!Number.isSafeInteger(I.seq)||I.seq<0)throw new Error("\u8BBE\u5907\u91C7\u6837\u5B57\u6BB5\u65E0\u6548\uFF0C\u5DF2\u62D2\u7EDD\u8986\u76D6\u5F53\u524D\u72B6\u6001\u3002");if(I.quality==="good"&&(!Number.isFinite(I.metrics[q])||!Number.isFinite(I.sampleAt)||!Number.isFinite(I.lastSeen)))throw new Error("\u6709\u6548\u91C7\u6837\u7F3A\u5C11\u4E3B\u6307\u6807\u6216\u65F6\u95F4\u6233\u3002");if(h.snapshot?.bootId===O.bootId&&I.seq<(h.devices.get(I.id)?.seq||0))throw new Error("\u68C0\u6D4B\u5230\u5012\u5E8F\u8BBE\u5907\u91C7\u6837\uFF0C\u4FDD\u7559\u6700\u65B0\u72B6\u6001\u3002");return{...B,status:I.status,quality:I.quality,metrics:{...I.metrics},seq:I.seq,sampleAt:I.sampleAt,lastSeen:I.lastSeen,powered:I.powered,controlState:I.controlState,source:I.source}});if(O.summary.total!==v.length||!Number.isFinite(O.summary.powerKW)||O.summary.online!==v.filter(I=>!["offline","unknown"].includes(I.status)).length)throw new Error("\u8FD0\u884C\u6982\u89C8\u4E0E\u8BBE\u5907\u5FEB\u7167\u4E0D\u4E00\u81F4\u3002");if(!Array.isArray(O.alarms)||O.alarms.some(I=>typeof I.id!="string"||!T.has(I.device_id)||!Object.hasOwn(a,I.state)||!["critical","warning"].includes(I.severity)||!Number.isFinite(I.opened_at)))throw new Error("\u544A\u8B66\u5FEB\u7167\u65E0\u6548\uFF0C\u5DF2\u4FDD\u7559\u6700\u540E\u6709\u6548\u8BB0\u5F55\u3002");h.snapshot={...O,devices:v},h.devices=new Map(v.map(I=>[I.id,I])),h.received=Date.now(),h.connected=!0,u?.setStates(O.devices),Z(),ne(),R(),de(),N(),h.view==="alarms"&&ce(O.alarms||[]),X()}async function K(){if(!n){p?.close(),h.connected=!1,N();try{ee(await D("/bootstrap")),fe()}catch(O){N(),O.status===401?G(()=>K()):A(O)}}}function fe(){n||y||(p?.close(),p=new EventSource("/api/stream"),p.addEventListener("snapshot",O=>{try{ee(JSON.parse(O.data))}catch(te){h.connected=!1,N(),A(te)}}),p.addEventListener("auth-required",()=>{p?.close(),h.connected=!1,h.session={authenticated:!1},F(),N(),s("connection-message").textContent="\u64CD\u4F5C\u5458\u4F1A\u8BDD\u5DF2\u7ED3\u675F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u7EE7\u7EED\u67E5\u770B\u5B9E\u65F6\u6570\u636E\u3002"}),p.onerror=()=>{h.connected=!1,N()})}function Z(){let O=h.snapshot?.summary;if(!O)return;s("open-alarms").classList.toggle("is-alarm",O.activeAlarms>0);let te={"kpi-total":O.total,"kpi-online":O.online,"kpi-alarms":O.activeAlarms,"kpi-ack":O.unacknowledged,"kpi-power":o(O.powerKW,1),"nav-alarm-count":O.activeAlarms,"asset-total":O.total,"filter-all":O.total,"filter-abnormal":O.alarm+O.warning+O.offline,"filter-offline":O.offline};for(let[T,v]of Object.entries(te))s(T).textContent=v}function ne(){let O=[...h.devices.values()].sort((v,I)=>({alarm:0,offline:1,warning:2,normal:3,unknown:4})[v.status]-{alarm:0,offline:1,warning:2,normal:3,unknown:4}[I.status]||v.id.localeCompare(I.id)),te=0,T=0;for(let v of O){let I=_.get(v.id);I||(I=document.createElement("button"),I.type="button",I.className="asset-row",I.dataset.assetId=v.id,I.innerHTML=`<code>${i(v.id)}</code><span><b>${i(v.name)}</b><small>${i(t.types[v.type].label)} \xB7 ${i(v.zoneName)}</small></span><i></i>`,I.onclick=()=>U(v.id),I.ondblclick=()=>H(!1),_.set(v.id,I),s("asset-list").append(I)),I.style.order=String(T++),I.classList.toggle("selected",v.id===h.selected),I.setAttribute("aria-label",`${v.name} ${v.id} ${r[v.status]}`),I.setAttribute("aria-pressed",String(v.id===h.selected)),I.querySelector("i").className=`st-${v.status}`,I.classList.toggle("alarm",v.status==="alarm");let B=(h.type==="all"||v.type===h.type)&&(h.zone==="all"||v.zone===h.zone)&&(h.status==="all"||h.status==="abnormal"&&["alarm","warning","offline"].includes(v.status)||v.status===h.status)&&`${v.name} ${v.id}`.toLowerCase().includes(h.query.toLowerCase());I.hidden=!B,B&&te++}s("list-empty").hidden=te!==0}let re=null,Ae=null,Re="";function R(){let O=h.devices.get(h.selected);if(!O)return;let te=t.types[O.type],T=O.metrics[te.metric],v=n?"preview":h.snapshot?.mode||"pending";if(re!==O.id||Ae!==v){re=O.id,Ae=v,Re=null,s("device-name").textContent=O.name,s("device-subtitle").textContent=`${O.id} \xB7 ${te.label}`,s("metric-name").textContent=te.metricLabel,s("metric-unit").textContent=te.unit,s("trend-unit").textContent=`${te.metricLabel} \xB7 ${te.unit}`,s("device-node").textContent=O.modelNode;let ae=[["\u8D44\u4EA7\u7F16\u53F7",O.id],["\u6240\u5C5E\u5206\u533A",O.zoneName],["\u8BBE\u5907\u5E8F\u5217\u53F7",O.serial],["\u8FD0\u7EF4\u8D23\u4EFB",O.owner],["\u6A21\u578B\u4F4D\u7F6E",O.position.map(J=>Number(J).toFixed(1)).join(", ")+" m"],["\u6570\u636E\u6765\u6E90",v==="gateway"?d:v==="pending"?"\u7B49\u5F85\u6570\u636E\u6E90":"\u6A21\u62DF\u5668 \xB7 \u975E\u5B9E\u7269\u6570\u636E"],["\u5EFA\u8BAE\u534F\u8BAE",O.protocol],["\u8BA1\u5212\u4FDD\u517B",O.maintenanceDue]];O.locationNote&&ae.push(["\u4F4D\u7F6E\u8BF4\u660E",O.locationNote],["\u5386\u53F2\u8303\u56F4",O.historyNote]),s("asset-details").innerHTML=ae.map(([J,le])=>`<dt>${i(J)}</dt><dd>${i(le)}</dd>`).join(""),s("command-status").textContent=""}s("device-status").textContent=r[O.status]||"\u672A\u77E5",s("device-dot").className=`st-${O.status}`,s("device-status").parentElement.classList.toggle("alarm",O.status==="alarm"),s("quality-badge").textContent=O.quality==="good"?"\u6709\u6548\u6837\u672C":O.quality==="stale"?"\u6700\u540E\u6837\u672C\u5DF2\u8FC7\u671F":"\u5C1A\u65E0\u6570\u636E",s("metric-value").textContent=o(T,O.type==="gate"?0:1),document.querySelector(".main-reading").className=`main-reading ${O.status}`;let I=te.alarm!==null?te.alarm*1.3:Math.max(T||1,100);s("reading-fill").style.width=`${Math.max(0,Math.min(100,(T||0)/I*100))}%`,s("warning-threshold").hidden=te.alarm===null,s("warning-threshold").style.left=`${(te.alarm||0)/I*100}%`,s("threshold-caption").textContent=te.alarm!==null?`${O.type==="bench"?"\u53F0\u67B6\u6F14\u793A\u9608\u503C \xB7 ":""}\u9884\u8B66 \u2265 ${te.warning} / \u544A\u8B66 \u2265 ${te.alarm} / \u6062\u590D \u2264 ${te.recovery} ${te.unit}`:"\u7D2F\u8BA1\u901A\u884C\u6307\u6807\uFF0C\u4E0D\u914D\u7F6E\u8D8A\u9650\u544A\u8B66";let B=Object.entries(O.metrics).filter(([ae])=>ae!==te.metric).slice(0,2);s("secondary-readings").innerHTML=B.map(([ae,J])=>{let[le,we]=c[ae]||[ae,""];return ae==="power"&&O.type==="light"&&(we="W"),`<dt>${i(le)}</dt><dd>${ae==="position"?J===1?"\u5DF2\u62AC\u6746":"\u5DF2\u843D\u6746":`${o(J,ae==="pressure"?3:1)} ${i(we)}`}</dd>`}).join(""),s("sample-time").textContent=`${O.status==="offline"?"\u6700\u540E\u6709\u6548\u91C7\u6837":"\u91C7\u6837\u65F6\u95F4"} ${l(O.sampleAt)}${O.source==="simulated"?" \xB7 \u6A21\u62DF":""}`;let q=(h.snapshot?.alarms||[]).filter(ae=>ae.device_id===O.id&&ae.state!=="resolved");s("device-alarm-count").textContent=q.length;let me=q.map(ae=>ae.id+ae.state+ae.severity).join(",");(me!==Re||!s("device-alarms").children.length)&&(Re=me,s("device-alarms").innerHTML=q.length?q.map(ae=>`<div class="alarm-box"><header>${i(ae.rule_code==="OFFLINE"?"\u8BBE\u5907\u5FC3\u8DF3\u8D85\u65F6":te.metricLabel+"\u6301\u7EED\u8D8A\u9650")}<span>${i(l(ae.opened_at))}</span></header><p>${ae.rule_code==="OFFLINE"?"\u901A\u4FE1\u6062\u590D\u540E\u81EA\u52A8\u5173\u95ED\uFF1B\u4E0D\u662F\u4E3B\u52A8\u65AD\u7535\u3002":"\u786E\u8BA4\u53EA\u4EE3\u8868\u5DF2\u77E5\u6089\uFF0C\u6307\u6807\u6062\u590D\u540E\u624D\u5173\u95ED\u3002"}</p>${ae.state==="open"?`<button class="btn" data-ack="${i(ae.id)}">\u786E\u8BA4\u544A\u8B66</button>`:'<span class="acked">\u5DF2\u786E\u8BA4\uFF0C\u6301\u7EED\u89C2\u5BDF</span>'}</div>`).join(""):'<p class="quiet-line">\u65E0\u6D3B\u52A8\u544A\u8B66</p>'),s("control-section").hidden=!["light","gate"].includes(O.type)||h.snapshot?.mode==="gateway",s("device-control").textContent=O.type==="gate"?O.controlState==="open"?"\u843D\u4E0B\u95F8\u6746":"\u62AC\u8D77\u95F8\u6746":O.powered?"\u5173\u95ED\u8DEF\u706F":"\u6253\u5F00\u8DEF\u706F",s("device-control").disabled=O.status==="offline"||O.status==="unknown",s("demo-alarm").disabled=te.alarm===null,s("explode-device").classList.toggle("available",O.type==="pump"),s("demo-tools").hidden=h.snapshot?.mode==="gateway"}function U(O){h.devices.has(O)&&(h.selected=O,u?.isolated?H(!0):u?.select(O),document.body.classList.remove("panel-hidden","assets-open"),ne(),R(),de(),ze())}function k(O,te){s("view-name").textContent=O,s("view-label").textContent=te}function z(O){for(let te of["view-home","view-top","view-energy"])s(te).classList.toggle("active",te===O)}function H(O){if(!u)return;u.focus(h.selected,O);let te=h.devices.get(h.selected);k(`${te.id} ${te.name}`,O?"\u5355\u72EC\u67E5\u770B \xB7 \u7C73\u5236\u6BD4\u4F8B":"\u5B9A\u4F4D"),document.body.classList.toggle("isolated",O),s("isolate-device").textContent=O?"\u8FD4\u56DE\u56ED\u533A":"\u5355\u72EC\u67E5\u770B",z(null),ve()}function ie(O=!1){document.body.classList.remove("energy-view"),u?.home(O),document.body.classList.remove("isolated"),k(O?"\u56ED\u533A\u5E73\u9762":"\u56ED\u533A\u5168\u666F",O?"\u4FEF\u89C6":"\u900F\u89C6"),s("isolate-device").textContent="\u5355\u72EC\u67E5\u770B",s("explode-device").textContent="\u5C55\u5F00\u7ED3\u6784",z(O?"view-top":"view-home"),ve()}function de(){if(!f)return;let O=new Set([h.selected,...[...h.devices.values()].filter(te=>["alarm","warning","offline"].includes(te.status)).map(te=>te.id),"EV-03","AHU-03","GAT-01"]);for(let te of O){let T=S.get(te);T||(T=document.createElement("button"),T.type="button",T.dataset.assetMarker=te,T.onclick=()=>U(te),s("scene-markers").append(T),S.set(te,T));let v=h.devices.get(te);T.className=`marker ${v.status}${te===h.selected?" selected":""}`;let I=t.types[v.type],B=v.metrics[I.metric],q=v.status==="offline"||v.quality!=="good"?r[v.status]:["alarm","warning"].includes(v.status)?`${r[v.status]} ${o(B,v.type==="gate"?0:1)} ${I.unit}`:`${o(B,v.type==="gate"?0:1)} ${I.unit}`;T.innerHTML=`<span class="tag">${i(te)}${te===h.selected||["alarm","warning","offline"].includes(v.status)?`<span>${i(q)}</span>`:""}</span><i class="stem"></i><i class="foot"></i>`,T.setAttribute("aria-label",`\u9009\u62E9 ${v.name}\uFF0C${r[v.status]}`)}for(let[te,T]of S)O.has(te)||(T.remove(),S.delete(te));ve()}function ve(){if(!u)return;let O=s("viewport").clientWidth,te=s("viewport").clientHeight,T=[];for(let[v,I]of[...S].sort(([B],[q])=>+(q===h.selected)-+(B===h.selected))){let B=f.groups.find(me=>me.assetId===v);if(!B)continue;let q=u.project([B.center[0],B.max[1]+.15,B.center[2]]);if(I.hidden=!h.labels||!q.visible||q.x<24||q.x>O-24||q.y<25||q.y>te-48||u.isolated&&v!==h.selected,!I.hidden){let me=I.offsetWidth;T.some(J=>Math.abs(J.x-q.x)<(me+J.w)/2+8&&Math.abs(J.y-q.y)<30)&&v!==h.selected?I.hidden=!0:T.push({...q,w:me})}I.style.left=`${q.x}px`,I.style.top=`${q.y}px`}for(let{el:v,position:I}of b){let B=u.project(I);v.hidden=!h.labels||!B.visible||B.x<10||B.x>O-10||B.y<20||B.y>te-45,v.style.left=`${B.x}px`,v.style.top=`${B.y}px`}s("compass-needle").style.transform=`rotate(${-u.state.theta*180/Math.PI}deg)`}async function ze(){let O=++x,te=h.selected,T=h.devices.get(te);if(!T)return;m?.abort(),m=new AbortController;let v=n?n.snapshot.serverTime:Date.now(),I=v-h.hours*36e5,B=h.history?.deviceId===te&&Math.abs(h.history.to-h.history.from-h.hours*36e5)<1e3?h.history:null;s("chart-message").hidden=!!B,s("chart-message").textContent="\u8BFB\u53D6\u5386\u53F2\u8BB0\u5F55\u2026",B||s("trend-chart").replaceChildren();try{let q;if(n){let ae=n.histories[te];q={...ae,from:I,to:v,points:ae.points.filter(J=>J.ts>=I&&J.ts<=v)},q.sampleCount=q.points.reduce((J,le)=>J+le.count,0)}else q=await D(`/devices/${te}/history?from=${I}&to=${v}&buckets=${h.hours===1?60:120}`,{signal:m.signal});if(O!==x)return;if(q.deviceId!==te||q.metric!==t.types[T.type].metric||q.unit!==t.types[T.type].unit||q.from!==I||q.to!==v||!Array.isArray(q.points)||q.points.length>500||q.points.some((ae,J)=>!Number.isFinite(ae.ts)||ae.ts<I||ae.ts>v||J>0&&ae.ts<q.points[J-1].ts||ae.value!==null&&!Number.isFinite(ae.value)||!Number.isSafeInteger(ae.count)||ae.count<0||!Array.isArray(ae.sources))||q.sampleCount!==q.points.reduce((ae,J)=>ae+J.count,0))throw new Error("\u5386\u53F2\u6570\u636E\u4E0E\u6240\u9009\u8D44\u4EA7\u6216\u67E5\u8BE2\u7A97\u53E3\u4E0D\u4E00\u81F4\uFF0C\u672A\u663E\u793A\u8BE5\u7ED3\u679C\u3002");h.history=q,Lailin.chart(s("trend-chart"),q,t.types[T.type]),s("chart-message").hidden=q.sampleCount>0,s("chart-message").textContent="\u8BE5\u65F6\u95F4\u7A97\u53E3\u5C1A\u65E0\u6709\u6548\u6837\u672C\uFF0C\u4E0D\u586B\u5145\u865A\u6784\u66F2\u7EBF\u3002",s("history-description").textContent=`${n?"\u6A21\u62DF\u5386\u53F2":"\u6570\u636E\u5E93\u5386\u53F2"} \xB7 ${q.sampleCount} \u6837\u672C`;let me=q.points.filter(ae=>ae.value!==null).map(ae=>ae.value);s("history-stats").textContent=me.length?`${o(Math.min(...me))}\u2013${o(Math.max(...me))} ${q.unit}`:"\u2014"}catch(q){if(O!==x)return;h.history=B,B?(s("chart-message").hidden=!0,s("history-description").textContent="\u66F4\u65B0\u5931\u8D25\uFF0C\u4FDD\u7559\u4E0A\u6B21\u67E5\u8BE2"):(s("trend-chart").replaceChildren(),s("chart-message").hidden=!1,s("chart-message").textContent=q.message),s("history-stats").textContent=B?"\u6700\u540E\u6709\u6548\u5386\u53F2":"\u67E5\u8BE2\u5931\u8D25"}}function mt(O){if(document.body.classList.toggle("data-mode",O!=="scene"),h.view=O,e("[data-view]").forEach(te=>te.classList.toggle("active",te.dataset.view===O)),s("data-section").hidden=O==="scene",O==="scene"){setTimeout(()=>u?.render(),30);return}s("data-title").textContent=O==="audit"?"\u64CD\u4F5C\u8BB0\u5F55":"\u544A\u8B66\u8BB0\u5F55",s("data-subtitle").textContent=O==="audit"?"\u89C4\u5219\u53D8\u5316\u3001\u767B\u5F55\u3001\u786E\u8BA4\u4E0E\u63A7\u5236\u5747\u5728\u670D\u52A1\u7AEF\u7559\u75D5\u3002":"\u786E\u8BA4\u53EA\u8868\u793A\u5DF2\u77E5\u6089\uFF0C\u6D4B\u91CF\u503C\u6062\u590D\u540E\u544A\u8B66\u624D\u4F1A\u5173\u95ED\u3002",s("alarm-state-filters").hidden=O!=="alarms",ge()}function ce(O){if(h.view!=="alarms")return;let te=O.filter(T=>h.alarmFilter==="all"||h.alarmFilter==="active"&&T.state!=="resolved"||T.state===h.alarmFilter);s("data-content").innerHTML=te.length?`<table class="records-table"><thead><tr><th>\u7EA7\u522B / \u8BBE\u5907</th><th>\u544A\u8B66\u5185\u5BB9</th><th>\u9996\u6B21\u53D1\u751F</th><th>\u5904\u7406\u72B6\u6001</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${te.map(T=>`<tr><td><span class="sev ${T.severity==="critical"?"alarm":"warning"}">${T.severity==="critical"?"\u544A\u8B66":"\u9884\u8B66"}</span><small><code>${i(T.device_id)}</code></small></td><td><strong>${i(T.title)}</strong><small>${T.rule_code==="OFFLINE"?"\u5FC3\u8DF3\u8D85\u65F6":`\u89C4\u5219\u9608\u503C ${i(T.threshold)} ${i(T.unit)}`}</small></td><td>${i(l(T.opened_at))}</td><td>${a[T.state]}<small>${i(T.acknowledged_by||"\u2014")}</small></td><td>${T.state==="open"?`<button class="table-ack" data-ack="${i(T.id)}">\u786E\u8BA4</button>`:`<button class="link" data-locate="${i(T.device_id)}">\u5728\u573A\u666F\u4E2D\u5B9A\u4F4D</button>`}</td></tr>`).join("")}</tbody></table>`:'<div class="empty-state"><strong>\u6B64\u7B5B\u9009\u4E0B\u6CA1\u6709\u544A\u8B66\u8BB0\u5F55</strong><p>\u5DF2\u6062\u590D\u8BB0\u5F55\u53EF\u5728\u201C\u5168\u90E8\u201D\u6216\u201C\u5DF2\u6062\u590D\u201D\u4E2D\u67E5\u770B\u3002</p></div>'}async function ge(){if(h.view==="alarms"){if(n){ce(h.snapshot.alarms);return}try{let O=await D("/alarms?limit=100");ce(O.items)}catch(O){A(O)}}else if(h.view==="audit"){if(n){s("data-content").innerHTML='<div class="empty-state"><strong>\u79BB\u7EBF\u9884\u89C8\u4E0D\u5305\u542B\u767B\u5F55\u548C\u64CD\u4F5C\u8BB0\u5F55</strong><p>\u542F\u52A8\u5B8C\u6574\u670D\u52A1\u540E\uFF0C\u6240\u6709\u5199\u64CD\u4F5C\u53EF\u5728\u6B64\u67E5\u8BE2\u3002</p></div>';return}try{let O=await D("/audit?limit=100"),te={"system.start":"\u670D\u52A1\u542F\u52A8","system.seed":"\u521D\u59CB\u5316\u76EE\u5F55","auth.login":"\u64CD\u4F5C\u5458\u767B\u5F55","auth.logout":"\u9000\u51FA\u767B\u5F55","auth.failed":"\u767B\u5F55\u5931\u8D25","alarm.opened":"\u4EA7\u751F\u544A\u8B66","alarm.resolved":"\u544A\u8B66\u6062\u590D","alarm.acknowledged":"\u786E\u8BA4\u544A\u8B66","demo.scenario":"\u5207\u6362\u6A21\u62DF\u5DE5\u51B5","command.accepted":"\u63A5\u6536\u63A7\u5236\u6307\u4EE4","command.confirmed":"\u6536\u5230\u6A21\u62DF\u56DE\u6267","command.failed":"\u6307\u4EE4\u5931\u8D25"};s("data-content").innerHTML=`<table class="records-table"><thead><tr><th>\u65F6\u95F4</th><th>\u64CD\u4F5C\u4EBA</th><th>\u52A8\u4F5C</th><th>\u8D44\u4EA7 / \u8BE6\u60C5</th></tr></thead><tbody>${O.items.map(T=>`<tr><td>${l(T.at)}</td><td>${i(T.actor)}</td><td><strong>${i(te[T.action]||T.action)}</strong><small>${i(T.action)}</small></td><td>${i(T.device_id||"\u7CFB\u7EDF")}<small title="${i(T.detail)}">${i(T.detail.slice(0,72))}</small></td></tr>`).join("")}</tbody></table>`}catch(O){A(O)}}}function ye(O){let te=h.snapshot?.alarms.find(T=>T.id===O);G(()=>$({title:"\u786E\u8BA4\u5DF2\u77E5\u6089\u6B64\u544A\u8B66",description:`${te?.title||"\u6240\u9009\u544A\u8B66"}\u3002\u672C\u64CD\u4F5C\u53EA\u8BB0\u5F55\u5904\u7406\u4EBA\u548C\u8BF4\u660E\uFF0C\u4E0D\u4F1A\u6E05\u9664\u8D8A\u9650\u72B6\u6001\uFF0C\u4E5F\u4E0D\u4F1A\u4EE3\u66FF\u73B0\u573A\u5904\u7F6E\u3002`,note:!0,label:"\u786E\u8BA4\u544A\u8B66",callback:async T=>{await D(`/alarms/${O}/acknowledge`,{method:"POST",body:{note:T}}),M("\u544A\u8B66\u5DF2\u786E\u8BA4\uFF1B\u7B49\u5F85\u76D1\u6D4B\u503C\u6216\u901A\u4FE1\u72B6\u6001\u5B9E\u9645\u6062\u590D\u3002"),ee(await D("/bootstrap"))}}))}function pe(O){let te=h.selected,T=h.devices.get(te),v={alarm:"\u6CE8\u5165\u8F74\u627F\u8FC7\u70ED\u544A\u8B66",offline:"\u6A21\u62DF\u7F51\u7EDC\u901A\u4FE1\u4E2D\u65AD",normal:"\u6062\u590D\u5065\u5EB7\u5DE5\u51B5"},I=v[O]||"\u5207\u6362\u6A21\u62DF\u5DE5\u51B5";G(()=>$({title:I,description:`\u76EE\u6807\uFF1A${T.name}\uFF08${te}\uFF09\u3002${O==="offline"?"\u505C\u6B62\u8BE5\u8D44\u4EA7\u7684\u6A21\u62DF\u4E0A\u62A5\uFF0C\u7531\u670D\u52A1\u5668\u8D85\u65F6\u89C4\u5219\u5224\u5B9A\u901A\u4FE1\u4E2D\u65AD\uFF1B\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u524D\u7AEF\u989C\u8272\u3002":O==="alarm"?"\u4E0B\u4E00\u6B21\u6A21\u62DF\u91C7\u6837\u5C06\u4F9D\u636E\u8BE5\u8D44\u4EA7\u4E3B\u6307\u6807\u9A71\u52A8\u670D\u52A1\u5668\u544A\u8B66\u89C4\u5219\u3002":"\u4E0B\u4E00\u6B21\u6A21\u62DF\u91C7\u6837\u5C06\u4F9D\u636E\u8BE5\u8D44\u4EA7\u72B6\u6001\u9A71\u52A8\u670D\u52A1\u5668\u6062\u590D\u89C4\u5219\u3002"}\u6B64\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u5B9E\u7269\u8BBE\u5907\u3002`,callback:async()=>{let B=await D("/demo/scenario",{method:"POST",body:{deviceId:te,scenario:O}});M(B.message)}}))}function Se(){let O=h.devices.get(h.selected),te={deviceId:O.id,action:O.type==="light"?"setPower":"setGate",value:O.type==="light"?!O.powered:O.controlState==="open"?"closed":"open"};G(()=>$({title:`${s("device-control").textContent} \xB7 \u6A21\u62DF\u63A7\u5236`,description:`${O.name}\uFF08${O.id}\uFF09\u3002\u670D\u52A1\u5668\u5C06\u6821\u9A8C\u6743\u9650\u548C\u5728\u7EBF\u72B6\u6001\uFF1B\u6536\u5230\u6A21\u62DF\u8BBE\u5907\u56DE\u6267\u540E\u624D\u663E\u793A\u6210\u529F\u3002\u672C\u6848\u4F8B\u4E0D\u5411\u5B9E\u7269\u4E0B\u53D1\u547D\u4EE4\u3002`,callback:async()=>{let T=globalThis.crypto?.randomUUID?crypto.randomUUID():`cmd_${Date.now()}_${Math.random().toString(16).slice(2)}`,v=await D("/commands",{method:"POST",body:te,headers:{"Idempotency-Key":T}});s("command-status").textContent=`\u6307\u4EE4 ${v.id.slice(0,8)} \u5DF2\u63A5\u6536\uFF0C\u7B49\u5F85\u8BBE\u5907\u56DE\u6267\u2026`;for(let I=0;I<16;I++){await new Promise(q=>setTimeout(q,600));let B=await D(`/commands/${v.id}`);if(B.status==="confirmed"){h.selected===O.id&&(s("command-status").textContent=B.message),M(B.message),ee(await D("/bootstrap"));return}if(B.status==="failed")throw new Error(B.message||"\u6307\u4EE4\u6267\u884C\u5931\u8D25")}throw new Error(`\u672A\u5728\u7B49\u5F85\u7A97\u53E3\u5185\u53D6\u5F97\u56DE\u6267\u3002\u6307\u4EE4 ${v.id} \u72B6\u6001\u672A\u77E5\uFF0C\u8BF7\u901A\u8FC7\u6307\u4EE4\u67E5\u8BE2\u63A5\u53E3\u6838\u5B9E\uFF0C\u4E0D\u8981\u76F2\u76EE\u91CD\u53D1\u3002`)}}))}function Ke(){if(!h.history){M("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5386\u53F2\u67E5\u8BE2\u7ED3\u679C\u3002");return}let O=h.history,te=B=>`"${String(B??"").replace(/^([=+\-@])/,"	$1").replaceAll('"','""')}"`,T=[["asset_id","sample_bin_time","metric","mean","min","max","unit","count","sources","data_mode"],...O.points.map(B=>[O.deviceId,new Date(B.ts).toISOString(),O.metric,B.value,B.min,B.max,O.unit,B.count,B.sources.join("|"),O.mode])].map(B=>B.map(te).join(",")).join(`\r
`),v=URL.createObjectURL(new Blob(["\uFEFF"+T],{type:"text/csv;charset=utf-8"})),I=document.createElement("a");I.href=v,I.download=`${O.deviceId}-history-${h.hours}h.csv`,I.click(),setTimeout(()=>URL.revokeObjectURL(v),1e3),M("\u5DF2\u5BFC\u51FA\u5F53\u524D\u7A97\u53E3\u805A\u5408\u6570\u636E\uFF0C\u5305\u542B\u7F3A\u6D4B\u7A7A\u503C\u548C\u6570\u636E\u6765\u6E90\u3002")}async function Xe(){try{await new Promise(T=>requestAnimationFrame(()=>setTimeout(T,0))),f=globalThis.LAILIN_PREVIEW.meta;let O=null;X(),u=Lailin.viewer.create(s("scene-canvas"),f,O,{onPick:T=>U(T),onFrame:()=>{ve(),u?.state.lost||(s("graphics-error").hidden=!0)},onError:T=>{s("graphics-error").textContent=T,s("graphics-error").hidden=!1}}),u.select(h.selected),h.snapshot&&u.setStates(h.snapshot.devices),s("model-loading").hidden=!0,document.body.classList.add("scene-ready"),s("model-stats").textContent=`WebGL 2 \xB7 ${Math.round(f.stats.triangles/1e3)}k \u4E09\u89D2\u9762 \xB7 ${f.stats.meshes} \u7F51\u683C`;let te=[["1#","\u7814\u53D1\u4E2D\u5FC3",[-36,19.5,24]],["2#","\u751F\u4EA7\u8F66\u95F4 A",[-32,12.5,-24]],["3#","\u751F\u4EA7\u8F66\u95F4 B",[29,13.5,-30]],["4#","\u80FD\u6E90\u4E2D\u5FC3",[35,11,18]],["5#","\u5357\u95E8\u5C97\u4EAD",[13,5,58.8]]];for(let[T,v,I]of te){let B=document.createElement("div");B.className="building-label",B.innerHTML=`<b>${T}</b>${v}`,s("building-labels").append(B),b.push({el:B,position:I})}de(),u.render()}catch(O){s("model-loading").hidden=!0,s("graphics-error").hidden=!1,s("graphics-error").textContent=O.message,s("model-stats").textContent="\u56FE\u5F62\u672A\u5C31\u7EEA\uFF0C\u8D44\u4EA7\u4E0E\u544A\u8B66\u4ECD\u53EF\u4F7F\u7528",A(O)}}function Qe(){let O=()=>{let v=innerWidth<=900,I=s("asset-panel"),B=s("right-panel");I.inert=v&&!document.body.classList.contains("assets-open"),B.inert=v&&document.body.classList.contains("panel-hidden")};new MutationObserver(O).observe(document.body,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("resize",O),O();let te=(v,I)=>(s(v).classList.toggle("active",I),s(v).setAttribute("aria-pressed",String(I)),I),T=v=>te(v,!s(v).classList.contains("active"));for(let[v,I]of Object.entries(t.types)){let B=document.createElement("option");B.value=v,B.textContent=I.label,s("type-filter").append(B)}for(let[v,I]of Object.entries(t.zones)){let B=document.createElement("option");B.value=v,B.textContent=I,s("zone-filter").append(B)}s("asset-search").oninput=v=>{h.query=v.target.value,ne()},s("type-filter").onchange=v=>{h.type=v.target.value,ne()},s("zone-filter").onchange=v=>{h.zone=v.target.value,ne()},e("[data-status]").forEach(v=>v.onclick=()=>{h.status=v.dataset.status,e("[data-status]").forEach(I=>I.classList.toggle("active",I===v)),ne()}),s("clear-filters").onclick=()=>{h.type=h.zone=h.status="all",h.query="",s("asset-search").value="",s("type-filter").value="all",s("zone-filter").value="all",e("[data-status]").forEach(v=>v.classList.toggle("active",v.dataset.status==="all")),ne()},s("focus-device").onclick=()=>H(!1),s("isolate-device").onclick=()=>u?.isolated?ie():H(!0),s("view-home").onclick=()=>ie(),s("view-top").onclick=()=>ie(!0),s("reset-scene").onclick=()=>ie(),s("tour-button").onclick=()=>{document.body.classList.contains("touring")||ie();let v=!!u?.toggleTour();te("tour-button",v),v&&k("\u56ED\u533A\u5168\u666F","\u955C\u5934\u5DE1\u6E38")},s("view-energy").onclick=()=>{ie(),document.body.classList.add("energy-view"),k("4# \u80FD\u6E90\u4E2D\u5FC3","\u5FAA\u73AF\u6C34\u6CF5\u4E0E\u6362\u70ED\u673A\u7EC4"),u?.energyView(),z("view-energy")},s("section-toggle").onclick=()=>te("section-toggle",!!u?.toggleSection()),s("photo-button").onclick=()=>{document.body.classList.toggle("photo-mode"),s("photo-button").classList.toggle("active",document.body.classList.contains("photo-mode")),setTimeout(()=>u?.render(),30)},s("snapshot-button").onclick=()=>u?.capture(),s("export-model").onclick=async()=>{try{s("export-model").disabled=!0,await u?.exportGLB(),M("\u5DF2\u5BFC\u51FA\u5B8C\u6574 GLB\uFF0C\u8D44\u4EA7\u7F16\u53F7\u4FDD\u7559\u5728\u8282\u70B9\u4E2D\u3002")}catch(v){A(v)}finally{s("export-model").disabled=!1}},s("explode-device").onclick=()=>{let v=!!u?.toggleExplode();s("explode-device").classList.toggle("active",v),s("explode-device").textContent=v?"\u5408\u62E2\u7ED3\u6784":"\u5C55\u5F00\u7ED3\u6784"},document.addEventListener("keydown",v=>{if(v.key==="Escape"&&!document.querySelector("dialog[open]")){let I=document.body.classList.contains("photo-mode");document.body.classList.remove("photo-mode","assets-open"),s("photo-button").classList.remove("active"),I?u?.render():ie()}}),s("toggle-night").onclick=()=>{u&&(u.setNight(!u.night),document.body.classList.toggle("night",u.night),te("toggle-night",u.night),h.history&&Lailin.chart(s("trend-chart"),h.history,t.types[h.devices.get(h.selected).type]))},s("toggle-labels").onclick=()=>{h.labels=T("toggle-labels"),ve()},s("layer-landscape").onclick=()=>u?.setLayer("landscape",T("layer-landscape")),s("layer-pipes").onclick=()=>u?.setLayer("pipes",T("layer-pipes")),s("high-quality").onclick=()=>u?.quality(T("high-quality")),e("[data-hours]").forEach(v=>v.onclick=()=>{h.hours=Number(v.dataset.hours),e("[data-hours]").forEach(I=>I.classList.toggle("active",I===v)),ze()}),s("export-history").onclick=Ke,e("[data-view]").forEach(v=>v.onclick=()=>mt(v.dataset.view)),s("open-alarms").onclick=()=>mt("alarms"),s("refresh-data").onclick=ge,e("[data-alarm-state]").forEach(v=>v.onclick=()=>{h.alarmFilter=v.dataset.alarmState,e("[data-alarm-state]").forEach(I=>I.classList.toggle("active",I===v)),ge()}),document.addEventListener("click",v=>{let I=v.target.closest("[data-ack]");I&&ye(I.dataset.ack);let B=v.target.closest("[data-locate]");B&&(U(B.dataset.locate),mt("scene"),H(!1));let q=v.target.closest("[data-close]");q&&s(q.dataset.close).close()}),s("login-button").onclick=()=>{if(n){M("\u79BB\u7EBF\u9884\u89C8\u53EA\u8BFB\u3002\u5B8C\u6574\u9879\u76EE\u63D0\u4F9B\u64CD\u4F5C\u5458\u767B\u5F55\u4E0E\u5BA1\u8BA1\u3002");return}h.session.authenticated?$({title:"\u9000\u51FA\u64CD\u4F5C\u5458\u4F1A\u8BDD",description:"\u9000\u51FA\u540E\u4ECD\u53EF\u6D4F\u89C8\u6F14\u793A\u8D44\u4EA7\uFF0C\u5199\u64CD\u4F5C\u9700\u8981\u91CD\u65B0\u767B\u5F55\u3002",callback:async()=>{await D("/auth/logout",{method:"POST"}),h.session={authenticated:!1},F(),M("\u5DF2\u9000\u51FA\u767B\u5F55")}}):G(()=>M("\u64CD\u4F5C\u5458\u5DF2\u767B\u5F55"))},s("login-form").onsubmit=async v=>{if(v.preventDefault(),!w){w=!0,s("submit-login").disabled=!0,s("login-error").textContent="";try{h.session=await D("/auth/login",{method:"POST",body:{username:s("login-username").value,password:s("login-password").value}}),s("login-password").value="",s("login-dialog").close(),F();let I=h.loginNext;h.loginNext=null,await I?.()}catch(I){s("login-error").textContent=I.message}finally{w=!1,s("submit-login").disabled=!1}}},s("confirm-form").onsubmit=async v=>{v.preventDefault();let I=g,B=s("confirm-note").value;g=null,s("confirm-dialog").close();try{await I?.(B)}catch(q){A(q)}},s("demo-alarm").onclick=()=>pe("alarm"),s("demo-offline").onclick=()=>pe("offline"),s("demo-restore").onclick=()=>pe("normal"),s("device-control").onclick=Se,s("help-button").onclick=()=>s("help-dialog").showModal(),s("reconnect-button").onclick=K,s("mobile-assets").onclick=()=>document.body.classList.toggle("assets-open"),s("mobile-account").onclick=()=>s("login-button").click(),s("close-sidebar").onclick=()=>document.body.classList.remove("assets-open"),s("close-inspector").onclick=()=>document.body.classList.add("panel-hidden"),window.addEventListener("resize",()=>{h.history&&Lailin.chart(s("trend-chart"),h.history,t.types[h.devices.get(h.selected).type]),ve()})}async function it(){if(Qe(),ne(),R(),await Xe(),await new Promise(O=>requestAnimationFrame(()=>setTimeout(O,0))),n)ee(n.snapshot),ze();else try{h.session=await D("/auth/session"),F(),await K(),h.connected&&ze()}catch(O){A(O)}P.push(setInterval(N,1e3)),P.push(setInterval(()=>{!n&&h.view==="scene"&&ze()},15e3))}function V(){y||(y=!0,p?.close(),P.forEach(clearInterval),m?.abort(),u?.dispose())}return window.addEventListener("pagehide",V,{once:!0}),window.addEventListener("pageshow",O=>{O.persisted&&location.reload()}),it().catch(A),{get viewer(){return u},get state(){return{selected:h.selected,view:h.view,hours:h.hours,preview:h.preview,version:h.snapshot?.version,connected:h.connected,authenticated:h.session.authenticated,deviceCount:h.devices.size}},dispose:V}})();})();
