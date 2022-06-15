"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[343],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,k=d["".concat(c,".").concat(s)]||d[s]||u[s]||i;return n?l.createElement(k,r(r({ref:t},m),{},{components:n})):l.createElement(k,r({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var l=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],o={title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",sidebar_position:2},c=void 0,p={unversionedId:"developer_cookbook/iothub/devices_access_specification",id:"developer_cookbook/iothub/devices_access_specification",title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",description:"\u4ecb\u7ecd",source:"@site/docs/developer_cookbook/iothub/devices_access_specification.md",sourceDirName:"developer_cookbook/iothub",slug:"/developer_cookbook/iothub/devices_access_specification",permalink:"/en/developer_cookbook/iothub/devices_access_specification",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/iothub/devices_access_specification.md",tags:[],version:"current",lastUpdatedAt:1646965225,formattedLastUpdatedAt:"3/11/2022",sidebarPosition:2,frontMatter:{title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IoTHub \u5feb\u901f\u5165\u95e8",permalink:"/en/developer_cookbook/iothub/getting_started"},next:{title:"\u6d88\u606f\u89c4\u8303",permalink:"/en/developer_cookbook/iothub/message_spec"}},m={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"MQTT \u534f\u8bae",id:"mqtt-\u534f\u8bae",level:2},{value:"CoAP \u534f\u8bae",id:"coap-\u534f\u8bae",level:2},{value:"coap-client \u793a\u4f8b\uff08cmd\uff09",id:"coap-client-\u793a\u4f8bcmd",level:3},{value:"\u8ba2\u9605\u6d88\u606f",id:"\u8ba2\u9605\u6d88\u606f",level:4},{value:"\u53d1\u5e03\u6d88\u606f",id:"\u53d1\u5e03\u6d88\u606f",level:4},{value:"MQTT-SN \u534f\u8bae",id:"mqtt-sn-\u534f\u8bae",level:2},{value:"mqtt-sn-pub \u793a\u4f8b\uff08cmd\uff09",id:"mqtt-sn-pub-\u793a\u4f8bcmd",level:3},{value:"\u8ba2\u9605\u5c5e\u6027\u6d88\u606f",id:"\u8ba2\u9605\u5c5e\u6027\u6d88\u606f",level:4},{value:"\u53d1\u5e03\u5c5e\u6027\u6d88\u606f",id:"\u53d1\u5e03\u5c5e\u6027\u6d88\u606f",level:4},{value:"LwM2M \u534f\u8bae",id:"lwm2m-\u534f\u8bae",level:2},{value:"lwm2mclient \u793a\u4f8b\uff08cmd\uff09",id:"lwm2mclient-\u793a\u4f8bcmd",level:3},{value:"lwm2mclient \u8fde\u63a5\u5e73\u53f0",id:"lwm2mclient-\u8fde\u63a5\u5e73\u53f0",level:4},{value:"\u901a\u8fc7 HTTP API \u53d1\u5e03\u6d88\u606f\u5230 lwm2mClient",id:"\u901a\u8fc7-http-api-\u53d1\u5e03\u6d88\u606f\u5230-lwm2mclient",level:4}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u8bbe\u5907\u63a5\u5165\u662f tkeel \u7269\u8054\u7f51\u5e73\u53f0\u63d0\u4f9b\u7684\u57fa\u7840\u80fd\u529b\uff0c\u652f\u6301\u5404\u79cd\u6807\u51c6\u534f\u8bae\u7684\u63a5\u5165\uff0c\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907token"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID"),"\u8fdb\u884c\u8fde\u63a5\u3002IoT Hub \u76ee\u524d\u652f\u6301 MQTT\u3001WebSocket\u3001CoAP\u3001MQTT-SN\u63a5\u5165\u3002 \u540e\u7eed\u5c06\u9010\u6e10\u652f\u6301 MQTTS\u3001WebSocket Secure\uff08WSS\uff09\u3001STOMP\u3001LwM2M \u7b49\u534f\u8bae\u7684\u63a5\u5165"),(0,i.kt)("h2",{id:"mqtt-\u534f\u8bae"},"MQTT \u534f\u8bae"),(0,i.kt)("p",null,"\u8fde\u63a5\u5730\u5740\uff1a mqtt://192.168.123.9:31136\n\u8fde\u63a5\u6761\u4ef6\uff1a "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907token"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907ID")),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\uff08python\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# python 3\nimport random\nimport time\n\nfrom paho.mqtt import client as mqtt_client\n\nbroker = '192.168.123.9'\nport = 31136\n\n# generate client ID with pub prefix randomly\nclient_id = f'python-mqtt-{random.randint(0, 1000)}'\n# \u8bbe\u5907ID\nusername = '1cb1750c-2b95-4f0b-9a38-43cfb6b13418'\n# \u8bbe\u5907token\npassword = \"NDgzMDY5MGItNjMyMy0zN2ZlLWIwZmUtMjEzNzFmNWFkZjY0\"\n\n\ndef connect_mqtt():\n    def on_connect(client, userdata, flags, rc):\n        if rc == 0:\n            print(\"Connected to MQTT Broker!\")\n        else:\n            print(\"Failed to connect, return code %d\\n\", rc)\n\n    client = mqtt_client.Client(client_id)\n    client.username_pw_set(username, password)\n    client.on_connect = on_connect\n    client.connect(broker, port)\n    return client\n\n\ndef run():\n    client = connect_mqtt()\n    client.loop_start()\n    time.sleep(5)\n\n\nif __name__ == '__main__':\n    run()\n\n")),(0,i.kt)("h2",{id:"coap-\u534f\u8bae"},"CoAP \u534f\u8bae"),(0,i.kt)("p",null,"\u8fde\u63a5\u5730\u5740\uff1a mqtt://192.168.123.9:30588\n\u8fde\u63a5\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907token"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907ID")),(0,i.kt)("h3",{id:"coap-client-\u793a\u4f8bcmd"},"coap-client \u793a\u4f8b\uff08cmd\uff09"),(0,i.kt)("h4",{id:"\u8ba2\u9605\u6d88\u606f"},"\u8ba2\u9605\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes?c=<\u8bbe\u5907ID>&p=<\u8bbe\u5907token>&u=<\u7528\u6237\u540d>"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID/v1/devices/me/attributes")))),(0,i.kt)("li",{parentName:"ul"},"Client ID \uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907ID>"),", \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u7528\u6237\u540d>"),"\uff0c \u5b57\u7b26\u4e32\u5373\u53ef"),(0,i.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907token>"),", \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"{'key': 'value'}"))),(0,i.kt)("h4",{id:"\u53d1\u5e03\u6d88\u606f"},"\u53d1\u5e03\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m put -t "application/json" -e "{\'key\': \'value\'}"   "coap://192.168.123.9:30588/mqtt/1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes?c=<\u8bbe\u5907ID>&p=<\u8bbe\u5907token>&u=<\u7528\u6237\u540d>"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID/v1/devices/me/attributes")))),(0,i.kt)("li",{parentName:"ul"},"Client ID \uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907ID>"),", \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u7528\u6237\u540d>"),"\uff0c \u5b57\u7b26\u4e32\u5373\u53ef"),(0,i.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907token>"),", \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"{'key': 'value'}"))),(0,i.kt)("p",null,"\u67e5\u770b\u8ba2\u9605\u7684\u6d88\u606f\u6536\u5230\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"key": "value"}\n')),(0,i.kt)("h2",{id:"mqtt-sn-\u534f\u8bae"},"MQTT-SN \u534f\u8bae"),(0,i.kt)("p",null,"mqtt-sn client <--\x3e mqtt-sn gateway <--\x3e mqtt broker\n\u8fde\u63a5\u5730\u5740\uff1a mqtt-sn://192.168.123.9:31884\n\u8fde\u63a5\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907token"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907ID\n\u5f00\u542f MQTT-SN \u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a \u8bbe\u5907ID \u548c \u8bbe\u5907token")),(0,i.kt)("h3",{id:"mqtt-sn-pub-\u793a\u4f8bcmd"},"mqtt-sn-pub \u793a\u4f8b\uff08cmd\uff09"),(0,i.kt)("h4",{id:"\u8ba2\u9605\u5c5e\u6027\u6d88\u606f"},"\u8ba2\u9605\u5c5e\u6027\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./mqtt-sn-sub  -h 192.168.123.9 -p 31884 -t "v1/devices/me/attributes"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes"))),(0,i.kt)("h4",{id:"\u53d1\u5e03\u5c5e\u6027\u6d88\u606f"},"\u53d1\u5e03\u5c5e\u6027\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./mqtt-sn-pub  -h 192.168.123.9 -p 31884 -t "v1/devices/me/attributes" -m "{\u2018key_test\u2019: \'value\'}"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes")),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"{\u2018key_test\u2019: 'value'}"))),(0,i.kt)("p",null,"\u67e5\u770b\u8ba2\u9605\u7684\u6d88\u606f\u6536\u5230\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\u2018key_test\u2019: 'value'}\n")),(0,i.kt)("h2",{id:"lwm2m-\u534f\u8bae"},"LwM2M \u534f\u8bae"),(0,i.kt)("p",null,"LwM2M client <--\x3e emqx_lwm2m <--\x3e mqtt broker\n\u8fde\u63a5\u5730\u5740\uff1a lwm2m://192.168.123.9:30685\n\u8fde\u63a5\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907token"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907ID\nLwM2M client \u8fde\u63a5 emqx_lwm2m \u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a endpoint name \u4e3a \u201c{\u8bbe\u5907ID}@{\u8bbe\u5907token}\u201d")),(0,i.kt)("h3",{id:"lwm2mclient-\u793a\u4f8bcmd"},"lwm2mclient \u793a\u4f8b\uff08cmd\uff09"),(0,i.kt)("h4",{id:"lwm2mclient-\u8fde\u63a5\u5e73\u53f0"},"lwm2mclient \u8fde\u63a5\u5e73\u53f0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./lwm2mclient -n a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1 -h 192.168.123.9 -p 30685 -4\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-n \u8868\u793a endpoint name \u4e3a \u201c{\u8bbe\u5907ID}@{\u8bbe\u5907token}\u201d")),(0,i.kt)("p",null,"lwm2mClient \u8fde\u63a5\u5e73\u53f0\u6210\u529f\u4e4b\u540e\u5e73\uff0c\u53ef\u5728\u5e73\u53f0\u539f\u59cb\u6570\u636e\u6536\u5230\u6d88\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\u4e3b\u9898\u540d\u79f0\u4e3a: "lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/up/resp"'),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msgType":"register",\n  "data":{\n    "objectList":[\n      "/1",\n      "/1/0",\n      "/2/0",\n      "/3/0",\n      "/4/0",\n      "/5/0",\n      "/6/0",\n      "/7/0",\n      "/31024",\n      "/31024/10",\n      "/31024/11",\n      "/31024/12"\n    ],\n    "lwm2m":"1.1",\n    "lt":300,\n    "ep":"a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1",\n    "b":"U",\n    "alternatePath":"/"\n  }\n}\n')),(0,i.kt)("h4",{id:"\u901a\u8fc7-http-api-\u53d1\u5e03\u6d88\u606f\u5230-lwm2mclient"},"\u901a\u8fc7 HTTP API \u53d1\u5e03\u6d88\u606f\u5230 lwm2mClient"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://192.168.123.9:30855/api/v4/mqtt/publish\' \\\n--header \'Authorization: Basic YWRtaW46cHVibGlj\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "topic":"lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/dn",\n    "payload":{\n        "reqID":"2",\n        "msgType":"discover",\n        "data":{\n            "path":"/3/0"\n        }\n    },\n    "qos":1,\n    "retain":false,\n    "clientid":"@tkeel.iothub.internal.clientId"\n}\'\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/dn")),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reqID": "2",\n  "msgType": "discover",\n  "data": {\n    "path": "/3/0"\n  }\n}\n')),(0,i.kt)("p",null,"lwm2mClient \u6536\u5230\u6d88\u606f\u4e4b\u540e\u56de\u590d\u7684\u6d88\u606f\u5982\u4e0b\uff0c \u53ef\u5728\u5e73\u53f0\u539f\u59cb\u6570\u636e\u6536\u5230\u6570\u636e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\u4e3b\u9898\u540d\u79f0\u4e3a: "lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/up/resp"'),(0,i.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reqID":"2",\n  "msgType":"discover",\n  "data":{\n    "reqPath":"/3/0",\n    "content":[\n      "</3/0>",\n      "</3/0/0>,</3/0/1>,</3/0/2>,</3/0/3>,</3/0/4>,</3/0/5>,</3/0/6>,</3/0/7>,</3/0/8>,</3/0/9>,</3/0/10>,</3/0/11>,</3/0/12>,</3/0/13>,</3/0/14>,</3/0/15>,</3/0/16>"\n    ],\n    "codeMsg":"content",\n    "code":"2.05"\n  }\n}\n')))}s.isMDXComponent=!0}}]);