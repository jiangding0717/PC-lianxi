import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

//重写push 和replace方法
//目的是为了让编程式导航不报错
Vue.use(VueRouter)
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => { });
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => { });
};

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isFooterHide: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: 'search', //命名路由
      path: '/search/:searchText?',
      component: Search,
    }
  ]
})