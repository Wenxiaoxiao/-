<template>
  <div class="memberCenter">
    <div class="content">
      <div class="top">
        <div>终身制会员</div>
        <div>{{vipPolicy.money}}元终身享用</div>
        <div class="card">
          <img src="@static/images/mineLogo.png" alt />
          <div class="dsc">
            <div>我的会员</div>
            <div v-if="is_vip">您已经是会员了！</div>
            <div v-else>您还不是会员，立即开通会员</div>
          </div>
        </div>
      </div>
      <div class="content-text">
        <common-title color="#FFDC3D">会员权益</common-title>
        <p v-html="vipPolicy.policy"></p>
      </div>
    </div>
    <div class="btn-container" v-if="!is_vip">
      <van-button round block color="#262932" @click="showModal=true;">确认并开通</van-button>
    </div>
    <div class="message-modal" v-show="showModal">
      <div class="modal-bg"></div>
      <div class="modal-content">
        <van-form @submit="onSubmit">
          <van-field v-model="username" name="username" label="账号" placeholder="请输入手机号" />
          <van-field v-model="code" clearable name="code" label="验证码" placeholder="请输入验证码">
            <template #button>
              <span class="receive-code-img" @click="getCode">获取验证码</span>
            </template>
          </van-field>
          <div style="margin: 16px;">
            <van-button round block class="design-sub-btn" native-type="submit">确认开通</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "memberCenter",
  components: {
    "common-title": () => import("@/components/common-title")
  },
  data() {
    return {
      showModal: false,
      is_vip: 0,
      vipPolicy: {
        money: null,
        policy: null
      },
      username: "",
      password: "",
      code: "",
      konwn: false,
      contentMap: {
        username: "手机号",
        password: "密码",
        code: "验证码"
      }
    };
  },
  mounted() {
    let that = this;
    this.$ajaxList.vipPolicy(function(res) {
      that.vipPolicy = res;
    });
    this.getUserInfo();
  },
  methods: {
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
      //走开通会员的逻辑
      //获取支付参数
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        mobile: this.username,
        auth_code: this.code
      };
      this.$ajaxList.payVip(params, function(res) {
        that.showModal = false;
        //调用微信支付
        that.onBridgeReady(res);
      });
    },
    onBridgeReady(res) {
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: res.appId, //公众号名称，由商户传入
          timeStamp: res.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: res.nonceStr, //随机串
          package: res.package,
          signType: res.signType, //微信签名方式：
          paySign: res.paySign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            Toast("支付成功！");
            that.$router.push({
              path: "/mine"
            });
          }
        }
      );
    },
    //判断是否是会员
    getUserInfo() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token
      };
      this.$ajaxList.userInfo(params, function(res) {
        that.is_vip = res.is_vip;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.memberCenter {
  min-height: 100vh;
  .content {
    height: calc(100vh - 150px);
  }
  .content-text {
    padding: 120px 39px 0;
    p {
      text-align: justify;
      font-size: 28px;
      line-height: 48px;
      color: #333;
    }
  }
  .btn-container {
    padding: 0 28px;
  }
  .top {
    position: relative;
    height: 331px;
    border-bottom: 11px solid #eee;
    background: #262932;
    & > div {
      text-align: center;
      color: #ffdc3d;
      &:first-child {
        font-size: 42px;
        font-weight: 400;
      }
      &:nth-child(2) {
        font-size: 48px;
      }
    }
    .card {
      display: flex;
      padding: 30px;
      border-radius: 16px;
      background: #fff;
      width: calc(100% - 62px);
      left: 50%;
      transform: translateX(-50%);
      color: #333;
      img {
        height: 120px;
        width: 120px;
        margin-right: 20px;
      }
      position: absolute;
      bottom: -80px;
      .dsc {
        padding-top: 6px;
        text-align: left;
        & > div:first-child {
          height: 45px;
          font-size: 32px;
          font-weight: bold;
          line-height: 45px;
        }
        & > div:last-child {
          height: 40px;
          font-size: 28px;
          font-weight: 400;
          line-height: 40px;
          margin-top: 8px;
        }
      }
    }
  }
  .message-modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    .modal-bg {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      width: r(690);
      background: #fff;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      padding: r(30);
      border-radius: r(10);
      .design-sub-btn {
        width: 100%;
        height: 88px;
        background: #1574f6;
        box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
        border-radius: 44px;
        color: #fff;
        font-size: 32px;
        margin: 0 auto;
      }
    }
  }
}
</style>