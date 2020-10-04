<template>
  <div class="personRecord full-page">
    <div class="content">
      <common-field label="姓名">
        <van-field v-model="params.realname" />
      </common-field>
      <common-field label="年龄" link>
        <van-field v-model="params.age" />
      </common-field>
      <common-field label="性别" link>
        <van-field v-model="params.sex" />
      </common-field>
      <common-field label="职业">
        <van-field v-model="params.occupation" />
      </common-field>
      <common-field label="学历" link>
        <van-field v-model="params.education" />
      </common-field>
      <common-field label="婚姻" link>
        <van-field v-model="params.marry" />
      </common-field>
      <common-field label="手机号">
        <van-field v-model="params.mobile" />
      </common-field>
      <common-field label="患病历程">
        <van-field
          v-model="params.course_text"
          rows="2"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="请输入......"
        />
      </common-field>
    </div>
    <div class="btn-container">
      <van-button round block color="#1574F6" @click="setRecords">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "personRecord",
  components: {
    "common-field": () => import("../../../components/common-field")
  },
  data() {
    return {
      params: {
        realname: null,
        age: null,
        sex: null,
        occupation: null,
        education: null,
        marry: null,
        mobile: null,
        course_text: null
      }
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    getRecords() {
      let that = this;
      let params = {};
      params.token = JSON.parse(sessionStorage.getItem("USER_INFO")).token;
      this.$ajaxList.getRecords(params, function(res) {
        res.sex = res.sex == 1 ? "男" : "女";
        res.marry = res.marry == 1 ? "未婚" : "已婚";
        that.params = res;
      });
    },
    setRecords() {
      let that = this;
      let params = this.params;
      params.sex = params.sex == "男" ? 1 : 2;
      params.marry = params.marry == "未婚" ? 1 : 2;
      params.token = JSON.parse(sessionStorage.getItem("USER_INFO")).token;
      this.$ajaxList.setRecords(params, function(res) {
        that.getRecords();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 54px);
  padding: 60px 80px 0;
}
.btn-container {
  position: fixed;
  bottom: r(100);
  width: r(200);
  left: 50%;
  transform: translateX(-50%);
}
</style>