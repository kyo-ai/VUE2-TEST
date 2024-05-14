import axios from 'axios'

export const baseURL =  '/mock'
const access_token = "test-token"
//c创建一个axios实例
const service = axios.create({
    timeout: 5000,
    withCredentials: true,//是否允许跨域
    baseURL : baseURL,
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
})

//封装请求拦截器
service.interceptors.request.use((config)=> {
  console.log("发送请求前的")
  return config
}, (error)=> {
  // 对请求错误做些什么
  return Promise.reject(error)
})

//封装响应拦截器
service.interceptors.response.use((res) =>{
  return res.data
},  (error)=> {
  // 对响应错误做点什么

  return Promise.reject(error)
})

export default service
