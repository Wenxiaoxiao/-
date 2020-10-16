<template>
  <div class="reportAndAnswer full-page">
    <van-tabs class="lists-tabs" animated @click="tabChange">
      <van-tab title="就诊问答">
        <div class="list">
          <div class="list-item" @click="navTo" v-for="(item,m) in questionList" :key="m">
            <img src="@static/images/list1.png" alt srcset />
            <div class="infos">
              <p class="item-title">XXXXXXXXX诊前问答</p>
              <p class="item-text">最晚完成时间：2020-12-20 前</p>
              <p class="item-text">相关预约内容：XXXX老师</p>
              <p class="item-status">
                <a :class="{done: true,unFinish: false}">已完成</a>
              </p>
            </div>
          </div>
          <!-- <div class="list-item">
            <img src="@static/images/list1.png" alt srcset />
            <div class="infos">
              <p class="item-title">XXXXXXXXX诊前问答</p>
              <p class="item-text">最晚完成时间：2020-12-20 前</p>
              <p class="item-text">相关预约内容：XXXX老师</p>
              <p class="item-status">
                <a :class="{done: false,unFinish: true}" @click="goAnswer()">未完成</a>
              </p>
            </div>
          </div>-->
        </div>
      </van-tab>
      <van-tab title="报告">
        <div class="list">
          <div class="list-item" @click="navTo" v-for="(item,n) in reportList" :key="n">
            <img src="@static/images/list1.png" alt srcset />
            <div class="infos">
              <p class="item-title">XXXXXXXXX诊前问答</p>
              <p class="item-text">最晚完成时间：2020-12-20 前</p>
              <p class="item-text">相关预约内容：XXXX老师</p>
              <p class="item-status">
                <a :class="{done: true,unFinish: false}">已完成</a>
              </p>
            </div>
          </div>
          <!-- <div class="list-item">
            <img src="@static/images/list1.png" alt srcset />
            <div class="infos">
              <p class="item-title">XXXXXXXXX诊前问答</p>
              <p class="item-text">最晚完成时间：2020-12-20 前</p>
              <p class="item-text">相关预约内容：XXXX老师</p>
              <p class="item-status">
                <a :class="{done: false,unFinish: true}" @click="goAnswer()">未完成</a>
              </p>
            </div>
          </div>-->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "reportAndAnswer",
  data() {
    return {
      tabs: [{ name: "就诊问答" }, { name: "报告" }],
      type: "",
      questionList: [],
      reportList: []
    };
  },
  mounted() {
    this.getQuestionList();
    this.getReportList();
  },
  methods: {
    //就诊问答列表
    getQuestionList() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        p: 1
      };
      this.$ajaxList.questionList(params, function(res) {
        that.questionList = res;
      });
    },
    //报告列表
    getReportList() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
        p: 1
      };
      this.$ajaxList.reportList(params, function(res) {
        that.reportList = res;
      });
    },
    tabChange(num, title) {
      this.type = name === 0 ? "answer" : "report";
    },
    navTo() {
      this.$router.push({
        path: `/${this.type}Detail`
      });
    },
    goAnswer() {
      this.$router.push({
        path: "/subYourInfo"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0px 30px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid #ebedf0;
  img {
    height: 150px;
    width: 250px;
  }
  .infos {
    flex: 1;
    margin-left: 20px;
    .item-title {
      height: 42px;
      font-size: 28px;
      font-weight: bold;
      line-height: 40px;
      color: #333;
    }
    .item-text {
      height: 28px;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      color: #999;
    }
    .item-status {
      display: flex;
      justify-content: flex-end;
      > a {
        width: 130px;
        height: 56px;
        font-size: 24px;
        border-radius: 44px;
        text-align: center;
        line-height: 56px;
        &.done {
          background: rgba(247, 247, 247, 1);
          color: #999;
        }
        &.unFinish {
          color: #1574f6;
          background: rgba(21, 116, 246, 0.06);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.reportAndAnswer {
  .van-tabs__wrap {
    // box-shadow: 0 10px 5px #eee;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  .van-tab--active {
    color: #1574f6;
  }
  .van-tabs__line {
    background: #1574f6;
    border-radius: r(2);
    width: 80px !important;
  }
}
</style>