// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@/mock/index.js'

/* if (process.env.NODE_ENV === 'development') {
  require('./mock/index.js')
} */

Vue.use(ViewUI);

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* 此函数在环境为开发环境时打印log日志，其他环境不打印日志，在main.js中引入调用 */
/* export function rewirteLog() {
  console.log = (function (log) {
    return process.env.NODE_ENV == 'development'? log : function() {}
  }(console.log))
} */

/* 
  以下表示在开发 sit rc环境下打印console
  function rewirteLog() {
  console.log = (function (log) {
    return (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'sit' || process.env.NODE_ENV == 'rc') ? log : function() {}
  }(console.log))
} */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
