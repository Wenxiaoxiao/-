<template>
  <div class="subSuccess-page">
    <div class="res-ico">
      <van-icon name="success" />
    </div>
    <div class="txt1">密码修改成功</div>
    <div class="fixed-blank"></div>
    <div class="fixed-bottom-btns">
      <div class="fbs-1" @click="backLogin">返回登录页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subSuccess",
  components: {},
  data() {
    return {};
  },
  methods: {
    backLogin() {
      this.$router.push({
        path: "/userLogin"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.subSuccess-page {
  min-height: 100vh;
  background: #fff;
  padding-top: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  .res-ico {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(21, 116, 246, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    .van-icon {
      font-size: 140px;
      color: #1574f6;
    }
  }
  .txt1 {
    height: 53px;
    font-size: 38px;
    font-weight: 400;
    line-height: 53px;
    color: #333333;
    margin-bottom: 24px;
  }
  .txt2 {
    text-align: center;
    width: 560px;
    height: 80px;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    color: #999999;
  }
  .fixed-blank {
    height: r(300);
    width: 100%;
  }
  .fixed-bottom-btns {
    width: r(690);
    height: r(300);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    & > div {
      width: 690px;
      height: 88px;
      text-align: center;
      line-height: 88px;
      font-size: 32px;
      border-radius: 44px;
    }
    .fbs-1 {
      color: #fff;
      background: #1574f6;
      box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    }
    .fbs-2 {
      margin-top: 40px;
      color: #999;
      background: #e5e5e5;
      box-shadow: 0px 4px 20px rgba(156, 148, 148, 0.35);
    }
  }
}
</style>