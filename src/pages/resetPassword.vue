<template>
  <div class="reset-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="firstinput"
        type="password"
        name="firstinput"
        label="新密码"
        placeholder="请输入新密码"
      />
      <van-field
        v-model="secondinput"
        type="password"
        name="secondinput"
        label="确认密码"
        placeholder="请输入密码"
      />
      <div>
        <van-button round block class="design-sub-btn" native-type="submit">确认修改</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      firstinput: "",
      secondinput: "",
      contentMap: {
        firstinput: "请输入密码",
        secondinput: "请再次输入密码"
      }
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      let that = this;
      for (let m in values) {
        if (values[m] == "") {
          let rel = that.contentMap[m];
          return Toast(rel);
        }
      }
      this.$router.push({
        path: "/resetSuccess"
      });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.reset-container {
  min-height: 100vh;
  width: r(750);
  background: #fff;
  font-size: r(32);
  .van-form {
    .van-cell {
      height: r(98);
    }
  }
  .company {
    height: r(164);
    margin: 0 auto;
    display: block;
    margin-bottom: r(100);
  }
  .receive-code-img {
    width: r(223);
    height: r(62);
  }
  .design-sub-btn {
    width: 654px;
    height: 88px;
    background: #1574f6;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    border-radius: 44px;
    color: #fff;
    font-size: 32px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .login-tips {
    height: r(40);
    padding: r(0) r(48);
    line-height: r(40);
    overflow: hidden;
    .left {
      float: left;
      color: #999;
      .l-ico {
        display: inline-block;
        vertical-align: middle;
        width: r(34);
        margin-right: r(12);
      }
      .l-ico.active {
        color: #1574f6;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        font-size: r(28);
      }
    }
    .right {
      float: right;
      color: #0079fe;
    }
  }
}
</style>