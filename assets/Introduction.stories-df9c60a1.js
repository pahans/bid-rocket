var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{R as l}from"./index-a38f3d31.js";import{A as v,M as k}from"./Props-c02a149e.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./web.url.constructor-0f82e982.js";import"./iframe-68358e36.js";import"./es.number.is-integer-a95f9906.js";import"./index-681e4b07-48eb466c.js";import"./es.map.constructor-088687ee.js";import"./es.number.to-fixed-4714c3f9.js";import"./index-6c397bfc.js";import"./es.number.is-nan-184f406b.js";import"./string-d2fe5096.js";function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}i(w,"_defineProperty");function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}i(h,"ownKeys");function d(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?h(Object(n),!0).forEach(function(o){w(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}i(d,"_objectSpread2");function O(e,r){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}i(O,"_objectWithoutPropertiesLoose");function C(e,r){if(e==null)return{};var n=O(e,r),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}i(C,"_objectWithoutProperties");var j=i(function(r){return typeof r=="function"},"isFunction"),N=l.createContext({}),_=i(function(r){var n=l.useContext(N),o=n;return r&&(o=j(r)?r(n):d(d({},n),r)),o},"useMDXComponents"),D="mdxType",E={inlineCode:"code",wrapper:i(function(r){var n=r.children;return l.createElement(l.Fragment,{},n)},"wrapper")},b=l.forwardRef(function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=C(e,["components","mdxType","originalType","parentName"]),m=_(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||E[p]||a;return n?l.createElement(f,d(d({ref:r},c),{},{components:n})):l.createElement(f,d({ref:r},c))});b.displayName="MDXCreateElement";function t(e,r){var n=arguments,o=r&&r.mdxType;if(typeof e=="string"||o){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var m in r)hasOwnProperty.call(r,m)&&(c[m]=r[m]);c.originalType=e,c[D]=typeof e=="string"?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}i(t,"createElement");const P="/assets/code-brackets-9ef6443e.svg",S="/assets/colors-ac9401f3.svg",T="/assets/comments-f15a6837.svg",M="/assets/direction-94a9917f.svg",F="/assets/flow-275142c6.svg",X="/assets/plugin-57148314.svg",I="/assets/repo-fb4ece47.svg",z="/assets/stackalt-2ad81543.svg";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}i(u,"_extends");const B={},R="wrapper";function y({components:e,...r}){return t(R,u({},B,r,{components:e,mdxType:"MDXLayout"}),t(k,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:X,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:z,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:S,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:F,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:I,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:M,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:P,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:T,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"stories/Introduction.stories.mdx")))}i(y,"MDXContent");y.isMDXComponent=!0;const A=i(()=>{throw new Error("Docs-only story")},"__page");A.parameters={docsOnly:!0};const g={title:"Example/Introduction",tags:["stories-mdx"],includeStories:["__page"]},L={};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>t(v,{mdxStoryNameToKey:L,mdxComponentAnnotations:g},t(y,null))};const et=["__page"];export{et as __namedExportsOrder,A as __page,g as default};
//# sourceMappingURL=Introduction.stories-df9c60a1.js.map
