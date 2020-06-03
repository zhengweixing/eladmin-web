import axios from 'axios'
import router from '@/router/routers'
import { MessageBox, Message } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Config from '@/settings'
import { Error } from '@/utils/errorMsg'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['sessionToken'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log(error)
    const res = error.response
    if (!res) {
      Message({
        message: Error(error.message.toString()).msg,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      const status = res.status
      switch (status) {
        case 404:
          Message({
            message: Error(res.data.error ? res.data.error : res.statusText).msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 400:
        case 500:
          Message({
            message: Error(res.data.error ? res.data.error : res.data).msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 403:
          Message({
            message: Error(res.data.error ? res.data.error : res.data).msg,
            type: 'error',
            duration: 5 * 1000
          })
          router.push({ path: '/401' })
          break
        case 401:
          MessageBox.confirm(Error(res.data.error).msg, '系统提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
          ).then(() => {
            store.dispatch('LogOut').then(() => {
              location.reload()
            })
          })
          break
        default:
          Message({
            message: Error(error).msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
      }
    }
    return Promise.reject(error)
  }
)
export default service
