<template>
  <div class="reply-container">
    <div class="top-header">
      <div class="left">
        <img src="@static/images/logo.png" />
      </div>
      <div class="right">
        <div class="d-1">
          <div class="d-l">学员孙丽</div>
          <div class="d-r">2020-04-24</div>
        </div>
        <div class="d-2">
          <div class="d-l">深有感受深有感受深有感受.......</div>
          <div class="d-r">
            <img src="@static/images/unlike.png" />
            <span>17</span>
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
        <div class="top-header">
          <div class="left">
            <img src="@static/images/logo.png" />
          </div>
          <div class="right">
            <div class="d-1">
              <div class="d-l">学员孙丽</div>
              <div class="d-r">2020-04-24</div>
            </div>
            <div class="d-2">
              <div class="d-l">深有感受深有感受深有感受.......</div>
              <div class="d-r">
                <img src="@static/images/unlike.png" />
                <span>17</span>
                <i>...</i>
              </div>
            </div>
          </div>
        </div>
        <div class="top-header">
          <div class="left">
            <img src="@static/images/logo.png" />
          </div>
          <div class="right">
            <div class="d-1">
              <div class="d-l">学员孙丽</div>
              <div class="d-r">2020-04-24</div>
            </div>
            <div class="d-2">
              <div class="d-l">深有感受深有感受深有感受.......</div>
              <div class="d-r">
                <img src="@static/images/unlike.png" />
                <span>17</span>
                <i>...</i>
              </div>
            </div>
          </div>
        </div>
    </div>
    <reply-box></reply-box>
  </div>
</template>
<script>
import replyBox from "@/components/replyBox.vue";
var vm;
export default {
  components: {
      "reply-box":replyBox
  },
  data() {
    return {};
  },
  mounted() {
    vm = this;
  },
  methods: {}
};
</script>
<style lang="scss">
.reply-container {
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
      border-bottom: r(1) solid #ccc;
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
