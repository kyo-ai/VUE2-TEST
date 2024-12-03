import service from '@/utils/request.js'

export function getUserInfo(params) {
  return service({
    url: `/user`,
    method: 'GET',
  })
}
export function userLogin(params) {
  return service({
    url: `/login`,
    method: 'POST',
  })
}