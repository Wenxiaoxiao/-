<template>
  <div class="login-container">
    <img src="@static/images/company.png" class="company" />
    <!-- <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" type="tel" label="账号" placeholder="请输入手机号" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="请输入密码" />
      <van-field v-model="code" clearable name="code" label="验证码" placeholder="请输入验证码">
        <template #button>
          <img src="@static/images/code.png" class="receive-code-img" />
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block class="design-sub-btn" native-type="submit">登录</van-button>
      </div>
    </van-form>-->
    <div class="login-tips">
      <!-- <div class="left">
        <van-icon name="checked" :class="konwn?'l-ico active':'l-ico'" @click="konwn=!konwn" />
        <span @click="needKnow">会员须知</span>
      </div>-->
      <!-- <div class="right" @click="resetPassword">忘记密码？</div> -->
    </div>
    <!-- <van-divider :style="{ color: '#999999', borderColor: '#E5E5E5', padding: '0 50px' }">其他登陆方式</van-divider> -->
    <div class="wechat-login" @click="wechatLogin">
      <img src="@static/images/register.png" class="logo" />
      <div>微信号登陆</div>
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
    wechatLogin() {
      //判断是否登录状态
      if (sessionStorage.getItem("USER_INFO")) {
        this.$router.push({
          path: "/userIndex"
        });
        return;
      }
      var REDIRECT_URI = encodeURI("http://yygzh.majiangyun.cn/docs");
      var designUrl =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx56d31560b5085147&redirect_uri=" +
        REDIRECT_URI +
        "&response_type=code&scope=snsapi_userinfo&state=snsapi_userinfo#wechat_redirect";
      location.replace(designUrl);
    },
    needKnow() {
      this.$router.push({
        path: "/needToKnow"
      });
    },
    resetPassword() {
      this.$router.push({
        path: "/resetPassword"
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
      this.$router.push({
        path: "/userIndex"
      });
    }
  },
  created() {},
  mounted() {
    //判断用户是会员还是咨询师
    let type = this.$route.query.type;
    // if(type==1){
    //   this.$router.push({
    //     path:'/Login'
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
  .receive-code-img {
    width: r(223);
    height: r(62);
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
  .wechat-login {
    width: 140px;
    margin: 0 auto;
    text-align: center;
    color: #999999;
    font-size: 28px;
    .logo {
      width: 108px;
      margin-bottom: 53px;
      margin-top: 82px;
    }
  }
}
</style>