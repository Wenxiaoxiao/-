<template>
  <div class="login-container">
    <img src="@static/images/company.png" class="company" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="账号" placeholder="请输入手机号" />
      <van-field v-model="code" clearable name="code" label="验证码" placeholder="请输入验证码">
        <template #button>
          <span class="receive-code-img" @click="getCode">获取验证码</span>
          <!-- <img src="@static/images/code.png" class="receive-code-img" /> -->
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block class="design-sub-btn" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="login-tips">
      <div class="left">
        <van-icon name="checked" :class="konwn?'l-ico active':'l-ico'" @click="konwn=!konwn" />
        <span @click="needKnow">咨询师须知</span>
      </div>
      <!-- <div class="right">忘记密码？</div> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      code: "",
      konwn: false,
      contentMap: {
        username: "账号",
        password: "密码",
        code: "验证码"
      }
    };
  },
  methods: {
    needKnow() {
      this.$router.push({
        path: "/needToKnow1"
      });
    },
    getCode() {
      let that = this;
      let params = {
        mobile: this.username
      };
      this.$ajaxList.sendCode(params, function(res) {
        //提示验证码已发送
        Toast("验证码已发送！");
      });
    },
    onSubmit(values) {
      console.log("submit", values);
      let that = this;
      for (let m in values) {
        if (values[m] == "") {
          let rel = that.contentMap[m] + "未填写！";
          return Toast(rel);
        }
      }
      //登录
      let params = {
        mobile: this.username,
        auth_code: this.code
      };
      this.$ajaxList.doLogin(params, function(res) {
        let DOCTOR_INFO = JSON.stringify(res);
        sessionStorage.setItem("DOCTOR_INFO", DOCTOR_INFO);
        that.$router.push({
          path: "/Index"
        });
      });
    }
  },
  created() {},
  mounted() {
    //判断用户是会员还是咨询师
    let type = this.$route.query.type;
    // if(type!=1){
    //   this.$router.push({
    //     path:'/userLogin'
    //   })
    // }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  min-height: 100vh;
  width: r(750);
  background: #fff;
  padding-top: r(80);
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
    margin: 0 auto;
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
        font-size: r(34);
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