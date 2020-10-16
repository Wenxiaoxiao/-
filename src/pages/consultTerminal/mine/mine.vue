<template>
  <div class="mine">
    <div class="top">
      <div class="user">
        <img :src="avatar" alt />
        <div class="user-name">{{nickname}}</div>
        <div class="user-title">#{{signature}}#</div>
        <div @click="navTo('personalInfo')" class="user-type">咨询师</div>
      </div>
    </div>
    <div class="center">
      <ul class="center-nav">
        <li>
          <div class="left-icon">
            <img src="@static/images/consult/timeset.png" alt />
          </div>
          <div @click="navTo('workTime')" class="dsc">出诊时间设置</div>
          <van-icon name="arrow" class="arrow-right-ico" />
        </li>
        <li>
          <div class="left-icon">
            <img src="@static/images/consult/publish.png" alt />
          </div>
          <div @click="navTo('mypublish')" class="dsc">我的发表</div>
          <van-icon name="arrow" class="arrow-right-ico" />
        </li>
        <li>
          <div class="left-icon">
            <img src="@static/images/consult/feedback.png" alt />
          </div>
          <div @click="navTo('suggestion')" class="dsc">意见反馈</div>
          <van-icon name="arrow" class="arrow-right-ico" />
        </li>
      </ul>
    </div>
    <div class="exit-btn" @click="exitBtn">退出登录</div>
    <app-nav nav="1"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav1.vue";
export default {
  name: "mine",
  components: {
    "app-nav": nav
  },
  data() {
    return {
      avatar: null,
      nickname: null,
      intro_text: null,
      signature: null
    };
  },
  mounted() {
    //获取个人信息
    let that = this;
    let params = {
      token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
    };
    this.$ajaxList.doctorInfo(params, function(res) {
      that.avatar = res.avatar;
      that.intro_text = res.intro_text;
      that.nickname = res.nickname;
      that.signature = res.signature;
    });
  },
  methods: {
    navTo(type) {
      this.$router.push({
        path: `/${type}`
      });
    },
    exitBtn() {
      this.$router.push({
        path: "/Login"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  min-height: 100vh;
  background: #fff;
  .top {
    position: relative;
    width: 750px;
    height: 410px;
    background: linear-gradient(
      180deg,
      rgba(64, 145, 255, 1) 0%,
      rgba(0, 97, 229, 1) 100%
    );
    opacity: 1;
    display: flex;
    justify-content: center;
    padding-top: 45px;
    .user {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        height: 134px;
        width: 134px;
        border-radius: 50%;
      }
      .user-name {
        height: 50px;
        font-size: 42px;
        font-weight: bold;
        line-height: 50px;
        margin-top: 14px;
      }
      .user-title {
        height: 33px;
        font-size: 24px;
        font-weight: 400;
        line-height: 33px;
        margin-top: 8px;
      }
      .user-type {
        background-image: url("../../../static/images/consult/consultant.png");
        background-repeat: no-repeat;
        background-size: r(23) r(27);
        background-position: 20px center;
        margin-top: 24px;
        height: 52px;
        line-height: 52px;
        font-size: 24px;
        padding: 0 14px 0 50px;
        background-color: #fff;
        border-radius: 25px;
        color: #1574f6;
      }
    }
  }
  .center {
    padding: 50px 60px;
    .center-nav {
      border-radius: 10px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
      padding-right: 30px;
      li {
        height: 101px;
        display: flex;
        align-items: center;
        position: relative;
        .arrow-right-ico {
          position: absolute;
          right: 0;
          color: #aeaeae;
          font-size: 32px;
        }
        .left-icon {
          width: 105px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 50px;
          }
        }
        .dsc {
          flex: 1;
          display: flex;
          justify-content: space-between;
          font-size: r(28);
          color: #333;
          height: 100%;
          line-height: 101px;
          .right-content {
            margin-right: 34px;
            font-size: 24px;
            color: #999;
          }
        }
        &:not(:last-child) {
          .dsc {
            border-bottom: 1px solid #e7e7e7;
          }
        }
      }
    }
  }
  .exit-btn {
    width: 630px;
    height: 88px;
    background: #1574f6;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    border-radius: 44px;
    color: #fff;
    font-size: 32px;
    line-height: 88px;
    text-align: center;
    margin: 0 auto;
    margin-top: 280px;
  }
}
</style>