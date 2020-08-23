import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/userTerminal/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: '首页',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: () => import('../pages/userTerminal/subscribe.vue'),
    meta: {
      title: '预约',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
    meta: {
      title: '微信授权',
    },
  },
  {
    path: '/userLogin',
    name: 'userLogin',
    component: () => import('../pages/userLogin.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router = new VueRouter({
  routes
})

export default router
