/* eslint-disable */
import qs from 'qs'
import doRequest from '@/utils/request'

let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return doRequest[method](queryUrl, body, config)
  } else if (method === 'get') {
    return doRequest[method](queryUrl, config)
  } else {
    return doRequest[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    数蛙物联网平台API接口, 高并发全连接物联网平台,支持私有云部署的全开放的IoT产品全生命周期管理平台
 ==========================================================*/
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_product
 * url: get_classes_productURL
 * method: get_classes_product_TYPE
 * raw_url: get_classes_product_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_product = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Product'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_product_RAW_URL = function() {
  return '/classes/Product'
}
export const get_classes_product_TYPE = function() {
  return 'get'
}
export const get_classes_productURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Product'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条产品记录
 * request: post_classes_product
 * url: post_classes_productURL
 * method: post_classes_product_TYPE
 * raw_url: post_classes_product_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_product = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Product'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_product_RAW_URL = function() {
  return '/classes/Product'
}
export const post_classes_product_TYPE = function() {
  return 'post'
}
export const post_classes_productURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Product'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_user
 * url: get_classes_userURL
 * method: get_classes_user_TYPE
 * raw_url: get_classes_user_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_user = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_User'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_user_RAW_URL = function() {
  return '/classes/_User'
}
export const get_classes_user_TYPE = function() {
  return 'get'
}
export const get_classes_userURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_User'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条_User记录
 * request: post_classes_user
 * url: post_classes_userURL
 * method: post_classes_user_TYPE
 * raw_url: post_classes_user_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_user = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_User'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_user_RAW_URL = function() {
  return '/classes/_User'
}
export const post_classes_user_TYPE = function() {
  return 'post'
}
export const post_classes_userURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_User'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询设备类型信息
 * request: get_suke_query_devtype_info
 * url: get_suke_query_devtype_infoURL
 * method: get_suke_query_devtype_info_TYPE
 * raw_url: get_suke_query_devtype_info_RAW_URL
 * @param name - 设备类型名称
 * @param number - 设备类型编码
 * @param enable - 设备类型状态 9全部,启动:1,废弃:0
 * @param skip - 起始查询位
 * @param limit - 查询条数
 */
export const get_suke_query_devtype_info = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_devtype_info'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_suke_query_devtype_info_RAW_URL = function() {
  return '/suke/query_devtype_info'
}
export const get_suke_query_devtype_info_TYPE = function() {
  return 'get'
}
export const get_suke_query_devtype_infoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_devtype_info'
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取资源类型列表
 * request: get_resource_types
 * url: get_resource_typesURL
 * method: get_resource_types_TYPE
 * raw_url: get_resource_types_RAW_URL
 */
export const get_resource_types = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/resource_types'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_resource_types_RAW_URL = function() {
  return '/resource_types'
}
export const get_resource_types_TYPE = function() {
  return 'get'
}
export const get_resource_typesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/resource_types'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除角色记录
 * request: delete_classes_role_id
 * url: delete_classes_role_idURL
 * method: delete_classes_role_id_TYPE
 * raw_url: delete_classes_role_id_RAW_URL
 * @param id - 删除角色的ID
 */
export const delete_classes_role_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Role/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_role_id_RAW_URL = function() {
  return '/classes/_Role/{id}'
}
export const delete_classes_role_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_role_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Role/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取角色详情
 * request: get_classes_role_id
 * url: get_classes_role_idURL
 * method: get_classes_role_id_TYPE
 * raw_url: get_classes_role_id_RAW_URL
 * @param id - 角色的ID
 */
export const get_classes_role_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Role/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_role_id_RAW_URL = function() {
  return '/classes/_Role/{id}'
}
export const get_classes_role_id_TYPE = function() {
  return 'get'
}
export const get_classes_role_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Role/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新角色
 * request: put_classes_role_id
 * url: put_classes_role_idURL
 * method: put_classes_role_id_TYPE
 * raw_url: put_classes_role_id_RAW_URL
 * @param id - 更新角色的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_role_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Role/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_role_id_RAW_URL = function() {
  return '/classes/_Role/{id}'
}
export const put_classes_role_id_TYPE = function() {
  return 'put'
}
export const put_classes_role_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Role/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 检测是启动
 * request: get_health
 * url: get_healthURL
 * method: get_health_TYPE
 * raw_url: get_health_RAW_URL
 */
export const get_health = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/health'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_health_RAW_URL = function() {
  return '/health'
}
export const get_health_TYPE = function() {
  return 'get'
}
export const get_healthURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/health'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取SukeLog表的权限级别和结构
 * request: get_schema_sukelog
 * url: get_schema_sukelogURL
 * method: get_schema_sukelog_TYPE
 * raw_url: get_schema_sukelog_RAW_URL
 */
export const get_schema_sukelog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/SukeLog'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_sukelog_RAW_URL = function() {
  return '/schema/SukeLog'
}
export const get_schema_sukelog_TYPE = function() {
  return 'get'
}
export const get_schema_sukelogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/SukeLog'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取数据字典表的权限级别和结构
 * request: get_schema_datas
 * url: get_schema_datasURL
 * method: get_schema_datas_TYPE
 * raw_url: get_schema_datas_RAW_URL
 */
export const get_schema_datas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Datas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_datas_RAW_URL = function() {
  return '/schema/Datas'
}
export const get_schema_datas_TYPE = function() {
  return 'get'
}
export const get_schema_datasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Datas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取硬件key
 * request: get_hardinfo
 * url: get_hardinfoURL
 * method: get_hardinfo_TYPE
 * raw_url: get_hardinfo_RAW_URL
 */
export const get_hardinfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/hardinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_hardinfo_RAW_URL = function() {
  return '/hardinfo'
}
export const get_hardinfo_TYPE = function() {
  return 'get'
}
export const get_hardinfoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/hardinfo'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_crond
 * url: get_classes_crondURL
 * method: get_classes_crond_TYPE
 * raw_url: get_classes_crond_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_crond = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Crond'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_crond_RAW_URL = function() {
  return '/classes/Crond'
}
export const get_classes_crond_TYPE = function() {
  return 'get'
}
export const get_classes_crondURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Crond'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条Crond记录
 * request: post_classes_crond
 * url: post_classes_crondURL
 * method: post_classes_crond_TYPE
 * raw_url: post_classes_crond_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_crond = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Crond'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_crond_RAW_URL = function() {
  return '/classes/Crond'
}
export const post_classes_crond_TYPE = function() {
  return 'post'
}
export const post_classes_crondURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Crond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取通道表的权限级别和结构
 * request: get_schema_channel
 * url: get_schema_channelURL
 * method: get_schema_channel_TYPE
 * raw_url: get_schema_channel_RAW_URL
 */
export const get_schema_channel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Channel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_channel_RAW_URL = function() {
  return '/schema/Channel'
}
export const get_schema_channel_TYPE = function() {
  return 'get'
}
export const get_schema_channelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Channel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置部门表的级别
 * request: put_level_department
 * url: put_level_departmentURL
 * method: put_level_department_TYPE
 * raw_url: put_level_department_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_department = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Department'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_department_RAW_URL = function() {
  return '/level/Department'
}
export const put_level_department_TYPE = function() {
  return 'put'
}
export const put_level_departmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Department'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 下载部署脚本
 * request: get_licsetup
 * url: get_licsetupURL
 * method: get_licsetup_TYPE
 * raw_url: get_licsetup_RAW_URL
 * @param license - license
 */
export const get_licsetup = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/licsetup'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['license'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: license'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_licsetup_RAW_URL = function() {
  return '/licsetup'
}
export const get_licsetup_TYPE = function() {
  return 'get'
}
export const get_licsetupURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/licsetup'
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取应用表的权限级别和结构
 * request: get_schema_app
 * url: get_schema_appURL
 * method: get_schema_app_TYPE
 * raw_url: get_schema_app_RAW_URL
 */
export const get_schema_app = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/App'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_app_RAW_URL = function() {
  return '/schema/App'
}
export const get_schema_app_TYPE = function() {
  return 'get'
}
export const get_schema_appURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/App'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除部门记录
 * request: delete_classes_department_id
 * url: delete_classes_department_idURL
 * method: delete_classes_department_id_TYPE
 * raw_url: delete_classes_department_id_RAW_URL
 * @param id - 删除部门的ID
 */
export const delete_classes_department_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Department/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_department_id_RAW_URL = function() {
  return '/classes/Department/{id}'
}
export const delete_classes_department_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_department_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Department/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取部门详情
 * request: get_classes_department_id
 * url: get_classes_department_idURL
 * method: get_classes_department_id_TYPE
 * raw_url: get_classes_department_id_RAW_URL
 * @param id - 部门的ID
 */
export const get_classes_department_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Department/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_department_id_RAW_URL = function() {
  return '/classes/Department/{id}'
}
export const get_classes_department_id_TYPE = function() {
  return 'get'
}
export const get_classes_department_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Department/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新部门
 * request: put_classes_department_id
 * url: put_classes_department_idURL
 * method: put_classes_department_id_TYPE
 * raw_url: put_classes_department_id_RAW_URL
 * @param id - 更新部门的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_department_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Department/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_department_id_RAW_URL = function() {
  return '/classes/Department/{id}'
}
export const put_classes_department_id_TYPE = function() {
  return 'put'
}
export const put_classes_department_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Department/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 增加客户节点
 * request: post_suke_add_customernode
 * url: post_suke_add_customernodeURL
 * method: post_suke_add_customernode_TYPE
 * raw_url: post_suke_add_customernode_RAW_URL
 * @param parentId - 父节点objectId
 * @param name - 节点名称
 */
export const post_suke_add_customernode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/add_customernode'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['parentId'] !== undefined) {
    queryParameters['parentId'] = parameters['parentId']
  }
  if (parameters['parentId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: parentId'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_suke_add_customernode_RAW_URL = function() {
  return '/suke/add_customernode'
}
export const post_suke_add_customernode_TYPE = function() {
  return 'post'
}
export const post_suke_add_customernodeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/add_customernode'
  if (parameters['parentId'] !== undefined) {
    queryParameters['parentId'] = parameters['parentId']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取日志配置
 * request: get_log_level
 * url: get_log_levelURL
 * method: get_log_level_TYPE
 * raw_url: get_log_level_RAW_URL
 * @param handle - 日志模块
 * @param level - 日志级别
 */
export const get_log_level = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/log/level'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['handle'] !== undefined) {
    queryParameters['Handle'] = parameters['handle']
  }
  if (parameters['handle'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: handle'))
  }
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
  }
  if (parameters['level'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: level'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_log_level_RAW_URL = function() {
  return '/log/level'
}
export const get_log_level_TYPE = function() {
  return 'get'
}
export const get_log_levelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/log/level'
  if (parameters['handle'] !== undefined) {
    queryParameters['Handle'] = parameters['handle']
  }
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新日志配置
 * request: put_log_level
 * url: put_log_levelURL
 * method: put_log_level_TYPE
 * raw_url: put_log_level_RAW_URL
 * @param handle - 日志模块
 * @param level - 日志级别
 */
export const put_log_level = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/log/level'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['handle'] !== undefined) {
    queryParameters['Handle'] = parameters['handle']
  }
  if (parameters['handle'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: handle'))
  }
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
  }
  if (parameters['level'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: level'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_log_level_RAW_URL = function() {
  return '/log/level'
}
export const put_log_level_TYPE = function() {
  return 'put'
}
export const put_log_levelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/log/level'
  if (parameters['handle'] !== undefined) {
    queryParameters['Handle'] = parameters['handle']
  }
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询信息
 * request: get_suke_query_info
 * url: get_suke_query_infoURL
 * method: get_suke_query_info_TYPE
 * raw_url: get_suke_query_info_RAW_URL
 * @param type - 信息类型 suke_cmd :指令 suke_devtype:设备类型 suke_yys :软件应用商
 * @param skip - 起始查询位
 * @param limit - 查询条数
 */
export const get_suke_query_info = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_info'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_suke_query_info_RAW_URL = function() {
  return '/suke/query_info'
}
export const get_suke_query_info_TYPE = function() {
  return 'get'
}
export const get_suke_query_infoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_info'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设备查询
 * request: get_dev_addr
 * url: get_dev_addrURL
 * method: get_dev_addr_TYPE
 * raw_url: get_dev_addr_RAW_URL
 * @param addr - 设备地址
 * @param productId - 设备类型
 */
export const get_dev_addr = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/dev/{addr}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{addr}', `${parameters['addr']}`)
  if (parameters['addr'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: addr'))
  }
  if (parameters['productId'] !== undefined) {
    queryParameters['productId'] = parameters['productId']
  }
  if (parameters['productId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: productId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_dev_addr_RAW_URL = function() {
  return '/dev/{addr}'
}
export const get_dev_addr_TYPE = function() {
  return 'get'
}
export const get_dev_addrURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dev/{addr}'
  path = path.replace('{addr}', `${parameters['addr']}`)
  if (parameters['productId'] !== undefined) {
    queryParameters['productId'] = parameters['productId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取应用信息
 * request: get_classes_site_id
 * url: get_classes_site_idURL
 * method: get_classes_site_id_TYPE
 * raw_url: get_classes_site_id_RAW_URL
 * @param id - 应用标识
 */
export const get_classes_site_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Site/{Id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{Id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_site_id_RAW_URL = function() {
  return '/classes/Site/{Id}'
}
export const get_classes_site_id_TYPE = function() {
  return 'get'
}
export const get_classes_site_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Site/{Id}'
  path = path.replace('{Id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑指令
 * request: put_suke_edit_zl
 * url: put_suke_edit_zlURL
 * method: put_suke_edit_zl_TYPE
 * raw_url: put_suke_edit_zl_RAW_URL
 * @param objectId - 指令id
 * @param hardwareType - 设备类型
 * @param name - 指令
 * @param nameEncrypt - 加密指令
 * @param needReply - 指令回复类型 不需要回复 0  需要回复 1
 * @param remark - 备注
 * @param enable - 指令状态 启动:1,废弃:0
 */
export const put_suke_edit_zl = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/edit_zl'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['objectId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: objectId'))
  }
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['hardwareType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: hardwareType'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['nameEncrypt'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: nameEncrypt'))
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['needReply'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: needReply'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['enable'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: enable'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_suke_edit_zl_RAW_URL = function() {
  return '/suke/edit_zl'
}
export const put_suke_edit_zl_TYPE = function() {
  return 'put'
}
export const put_suke_edit_zlURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/edit_zl'
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除SukeLog记录
 * request: delete_classes_sukelog_id
 * url: delete_classes_sukelog_idURL
 * method: delete_classes_sukelog_id_TYPE
 * raw_url: delete_classes_sukelog_id_RAW_URL
 * @param id - 删除SukeLog的ID
 */
export const delete_classes_sukelog_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeLog/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_sukelog_id_RAW_URL = function() {
  return '/classes/SukeLog/{id}'
}
export const delete_classes_sukelog_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_sukelog_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeLog/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取SukeLog详情
 * request: get_classes_sukelog_id
 * url: get_classes_sukelog_idURL
 * method: get_classes_sukelog_id_TYPE
 * raw_url: get_classes_sukelog_id_RAW_URL
 * @param id - SukeLog的ID
 */
export const get_classes_sukelog_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeLog/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_sukelog_id_RAW_URL = function() {
  return '/classes/SukeLog/{id}'
}
export const get_classes_sukelog_id_TYPE = function() {
  return 'get'
}
export const get_classes_sukelog_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeLog/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新SukeLog
 * request: put_classes_sukelog_id
 * url: put_classes_sukelog_idURL
 * method: put_classes_sukelog_id_TYPE
 * raw_url: put_classes_sukelog_id_RAW_URL
 * @param id - 更新SukeLog的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_sukelog_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeLog/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_sukelog_id_RAW_URL = function() {
  return '/classes/SukeLog/{id}'
}
export const put_classes_sukelog_id_TYPE = function() {
  return 'put'
}
export const put_classes_sukelog_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeLog/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置通知表的级别
 * request: put_level_notification
 * url: put_level_notificationURL
 * method: put_level_notification_TYPE
 * raw_url: put_level_notification_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_notification = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Notification'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_notification_RAW_URL = function() {
  return '/level/Notification'
}
export const put_level_notification_TYPE = function() {
  return 'put'
}
export const put_level_notificationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Notification'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取配置
 * request: get_config
 * url: get_configURL
 * method: get_config_TYPE
 * raw_url: get_config_RAW_URL
 */
export const get_config = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_config_RAW_URL = function() {
  return '/config'
}
export const get_config_TYPE = function() {
  return 'get'
}
export const get_configURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新配置，如果配置值为 "__op": "Delete"，则为删除, 例： {"params":{"test":{"__op":"Delete"}}}
 * request: put_config
 * url: put_configURL
 * method: put_config_TYPE
 * raw_url: put_config_RAW_URL
 * @param config - 更新配置
 */
export const put_config = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/config'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['config'] !== undefined) {
    body = parameters['config']
  }
  if (parameters['config'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: config'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_config_RAW_URL = function() {
  return '/config'
}
export const put_config_TYPE = function() {
  return 'put'
}
export const put_configURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/config'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_dashboard
 * url: get_classes_dashboardURL
 * method: get_classes_dashboard_TYPE
 * raw_url: get_classes_dashboard_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_dashboard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Dashboard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_dashboard_RAW_URL = function() {
  return '/classes/Dashboard'
}
export const get_classes_dashboard_TYPE = function() {
  return 'get'
}
export const get_classes_dashboardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Dashboard'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条Dashboard记录
 * request: post_classes_dashboard
 * url: post_classes_dashboardURL
 * method: post_classes_dashboard_TYPE
 * raw_url: post_classes_dashboard_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_dashboard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Dashboard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_dashboard_RAW_URL = function() {
  return '/classes/Dashboard'
}
export const post_classes_dashboard_TYPE = function() {
  return 'post'
}
export const post_classes_dashboardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Dashboard'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_app
 * url: get_classes_appURL
 * method: get_classes_app_TYPE
 * raw_url: get_classes_app_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_app = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/App'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_app_RAW_URL = function() {
  return '/classes/App'
}
export const get_classes_app_TYPE = function() {
  return 'get'
}
export const get_classes_appURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/App'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条应用记录
 * request: post_classes_app
 * url: post_classes_appURL
 * method: post_classes_app_TYPE
 * raw_url: post_classes_app_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_app = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/App'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_app_RAW_URL = function() {
  return '/classes/App'
}
export const post_classes_app_TYPE = function() {
  return 'post'
}
export const post_classes_appURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/App'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置设备管理表的级别
 * request: put_level_devices
 * url: put_level_devicesURL
 * method: put_level_devices_TYPE
 * raw_url: put_level_devices_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_devices = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Devices'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_devices_RAW_URL = function() {
  return '/level/Devices'
}
export const put_level_devices_TYPE = function() {
  return 'put'
}
export const put_level_devicesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Devices'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取设备管理表的权限级别和结构
 * request: get_schema_devices
 * url: get_schema_devicesURL
 * method: get_schema_devices_TYPE
 * raw_url: get_schema_devices_RAW_URL
 */
export const get_schema_devices = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Devices'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_devices_RAW_URL = function() {
  return '/schema/Devices'
}
export const get_schema_devices_TYPE = function() {
  return 'get'
}
export const get_schema_devicesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Devices'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置Dashboard表的级别
 * request: put_level_dashboard
 * url: put_level_dashboardURL
 * method: put_level_dashboard_TYPE
 * raw_url: put_level_dashboard_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_dashboard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Dashboard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_dashboard_RAW_URL = function() {
  return '/level/Dashboard'
}
export const put_level_dashboard_TYPE = function() {
  return 'put'
}
export const put_level_dashboardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Dashboard'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 要将文件上传，请向文件URL发送POST请求，后缀为文件名。请求必须包含与Content-Type文件关联的标头。请记住，文件限制为10兆字节。
 * request: post_files_filename
 * url: post_files_filenameURL
 * method: post_files_filename_TYPE
 * raw_url: post_files_filename_RAW_URL
 * @param filename - 要上载的文件的文件名。
 * @param content -
 */
export const post_files_filename = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/files/{filename}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{filename}', `${parameters['filename']}`)
  if (parameters['filename'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: filename'))
  }
  if (parameters['content'] !== undefined) {
    body = parameters['content']
  }
  if (parameters['content'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: content'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_files_filename_RAW_URL = function() {
  return '/files/{filename}'
}
export const post_files_filename_TYPE = function() {
  return 'post'
}
export const post_files_filenameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/files/{filename}'
  path = path.replace('{filename}', `${parameters['filename']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除会话记录
 * request: delete_classes_session_id
 * url: delete_classes_session_idURL
 * method: delete_classes_session_id_TYPE
 * raw_url: delete_classes_session_id_RAW_URL
 * @param id - 删除会话的ID
 */
export const delete_classes_session_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Session/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_session_id_RAW_URL = function() {
  return '/classes/_Session/{id}'
}
export const delete_classes_session_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_session_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Session/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取会话详情
 * request: get_classes_session_id
 * url: get_classes_session_idURL
 * method: get_classes_session_id_TYPE
 * raw_url: get_classes_session_id_RAW_URL
 * @param id - 会话的ID
 */
export const get_classes_session_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Session/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_session_id_RAW_URL = function() {
  return '/classes/_Session/{id}'
}
export const get_classes_session_id_TYPE = function() {
  return 'get'
}
export const get_classes_session_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Session/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新会话
 * request: put_classes_session_id
 * url: put_classes_session_idURL
 * method: put_classes_session_id_TYPE
 * raw_url: put_classes_session_id_RAW_URL
 * @param id - 更新会话的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_session_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Session/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_session_id_RAW_URL = function() {
  return '/classes/_Session/{id}'
}
export const put_classes_session_id_TYPE = function() {
  return 'put'
}
export const put_classes_session_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Session/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 给角色分配权限
 * request: put_add_permission
 * url: put_add_permissionURL
 * method: put_add_permission_TYPE
 * raw_url: put_add_permission_RAW_URL
 * @param permission -
 */
export const put_add_permission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/add_permission'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permission'] !== undefined) {
    body = parameters['permission']
  }
  if (parameters['permission'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permission'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_add_permission_RAW_URL = function() {
  return '/add_permission'
}
export const put_add_permission_TYPE = function() {
  return 'put'
}
export const put_add_permissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/add_permission'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除菜单记录
 * request: delete_classes_menu_id
 * url: delete_classes_menu_idURL
 * method: delete_classes_menu_id_TYPE
 * raw_url: delete_classes_menu_id_RAW_URL
 * @param id - 删除菜单的ID
 */
export const delete_classes_menu_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Menu/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_menu_id_RAW_URL = function() {
  return '/classes/Menu/{id}'
}
export const delete_classes_menu_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_menu_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Menu/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取菜单详情
 * request: get_classes_menu_id
 * url: get_classes_menu_idURL
 * method: get_classes_menu_id_TYPE
 * raw_url: get_classes_menu_id_RAW_URL
 * @param id - 菜单的ID
 */
export const get_classes_menu_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Menu/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_menu_id_RAW_URL = function() {
  return '/classes/Menu/{id}'
}
export const get_classes_menu_id_TYPE = function() {
  return 'get'
}
export const get_classes_menu_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Menu/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新菜单
 * request: put_classes_menu_id
 * url: put_classes_menu_idURL
 * method: put_classes_menu_id_TYPE
 * raw_url: put_classes_menu_id_RAW_URL
 * @param id - 更新菜单的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_menu_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Menu/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_menu_id_RAW_URL = function() {
  return '/classes/Menu/{id}'
}
export const put_classes_menu_id_TYPE = function() {
  return 'put'
}
export const put_classes_menu_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Menu/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取工程表的权限级别和结构
 * request: get_schema_project
 * url: get_schema_projectURL
 * method: get_schema_project_TYPE
 * raw_url: get_schema_project_RAW_URL
 */
export const get_schema_project = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Project'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_project_RAW_URL = function() {
  return '/schema/Project'
}
export const get_schema_project_TYPE = function() {
  return 'get'
}
export const get_schema_projectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Project'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_channel
 * url: get_classes_channelURL
 * method: get_classes_channel_TYPE
 * raw_url: get_classes_channel_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_channel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Channel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_channel_RAW_URL = function() {
  return '/classes/Channel'
}
export const get_classes_channel_TYPE = function() {
  return 'get'
}
export const get_classes_channelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Channel'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条通道记录
 * request: post_classes_channel
 * url: post_classes_channelURL
 * method: post_classes_channel_TYPE
 * raw_url: post_classes_channel_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_channel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Channel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_channel_RAW_URL = function() {
  return '/classes/Channel'
}
export const post_classes_channel_TYPE = function() {
  return 'post'
}
export const post_classes_channelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Channel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 在线编译代码
 * request: post_compile
 * url: post_compileURL
 * method: post_compile_TYPE
 * raw_url: post_compile_RAW_URL
 * @param body - 在线编译代码
 */
export const post_compile = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/compile'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_compile_RAW_URL = function() {
  return '/compile'
}
export const post_compile_TYPE = function() {
  return 'post'
}
export const post_compileURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/compile'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置Crond表的级别
 * request: put_level_crond
 * url: put_level_crondURL
 * method: put_level_crond_TYPE
 * raw_url: put_level_crond_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_crond = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Crond'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_crond_RAW_URL = function() {
  return '/level/Crond'
}
export const put_level_crond_TYPE = function() {
  return 'put'
}
export const put_level_crondURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Crond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 根据swagger产生API代码
* request: generate_api
* url: generate_apiURL
* method: generate_api_TYPE
* raw_url: generate_api_RAW_URL

     * @param mod - 模块名
     * @param swagger - swagger描述
*/
export const generate_api = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/generate_api/{type}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['mod'] !== undefined) {
    queryParameters['mod'] = parameters['mod']
  }
  if (parameters['mod'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: mod'))
  }
  if (parameters['swagger'] !== undefined) {
    body = parameters['swagger']
  }
  if (parameters['swagger'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: swagger'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generate_api_RAW_URL = function() {
  return '/generate_api/{type}'
}
export const generate_api_TYPE = function() {
  return 'post'
}
export const generate_apiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/generate_api/{type}'
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['mod'] !== undefined) {
    queryParameters['mod'] = parameters['mod']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取Crond表的权限级别和结构
 * request: get_schema_crond
 * url: get_schema_crondURL
 * method: get_schema_crond_TYPE
 * raw_url: get_schema_crond_RAW_URL
 */
export const get_schema_crond = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Crond'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_crond_RAW_URL = function() {
  return '/schema/Crond'
}
export const get_schema_crond_TYPE = function() {
  return 'get'
}
export const get_schema_crondURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Crond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 用户登录
 * request: get_login
 * url: get_loginURL
 * method: get_login_TYPE
 * raw_url: get_login_RAW_URL
 * @param username -
 * @param password -
 */
export const get_login = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_login_RAW_URL = function() {
  return '/login'
}
export const get_login_TYPE = function() {
  return 'get'
}
export const get_loginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/login'
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取用户信息
 * request: get_users_id
 * url: get_users_idURL
 * method: get_users_id_TYPE
 * raw_url: get_users_id_RAW_URL
 * @param id - 获取用户信息
 */
export const get_users_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_users_id_RAW_URL = function() {
  return '/users/{id}'
}
export const get_users_id_TYPE = function() {
  return 'get'
}
export const get_users_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置SukeLog表的级别
 * request: put_level_sukelog
 * url: put_level_sukelogURL
 * method: put_level_sukelog_TYPE
 * raw_url: put_level_sukelog_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_sukelog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/SukeLog'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_sukelog_RAW_URL = function() {
  return '/level/SukeLog'
}
export const put_level_sukelog_TYPE = function() {
  return 'put'
}
export const put_level_sukelogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/SukeLog'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 数据签名
 * request: get_signdata
 * url: get_signdataURL
 * method: get_signdata_TYPE
 * raw_url: get_signdata_RAW_URL
 * @param data - 数据
 */
export const get_signdata = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/signdata'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['data'] !== undefined) {
    queryParameters['data'] = parameters['data']
  }
  if (parameters['data'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: data'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_signdata_RAW_URL = function() {
  return '/signdata'
}
export const get_signdata_TYPE = function() {
  return 'get'
}
export const get_signdataURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/signdata'
  if (parameters['data'] !== undefined) {
    queryParameters['data'] = parameters['data']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取license
 * request: get_license
 * url: get_licenseURL
 * method: get_license_TYPE
 * raw_url: get_license_RAW_URL
 */
export const get_license = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/license'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_license_RAW_URL = function() {
  return '/license'
}
export const get_license_TYPE = function() {
  return 'get'
}
export const get_licenseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/license'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * graphql
 * request: post_graphql
 * url: post_graphqlURL
 * method: post_graphql_TYPE
 * raw_url: post_graphql_RAW_URL
 * @param graphql -
 */
export const post_graphql = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/graphql'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['graphql'] !== undefined) {
    body = parameters['graphql']
  }
  if (parameters['graphql'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: graphql'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_graphql_RAW_URL = function() {
  return '/graphql'
}
export const post_graphql_TYPE = function() {
  return 'post'
}
export const post_graphqlURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/graphql'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询设备
 * request: get_suke_query_suke_dev
 * url: get_suke_query_suke_devURL
 * method: get_suke_query_suke_dev_TYPE
 * raw_url: get_suke_query_suke_dev_RAW_URL
 * @param customerId - 客户
 * @param hardwareType - 设备类型
 * @param hardwareNumber - 设备编号
 * @param status - 使用状况 9全部, 1 在使用,0弃用
 * @param olStatus - 在线情况9全部,1在线,0离线
 * @param auth - 授权状态 9全部,1已授权, 0未授权
 * @param skip - 起始查询位
 * @param limit - 查询条数
 */
export const get_suke_query_suke_dev = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_suke_dev'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['customerId'] !== undefined) {
    queryParameters['customerId'] = parameters['customerId']
  }
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['hardwareNumber'] !== undefined) {
    queryParameters['hardware_number'] = parameters['hardwareNumber']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['olStatus'] !== undefined) {
    queryParameters['ol_status'] = parameters['olStatus']
  }
  if (parameters['auth'] !== undefined) {
    queryParameters['auth'] = parameters['auth']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_suke_query_suke_dev_RAW_URL = function() {
  return '/suke/query_suke_dev'
}
export const get_suke_query_suke_dev_TYPE = function() {
  return 'get'
}
export const get_suke_query_suke_devURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_suke_dev'
  if (parameters['customerId'] !== undefined) {
    queryParameters['customerId'] = parameters['customerId']
  }
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['hardwareNumber'] !== undefined) {
    queryParameters['hardware_number'] = parameters['hardwareNumber']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['olStatus'] !== undefined) {
    queryParameters['ol_status'] = parameters['olStatus']
  }
  if (parameters['auth'] !== undefined) {
    queryParameters['auth'] = parameters['auth']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除Dashboard记录
 * request: delete_classes_dashboard_id
 * url: delete_classes_dashboard_idURL
 * method: delete_classes_dashboard_id_TYPE
 * raw_url: delete_classes_dashboard_id_RAW_URL
 * @param id - 删除Dashboard的ID
 */
export const delete_classes_dashboard_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Dashboard/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_dashboard_id_RAW_URL = function() {
  return '/classes/Dashboard/{id}'
}
export const delete_classes_dashboard_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_dashboard_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Dashboard/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取Dashboard详情
 * request: get_classes_dashboard_id
 * url: get_classes_dashboard_idURL
 * method: get_classes_dashboard_id_TYPE
 * raw_url: get_classes_dashboard_id_RAW_URL
 * @param id - Dashboard的ID
 */
export const get_classes_dashboard_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Dashboard/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_dashboard_id_RAW_URL = function() {
  return '/classes/Dashboard/{id}'
}
export const get_classes_dashboard_id_TYPE = function() {
  return 'get'
}
export const get_classes_dashboard_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Dashboard/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新Dashboard
 * request: put_classes_dashboard_id
 * url: put_classes_dashboard_idURL
 * method: put_classes_dashboard_id_TYPE
 * raw_url: put_classes_dashboard_id_RAW_URL
 * @param id - 更新Dashboard的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_dashboard_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Dashboard/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_dashboard_id_RAW_URL = function() {
  return '/classes/Dashboard/{id}'
}
export const put_classes_dashboard_id_TYPE = function() {
  return 'put'
}
export const put_classes_dashboard_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Dashboard/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置菜单表的级别
 * request: put_level_menu
 * url: put_level_menuURL
 * method: put_level_menu_TYPE
 * raw_url: put_level_menu_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_menu = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Menu'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_menu_RAW_URL = function() {
  return '/level/Menu'
}
export const put_level_menu_TYPE = function() {
  return 'put'
}
export const put_level_menuURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Menu'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 加入,退出集群
 * request: post_cluster
 * url: post_clusterURL
 * method: post_cluster_TYPE
 * raw_url: post_cluster_RAW_URL
 * @param action - 操作类型
 * @param body - 相关参数
 */
export const post_cluster = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cluster'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['action'] !== undefined) {
    queryParameters['action'] = parameters['action']
  }
  if (parameters['action'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: action'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_cluster_RAW_URL = function() {
  return '/cluster'
}
export const post_cluster_TYPE = function() {
  return 'post'
}
export const post_clusterURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cluster'
  if (parameters['action'] !== undefined) {
    queryParameters['action'] = parameters['action']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置产品表的级别
 * request: put_level_product
 * url: put_level_productURL
 * method: put_level_product_TYPE
 * raw_url: put_level_product_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_product = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Product'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_product_RAW_URL = function() {
  return '/level/Product'
}
export const put_level_product_TYPE = function() {
  return 'put'
}
export const put_level_productURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Product'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置应用表的级别
 * request: put_level_app
 * url: put_level_appURL
 * method: put_level_app_TYPE
 * raw_url: put_level_app_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_app = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/App'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_app_RAW_URL = function() {
  return '/level/App'
}
export const put_level_app_TYPE = function() {
  return 'put'
}
export const put_level_appURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/App'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 调用Grafanfa查询曲线
 * request: get_chart_version
 * url: get_chart_versionURL
 * method: get_chart_version_TYPE
 * raw_url: get_chart_version_RAW_URL
 * @param version - 版本号,默认为v1
 * @param query - 查询语句
 * @param start - 开始时间
 * @param end - 结束时间
 * @param step - 步长,单位秒
 */
export const get_chart_version = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/chart/{version}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{version}', `${parameters['version']}`)
  if (parameters['version'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: version'))
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['query'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: query'))
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['start'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: start'))
  }
  if (parameters['end'] !== undefined) {
    queryParameters['end'] = parameters['end']
  }
  if (parameters['end'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: end'))
  }
  if (parameters['step'] !== undefined) {
    queryParameters['step'] = parameters['step']
  }
  if (parameters['step'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: step'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_chart_version_RAW_URL = function() {
  return '/chart/{version}'
}
export const get_chart_version_TYPE = function() {
  return 'get'
}
export const get_chart_versionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/chart/{version}'
  path = path.replace('{version}', `${parameters['version']}`)
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['end'] !== undefined) {
    queryParameters['end'] = parameters['end']
  }
  if (parameters['step'] !== undefined) {
    queryParameters['step'] = parameters['step']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除规则引擎
 * request: delete_rule_id
 * url: delete_rule_idURL
 * method: delete_rule_id_TYPE
 * raw_url: delete_rule_id_RAW_URL
 * @param id - 规则引擎名称
 */
export const delete_rule_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rule/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_rule_id_RAW_URL = function() {
  return '/rule/{id}'
}
export const delete_rule_id_TYPE = function() {
  return 'delete'
}
export const delete_rule_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rule/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取规则引擎
 * request: get_rule_id
 * url: get_rule_idURL
 * method: get_rule_id_TYPE
 * raw_url: get_rule_id_RAW_URL
 * @param id - 规则引擎名称
 */
export const get_rule_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rule/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_rule_id_RAW_URL = function() {
  return '/rule/{id}'
}
export const get_rule_id_TYPE = function() {
  return 'get'
}
export const get_rule_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rule/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 部署IOT平台数据库
 * request: get_iotapp
 * url: get_iotappURL
 * method: get_iotapp_TYPE
 * raw_url: get_iotapp_RAW_URL
 * @param type - 产品类型
 * @param license - 授权文件
 */
export const get_iotapp = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/iotapp'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['license'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: license'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_iotapp_RAW_URL = function() {
  return '/iotapp'
}
export const get_iotapp_TYPE = function() {
  return 'get'
}
export const get_iotappURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/iotapp'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 验证手机号/邮箱是否通过
 * request: post_verify_code_action
 * url: post_verify_code_actionURL
 * method: post_verify_code_action_TYPE
 * raw_url: post_verify_code_action_RAW_URL
 * @param action - 验证操作类型
 * @param account - 邮箱或手机号
 * @param code - 验证码
 * @param callback - 验证成功回调
 */
export const post_verify_code_action = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/verify_code/{Action}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{Action}', `${parameters['action']}`)
  if (parameters['action'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: action'))
  }
  if (parameters['account'] !== undefined) {
    queryParameters['account'] = parameters['account']
  }
  if (parameters['account'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: account'))
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['callback'] !== undefined) {
    queryParameters['callback'] = parameters['callback']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_verify_code_action_RAW_URL = function() {
  return '/verify_code/{Action}'
}
export const post_verify_code_action_TYPE = function() {
  return 'post'
}
export const post_verify_code_actionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/verify_code/{Action}'
  path = path.replace('{Action}', `${parameters['action']}`)
  if (parameters['account'] !== undefined) {
    queryParameters['account'] = parameters['account']
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['callback'] !== undefined) {
    queryParameters['callback'] = parameters['callback']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 云函数
 * request: post_functions_func
 * url: post_functions_funcURL
 * method: post_functions_func_TYPE
 * raw_url: post_functions_func_RAW_URL
 * @param func - 函数名称
 * @param func - 提交内容
 */
export const post_functions_func = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/functions/{func}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{func}', `${parameters['func']}`)
  if (parameters['func'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: func'))
  }
  if (parameters['func'] !== undefined) {
    body = parameters['func']
  }
  if (parameters['func'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: func'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_functions_func_RAW_URL = function() {
  return '/functions/{func}'
}
export const post_functions_func_TYPE = function() {
  return 'post'
}
export const post_functions_funcURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/functions/{func}'
  path = path.replace('{func}', `${parameters['func']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 启动物联网网关
 * request: get_iothub
 * url: get_iothubURL
 * method: get_iothub_TYPE
 * raw_url: get_iothub_RAW_URL
 * @param type - 产品类型
 * @param license - 授权文件
 * @param addr - 数据中心地址
 */
export const get_iothub = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/iothub'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['license'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: license'))
  }
  if (parameters['addr'] !== undefined) {
    queryParameters['addr'] = parameters['addr']
  }
  if (parameters['addr'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: addr'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_iothub_RAW_URL = function() {
  return '/iothub'
}
export const get_iothub_TYPE = function() {
  return 'get'
}
export const get_iothubURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/iothub'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['addr'] !== undefined) {
    queryParameters['addr'] = parameters['addr']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 发送指令
 * request: get_server_send
 * url: get_server_sendURL
 * method: get_server_send_TYPE
 * raw_url: get_server_send_RAW_URL
 * @param instructType - 指令类型ZXQB:读表 ,MMSQ:购电,SKSKM:购负电,MMYQ:强制断电,KSQB:上电,ZXQK:卡授权,SKSKM:远程开锁 ,KSQB:卡型注消 ,RDXX :读开门记录
 * @param hardwareAuth - 授权码
 * @param hardwareNumber - 设备编号
 * @param hardwarePath - 设备路径
 * @param instructId - 指令ID
 * @param instructParas - 指令参数
 */
export const get_server_send = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/server/send'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['instructType'] !== undefined) {
    queryParameters['instruct_type'] = parameters['instructType']
  }
  if (parameters['instructType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: instructType'))
  }
  if (parameters['hardwareAuth'] !== undefined) {
    queryParameters['hardware_auth'] = parameters['hardwareAuth']
  }
  if (parameters['hardwareAuth'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: hardwareAuth'))
  }
  if (parameters['hardwareNumber'] !== undefined) {
    queryParameters['hardware_number'] = parameters['hardwareNumber']
  }
  if (parameters['hardwareNumber'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: hardwareNumber'))
  }
  if (parameters['hardwarePath'] !== undefined) {
    queryParameters['hardware_path'] = parameters['hardwarePath']
  }
  if (parameters['hardwarePath'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: hardwarePath'))
  }
  if (parameters['instructId'] !== undefined) {
    queryParameters['instruct_id'] = parameters['instructId']
  }
  if (parameters['instructId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: instructId'))
  }
  if (parameters['instructParas'] !== undefined) {
    queryParameters['instruct_paras'] = parameters['instructParas']
  }
  if (parameters['instructParas'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: instructParas'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_server_send_RAW_URL = function() {
  return '/server/send'
}
export const get_server_send_TYPE = function() {
  return 'get'
}
export const get_server_sendURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/server/send'
  if (parameters['instructType'] !== undefined) {
    queryParameters['instruct_type'] = parameters['instructType']
  }
  if (parameters['hardwareAuth'] !== undefined) {
    queryParameters['hardware_auth'] = parameters['hardwareAuth']
  }
  if (parameters['hardwareNumber'] !== undefined) {
    queryParameters['hardware_number'] = parameters['hardwareNumber']
  }
  if (parameters['hardwarePath'] !== undefined) {
    queryParameters['hardware_path'] = parameters['hardwarePath']
  }
  if (parameters['instructId'] !== undefined) {
    queryParameters['instruct_id'] = parameters['instructId']
  }
  if (parameters['instructParas'] !== undefined) {
    queryParameters['instruct_paras'] = parameters['instructParas']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除通道记录
 * request: delete_classes_channel_id
 * url: delete_classes_channel_idURL
 * method: delete_classes_channel_id_TYPE
 * raw_url: delete_classes_channel_id_RAW_URL
 * @param id - 删除通道的ID
 */
export const delete_classes_channel_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Channel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_channel_id_RAW_URL = function() {
  return '/classes/Channel/{id}'
}
export const delete_classes_channel_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_channel_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Channel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取通道详情
 * request: get_classes_channel_id
 * url: get_classes_channel_idURL
 * method: get_classes_channel_id_TYPE
 * raw_url: get_classes_channel_id_RAW_URL
 * @param id - 通道的ID
 */
export const get_classes_channel_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Channel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_channel_id_RAW_URL = function() {
  return '/classes/Channel/{id}'
}
export const get_classes_channel_id_TYPE = function() {
  return 'get'
}
export const get_classes_channel_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Channel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新通道
 * request: put_classes_channel_id
 * url: put_classes_channel_idURL
 * method: put_classes_channel_id_TYPE
 * raw_url: put_classes_channel_id_RAW_URL
 * @param id - 更新通道的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_channel_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Channel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_channel_id_RAW_URL = function() {
  return '/classes/Channel/{id}'
}
export const put_classes_channel_id_TYPE = function() {
  return 'put'
}
export const put_classes_channel_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Channel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_sukedev
 * url: get_classes_sukedevURL
 * method: get_classes_sukedev_TYPE
 * raw_url: get_classes_sukedev_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_sukedev = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeDev'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_sukedev_RAW_URL = function() {
  return '/classes/SukeDev'
}
export const get_classes_sukedev_TYPE = function() {
  return 'get'
}
export const get_classes_sukedevURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeDev'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条SukeDev记录
 * request: post_classes_sukedev
 * url: post_classes_sukedevURL
 * method: post_classes_sukedev_TYPE
 * raw_url: post_classes_sukedev_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_sukedev = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeDev'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_sukedev_RAW_URL = function() {
  return '/classes/SukeDev'
}
export const post_classes_sukedev_TYPE = function() {
  return 'post'
}
export const post_classes_sukedevURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeDev'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 为了减少网络往返的时间，可以使用批处理端点在一次调用中创建、更新或删除多达50个对象。
 * request: post_batch
 * url: post_batchURL
 * method: post_batch_TYPE
 * raw_url: post_batch_RAW_URL
 * @param batch - 批处理
 */
export const post_batch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/batch'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['batch'] !== undefined) {
    body = parameters['batch']
  }
  if (parameters['batch'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: batch'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_batch_RAW_URL = function() {
  return '/batch'
}
export const post_batch_TYPE = function() {
  return 'post'
}
export const post_batchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/batch'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除工程记录
 * request: delete_classes_project_id
 * url: delete_classes_project_idURL
 * method: delete_classes_project_id_TYPE
 * raw_url: delete_classes_project_id_RAW_URL
 * @param id - 删除工程的ID
 */
export const delete_classes_project_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Project/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_project_id_RAW_URL = function() {
  return '/classes/Project/{id}'
}
export const delete_classes_project_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_project_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Project/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取工程详情
 * request: get_classes_project_id
 * url: get_classes_project_idURL
 * method: get_classes_project_id_TYPE
 * raw_url: get_classes_project_id_RAW_URL
 * @param id - 工程的ID
 */
export const get_classes_project_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Project/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_project_id_RAW_URL = function() {
  return '/classes/Project/{id}'
}
export const get_classes_project_id_TYPE = function() {
  return 'get'
}
export const get_classes_project_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Project/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新工程
 * request: put_classes_project_id
 * url: put_classes_project_idURL
 * method: put_classes_project_id_TYPE
 * raw_url: put_classes_project_id_RAW_URL
 * @param id - 更新工程的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_project_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Project/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_project_id_RAW_URL = function() {
  return '/classes/Project/{id}'
}
export const put_classes_project_id_TYPE = function() {
  return 'put'
}
export const put_classes_project_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Project/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除权限记录
 * request: delete_classes_permission_id
 * url: delete_classes_permission_idURL
 * method: delete_classes_permission_id_TYPE
 * raw_url: delete_classes_permission_id_RAW_URL
 * @param id - 删除权限的ID
 */
export const delete_classes_permission_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Permission/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_permission_id_RAW_URL = function() {
  return '/classes/Permission/{id}'
}
export const delete_classes_permission_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_permission_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Permission/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取权限详情
 * request: get_classes_permission_id
 * url: get_classes_permission_idURL
 * method: get_classes_permission_id_TYPE
 * raw_url: get_classes_permission_id_RAW_URL
 * @param id - 权限的ID
 */
export const get_classes_permission_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Permission/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_permission_id_RAW_URL = function() {
  return '/classes/Permission/{id}'
}
export const get_classes_permission_id_TYPE = function() {
  return 'get'
}
export const get_classes_permission_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Permission/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新权限
 * request: put_classes_permission_id
 * url: put_classes_permission_idURL
 * method: put_classes_permission_id_TYPE
 * raw_url: put_classes_permission_id_RAW_URL
 * @param id - 更新权限的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_permission_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Permission/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_permission_id_RAW_URL = function() {
  return '/classes/Permission/{id}'
}
export const put_classes_permission_id_TYPE = function() {
  return 'put'
}
export const put_classes_permission_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Permission/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除产品记录
 * request: delete_classes_product_id
 * url: delete_classes_product_idURL
 * method: delete_classes_product_id_TYPE
 * raw_url: delete_classes_product_id_RAW_URL
 * @param id - 删除产品的ID
 */
export const delete_classes_product_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Product/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_product_id_RAW_URL = function() {
  return '/classes/Product/{id}'
}
export const delete_classes_product_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_product_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Product/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取产品详情
 * request: get_classes_product_id
 * url: get_classes_product_idURL
 * method: get_classes_product_id_TYPE
 * raw_url: get_classes_product_id_RAW_URL
 * @param id - 产品的ID
 */
export const get_classes_product_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Product/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_product_id_RAW_URL = function() {
  return '/classes/Product/{id}'
}
export const get_classes_product_id_TYPE = function() {
  return 'get'
}
export const get_classes_product_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Product/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新产品
 * request: put_classes_product_id
 * url: put_classes_product_idURL
 * method: put_classes_product_id_TYPE
 * raw_url: put_classes_product_id_RAW_URL
 * @param id - 更新产品的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_product_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Product/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_product_id_RAW_URL = function() {
  return '/classes/Product/{id}'
}
export const put_classes_product_id_TYPE = function() {
  return 'put'
}
export const put_classes_product_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Product/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_devices
 * url: get_classes_devicesURL
 * method: get_classes_devices_TYPE
 * raw_url: get_classes_devices_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_devices = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Devices'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_devices_RAW_URL = function() {
  return '/classes/Devices'
}
export const get_classes_devices_TYPE = function() {
  return 'get'
}
export const get_classes_devicesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Devices'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条设备管理记录
 * request: post_classes_devices
 * url: post_classes_devicesURL
 * method: post_classes_devices_TYPE
 * raw_url: post_classes_devices_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_devices = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Devices'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_devices_RAW_URL = function() {
  return '/classes/Devices'
}
export const post_classes_devices_TYPE = function() {
  return 'post'
}
export const post_classes_devicesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Devices'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除通知记录
 * request: delete_classes_notification_id
 * url: delete_classes_notification_idURL
 * method: delete_classes_notification_id_TYPE
 * raw_url: delete_classes_notification_id_RAW_URL
 * @param id - 删除通知的ID
 */
export const delete_classes_notification_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Notification/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_notification_id_RAW_URL = function() {
  return '/classes/Notification/{id}'
}
export const delete_classes_notification_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_notification_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Notification/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取通知详情
 * request: get_classes_notification_id
 * url: get_classes_notification_idURL
 * method: get_classes_notification_id_TYPE
 * raw_url: get_classes_notification_id_RAW_URL
 * @param id - 通知的ID
 */
export const get_classes_notification_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Notification/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_notification_id_RAW_URL = function() {
  return '/classes/Notification/{id}'
}
export const get_classes_notification_id_TYPE = function() {
  return 'get'
}
export const get_classes_notification_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Notification/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新通知
 * request: put_classes_notification_id
 * url: put_classes_notification_idURL
 * method: put_classes_notification_id_TYPE
 * raw_url: put_classes_notification_id_RAW_URL
 * @param id - 更新通知的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_notification_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Notification/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_notification_id_RAW_URL = function() {
  return '/classes/Notification/{id}'
}
export const put_classes_notification_id_TYPE = function() {
  return 'put'
}
export const put_classes_notification_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Notification/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除_User记录
 * request: delete_classes_user_id
 * url: delete_classes_user_idURL
 * method: delete_classes_user_id_TYPE
 * raw_url: delete_classes_user_id_RAW_URL
 * @param id - 删除_User的ID
 */
export const delete_classes_user_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_User/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_user_id_RAW_URL = function() {
  return '/classes/_User/{id}'
}
export const delete_classes_user_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_user_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_User/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取_User详情
 * request: get_classes_user_id
 * url: get_classes_user_idURL
 * method: get_classes_user_id_TYPE
 * raw_url: get_classes_user_id_RAW_URL
 * @param id - _User的ID
 */
export const get_classes_user_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_User/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_user_id_RAW_URL = function() {
  return '/classes/_User/{id}'
}
export const get_classes_user_id_TYPE = function() {
  return 'get'
}
export const get_classes_user_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_User/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新_User
 * request: put_classes_user_id
 * url: put_classes_user_idURL
 * method: put_classes_user_id_TYPE
 * raw_url: put_classes_user_id_RAW_URL
 * @param id - 更新_User的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_user_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_User/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_user_id_RAW_URL = function() {
  return '/classes/_User/{id}'
}
export const put_classes_user_id_TYPE = function() {
  return 'put'
}
export const put_classes_user_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_User/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑设备类型
 * request: put_suke_edit_devtype
 * url: put_suke_edit_devtypeURL
 * method: put_suke_edit_devtype_TYPE
 * raw_url: put_suke_edit_devtype_RAW_URL
 * @param objectId - 设备类型id
 * @param name - 设备类型名称
 * @param number - 设备类型编码
 * @param remark - 备注
 * @param enable - 设备类型状态 启动:1,废弃:0
 */
export const put_suke_edit_devtype = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/edit_devtype'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['objectId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: objectId'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['number'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: number'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['enable'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: enable'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_suke_edit_devtype_RAW_URL = function() {
  return '/suke/edit_devtype'
}
export const put_suke_edit_devtype_TYPE = function() {
  return 'put'
}
export const put_suke_edit_devtypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/edit_devtype'
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询设备列表
 * request: get_devs
 * url: get_devsURL
 * method: get_devs_TYPE
 * raw_url: get_devs_RAW_URL
 * @param devType - 设备类型
 * @param nodeType - 设备:devs | 网关/集中器:vcons
 * @param start - 起始行数
 * @param length - 从起始开始查找几条
 * @param keyword - 模糊条件查找
 */
export const get_devs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['devType'] !== undefined) {
    queryParameters['devType'] = parameters['devType']
  }
  if (parameters['devType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: devType'))
  }
  if (parameters['nodeType'] !== undefined) {
    queryParameters['nodeType'] = parameters['nodeType']
  }
  if (parameters['nodeType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: nodeType'))
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['start'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: start'))
  }
  if (parameters['length'] !== undefined) {
    queryParameters['length'] = parameters['length']
  }
  if (parameters['length'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: length'))
  }
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_devs_RAW_URL = function() {
  return '/devs'
}
export const get_devs_TYPE = function() {
  return 'get'
}
export const get_devsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devs'
  if (parameters['devType'] !== undefined) {
    queryParameters['devType'] = parameters['devType']
  }
  if (parameters['nodeType'] !== undefined) {
    queryParameters['nodeType'] = parameters['nodeType']
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['length'] !== undefined) {
    queryParameters['length'] = parameters['length']
  }
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 登录开发者中心，获取为企业分配的访问平台API的账号与秘钥
 * request: get_token
 * url: get_tokenURL
 * method: get_token_TYPE
 * raw_url: get_token_RAW_URL
 * @param appid - 管理后台分配appid
 * @param secret - 管理后台配置
 */
export const get_token = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/get_token'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['appid'] !== undefined) {
    queryParameters['appid'] = parameters['appid']
  }
  if (parameters['appid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: appid'))
  }
  if (parameters['secret'] !== undefined) {
    queryParameters['secret'] = parameters['secret']
  }
  if (parameters['secret'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: secret'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_token_RAW_URL = function() {
  return '/get_token'
}
export const get_token_TYPE = function() {
  return 'get'
}
export const get_tokenURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/get_token'
  if (parameters['appid'] !== undefined) {
    queryParameters['appid'] = parameters['appid']
  }
  if (parameters['secret'] !== undefined) {
    queryParameters['secret'] = parameters['secret']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置数据字典表的级别
 * request: put_level_datas
 * url: put_level_datasURL
 * method: put_level_datas_TYPE
 * raw_url: put_level_datas_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_datas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Datas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_datas_RAW_URL = function() {
  return '/level/Datas'
}
export const put_level_datas_TYPE = function() {
  return 'put'
}
export const put_level_datasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Datas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_session
 * url: get_classes_sessionURL
 * method: get_classes_session_TYPE
 * raw_url: get_classes_session_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_session = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Session'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_session_RAW_URL = function() {
  return '/classes/_Session'
}
export const get_classes_session_TYPE = function() {
  return 'get'
}
export const get_classes_sessionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Session'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条会话记录
 * request: post_classes_session
 * url: post_classes_sessionURL
 * method: post_classes_session_TYPE
 * raw_url: post_classes_session_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_session = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Session'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_session_RAW_URL = function() {
  return '/classes/_Session'
}
export const post_classes_session_TYPE = function() {
  return 'post'
}
export const post_classes_sessionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Session'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置_User表的级别
 * request: put_level_user
 * url: put_level_userURL
 * method: put_level_user_TYPE
 * raw_url: put_level_user_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_user = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/_User'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_user_RAW_URL = function() {
  return '/level/_User'
}
export const put_level_user_TYPE = function() {
  return 'put'
}
export const put_level_userURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/_User'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置角色表的级别
 * request: put_level_role
 * url: put_level_roleURL
 * method: put_level_role_TYPE
 * raw_url: put_level_role_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_role = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/_Role'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_role_RAW_URL = function() {
  return '/level/_Role'
}
export const put_level_role_TYPE = function() {
  return 'put'
}
export const put_level_roleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/_Role'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取节点
 * request: get_nodes
 * url: get_nodesURL
 * method: get_nodes_TYPE
 * raw_url: get_nodes_RAW_URL
 */
export const get_nodes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/nodes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_nodes_RAW_URL = function() {
  return '/nodes'
}
export const get_nodes_TYPE = function() {
  return 'get'
}
export const get_nodesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/nodes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取SukeDev表的权限级别和结构
 * request: get_schema_sukedev
 * url: get_schema_sukedevURL
 * method: get_schema_sukedev_TYPE
 * raw_url: get_schema_sukedev_RAW_URL
 */
export const get_schema_sukedev = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/SukeDev'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_sukedev_RAW_URL = function() {
  return '/schema/SukeDev'
}
export const get_schema_sukedev_TYPE = function() {
  return 'get'
}
export const get_schema_sukedevURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/SukeDev'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置会话表的级别
 * request: put_level_session
 * url: put_level_sessionURL
 * method: put_level_session_TYPE
 * raw_url: put_level_session_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_session = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/_Session'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_session_RAW_URL = function() {
  return '/level/_Session'
}
export const put_level_session_TYPE = function() {
  return 'put'
}
export const put_level_sessionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/_Session'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 发送短信,短信验证码发送成功后,则会在缓存中以mobile为键写入, 用户下一步提交时，可以根据此键查询验证通过
 * request: post_sendsms
 * url: post_sendsmsURL
 * method: post_sendsms_TYPE
 * raw_url: post_sendsms_RAW_URL
 * @param nationcode - 国家/地区
 * @param account - 大陆手机号码
 */
export const post_sendsms = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sendsms'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['nationcode'] !== undefined) {
    queryParameters['nationcode'] = parameters['nationcode']
  }
  if (parameters['nationcode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: nationcode'))
  }
  if (parameters['account'] !== undefined) {
    queryParameters['account'] = parameters['account']
  }
  if (parameters['account'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: account'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_sendsms_RAW_URL = function() {
  return '/sendsms'
}
export const post_sendsms_TYPE = function() {
  return 'post'
}
export const post_sendsmsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sendsms'
  if (parameters['nationcode'] !== undefined) {
    queryParameters['nationcode'] = parameters['nationcode']
  }
  if (parameters['account'] !== undefined) {
    queryParameters['account'] = parameters['account']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_menu
 * url: get_classes_menuURL
 * method: get_classes_menu_TYPE
 * raw_url: get_classes_menu_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_menu = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Menu'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_menu_RAW_URL = function() {
  return '/classes/Menu'
}
export const get_classes_menu_TYPE = function() {
  return 'get'
}
export const get_classes_menuURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Menu'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条菜单记录
 * request: post_classes_menu
 * url: post_classes_menuURL
 * method: post_classes_menu_TYPE
 * raw_url: post_classes_menu_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_menu = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Menu'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_menu_RAW_URL = function() {
  return '/classes/Menu'
}
export const post_classes_menu_TYPE = function() {
  return 'post'
}
export const post_classes_menuURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Menu'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取_User表的权限级别和结构
 * request: get_schema_user
 * url: get_schema_userURL
 * method: get_schema_user_TYPE
 * raw_url: get_schema_user_RAW_URL
 */
export const get_schema_user = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/_User'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_user_RAW_URL = function() {
  return '/schema/_User'
}
export const get_schema_user_TYPE = function() {
  return 'get'
}
export const get_schema_userURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/_User'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取会话表的权限级别和结构
 * request: get_schema_session
 * url: get_schema_sessionURL
 * method: get_schema_session_TYPE
 * raw_url: get_schema_session_RAW_URL
 */
export const get_schema_session = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/_Session'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_session_RAW_URL = function() {
  return '/schema/_Session'
}
export const get_schema_session_TYPE = function() {
  return 'get'
}
export const get_schema_sessionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/_Session'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 增加应用商
 * request: post_suke_add_yys
 * url: post_suke_add_yysURL
 * method: post_suke_add_yys_TYPE
 * raw_url: post_suke_add_yys_RAW_URL
 * @param name - 应用商名称
 * @param id - 应用商代号
 * @param url - 应用商接口地址
 * @param para - 应用商接口para
 * @param statusUrl - 应用商设备状态接口地址
 * @param statusPara - 应用商设备状态接口para
 * @param default - 是否是默认供应商
 */
export const post_suke_add_yys = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/add_yys'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['url'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: url'))
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['para'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: para'))
  }
  if (parameters['statusUrl'] !== undefined) {
    queryParameters['status_url'] = parameters['statusUrl']
  }
  if (parameters['statusPara'] !== undefined) {
    queryParameters['status_para'] = parameters['statusPara']
  }
  if (parameters['default'] !== undefined) {
    queryParameters['default'] = parameters['default']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_suke_add_yys_RAW_URL = function() {
  return '/suke/add_yys'
}
export const post_suke_add_yys_TYPE = function() {
  return 'post'
}
export const post_suke_add_yysURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/add_yys'
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['statusUrl'] !== undefined) {
    queryParameters['status_url'] = parameters['statusUrl']
  }
  if (parameters['statusPara'] !== undefined) {
    queryParameters['status_para'] = parameters['statusPara']
  }
  if (parameters['default'] !== undefined) {
    queryParameters['default'] = parameters['default']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 增加指令
 * request: post_suke_add_zl
 * url: post_suke_add_zlURL
 * method: post_suke_add_zl_TYPE
 * raw_url: post_suke_add_zl_RAW_URL
 * @param hardwareType - 设备类型
 * @param name - 指令
 * @param nameEncrypt - 加密指令
 * @param needReply - 指令回复类型 1 需要 0 不需要
 * @param remark - 备注
 * @param enable - 指令状态 启动:1,废弃:0
 */
export const post_suke_add_zl = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/add_zl'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['hardwareType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: hardwareType'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['nameEncrypt'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: nameEncrypt'))
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['needReply'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: needReply'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['enable'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: enable'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_suke_add_zl_RAW_URL = function() {
  return '/suke/add_zl'
}
export const post_suke_add_zl_TYPE = function() {
  return 'post'
}
export const post_suke_add_zlURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/add_zl'
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 重置密码
 * request: post_requestpasswordreset
 * url: post_requestpasswordresetURL
 * method: post_requestpasswordreset_TYPE
 * raw_url: post_requestpasswordreset_RAW_URL
 * @param account - 帐号绑定的邮箱/手机号码,填入绑定的邮箱或手机号
 */
export const post_requestpasswordreset = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/requestPasswordReset'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['account'] !== undefined) {
    body = parameters['account']
  }
  if (parameters['account'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: account'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_requestpasswordreset_RAW_URL = function() {
  return '/requestPasswordReset'
}
export const post_requestpasswordreset_TYPE = function() {
  return 'post'
}
export const post_requestpasswordresetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/requestPasswordReset'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置通道表的级别
 * request: put_level_channel
 * url: put_level_channelURL
 * method: put_level_channel_TYPE
 * raw_url: put_level_channel_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_channel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Channel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_channel_RAW_URL = function() {
  return '/level/Channel'
}
export const put_level_channel_TYPE = function() {
  return 'put'
}
export const put_level_channelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Channel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_permission
 * url: get_classes_permissionURL
 * method: get_classes_permission_TYPE
 * raw_url: get_classes_permission_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_permission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Permission'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_permission_RAW_URL = function() {
  return '/classes/Permission'
}
export const get_classes_permission_TYPE = function() {
  return 'get'
}
export const get_classes_permissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Permission'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条权限记录
 * request: post_classes_permission
 * url: post_classes_permissionURL
 * method: post_classes_permission_TYPE
 * raw_url: post_classes_permission_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_permission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Permission'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_permission_RAW_URL = function() {
  return '/classes/Permission'
}
export const post_classes_permission_TYPE = function() {
  return 'post'
}
export const post_classes_permissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Permission'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 下载license辅助小工具
 * request: get_lictool
 * url: get_lictoolURL
 * method: get_lictool_TYPE
 * raw_url: get_lictool_RAW_URL
 * @param appid - appid
 * @param appsecret - appsecret
 */
export const get_lictool = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/lictool'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['appid'] !== undefined) {
    queryParameters['appid'] = parameters['appid']
  }
  if (parameters['appid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: appid'))
  }
  if (parameters['appsecret'] !== undefined) {
    queryParameters['appsecret'] = parameters['appsecret']
  }
  if (parameters['appsecret'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: appsecret'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_lictool_RAW_URL = function() {
  return '/lictool'
}
export const get_lictool_TYPE = function() {
  return 'get'
}
export const get_lictoolURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/lictool'
  if (parameters['appid'] !== undefined) {
    queryParameters['appid'] = parameters['appid']
  }
  if (parameters['appsecret'] !== undefined) {
    queryParameters['appsecret'] = parameters['appsecret']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 对插件启动/停止/热更新/获取
 * request: post_plugin_app
 * url: post_plugin_appURL
 * method: post_plugin_app_TYPE
 * raw_url: post_plugin_app_RAW_URL
 * @param app - 插件名
 * @param action - 启动/停止/热更新/获取
 */
export const post_plugin_app = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/plugin/{App}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{App}', `${parameters['app']}`)
  if (parameters['app'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: app'))
  }
  if (parameters['action'] !== undefined) {
    queryParameters['Action'] = parameters['action']
  }
  if (parameters['action'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: action'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_plugin_app_RAW_URL = function() {
  return '/plugin/{App}'
}
export const post_plugin_app_TYPE = function() {
  return 'post'
}
export const post_plugin_appURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/plugin/{App}'
  path = path.replace('{App}', `${parameters['app']}`)
  if (parameters['action'] !== undefined) {
    queryParameters['Action'] = parameters['action']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取权限表的权限级别和结构
 * request: get_schema_permission
 * url: get_schema_permissionURL
 * method: get_schema_permission_TYPE
 * raw_url: get_schema_permission_RAW_URL
 */
export const get_schema_permission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Permission'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_permission_RAW_URL = function() {
  return '/schema/Permission'
}
export const get_schema_permission_TYPE = function() {
  return 'get'
}
export const get_schema_permissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Permission'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_sukelog
 * url: get_classes_sukelogURL
 * method: get_classes_sukelog_TYPE
 * raw_url: get_classes_sukelog_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_sukelog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeLog'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_sukelog_RAW_URL = function() {
  return '/classes/SukeLog'
}
export const get_classes_sukelog_TYPE = function() {
  return 'get'
}
export const get_classes_sukelogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeLog'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条SukeLog记录
 * request: post_classes_sukelog
 * url: post_classes_sukelogURL
 * method: post_classes_sukelog_TYPE
 * raw_url: post_classes_sukelog_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_sukelog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeLog'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_sukelog_RAW_URL = function() {
  return '/classes/SukeLog'
}
export const post_classes_sukelog_TYPE = function() {
  return 'post'
}
export const post_classes_sukelogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeLog'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取产品表的权限级别和结构
 * request: get_schema_product
 * url: get_schema_productURL
 * method: get_schema_product_TYPE
 * raw_url: get_schema_product_RAW_URL
 */
export const get_schema_product = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Product'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_product_RAW_URL = function() {
  return '/schema/Product'
}
export const get_schema_product_TYPE = function() {
  return 'get'
}
export const get_schema_productURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Product'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置工程表的级别
 * request: put_level_project
 * url: put_level_projectURL
 * method: put_level_project_TYPE
 * raw_url: put_level_project_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_project = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Project'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_project_RAW_URL = function() {
  return '/level/Project'
}
export const put_level_project_TYPE = function() {
  return 'put'
}
export const put_level_projectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Project'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 部署结果
 * request: get_setup_result
 * url: get_setup_resultURL
 * method: get_setup_result_TYPE
 * raw_url: get_setup_result_RAW_URL
 * @param license - license
 * @param result - result
 */
export const get_setup_result = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/setup_result'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['license'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: license'))
  }
  if (parameters['result'] !== undefined) {
    queryParameters['result'] = parameters['result']
  }
  if (parameters['result'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: result'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_setup_result_RAW_URL = function() {
  return '/setup_result'
}
export const get_setup_result_TYPE = function() {
  return 'get'
}
export const get_setup_resultURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/setup_result'
  if (parameters['license'] !== undefined) {
    queryParameters['license'] = parameters['license']
  }
  if (parameters['result'] !== undefined) {
    queryParameters['result'] = parameters['result']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除数据字典记录
 * request: delete_classes_datas_id
 * url: delete_classes_datas_idURL
 * method: delete_classes_datas_id_TYPE
 * raw_url: delete_classes_datas_id_RAW_URL
 * @param id - 删除数据字典的ID
 */
export const delete_classes_datas_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Datas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_datas_id_RAW_URL = function() {
  return '/classes/Datas/{id}'
}
export const delete_classes_datas_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_datas_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Datas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取数据字典详情
 * request: get_classes_datas_id
 * url: get_classes_datas_idURL
 * method: get_classes_datas_id_TYPE
 * raw_url: get_classes_datas_id_RAW_URL
 * @param id - 数据字典的ID
 */
export const get_classes_datas_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Datas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_datas_id_RAW_URL = function() {
  return '/classes/Datas/{id}'
}
export const get_classes_datas_id_TYPE = function() {
  return 'get'
}
export const get_classes_datas_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Datas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新数据字典
 * request: put_classes_datas_id
 * url: put_classes_datas_idURL
 * method: put_classes_datas_id_TYPE
 * raw_url: put_classes_datas_id_RAW_URL
 * @param id - 更新数据字典的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_datas_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Datas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_datas_id_RAW_URL = function() {
  return '/classes/Datas/{id}'
}
export const put_classes_datas_id_TYPE = function() {
  return 'put'
}
export const put_classes_datas_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Datas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * json文件导库
 * request: post_import_data
 * url: post_import_dataURL
 * method: post_import_data_TYPE
 * raw_url: post_import_data_RAW_URL
 * @param className - 表名
 * @param file - 数据文件
 */
export const post_import_data = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/import_data'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['className'] !== undefined) {
    form['className'] = parameters['className']
  }
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_import_data_RAW_URL = function() {
  return '/import_data'
}
export const post_import_data_TYPE = function() {
  return 'post'
}
export const post_import_dataURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/import_data'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_department
 * url: get_classes_departmentURL
 * method: get_classes_department_TYPE
 * raw_url: get_classes_department_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_department = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Department'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_department_RAW_URL = function() {
  return '/classes/Department'
}
export const get_classes_department_TYPE = function() {
  return 'get'
}
export const get_classes_departmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Department'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条部门记录
 * request: post_classes_department
 * url: post_classes_departmentURL
 * method: post_classes_department_TYPE
 * raw_url: post_classes_department_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_department = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Department'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_department_RAW_URL = function() {
  return '/classes/Department'
}
export const post_classes_department_TYPE = function() {
  return 'post'
}
export const post_classes_departmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Department'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_notification
 * url: get_classes_notificationURL
 * method: get_classes_notification_TYPE
 * raw_url: get_classes_notification_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_notification = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Notification'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_notification_RAW_URL = function() {
  return '/classes/Notification'
}
export const get_classes_notification_TYPE = function() {
  return 'get'
}
export const get_classes_notificationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Notification'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条通知记录
 * request: post_classes_notification
 * url: post_classes_notificationURL
 * method: post_classes_notification_TYPE
 * raw_url: post_classes_notification_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_notification = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Notification'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_notification_RAW_URL = function() {
  return '/classes/Notification'
}
export const post_classes_notification_TYPE = function() {
  return 'post'
}
export const post_classes_notificationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Notification'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置SukeDev表的级别
 * request: put_level_sukedev
 * url: put_level_sukedevURL
 * method: put_level_sukedev_TYPE
 * raw_url: put_level_sukedev_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_sukedev = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/SukeDev'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_sukedev_RAW_URL = function() {
  return '/level/SukeDev'
}
export const put_level_sukedev_TYPE = function() {
  return 'put'
}
export const put_level_sukedevURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/SukeDev'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 文件上传到服务器
 * request: post_upload
 * url: post_uploadURL
 * method: post_upload_TYPE
 * raw_url: post_upload_RAW_URL
 * @param file -
 */
export const post_upload = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/upload'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_upload_RAW_URL = function() {
  return '/upload'
}
export const post_upload_TYPE = function() {
  return 'post'
}
export const post_uploadURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/upload'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 获得文件操作权限
* request: get_file_signature
* url: get_file_signatureURL
* method: get_file_signature_TYPE
* raw_url: get_file_signature_RAW_URL

*/
export const get_file_signature = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/file/signature'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_file_signature_RAW_URL = function() {
  return '/file/signature'
}
export const get_file_signature_TYPE = function() {
  return 'get'
}
export const get_file_signatureURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/file/signature'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 创建规则引擎
 * request: post_rule_test
 * url: post_rule_testURL
 * method: post_rule_test_TYPE
 * raw_url: post_rule_test_RAW_URL
 * @param rule - 规则引擎配置
 */
export const post_rule_test = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rule_test'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['rule'] !== undefined) {
    body = parameters['rule']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_rule_test_RAW_URL = function() {
  return '/rule_test'
}
export const post_rule_test_TYPE = function() {
  return 'post'
}
export const post_rule_testURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rule_test'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 增加设备类型
 * request: post_suke_add_devtype
 * url: post_suke_add_devtypeURL
 * method: post_suke_add_devtype_TYPE
 * raw_url: post_suke_add_devtype_RAW_URL
 * @param name - 设备类型名称
 * @param number - 设备类型编码
 * @param remark - 备注
 * @param enable - 设备类型状态 启动:1,废弃:0
 */
export const post_suke_add_devtype = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/add_devtype'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['number'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: number'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['enable'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: enable'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_suke_add_devtype_RAW_URL = function() {
  return '/suke/add_devtype'
}
export const post_suke_add_devtype_TYPE = function() {
  return 'post'
}
export const post_suke_add_devtypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/add_devtype'
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['number'] !== undefined) {
    queryParameters['number'] = parameters['number']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取角色表的权限级别和结构
 * request: get_schema_role
 * url: get_schema_roleURL
 * method: get_schema_role_TYPE
 * raw_url: get_schema_role_RAW_URL
 */
export const get_schema_role = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/_Role'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_role_RAW_URL = function() {
  return '/schema/_Role'
}
export const get_schema_role_TYPE = function() {
  return 'get'
}
export const get_schema_roleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/_Role'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置权限表的级别
 * request: put_level_permission
 * url: put_level_permissionURL
 * method: put_level_permission_TYPE
 * raw_url: put_level_permission_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_permission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/Permission'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_permission_RAW_URL = function() {
  return '/level/Permission'
}
export const put_level_permission_TYPE = function() {
  return 'put'
}
export const put_level_permissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/Permission'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除Crond记录
 * request: delete_classes_crond_id
 * url: delete_classes_crond_idURL
 * method: delete_classes_crond_id_TYPE
 * raw_url: delete_classes_crond_id_RAW_URL
 * @param id - 删除Crond的ID
 */
export const delete_classes_crond_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Crond/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_crond_id_RAW_URL = function() {
  return '/classes/Crond/{id}'
}
export const delete_classes_crond_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_crond_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Crond/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取Crond详情
 * request: get_classes_crond_id
 * url: get_classes_crond_idURL
 * method: get_classes_crond_id_TYPE
 * raw_url: get_classes_crond_id_RAW_URL
 * @param id - Crond的ID
 */
export const get_classes_crond_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Crond/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_crond_id_RAW_URL = function() {
  return '/classes/Crond/{id}'
}
export const get_classes_crond_id_TYPE = function() {
  return 'get'
}
export const get_classes_crond_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Crond/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新Crond
 * request: put_classes_crond_id
 * url: put_classes_crond_idURL
 * method: put_classes_crond_id_TYPE
 * raw_url: put_classes_crond_id_RAW_URL
 * @param id - 更新Crond的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_crond_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Crond/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_crond_id_RAW_URL = function() {
  return '/classes/Crond/{id}'
}
export const put_classes_crond_id_TYPE = function() {
  return 'put'
}
export const put_classes_crond_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Crond/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_datas
 * url: get_classes_datasURL
 * method: get_classes_datas_TYPE
 * raw_url: get_classes_datas_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_datas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Datas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_datas_RAW_URL = function() {
  return '/classes/Datas'
}
export const get_classes_datas_TYPE = function() {
  return 'get'
}
export const get_classes_datasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Datas'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条数据字典记录
 * request: post_classes_datas
 * url: post_classes_datasURL
 * method: post_classes_datas_TYPE
 * raw_url: post_classes_datas_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_datas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Datas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_datas_RAW_URL = function() {
  return '/classes/Datas'
}
export const post_classes_datas_TYPE = function() {
  return 'post'
}
export const post_classes_datasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Datas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取License表的权限级别和结构
 * request: get_schema_license
 * url: get_schema_licenseURL
 * method: get_schema_license_TYPE
 * raw_url: get_schema_license_RAW_URL
 */
export const get_schema_license = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/License'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_license_RAW_URL = function() {
  return '/schema/License'
}
export const get_schema_license_TYPE = function() {
  return 'get'
}
export const get_schema_licenseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/License'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_license
 * url: get_classes_licenseURL
 * method: get_classes_license_TYPE
 * raw_url: get_classes_license_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_license = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/License'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_license_RAW_URL = function() {
  return '/classes/License'
}
export const get_classes_license_TYPE = function() {
  return 'get'
}
export const get_classes_licenseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/License'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条License记录
 * request: post_classes_license
 * url: post_classes_licenseURL
 * method: post_classes_license_TYPE
 * raw_url: post_classes_license_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_license = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/License'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_license_RAW_URL = function() {
  return '/classes/License'
}
export const post_classes_license_TYPE = function() {
  return 'post'
}
export const post_classes_licenseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/License'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_role
 * url: get_classes_roleURL
 * method: get_classes_role_TYPE
 * raw_url: get_classes_role_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_role = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Role'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_role_RAW_URL = function() {
  return '/classes/_Role'
}
export const get_classes_role_TYPE = function() {
  return 'get'
}
export const get_classes_roleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Role'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条角色记录
 * request: post_classes_role
 * url: post_classes_roleURL
 * method: post_classes_role_TYPE
 * raw_url: post_classes_role_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_role = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/_Role'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_role_RAW_URL = function() {
  return '/classes/_Role'
}
export const post_classes_role_TYPE = function() {
  return 'post'
}
export const post_classes_roleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/_Role'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除应用记录
 * request: delete_classes_app_id
 * url: delete_classes_app_idURL
 * method: delete_classes_app_id_TYPE
 * raw_url: delete_classes_app_id_RAW_URL
 * @param id - 删除应用的ID
 */
export const delete_classes_app_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/App/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_app_id_RAW_URL = function() {
  return '/classes/App/{id}'
}
export const delete_classes_app_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_app_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/App/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取应用详情
 * request: get_classes_app_id
 * url: get_classes_app_idURL
 * method: get_classes_app_id_TYPE
 * raw_url: get_classes_app_id_RAW_URL
 * @param id - 应用的ID
 */
export const get_classes_app_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/App/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_app_id_RAW_URL = function() {
  return '/classes/App/{id}'
}
export const get_classes_app_id_TYPE = function() {
  return 'get'
}
export const get_classes_app_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/App/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新应用
 * request: put_classes_app_id
 * url: put_classes_app_idURL
 * method: put_classes_app_id_TYPE
 * raw_url: put_classes_app_id_RAW_URL
 * @param id - 更新应用的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_app_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/App/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_app_id_RAW_URL = function() {
  return '/classes/App/{id}'
}
export const put_classes_app_id_TYPE = function() {
  return 'put'
}
export const put_classes_app_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/App/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑应用商
 * request: put_suke_edit_yys
 * url: put_suke_edit_yysURL
 * method: put_suke_edit_yys_TYPE
 * raw_url: put_suke_edit_yys_RAW_URL
 * @param objectId - 指令id
 * @param name - 应用商名称
 * @param id - 应用商代号
 * @param url - 应用商接口地址
 * @param para - 应用商接口para
 * @param statusUrl - 应用商设备状态接口地址
 * @param statusPara - 应用商设备状态接口para
 * @param default - 是否是默认供应商
 */
export const put_suke_edit_yys = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/edit_yys'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['objectId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: objectId'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['url'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: url'))
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['para'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: para'))
  }
  if (parameters['statusUrl'] !== undefined) {
    queryParameters['status_url'] = parameters['statusUrl']
  }
  if (parameters['statusPara'] !== undefined) {
    queryParameters['status_para'] = parameters['statusPara']
  }
  if (parameters['default'] !== undefined) {
    queryParameters['default'] = parameters['default']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_suke_edit_yys_RAW_URL = function() {
  return '/suke/edit_yys'
}
export const put_suke_edit_yys_TYPE = function() {
  return 'put'
}
export const put_suke_edit_yysURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/edit_yys'
  if (parameters['objectId'] !== undefined) {
    queryParameters['objectId'] = parameters['objectId']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['statusUrl'] !== undefined) {
    queryParameters['status_url'] = parameters['statusUrl']
  }
  if (parameters['statusPara'] !== undefined) {
    queryParameters['status_para'] = parameters['statusPara']
  }
  if (parameters['default'] !== undefined) {
    queryParameters['default'] = parameters['default']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取ukey信息
 * request: get_ukey
 * url: get_ukeyURL
 * method: get_ukey_TYPE
 * raw_url: get_ukey_RAW_URL
 */
export const get_ukey = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/ukey'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_ukey_RAW_URL = function() {
  return '/ukey'
}
export const get_ukey_TYPE = function() {
  return 'get'
}
export const get_ukeyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/ukey'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除SukeDev记录
 * request: delete_classes_sukedev_id
 * url: delete_classes_sukedev_idURL
 * method: delete_classes_sukedev_id_TYPE
 * raw_url: delete_classes_sukedev_id_RAW_URL
 * @param id - 删除SukeDev的ID
 */
export const delete_classes_sukedev_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeDev/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_sukedev_id_RAW_URL = function() {
  return '/classes/SukeDev/{id}'
}
export const delete_classes_sukedev_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_sukedev_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeDev/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取SukeDev详情
 * request: get_classes_sukedev_id
 * url: get_classes_sukedev_idURL
 * method: get_classes_sukedev_id_TYPE
 * raw_url: get_classes_sukedev_id_RAW_URL
 * @param id - SukeDev的ID
 */
export const get_classes_sukedev_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeDev/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_sukedev_id_RAW_URL = function() {
  return '/classes/SukeDev/{id}'
}
export const get_classes_sukedev_id_TYPE = function() {
  return 'get'
}
export const get_classes_sukedev_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeDev/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新SukeDev
 * request: put_classes_sukedev_id
 * url: put_classes_sukedev_idURL
 * method: put_classes_sukedev_id_TYPE
 * raw_url: put_classes_sukedev_id_RAW_URL
 * @param id - 更新SukeDev的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_sukedev_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/SukeDev/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_sukedev_id_RAW_URL = function() {
  return '/classes/SukeDev/{id}'
}
export const put_classes_sukedev_id_TYPE = function() {
  return 'put'
}
export const put_classes_sukedev_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/SukeDev/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询设备在线状态
 * request: post_suke_query_hardware_online
 * url: post_suke_query_hardware_onlineURL
 * method: post_suke_query_hardware_online_TYPE
 * raw_url: post_suke_query_hardware_online_RAW_URL
 * @param body - 查询设备在线状态
 */
export const post_suke_query_hardware_online = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_hardware_online'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_suke_query_hardware_online_RAW_URL = function() {
  return '/suke/query_hardware_online'
}
export const post_suke_query_hardware_online_TYPE = function() {
  return 'post'
}
export const post_suke_query_hardware_onlineURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_hardware_online'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 检查会话是否有效,用于判断是否登录
 * request: get_users_me
 * url: get_users_meURL
 * method: get_users_me_TYPE
 * raw_url: get_users_me_RAW_URL
 * @param sessionToken -
 */
export const get_users_me = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/me'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sessionToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sessionToken'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_users_me_RAW_URL = function() {
  return '/users/me'
}
export const get_users_me_TYPE = function() {
  return 'get'
}
export const get_users_meURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/me'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 给角色分配菜单
 * request: put_add_menu
 * url: put_add_menuURL
 * method: put_add_menu_TYPE
 * raw_url: put_add_menu_RAW_URL
 * @param menu -
 */
export const put_add_menu = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/add_menu'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['menu'] !== undefined) {
    body = parameters['menu']
  }
  if (parameters['menu'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: menu'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_add_menu_RAW_URL = function() {
  return '/add_menu'
}
export const put_add_menu_TYPE = function() {
  return 'put'
}
export const put_add_menuURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/add_menu'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取通知表的权限级别和结构
 * request: get_schema_notification
 * url: get_schema_notificationURL
 * method: get_schema_notification_TYPE
 * raw_url: get_schema_notification_RAW_URL
 */
export const get_schema_notification = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Notification'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_notification_RAW_URL = function() {
  return '/schema/Notification'
}
export const get_schema_notification_TYPE = function() {
  return 'get'
}
export const get_schema_notificationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Notification'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 用户注册
 * request: post_users
 * url: post_usersURL
 * method: post_users_TYPE
 * raw_url: post_users_RAW_URL
 * @param user - 用户信息
 */
export const post_users = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters['user'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: user'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_users_RAW_URL = function() {
  return '/users'
}
export const post_users_TYPE = function() {
  return 'post'
}
export const post_usersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询应用商
 * request: get_suke_query_yys_info
 * url: get_suke_query_yys_infoURL
 * method: get_suke_query_yys_info_TYPE
 * raw_url: get_suke_query_yys_info_RAW_URL
 * @param name - 应用商名称
 * @param id - 应用商代号
 * @param url - 应用商接口地址
 * @param para - 应用商接口para
 * @param skip - 起始查询位
 * @param limit - 查询条数
 */
export const get_suke_query_yys_info = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_yys_info'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_suke_query_yys_info_RAW_URL = function() {
  return '/suke/query_yys_info'
}
export const get_suke_query_yys_info_TYPE = function() {
  return 'get'
}
export const get_suke_query_yys_infoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_yys_info'
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['url'] !== undefined) {
    queryParameters['url'] = parameters['url']
  }
  if (parameters['para'] !== undefined) {
    queryParameters['para'] = parameters['para']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询顶部导航菜单
 * request: get_classes_navigation
 * url: get_classes_navigationURL
 * method: get_classes_navigation_TYPE
 * raw_url: get_classes_navigation_RAW_URL
 * @param order - 排序方式
 * @param limit - 显示数量
 */
export const get_classes_navigation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Navigation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_navigation_RAW_URL = function() {
  return '/classes/Navigation'
}
export const get_classes_navigation_TYPE = function() {
  return 'get'
}
export const get_classes_navigationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Navigation'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通道控制
 * request: post_control_channel
 * url: post_control_channelURL
 * method: post_control_channel_TYPE
 * raw_url: post_control_channel_RAW_URL
 * @param id - 通道ID
 * @param action - 更新通道
 */
export const post_control_channel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/control/channel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['action'] !== undefined) {
    queryParameters['action'] = parameters['action']
  }
  if (parameters['action'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: action'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_control_channel_RAW_URL = function() {
  return '/control/channel'
}
export const post_control_channel_TYPE = function() {
  return 'post'
}
export const post_control_channelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/control/channel'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['action'] !== undefined) {
    queryParameters['action'] = parameters['action']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除License记录
 * request: delete_classes_license_id
 * url: delete_classes_license_idURL
 * method: delete_classes_license_id_TYPE
 * raw_url: delete_classes_license_id_RAW_URL
 * @param id - 删除License的ID
 */
export const delete_classes_license_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/License/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_license_id_RAW_URL = function() {
  return '/classes/License/{id}'
}
export const delete_classes_license_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_license_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/License/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取License详情
 * request: get_classes_license_id
 * url: get_classes_license_idURL
 * method: get_classes_license_id_TYPE
 * raw_url: get_classes_license_id_RAW_URL
 * @param id - License的ID
 */
export const get_classes_license_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/License/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_license_id_RAW_URL = function() {
  return '/classes/License/{id}'
}
export const get_classes_license_id_TYPE = function() {
  return 'get'
}
export const get_classes_license_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/License/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新License
 * request: put_classes_license_id
 * url: put_classes_license_idURL
 * method: put_classes_license_id_TYPE
 * raw_url: put_classes_license_id_RAW_URL
 * @param id - 更新License的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_license_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/License/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_license_id_RAW_URL = function() {
  return '/classes/License/{id}'
}
export const put_classes_license_id_TYPE = function() {
  return 'put'
}
export const put_classes_license_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/License/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取菜单表的权限级别和结构
 * request: get_schema_menu
 * url: get_schema_menuURL
 * method: get_schema_menu_TYPE
 * raw_url: get_schema_menu_RAW_URL
 */
export const get_schema_menu = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Menu'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_menu_RAW_URL = function() {
  return '/schema/Menu'
}
export const get_schema_menu_TYPE = function() {
  return 'get'
}
export const get_schema_menuURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Menu'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取规则引擎列表
 * request: get_rules
 * url: get_rulesURL
 * method: get_rules_TYPE
 * raw_url: get_rules_RAW_URL
 */
export const get_rules = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rules'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_rules_RAW_URL = function() {
  return '/rules'
}
export const get_rules_TYPE = function() {
  return 'get'
}
export const get_rulesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rules'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 创建规则引擎
 * request: post_rules
 * url: post_rulesURL
 * method: post_rules_TYPE
 * raw_url: post_rules_RAW_URL
 * @param rule - 规则引擎配置
 */
export const post_rules = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rules'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['rule'] !== undefined) {
    body = parameters['rule']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_rules_RAW_URL = function() {
  return '/rules'
}
export const post_rules_TYPE = function() {
  return 'post'
}
export const post_rulesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rules'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 退出登录
 * request: post_logout
 * url: post_logoutURL
 * method: post_logout_TYPE
 * raw_url: post_logout_RAW_URL
 * @param sessionToken -
 */
export const post_logout = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sessionToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sessionToken'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_logout_RAW_URL = function() {
  return '/logout'
}
export const post_logout_TYPE = function() {
  return 'post'
}
export const post_logoutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据网关查询设备列表
 * request: get_devs_vcon
 * url: get_devs_vconURL
 * method: get_devs_vcon_TYPE
 * raw_url: get_devs_vcon_RAW_URL
 * @param vcon - 网关地址
 * @param devType - 设备类型
 * @param nodeType - 设备:devs | 网关:vcons
 * @param start - 起始行数
 * @param length - 从起始开始查找几条
 * @param keyword - 模糊条件查找
 */
export const get_devs_vcon = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devs/{vcon}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{vcon}', `${parameters['vcon']}`)
  if (parameters['vcon'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: vcon'))
  }
  if (parameters['devType'] !== undefined) {
    queryParameters['devType'] = parameters['devType']
  }
  if (parameters['devType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: devType'))
  }
  if (parameters['nodeType'] !== undefined) {
    queryParameters['nodeType'] = parameters['nodeType']
  }
  if (parameters['nodeType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: nodeType'))
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['start'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: start'))
  }
  if (parameters['length'] !== undefined) {
    queryParameters['length'] = parameters['length']
  }
  if (parameters['length'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: length'))
  }
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_devs_vcon_RAW_URL = function() {
  return '/devs/{vcon}'
}
export const get_devs_vcon_TYPE = function() {
  return 'get'
}
export const get_devs_vconURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devs/{vcon}'
  path = path.replace('{vcon}', `${parameters['vcon']}`)
  if (parameters['devType'] !== undefined) {
    queryParameters['devType'] = parameters['devType']
  }
  if (parameters['nodeType'] !== undefined) {
    queryParameters['nodeType'] = parameters['nodeType']
  }
  if (parameters['start'] !== undefined) {
    queryParameters['start'] = parameters['start']
  }
  if (parameters['length'] !== undefined) {
    queryParameters['length'] = parameters['length']
  }
  if (parameters['keyword'] !== undefined) {
    queryParameters['keyword'] = parameters['keyword']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取插件
 * request: get_plugin
 * url: get_pluginURL
 * method: get_plugin_TYPE
 * raw_url: get_plugin_RAW_URL
 */
export const get_plugin = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/plugin'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_plugin_RAW_URL = function() {
  return '/plugin'
}
export const get_plugin_TYPE = function() {
  return 'get'
}
export const get_pluginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/plugin'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取上传文件Token
 * request: post_upload_token
 * url: post_upload_tokenURL
 * method: post_upload_token_TYPE
 * raw_url: post_upload_token_RAW_URL
 * @param from -
 */
export const post_upload_token = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/upload_token'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['from'] !== undefined) {
    queryParameters['from'] = parameters['from']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_upload_token_RAW_URL = function() {
  return '/upload_token'
}
export const post_upload_token_TYPE = function() {
  return 'post'
}
export const post_upload_tokenURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/upload_token'
  if (parameters['from'] !== undefined) {
    queryParameters['from'] = parameters['from']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置License表的级别
 * request: put_level_license
 * url: put_level_licenseURL
 * method: put_level_license_TYPE
 * raw_url: put_level_license_RAW_URL
 * @param permissions - 表操作权限.
 */
export const put_level_license = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/level/License'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['permissions'] !== undefined) {
    body = parameters['permissions']
  }
  if (parameters['permissions'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: permissions'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_level_license_RAW_URL = function() {
  return '/level/License'
}
export const put_level_license_TYPE = function() {
  return 'put'
}
export const put_level_licenseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/level/License'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID删除设备管理记录
 * request: delete_classes_devices_id
 * url: delete_classes_devices_idURL
 * method: delete_classes_devices_id_TYPE
 * raw_url: delete_classes_devices_id_RAW_URL
 * @param id - 删除设备管理的ID
 */
export const delete_classes_devices_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const delete_classes_devices_id_RAW_URL = function() {
  return '/classes/Devices/{id}'
}
export const delete_classes_devices_id_TYPE = function() {
  return 'delete'
}
export const delete_classes_devices_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Devices/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取设备管理详情
 * request: get_classes_devices_id
 * url: get_classes_devices_idURL
 * method: get_classes_devices_id_TYPE
 * raw_url: get_classes_devices_id_RAW_URL
 * @param id - 设备管理的ID
 */
export const get_classes_devices_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_devices_id_RAW_URL = function() {
  return '/classes/Devices/{id}'
}
export const get_classes_devices_id_TYPE = function() {
  return 'get'
}
export const get_classes_devices_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Devices/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过ID更新设备管理
 * request: put_classes_devices_id
 * url: put_classes_devices_idURL
 * method: put_classes_devices_id_TYPE
 * raw_url: put_classes_devices_id_RAW_URL
 * @param id - 更新设备管理的ID
 * @param body - 数据更新的内容.
 */
export const put_classes_devices_id = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const put_classes_devices_id_RAW_URL = function() {
  return '/classes/Devices/{id}'
}
export const put_classes_devices_id_TYPE = function() {
  return 'put'
}
export const put_classes_devices_idURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Devices/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 验证签名数据
 * request: get_verifysigndata
 * url: get_verifysigndataURL
 * method: get_verifysigndata_TYPE
 * raw_url: get_verifysigndata_RAW_URL
 * @param ukey - Ukey
 * @param data - 数据
 * @param sign - 签名
 */
export const get_verifysigndata = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/verifysigndata'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ukey'] !== undefined) {
    queryParameters['ukey'] = parameters['ukey']
  }
  if (parameters['ukey'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ukey'))
  }
  if (parameters['data'] !== undefined) {
    queryParameters['data'] = parameters['data']
  }
  if (parameters['data'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: data'))
  }
  if (parameters['sign'] !== undefined) {
    queryParameters['sign'] = parameters['sign']
  }
  if (parameters['sign'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sign'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_verifysigndata_RAW_URL = function() {
  return '/verifysigndata'
}
export const get_verifysigndata_TYPE = function() {
  return 'get'
}
export const get_verifysigndataURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/verifysigndata'
  if (parameters['ukey'] !== undefined) {
    queryParameters['ukey'] = parameters['ukey']
  }
  if (parameters['data'] !== undefined) {
    queryParameters['data'] = parameters['data']
  }
  if (parameters['sign'] !== undefined) {
    queryParameters['sign'] = parameters['sign']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参考parse文档 https://docs.parseplatform.org/rest/guide/#queries,<br/><br/>where支持：[$lt, $lte, $gt, $gte, $ne, $in, $nin, $exists, $select, $dontSelect, $all, $regex, $text]
 * request: get_classes_project
 * url: get_classes_projectURL
 * method: get_classes_project_TYPE
 * raw_url: get_classes_project_RAW_URL
 * @param order - 排序方式, 负为降序, eg: score,-name
 * @param limit - limit, 显示多少条记录，显示100条记录 eg:100
 * @param skip - skip
 * @param keys - 需要显示的字段,加count(*)则结果里面会显示总记录数, eg: username,email
 * @param include - include
 * @param where - 过滤条件，eg: {"objectId":{"$in":["BGS3BFgcZN"]}}
 */
export const get_classes_project = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Project'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_classes_project_RAW_URL = function() {
  return '/classes/Project'
}
export const get_classes_project_TYPE = function() {
  return 'get'
}
export const get_classes_projectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Project'
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['keys'] !== undefined) {
    queryParameters['keys'] = parameters['keys']
  }
  if (parameters['include'] !== undefined) {
    queryParameters['include'] = parameters['include']
  }
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增一条工程记录
 * request: post_classes_project
 * url: post_classes_projectURL
 * method: post_classes_project_TYPE
 * raw_url: post_classes_project_RAW_URL
 * @param body - 新增的字段
 */
export const post_classes_project = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/classes/Project'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const post_classes_project_RAW_URL = function() {
  return '/classes/Project'
}
export const post_classes_project_TYPE = function() {
  return 'post'
}
export const post_classes_projectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/classes/Project'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取部门表的权限级别和结构
 * request: get_schema_department
 * url: get_schema_departmentURL
 * method: get_schema_department_TYPE
 * raw_url: get_schema_department_RAW_URL
 */
export const get_schema_department = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Department'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_department_RAW_URL = function() {
  return '/schema/Department'
}
export const get_schema_department_TYPE = function() {
  return 'get'
}
export const get_schema_departmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Department'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取Dashboard表的权限级别和结构
 * request: get_schema_dashboard
 * url: get_schema_dashboardURL
 * method: get_schema_dashboard_TYPE
 * raw_url: get_schema_dashboard_RAW_URL
 */
export const get_schema_dashboard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/schema/Dashboard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_schema_dashboard_RAW_URL = function() {
  return '/schema/Dashboard'
}
export const get_schema_dashboard_TYPE = function() {
  return 'get'
}
export const get_schema_dashboardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/schema/Dashboard'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询设备类型信息
 * request: get_suke_query_zl_info
 * url: get_suke_query_zl_infoURL
 * method: get_suke_query_zl_info_TYPE
 * raw_url: get_suke_query_zl_info_RAW_URL
 * @param hardwareType - 设备类型
 * @param name - 指令
 * @param nameEncrypt - 加密指令
 * @param needReply - 指令回复类型 9全部 1 需要 0 不需要
 * @param enable - 指令状态 9全部 启动:1,废弃:0
 * @param skip - 起始查询位
 * @param limit - 查询条数
 */
export const get_suke_query_zl_info = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/suke/query_zl_info'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_suke_query_zl_info_RAW_URL = function() {
  return '/suke/query_zl_info'
}
export const get_suke_query_zl_info_TYPE = function() {
  return 'get'
}
export const get_suke_query_zl_infoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/suke/query_zl_info'
  if (parameters['hardwareType'] !== undefined) {
    queryParameters['hardwareType'] = parameters['hardwareType']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['nameEncrypt'] !== undefined) {
    queryParameters['nameEncrypt'] = parameters['nameEncrypt']
  }
  if (parameters['needReply'] !== undefined) {
    queryParameters['needReply'] = parameters['needReply']
  }
  if (parameters['enable'] !== undefined) {
    queryParameters['enable'] = parameters['enable']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
