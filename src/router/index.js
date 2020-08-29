import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/userTerminal/index.vue';
import HomeDetail from '../pages/userTerminal/indexDetail.vue';
import replyDetail from '../pages/userTerminal/replyDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/userLogin',
    name: 'userLogin',
    component: () => import('../pages/login.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/userIndex',
    name:'userIndex',
    component:Index,
    meta:{
      title:'首页',
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
    component: () => import('../pages/userTerminal/subscribe/subscribe.vue'),
    meta: {
      title: '预约',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/subscribeDetail',
    name:'subscribeDetail',
    component:()=>import('../pages/userTerminal/subscribe/subscribeDetail.vue'),
    meta:{
      title:'咨询师详情',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path:'/subscribeApply',
    name:'subscribeApply',
    component:()=>import('../pages/userTerminal/subscribe/subscribeApply.vue'),
    meta:{
      title:'预约申请',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path:'/subSuccess',
    name:'subSuccess',
    component:()=>import('../pages/userTerminal/subscribe/subSuccess.vue'),
    meta:{
      title:'预约成功',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path:'/subYourInfo',
    name:'subYourInfo',
    component:()=>import('../pages/userTerminal/subscribe/subYourInfo.vue'),
    meta:{
      title:'就诊信息',
      keepAlive: true,
      isBack: false
    }
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
  {
    path: '/personInfo',
    name: 'PersonInfo',
    component: () => import('../pages/userTerminal/mine/personInfo.vue'),
    meta: {
      title: '个人资料',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/personRecord',
    name: 'PersonRecord',
    component: () => import('../pages/userTerminal/mine/personRecord.vue'),
    meta: {
      title: '个人档案',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/reportAndAnswer',
    name: 'ReportAndAnswer',
    component: () => import('../pages/userTerminal/mine/reportAndAnswer.vue'),
    meta: {
      title: '就诊问答及报告',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/answerDetail',
    name: 'AnswerDetail',
    component: () => import('../pages/userTerminal/mine/answerDetail.vue'),
    meta: {
      title: '诊前问答',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../pages/userTerminal/service/service.vue'),
    meta: {
      title: '服务',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import('../pages/userTerminal/knowledge/knowledge.vue'),
    meta: {
      title: '知识',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: () => import('../pages/userTerminal/exercise/exercise.vue'),
    meta: {
      title: '实操',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../pages/userTerminal/mine/setting.vue'),
    meta: {
      title: '设置',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/subscribeList',
    name: 'SubscribeList',
    component: () => import('../pages/userTerminal/mine/subscribeList.vue'),
    meta: {
      title: '预约记录',
      keepAlive: true,
      isBack: false
    }
  },
  //咨询师端
  {
    path: '/Login',
    name: 'Login1',
    component: () => import('../pages/login1.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('../pages/consultTerminal/index.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/home',
    name:'home',
    component: () => import('../pages/consultTerminal/mine/mine.vue'),
    meta: {
      title: '我的',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/consultDetail',
    name:'consultDetail',
    component: () => import('../pages/consultTerminal/indexDetail.vue'),
    meta: {
      title: '客户详情',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path:'/suggestion',
    name:'suggestion',
    component: () => import('../pages/consultTerminal/mine/suggestion.vue'),
    meta: {
      title: '意见反馈',
      keepAlive: true,
      isBack: false
    },
  }
]

const router = new VueRouter({
  //mode:'history',
  routes
})

export default router
