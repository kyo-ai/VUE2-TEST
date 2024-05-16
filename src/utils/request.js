import axios from 'axios'
import { msgError } from './http-msg';
const BASE_URL =  '/mock'
const TOKEN = localStorage.getItem('mock-token')
//c创建一个axios实例
const service = axios.create({
    timeout: 5000,
    withCredentials: true,//是否允许跨域
    baseURL : BASE_URL,
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
})

//封装请求拦截器
service.interceptors.request.use((config)=> {
  return config
}, (error)=> {
  // 对请求错误做些什么
  return Promise.reject(error)
})

//封装响应拦截器
service.interceptors.response.use((res) =>{
  if( res.status === 200 ){
    if( res.data.code === 200 ){
      return res.data;
    } else {
      msgError('系统出错，请稍后再试')
    }
  } else {
    return Promise.reject(res)
  } 
},  (error)=> {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
