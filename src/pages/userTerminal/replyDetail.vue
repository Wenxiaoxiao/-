<template>
  <div class="reply-container">
    <div class="top-header">
      <div class="left">
        <img :src="commentObj.avatar" />
      </div>
      <div class="right">
        <div class="d-1">
          <div class="d-l">{{commentObj.nickname}}</div>
          <div class="d-r">{{commentObj.createtime}}</div>
        </div>
        <div class="d-2">
          <div class="d-l">{{commentObj.content}}</div>
          <div class="d-r">
            <img src="@static/images/unlike.png" />
            <span>{{commentObj.point_num}}</span>
            <i>...</i>
          </div>
        </div>
      </div>
    </div>
    <div class="space-blank"></div>
    <div class="all-reply-title">
      <div class="design-title">
        <i></i>
        <span>全部回复</span>
      </div>
    </div>
    <div class="reply-list">
      <div class="top-header" v-for="(item,m) in commentObj.child" :key="'child_'+m">
        <div class="left">
          <img :src="item.avatar" />
        </div>
        <div class="right">
          <div class="d-1">
            <div class="d-l">{{item.nickname}}</div>
            <div class="d-r">{{item.createtime}}</div>
          </div>
          <div class="d-2">
            <div class="d-l">{{item.content}}</div>
            <div class="d-r">
              <img src="@static/images/unlike.png" />
              <span>{{item.point_num}}</span>
              <i>...</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <reply-box :article_id="article_id" :comment_id="comment_id"></reply-box>
  </div>
</template>
<script>
import replyBox from "@/components/replyBox.vue";
var vm;
export default {
  components: {
    "reply-box": replyBox
  },
  data() {
    return {
      article_id: null,
      comment_id: null,
      commentObj: {
        avatar: null,
        child: [],
        content: null,
        createtime: null,
        nickname: null,
        point_num: null,
        reply_num: null
      }
    };
  },
  mounted() {
    this.comment_id = Number(this.$route.query.comment_id);
    this.article_id = Number(this.$route.query.article_id);
    this.getComment(this.article_id, this.comment_id);
  },
  methods: {
    getComment(id, comment_id) {
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        article_id: id
      };
      this.$ajaxList.commentList(params, res => {
        res.map(item => {
          if (item.id == comment_id) {
            this.commentObj = item;
          }
        });
        // this.detailObj = res;
        // this.commentLists = res;
      });
    }
  }
};
</script>
<style lang="scss">
.reply-container {
  width: r(750);
  height: 100vh;
  background: #fff;
  .top-header {
    min-height: r(149);
    padding: r(40) r(30);
    .left {
      width: r(64);
      height: r(64);
      border-radius: 50%;
      float: left;
      margin-right: r(20);
      & > img {
        width: r(64);
      }
    }
    .right {
      width: r(606);
      float: left;
      .d-1 {
        height: r(28);
        font-size: r(20);
        line-height: r(28);
        color: #999;
        overflow: hidden;
      }
      .d-2 {
        margin-top: r(8);
        height: r(33);
        line-height: r(33);
        font-size: r(28);
        color: #333;
        overflow: hidden;
      }
      .d-l {
        float: left;
      }
      .d-r {
        float: right;
        color: #999;
        & > img {
          height: r(28);
          display: inline-block;
          vertical-align: middle;
          margin-right: r(5);
        }
        & > span {
          display: inline-block;
          vertical-align: middle;
          margin-right: r(40);
        }
        & > i {
          display: inline-block;
          width: r(55);
          height: r(30);
          background: #ebecee;
          color: #949597;
          text-align: center;
          line-height: r(15);
          vertical-align: middle;
          border-radius: r(20);
          font-weight: bold;
        }
      }
    }
  }
  .space-blank {
    height: r(20);
    background: #f6f6f6;
  }
  .all-reply-title {
    padding: r(0) r(30);
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
  }
}
</style>
