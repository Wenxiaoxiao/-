<template>
  <div class="design-reply-box">
    <div class="blank-box"></div>
    <div class="input-wrapper">
      <van-field v-model="inputText" label class="design-input" />
      <img @click="subComment" class="sendbtn" src="@static/images/send.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article_id: Number,
    comment_id: Number
  },
  data() {
    return {
      inputText: null
    };
  },
  mounted() {},
  methods: {
    subComment() {
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        article_id: this.article_id,
        content: this.inputText,
        comment_id: this.comment_id
      };
      this.$ajaxList.subComment(params, res => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.design-reply-box {
  width: r(750);
  height: r(132);
  background: #fff;
  .blank-box,
  .input-wrapper {
    width: r(750);
    height: r(132);
    background: #fff;
  }
  .input-wrapper {
    padding-top: r(22);
    padding-left: r(30);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .design-input {
    width: r(570);
    height: r(88);
    background: #f6f6f6;
    border-radius: r(44);
    font-size: r(34);
    float: left;
    margin-right: r(32);
  }
  .sendbtn {
    width: r(88);
    float: left;
  }
}
</style>
