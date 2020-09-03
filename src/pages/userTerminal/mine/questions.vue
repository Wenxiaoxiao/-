<template>
  <div class="questions full-page">
    <div class="question-list">
      <div class="question-item">
        <div class="item-content">
          <div class="item-title">孩子厌学自闭，拒绝沟通怎么办...</div>
          <div class="item-date">2020-04-24</div>
          <div class="item-status" :class="{ans:true,noAns:false}">已回复</div>
        </div>
        <img src="@static/images/teacher_icon.png" alt />
      </div>
      <div class="question-item">
        <div class="item-content">
          <div class="item-title">孩子厌学自闭，拒绝沟通怎么办...</div>
          <div class="item-date">2020-04-24</div>
          <div class="item-status" :class="{ans:false,noAns:true}">等待回复</div>
        </div>
        <img src="@static/images/teacher_icon.png" alt />
      </div>
    </div>
    <van-button class="publish-btn" icon="plus" type="info" round @click="yourProblem">上传问题</van-button>
  </div>
</template>

<script>
export default {
  name: "questions",
  methods: {
    yourProblem() {
      this.$router.push({
        path: "/yourProblem"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.questions {
  color: #333;
  .question-list {
    padding: 0 30px;
  }
  .publish-btn {
    // width: 220px;
    height: 88px;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
  }
  .question-item {
    padding: 40px 0;
    border-bottom: 1px solid #ebedf0;
    display: flex;
    justify-content: space-between;
    > img {
      height: 150px;
      width: 250px;
    }
    .item-title {
      height: 42px;
      font-size: 28px;
      font-weight: bold;
      line-height: 40px;
    }
    .item-date {
      height: 28px;
      font-size: 20px;
      color: #999;
      font-weight: 400;
      line-height: 28px;
      margin-top: 8px;
    }
    .item-status {
      height: 56px;
      width: 130px;
      border-radius: 28px;
      font-size: 24px;
      text-align: center;
      line-height: 58px;
      margin-top: 14px;
      &.noAns {
        color: #999;
        background: #f7f7f7;
      }
      &.ans {
        color: #1574f6;
        background: rgba(21, 116, 246, 0.06);
      }
    }
  }
}
</style>