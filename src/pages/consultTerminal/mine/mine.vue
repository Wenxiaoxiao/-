<template>
  <div class="mine">
    <div class="top">
      <div class="user">
        <img src="@static/images/mineLogo.png" alt="">
        <div class="user-name">Ellison</div>
        <div class="user-title">#世界大得不可以去拥抱#</div>
        <div @click="navTo('memberCenter')" class="user-type">咨询师</div>
      </div>
    </div>
    <div class="center">
      <ul class="center-nav">
        <li><div class="left-icon"><img src="@static/images/consult/timeset.png" alt=""></div><div class="dsc">出诊时间设置</div></li>
        <li><div class="left-icon"><img src="@static/images/consult/publish.png" alt=""></div><div @click="navTo('mypublish')" class="dsc">我的发表</div></li>
        <li><div class="left-icon"><img src="@static/images/consult/feedback.png" alt=""></div><div @click="navTo('suggestion')" class="dsc">意见反馈</div></li>
      </ul>
    </div>
    <div class="exit-btn">退出登录</div>
    <app-nav nav="1"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav1.vue";
  export default {
    name: 'mine',
    components: {
      "app-nav": nav
    },
    data() {
      return {
      }
    },
    methods: {
      navTo(type) {
        this.$router.push({
          path: `/${type}`
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .mine{
    min-height: 100vh;
    background: #fff;
    .top{
      position: relative;
      width:750px;
      height:410px;
      background:linear-gradient(180deg,rgba(64,145,255,1) 0%,rgba(0,97,229,1) 100%);
      opacity:1;
      display: flex;
      justify-content: center;
      padding-top: 45px;
      .user{
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>img{
          height: 134px;
          width: 134px;
        }
        .user-name{
          height:50px;
          font-size:42px;
          font-weight:bold;
          line-height:50px;
          margin-top: 14px;
        }
        .user-title{
          height:33px;
          font-size:24px;
          font-weight:400;
          line-height:33px;
          margin-top: 8px;
        }
        .user-type{
          background-image: url('../../../static/images/consult/consultant.png');
          background-repeat: no-repeat;
          background-size:r(23) r(27);
          background-position: 20px center;
          margin-top: 24px;
          height: 52px;
          line-height: 52px;
          font-size: 24px;
          padding: 0 14px 0 50px;
          background-color: #fff;
          border-radius: 25px;
          color: #1574F6;
        }
      }
    }
    .center{
      padding: 50px 60px;
      .center-nav{
        border-radius: 10px;
        box-shadow: 0 0 3px #ddd;
        padding-right: 30px;
        li{
          height: 101px;
          display: flex;
          align-items: center;
          .left-icon{
            width: 105px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height: 50px;
            }
          }
          .dsc{
            flex: 1;
            display: flex;
            justify-content: space-between;
            font-size: 32px;
            color: #333;
            height: 100%;
            line-height: 101px;
            .right-content{
              margin-right: 34px;
              font-size: 24px;
              color: #999;
            }
          }
          &:not(:last-child){
            .dsc{
              border-bottom: 1px solid #E7E7E7;
            }
          }
        }
      }
    }
    .exit-btn{
      width: 630px;
      height: 88px;
      background: #1574F6;
      box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
      border-radius: 44px;
      color: #fff;
      font-size: 32px;
      line-height: 88px;
      text-align: center;
      margin: 0 auto;
      margin-top:280px;

    }
  }

</style>