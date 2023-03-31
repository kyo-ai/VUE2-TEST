import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue';
import { Message } from 'view-design';
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/user-login/login.vue"),
  },
  {
    path: '/user-auth-index',
    name: 'UserAuthIndex',
    component: () => import("@/views/user-auth/index.vue"),
    redirect: '/user-auth-index/first-quarter',
    children:[
      {
        path: 'first-quarter',
        name: 'FirstQuarter',
        component: () => import("@/views/user-auth/quarter/First.vue"),
      },
      {
        path: 'second-quarter',
        name: 'SecondQuarter',
        component: () => import("@/views/user-auth/quarter/Second.vue"),
      },
      {
        path: 'third-quarter',
        name: 'ThirdQuarter',
        component: () => import("@/views/user-auth/quarter/Third.vue"),
      },
      {
        path: 'fourth-quarter',
        name: 'FourthQuarter',
        component: () => import("@/views/user-auth/quarter/Fourth.vue"),
      },
    ]
  },
];

export const superAdminRoute = [
  {
    path: '/super-admin-index',
    name: 'SuperAdminIndex',
    component: () => import("@/views/user-type/super-admin/index.vue"),
  },
]

export const adminRoute = [
  {
    path: '/admin-index',
    name: 'AdminIndex',
    component: () => import("@/views/user-type/admin/index.vue")
  },
]

export const visitorRoute = [
  {
    path: '/visitor-index',
    name: 'VisitorIndex',
    component: () => import("@/views/user-type/visitor/index.vue")
  },
]

const router = new Router({
  routes: routes
});

//路由全局的前置守卫，若为登录，则先跳转到登录页
router.beforeEach((to,from,next)=>{
  //使用to.name != Login 来避免回调地狱
  if(!(sessionStorage.getItem('router_token'))){
    if(to.name != 'Login'){
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
  } else {
    next()
    
  }
})
export default router
