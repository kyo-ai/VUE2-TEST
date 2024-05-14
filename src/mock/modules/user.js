function userInfo(res) {
  return {
    code: 200,
    data: {
      'name': '张三',
      'age': 10
    }
  }
}

function userAdress(res){
  return {
    code: 200,
    data: {
      'adress': '中国大陆',
    }
  }
}
export default { userInfo ,userAdress}