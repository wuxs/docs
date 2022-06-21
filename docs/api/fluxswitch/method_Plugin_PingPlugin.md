---
title: "Plugin_PingPlugin"
description: 'TKEEL_COMMENT
{"response":{"raw_data":true}}'
---
调用该接口TKEEL_COMMENT
{"response":{"raw_data":true}}。

## Request

```
post /plugin/ping
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1PingObject](#v1PingObject) |

#### v1PingObject

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| content |  |  |      
| op | string |  |      
| version | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1PingPluginResponse](#v1PingPluginResponse) |

#### v1PingPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| reject | boolean |  |      
| reject_reason | string |  |      
| unchange | boolean |  |   



### Response  default 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| default | An unexpected error response. | Object | [rpcStatus](#rpcStatus) |

#### rpcStatus

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| code | integer |  |          
| details | Array[protobufAny] |  [ 具体参数可见下面 [protobufAny](#protobufAny) ] |       
| message | string |  |   

### protobufAny
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| @type | string |  |   


