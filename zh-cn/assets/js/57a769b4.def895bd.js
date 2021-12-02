"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7149],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=a(n),m=o,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||p;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<p;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return y}});var r=n(7462),o=n(3366),p=(n(7294),n(3905)),i=["components"],l={title:"TQL",sidebar_position:8},c=void 0,a={unversionedId:"developer_cookbook/core/specs/tql",id:"developer_cookbook/core/specs/tql",isDocsHomePage:!1,title:"TQL",description:"\u7b80\u4ecb",source:"@site/docs/developer_cookbook/core/specs/tql.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/tql",permalink:"/docs/zh-cn/developer_cookbook/core/specs/tql",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/tql.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"TQL",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u8ba2\u9605",permalink:"/docs/zh-cn/developer_cookbook/core/specs/subscription"},next:{title:"Actor",permalink:"/docs/zh-cn/developer_cookbook/core/specs/actor"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"Demo1",id:"demo1",children:[],level:2}],u={toc:s};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"TQL"),"\u5373Tkeel QL\uff0c \u4e3b\u8981\u7528\u4e8e\u6570\u636e\u9009\u62e9\uff0c\u5982\u4e0b"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"core \u4e0e\u5404\u4e2a\u63d2\u4ef6\u4e4b\u95f4\u7684\u8ba2\u9605\u7684\u6570\u636e\u9009\u62e9 "),(0,p.kt)("li",{parentName:"ol"},"core \u5185\u90e8entity\u4e4b\u95f4\u7684\u6620\u5c04\uff08mapper\uff09\u7684\u6570\u636e\u9009\u62e9 ")),(0,p.kt)("p",null,"\u63d0\u4f9b\u7684\u529f\u80fd\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"tql"),"\u7684\u89e3\u6790\uff0c\u63d0\u4f9b API \u5c06 ",(0,p.kt)("inlineCode",{parentName:"li"},"tql")," \u8bed\u53e5\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a TargetEntity\uff0cSourceActors\uff0cTentacles\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u7ed3\u679c\uff0c\u63d0\u4f9b API \u8f93\u5165\u53c2\u6570 \u6309\u7167",(0,p.kt)("inlineCode",{parentName:"li"},"tql"),"\u8bed\u6cd5\u8ba1\u7b97\u51fa\u7ed3\u679c\u5e76\u8f93\u51fa\u3002 \uff08\u8ba2\u9605\u4e0d\u652f\u6301\u8fd9\u4e00\u6b65\uff0c \u4ec5mapper\uff09")),(0,p.kt)("h2",{id:"demo1"},"Demo1"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u73b0\u6709\u4e09\u4e2a\u5b9e\u4f53\uff0c\u5c06entity1\u548centity2\u7684\u90e8\u5206\u6570\u636e\u6620\u5c04\u5230entity3\u3002"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre"},"TQL:\n    insert into entity3 select\n        entity1.property1 as property1,\n        entity2.property2.name as property2,\n        entity1.property1 + entity2.property3 as property3\n"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'`insert into` \u5fc5\u586b\uff0c\n\n`entity3` \u8ba2\u9605\u53ef\u4ee5\u662f\u8ba2\u9605\u7684ID\uff0c mapper\u662fentity ID \n\n`select` \u5fc5\u586b\uff0c \u540e\u9762\u652f\u6301\u901a\u914d\u7b26\n\n`as` \u53ef\u9009\uff0c \u8ba2\u9605\u6ca1\u6709as\uff0c mapper\u6709as\n\n\n> 1. `tql`\u89e3\u6790\uff0c \u8f93\u51fa\u5982\u4e0b`json`\u3002\n```json\n{\n  "TargetEntity": "entity3",\n  "SourceEntities": ["entity1", "entity2"],\n  "Tentacles": {\n    "entity1": ["property1"],\n    "entity2": ["property2", "property3"]\n  }\n}\n')),(0,p.kt)("blockquote",null,(0,p.kt)("ol",{parentName:"blockquote",start:2},(0,p.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u7ed3\u679c,\u8f93\u5165\u4e3aInput(map), \u8f93\u51fa\u4e3aOutput(map)\u3002")),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'Input:\n{\n  "entity1.property1": 1,\n  "entity2.property2.name": 2,\n  "entity2.property3": 3\n}\n'))),(0,p.kt)("p",null,'Output:\n{\n"property1": 1,\n"property2": 2,\n"property3": 4\n}'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"\u540e\u7eed\u518d\u8003\u8651\u652f\u6301\u83b7\u53d6\u5355\u6b65\u8ba1\u7b97\u7ed3\u679c\u3002\n\n\n\n## Demo2\n\n\u573a\u666f\uff1a`\u8bbe\u5907\u7ba1\u7406` \u8ba2\u9605\u6240\u6709\u7684 `\u8bbe\u5907\u63a5\u5165` \u6570\u636e, \n")),(0,p.kt)("p",null,"TQL:\ninsert into sub_entity_id select *"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'1. tql\u89e3\u6790\u8f93\u51fa\n```json\n{\n  "TargetEntity": "sub_entity_id",\n  "SourceEntities": ["*"],\n  "Tentacles": {\n    "*": ["*"]\n  }\n}\n')))}y.isMDXComponent=!0}}]);