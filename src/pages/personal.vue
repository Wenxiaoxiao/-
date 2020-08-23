<template>
  <div class="container">
    <div class="top">
      <div class="top-user">
        <div v-if="hasAuthorization">
          <img :src="userInfo.ico" alt class="top-img" />
          <div class="flex_column">
            <span class="top-name">{{userInfo.nick}}</span>
            <span v-if="hasLogin">{{userInfo.mobile}}</span>
            <span v-else @click="$router.push({name:'userLogin'})">去登录</span>
          </div>
        </div>
        <div v-else>
          <img src="@static/images/person-center-03.jpg" alt class="top-img" />
          <span @click="$router.push({name:'userLogin'})">去登录</span>
        </div>
      </div>
      <div class="top-list">
        <div class="top-li">
          <img
            src="@static/images/personal/top-0.png"
            alt
            class="top-li-img"
            @click="goUrl('/personal/enterpriseOrder')"
          />
          <div class="top-li-name">企业订单</div>
        </div>
        <div class="top-li">
          <!-- <img
            src="@static/images/personal/top-1.png"
            alt
            class="top-li-img"
            @click="goUrl('/personal/corPolicy')"
          /> -->
          <div class="top-li-name">企业保单</div>
        </div>
        <div class="top-li">
          <!-- <img
            src="@static/images/personal/top-2.png"
            alt
            class="top-li-img"
            @click="goUrl('/personal/mysettlement')"
          /> -->
          <div class="top-li-name">我的理赔</div>
        </div>
        <div class="top-li">
          <!-- <img
            src="@static/images/personal/top-3.png"
            alt
            class="top-li-img"
            @click="goUrl('/personal/chosepolicy')"
          /> -->
          <div class="top-li-name">我的保全</div>
        </div>
      </div>
    </div>
    <div class="center-list">
      <van-cell-group>
        <van-cell title="我的企业" is-link to="/personal/comanyManage" />
        <van-cell title="服务承诺" is-link to="/serviceCommitment" />
        <van-cell title="企业定制" is-link  to="/enterpriseCustomize"  />
        <van-cell title="关于我们" is-link to="/about"  />
      </van-cell-group>
    </div>
    <div class="bottom">
      <a href="tel://400-9955-788">
        <!-- <img src="@static/images/personal/rexian.png" alt class="kfrx" /> -->
      </a>
      <div class="bottom-lis">
        <div class="bottom-li">
          <!-- <img src="@static/images/personal/bottom-1.png" alt class="bottom-li-img" /> -->
          <div class="bottom-li-name">双保险资质</div>
        </div>
        <div class="bottom-li">
          <!-- <img src="@static/images/personal/bottom-2.png" alt class="bottom-li-img" /> -->
          <div class="bottom-li-name">银保监会网销许可</div>
        </div>
          <div class="bottom-li">
          <!-- <img src="@static/images/personal/bottom-3.png" alt class="bottom-li-img" /> -->
          <div class="bottom-li-name">1V1专属服务</div>
        </div>
      </div>
    </div>
    <app-nav nav="1"></app-nav>
  </div>
</template>

<script>
let vm;
import nav from "@/components/nav/nav.vue";
import tools from '../api/tools'
tools.refreshPageInios()
export default {
  components: {
    "app-nav": nav
  },
  data() {
    return {
      name: "",
      hasAuthorization: "",
      hasLogin: false,
      userInfo: {}
    };
  },
  methods: {
    goUrl(url) {
      if (this.hasLogin) {
        this.$router.push({
          path: url
        });
      } else {
        this.$router.push({
          path: "/userLogin"
        });
      }
    }
  },
  created() {
    // title,desc,shareUrl,img
    
    this.hasAuthorization = localStorage.getItem("hasAuth") ? true : false;
    //const loadings = this.$notice.loading("加载中...");
    this.$tools.getUserInfo().then(res => {
      this.$notice.close(loadings);
      this.userInfo = res.data;
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      if (this.userInfo) {
        this.hasLogin = true;
      }
    });
  },
  mounted(){
     setTimeout(()=>{
          this.$weixin.showWxBtns()
     this.$weixin.share(
         '桐心企业保 —— 企业保险投保平台',
        '企业保险全站式服务平台，提供雇主责任险、企业团险、企业财产险、员工福利医疗险等。投保、变更、理赔全程服务。',
        // API_CONFIG.ROOT+ '/static/images/logo.png'
        //  'http://epf.wts9999.net/m/public/images/logo2.png'
      )
     },1000)
  }
};
</script>
<style lang="scss" scoped>
.top {
  position: relative;
  width: 100%;
  height: 258px;
  background: url("~@/static/images/personal/bac.jpg") no-repeat;
  background-size: cover;
  padding: 30px;
  margin-bottom: 130px;
  .top-user {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    font-size: 30px;
    .flex_column {
      display: flex;
      flex-direction: column;
    }
    > div {
      display: flex;
      align-items: center;
    }
  }
  .top-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 30px;
  }
  .top-name {
    font-size: 36px;
    color: #fff;
  }
  .top-list {
    position: absolute;
    top: 180px;
    left: 50%;
    width: 690px;
    margin-left: -345px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .top-li {
      width: 30%;
      padding: 30px 0 20px;
      .top-li-img {
        width: 70px;
        display: block;
        margin: 0 auto;
        margin-bottom: 5px;
      }
      .top-li-name {
        font-size: 32px;
        text-align: center;
      }
    }
  }
}
.center-list {
  margin-bottom: 30px;
  .van-cell-group {
    padding: 10px 0;
  }
  .van-cell {
    font-size: 32px;
  }
}
.bottom {
  background-color: #fff;
  padding: 40px 30px 30px;
  .kfrx {
    width: 464px;
    display: block;
    margin: 0 auto 30px;
  }
  .bottom-lis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .bottom-li {
      width: 50%;
      .bottom-li-img {
        width: 55px;
        display: block;
        margin: 0 auto;
        margin-bottom: 5px;
      }
      .bottom-li-name {
        font-size: 26px;
        text-align: center;
      }
    }
  }
}
</style>