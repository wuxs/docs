---
title: "Proxy_UpdateProxy"
description: ''
---
调用该接口。

## Request

```
put /proxy/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdateProxy](#v1UpdateProxy) |

#### v1UpdateProxy

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| client_id | string |  |      
| device_id | string |  |      
| device_name | string |  |      
| host | string |  |      
| name | string |  |      
| port | string |  |      
| protocol | string |  |      
| remark | string |  |      
| status | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1UpdateProxyResponse](#v1UpdateProxyResponse) |

#### v1UpdateProxyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| proxy |  |  |   



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


