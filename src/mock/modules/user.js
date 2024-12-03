/**
 * 
 * @param {*}
 * @returns 
 */
function userInfo(res) {
  return {
    code: 200,
    data: {
      userName: '13888888888',
      phoneNumber: '13888888888',
      userAddress: '浙江省杭州市西湖区XX街道XXX小区一单元XXXX室',
      birthday: '1912-02-28'
    }
  }
}
export default { userInfo }