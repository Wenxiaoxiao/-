<template>
  <div class="personInfo full-page">
    <div class="content">
      <div class="logo-wrapper">
        <img :src="fileList[0].url" alt class="logo" v-if="fileList&&fileList.length>0" />
        <van-uploader :after-read="afterRead" v-model="fileList" class="logo_upload" />
      </div>
      <div class="title">基本信息</div>
      <div class="fields">
        <common-field label="昵称">
          <van-field v-model="nickname" />
        </common-field>
        <common-field label="个性签名">
          <van-field v-model="bio" />
        </common-field>
      </div>
    </div>
    <div class="btn-container">
      <van-button round block color="#1574F6" @click="editInfo">保存</van-button>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
import { Toast } from "vant";
export default {
  name: "personInfo",
  components: {
    "common-field": () => import("../../../components/common-field")
  },
  data() {
    return {
      bio: null,
      nickname: null,
      fileList: []
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    //获取个人信息
    getUserInfo() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token
      };
      this.$ajaxList.userInfo(params, function(res) {
        that.nickname = res.nickname;
        that.fileList = [{ url: res.avatar, isImage: true }];
        that.bio = res.bio;
      });
    },
    editInfo() {
      let that = this;
      let params = {
        avatar: this.fileList[0].url,
        nickname: this.nickname,
        bio: this.bio,
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token
      };
      this.$ajaxList.editInfo(params, function(res) {
        Toast("修改成功！");
      });
    },
    afterRead(file) {
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
        let tmpArr = [];
        tmpArr.push({ url: res.data.data, isImage: true });
        that.fileList = tmpArr;
        console.log(that.fileList);
      });
    }
  }
};
</script>

<style lang="scss">
.content {
  height: calc(100vh - 54px);
  padding-top: 80px;
  .logo-wrapper {
    height: 200px;
    width: 200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 37px;
    overflow: hidden;
    position: relative;
    .van-uploader__preview-delete {
      display: none;
    }
    .van-uploader__preview {
      display: none;
    }
    .logo,
    .logo_upload {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      display: block;
      .van-uploader__wrapper,
      .van-uploader__upload {
        width: 200px;
        height: 200px;
      }
    }
    .logo_upload {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
  .title {
    height: 45px;
    font-size: 32px;
    font-weight: 400;
    line-height: 45px;
    color: #999;
    text-align: center;
  }
  .fields {
    margin-top: 60px;
    padding: 0 80px;
  }
}
.btn-container {
  width: 200px;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}
</style>