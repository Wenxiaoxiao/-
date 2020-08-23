import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: '严选产品',
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
  mode: 'history',
  routes
})

export default router
