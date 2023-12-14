"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6720],{21836:function(e,t,r){r.d(t,{A:function(){return i}});var o=r(27378),n=r(61871),l=r(39202);let a=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,i={type:"code",component:function(){return o.createElement(n.l,{withIndicators:!0,height:200,slideSize:{base:"100%",sm:"50%",md:"33.333333%"},slideGap:{base:0,sm:"md"},loop:!0,align:"start"},o.createElement(l.M,{count:6}))},code:a}},39202:function(e,t,r){r.d(t,{M:function(){return s}});var o=r(27378),n=r(61871),l=r(56589),a=r(71078);function i({children:e}){return o.createElement(l.x,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:(0,a.h)(50),fontWeight:"bold"}},e)}function s({count:e}){let t=Array(e).fill(0).map((e,t)=>o.createElement(n.l.Slide,{key:t},o.createElement(i,null,t+1)));return o.createElement(o.Fragment,null,t)}},61871:function(e,t,r){r.d(t,{l:function(){return G}});var o=r(27378),n=r(60213),l=r(83453),a=r(71078),i=r(92082),s=r(20410),c=r(96739),d=r(6231),u=r(40593),m=r(49134),f=r(19397),p=r(56589),v=r(1189),g=r(28086),h=r(71656);let[b,y]=(0,h.R)("Carousel component was not found in tree");var C={root:"m-17884d0f",viewport:"m-a2dae653",container:"m-fcd81474",controls:"m-39bc3463",control:"m-64f58e10",indicators:"m-71ea3ab1",indicator:"m-eae68602",slide:"m-d98df724"};let E={},S=(0,s.d)((e,t)=>{let{classNames:r,className:n,style:l,styles:a,vars:i,...s}=(0,c.w)("CarouselSlide",E,e),d=y();return o.createElement(p.x,{ref:t,mod:{orientation:d.orientation},...d.getStyles("slide",{className:n,style:l,classNames:r,styles:a}),...s})});S.classes=C,S.displayName="@mantine/core/CarouselSlide";var w=r(2256),k=r(86689),x=r(75001),N=r(53007),z=r(31582),I=r(9889);function P({slideGap:e,slideSize:t,selector:r}){let n=(0,w.rZ)(),l=(0,k.L)({"--carousel-slide-gap":(0,i.bG)((0,x.v)(e)),"--carousel-slide-size":(0,a.h)((0,x.v)(t))}),s=(0,N.X)(n.breakpoints).reduce((r,o)=>(r[o]||(r[o]={}),"object"==typeof e&&void 0!==e[o]&&(r[o]["--carousel-slide-gap"]=(0,i.bG)(e[o])),"object"==typeof t&&void 0!==t[o]&&(r[o]["--carousel-slide-size"]=(0,i.bG)(t[o])),r),{}),c=(0,z.I)((0,N.X)(s),n).filter(e=>(0,N.X)(s[e.value]).length>0),d=c.map(e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:s[e.value]}));return o.createElement(I.f,{styles:l,media:d,selector:r})}function L({dir:e,orientation:t,direction:r}){return"previous"===r?"horizontal"===t?90*("ltr"===e?1:-1):-180:"horizontal"===t?90*("ltr"===e?-1:1):0}let A={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0},R=(0,l.Z)((e,{height:t,controlSize:r,controlsOffset:o})=>({root:{"--carousel-height":(0,a.h)(t),"--carousel-control-size":(0,a.h)(r),"--carousel-controls-offset":(0,i.bG)(o)}})),G=(0,s.d)((e,t)=>{let r=(0,c.w)("Carousel",A,e),{classNames:l,className:a,style:i,styles:s,unstyled:h,vars:y,children:E,getEmblaApi:S,onNextSlide:w,onPreviousSlide:k,onSlideChange:x,nextControlProps:N,previousControlProps:z,controlSize:I,controlsOffset:G,slideSize:Z,slideGap:$,orientation:_,height:j,align:D,slidesToScroll:M,includeGapInSize:Q,draggable:T,dragFree:X,loop:F,speed:H,initialSlide:K,inViewThreshold:q,withControls:B,withIndicators:O,plugins:V,nextControlIcon:W,previousControlIcon:J,skipSnaps:U,containScroll:Y,withKeyboardEvents:ee,...et}=r,er=(0,d.y)({name:"Carousel",classes:C,props:r,className:a,style:i,classNames:l,styles:s,unstyled:h,vars:y,varsResolver:R}),eo=(0,u.m)(),{dir:en}=(0,m.gm)(),[el,ea]=(0,n.Z)({axis:"horizontal"===_?"x":"y",direction:"horizontal"===_?en:void 0,startIndex:K,loop:F,align:D,slidesToScroll:M,draggable:T,dragFree:X,speed:H,inViewThreshold:q,skipSnaps:U,containScroll:Y},V),[ei,es]=(0,o.useState)(0),[ec,ed]=(0,o.useState)(0),eu=(0,o.useCallback)(e=>ea&&ea.scrollTo(e),[ea]),em=(0,o.useCallback)(()=>{if(!ea)return;let e=ea.selectedScrollSnap();es(e),x?.(e)},[ea,es]),ef=(0,o.useCallback)(()=>{ea?.scrollPrev(),k?.()},[ea]),ep=(0,o.useCallback)(()=>{ea?.scrollNext(),w?.()},[ea]),ev=(0,o.useCallback)(e=>{ee&&("ArrowRight"===e.key&&(e.preventDefault(),ep()),"ArrowLeft"===e.key&&(e.preventDefault(),ef()))},[ea]);(0,o.useEffect)(()=>{if(ea)return S?.(ea),em(),ed(ea.scrollSnapList().length),ea.on("select",em),()=>{ea.off("select",em)}},[ea,M]),(0,o.useEffect)(()=>{ea&&(ea.reInit(),ed(ea.scrollSnapList().length),es(e=>(0,g.u)(e,0,o.Children.toArray(E).length-1)))},[o.Children.toArray(E).length,M]);let eg=ea?.canScrollPrev()||!1,eh=ea?.canScrollNext()||!1,eb=Array(ec).fill(0).map((e,t)=>o.createElement(f.k,{...er("indicator"),key:t,"data-active":t===ei||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>eu(t)}));return o.createElement(b,{value:{getStyles:er,orientation:_}},o.createElement(P,{...r,selector:`.${eo}`}),o.createElement(p.x,{ref:t,...er("root",{className:eo}),...et,mod:{orientation:_,"include-gap-in-size":Q},onKeyDownCapture:ev},o.createElement("div",{...er("viewport"),ref:el},o.createElement("div",{...er("container"),"data-orientation":_},E)),O&&o.createElement("div",{...er("indicators")},eb),B&&o.createElement("div",{...er("controls")},o.createElement(f.k,{...z,...er("control",{className:z?.className,style:z?.style}),onClick:e=>{ef(),z?.onClick?.(e)},"data-inactive":!eg||void 0,tabIndex:eg?0:-1},void 0!==J?J:o.createElement(v.Q,{style:{transform:`rotate(${L({dir:en,orientation:_,direction:"previous"})}deg)`}})),o.createElement(f.k,{...er("control",{className:N?.className,style:N?.style}),...N,onClick:e=>{ep(),N?.onClick?.(e)},"data-inactive":!eh||void 0,tabIndex:eh?0:-1},void 0!==W?W:o.createElement(v.Q,{style:{transform:`rotate(${L({dir:en,orientation:_,direction:"next"})}deg)`}})))))});G.classes=C,G.displayName="@mantine/core/Carousel",G.Slide=S},1189:function(e,t,r){r.d(t,{Q:function(){return l}});var o=r(27378),n=r(71078);function l({style:e,size:t=16,...r}){return o.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,n.h)(t),height:(0,n.h)(t),display:"block"},...r},o.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}l.displayName="@mantine/core/AccordionChevron"},58818:function(e,t,r){r.d(t,{E:function(){return Image}});var o=r(27378),n=r(92082),l=r(83453),a=r(96739),i=r(6231),s=r(56589),c=r(50332),d={root:"m-9e117634"};let u={},m=(0,l.Z)((e,{radius:t,fit:r})=>({root:{"--image-radius":void 0===t?void 0:(0,n.H5)(t),"--image-object-fit":r}})),Image=(0,c.b)((e,t)=>{let r=(0,a.w)("Image",u,e),{classNames:n,className:l,style:c,styles:f,unstyled:p,vars:v,onError:g,src:h,radius:b,fit:y,fallbackSrc:C,...E}=r,[S,w]=(0,o.useState)(!h);(0,o.useEffect)(()=>w(!h),[h]);let k=(0,i.y)({name:"Image",classes:d,props:r,className:l,style:c,classNames:n,styles:f,unstyled:p,vars:v,varsResolver:m});return S&&C?o.createElement(s.x,{component:"img",src:C,...k("root"),onError:g,mod:"fallback",...E}):o.createElement(s.x,{component:"img",ref:t,...k("root"),src:h,onError:e=>{g?.(e),w(!0)},...E})});Image.classes=d,Image.displayName="@mantine/core/Image"},30454:function(e,t,r){r.d(t,{E:function(){return x}});var o=r(27378),n=r(5564),l=r(96739),a=r(20410),i=r(56589),s=r(71656);let[c,d]=(0,s.R)("Progress.Root component was not found in tree");var u={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let m={},f=(0,a.d)((e,t)=>{let{classNames:r,className:n,style:a,styles:s,vars:c,...u}=(0,l.w)("ProgressLabel",m,e),f=d();return o.createElement(i.x,{ref:t,...f.getStyles("label",{className:n,style:a,classNames:r,styles:s}),...u})});f.classes=u,f.displayName="@mantine/core/ProgressLabel";var p=r(92082),v=r(83453),g=r(6231);let h={},b=(0,v.Z)((e,{size:t,radius:r})=>({root:{"--progress-size":(0,p.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,p.H5)(r)}})),y=(0,a.d)((e,t)=>{let r=(0,l.w)("ProgressRoot",h,e),{classNames:n,className:a,style:s,styles:d,unstyled:m,vars:f,...p}=r,v=(0,g.y)({name:"Progress",classes:u,props:r,className:a,style:s,classNames:n,styles:d,unstyled:m,vars:f,varsResolver:b});return o.createElement(c,{value:{getStyles:v}},o.createElement(i.x,{ref:t,...v("root"),...p}))});y.classes=u,y.displayName="@mantine/core/ProgressRoot";var C=r(89738),E=r(2256);let S={withAria:!0},w=(0,a.d)((e,t)=>{let{classNames:r,className:n,style:a,styles:s,vars:c,value:u,withAria:m,color:f,striped:p,animated:v,...g}=(0,l.w)("ProgressSection",S,e),h=d(),b=(0,E.rZ)(),y=m?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,"aria-valuetext":`${u}%`}:{};return o.createElement(i.x,{ref:t,...h.getStyles("section",{className:n,classNames:r,styles:s,style:a}),...g,...y,mod:{striped:p||v,animated:v},__vars:{"--progress-section-width":`${u}%`,"--progress-section-color":(0,C.p)(f,b)}})});w.classes=u,w.displayName="@mantine/core/ProgressSection";let k={},x=(0,a.d)((e,t)=>{let r=(0,l.w)("Progress",k,e),{value:a,classNames:i,styles:s,vars:c,color:d,striped:u,animated:m,"aria-label":f,...p}=r,{resolvedClassNames:v,resolvedStyles:g}=(0,n.h)({classNames:i,styles:s,props:r});return o.createElement(y,{ref:t,classNames:v,styles:g,vars:c,...p},o.createElement(w,{value:a,color:d,striped:u,animated:m,"aria-label":f}))});x.classes=u,x.displayName="@mantine/core/Progress",x.Section=w,x.Root=y,x.Label=f},75001:function(e,t,r){r.d(t,{v:function(){return o}});function o(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}},10874:function(e,t,r){r.d(t,{o:function(){return n}});var o=r(27589);function n(e,t){return e in t.breakpoints?(0,o.px)(t.breakpoints[e]):(0,o.px)(e)}},31582:function(e,t,r){r.d(t,{I:function(){return n}});var o=r(10874);function n(e,t){let r=e.map(e=>({value:e,px:(0,o.o)(e,t)}));return r.sort((e,t)=>e.px-t.px),r}}}]);