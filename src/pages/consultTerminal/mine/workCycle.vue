<template>
  <div class="cycle-time-page">
    <div class="cycle-list">
      <div v-for="(item,i) in cycle" :key="i" @click="item.chosed=!item.chosed">
        {{item.name}}
        <van-icon name="success" class="sucess-ico" v-show="item.chosed" />
      </div>
    </div>
    <div class="sub-btn" @click="submit">保存</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cycle: [
        { name: "每周日", chosed: true },
        { name: "每周一", chosed: false },
        { name: "每周二", chosed: false },
        { name: "每周三", chosed: false },
        { name: "每周四", chosed: false },
        { name: "每周五", chosed: false },
        { name: "每周六", chosed: false }
      ]
    };
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/workTime"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cycle-time-page {
  min-height: 100vh;
  background: #fafafa;
  padding-top: 68px;
  .cycle-list {
    padding: 0 r(30);
    background: #fff;
    & > div {
      height: 91px;
      line-height: 91px;
      color: #333;
      font-size: 34px;
      border-bottom: r(1) solid #ebedf0;
      position: relative;
      & > .sucess-ico {
        color: #1574f6;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    & > div:nth-last-child(1) {
      border: 0px;
    }
  }
  .sub-btn {
    width: 690px;
    height: 88px;
    background: #1574f6;
    border-radius: 44px;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    color: #fff;
    font-size: 32px;
    line-height: 88px;
    text-align: center;
    margin: 0 auto;
    margin-top: 300px;
  }
}
</style>