"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1253],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4689:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return b}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},s=void 0,u={unversionedId:"api/core-broker/tag",id:"api/core-broker/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/core-broker/tag.md",sourceDirName:"api/core-broker",slug:"/api/core-broker/tag",permalink:"/en/api/core-broker/tag",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core-broker/tag.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"VerifyToken",permalink:"/en/api/Rudder/method_VerifyToken"},next:{title:"Entity_GetEntity",permalink:"/en/api/core-broker/method_Entity_GetEntity"}},c={},b=[{value:"subscribe\u76f8\u5173API",id:"subscribe\u76f8\u5173api",level:2}],p={toc:b};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"subscribe\u76f8\u5173api"},"subscribe\u76f8\u5173API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_SubscribeByDevice"},"SubscribeByDevice")),(0,i.kt)("td",{parentName:"tr",align:null},"subscribe by device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByGroups"},"subscribeEntitiesByGroups")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by groups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_ValidateSubscribed"},"ValidateSubscribed")),(0,i.kt)("td",{parentName:"tr",align:null},"validate subscribe topic is user request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_unsubscribeEntitiesByIDs"},"unsubscribeEntitiesByIDs")),(0,i.kt)("td",{parentName:"tr",align:null},"delete subscribe entities by ids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_listSubscribeEntities"},"listSubscribeEntities")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe entities list")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByModels"},"subscribeEntitiesByModels")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by models")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_createSubscribe"},"createSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"create subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_listSubscribe"},"listSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe list")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_getSubscribe"},"getSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_deleteSubscribe"},"deleteSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"delete subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_changeSubscribe"},"changeSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"change subscribed to other subscription")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_updateSubscribe"},"updateSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"update subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByIDs"},"subscribeEntitiesByIDs")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by ids")))))}d.isMDXComponent=!0}}]);