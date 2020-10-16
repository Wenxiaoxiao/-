<template>
  <div class="publish-story-page">
    <div class="user">
      <img src="@static/images/userico.png" />
      <span>学员大锤</span>
    </div>
    <div class="content">
      <input placeholder="标题" v-model="title" />
    </div>
    <div class="content">
      <textarea placeholder="请输入发布内容" v-model="content"></textarea>
    </div>
    <van-uploader v-model="fileList" upload-icon="plus" />
    <div class="sub-btn" @click="submit">发表</div>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data() {
    return {
      fileList: [],
      res: null,
      title: null,
      content: null
    };
  },
  methods: {
    imgUploadOne(file, callback) {
      let that = this;
      let formdata = new FormData();
      console.log(file);
      formdata.append("img", file.file);
      let url = "/api/upload/imgUploadOne";
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios.post(url, formdata, config).then(function(res) {
        if (callback) {
          callback(res.data.data);
        }
      });
    },
    submit() {
      //校验
      let thumb_images = [];
      let that = this;
      let tmpArr = [];
      this.fileList.map(item => {
        this.imgUploadOne(item, function(res) {
          tmpArr.push(res);
        });
      });
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        title: this.title,
        thumb_images: tmpArr,
        content: this.content
      };
      this.$ajaxList.publishArticle(params, function(res) {
        that.$router.push({
          path: "/myStory"
        });
      });
    }
  },
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
    & > input {
      width: 690px;
      height: 78px;
      background: #f5f5f5;
      resize: none;
      border-radius: 16px;
      padding: r(24) r(30);
      font-size: 28px;
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
    margin-top: 100px;
  }
}
</style>