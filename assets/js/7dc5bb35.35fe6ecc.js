"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[825],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={title:"\u6d88\u606f\u89c4\u8303",sidebar_position:3},p=void 0,u={unversionedId:"developer_cookbook/iothub/message_spec",id:"developer_cookbook/iothub/message_spec",title:"\u6d88\u606f\u89c4\u8303",description:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",source:"@site/docs/developer_cookbook/iothub/message_spec.md",sourceDirName:"developer_cookbook/iothub",slug:"/developer_cookbook/iothub/message_spec",permalink:"/developer_cookbook/iothub/message_spec",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/iothub/message_spec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6d88\u606f\u89c4\u8303",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",permalink:"/developer_cookbook/iothub/devices_access_specification"},next:{title:"\ud83d\uddfa\ufe0f Roadmap",permalink:"/roadmap"}},s={},c=[{value:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",id:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",level:2},{value:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e API",id:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e-api",level:3},{value:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0",id:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0",level:4},{value:"\u5c5e\u6027\u6570\u636e API",id:"\u5c5e\u6027\u6570\u636e-api",level:3},{value:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0",id:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0",level:4},{value:"\u8bbe\u5907\u83b7\u53d6\u5e73\u53f0\u5c5e\u6027",id:"\u8bbe\u5907\u83b7\u53d6\u5e73\u53f0\u5c5e\u6027",level:4},{value:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316",id:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316",level:4},{value:"\u9065\u6d4b\u6570\u636e API",id:"\u9065\u6d4b\u6570\u636e-api",level:3},{value:"\u547d\u4ee4\u6570\u636e API",id:"\u547d\u4ee4\u6570\u636e-api",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b"},"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e09\u7c7b\u4e0a\u884c\u6570\u636e\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\uff0c \u5c5e\u6027\uff0c \u9065\u6d4b\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e24\u7c7b\u4e0b\u884c\u6570\u636e\uff08\u5c5e\u6027\uff08\u53ef\u5199\uff09\uff0c \u547d\u4ee4\uff09")),(0,r.kt)("h3",{id:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e-api"},"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e API"),(0,r.kt)("h4",{id:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0"},"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic\uff1a \u5408\u6cd5\u7684\u975e\u5e73\u53f0\u9884\u5b9a\u4e49\u7684 topic \u5747\u4f5c\u4e3a\u539f\u59cb\u6570\u636etopic, \u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002"),(0,r.kt)("li",{parentName:"ul"},"payload\uff1a \u4e0a\u884c\u539f\u59cb\u6570\u636e\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\uff0c \u6bd4\u5982 json, \u4e8c\u8fdb\u5236\u6570\u636e\u7b49\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e.")),(0,r.kt)("h3",{id:"\u5c5e\u6027\u6570\u636e-api"},"\u5c5e\u6027\u6570\u636e API"),(0,r.kt)("p",null,"\u5c5e\u6027API\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u83b7\u53d6\u5e73\u53f0\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316")),(0,r.kt)("h4",{id:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"},"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u7684\u8bbe\u5907")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic: ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes")),(0,r.kt)("li",{parentName:"ul"},"payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attribute1": "value1",\n   "attribute2": "value2"\n}\n')),(0,r.kt)("p",null," or\uff08\u540e\u7eed\u6269\u5c55\u652f\u6301\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "ts": 1646964832292, //\u6beb\u79d2\n   "values": {\n      "attribute1": "value1",\n      "attribute2": "value2"\n   }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e0b\u6e38\u8bbe\u5907\u7684\u7f51\u5173\u8bbe\u5907")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic: ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/gateway/attributes")),(0,r.kt)("li",{parentName:"ul"},"payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "deviceA": { //\u5b50\u8bbe\u5907\u540d\n        "attribute1": "value1",\n        "attribute2": "value2"\n    },\n    "deviceB": { // \u5b50\u8bbe\u5907\u540d\n        "attribute1": "value1",\n        "attribute2": "value2"\n    }\n}\n')),(0,r.kt)("h4",{id:"\u8bbe\u5907\u83b7\u53d6\u5e73\u53f0\u5c5e\u6027"},"\u8bbe\u5907\u83b7\u53d6\u5e73\u53f0\u5c5e\u6027"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u7684\u8bbe\u5907")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"steps:")),(0,r.kt)("p",null,"a. \u8bbe\u5907\u8ba2\u9605 topic: ",(0,r.kt)("inlineCode",{parentName:"p"}," v1/devices/me/attributes/response/+")),(0,r.kt)("p",null,"b. \u8bbe\u5907\u53d1\u5e03 topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/devices/me/attributes/request/$request_id"),", \u5176\u4e2d$request_id\u4e3a\u8bf7\u6c42ID\u3002payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keys": "attribute1,attribute2"\n}\n')),(0,r.kt)("p",null,'c. \u5e73\u53f0\u53d1\u5e03 topic: "v1/devices/me/attributes/response/$request_id", payload:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attribute1": "value1",\n   "attribute2": "value2"\n}\n')),(0,r.kt)("p",null,"d. \u8bbe\u5907\u6536\u5230\u5e73\u53f0\u53d1\u9001\u7684C\u7684\u6570\u636e"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e0b\u6e38\u8bbe\u5907\u7684\u7f51\u5173\u8bbe\u5907")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"steps:")),(0,r.kt)("p",null,"a. \u8bbe\u5907\u8ba2\u9605 topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/gateway/attributes/response")),(0,r.kt)("p",null,"b. \u8bbe\u5907\u53d1\u5e03 topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/gateway/attributes/request"),",payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "$request_id",\n    "device": "device A",\n    "key": "attribute1"\n}\n')),(0,r.kt)("p",null,'c. \u5e73\u53f0\u53d1\u5e03 topic: "v1/gateway/attributes/response"\u3002 payload:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "$request_id",\n    "device": "device A",\n    "value": "value1"\n}\n')),(0,r.kt)("p",null,"d. \u8bbe\u5907\u6536\u5230\u5e73\u53f0\u53d1\u9001\u7684C\u7684\u6570\u636e"),(0,r.kt)("h4",{id:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316"},"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u7684\u8bbe\u5907\n\u8bbe\u5907\u8ba2\u9605 topic\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes"),"\n\u5e73\u53f0\u63a8\u9001\u7684 payload\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attribute1": "value1",\n   "attribute2": "value2"\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e0b\u6e38\u8bbe\u5907\u7684\u7f51\u5173\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u7684\u8bbe\u5907\n\u8bbe\u5907\u8ba2\u9605 topic\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/gateway/attributes"),"\n\u5e73\u53f0\u63a8\u9001\u7684 payload\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "device": "device A",\n   "data": {\n       "attribute1": "value1",\n       "attribute2": "value2"\n   }\n}\n')),(0,r.kt)("h3",{id:"\u9065\u6d4b\u6570\u636e-api"},"\u9065\u6d4b\u6570\u636e API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a8\u9001\u9065\u6d4b\u6570\u636e\u5230\u5e73\u53f0")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e00\u822c\u7684\u8bbe\u5907")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic: ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/telemetry")),(0,r.kt)("li",{parentName:"ul"},"payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "telemetry1": "value1"\n   "telemetry2": "value2"\n}\n')),(0,r.kt)("p",null," or\uff08\u540e\u7eed\u6269\u5c55\u652f\u6301\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "ts": 1646964832292, //\u6beb\u79d2\n   "values": {\n        "telemetry1": "value1"\n        "telemetry2": "value2"\n   }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e0b\u6e38\u8bbe\u5907\u7684\u7f51\u5173\u8bbe\u5907")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topic: ",(0,r.kt)("inlineCode",{parentName:"li"},"v1/gateway/telemetry")),(0,r.kt)("li",{parentName:"ul"},"payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Device A": {\n        "ts":1483228800000, //\u6beb\u79d2\n        "values":{\n            "temperature":42,\n            "humidity":80\n        }\n    },\n    "Device B": {\n        "ts":1483228800000, //\u6beb\u79d2\n        "values":{\n            "temperature":42,\n            "humidity":80\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u547d\u4ee4\u6570\u636e-api"},"\u547d\u4ee4\u6570\u636e API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"steps:")),(0,r.kt)("p",null,"a. \u8bbe\u5907\u8ba2\u9605topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"1/devices/me/command/request/+")),(0,r.kt)("p",null,"b. \u5e73\u53f0\u53d1\u5e03topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/devices/me/command/request/$request_id"),", payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "ota",\n   "paras": {\n      "firmware_address": "http://xxx.yyy.com",\n      "version": "latest",\n      "secret": "****",\n      "http_method": "GET"\n   },\n   "ts": 1646964832292 //\u6beb\u79d2\n}\n')),(0,r.kt)("p",null,"c. \u8bbe\u5907\u6536\u5230\u547d\u4ee4\u6d88\u606f\u4e4b\u540e\u56de\u590d topic: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/devices/me/command/response/$request_id"),", payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "ota",\n   "data": {\n       "success": true\n   }\n}\n')))}m.isMDXComponent=!0}}]);