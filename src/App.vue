<template>
  <div id="app" class="body-container">
    <keep-alive max="3">
    <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
require('./static/css/animate.min.css')
require('./static/iconfont/iconfont.css')
import Vconsole from 'vconsole'
export default {
  name: 'App',
  created(){
  },
  mounted() {
    const query=this.$router.query;
    if(this.$config.env == "0" || (query && query.console)){
      if(API_CONFIG.LOCAL=="true")return;
        const vConsole = new Vconsole();
    }
    
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
       document.body.scrollTop = 0
       document.documentElement.scrollTop = 0
    }
  },
}
</script>
<style lang="scss">
  @import '~@/sass/base/_reset.scss';
  @import '~@/sass/helper/_classes.scss';
  @import '~@/sass/helper/_spacing.scss';
  @import '~@/sass/helper/_common.scss';
  #app {
    width: 100%;
    max-width: 10rem;
    min-height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .full-page{
    height: 100vh;
    width: 100Vw;
    background: #fff;
    overflow: auto;
  }
</style>
