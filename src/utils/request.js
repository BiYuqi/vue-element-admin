import axios from 'axios'
import { Message } from 'element-ui'

// base setting
const service = axios.create({
  baseURL: 'https://easy-mock.com/mock/5aa881eb99ed355f274d0e93',
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=UTF-8'
  // config.headers['Authorization'] = localStorage.getItem('token')
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  /**
  * 这里可以做接口相关的拦截设置
  */
  const res = response.data
  if (res.code === 401) {
    console.log('账户登录失效')
    Message({
      message: res.message,
      type: 'error',
      duration: 6 * 1000
    })
  }
  return response
}, error => {
  console.log(error)
  Message({
    message: error.message,
    type: 'error',
    duration: 6 * 1000
  })
  return Promise.reject(error)
})

export default service
