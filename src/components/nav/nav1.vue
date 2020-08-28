<template>
  <div>
    <div class="nav-blank"></div>
    <div class="nav-box">
      <router-link to="/Index" :class="[{'nav-li-active':nav==0},'nav-li']">
        <img v-if="nav==0" src="../../static/images/tapBar/1-1.png" alt />
        <img v-else src="../../static/images/tapBar/1.png" alt />
        <span>首页</span>
      </router-link>
      <router-link to="/home" :class="[{'nav-li-active':nav==1},'nav-li']">
        <img v-if="nav==1" src="../../static/images/tapBar/4-1.png" alt />
        <img v-else src="../../static/images/tapBar/4.png" alt />
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
  height:r(98);
}
.nav-box {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 750px;
  height:r(98);
  z-index:1000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px -4px 40px rgba(51, 51, 51, 0.12);
  .nav-li {
    display: inline-block;
    width: 50%;
    height:r(98);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    > img {
      width:r(96);
      height:r(68);
    }
    > span {
      font-size:r(20);
      line-height:r(28);
    }
  }
  .nav-li-active {
    color: $baseColor;
  }
}
</style>
