import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue';
import { Message } from 'view-design';
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/user-login/login.vue")
  },
]
const router = new Router({
  routes: routes
});

//路由全局的前置守卫，若为登录，则先跳转到登录页
router.beforeEach((to,from,next)=>{
  //使用to.name != Login 来避免回调地狱
  if(!(localStorage.getItem('router_token')) && to.name != 'Login'){
    Message.error({
      background: true,
      content: '请先登录'
    })
    next({
      path:'/login'
    })
  } else {
    next()
  }
})
export default router
