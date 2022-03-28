"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7674],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<l;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2133:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),c=["components"],i={sidebar_position:3,title:"Rudder",slug:"/internal_concepts/rudder"},a="Rudder",u={unversionedId:"concepts/rudder",id:"concepts/rudder",title:"Rudder",description:"Rudder \u662f tKeel \u4e2d\u7684\u7ba1\u7406\u6838\u5fc3\uff0c\u4e3a\u5e73\u53f0\u63d0\u4f9b\u4e86\u63d2\u4ef6\u5b89\u88c5\u3001\u6ce8\u518c\u548c\u7ba1\u7406\u529f\u80fd\uff0c\u4e5f\u662f tKeel \u4e2d Security \u670d\u52a1\u7684\u8f7d\u4f53\u3002",source:"@site/docs/concepts/rudder.md",sourceDirName:"concepts",slug:"/internal_concepts/rudder",permalink:"/en/internal_concepts/rudder",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/rudder.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Rudder",slug:"/internal_concepts/rudder"},sidebar:"tutorialSidebar",previous:{title:"Keel",permalink:"/en/internal_concepts/keel"},next:{title:"Core",permalink:"/en/concepts/core"}},p={},d=[{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2}],s={toc:d};function f(e){var t=e.components,i=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rudder"},"Rudder"),(0,l.kt)("p",null,"Rudder \u662f tKeel \u4e2d\u7684\u7ba1\u7406\u6838\u5fc3\uff0c\u4e3a\u5e73\u53f0\u63d0\u4f9b\u4e86\u63d2\u4ef6\u5b89\u88c5\u3001\u6ce8\u518c\u548c\u7ba1\u7406\u529f\u80fd\uff0c\u4e5f\u662f tKeel \u4e2d Security \u670d\u52a1\u7684\u8f7d\u4f53\u3002"),(0,l.kt)("p",null,"Rudder \u5982\u5176\u540d\u4e00\u822c\uff0c\u7ba1\u7406\u7740 tKeel \u5e73\u53f0\u4e2d\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u4ee5\u53ca\u79df\u6237\u6743\u9650\u7b49\u4fe1\u606f\uff0c\u63a7\u5236\u7740\u5e73\u53f0\u7684\u8fd0\u8f6c\u3002"),(0,l.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"image rudder arch",src:r(3447).Z,width:"1200",height:"673"})),(0,l.kt)("p",null,"Rudder \u7531\u4e09\u4e2a Operator \u548c\u4e00\u4e2a Security \u7ec4\u4ef6\u7ec4\u6210\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Oprator \u662f\u4e00\u79cd\u62bd\u8c61\u5f62\u6001\uff0c\u4e3b\u8981\u7528\u4e8e\u5bf9\u67d0\u79cd\u6216\u67d0\u7c7b\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Security \u5219\u662f\u8d1f\u8d23\u7ba1\u7406\u548c\u7ef4\u62a4\u6574\u4e2a tKeel \u5e73\u53f0\u7684\u5b89\u5168\u65b9\u9762\u7684\u91cd\u8981\u7ec4\u4ef6\u3002\u4e3a\u5e73\u53f0\u7684\u5b89\u5168\u63d0\u4f9b\u652f\u6301\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repo Oprator"),"\uff1a\u5bf9\u6307\u5b9a\u7684 tKeel \u63d2\u4ef6\u6e90\u8fdb\u884c\u67e5\u8be2\u548c\u83b7\u53d6\u63d2\u4ef6\u7684\u5b89\u88c5\u5305\uff0c\u5e76\u80fd\u5728 tKeel \u8fd0\u884c\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u5378\u8f7d tKeel \u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Plugin Oprator"),"\uff1a\u5bf9\u5df2\u5b89\u88c5\u7684 tKeel \u63d2\u4ef6\uff0c\u901a\u8fc7 tKeel OpenAPI \u89c4\u8303\u8fdb\u884c\u4ea4\u4e92\uff0c\u5b9e\u73b0\u5bf9\u63d2\u4ef6\u8fdb\u884c\u6ce8\u518c\u3001\u6ce8\u9500\u3001\u63d2\u4ef6\u6269\u5c55\u5b9e\u73b0\u901a\u77e5\u3001\u79df\u6237\u542f\u7528\u63d2\u4ef6\u3001\u79df\u6237\u505c\u7528\u63d2\u4ef6\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PluginRoute Oprator"),"\uff1a\u5bf9\u5df2\u5b89\u88c5\u7684 tKeel \u63d2\u4ef6\u53ca\u5bf9\u5e94\u5b9e\u73b0\u7684\u6269\u5c55\u70b9\u7ef4\u62a4\u4e00\u4e2a\u52a8\u6001\u7684\u8def\u7531\u8868\uff0c",(0,l.kt)("a",{parentName:"li",href:"/en/internal_concepts/keel"},"Keel")," \u901a\u8fc7\u76d1\u542c\u6b64\u8def\u7531\u8868\u7684\u53d8\u5316\u5b9e\u73b0\u63d2\u4ef6\u548c\u63d2\u4ef6\u6269\u5c55\u70b9\u7684\u52a8\u6001\u6ce8\u518c\u3002\u8be5\u8def\u7531\u8868\u4ec5 Rudder \u53ef\u5199\uff0c\u5f53\u63d2\u4ef6\u6ce8\u518c\u4fe1\u606f\u53d8\u52a8\u3001\u63d2\u4ef6\u72b6\u6001\u53d8\u66f4\u6216\u63d2\u4ef6\u79df\u6237\u7684\u542f\u7528\u4fe1\u606f\u53d8\u52a8\u7b49\u5747\u5bf9\u8def\u7531\u8868\u8fdb\u884c\u5bf9\u5e94\u7684\u66f4\u65b0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Security"),"\uff1a\u5bf9 tKeel \u5e73\u53f0\u7684\u5b89\u5168\u76f8\u5173\u8bf7\u6c42\u8fdb\u884c\u5904\u7406\uff0c\u8d1f\u8d23\u79df\u6237\u3001\u7528\u6237\u548c\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\uff0c\u8d1f\u8d23\u7ef4\u62a4\u3001\u6821\u9a8c\u548c\u9881\u53d1\u4e0d\u540c\u7c7b\u578b\u7684 token\uff0c\u662f\u96c6\u6743\u9650\u63a7\u5236\u548c\u5b89\u5168\u4e8e\u4e00\u4f53\u7684\u7ec4\u4ef6\u3002")))}f.isMDXComponent=!0},3447:function(e,t,r){t.Z=r.p+"assets/images/rudder_arch-fb958130526f5cdbbb99b50e46aa3179.png"}}]);