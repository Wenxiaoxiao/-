<template>
  <div class="mypublish-page">
    <van-tabs class="lists-tabs" animated @click="tabChange" :ellipsis="false">
      <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
        <div class="publish-list">
          <div v-for="(item,i) in tmpList" :key="i" class="publish-item" @click="goDetail(item.id)">
            <div class="left">
              <div class="tit">{{item.title}}</div>
              <div class="tags">
                <span v-for="(dot,i) in item.tags" :key="i">{{dot}}</span>
              </div>
              <div class="time">{{item.createtime}}</div>
            </div>
            <div class="right">
              <img :src="item.thumb_images" />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-button class="publish-btn" icon="plus" type="info" round @click="publishArticle">发表文章</van-button>
  </div>
</template>

<script>
import list from "@/components/serviceList.vue";
export default {
  name: "mypublish",
  components: {
    "app-list": list
  },
  data() {
    return {
      tabs: [],
      tmpList: [],
      cate_id: null
    };
  },
  mounted() {
    this.getDoctorCate();
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/publishDetail",
        query: { id: id }
      });
      this.$route.meta.title = this.detailPage;
    },
    // 咨询师文章栏目
    getDoctorCate() {
      let that = this;
      this.$ajaxList.doctorCate(null, function(res) {
        that.tabs = res;
        that.getArticleList(res[0].id);
        that.cate_id = res[0].id;
      });
    },
    //获取文章列表
    getArticleList(cate_id) {
      let that = this;
      let params = {
        cate_id: cate_id,
        p: 1,
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };
      this.$ajaxList.articleListDoctor(params, function(res) {
        that.tmpList = res;
      });
    },
    tabChange(e) {
      this.getArticleList(this.tabs[e].id);
      this.cate_id = this.tabs[e].id;
    },
    publishArticle() {
      this.$router.push({
        path: "/publishArticle",
        query: { cate_id: this.cate_id }
      });
    }
  }
};
</script>
<style lang="scss">
.mypublish-page {
  min-height: 100vh;
  background: #fff;
  .publish-btn {
    // width: 220px;
    height: 88px;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
  }
  .van-tabs__wrap {
    // box-shadow: 0 10px 5px #eee;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  .van-tab__text {
    font-weight: bold;
  }
  .van-tab--active {
    color: #1574f6;
  }
  .van-tabs__line {
    background: #1574f6;
    border-radius: r(2);
    width: 80px !important;
  }
  .publish-list {
    padding: 0 r(30);
    width: r(750);
    .publish-item {
      padding: r(41) r(0) r(39);
      overflow: hidden;
      border-bottom: r(1) solid #ebedf0;
      .left {
        width: 420px;
        float: left;
        .tit {
          height: 80px;
          font-size: r(28);
          line-height: r(40);
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .time {
          font-size: r(20);
          color: #999;
          line-height: r(28);
          text-align: left;
          margin-top: 8px;
        }
        .tags {
          height: r(72);
          padding: r(16) 0;
          & > span {
            display: inline-block;
            width: r(100);
            border-radius: r(21);
            height: r(40);
            line-height: r(40);
            text-align: center;
            margin-right: r(20);
          }
          & > span:nth-child(1) {
            background: rgba(21, 116, 246, 0.1);
            color: #1574f6;
          }
          & > span:nth-child(2) {
            color: #4bd5ab;
            background: rgba(75, 213, 171, 0.1);
          }
          & > span:nth-child(3) {
            color: #ffdc3d;
            background: rgba(255, 220, 61, 0.1);
          }
        }
      }
      .right {
        float: right;
        width: 250px;
        height: 150px;
        & > img {
          width: 250px;
          height: 150px;
        }
      }
    }
    .publish-item:nth-last-child(1) {
      border: none;
    }
  }
}
</style>