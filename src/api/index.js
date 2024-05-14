import service from '@/utils/request.js'

export function getUserInfo(params) {
  return service({
    url: `/user`,
    method: 'GET',
  })
}