"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9389],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||p;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),o=["components"],l={title:"\u6620\u5c04",sidebar_position:2},i=void 0,c={unversionedId:"developer_cookbook/core/specs/mapper",id:"developer_cookbook/core/specs/mapper",isDocsHomePage:!1,title:"\u6620\u5c04",description:"\u7b80\u4ecb",source:"@site/docs/developer_cookbook/core/specs/mapper.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/mapper",permalink:"/docs/zh-cn/developer_cookbook/core/specs/mapper",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/mapper.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6620\u5c04",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f53",permalink:"/docs/zh-cn/developer_cookbook/core/specs/entity"},next:{title:"\u6a21\u578b",permalink:"/docs/zh-cn/developer_cookbook/core/specs/model"}},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u6620\u5c04",id:"\u6620\u5c04",children:[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[],level:3}],level:2},{value:"\u89e3\u6790mapper",id:"\u89e3\u6790mapper",children:[{value:"\u89e3\u6790 Tentacle",id:"\u89e3\u6790-tentacle",children:[],level:3}],level:2},{value:"tentacle \u5206\u53d1",id:"tentacle-\u5206\u53d1",children:[],level:2},{value:"mapper &amp; tentacle \u6570\u636e\u6d41\u5411",id:"mapper--tentacle-\u6570\u636e\u6d41\u5411",children:[],level:2},{value:"Issues",id:"issues",children:[],level:2}],d={toc:m};function s(e){var t=e.components,l=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u662f\u5bf9\u4e8e\u7528\u4e8e\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u6570\u636e\u6620\u5c04\u7684\u4e00\u79cd\u5bf9\u8c61\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"MQL"),"\u63cf\u8ff0\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u7684\u6570\u636e\u6620\u5c04\u3002"),(0,p.kt)("h2",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,p.kt)("p",null,"\u6620\u5c04\u5c31\u662f\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u4f53\u4e2d\u9009\u53d6\u90e8\u5206\u5c5e\u6027\uff0c\u7136\u540e\u5c06\u9009\u53d6\u7684\u90e8\u5206\u5c5e\u6027\u7ecf\u8fc7\u91cd\u7ec4\u6216\u8ba1\u7b97\u7136\u540e\u66f4\u65b0\u76ee\u6807\u5b9e\u4f53\u7684\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"property-mapping",src:n(8485).Z})),(0,p.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Actor\uff1a\u5b9e\u4f53\u7684\u8fd0\u884c\u65f6\uff0c\u7ef4\u62a4\u5b9e\u4f53\u7684\u72b6\u6001\u548c\u63d0\u4f9b\u7684\u64cd\u4f5c\u3002"),(0,p.kt)("li",{parentName:"ul"},"maper: Actor\u4e0eActor\u4e4b\u95f4\u6570\u636e\u6620\u5c04\u7684\u6267\u884c\u5b9e\u4f8b\u3002"),(0,p.kt)("li",{parentName:"ul"},"computed\uff1a mapper\u5185\u7684\u8ba1\u7b97\u6a21\u5757\uff0c\u901a\u8fc7\u8f93\u5165\u8ba1\u7b97\u8f93\u51fa\u3002"),(0,p.kt)("li",{parentName:"ul"},"SourceActor\uff1a\u5728\u6620\u5c04\u4e2d\u63d0\u4f9b\u53d8\u66f4\u6570\u636e\u7684Actor\uff0c\u5982\u56fe\u4e2d\u7684Actor1\u3002"),(0,p.kt)("li",{parentName:"ul"},"TargetActor\uff1a\u5728\u6620\u5c04\u4e2d\u4f5c\u4e3a\u6620\u5c04\u76ee\u6807\u7684Actor\uff0c\u5982\u56fe\u4e2d\u7684Actor2\u3002")),(0,p.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5bf9\u6b64\u8fc7\u7a0b\u7684\u5206\u6790\uff0c\u53ef\u5c06\u8fd9\u4e00\u8fc7\u7a0b\u5206\u4e3a\u4e09\u90e8\u5206\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5199\u590d\u5236\u4f20\u9012\u5b9e\u4f53\u5c5e\u6027\u7684\u53d8\u66f4\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5c06\u5c5e\u6027\u7684\u53d8\u66f4\u4f5c\u4e3a\u8f93\u5165\u8ba1\u7b97\u6620\u5c04\u7ed3\u679c\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5c06\u6620\u5c04\u8ba1\u7b97\u7ed3\u679c\u66f4\u65b0\u5230Actor\u3002")),(0,p.kt)("p",null,"\u91c7\u7528\u5b8f\u89c2\u7684\u89c6\u89d2\u770b\u6765\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u7684\u6570\u636e\u6620\u5c04\u5c31\u662f\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"SourceActor"),"\u4e2d\u9009\u53d6\u90e8\u5206\u5c5e\u6027\u4f5c\u4e3a\u8f93\u5165\uff0c\u901a\u8fc7\u91cd\u7ec4\u6216\u8ba1\u7b97\u5f97\u5230\u8f93\u51fa\uff0c\u7136\u540e\u5c06\u8f93\u51fa\u66f4\u65b0\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"TargetActor"),"\u3002\u800c\u6211\u4eec\u53ef\u4ee5\u5bf9\u8fd9\u4e00\u8fc7\u7a0b\u8fdb\u884c\u6982\u62ec\uff0c\u6765\u81ea",(0,p.kt)("inlineCode",{parentName:"p"},"SourceActor"),"\u7684\u8f93\u5165\u7ec4\u6210\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\u6570\u636e\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"\u6620\u5c04"),"\u7684\u8f93\u51fa\u662f\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\uff0c\u90a3\u4e48\u6b64\u65f6\u6211\u4eec\u53d1\u73b0\u6211\u4eec\u6240\u505a\u7684\u6620\u5c04\u5176\u5b9e\u5c31\u662f\u4ece",(0,p.kt)("inlineCode",{parentName:"p"},"SourceActor"),"\u62ff\u5230\u8f93\u5165",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\uff0c\u901a\u8fc7\u4e00\u5b9a\u7684\u8f6c\u5316",(0,p.kt)("inlineCode",{parentName:"p"},"\u89c4\u5219"),"\u5c06\u8f93\u5165",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\u8f6c\u5316\u6210\u53e6\u4e00\u4e2a\u8f93\u51fa",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\uff0c\u7136\u540e\u5728\u5c06\u8f93\u51fa\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Json"),"\u66f4\u65b0\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"TargetActor"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"property-mapping-outline",src:n(2412).Z}),")"),(0,p.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5bf9\u6b64\u8fc7\u7a0b\u7684\u5206\u6790\uff0c\u53ef\u5c06\u8fd9\u4e00\u8fc7\u7a0b\u5206\u4e3a\u4e09\u90e8\u5206\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a",(0,p.kt)("inlineCode",{parentName:"li"},"SourceActor"),"\u4e2d\u9009\u53d6\u90e8\u5206\u5c5e\u6027\uff0c\u9009\u53d6\u7684\u6570\u636e\u53ef\u4ee5\u6784\u6210\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"li"},"json"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u4ee5\u9009\u53d6\u7684\u6570\u636e\u4f5c\u4e3a",(0,p.kt)("inlineCode",{parentName:"li"},"mapper"),"\u7684\u8f93\u5165\uff0c\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"li"},"mapper"),"\u5e76\u8f93\u51fa\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"li"},"json"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5c06",(0,p.kt)("inlineCode",{parentName:"li"},"mapper"),"\u6267\u884c\u7684\u8f93\u51fa\u4f5c\u4e3a\u53cd\u9988\u66f4\u65b0\u76ee\u6807\u5b9e\u4f53\u7684\u72b6\u6001\u3002")),(0,p.kt)("h2",{id:"\u89e3\u6790mapper"},"\u89e3\u6790mapper"),(0,p.kt)("p",null,"\u6211\u4eec\u77e5\u9053",(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u6267\u884c\u5206\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"\u9009\u53d6\u8f93\u5165"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"\u8ba1\u7b97\u8f93\u51fa"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"\u66f4\u65b0\u76ee\u6807Actor\u72b6\u6001"),"\u4e09\u4e2a\u9636\u6bb5\u3002\u4e3a\u4e86\u6ee1\u8db3\u8fd9\u4e09\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u7ed9",(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u5f15\u5165\u4e24\u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"MQL"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"tentacle"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"MQL"),"\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u7684\u6838\u5fc3\u7ec4\u4ef6\u7528\u4e8e\u63cf\u8ff0\u6620\u5c04\u4e2djson\u7684\u8f6c\u5316\u89c4\u5219\uff0c\u6267\u884c\u8ba1\u7b97\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"tentacle"),"\u8bd1\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"\u89e6\u624b"),"\uff0c\u7528\u4e8e\u6620\u5c04\u7b2c\u4e00\u9636\u6bb5\u4e2d\u7684\u5c5e\u6027\u53d8\u66f4\u7684\u540c\u6b65\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"mapper-tentacle-mql",src:n(4543).Z})),(0,p.kt)("h3",{id:"\u89e3\u6790-tentacle"},"\u89e3\u6790 Tentacle"),(0,p.kt)("p",null,"\u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"Tentacle")," \u5728\u5b9a\u4e49",(0,p.kt)("inlineCode",{parentName:"p"},"TQL")," \u7684\u65f6\u5019\u6211\u4eec\u6709\u65f6\u5019\u5c31\u80fd\u591f\u6307\u4ee3\u6e05\u695a\u6211\u4eec\u5b9a\u4e49\u7684\u9009\u53d6\u7684\u5b9e\u4f53\u6216\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u7ed3\u5408\u670d\u52a1\u8282\u70b9\u7684\u4e0a\u4e0b\u6587\u8ba1\u7b97\u89e3\u6790\u624d\u80fd\u5f97\u5230\u7ed3\u8bba\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"tentacle-tow-layer-parse",src:n(8339).Z})),(0,p.kt)("p",null,"\u5728\u7ed3\u5408\u670d\u52a1\u8282\u70b9\u4e0a\u4e0b\u6587\u89e3\u6790\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5206\u4e3a\u52a8\u6001\u548c\u9759\u6001\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,p.kt)("h2",{id:"tentacle-\u5206\u53d1"},"tentacle \u5206\u53d1"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"mapper-tentacles",src:n(5333).Z})),(0,p.kt)("h2",{id:"mapper--tentacle-\u6570\u636e\u6d41\u5411"},"mapper & tentacle \u6570\u636e\u6d41\u5411"),(0,p.kt)("p",null,"mapper\u901a\u8fc7\u89e3\u6790",(0,p.kt)("inlineCode",{parentName:"p"},"MQL"),"\u751f\u6210",(0,p.kt)("inlineCode",{parentName:"p"},"tentacle"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"mapper"),"\u4e3a\u6bcf\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"SourceActor"),"\u751f\u6210\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"tentacle"),"\u7528\u4e8e\u540c\u6b65\u5c5e\u6027\u53d8\u66f4\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"mapper-tentacles",src:n(453).Z})),(0,p.kt)("h2",{id:"issues"},"Issues"),(0,p.kt)("p",null,"\u5728\u6211\u4eec\u8bbe\u8ba1\u7684\u7cfb\u7edf\u4e2d\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u7684\u6570\u636e\u662f\u53ef\u4ee5\u76f8\u4e92\u4f20\u9012\u7684\uff0c\u5bf9\u4e8e\u4e0a\u884c\u6570\u636e\u800c\u8a00\uff0c\u662f\u5bf9\u771f\u5b9e\u72b6\u6001\u7684\u6269\u6563\u548c\u4f20\u9012\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0b\u884c\u7684\u8c03\u7528\u6570\u636e\uff0c\u5176\u5b9e\u4e00\u4e2a\u671f\u671b\u503c\u5411\u4e0b\u4f20\u9012\u7684\u8fc7\u7a0b\uff0c\u662f\u5426\u9700\u8981Ack\uff0c\u9700\u8981desired\uff1f \u540c\u4e8b\u5b9e\u4f53\u7684\u8c03\u7528\u5c5e\u6027\u662f\u5426\u4f1a\u5904\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"\u5360\u7528"),"\u72b6\u6001\uff1f"))}s.isMDXComponent=!0},5333:function(e,t,n){t.Z=n.p+"assets/images/mapper-data-directory2-1fecfb7795bb5b43cd0cdd7fdd526d99.png"},4543:function(e,t,n){t.Z=n.p+"assets/images/mapper-tentacle-mql2-5dc01e7cf552616a2883c3826eb1424b.png"},453:function(e,t,n){t.Z=n.p+"assets/images/mapper-tentacles-124641553f9adc983acda689235e8292.png"},2412:function(e,t,n){t.Z=n.p+"assets/images/mapping-outline-869c769289f198581108d565d13da0dc.png"},8485:function(e,t,n){t.Z=n.p+"assets/images/property-mapping-72952d0d2fe4e0fd02cd76940fbac9c7.png"},8339:function(e,t,n){t.Z=n.p+"assets/images/tentacle-tow-layer-parse-63b557f56464874971d66497ddec69de.png"}}]);