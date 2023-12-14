(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{89622:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/jest",function(){return t(64191)}])},64191:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(24246),s=t(71670),i=t(3916),o=t(30289);let c=(0,i.A)(o.us.Jest);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"testing-with-jest",children:"Testing with Jest"}),"\n",(0,r.jsxs)(n.p,{children:["This guide will help you setup ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," and ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:"React Testing Library"})," for your project.\nNote that this guide only covers shared logic that can be applied to any framework, and\nit does not cover initial setup of ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," and ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:"React Testing Library"})," as it may vary depending on the framework you are using."]}),"\n",(0,r.jsx)(n.h2,{id:"custom-render",children:"Custom render"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components require ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," to be present in the component tree.\nTo add ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," to the component tree in your tests, create a ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/setup/#custom-render",children:"custom render"}),"\nfunction:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// ./test-utils/render.tsx\nimport { render as testingLibraryRender } from '@testing-library/react';\nimport { MantineProvider } from '@mantine/core';\n// Import your theme object\nimport { theme } from '../src/theme';\n\nexport function render(ui: React.ReactNode) {\n  return testingLibraryRender(<>{ui}</>, {\n    wrapper: ({ children }: { children: React.ReactNode }) => (\n      <MantineProvider theme={theme}>{children}</MantineProvider>\n    ),\n  });\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is usually more convenient to export all ",(0,r.jsx)(n.code,{children:"@testing-library/*"})," functions that you are planning to use\nfrom ",(0,r.jsx)(n.code,{children:"./testing-utils/index.ts"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import userEvent from '@testing-library/user-event';\n\nexport * from '@testing-library/react';\nexport { render } from './render';\nexport { userEvent };\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you should import all testing utilities from ",(0,r.jsx)(n.code,{children:"./testing-utils"})," instead of ",(0,r.jsx)(n.code,{children:"@testing-library/react"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { render, screen } from '../test-utils';\nimport { Welcome } from './Welcome';\n\ndescribe('Welcome component', () => {\n  it('has correct Next.js theming section link', () => {\n    render(<Welcome />);\n    expect(screen.getByText('this guide')).toHaveAttribute(\n      'href',\n      'https://mantine.dev/guides/next/'\n    );\n  });\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mock-web-apis",children:"Mock WEB APIs"}),"\n",(0,r.jsxs)(n.p,{children:["Most of Mantine components depend on browser APIs like ",(0,r.jsx)(n.code,{children:"window.matchMedia"})," or ",(0,r.jsx)(n.code,{children:"ResizeObserver"}),".\nThese APIs are not available in ",(0,r.jsx)(n.code,{children:"jest-environment-jsdom"})," environment and you will need to mock them in your tests."]}),"\n",(0,r.jsxs)(n.p,{children:["Create ",(0,r.jsx)(n.code,{children:"jest.setup.js"})," file in your project root and add the following code to it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@testing-library/jest-dom/extend-expect';\n\nconst { getComputedStyle } = window;\nwindow.getComputedStyle = (elt) => getComputedStyle(elt);\n\nObject.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: jest.fn().mockImplementation((query) => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: jest.fn(),\n    removeListener: jest.fn(),\n    addEventListener: jest.fn(),\n    removeEventListener: jest.fn(),\n    dispatchEvent: jest.fn(),\n  })),\n});\n\nclass ResizeObserver {\n  observe() {}\n  unobserve() {}\n  disconnect() {}\n}\n\nwindow.ResizeObserver = ResizeObserver;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then add it as a setup file in your ",(0,r.jsx)(n.code,{children:"jest.config.js"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const config = {\n  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],\n  // ... rest of your config\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"framework-specific-setup",children:"Framework specific setup"}),"\n",(0,r.jsxs)(n.p,{children:["Jest setup for different frameworks may vary and usually change over time.\nTo learn how to setup Jest for your framework, either check ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/getting-started",children:"Jest"}),"\nand ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:"React Testing Library"})," documentation\nor check one of the premade ",(0,r.jsx)(n.a,{href:"/getting-started",children:"templates"}),". Most of the templates include Jest setup, and\nyou can use them as a reference."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(a,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=89622)}),_N_E=e.O()}]);