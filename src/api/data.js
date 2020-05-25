import request from '@/utils/request'
import * as api from '@/api/iotapi'
import qs from 'qs'

export function initData(className, params) {
  var key = 'get_classes_' + className
  return api[key.toLowerCase()](params)
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}
