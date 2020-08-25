<template>
  <div class="login-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="firstinput"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="请输入新密码"
      />
      <van-field
        v-model="secondinput"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="请输入验证码"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="login-tips">
      <div class="left">
        <van-icon name="checked" :class="konwn?'l-ico active':'l-ico'" @click="konwn=!konwn"/>
        <span @click="needKnow">会员须知</span>
      </div>
      <div class="right">
        忘记密码？
      </div>
    </div>
  </div>
</template>

<script>
let vm;
export default {
  data() {
    return {
      username: '',
      password: '',
      code:'',
      konwn:false
    };
  },
  methods: {
    needKnow(){
      this.$router.push({
        path:'/needToKnow'
      })
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  },
  created() {
    vm = this;
  }
};
</script>
<style lang="scss" scoped>
.login-container{
  min-height:100vh;
  width:r(750);
  background: #fff;
  padding-top:r(80);
  font-size: r(32);
  .company{
    height:r(164);
    margin:0 auto;
    display: block;
    margin-bottom:r(100);
  }
  .receive-code-img{
    width:r(223);
    height: r(62);
  }
  .login-tips{
    height:r(40);
    padding:r(0) r(48);
    line-height: r(40);
    overflow: hidden;
    .left{
      float: left;
      color:#999;
      .l-ico{
        display: inline-block;
        vertical-align: middle;
        width:r(34);
        margin-right: r(12);
      }
      .l-ico.active{
        color: #1574F6;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        font-size: r(28);
      }
    }
    .right{
      float: right;
      color: #0079FE;
    }
  }
}
</style>