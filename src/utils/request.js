import axios from 'axios'
import { Message } from 'view-design';

axios.defaults.baseURL = 'https://serverms.xin88.top'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
  baseURL: 'https://serverms.xin88.top',
  timeout: 5000,
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log(config,"aaaaaa")
    return config
  },
  error => {
    return Promise.error(error)
  })
// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      //const { data } = response
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    let { message } = error
    if (message.includes('Network Error')) {
      message = '网络错误'
    } else if (message.includes('timeout')) {
      message = '请求超时'
    } else {
      message = '系统错误'
    }
    Message.error({
      background: true,
      content: message
    })
    return Promise.reject(error)
  }
)
export default service
