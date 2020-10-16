<template>
  <div class="suggestion-page">
    <div class="steps" v-for="(item,i) in flexible" :key="'tmp-'+i" v-show="type!=2">
      <div class="design-title">
        <i></i>
        <span>{{item.title}}</span>
        <b>{{item.subtitle}}</b>
      </div>
      <div class="txt" v-if="item.type==1">
        <textarea :placeholder="item.placeholder" v-model="content"></textarea>
      </div>
      <div class="txt" v-if="item.type==2">
        <input :placeholder="item.placeholder" v-model="contacts" />
      </div>
    </div>
    <div class="sub-btn" @click="submit">提交</div>
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
      contacts: null,
      content: null,
      flexible: [
        {
          title: "您的建议",
          placeholder: "请输入您的建议",
          type: 1
        },
        {
          title: "您的联系方式",
          subtitle: "（手机号，微信均可）",
          placeholder: "请留下能联系到您的联系方式",
          type: 2
        }
      ]
    };
  },
  mounted() {},
  methods: {
    submit() {
      //type 为 user 则是 用户端 意见反馈
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        content: this.content,
        contacts: this.contacts
      };
      if (this.$route.query.type == "user") {
        this.$ajaxList.Feedback(params, function(res) {
          that.$router.push({
            path: "/suggestsuccess",
            query: { type: "user" }
          });
        });
      } else {
        this.$ajaxList.Feedback1(params, function(res) {
          that.$router.push({
            path: "/suggestsuccess"
          });
        });
      }
    }
  }
};
</script>

<style lang="scss">
.suggestion-page {
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
