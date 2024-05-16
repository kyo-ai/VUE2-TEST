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
    redirect: '/layouts/main-contentA',
    children:[
      {
        path:'main-contentA',
        name:'ContentA',
        component: ()=>import("@/views/layouts/modules/main-content/contentA.vue"),
      },
      {
        path:'main-contentB',
        name:'ContentB',
        component: ()=>import("@/views/layouts/modules/main-content/contentB.vue"),
      },
      {
        path:'main-contentC',
        name:'ContentC',
        component: ()=>import("@/views/layouts/modules/main-content/contentC.vue"),
      },
    ]
  },

]
export default new Router({
  mode: 'history',
  base: 'mock',
  routes: routes
})
