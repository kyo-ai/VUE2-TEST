import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
