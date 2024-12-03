import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:"/login",
    component: ()=>import("@/views/index.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import("@/views/login/Login.vue")
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: ()=>import("@/views/layouts/index.vue"),
    redirect: '/layouts/content-a',
    children:[
      {
        path:'content-a',
        name:'ContentA',
        component: ()=>import("@/views/contents/module-a/ContentA.vue"),
      },
      {
        path:'detail-A/:id',
        name:'DetailA',
        component: ()=>import("@/views/contents/module-a/Detail.vue"),
      },

      {
        path:'content-b',
        name:'ContentB',
        component: ()=>import("@/views/contents/module-b/ContentB.vue"),
      },

      {
        path:'content-c',
        name:'ContentC',
        component: ()=>import("@/views/contents/module-c/ContentC.vue"),
      },
    ]
  },

  /* 个人信息 */
  {
    path:'/person-info',
    name:'PersonInfo',
    component: ()=>import("@/views/user/PersonInfo.vue"),
  },

]
export default new Router({
  mode: 'history',
  base: 'mock',
  routes: routes
})
