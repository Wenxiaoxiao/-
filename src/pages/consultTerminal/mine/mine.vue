<template>
  <div class="mine">
    <div class="top">
      <a href="javascript:;" @click="navTo('personInfo')">设置</a>
      <div class="user">
        <img src="@static/images/mineLogo.png" alt="">
        <div class="user-name">Ellison</div>
        <div class="user-title">#世界大得不可以去拥抱#</div>
        <div @click="navTo('memberCenter')" class="user-type">普通用户</div>
      </div>
    </div>
    <div class="center">
      <ul class="center-nav">
        <li><div class="left-icon"><img src="@static/images/tapBar/1-1.png" alt=""></div><div @click="navTo('personRecord')" class="dsc">个人档案</div></li>
        <li><div class="left-icon"><img src="@static/images/tapBar/1-1.png" alt=""></div><div @click="navTo('integral')" class="dsc"><span>我的积分</span><span class="right-content">积分明细</span></div></li>
        <li><div class="left-icon"><img src="@static/images/tapBar/1-1.png" alt=""></div><div @click="navTo('memberCenter')" class="dsc">预约记录</div></li>
        <li><div class="left-icon"><img src="@static/images/tapBar/1-1.png" alt=""></div><div @click="navTo('reportAndAnswer')" class="dsc">诊前问答及报告</div></li>
      </ul>
    </div>
    <div class="bottom">
      <div class="bottom-title">
        我的发表
      </div>
      <div class="bottom-nav">
        <ul>
          <li>
            <img src="@static/images/tapBar/1-1.png" alt="">
            <div class="dsc">游戏练习</div>
          </li>
          <li>
            <img src="@static/images/tapBar/1-1.png" alt="">
            <div class="dsc">我的故事</div>
          </li>
          <li>
            <img src="@static/images/tapBar/1-1.png" alt="">
            <div class="dsc">咨询问题</div>
          </li>
        </ul>
      </div>
    </div>
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
      memberCenter() {
        this.$router.push({
          path: '/memberCenter'
        })
      },
      navTo(type) {
        // this.$router.push({
        //   path: `/${type}`
        // })
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
      &>a{
        font-size: 26px;
        height: 37px;
        line-height: 37px;
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 0 4px;
        color: #fff;
      }
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
          margin-top: 24px;
          height: 52px;
          line-height: 52px;
          font-size: 24px;
          padding: 0 14px 0 50px;
          background: #fff;
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
    .bottom{
      color: #333;
      .bottom-title{
        font-size:32px;
        height:45px;
        font-weight:400;
        line-height:45px;
        padding-left: 60px;
      }
      .bottom-nav{
        padding: 46px 0;
        ul{
          display: flex;
          justify-content: space-between;
          padding: 0 69px;
          li{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
              height: 60px;
            }
            .dsc{
              height:40px;
              font-size:28px;
              font-weight:400;
              line-height:40px;
              margin-top: 24px;
            }
          }
        }
      }
    }
  }

</style>