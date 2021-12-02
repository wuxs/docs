"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8140],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],l={title:"Core",sidebar_position:2},a=void 0,u={unversionedId:"concepts/core",id:"concepts/core",isDocsHomePage:!1,title:"Core",description:"Architecture",source:"@site/docs/concepts/core.md",sourceDirName:"concepts",slug:"/concepts/core",permalink:"/docs/zh-cn/concepts/core",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/core.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Core",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Platform",permalink:"/docs/zh-cn/internal_concepts/platform"},next:{title:"Keel",permalink:"/docs/zh-cn/internal_concepts/keel"}},p=[{value:"Restful APIs",id:"restful-apis",children:[],level:3},{value:"\u5b9e\u4f53\u7ba1\u7406",id:"\u5b9e\u4f53\u7ba1\u7406",children:[],level:3},{value:"Runtime",id:"runtime",children:[],level:3},{value:"Inbox",id:"inbox",children:[],level:3},{value:"Channel Endpoint",id:"channel-endpoint",children:[],level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",children:[],level:3},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",children:[],level:3},{value:"Storege",id:"storege",children:[],level:3}],s={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Architecture",src:n(6870).Z})),(0,c.kt)("h3",{id:"restful-apis"},"Restful APIs"),(0,c.kt)("p",null,"core \u91c7\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"RESTFUL")," \u89c4\u8303\u5b9e\u73b0 API\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6b63\u4ea4\u7684APIs\uff0c\u5411\u5916\u63d0\u4f9b\u7b80\u6d01\uff0c\u7a33\u5b9a\u7684API\u3002"),(0,c.kt)("h3",{id:"\u5b9e\u4f53\u7ba1\u7406"},"\u5b9e\u4f53\u7ba1\u7406"),(0,c.kt)("p",null,'core \u5c06\u7269\u7406\u4e16\u754c\u4e2d\u7684 "\u5bf9\u8c61" \u52a0\u4ee5\u62bd\u8c61\uff0c\u5c01\u88c5\u6210\u6570\u5b57\u4e16\u754c\u4e2d\u7684 ',(0,c.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53"),"\uff0c \u5b9e\u4f53\u662f\u5bf9\u7269\u7406\u201c\u5bf9\u8c61\u201d \u7684\u6570\u5b57\u955c\u50cf\uff0c\u5b9e\u4f53\u7ba1\u7406 \u5bf9core\u4e2d\u7684\u5b9e\u4f53\u8fdb\u9879\u7ba1\u7406\uff0c\u5e76\u4ee3\u7406\u5b9e\u4f53\u76f8\u5173\u7684 API \u64cd\u4f5c\uff0c\u4e3a\u5b9e\u4f53\u548c\u5b9e\u4f53\u8fd0\u884c\u65f6\uff08Actor\uff09\u5411\u5916\u66b4\u9732\u63a5\u53e3\u3002"),(0,c.kt)("h3",{id:"runtime"},"Runtime"),(0,c.kt)("p",null,"Runtime \u4e3a\u5b9e\u4f53\u7684\u8fd0\u884c\u65f6\uff08Actor\uff09\u63d0\u4f9b\u73af\u5883\u652f\u6301\uff0c\u5bf9\u5b9e\u4f53\u8fdb\u884c\u8c03\u5ea6\u548c\u7ba1\u7406\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"core-actor",src:n(1275).Z})),(0,c.kt)("h3",{id:"inbox"},"Inbox"),(0,c.kt)("p",null,"Inbox \u5b9e\u73b0\u4ece\u6570\u636e\u6e90\uff08MQ\uff0c\u6570\u636e\u5e93\u7b49\uff09\u4e2d\u6d88\u8d39\u6d88\u606f\uff0c\u5b9e\u73b0 checkpoint \u673a\u5236\uff0c \u4e3a Runtime \u4e2d\u7684 Actor \u63d0\u4f9b\u53ef\u9760\u6d88\u606f\u4fdd\u8bc1\u3002"),(0,c.kt)("h3",{id:"channel-endpoint"},"Channel Endpoint"),(0,c.kt)("p",null,"\u9ad8\u9891\uff0c\u9ad8\u541e\u5410\u91cf\u7684\u6d88\u606f\u6d41\u5bf9 \u4f20\u8f93 \u7684\u8981\u6c42\u603b\u662f\u82db\u523b\u7684\uff0c core \u91c7\u7528\u9ad8\u6548\u6570\u636e\u901a\u9053\uff0c \u5c01\u88c5\u901a\u9053\u7aef\u70b9\uff0c\u4e3a\u9ad8\u9891\u6d88\u606f\u63d0\u4f9b\u9ad8\u901f\u901a\u9053\u3002"),(0,c.kt)("h3",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,c.kt)("p",null,"\u7269\u7406\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u901a\u5e38\u4e0d\u662f\u5b64\u7acb\u7684\uff0ccore \u901a\u8fc7 \u5173\u7cfb\uff08Relationship\uff09 \u6a21\u62df\u7269\u7406\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4e3a\u5b9e\u4f53\u63d0\u4f9b\u591a\u6837\u7684\u7ec4\u7ec7\u5f62\u5f0f\u3002"),(0,c.kt)("h3",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,c.kt)("h3",{id:"storege"},"Storege"),(0,c.kt)("p",null,"Storege \u662f core \u6301\u4e45\u5316\u7f13\u51b2\u6a21\u5757\u3002"))}d.isMDXComponent=!0},1275:function(e,t,n){t.Z=n.p+"assets/images/architecture-actor-09fe2e5e9761e011f6933b7c81512ad3.png"},6870:function(e,t,n){t.Z=n.p+"assets/images/architecture-239e4ab233ef4cdae685de2449f11cc1.png"}}]);