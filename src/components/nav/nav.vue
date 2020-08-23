<template>
  <div>
    <div class="nav-blank"></div>
    <div class="nav-box">
      <router-link to="/" :class="[{'nav-li-active':nav==0},'nav-li']">
        <!-- <img v-if="nav==0" src="../../static/images/tapBar/0-1.png" alt />
        <img v-else src="../../static/images/tapBar/0-0.png" alt /> -->
        <span>首页</span>
      </router-link>
      <router-link to="/personal" :class="[{'nav-li-active':nav==1},'nav-li']">
        <!-- <img v-if="nav==1" src="../../static/images/tapBar/1-1.png" alt />
        <img v-else src="../../static/images/tapBar/1-0.png" alt /> -->
        <span>预约</span>
      </router-link>
      <router-link to="/personal" :class="[{'nav-li-active':nav==1},'nav-li']">
        <!-- <img v-if="nav==1" src="../../static/images/tapBar/1-1.png" alt />
        <img v-else src="../../static/images/tapBar/1-0.png" alt /> -->
        <span>服务</span>
      </router-link>
      <router-link to="/personal" :class="[{'nav-li-active':nav==1},'nav-li']">
        <!-- <img v-if="nav==1" src="../../static/images/tapBar/1-1.png" alt />
        <img v-else src="../../static/images/tapBar/1-0.png" alt /> -->
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      default: 0
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-blank {
  width: 100%;
  height: 100px;
}
.nav-box {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 750px;
  height: 100px;
  z-index:1000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  .nav-li {
    display: inline-block;
    width: 50%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    padding-top: 2px;
    > img {
      width: 42px;
      margin-bottom: 3px;
    }
    > span {
      font-size: 30px;
      line-height: 40px;
    }
  }
  .nav-li-active {
    color: $baseColor;
  }
}
</style>
