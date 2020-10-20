<template>
  <div class="index">
    <div class="index-contains">
      <div class="top-header">
        <img src="@static/images/bg.png" />
      </div>
      <!-- <div class="top-nav">
        <div @click="goUrl('/knowledge')">
          <img src="@static/images/icon3.png" />
          <div>知识</div>
        </div>
        <div @click="goUrl('/exercise')">
          <img src="@static/images/icon2.png" />
          <div>实操</div>
        </div>
        <div @click="goUrl('/subscribe')">
          <img src="@static/images/icon1.png" />
          <div>咨询</div>
        </div>
      </div>-->
      <div class="top-nav">
        <div v-for="(item,m) in topCate" :key="m">
          <img :src="item.icon_image" />
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="sub-title" @click="goUrl('/conceptDetail')">#顺其自然、为所当为#</div>
      <van-tabs class="lists-tabs" animated @click="tabChange">
        <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
          <div v-show="index==0" class="see-more-btn">
            <span @click="goUrl('/seeMoreList')">查看更多 ></span>
          </div>
          <app-list :listData="tmpList" :detailPage="detailPageName"></app-list>
          <div class="xinde-wrapper" v-show="index==0">
            <div class="xinde">
              <div class="xinde-top">
                <div class="xinde-left">
                  <img src="@static/images/userico.png" />
                  <span>学员大锤</span>
                </div>
                <div class="xinde-right">2020-04-24</div>
              </div>
              <div class="xinde-tit">学员心得详情</div>
              <div class="xinde-detail">“如果你对周围的任何事物感到不舒服，那是你的感受所造成的的，并非事物本身如此，借着感受的调整.......</div>
              <div class="xinde-like">
                <img src="@static/images/comments.png" />
                <span style="margin-right:10px;">28</span>
                <img src="@static/images/unlike.png" />
                <span>52</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import list from "@/components/indexList.vue";
export default {
  components: {
    "app-nav": nav,
    "app-list": list
  },
  data() {
    return {
      topCate: [],
      detailPageName: "最新",
      tabs: [
        {
          name: "最新"
        },
        {
          name: "系统理念"
        },
        {
          name: "重置理念"
        },
        {
          name: "森田疗法实操"
        },
        {
          name: "现象分析"
        },
        {
          name: "学员故事"
        },
        {
          name: "家长须知"
        },
        {
          name: "公益活动"
        }
      ],
      tmpList: [
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果",
          tags: ["原因", "思维", "有效"],
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果1",
          tags: ["原因", "思维"],
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果1",
          tags: ["原因"],
          time: "2020-04-24"
        }
      ],
      location: location,
      list: [] //列表数据
    };
  },
  mounted() {
    let that = this;
    this.$ajaxList.topCate(function(res) {
      that.topCate = res;
    });
    // let USER_INFO = {
    //   id: 4,
    //   nickname: "老鼠还是兔子吖",
    //   avatar:
    //     "http://yygzh.majiangyun.cn/uploads/avatar/2020/10-16/63f8b851c9205cf550450f54ab39f3ca.jpeg",
    //   prevtime: 1603205684,
    //   status: 1,
    //   token: "cb95845adc839a8f7318e169613c6b4b"
    // };
    // sessionStorage.setItem("USER_INFO", JSON.stringify(USER_INFO));
    this.getArticleList();
  },
  methods: {
    //获取首页数据
    getArticleList() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        p: 1
      };
      this.$ajaxList.articleList(params, function(res) {
        that.tmpList = res;
      });
    },
    tabChange(val) {
      this.detailPageName = this.tabs[val].name;
    },
    goUrl(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<style lang="scss">
.index-contains {
  width: r(750);
  min-height: 100vh;
  background: #fff;
  .top-header {
    width: r(750);
    height: r(458);
    & > img {
      width: r(750);
    }
  }
  .top-nav {
    width: r(690);
    height: r(143);
    background: #fff;
    border-radius: r(16);
    box-shadow: r(0) r(0) r(10) rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: r(-95);
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: r(34) r(0) r(22);
    & > div {
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 0;
      img {
        width: r(64);
      }
      div {
        height: r(33);
        color: #666;
        font-size: r(24);
      }
    }
  }
  .sub-title {
    font-size: r(20);
    color: #333;
    text-align: center;
    line-height: r(60);
  }
  .lists-tabs {
    .see-more-btn {
      height: 60px;
      line-height: 60px;
      color: #999999;
      font-size: 24px;
      padding-right: 30px;
      & > span {
        float: right;
      }
    }
    .van-tab {
      height: r(88);
    }
    .van-tabs__line {
      background: linear-gradient(
        88deg,
        rgba(21, 116, 246, 1) 0%,
        rgba(21, 116, 246, 0.24) 100%
      );
      border-radius: r(2);
    }
  }
  .xinde-wrapper {
    width: r(750);
    padding: 30px;
  }
  .xinde {
    width: 690px;
    height: 260px;
    background: #f8f8f8;
    padding: 24px 30px;
    border-radius: 16px;
    &-top {
      height: 44px;
      font-size: 20px;
      color: #999999;
      overflow: hidden;
      & > .xinde-left {
        float: left;
        & > img {
          width: 44px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }
        & > span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      & > .xinde-right {
        float: right;
      }
    }
    &-tit {
      height: 40px;
      color: #333333;
      line-height: 40px;
      font-size: 28px;
      margin-top: 20px;
    }
    &-detail {
      font-size: 20px;
      line-height: 28px;
      color: #666666;
      margin-top: 16px;
    }
    &-like {
      text-align: right;
      margin-top: 20px;
      height: 30px;
      font-size: 20px;
      color: #999999;
      line-height: 30px;
      & > img {
        height: 30px;
        vertical-align: middle;
        margin-right: 8px;
      }
      & > span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
