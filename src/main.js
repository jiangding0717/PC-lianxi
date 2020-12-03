import Vue from 'vue'

import App from './App'
//引入路由组件
import router from './router'
//引入公共的css样式
import './style/reset.css'
Vue.config.productionTip = false
new Vue({
  router, //使用路由组件
  render: h => h(App)
}).$mount('#app')