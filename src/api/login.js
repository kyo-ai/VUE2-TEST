import request from '@/utils/request'

export function login (params){
  return request({
    url: `/users/login`,
    method: 'POST',
    'Content-Type': 'application/x-www-form-urlencoded',
    data: params
  })
}