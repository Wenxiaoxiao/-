<template>
  <div class="integral">
    <div class="top">
      <div>现有积分</div>
      <div>{{scoreData.score}}</div>
    </div>
    <div class="center">
      <div class="selecter">所有记录</div>
    </div>
    <div class="list">
      <div class="list-item" v-for="(item,i) in scoreData.list" :key="i">
        <div class="left">
          <div>{{item.memo}}</div>
          <div>{{item.createtime}}</div>
        </div>
        <div class="right">+{{item.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "integral",
  data() {
    return {
      scoreData: {
        score: null,
        list: []
      }
    };
  },
  mounted() {
    let that = this;
    let params = {
      p: 1,
      token: JSON.parse(sessionStorage.getItem("USER_INFO")).token
    };
    this.$ajaxList.myScore(params, function(res) {
      that.scoreData = res;
    });
  }
};
</script>

<style lang="scss" scoped>
.integral {
  min-height: 100vh;
  padding-top: 92px;
  background: #fff;
  .top {
    text-align: center;
    > div {
      height: 45px;
      font-size: 32px;
      font-weight: 400;
      line-height: 45px;
      &:last-child {
        height: 127px;
        font-size: 108px;
        font-weight: bold;
        line-height: 127px;
      }
    }
  }
  .center {
    margin-top: 57px;
    background: #f6f6f6;
    padding: 26px 30px 26px 0;
    display: flex;
    justify-content: flex-end;
    .selecter {
      padding: 0 80px 0 24px;
      border: 1px solid #ebedf0;
      height: 64px;
      line-height: 64px;
      color: #666;
      font-size: 24px;
      border-radius: 32px;
    }
  }
  .list {
    padding: 0 30px;
    .list-item {
      padding: 30px 0;
      border-bottom: 1px solid #ebedf0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        > div:first-child {
          height: 40px;
          font-size: 28px;
          font-weight: 400;
          line-height: 40px;
          color: #333;
        }
        > div:last-child {
          height: 33px;
          font-size: 24px;
          color: #999;
          font-weight: 400;
          line-height: 33px;
        }
      }
      .right {
        height: 40px;
        font-size: 34px;
        color: #333;
        font-weight: 500;
        line-height: 40px;
      }
    }
  }
}
</style>