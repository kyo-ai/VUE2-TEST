import Mock from 'mockjs';
import user from './modules/user.js'
import login from './modules/login.js'
import computer from './modules/computer.js'

/* 初始示例 */
/* Mock.mock('/mock/list', { 
  'name': '列表', //随机生成姓名
  'age': 10
}); */

Mock.mock('/mock/user', 'get',user.userInfo);

Mock.mock('/mock/login', 'post',login.userLogin);

Mock.mock('/mock/computerList', 'get',computer.computerList);

Mock.mock('/mock/computerTable', 'get',computer.computerTable);
/* 
  vue组件中可直接使用以下原生写法获取数据
  this.$http.get('/mock/user').then((res)=>{
  console.log(res,"AAAA")
}) 
*/