<template>
  <div class="publishArticle-page">
    <div class="steps" v-for="(item,i) in flexible" :key="'tmp-'+i" v-show="type!=2">
      <div class="design-title">
        <i></i>
        <span>{{item.title}}</span>
        <b>{{item.subtitle}}</b>
      </div>
      <div class="txt" v-if="item.type==1">
        <textarea :placeholder="item.placeholder" v-model="content"></textarea>
      </div>
      <div class="txt" v-else-if="item.type==0">
        <span
          @click="choseTags(tag,m)"
          :class="tag.chosed?'active tag':'tag'"
          v-for="(tag,m) in item.list"
          :key="'tag_'+m"
        >
          {{tag.name}}
          <van-icon v-show="tag.chosed" class="chosed-ico" name="checked" />
        </span>
      </div>
      <div class="txt" v-else-if="item.type==2">
        <input :placeholder="item.placeholder" v-model="title" />
      </div>
    </div>
    <van-uploader v-model="fileList" upload-icon="plus" />
    <div class="sub-btn" @click="submit">发表</div>
  </div>
</template>

<script>
import replyBox from "@/components/replyBox.vue";
var axios = require("axios");
export default {
  components: {
    "reply-box": replyBox
  },
  data() {
    return {
      title: null,
      content: null,
      tags: [],
      fileList: [],
      type: null,
      showExpandBar: true,
      flexible: [
        {
          title: "标题",
          placeholder: "请输入标题",
          type: 2
        },
        {
          title: "标签",
          type: 0,
          list: []
        },
        {
          title: "文章内容",
          placeholder: "请输入...",
          type: 1
        }
      ]
    };
  },
  mounted() {
    this.getTags();
  },
  methods: {
    choseTags(tag, m) {
      let tags = this.tags;
      if (this.flexible[1].list[m].chosed) {
        tags.splice(tags.indexOf(tag.id), 1);
        this.flexible[1].list[m].chosed = false;
      } else {
        tags.push(tag.id);
        this.flexible[1].list[m].chosed = true;
      }
      this.$forceUpdate();
      this.tags = tags;
    },
    //获取标签
    getTags() {
      let that = this;
      this.$ajaxList.getTags(null, res => {
        that.flexible[1].list = res;
      });
    },
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
      let tmpArr = [];
      this.fileList.map(item => {
        this.imgUploadOne(item, function(res) {
          tmpArr.push(res);
        });
      });
      //咨询师发表文章 doctorArticle
      let that = this;
      setTimeout(function() {
        let params = {
          token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token,
          title: that.title,
          content: that.content,
          cate_id: that.$route.query.cate_id,
          tags: that.tags.join(","),
          thumb_images: tmpArr
        };
        that.$ajaxList.doctorArticle(params, res => {
          //跳转到列表页面
          that.$router.push({
            path: "/mypublish"
          });
        });
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.publishArticle-page {
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
      font-size: 0;
      color: #333;
      line-height: 42px;
      textarea {
        width: 690px;
        height: 300px;
        background: #f5f5f5;
        resize: none;
        padding: r(24) r(30);
        font-size: 28px;
      }
      input {
        width: 690px;
        height: 78px;
        background: #f5f5f5;
        resize: none;
        padding: r(24) r(30);
        font-size: 28px;
      }
      .tag {
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        // padding-top: 10px;
        border-radius: 21px;
        margin-right: 18px;
        margin-bottom: 20px;
        font-size: 20px;
        text-align: center;
        &.active {
          border: r(1) solid #1574f6 !important;
          position: relative;
          .chosed-ico {
            color: #1574f6;
            position: absolute;
            font-size: 24px;
            right: -10px;
            top: -10px;
          }
        }
      }
      .tag:nth-child(1),
      .tag:nth-child(7),
      .tag:nth-child(13) {
        color: #ffdc3d;
        background: rgba(255, 220, 61, 0.1);
        border: r(1) solid rgba(255, 220, 61, 0.1);
      }
      .tag:nth-child(2),
      .tag:nth-child(8),
      .tag:nth-child(14) {
        color: #4bd5ab;
        background: rgba(75, 213, 171, 0.1);
        border: r(1) solid rgba(75, 213, 171, 0.1);
      }
      .tag:nth-child(3),
      .tag:nth-child(9),
      .tag:nth-child(15) {
        color: #fb3e3e;
        background: rgba(251, 62, 62, 0.1);
        border: r(1) solid rgba(251, 62, 62, 0.1);
      }
      .tag:nth-child(4),
      .tag:nth-child(10),
      .tag:nth-child(16) {
        color: #d016ff;
        background: rgba(208, 22, 255, 0.1);
        border: r(1) solid rgba(208, 22, 255, 0.1);
      }
      .tag:nth-child(5),
      .tag:nth-child(11),
      .tag:nth-child(17) {
        color: #1574f6;
        background: rgba(21, 116, 246, 0.1);
        border: r(1) solid rgba(21, 116, 246, 0.1);
      }
      .tag:nth-child(6),
      .tag:nth-child(12),
      .tag:nth-child(18) {
        color: #1574f6;
        background: rgba(21, 116, 246, 0.1);
        border: r(1) solid rgba(21, 116, 246, 0.1);
        margin-right: 0px;
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
    margin-top: 100px;
  }
}
</style>
