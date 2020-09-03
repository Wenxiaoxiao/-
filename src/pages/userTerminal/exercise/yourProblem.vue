<template>
  <div class="yourProblem-page">
    <div class="steps" v-for="(item,i) in flexible" :key="'tmp-'+i" v-show="type!=2">
      <div class="design-title">
        <i></i>
        <span>{{item.title}}</span>
        <b>{{item.subtitle}}</b>
      </div>
      <div class="txt" v-if="item.type==1">
        <textarea :placeholder="item.placeholder"></textarea>
      </div>
      <div class="txt" v-if="item.type==2">
        <input :placeholder="item.placeholder" />
      </div>
    </div>
    <div class="sub-btn" @click="submit">提交问题</div>
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
      type: null,
      showExpandBar: true,
      flexible: [
        {
          title: "问题标题",
          placeholder: "请输入标题",
          type: 2
        },
        {
          title: "问题描述",
          placeholder: "请描述您遇到的问题",
          type: 1
        }
      ]
    };
  },
  mounted() {},
  methods: {
    submit() {
      history.go(-1);
      // this.$router.push({
      //   path: "/exercise"
      // });
    }
  }
};
</script>

<style lang="scss">
.yourProblem-page {
  width: r(750);
  min-height: 100vh;
  background: #fff;
  padding: r(0) r(30);
  padding-bottom: r(40);
  .design-title {
    height: r(81);
    line-height: r(81);
    font-size: 0;
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
    & > b {
      color: #999;
      font-size: r(32);
      font-weight: normal;
      vertical-align: middle;
      display: inline-block;
    }
  }
  .steps {
    padding-top: r(20);
    .txt {
      font-size: 28px;
      color: #333;
      line-height: 42px;
      textarea {
        width: 690px;
        height: 300px;
        background: #f5f5f5;
        resize: none;
        padding: r(24) r(30);
        border-radius: 16px;
      }
      input {
        width: 690px;
        height: 78px;
        background: #f5f5f5;
        resize: none;
        padding: r(24) r(30);
        border-radius: 16px;
      }
    }
  }
  .sub-btn {
    width: 690px;
    height: 88px;
    background: #1574f6;
    border-radius: 44px;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    color: #fff;
    font-size: 32px;
    line-height: 88px;
    text-align: center;
    margin-top: 300px;
  }
}
</style>
