<template>
  <div class="index-detail">
    <div class="top-img">
      <img src="@static/images/1.png" />
    </div>
    <div class="top-tit">
      <div class="line-1">孩子厌学自闭，拒绝沟通怎么办？</div>
      <div class="line-2">
        <span class="publish-time">发布时间：2019-12-30</span>
        <span>作者：小棉袄</span>
      </div>
      <div class="line-3">
        <img src="@static/images/share.png" />
        <img src="@static/images/collect.png" />
      </div>
    </div>
    <div class="design-title">
      <i></i>
      <span>系统理论</span>
    </div>
    <div class="detailContent">
      <div class="main-content">
        我今年39岁，有个儿子，今年上初二，由于是独子，所以从小我和他爸比较疼爱他，他爸爸更是当宝贝样宠着，孩子是我们唯一的希望，我孩子小学的时候学还好，可是不知道为什么，我孩子上了初一以后，成绩大幅下滑，我找他们老师了解情况才知道，我孩子不爱学
        <img
          src="@static/images/detail.png"
        />
        习了，爱玩电脑了，经常在电脑上玩游戏，甚至还会跟些混混在一起抽烟，整天无所事事，即使在教室里也经常心不在焉，根本不想学习的事，做为家长看到孩子这样，真是心碎、心痛。
      </div>
      <div class="expand-bar" v-show="showExpandBar" @click="showExpandBar=false;">--展开内容--</div>
    </div>
    <div class="comment-list">
      <div class="comment-item" v-for="(item,i) in commentLists" :key="i">
        <img class="left" :src="item.icon" />
        <div class="right">
          <div class="d1">
            <div class="le">{{item.name}}</div>
            <div class="rig">{{item.time}}</div>
          </div>
          <div class="d2">
            <div class="des">{{item.des}}</div>
            <div class="right">
              <div class="ico">
                <img v-if="item.like" src="@static/images/like.png" />
                <img v-else src="@static/images/unlike.png" />
              </div>
              <div :class="item.like?'active likeNum':'likeNum'">{{item.likeNum}}</div>
            </div>
          </div>
          <div class="d3">
            <div class="d_i" v-for="(d,m) in item.reply" :key="m">{{d.name}}：{{d.des}}</div>
            <div class="moreReply" @click="goReplyDetail">共{{item.reply.length}}条回复></div>
          </div>
        </div>
      </div>
    </div>
    <reply-box></reply-box>
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
      inputText: null,
      showExpandBar: true,
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
  mounted() {},
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
.index-detail {
  width: r(750);
  height: 100vh;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  padding: r(0) r(30);
  .top-img {
    padding: r(30) 0;
    img {
      width: r(690);
    }
  }
  .top-tit {
    height: r(109);
    width: r(690);
    position: relative;
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
      & > span {
        display: block;
      }
    }
    .line-3 {
      width: r(108);
      font-size: 0;
      position: absolute;
      bottom: 0;
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
