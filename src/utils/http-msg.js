import { Message, MessageBox } from 'element-ui'

export function msgError (message) {
  Message({
    message: message,
    type: 'error',
    duration: 3 * 1000
  })
}

//token失效用例
export function tokenInvalid () {
  MessageBox.confirm('登录状态失效，请重新登录', '系统提示', {
    confirmButtonText: '重新登录',
    cancelButtonText: '取消',
    type: 'warning'
  }
  ).then(() => {
    localStorage.removeItem('mock-token')
    window.location.href = '登录页面的URL'
  }).catch(() => {})
}