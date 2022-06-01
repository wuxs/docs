"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4350],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=k(n),s=r,N=m["".concat(o,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65978:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_position:5,title:"\u6388\u6743\u670d\u52a1"},o=void 0,k={unversionedId:"developer_cookbook/security/SECURITY-006-oauth2",id:"developer_cookbook/security/SECURITY-006-oauth2",title:"\u6388\u6743\u670d\u52a1",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6388\u6743\u65b9\u5f0f\u5e0c\u671b\u53ef\u4ee5\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002",source:"@site/docs/developer_cookbook/security/SECURITY-006-oauth2.md",sourceDirName:"developer_cookbook/security",slug:"/developer_cookbook/security/SECURITY-006-oauth2",permalink:"/developer_cookbook/security/SECURITY-006-oauth2",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/security/SECURITY-006-oauth2.md",tags:[],version:"current",lastUpdatedAt:1638499921,formattedLastUpdatedAt:"2021/12/3",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6388\u6743\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u8bbf\u95ee\u63a7\u5236",permalink:"/developer_cookbook/security/SECURITY-005-rbac"},next:{title:"\u8bbe\u5907\u751f\u547d\u5468\u671f\u53ca\u7ec4\u7ec7",permalink:"/developer_cookbook/device/devices/device"}},d={},u=[{value:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b",id:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b",level:2},{value:"Password",id:"password",level:3},{value:"Authorization Code",id:"authorization-code",level:3},{value:"\u83b7\u53d6\u6388\u6743 code",id:"\u83b7\u53d6\u6388\u6743-code",level:4},{value:"\u83b7\u53d6 token",id:"\u83b7\u53d6-token",level:4},{value:"Implicit",id:"implicit",level:3},{value:"Client Credentials",id:"client-credentials",level:3},{value:"Token \u7684\u4f7f\u7528",id:"token-\u7684\u4f7f\u7528",level:2},{value:"\u9a8c\u8bc1 token",id:"\u9a8c\u8bc1-token",level:3},{value:"\u5237\u65b0 token",id:"\u5237\u65b0-token",level:3}],m={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6388\u6743\u65b9\u5f0f\u5e0c\u671b\u53ef\u4ee5\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b"},"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b"),(0,l.kt)("p",null,"\u73b0\u5e73\u53f0\u5b89\u5168\u6a21\u5757\u652f\u6301\u5982\u4e0b\u591a\u79cd\u6388\u6743\u7c7b\u578b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#password"},"Password")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u5982\u679c\u5145\u5206\u4fe1\u4efb\u63a5\u5165\u5e94\u7528, \u7528\u6237\u5c31\u53ef\u4ee5\u76f4\u63a5\u628a\u7528\u6237\u540d\u5bc6\u7801\u7ed9\u63a5\u5165\u5e94\u7528\uff0c\u63a5\u5165\u5e94\u7528\u4f7f\u7528\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u7533\u8bf7\u4ee4\u724c.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authorization-code"},"Authorization Code")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6388\u6743\u7801\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u6027\u9ad8\uff0c\u6d41\u7a0b\u590d\u6742\u3002\u8981\u6c42\u7b2c\u4e09\u65b9\u5e94\u7528\u5fc5\u987b\u6709\u670d\u52a1\u5668\u3002\u5bf9\u5b89\u5168\u6027\u8981\u6c42\u8f83\u9ad8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5316\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u591a\u7528\u4e8e\u6ca1\u6709\u540e\u7aef\u7684\u5e94\u7528\uff0c\u7528\u6237\u6388\u6743\u767b\u5f55\u4e4b\u540e, \u4f1a\u76f4\u63a5\u5411\u524d\u7aef\u53d1\u9001\u4ee4\u724c(",(0,l.kt)("inlineCode",{parentName:"td"},"access_token"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#client-credentials"},"Client Credentials")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u51ed\u636e\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u4f7f\u7528\u5728 OAuth2 \u670d\u52a1\u5668\u6ce8\u518c\u7684 client_id \u548c client_secret \u83b7\u53d6 access_token\uff0c\u53d1\u51fa API \u8bf7\u6c42\u65f6\uff0c\u5b83\u5e94\u5c06access_token\u4f5c\u4e3a Bearer \u4ee4\u724c\u4f20\u9012\u5230 Authorization \u8bf7\u6c42\u5934\u4e2d\u3002")))),(0,l.kt)("h3",{id:"password"},"Password"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u5982\u679c\u5145\u5206\u4fe1\u4efb\u63a5\u5165\u5e94\u7528, \u7528\u6237\u5c31\u53ef\u4ee5\u76f4\u63a5\u628a\u7528\u6237\u540d\u5bc6\u7801\u7ed9\u63a5\u5165\u5e94\u7528\uff0c\u63a5\u5165\u5e94\u7528\u4f7f\u7528\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u7533\u8bf7\u4ee4\u724c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /oauth/token\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"Content-Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body \u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"password"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1, str2, str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b ",(0,l.kt)("inlineCode",{parentName:"td"},"all"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response \u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDMyNzA3LCJzdWIiOiJhZG1pbiJ9.ECfUkCMUZE8I6GH3XTDcJnQgDryiRyyBhEHBW-dCxzFWaR-mvU5dsx3XV2bx-LWZzPJTBAQ3rB5QOb4BHjnBXw",\n    "expires_in": 7200,\n    "refresh_token": "AH-B00RKXTME9WXDPSBSTG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h3",{id:"authorization-code"},"Authorization Code"),(0,l.kt)("p",null,"\u5b89\u5168\u6027\u9ad8\uff0c\u4f7f\u7528\u7387\u9ad8\uff0c\u6d41\u7a0b\u590d\u6742\u3002\u8981\u6c42\u7b2c\u4e09\u65b9\u5e94\u7528\u5fc5\u987b\u6709\u670d\u52a1\u5668\u3002\u5bf9\u5b89\u5168\u6027\u8981\u6c42\u8f83\u9ad8\u3002"),(0,l.kt)("h4",{id:"\u83b7\u53d6\u6388\u6743-code"},"\u83b7\u53d6\u6388\u6743 code"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /oauth/authorize\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728oauth2 server \u6ce8\u518c\u7684client_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1, str2, str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b ",(0,l.kt)("inlineCode",{parentName:"td"},"all"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u8bf7\u6c42\u7684\u6807\u5fd7\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u653e ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u7528\u7684\u56de\u8c03 uri,\u56de\u8c03\u65f6\u4f1a\u5728 uri \u540e\u9762\u8ddf\u4e0a",(0,l.kt)("inlineCode",{parentName:"td"},"?code=**&state=###"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=code&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"302 http://localhost:8080/oauth/on_code?code=XUNKO4OPPROWAPFKEWNZWA&state=xyz\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u8fd9\u91cc\u4f1a\u8fd4\u56de\u8bf7\u6c42\u65f6\u8bbe\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),", \u8bf7\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\u9a8c\u8bc1\u5b83, \u9632\u6b62\u8bf7\u6c42\u88ab\u52ab\u6301\u6216\u8005\u7be1\u6539")),(0,l.kt)("h4",{id:"\u83b7\u53d6-token"},"\u83b7\u53d6 token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"POST /oauth/token\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"Content-Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body \u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"authorization_code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6388\u6743 code \u54cd\u5e94\u4e2d\u5f97\u5230\u7684 code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6388\u6743 code \u8bf7\u6c42\u4e2d\u586b\u5199\u7684 redirect_uri")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response \u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU3MTU1NTksInN1YiI6InRlc3QifQ.ZMgIDQMW7FGxbF1V8zWOmEkmB7aLH1suGYjhDdrT7aCYMEudWUoiCkWHSvBmJahGm0RDXa3IyDoGFxeMfzlDNQ",\n    "expires_in": 7200,\n    "refresh_token": "JG7_WGLWXUOW2KV2VLJKSG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h3",{id:"implicit"},"Implicit"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u591a\u7528\u4e8e\u6ca1\u6709\u540e\u7aef\u7684\u5e94\u7528\uff0c\u7528\u6237\u6388\u6743\u767b\u5f55\u4e4b\u540e, \u4f1a\u76f4\u63a5\u5411\u524d\u7aef\u53d1\u9001\u4ee4\u724c(",(0,l.kt)("inlineCode",{parentName:"p"},"access_token"),") "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"GET /oauth/authorize\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 oauth2 server \u6ce8\u518c\u7684client_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1, str2, str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b ",(0,l.kt)("inlineCode",{parentName:"td"},"all"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u8bf7\u6c42\u7684\u6807\u5fd7\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u653e ",(0,l.kt)("inlineCode",{parentName:"td"},"code")," \u7528\u7684\u56de\u8c03 uri,\u56de\u8c03\u65f6\u4f1a\u5728 uri \u540e\u9762\u8ddf\u4e0a ",(0,l.kt)("inlineCode",{parentName:"td"},"?code=**&state=###"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=token&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http status code 302\nhttp://localhost:8080/oauth/on_code#access_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDI3OTMwLCJzdWIiOiJhZG1pbiJ9.RBYns9UnNYDHINSBzvHWHRzuKCpzKmsxUnKt30lntmGvXmVDoByZtlB0RHAVB59PHBlJNO_YUBZzC2odwCa8Tg\n&expires_in=3600&scope=all&state=xyz&token_type=Bearer\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u4f1a\u8fd4\u56de\u8bf7\u6c42\u65f6\u8bbe\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", \u8bf7\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\u9a8c\u8bc1\u5b83, \u9632\u6b62\u8bf7\u6c42\u88ab\u52ab\u6301\u6216\u8005\u7be1\u6539"),(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u79cd\u65b9\u5f0f\u628a\u4ee4\u724c\u76f4\u63a5\u4f20\u7ed9\u524d\u7aef\uff0c\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u3002\u56e0\u6b64\uff0c\u53ea\u80fd\u7528\u4e8e\u4e00\u4e9b\u5b89\u5168\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u5e76\u4e14\u4ee4\u724c\u7684\u6709\u6548\u671f\u5fc5\u987b\u975e\u5e38\u77ed\uff0c\u901a\u5e38\u5c31\u662f\u4f1a\u8bdd\u671f\u95f4\uff08session\uff09\u6709\u6548\uff0c\u6d4f\u89c8\u5668\u5173\u6389\uff0c\u4ee4\u724c\u5c31\u5931\u6548\u4e86"))),(0,l.kt)("h3",{id:"client-credentials"},"Client Credentials"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9\u4f7f\u7528\uff0c\u4f7f\u7528\u5728 OAuth2 \u670d\u52a1\u5668\u6ce8\u518c\u7684 client_id \u548c client_secret \u83b7\u53d6 access_token\uff0c\u53d1\u51fa API \u8bf7\u6c42\u65f6\uff0c\u5b83\u5e94\u5c06access_token\u4f5c\u4e3a Bearer \u4ee4\u724c\u4f20\u9012\u5230 Authorization \u8bf7\u6c42\u5934\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"Content-Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body \u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"client_credentials"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1, str2, str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b ",(0,l.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"scope")," \u9700\u8981\u63d0\u524d\u5728 OAuth2 \u670d\u52a1\u6ce8\u518c")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbWJlZGVkLWg1LWFwaSIsImV4cCI6MTU4OTk3NzQyNn0.Pu93fy0-gyiFqExBkCFAKTVJ1on_RpOSexzkHqczA6n6kB2_mOHbTMOyGK_Di7bHxZ3JqpZeyDoKQBtUe_T7jw",\n    "expires_in": 7200,\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h2",{id:"token-\u7684\u4f7f\u7528"},"Token \u7684\u4f7f\u7528"),(0,l.kt)("p",null,"\u5f53\u60a8\u83b7\u53d6\u5230 token \u4e4b\u540e\uff0c\u8bf7\u5728\u60a8\u7684\u8bf7\u6c42\u5934\u6309\u7167\u5982\u4e0b\u8981\u6c42\u643a\u5e26\u8be5 token\uff0c\u60a8\u5c31\u80fd\u4f7f\u7528\u60a8\u5728\u5e73\u53f0\u4e0b\u7684\u8d26\u53f7\u5e94\u6709\u7684\u6743\u529b\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bearer Token"),(0,l.kt)("li",{parentName:"ul"},"Token: ",(0,l.kt)("inlineCode",{parentName:"li"},"access_token"))),(0,l.kt)("p",null,"\u6211\u4eec\u8fd8\u4e3a token \u63d0\u4f9b\u4e86\u4e24\u4e2a\u901a\u7528\u578b\u63a5\u53e3\uff0c\u53ef\u4ee5\u7528\u4ee5\u9a8c\u8bc1\u548c\u5237\u65b0\uff1a"),(0,l.kt)("h3",{id:"\u9a8c\u8bc1-token"},"\u9a8c\u8bc1 token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u662f\u8d44\u6e90\u7aef\u4f7f\u7528\u7684,\n\u7528\u6765\u9a8c\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"p"},"access_token")," ",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," ."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET  oauth/authenticate\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bearer Token"),(0,l.kt)("li",{parentName:"ul"},"Token: ",(0,l.kt)("inlineCode",{parentName:"li"},"access_token"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'Status Code: 200\nResponse Body\n{\n    "client_id": "000000",\n    "domain": "http://localhost",\n    "expires_in": 2654,\n    "scope": "",\n    "user_id": "usr-2-362d85d770ec849ea8306df2f32e7074"\n}\n')),(0,l.kt)("p",null,"\u5931\u8d25\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status Code: 400\n\nResponse Body\n   invalid access token\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u5982\u679ctoken\u6b63\u786e, \u63a5\u53e3\u8fd8\u4f1a\u4e00\u8d77\u8fd4\u56de\u6743\u9650\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," client\u7684\u6ce8\u518cdomain, \u8fd9\u91cc\u63a8\u8350\u9a8c\u8bc1\u4e0b, \u8bf7\u6c42\u65b9\u7684\u8eab\u4efd\u548c\u6743\u9650.")),(0,l.kt)("h3",{id:"\u5237\u65b0-token"},"\u5237\u65b0 token"),(0,l.kt)("p",null,"\u5237\u65b0 access_token, \u4f7f\u7528 refresh_token \u6362\u53d6 access_token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /token\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"Content-Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body \u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"refresh_token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e4b\u524d\u83b7\u53d6\u7684 refresh_token")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU4MTc2MTMsInN1YiI6IjEifQ.yNpQIbklhtsSr5KEkJMAR4I30c85OEriYwAOpL_ukRBJ1qsSziT05HFN-kxVN1-qM18TzVEf8beCvugyhpgpsg",\n    "expires_in": 7200,\n    "refresh_token": "2AH_LQHPUYK8XML4LKMQKG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')))}s.isMDXComponent=!0}}]);