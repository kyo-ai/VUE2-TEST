import service from '@/utils/request.js'

export function getComputerList() {
  return service({
    url: `/computerList`,
    method: 'GET',
  })
}

export function getComputerTable() {
  return service({
    url: `/computerTable`,
    method: 'GET',
  })
}