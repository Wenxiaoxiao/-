import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/userTerminal/index.vue';
import HomeDetail from '../pages/userTerminal/indexDetail.vue';
import Login from '../pages/login.vue';
import replyDetail from '../pages/userTerminal/replyDetail.vue';

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
    path:'/login',
    name:'Login',
    component:Login,
    meta:{
      title:'登陆',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/HomeDetail',
    name: 'HomeDetail',
    component: HomeDetail,
    meta: {
      title: '详情',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/replyDetail',
    name:'replyDetail',
    component:replyDetail,
    meta:{
      title:'回复详情',
      keepAlive:true,
      isBack:false
    }
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
    path: '/needToKnow',
    name: 'NeedToKnow',
    component: () => import('../pages/needToKnow.vue'),
    meta: {
      title: '会员须知',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../pages/userTerminal/mine/mine.vue'),
    meta: {
      title: '我的',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/memberCenter',
    name: 'MemberCenter',
    component: () => import('../pages/userTerminal/mine/memberCenter.vue'),
    meta: {
      title: '个人中心',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/integral',
    name: 'Integral',
    component: () => import('../pages/userTerminal/mine/integral.vue'),
    meta: {
      title: '积分明细',
      keepAlive: true,
      isBack: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
