<template>
  <div class="service-detail">
    <div class="top-tit">
      <div class="line-1">{{detailObj.title}}</div>
      <div class="line-tags">
        <span>失眠</span>
        <span>心理</span>
        <span>神经</span>
      </div>
      <div class="line-2">发布时间：{{detailObj.createtime}}</div>
      <div class="line-3">
        <img src="@static/images/share.png" />
        <img src="@static/images/collect.png" />
      </div>
    </div>
    <div class="detailContent">
      <div class="main-content">
        <img :src="detailObj.image" />
        <div v-html="detailObj.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import replyBox from "@/components/replyBox.vue";
export default {
  components: {
    "reply-box": replyBox
  },
  data() {
    return {
      detailObj: {
        content: null,
        createtime: null,
        image: null,
        title: null
      },
      inputText: null,
      commentLists: [
        {
          icon: require("@static/images/logo.png"),
          name: "学员孙丽",
          time: "2020-04-24",
          des: "深有感受深有感受深有感受深有感受深有感受深有感受.......",
          like: true,
          likeNum: 28,
          reply: [
            {
              name: "张三",
              des: "喜欢这么坦率的你"
            },
            {
              name: "李四",
              des: "喜欢这么坦率的你"
            }
          ]
        },
        {
          icon: require("@static/images/logo.png"),
          name: "学员憨憨",
          time: "2020-04-24",
          des: "我太难了.......",
          like: false,
          likeNum: 18,
          reply: [
            {
              name: "张三",
              des: "喜欢这么坦率的你"
            },
            {
              name: "李四",
              des: "喜欢这么坦率的你"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    let params = {
      id: this.$route.query.id
    };
    this.$ajaxList.serDetail(params, res => {
      this.detailObj = res;
    });
  },
  methods: {
    goReplyDetail() {
      this.$router.push({
        path: "/replyDetail"
      });
    },
    tabChange() {}
  }
};
</script>

<style lang="scss">
.service-detail {
  width: r(750);
  height: 100vh;
  background: #fff;
  overflow-y: auto;
  padding: r(0) r(30);
  padding-top: 40px;
  .top-tit {
    height: r(204);
    width: r(690);
    position: relative;
    border-bottom: r(1) solid #ccc;
    .line-1 {
      height: r(52);
      line-height: r(53);
      font-size: r(38);
      color: #333333;
    }
    .line-2 {
      height: r(33);
      line-height: r(33);
      font-size: r(24);
      color: #999999;
    }
    .line-tags {
      height: 40px;
      line-height: 40px;
      margin-top: 12px;
      margin-bottom: 24px;
      & > span {
        display: inline-block;
        width: r(100);
        border-radius: r(21);
        height: r(40);
        line-height: r(40);
        text-align: center;
        margin-right: r(20);
      }
      & > span:nth-child(3) {
        background: rgba(251, 62, 62, 0.1);
        color: #fb3e3e;
      }
      & > span:nth-child(2) {
        color: #4bd5ab;
        background: rgba(75, 213, 171, 0.1);
      }
      & > span:nth-child(1) {
        color: #ffdc3d;
        background: rgba(255, 220, 61, 0.1);
      }
    }
    .line-3 {
      width: r(108);
      font-size: 0;
      position: absolute;
      bottom: 41px;
      right: 0;
      & > img {
        display: inline-block;
        height: r(35);
        margin-right: r(30);
      }
      & > img:nth-last-child(1) {
        margin: 0;
      }
    }
  }
  .design-title {
    height: r(81);
    line-height: r(81);
    font-size: 0;
    border-bottom: r(1) solid #ebedf0;
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
  .detailContent {
    position: relative;
    .main-content {
      padding: r(24) r(0) r(80);
      font-size: r(28);
      line-height: r(42);
      color: #333;
      img {
        width: r(690);
        margin: r(32) 0;
      }
    }
    .expand-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: r(690);
      height: r(200);
      line-height: r(200);
      text-align: center;
      font-size: r(28);
      color: #999;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 1) 50%
      );
    }
  }
  .comment-list {
    .comment-item {
      overflow: hidden;
      margin-bottom: r(40);
      .left {
        width: r(64);
        margin-right: r(20);
        float: left;
      }
      .right {
        width: r(606);
        float: left;
        .d1 {
          height: r(28);
          font-size: r(20);
          line-height: r(28);
          color: #999;
          overflow: hidden;
          .le {
            float: left;
          }
          .rig {
            float: right;
          }
        }
        .d2 {
          min-height: r(33);
          overflow: hidden;
          font-size: r(28);
          color: #333;
          line-height: r(33);
          margin: r(8) r(0) r(20);
          .des {
            width: r(504);
            float: left;
          }
          .right {
            float: right;
            width: 92px;
            font-size: 0;
            .ico {
              width: r(32);
              height: r(30);
              display: inline-block;
              vertical-align: middle;
              img {
                width: r(32);
              }
            }
            .likeNum {
              width: 60px;
              font-size: 28px;
              display: inline-block;
              vertical-align: middle;
              padding-left: 10px;
              color: #999999;
              &.active {
                color: #1574f6;
              }
            }
          }
        }
        .d3 {
          width: r(606);
          padding: r(20);
          border-radius: r(10);
          background: #f5f5f5;
          .d_i {
            height: r(33);
            font-size: r(24);
            color: #666;
            line-height: r(33);
          }
          .moreReply {
            font-size: r(24);
            line-height: r(33);
            color: #1574f6;
          }
        }
      }
    }
  }
}
</style>
