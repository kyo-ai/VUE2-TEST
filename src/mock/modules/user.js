function userInfo(res) {
  return {
    code: 200,
    data: {
      'phoneNumber': '13888888888',
    }
  }
}
/**
 * 
 * @param {*} res 
 * @returns 
 */
function userAdress(res){
  return {
    code: 200,
    data: {
      'adress': '中国大陆',
    }
  }
}
export default { userInfo ,userAdress }