"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1408],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=s;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1420:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),i=["components"],a={title:"\u6a21\u578b",sidebar_position:3},d=void 0,p={unversionedId:"developer_cookbook/core/specs/model",id:"developer_cookbook/core/specs/model",isDocsHomePage:!1,title:"\u6a21\u578b",description:"Model",source:"@site/docs/developer_cookbook/core/specs/model.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/model",permalink:"/docs/developer_cookbook/core/specs/model",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6a21\u578b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6620\u5c04",permalink:"/docs/developer_cookbook/core/specs/mapper"},next:{title:"\u5173\u7cfb",permalink:"/docs/developer_cookbook/core/specs/relationship"}},u=[{value:"Model",id:"model",children:[],level:2},{value:"Roadmap",id:"roadmap",children:[],level:2},{value:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53",id:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53",children:[],level:2},{value:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb",id:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb",children:[],level:2},{value:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f",id:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f",children:[],level:2},{value:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316",id:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316",children:[],level:2},{value:"\u6a21\u578b\u5b9e\u73b0",id:"\u6a21\u578b\u5b9e\u73b0",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:u};function s(e){var n=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"model \u4f5c\u4e3a\u5b9e\u4f53\u5b58\u5728\uff0c model \u662f\u5bf9 Entity \u7684\u7ea6\u675f\u5b9a\u4e49\uff0c\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u53ef\u4ee5\u5b58\u5728\u7ee7\u627f\u5173\u7cfb\u4ece\u800c\u5efa\u7acb\u7ea6\u675f\u529b\u3002")),(0,l.kt)("h2",{id:"roadmap"},"Roadmap"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u5b9e\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u662f\u5b9e\u4f53\u5c5e\u6027\u7ea6\u675f\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"\u7ee7\u627f"),"\u5173\u7cfb\u5b9e\u73b0\u7ea6\u675f\u529b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u652f\u6301\u672c\u5730\u5316\uff0c\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u53ef\u4ee5\u5728\u6a21\u578b\u7684\u57fa\u7840\u4e0a\u7279\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u4f53\u53ef\u4ee5\u4e0d\u7ee7\u627f\u4efb\u4f55\u6a21\u578b\u3002")),(0,l.kt)("h2",{id:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53"},"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53"),(0,l.kt)("p",null,"\u6a21\u578b\u662f\u5177\u6709\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53\uff0c\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u7a7a\u95f4"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8ba2\u9605"),"\u4e00\u6837\u90fd\u662f\u5b9e\u4f53\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"model-is-entity",src:t(8567).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb"},"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,l.kt)("p",null,"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u53ef\u4ee5\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ee7\u627f")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5173\u7cfb"),"\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ee7\u627f"),"\u6765\u5b8c\u6210\u6a21\u578b\u5bf9\u5b9e\u4f53\u7684\u7ea6\u675f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-extends-model",src:t(5592).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f"},"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f"),(0,l.kt)("p",null,"\u540c\u4e00\u4e2a\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u53ef\u80fd\u662f\u6765\u81ea\u591a\u4e2a\u6a21\u578b\uff0c\u6211\u4eec\u5bf9\u8fd9\u4e9b\u6a21\u578b\u7ea6\u675f\u8fdb\u884c\u5408\u5e76\uff0c\u5408\u5e76\u7684\u7ed3\u679c\u4f5c\u4e3a\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-multiple-extends-models",src:t(7378).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316"},"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u5b9e\u4f53\u7279\u5b9a\u7684\u7ea6\u675f\uff0c\u6211\u4eec\u5141\u8bb8\u5b9e\u4f53\u5728\u7ee7\u627f\u6a21\u578b\u7684\u57fa\u7840\u4e0a\u5b9a\u4e49\u672c\u5730\u5316\u7ea6\u675f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-extends-model-add-local-constraints",src:t(7106).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u5316\u7ea6\u675f"),"\u5176\u5b9e\u548c\u6a21\u578b\u7684\u7ee7\u627f\u5173\u7cfb\u662f\u7edf\u4e00\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u5316\u7ea6\u675f"),"\u5c31\u50cf\u662f\u5b9e\u4f53\u672c\u5730\u7684\u4e00\u4e2a\u6a21\u578b\uff0c\u53ea\u80fd\u88ab\u5f53\u524d\u5b9e\u4f53\u7ee7\u627f\u3002"),(0,l.kt)("h2",{id:"\u6a21\u578b\u5b9e\u73b0"},"\u6a21\u578b\u5b9e\u73b0"),(0,l.kt)("p",null,"\u6a21\u578b\u662f\u5b9e\u4f53\uff0c\u6a21\u578b\u4e5f\u5177\u6709\u5c5e\u6027\uff0c\u662fk-v\u7684\uff0c\u6a21\u578b\u7684\u5c5e\u6027\u7528\u4e8e\u63cf\u8ff0\u7ee7\u627f\u8be5\u6a21\u578b\u7684\u5c5e\u6027\u7684\u7ea6\u675f\u6761\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Constraint struct {\n    Type string \n    LastTime int64\n    Weight int\n    Defines []Define\n}\n\n\ntype Define interface {\n    Viod()\n}\n\ntype Bound struct {\n    // ...\n}\n\nfunc (b Bound) Void() {}\n\n\ntype ChangeDelta struct {\n    // percentage or Abs.\n    Type string \n    Delta float\n}\n\nfunc (cd ChangeDelta) Void() {}\n\n\n\n\n// model | entity \u5408\u4f53.\ntype Value struct {\n    Value []byte\n    Configs ConstraintConf\n    Contraints []Contraint\n}\n\n\n{\n    "id": "xxxx",\n    "name": "e1",\n    "props": map[string]Value{},\n}\n\n{\n    "id": "xxxx",\n    "name": "e1",\n    "props": \n    "configs",\n    "constrinats":\n}\n\n\n// ..........\n\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# device entity\n{\n    "id": "iotd-1234",\n    "name": "\u5904\u7406\u56681",\n    "type": "DEVICE",\n    "props": {\n        "mem_used": \'0.58\',\n        "cpu_used": \'0.9\',\n        "temp": \'25\'\n    }\n}\n\n# model entity\n{\n    "id": "iotm-xxxx",\n    "name": "\u5904\u7406\u5668\u6a21\u578b",\n    "type": "MODEL",\n    "props": {\n        "mem_used": {\n            "type": "float",\n            "max": 1,\n            "dataType": "time-series",\n            "displayName": "\u5185\u5b58\u4f7f\u7528\u7387",\n            "define": {}\n        },\n        "cpu_used": {\n            "type": "float",\n            "max": 1,\n            "dataType": "property",\n            "displayName": "cup\u4f7f\u7528\u7387",\n            "define": {}\n        },\n        "temp":  {\n            "type": "double",\n            "max": 120,\n            "min": -50,\n            "unit": "\xb0",\n            "define": {}\n        },\n    }\n}\n\n\n\n# entity defination.\n\n\n{\n    "id": "iotd-1234",\n    "name": "\u5904\u7406\u56681",\n    "type": "DEVICE",\n    "props": {\n        "mem_used": {\n            "value": 0.7,\n            "config": {\n                "type": "float",\n                "max": 1,\n            }\n        },\n        "temp": {\n            "value": {\n                "t1": 12,\n                "tt": "xxxx"\n            },\n            "config": {\n                "type": "struct",\n                "define": {\n                    "items": {\n                        "t1": {\n                            "type": "int",\n                        },\n                        "t2": {\n                            "type": "string"\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\n\n\n# constraint generate.\n{\n  "iot-001": {\n    "size.value.type": "float",\n    "size.value.max": "100",\n    "size.value.min": "10",\n    "size.value.search": true,\n    "power.ts": true,\n    "light.light1.name.search": true,\n    "light.light1.power.ts": true,\n    "light.light2.name.search": true,\n    "light.light2.power.ts": true\n  }\n}\n\n\n\n\n\n')))}s.isMDXComponent=!0},7106:function(e,n,t){n.Z=t.p+"assets/images/entity-extends-model-add-local-constraints-85043bece39eb3a4ede65be6cae95985.png"},5592:function(e,n,t){n.Z=t.p+"assets/images/entity-extends-model-05f27b6f655bb426f78f2a8f5097de34.png"},7378:function(e,n,t){n.Z=t.p+"assets/images/entity-multiple-extends-models-67db72721da5dc98547b48e7d750d28a.png"},8567:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjkAAAEUCAIAAABGU7BPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAO2klEQVR4nO3dMWwj2X0H4KeA2BkX9rE7pjINnHHsos50x7gJWYXu2JnXMVXk6uTquEGAlYEYVjq5OrmyXIVuTKY5MJ22CejCgAwtcLyO13HvCnMWBjYFtb7NieQZS630F/V9lXYeZ36UOMRPj9p5s/f8+fN0zZdffplS+va3v319aMvRlNInn3zyox/96MaPLFeuXLlydzW39J3vfGfdzhuGthnNsuwtHVmuXLly5e5k7t9tGAOACHQVANHpKgCi01UARKerAIhOVwEQna4CILrSF198cX3r8tqrdbYZTSkVRbEyVK5cuXLlyl25r3kVANFZt0KuXLly5UbPNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIhOVwEQXWk4HF7fWhRFSinLspX7bDOaUrq8vFw3JFeuXLly5V7ft9Rqta6PLddlWncV8TajSytD5cqVK1eu3JX7+gwQgOh0FQDR6SoAotNVAESnqwCITlcBEJ2uAiC60spb3C/vb7/ONqMppaIoVobKlStXrly5K/c1rwIgutKGC4k3X2P8xqNZlr2lI8uVK1eu3J3MNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIjOuhVy5cqVKzd6rnkVANFZt0KuXLly5UbPNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIjOuhVy5cqVKzd6rnkVANFZt0KuXLly5UbPNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIhOVwEQXWk4HF7fWhRFSinLspX7bDOaUrq8vFw3JFeuXLly5V7ft9Rqta6PLddlWncV8TajSytD5cqVK1eu3JX7+gwQgOh0FQDR6SoAotNVAESnqwCITlcBEJ2uAiC60spb3C/vb7/ONqMppaIoVobKlStXrly5K/c1rwIgutKGC4k3X2P8xqNZlr2lI8uVK1eu3J3MNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIjOuhVy5cqVKzd6rnkVANFZt0KuXLly5UbPNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIjOuhVy5cqVKzd6rnkVANFZt0KuXLly5UbPNa8CIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIiudNdP4F7q9/uPHz++62fxUHz00Uf9fv+unwV/kydPnhwdHd31s3goHtRbozQcDq9vLYoipZRl2cp9thlNKV1eXq4bui+5z549W3cobtyzZ8+Gw+FDOK92IPfTTz9dN8qNW741vrZxJ8+rlFKp1WpdH1uuy7TuKuJtRpdWht6j3KdPn6YH9kvNnXj8+HG/33/vvfdardZDOK92INdb43a8/tb42tBOnlfJ36sAiE9XARCdrgIgOl0FQHS6CoDodBUA0ekqAKIrrbzF/fL+9utsM5pSKopiZeg9yl1em8btWL5wD+G82oHcFy9ebN6dG7TytdjJ8yqZVwEQX2nDhcSbrzF+49Esy97SkW8td8NKIdy411+43T6vdiD30aNHGw7LzdrwWuzYeZXMqwCIT1cBEJ2uAiA6XQVAdLoKgOh0FQDR6SoAorNuxZsc2boVt8m6Ffco17oVt8m6FQAQiHUr3uTI1q24TdatuEe51q24TdatAIBAdBUA0ekqAKLTVQBEp6vuselxPd/b2yu3z+ZXWy6O9vf29vYqvfHfsv/F0X6+t390sX40r68bhdBG3cre19QOztc/fn5+ejy4SCml2Wkz36suHzsbn5yMprfyhPkGpbt+Amwpyxbng/NFp5mnNB0NLrIsc/EXpJTSd//5w4NG5dW/yvXq2kfOB0cHh/npQbuWyo3+2X/Na7WU0vTs8OC4Puo11+/IbTGvuuey2n5tPh6cL1JKs/FoUq7V/vreXExOu41qOc/zSq15MJhebTxp18p5Xm30rraklNLi4qzXqJXzvFxrHo5mt/xNwNuQVRu9g69065WUxr3KXrlzMjhoVMt5udY5vVik6Umj8sHvnhe//fFe7XAyH/c7P+6dXEwOa9/76dPis//8x7zxb//RzPcq3dEipZTSuFfdyxsn07v97h4a61a8yZEjrVtR3q/XJqPBJDVq48F53ujsj/8wSiml+ajX/uAs/8nJoFueHPV+1mlXzieH+XHv4Hez+odn/frFUe+0SLWUUpr0O91fLTq/GZ+lk06309ufDjp3+229xroV9yg31roVi9lsOr36Os/LlUo55Xmeno+Oz/rHp8dnvQ9+fdBvt886J8ej+r+M6r8cH3dqabTcoXZw+uS88bOL9sejo3Z1/L///t+jwfmi2cgno/PPsvphgMmWdSu4T/abzepsNJjMx4Pz1Gg28+Xmxfh08FnWODzqNhvtw37n/eIPZ6OL2Xg0Kd5pHvTbjfZhv3M1BZucjf5QvN8+6NT3O4fd2mJ8dvULJNxjxdOf//B7r/x982hytT2rdvsHzUb3oP0PaXExnaVyrVpOKZWr9Volf7V3XqlV85TySnW/Wi63O413Ph8NJilNx+OLrN4OUFUPi3Ur3uTIsdat2G82K8fj0dn8fF7vN8pXfz+ez2aLlFcqyzqqVMtZmk5n8+o8pUpl+YasVCtZWqSU5vNZSp8f1/PjlFIqipRPp2n/br6b66xbcY9yY61b8f5PPj7qvGqfvFp9tf3qbVGu5FmxSH/T72XlZrf5Tmc0mMxqo0mqH7Wr37jL2/eg1q3wfyvuv7zeblZOTo5ms/pho5KuuqpcqeRpMZvNUyqnNJvOi6xSrZTL5ZQms9kipTxNp7MilVNK5XIlpXJvMDqoXR2yXE3+aMU9l1X2G9vPf66qrNzsNMuD8dnp9DzV+yGq6mHRVTsgr7cb5V/9evaDg0Y1f1UxeaPb/u5vz456J5VeZdw/+1O2/8t2rZKatex/Rsf9s7w+OT6bpVROKe23m+8fH4/Oxu1edXJ8eLbong56d/kdwQ0opuOT4/TX/2uUVxrddX+GzfM8FZPR2bjWrH21MeUpzSaDwXm1Wa/mzW6z3D49ni7qh6rq9vl71S7I6+3GO1mt3ai9trHcPBl83KmcH7abndN5/cPB4KCWUq130v+n8uS41ztedLr1LC3mi5Tq/cFJpzw+aP6weXRR7Rx2amuz4N747Hc//+lXDk7Gaz8s2O90fvDO9LR38Np/jk15o9t5P5+c9PqjWUopb3Sa5c8/n++3VdUdMK+6x6oH54uD5Zfts/nVRxWNk9nLk+WX+X73dNz92k7l+uFoevjqX92jq4fWuqfn//+htcPJ4jDBvdQ8nb08XTVwPH15fPXla2+gcuP4fP5q+2jRXX5RaZ9ezL86Sl6plFNW66iqu6CrAL7J9HwwPjs6+dO77aNu9a6fzIOkqwC+wfz8qNsblev/enrcLt/1k3mYdBXANyh3BvM4l8c/SP5vBQDRlYbD4fWtyzWE1l3xus1oSuny8nLd0H3Jffbs2bpDceOePXs2HA4fwnm1A7mffvrpulFu3PKt8bWNO3lepZRKrVbr+thyXaZ1VxFvM7q0MvQe5T59+nRDCjfrvffea7VaD+G82oFcb43btHxrfG3jTp5XyWeAAMSnqwCITlcBEJ2uAiA6XQVAdLoKgOh0FQDRlVbe4n55f/t1thlNKRVFsTL0HuUur03jdixfuIdwXu1A7osXLzbvzg1a+Vrs5HmVzKsAiK+04ULizdcYv/FolmVv6ci3lrthpRBu3Osv3G6fVzuQ++jRow2H5WZteC127LxK5lUAxKerAIhOVwEQna4CIDpdBUB0ugqA6HQVANFZt+JNjrxct+Lx48ePHz/eHMr2rFtxj3KX61Z4a9wO61YAQCDWrXiTIz958uTJkyfLr5e/C2zYdzgctlqtlUOb991mdPdyl3b7vNqB3I8++ugXv/jFyqGY59Xu5S7t2HmVzKsAiE9XARCdrgIgOl0FQHS6CoDodBUA0ekqAKKzboVcuXLlyo2ea14FQHTWrZArV65cudFzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKLTVQBEVxoOh9e3FkWRUsqybOU+24ymlC4vL9cNyZUrV65cudf3LbVaretjy3WZ1l1FvM3o0spQuXLlypUrd+W+PgMEIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIiutPIW98v726+zzWhKqSiKlaFy5cqVK1fuyn3NqwCIrrThQuLN1xi/8WiWZW/pyHLlypUrdydzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKKzboVcuXLlyo2ea14FQHTWrZArV65cudFzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKKzboVcuXLlyo2ea14FQHTWrZArV65cudFzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKLTVQBEVxoOh9e3FkWRUsqybOU+24ymlC4vL9cNyZUrV65cudf3LbVaretjy3WZ1l1FvM3o0spQuXLlypUrd+W+PgMEIDpdBUB0ugqA6HQVANHpKgCi01UARKerAIiutPIW98v726+zzWhKqSiKlaFy5cqVK1fuyn3NqwCIrrThQuLN1xi/8WiWZW/pyHLlypUrdydzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKKzboVcuXLlyo2ea14FQHTWrZArV65cudFzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKKzboVcuXLlyo2ea14FQHTWrZArV65cudFzzasAiE5XARCdrgIgOl0FQHS6CoDodBUA0ekqAKLTVQBEtzcej//yl7+8ePEipfTo0aNSqZRSWiwWf/7zn7Ms++uW649Zt6Uoim9961t5nq97zB//+Mfvf//7N37kt/ectzlySunLL7989913b/k5+zn7Ofs5+znv0s85vVzl+fPnz58/Xzm05ejLly9///vfv40jy5UrV67cXc31GSAA0ekqAKLTVQBEp6sAiE5XARCdrgIgOl0FQHSllbe4X97ffp1tRlNKRVGsDJUrV65cuXJX7mteBUB0pQ23uN8wtM1olmVv6chy5cqVK3cnc82rAIhOVwEQna4CIDpdBUB0/wdjRPGXHpUyDQAAAABJRU5ErkJggg=="}}]);