import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/userTerminal/index.vue';
import HomeDetail from '../pages/userTerminal/indexDetail.vue';
import replyDetail from '../pages/userTerminal/replyDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userLogin',
    component: () => import('../pages/index.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      isBack: false
    },
  },
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
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('../pages/resetPassword.vue'),
    meta: {
      title: '重设密码',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/resetSuccess',
    name: 'resetSuccess',
    component: () => import('../pages/resetSuccess.vue'),
    meta: {
      title: '重置密码',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/userIndex',
    name: 'userIndex',
    component: Index,
    meta: {
      title: '首页',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/seeMoreList',
    name: 'seeMoreList',
    component: () => import('../pages/userTerminal/seeMoreList.vue'),
    meta: {
      title: '查看更多',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/conceptDetail',
    name: 'conceptDetail',
    component: () => import('../pages/userTerminal/conceptDetail.vue'),
    meta: {
      title: '理念详情',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/storyDetail',
    name: 'storyDetail',
    component: () => import('../pages/userTerminal/storyDetail.vue'),
    meta: {
      title: '会员故事',
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
    path: '/replyDetail',
    name: 'replyDetail',
    component: replyDetail,
    meta: {
      title: '回复详情',
      keepAlive: true,
      isBack: false
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
    path: '/subscribeDetail',
    name: 'subscribeDetail',
    component: () => import('../pages/userTerminal/subscribe/subscribeDetail.vue'),
    meta: {
      title: '咨询师详情',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/subscribeApply',
    name: 'subscribeApply',
    component: () => import('../pages/userTerminal/subscribe/subscribeApply.vue'),
    meta: {
      title: '预约申请',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/subSuccess',
    name: 'subSuccess',
    component: () => import('../pages/userTerminal/subscribe/subSuccess.vue'),
    meta: {
      title: '预约成功',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/subYourInfo',
    name: 'subYourInfo',
    component: () => import('../pages/userTerminal/subscribe/subYourInfo.vue'),
    meta: {
      title: '就诊信息',
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
    path: '/needToKnow1',
    name: 'NeedToKnow1',
    component: () => import('../pages/needToKnow1.vue'),
    meta: {
      title: '咨询师须知',
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
    path: '/serviceDetail',
    name: 'serviceDetail',
    component: () => import('../pages/userTerminal/serviceDetail.vue'),
    meta: {
      title: '实操详情',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/yourProblem',
    name: 'yourProblem',
    component: () => import('../pages/userTerminal/exercise/yourProblem.vue'),
    meta: {
      title: '上传问题',
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
    path: '/home',
    name: 'home',
    component: () => import('../pages/consultTerminal/mine/mine.vue'),
    meta: {
      title: '我的',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/consultDetail',
    name: 'consultDetail',
    component: () => import('../pages/consultTerminal/indexDetail.vue'),
    meta: {
      title: '客户详情',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/suggestion',
    name: 'suggestion',
    component: () => import('../pages/consultTerminal/mine/suggestion.vue'),
    meta: {
      title: '意见反馈',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/suggestsuccess',
    name: 'suggestsuccess',
    component: () => import('../pages/consultTerminal/mine/suggestsuccess.vue'),
    meta: {
      title: '意见反馈',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/mypublish',
    name: 'mypublish',
    component: () => import('../pages/consultTerminal/mine/mypublish.vue'),
    meta: {
      title: '我的发表',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/publishDetail',
    name: 'publishDetail',
    component: () => import('../pages/consultTerminal/mine/publishDetail.vue'),
    meta: {
      title: '内容详情',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/publishArticle',
    name: 'publishArticle',
    component: () => import('../pages/consultTerminal/mine/publishArticle.vue'),
    meta: {
      title: '发表新锐观点',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/workTime',
    name: 'workTime',
    component: () => import('../pages/consultTerminal/mine/workTime.vue'),
    meta: {
      title: '出诊时间设置',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/workCycle',
    name: 'workCycle',
    component: () => import('../pages/consultTerminal/mine/workCycle.vue'),
    meta: {
      title: '出诊周期',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/workPeroid',
    name: 'workPeroid',
    component: () => import('../pages/consultTerminal/mine/workPeroid.vue'),
    meta: {
      title: '出诊时间段',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/reportDetail',
    name: 'ReportDetail',
    component: () => import('../pages/userTerminal/mine/reportDetail.vue'),
    meta: {
      title: '报告',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/myStory',
    name: 'MyStory',
    component: () => import('../pages/userTerminal/mine/myStory.vue'),
    meta: {
      title: '我的故事',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/publishStory',
    name: 'publishStory',
    component: () => import('../pages/userTerminal/mine/publishStory.vue'),
    meta: {
      title: '发表故事',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../pages/userTerminal/mine/questions.vue'),
    meta: {
      title: '咨询问题',
      keepAlive: true,
      isBack: false
    },
  },
  {
    path: '/personalInfo',
    name: 'personalInfo',
    component: () => import('../pages/consultTerminal/mine/personalInfo.vue'),
    meta: {
      title: '个人资料',
      keepAlive: true,
      isBack: false
    },
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router