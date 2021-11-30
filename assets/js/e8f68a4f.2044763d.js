"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5746:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1,title:"tKeel"},l="tKeel",p={unversionedId:"internal_concepts/tkeel",id:"internal_concepts/tkeel",isDocsHomePage:!1,title:"tKeel",description:"Introduction",source:"@site/docs/internal_concepts/tkeel.md",sourceDirName:"internal_concepts",slug:"/internal_concepts/tkeel",permalink:"/docs/internal_concepts/tkeel",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/internal_concepts/tkeel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"tKeel"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf10 Deployment",permalink:"/docs/deployment"},next:{title:"Keel",permalink:"/docs/internal_concepts/keel"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2}],s={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tkeel"},"tKeel"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u6b63\u5982\u60a8\u7684\u731c\u60f3\u4e00\u6837\uff0c tKeel \u662f\u6211\u4eec\u5bf9\u6574\u4e2a\u5e73\u53f0\u7684\u79f0\u547c\uff0c\u56e0\u4e3a\u529f\u80fd\u5f3a\u5927\u3001\u903b\u8f91\u590d\u6742\uff0c\u6211\u4eec\u5bf9\u4e0d\u540c\u529f\u80fd\u6a21\u5757\u505a\u51fa\u4e86\u4e00\u4e9b\u547d\u540d\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7f57\u5217\u7684\u662f\u6211\u4eec\u5e73\u53f0\u4e2d\u4e00\u4e9b\u91cd\u8981\u6a21\u5757\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u6211\u4eec\u5bf9\u5e94\u7684\u6587\u6863\u83b7\u53d6\u76f8\u5173\u6a21\u5757\u7684\u8be6\u7ec6\u8d44\u6599:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/internal_concepts/keel"},"Keel"),"\n\u7f51\u5173\u6a21\u5757 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/internal_concepts/rudder"},"Rudder"),"\n\u63d2\u4ef6\u6a21\u5757\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/core/getting_started"},"Core"),"\n\u6570\u636e\u5c42\u62bd\u8c61\u6a21\u5757"))),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"image demo",src:n(701).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u53ef\u6269\u5c55"),"\uff1a\u91c7\u7528\u4e91\u539f\u751f\u65b9\u6cd5\u6784\u5efa\uff0c\u57fa\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u63d0\u9ad8\u7075\u6d3b\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u5229\u7528\u4e91\u5e73\u53f0\u8bbe\u65bd\u5b9e\u73b0\u5f39\u6027\u4f38\u7f29\u3001\u52a8\u6001\u8c03\u5ea6\u3001\u4f18\u5316\u8d44\u6e90\u5229\u7528\u7387\uff0c\u5177\u6709\u6bd4\u4f20\u7edf\u7cfb\u7edf\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u540c\u65f6\u80fd\u591f\u4fc3\u8fdb\u5f00\u53d1\u3001\u52a0\u5feb\u901f\u5ea6\u548c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5065\u58ee\u9ad8\u6548"),"\uff1a\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"/docs/core/getting_started"},"\u6570\u636e\u5c42")," \u5b9a\u4e49\u4e86\u6570\u636e\u5b9e\u4f53\u3002 \u5bf9\u771f\u5b9e\u4e16\u754c\u7684\u7269\u4f53\uff08things\uff09\u8fdb\u884c\u4e86\u6a21\u62df\u3001\u62bd\u8c61\uff0c \u60a8\u53ef\u4ee5\u5b9a\u4e49\u5173\u7cfb\u6620\u5c04\uff0c\u4f7f\u5f97\u6570\u636e\u5728\u5b9e\u4f53\u4e4b\u95f4\u9ad8\u901f\u6d41\u52a8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u7b80\u5355"),"\uff1a\u57fa\u4e8e Dapr \u6784\u5efa\uff0c\u89e3\u51b3\u4e86\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u6d41\u5411\u4e0e\u62bd\u8c61\u95ee\u9898\uff0c\u5c4f\u853d\u4e86\u5e95\u5c42\u7684\u590d\u6742\u6027\uff0c\u5411\u5916\u63d0\u4f9b\u4e86\u66f4\u7b80\u5355\uff0c\u9762\u5411\u5f00\u53d1\u8005\u66f4\u53cb\u597d\u7684\u62bd\u8c61 \uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u6784\u5efa\u7269\u8054\u7f51\u89e3\u51b3\u65b9\u6848\u3002")))}d.isMDXComponent=!0},701:function(e,t,n){t.Z=n.p+"assets/images/system-4b48ed579defd66c60f70970fc6bccdd.png"}}]);