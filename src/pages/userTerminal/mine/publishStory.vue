<template>
  <div class="publish-story-page">
    <div class="user">
      <img src="@static/images/userico.png" />
      <span>学员大锤</span>
    </div>
    <div class="content">
      <textarea placeholder="请输入发布内容"></textarea>
    </div>
    <van-uploader v-model="fileList" multiple upload-icon="plus" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }]
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.publish-story-page {
  height: 100vh;
  background: #fff;
  padding: 40px 30px;
  .user {
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
  .content {
    width: 690px;
    margin: 24px auto;
    & > textarea {
      width: 690px;
      height: 400px;
      background: #f5f5f5;
      resize: none;
      border-radius: 16px;
      padding: 30px;
      font-size: 28px;
    }
  }
}
</style>