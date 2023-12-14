(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{77573:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(54764).Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},52076:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(54764).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},59646:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(17779)}])},17779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var l=t(24246),r=t(71670),a=t(27378),o=t(46674);let i=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,c={type:"configurator",component:function(e){return a.createElement(o.s,{data:["React","Angular","Vue"],...e})},code:i,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var d=t(27884),Text=t(26569);let s=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`,u={type:"code",component:function(){return a.createElement(d.K,{align:"center"},a.createElement("div",null,a.createElement(Text.x,{size:"sm",fw:500,mb:3},"Disabled control"),a.createElement(o.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),a.createElement("div",null,a.createElement(Text.x,{size:"sm",fw:500,mb:3},"Disabled option"),a.createElement(o.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:s};var m=t(52076),p=t(77573),h=t(31550),g=t(62150),x=t(71078);let v=`
import { Center, SegmentedControl, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
`,b={type:"code",component:function(){return a.createElement(o.s,{data:[{value:"preview",label:a.createElement(g.M,{style:{gap:10}},a.createElement(m.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),a.createElement("span",null,"Preview"))},{value:"code",label:a.createElement(g.M,{style:{gap:10}},a.createElement(p.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),a.createElement("span",null,"Code"))},{value:"export",label:a.createElement(g.M,{style:{gap:10}},a.createElement(h.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),a.createElement("span",null,"Export"))}]})},centered:!0,code:v},y=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,f={type:"configurator",component:function(e){return a.createElement(o.s,{data:["React","Angular","Vue","Svelte"],...e})},code:y,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},j=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`,E={type:"code",code:j,centered:!0,component:function(){return a.createElement(a.Fragment,null,a.createElement(Text.x,{size:"sm",fw:500,mt:3},"No transitions"),a.createElement(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),a.createElement(Text.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),a.createElement(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"}))}},C=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,w={type:"code",component:function(){return a.createElement(o.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:C};var S=t(67355);let V=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,A={type:"styles-api",data:S.o,component:function(e){return a.createElement(o.s,{data:["React","Angular","Vue"],...e})},code:V,centered:!0};var k=t(30020);let D=`
import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
`,R={type:"code",component:function(){let e={style:{width:(0,x.h)(20),height:(0,x.h)(20),display:"block"},stroke:1.5};return a.createElement(o.s,{data:[{value:"preview",label:a.createElement(a.Fragment,null,a.createElement(m.Z,{...e}),a.createElement(k.T,null,"Preview"))},{value:"code",label:a.createElement(a.Fragment,null,a.createElement(p.Z,{...e}),a.createElement(k.T,null,"Code"))},{value:"export",label:a.createElement(a.Fragment,null,a.createElement(h.Z,{...e}),a.createElement(k.T,null,"Export"))}]})},centered:!0,code:D};var I=t(3916),T=t(30289);let z=(0,I.A)(T.us.SegmentedControl);function P(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t,StylesApiSelectors:a}=n;return t||N("Demo",!0),a||N("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t,{data:c}),"\n",(0,l.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["An array of strings – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,l.jsxs)(n.li,{children:["An array of objects – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return (\n    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(n.p,{children:["To disable ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,l.jsx)(n.code,{children:"data"})," format and set ",(0,l.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,l.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,l.jsx)(t,{data:u}),"\n",(0,l.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,l.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,l.jsx)(t,{data:b}),"\n",(0,l.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,l.jsxs)(n.p,{children:["By default, ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,l.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,l.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,l.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,l.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,l.jsx)(t,{data:f}),"\n",(0,l.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,l.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,l.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,l.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,l.jsx)(t,{data:E}),"\n",(0,l.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,l.jsx)(t,{data:w}),"\n",(0,l.jsx)(a,{component:"SegmentedControl"}),"\n",(0,l.jsx)(t,{data:A}),"\n",(0,l.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,l.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,l.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,l.jsx)(t,{data:R})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(z,{...e,children:(0,l.jsx)(P,{...e})})}function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62150:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var l=t(27378),r=t(96739),a=t(6231),o=t(56589),i=t(50332),c={root:"m-4451eb3a"};let d={},s=(0,i.b)((e,n)=>{let t=(0,r.w)("Center",d,e),{classNames:i,className:s,style:u,styles:m,unstyled:p,vars:h,inline:g,...x}=t,v=(0,a.y)({name:"Center",props:t,classes:c,className:s,style:u,classNames:i,styles:m,unstyled:p,vars:h});return l.createElement(o.x,{ref:n,mod:{inline:g},...v("root"),...x})});s.classes=c,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=59646)}),_N_E=e.O()}]);