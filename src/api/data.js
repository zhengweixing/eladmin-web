import * as api from '@/api/iotapi'

export function initData(Fun, params) {
  return api[Fun.toLowerCase()](params)
}

export function download(Fun, params) {
  return api[Fun.toLowerCase()](params)
}
