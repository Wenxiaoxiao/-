<template>
  <div class="work-time-page">
    <div class="design-title">
      <i></i>
      <span>出诊周期</span>
    </div>
    <van-cell title="每周三，周六，周日" is-link to="workCycle" />
    <div class="design-title">
      <i></i>
      <span>出诊时间段</span>
    </div>
    <van-cell title="共计六小时出诊时间" is-link to="workPeroid" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cycle: [3, 6, 7],
      times: 6
    };
  }
};
</script>
<style lang="scss" scoped>
.work-time-page {
  min-height: 100vh;
  background: #fff;
  padding: 0 r(30);
  .design-title {
    height: r(81);
    line-height: r(81);
    font-size: 0;
    & > span {
      display: inline-block;
      font-size: r(32);
      color: #333;
      vertical-align: middle;
    }
    & > i {
      display: inline-block;
      width: r(4);
      height: r(34);
      background: #1574f6;
      border-radius: r(4);
      vertical-align: middle;
      margin-right: r(16);
    }
  }
  .van-cell {
    padding-left: 0px;
    padding-right: 0px;
    .van-cell__title {
      font-size: 32px;
      color: #666;
    }
  }
  .van-cell:last-child::after {
    left: 0px;
    right: 0px;
    display: block !important;
  }
}
</style>