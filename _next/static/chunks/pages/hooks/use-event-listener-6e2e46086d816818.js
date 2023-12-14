(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1322],{2556:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-event-listener",function(){return t(11298)}])},11298:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var o=t(24246),r=t(71670),s=t(27378),i=t(8671);let c=`
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`,u={type:"code",code:c,component:function(){let[e,n]=(0,s.useState)(0),t=(0,s.useCallback)(()=>n(e=>e+1),[]),o=function(e,n,t){let o=(0,s.useRef)();return(0,s.useEffect)(()=>{if(o.current)return o.current.addEventListener(e,n,t),()=>o.current?.removeEventListener(e,n,t)},[n,t]),o}("click",t);return s.createElement(i.z,{ref:o},"Button clicks: ",e)},centered:!0};var l=t(3916),a=t(30289);let d=(0,l.A)(a.us.useEventListener);function f(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-event-listener"})," adds a given event listener to an element to which ",(0,o.jsx)(n.code,{children:"ref"})," is assigned.\nHook supports the same options as ",(0,o.jsx)(n.code,{children:"addEventListener"})," method.\nAfter the component is unmounted, the listener is automatically removed."]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useEventListener<\n  K extends keyof HTMLElementEventMap,\n  T extends HTMLElement = any,\n>(\n  type: K,\n  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,\n  options?: boolean | AddEventListenerOptions\n): MutableRefObject<T>;\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,{...e,children:(0,o.jsx)(f,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=2556)}),_N_E=e.O()}]);