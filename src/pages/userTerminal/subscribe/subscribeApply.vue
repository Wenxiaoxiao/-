<template>
  <div class="subscribeApply-page">
    <div class="top-head">
      <img src="@static/images/teacher_icon.png" class="left-img" />
      <div class="right-des">
        <div class="name">张老师</div>
        <div class="txt">荣誉证书/资质证明</div>
        <div class="txt">服务类型：100/小时；180/两小时</div>
      </div>
    </div>
    <div class="applydetail">
      <div class="all-reply-title">
        <div class="design-title">
          <i></i>
          <span>预约时间</span>
        </div>
        <div class="design-date-picker">
          <van-cell :value="date" @click="show = true" is-link arrow-direction="up" />
          <van-calendar v-model="show" @confirm="onConfirm" />
        </div>
      </div>
      <div class="applytimelist">
        <div
          v-for="(item,i) in ableTime"
          :key="i"
          :class="!item.can?'unable':item.chosed?'chosed':''"
        >{{item.time}}</div>
      </div>
      <div class="login-tips">
        <div class="left">
          <van-icon name="checked" :class="know?'l-ico active':'l-ico'" @click="know=!know" />
          <span @click="needKnow">咨询须知</span>
        </div>
        <div class="right">忘记密码？</div>
      </div>
    </div>
    <div class="fixed-blank"></div>
    <div class="fixed-bottom-btn">
      <div class="left-price">
        <div class="lp-1">
          <span>¥</span>2650.00
        </div>
        <div class="lp-2">单价：XX/小时，共计XX小时</div>
      </div>
      <div class="right-paybtn" @click="showModal=true">支付并预约</div>
    </div>
    <van-overlay :show="showModal">
      <div class="pay-style-chosed">
        <div class="content">
          <div class="c-top">
            <div class="ct-1">请选择支付方式</div>
            <div :class="payType==0?'ct-2 active':'ct-2'" @click="payType=0">
              微信支付(¥ 2650.00)
              <span>
                <van-icon name="checked" v-if="payType==0" />
                <van-icon name="circle" v-else />
              </span>
            </div>
            <div :class="payType==1?'ct-3 active':'ct-3'" @click="payType=1">
              积分支付(共2345积分)
              <span>
                <van-icon name="checked" v-if="payType==1" />
                <van-icon name="circle" v-else />
              </span>
            </div>
            <div class="ct-4">*抵扣后还需微信支付￥2000.00元</div>
            <div class="ct-5" @click="applySure">确认</div>
          </div>
          <div class="c-bottom">
            <van-icon name="clear" @click="showModal=false" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "subscribeApply",
  components: {},
  data() {
    return {
      payType: 0, //0微信 1积分
      showModal: false,
      know: false,
      date: null,
      show: false,
      ableTime: [
        { time: "09:00-10:00", can: true, chosed: true },
        { time: "10:00-11:00", can: true },
        { time: "11:00-12:00", can: true },
        { time: "12:00-13:00", can: true },
        { time: "13:00-14:00", can: false }
      ]
    };
  },
  mounted() {
    let now = new Date();
    this.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  },
  methods: {
    applySure() {
      this.$router.push({
        path: "/subSuccess"
      });
    },
    needKnow() {
      this.$router.push({
        path: "/needToKnow"
      });
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  }
};
</script>
<style lang="scss" scoped>
.subscribeApply-page {
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
  .applydetail {
    padding-top: r(30);
    .all-reply-title {
      position: relative;
      .design-date-picker {
        position: absolute;
        right: r(30);
        top: 0;
        .van-cell {
          border: r(1) solid #ebedf0;
          padding: r(16) r(26) r(15) r(26);
          border-radius: r(49);
          font-size: r(24);
          color: #333;
        }
        .van-cell::after {
          border: none;
        }
      }
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
    }
    .applytimelist {
      padding: r(30) r(20);
      overflow: hidden;
      & > div {
        width: 190px;
        height: 120px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
        border-radius: 24px;
        float: left;
        margin-right: r(30);
        margin-bottom: r(30);
        font-size: 28px;
        line-height: 40px;
        padding: r(20) r(49);
        &.unable {
          color: #fff;
          background: #d2d6df;
          box-shadow: 0px 4px 10px rgba(137, 143, 158, 0.35);
          text-decoration: line-through;
        }
        &.chosed {
          color: #fff;
          background: #1574f6;
          box-shadow: 0px 4px 10px rgba(21, 116, 246, 0.35);
        }
      }
      & > div:nth-child(3n) {
        margin-right: 0;
      }
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
  .fixed-blank {
    height: r(132);
    background: #fff;
  }
  .fixed-bottom-btn {
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
    width: r(750);
    height: r(132);
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    padding: r(22) r(30);
    .left-price {
      float: left;
      width: r(390);
      .lp-1 {
        font-size: 52px;
        color: #f61515;
        line-height: 61px;
        & > span {
          font-size: 32px;
        }
      }
      .lp-2 {
        font-size: 20px;
        line-height: 27px;
        color: #999999;
      }
    }
    .right-paybtn {
      width: r(276);
      height: r(88);
      float: right;
      background: #1574f6;
      box-shadow: 0px 4px 20px #1574f6;
      font-size: r(34);
      text-align: center;
      color: #fff;
      border-radius: 44px;
      line-height: 88px;
    }
  }
  .pay-style-chosed {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 670px;
      height: 788px;
      .c-top {
        width: 670px;
        height: 640px;
        background: #fff;
        border-radius: 20px;
        padding: r(56) r(30) r(48);
        .ct-1 {
          width: 238px;
          height: 48px;
          font-size: 34px;
          line-height: 48px;
          color: #333333;
        }
        .ct-2,
        .ct-3 {
          width: 610px;
          height: 106px;
          background: #ffffff;
          border: 2px solid #ebedf0CCC;
          opacity: 1;
          border-radius: r(50);
          margin-top: 40px;
          line-height: 106px;
          color: #666666;
          font-size: 28px;
          position: relative;
          padding-left: 91px;
          & > span {
            font-size: 44px;
            position: absolute;
            right: 30px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            top: 30px;
          }
          &.active {
            border: 2px solid #1574f6;
            & > span {
              color: #1574f6;
            }
          }
        }
        .ct-2 {
          background: url("../../../static/images/wechat.png") r(30) center
            no-repeat;
          background-size: 42px 37px;
        }
        .ct-3 {
          background: url("../../../static/images/jifen.png") r(30) center
            no-repeat;
          background-size: 37px 37px;
        }
        .ct-4 {
          height: 30px;
          font-size: 22px;
          line-height: 30px;
          color: #fb3e3e;
          margin-top: 16px;
        }
        .ct-5 {
          width: 610px;
          height: 88px;
          background: #1574f6;
          box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
          border-radius: 44px;
          font-size: 32px;
          text-align: center;
          color: #fff;
          line-height: 88px;
          margin-top: 62px;
        }
      }
      .c-bottom {
        font-size: 88px;
        margin-top: 60px;
        color: rgba(0, 0, 0, 0.6);
        text-align: center;
        .van-icon {
          color: #fff;
        }
      }
    }
  }
}
</style>