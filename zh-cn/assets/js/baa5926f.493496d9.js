"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[598],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,v=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5045:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],u={title:"Auth Server"},a="Auth Server",l={unversionedId:"security/server",id:"security/server",isDocsHomePage:!1,title:"Auth Server",description:"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a\u5e73\u53f0\u662f\u5982\u4f55\u67b6\u8bbe\u7684\u8ba4\u8bc1\u670d\u52a1\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8ba4\u8bc1\u670d\u52a1\u3002",source:"@site/docs/security/server.md",sourceDirName:"security",slug:"/security/server",permalink:"/docs/zh-cn/security/server",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/security/server.md",tags:[],version:"current",frontMatter:{title:"Auth Server"},sidebar:"tutorialSidebar",previous:{title:"OAuth 2 Acceess",permalink:"/docs/zh-cn/security/oauth"},next:{title:"Best Practices",permalink:"/docs/zh-cn/developer_cookbook/best_practices"}},s=[{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",children:[],level:2},{value:"\u521b\u5efa\u7ba1\u7406\u5458",id:"\u521b\u5efa\u7ba1\u7406\u5458",children:[],level:2},{value:"\u521b\u5efa\u79df\u6237",id:"\u521b\u5efa\u79df\u6237",children:[],level:2},{value:"\u914d\u7f6e\u6743\u9650",id:"\u914d\u7f6e\u6743\u9650",children:[],level:2}],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"auth-server"},"Auth Server"),(0,c.kt)("p",null,"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a\u5e73\u53f0\u662f\u5982\u4f55\u67b6\u8bbe\u7684\u8ba4\u8bc1\u670d\u52a1\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8ba4\u8bc1\u670d\u52a1\u3002"),(0,c.kt)("h2",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,c.kt)("h2",{id:"\u521b\u5efa\u7ba1\u7406\u5458"},"\u521b\u5efa\u7ba1\u7406\u5458"),(0,c.kt)("h2",{id:"\u521b\u5efa\u79df\u6237"},"\u521b\u5efa\u79df\u6237"),(0,c.kt)("h2",{id:"\u914d\u7f6e\u6743\u9650"},"\u914d\u7f6e\u6743\u9650"))}f.isMDXComponent=!0}}]);