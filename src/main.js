import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from '@/api/common' //ajax请求
import http from '@/api/http.js' //ajax请求
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import tools from '@/api/tools' //弹窗
import notice from '@/api/notice.js' //弹窗
import ajaxList from '@/api/ajaxList.js'
import title from 'vue-wechat-title' //标题更新
import filter from '@/api/filter.js' //公共过滤器
import VueLazyload from 'vue-lazyload' //图片懒加载
import noDate from '@/components/noDate'
import mixin from '@/api/mixin'
import BaiduMap from 'vue-baidu-map'

Vue.mixin(mixin)
// weixin.hideWxBtns()
Vue.component('noDate', noDate)
Vue.config.productionTip = false
console.log("API_CONFIG.LOCAL==" + API_CONFIG.LOCAL);
init();

function init() {
  Vue.use(BaiduMap, {
    ak: 'lDU5YGNQdf54zsqeO8V4uM2FciTc8uo4'
  })
  Vue.use(config)
  Vue.use(http.request)
  Vue.use(tools)
  Vue.use(Vant);
  Vue.use(notice)
  Vue.use(filter)
  Vue.use(title)
  // Vue.use(weixin)
  let options = {
    fullscreenEl: false
  };

  Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
  })

  Vue.directive('title', {
    inserted: function (el, binding) {
      document.title = binding.value;
    },
    update: function (el, binding) {
      document.title = binding.value;
    }
  });
  // 将API方法绑定到全局
  Vue.prototype.$config = config;
  Vue.prototype.$http = http.request;
  Vue.prototype.$ajaxList = ajaxList;
  Vue.prototype.$tools = tools;
  Vue.prototype.$notice = notice;
  // Vue.prototype.$weixin = weixin;

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

  Vue.use(VueLazyload, {
    preLoad: 1.5,
    error: require('./static/images/reload.gif'),
    loading: require('./static/images/timg.gif')
  })
  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
}