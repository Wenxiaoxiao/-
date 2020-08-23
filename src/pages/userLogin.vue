<template>
  <div class="userTellLogin lz-bg-fff">
    <!-- 顶部logo -->
    <div class="lz-logo-box">
      <div class="img-c-fff">
         <img src="@/static/images/logo.png" alt="">
      </div>
      <p>桐心企业保</p>
    </div>
    <!-- 登录填写 -->
    <div class="input-container">
      <div class="userNum from-input">
        <img src="@/static/images/login/mobile.png" class="user-icon left" alt />
        <input
          type="number"
          v-model="mobile"
          onkeypress="return event.keyCode>=48&&event.keyCode<=57"
          class="intoTell inputVals"
          placeholder="请输入手机号"
        />
      </div>
      <div class="authCode from-input">
        <img src="@/static/images/login/password.png" class="user-icon left" alt />
        <input
          type="number"
          v-model="code"
          onkeypress="return event.keyCode>=48&&event.keyCode<=57"
          class="intocaptch inputVals"
          placeholder="请输入验证码"
        />
        <button
          @click="getCode"
          id="cendcaptch"
          class="fr getNum right"
          :class="isClick?'active':''"
        >{{codeVal}}</button>
      </div>
      <div class="code-info">
        收不到验证码？请拨打客服电话
        <a href="tel://400-9955-788">400-9955-788</a>
      </div>
      <a href="javascript:;" @click="submit" id="login" class="loginBtn">登录</a>
    </div>
  </div>
</template>
<script>
//当前实例组件
var that = null;
export default {
  data: () => ({
    mobile: "",
    code: "",
    isClick: false,
    //加载开关
    loaded: false,
    s: null,
    countDown: 0,
    initcountDown: 60,
    codeVal: "获取验证码",
    redUrl: ""
  }),

  mounted() {
    this.$weixin.hideWxBtns()
    that = this;
    this.loaded = true;
    that.redUrl =  sessionStorage.getItem('oldUrlName')
    console.log('获取oldUrl:')
    console.log(that.redUrl)
         
  },
  methods: {
    initCode() {
      that.countDown = that.initcountDown;
      that.isClick = false;
      that.codeVal = "获取验证码";
      clearInterval(that.s);
    },
    //获取验证码
    getCode: function() {
      if (that.isClick) {
        return;
      }
      var val = that.mobile;
      if (that.$tools.trim(val).length == 0) {
        return that.$notice.msg("请输入手机号");
      }

      if (!that.$regulars.isPhone(val)) {
        return that.$notice.msg("请输入正确的手机号");
      }
      //验证手机号是否注册
      //获取验证码的请求
      that
        .$http({
          type: "get",
          url: "/login/checkMobile",
          data: {
            mobile: that.mobile
          }
        })
        .then(data => {
          if (data.httpCode === 1) {
            //手机号验证通过  发送短信验证码
            that.countDown = that.initcountDown;
            that.codeVal = that.countDown + "S";
            that.isClick = true;
            that.s = setInterval(function() {
              if (that.countDown == 1) {
                that.initCode();
              } else {
                that.countDown--;
                that.codeVal = that.countDown + "S";
              }
            }, 1000);

            //获取验证码的请求
            that
              .$http({
                type: "get",
                url: "/login/code",
                data: {
                  mobile: that.mobile
                }
              })
              .then(data => {
                  if (data.httpCode === 1){
                     that.$notice.msg("已发送");
                  }
              });
          } else {
            that.$notice.msg(data.msg);
          }
        });
    },

    //提交的点击事件
    submit() {
      var phone = that.$tools.trim(that.mobile);
      var code = that.code;
      if (phone.length == 0) return that.$notice.msg("请输入手机号");
      if (!that.$regulars.isPhone(phone))
        return that.$notice.msg("请输入正确的手机号");
      var ajaxUrl = "/uc/login/api/h5phoneRegister";
      if (that.$tools.isWeiXin() || that.$tools.isAL()) {
        ajaxUrl = "/uc/login/phoneRegister";
      }

      if (that.code.length == 0) return that.$notice.msg("请输入验证码");
      //绑定手机号

      //加载动画
      var load = that.$notice.loading("正在绑定手机号...");
      that
        .$http({
          url: "/login/register",
          type:'post',
          data: {
            mobile:phone,
            code
          }
        })
        .then( res => {
          console.log('******')
          that.$notice.close(load);
          that.initCode();
          that.$notice.msg("验证成功");
          console.log('上个页面路由name:')
          console.log(that.redUrl)
          location.href = that.redUrl
        })
        .catch(err => {
          if(err.httpCode===10003){
            //用户注册过
             location.href = that.redUrl
          }
          that.$notice.close(load);
        });
    }
  }
};
</script>
<style lang="scss">
.userTellLogin {
  input::-webkit-input-placeholder {
        color: #bfbfbf;
       
  }
  min-height: 100vh;
  background: url("~@/static/images/login/login_bg.png") no-repeat center center;
  background-size: 100% 100%;
  .lz-logo-box {
    padding: 50px 0;
    .img-c-fff {
      background-color: #fff;
      width: 150px;
      height: 150px;
      margin: 0 auto;
      border-radius: 50%;
      padding: 10px;
      > img {
        width: 130px;
        height: 130px;
        display: block;
        margin: 0 auto;
      }
    }
    > p {
      padding-top: 15px;
      font-size: 40px;
      text-align: center;
      font-weight: 900;
      color: #fff;
    }
    #version {
      padding-top: (20);
      text-align: center;
      font-size: r(30);
    }
  }
  .input-container {
    padding: 56px 30px 0;
    margin:0 30px;
    background-color: #fff;
    min-height: 700px;
    border-radius: 5px;
    .from-input {
      height: 120px;
      color: #999;
      position: relative;
      font-size: 30px;
      .user-icon {
        position: absolute;
        width: 48px;
        top: 50%;
        transform: translateY(-50%);
      }
      .eye {
        color: #e50011;
        right: 10px;
      }
      > input {
        border: none;
        width: 100%;
        display: block;
        padding: 0 60px;
        margin: 0;
        line-height: 120px;
        height: 120px;
        font-size: 30px;
        border-bottom: 1px solid #dfdfdf;
      }
    }
    .authCode {
      > input {
        padding-right: 210px;
      }
      .getNum {
        position: absolute;
        font-size: 38px;
        color: #000;
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        font-size: 28px;
        width: 180px;
        height: 60px;
        line-height: 60px;
        color: $baseColor;
        text-align: center;
        border: 0;
        &.active {
          background-color: #999;
          color: #fff;
        }
      }
    }
    .extend-box {
      height: 100px;
      line-height: 100px;
      > a {
        color: #787878;
        font-size: 28px;
      }
    }
  }
  .loginBtn {
    color: #fff;
    display: block;
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 34px;
    margin-top: 90px;
    background-color: #4581f6;
    border-radius: 5px;
  }
  .code-info {
    font-size: 28px;
    color: #999;
    margin-top: 30px;
    text-align: center;
    a {
      color: #ff7e02;
      margin-left: 1px;
    }
  }
}
</style>
