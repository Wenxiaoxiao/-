<template>
  <div class="subscribeDetail-page">
    <div class="top-head">
      <img src="@static/images/teacher_icon.png" class="left-img" />
      <div class="right-des">
        <div class="name">张老师</div>
        <div class="txt">荣誉证书/资质证明</div>
        <div class="txt">服务类型：100/小时；180/两小时</div>
      </div>
    </div>
    <div class="teacherDes">
      青少年抑郁、焦虑等等情绪障碍，青少年儿童多动、注意力不集中、厌学、辍学等等的心理咨询，中高考心理疏导及减压，亲子关系咨询，成人情绪管理 人际沟通 婚恋情感 心灵成长 等等心理健康知识的教育和普及。
      <img
        src="@static/images/detail.png"
      />
    </div>
    <div class="reserveBtn" @click="goApply">预约</div>
  </div>
</template>

<script>
export default {
  name: "subscribeDetail",
  components: {},
  data() {
    return {};
  },
  methods: {
    goApply() {
      this.$router.push({
        path: "/subscribeApply"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.subscribeDetail-page {
  width: r(750);
  height: 100vh;
  background: #fff;
  padding: r(0) r(30);
  .top-head {
    height: r(237);
    padding: r(40) 0;
    border-bottom: r(1) solid #ebedf0;
    font-size: 0;
    .left-img {
      width: r(156);
      height: r(156);
      margin-right: r(30);
      vertical-align: middle;
    }
    .right-des {
      width: r(504);
      display: inline-block;
      vertical-align: middle;
      .name {
        height: r(42);
        font-size: r(28);
        line-height: r(42);
        color: #333;
        font-weight: bold;
        margin-bottom: r(8);
      }
      .txt {
        font-size: r(24);
        height: r(33);
        line-height: r(33);
        color: #666;
      }
    }
  }
  .teacherDes {
    padding-top: r(24);
    color: #333;
    font-size: r(28);
    line-height: r(42);
    img {
      width: r(690);
      margin: r(32) 0;
    }
  }
  .reserveBtn {
    width: r(690);
    height: r(88);
    line-height: r(88);
    color: #fff;
    font-size: r(32);
    text-align: center;
    background: #1574f6;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    border-radius: r(44);
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: r(40);
  }
}
</style>