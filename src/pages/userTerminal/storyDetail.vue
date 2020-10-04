<template>
  <div class="story-detail">
    <div class="top-tit">
      <div class="line-1">{{detailObj.title}}</div>
      <div class="line-2">
        <div class="left">
          <img src="@static/images/userico.png" />
          <span>学员大锤</span>
        </div>
        <div class="right">发布时间：{{detailObj.createtime}}</div>
      </div>
    </div>
    <div class="detailContent">
      <div class="main-content">
        <img :src="detailObj.thumb_images" />
        <div v-html="detailObj.content"></div>
      </div>
      <div class="expand-bar" v-show="showExpandBar" @click="showExpandBar=false;">--展开内容--</div>
    </div>
    <div class="comment-list">
      <div class="comment-item" v-for="(item,i) in commentLists" :key="i">
        <img class="left" :src="item.avatar" />
        <div class="right">
          <div class="d1">
            <div class="le">{{item.nickname}}</div>
            <div class="rig">{{item.createtime}}</div>
          </div>
          <div class="d2">
            <div class="des">{{item.content}}</div>
            <div class="right">
              <div class="ico">
                <img v-if="item.like" src="@static/images/like.png" />
                <img v-else src="@static/images/unlike.png" />
              </div>
              <div :class="item.like?'active likeNum':'likeNum'">{{item.point_num}}</div>
            </div>
          </div>
          <div class="d3">
            <div class="d_i" v-for="(d,m) in item.child" :key="m">{{d.nickname}}：{{d.content}}</div>
            <div class="moreReply" @click="goReplyDetail(item.id)">共{{item.reply_num}}条回复></div>
          </div>
        </div>
      </div>
    </div>
    <reply-box :article_id="article_id" :comment_id="comment_id"></reply-box>
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
      article_id: null,
      comment_id: null,
      detailObj: {
        audio_file: null,
        base64_img: null,
        cate_id: null,
        cate_name: null,
        comment_num: null,
        content: null,
        createtime: null,
        forward_num: null,
        id: null,
        like_num: null,
        pre_view: null,
        tags: [],
        thumb_images: null,
        title: null,
        user_id: null,
        video_file: null
      },
      showExpandBar: true,
      commentLists: []
    };
  },
  mounted() {
    let id = this.$route.query.id;
    this.article_id = Number(id);
    this.getDetail(id);
    this.getComment(id);
  },
  methods: {
    getDetail(id) {
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        id: id
      };
      this.$ajaxList.articleOne(params, res => {
        this.detailObj = res;
      });
    },
    getComment(id) {
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        article_id: id
      };
      this.$ajaxList.commentList(params, res => {
        // this.detailObj = res;
        this.commentLists = res;
      });
    },
    goReplyDetail(comment_id) {
      let article_id = this.article_id;
      this.$router.push({
        path: "/replyDetail",
        query: {
          article_id: article_id,
          comment_id: comment_id
        }
      });
    },
    tabChange() {}
  }
};
</script>

<style lang="scss">
.story-detail {
  width: r(750);
  height: 100vh;
  background: #fff;
  overflow-y: auto;
  padding: r(0) r(30);
  .top-tit {
    height: r(207);
    width: r(690);
    position: relative;
    border-bottom: r(1) solid #ccc;
    padding-top: 40px;
    .line-1 {
      height: r(52);
      line-height: r(53);
      font-size: r(38);
      color: #333333;
    }
    .line-2 {
      height: r(44);
      line-height: r(44);
      font-size: r(24);
      color: #999999;
      overflow: hidden;
      margin-top: 48px;
      margin-bottom: 43px;
      & > .left {
        color: #333;
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
          color: #333;
        }
      }
      & > .right {
        float: right;
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
