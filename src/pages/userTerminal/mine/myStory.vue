<template>
  <div class="myStory full-page">
    <div class="list" v-if="JsonData&&JsonData.length>0">
      <div class="list-item" @click="storyDetail(item.id)" v-for="(item,m) in JsonData" :key="m">
        <img :src="item.thumb_images" alt />
        <div class="content">
          <div class="item-title">{{item.title}}</div>
          <div class="item-user">
            <img class="user-icon" src="@static/images/teacher_icon.png" alt />
            <div>XX用户</div>
          </div>
          <div class="dateAndTalk">
            <span>{{item.createtime}}</span>
            <div class="comment">
              <img class="comment-icon" src="@static/images/comments.png" alt />
              <span>{{item.comment_num}}</span>
              <div class="points">
                <van-icon name="ellipsis" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <van-button class="publish-btn" icon="plus" type="info" round @click="publishStory">新的故事</van-button>
    </div>
    <div v-else class="list">
      <div class="no-data">没有更多了</div>
      <van-button class="publish-btn" icon="plus" type="info" round @click="publishStory">新的故事</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myStory",
  data() {
    return {
      JsonData: []
    };
  },
  mounted() {
    let that = this;
    let params = {
      token: JSON.parse(sessionStorage.getItem("USER_INFO")).token,
      p: 1
    };
    this.$ajaxList.myStory(params, function(res) {
      that.JsonData = res;
    });
  },
  methods: {
    publishStory() {
      this.$router.push({
        path: "/publishStory"
      });
    },
    storyDetail(id) {
      this.$router.push({
        path: "/storyDetail",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.myStory {
  color: #333;
  .list {
    padding: 0 30px;
    .publish-btn {
      // width: 220px;
      height: 88px;
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    }
    .no-data {
      font-size: r(32);
      color: #999;
      text-align: center;
      margin-top: r(200);
    }
  }
  .list-item {
    display: flex;
    padding: 40px 0;
    border-bottom: 1px solid #ebedf0;
    > img {
      margin-right: 20px;
      width: 250px;
      height: 150px;
    }
    .item-title {
      width: 420px;
      height: 42px;
      font-size: 28px;
      font-weight: bold;
      line-height: 40px;
    }
    .item-user {
      display: flex;
      height: 33px;
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
    }
    .user-icon {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      margin-right: 16px;
      align-items: center;
    }
    .dateAndTalk {
      margin-top: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
        height: 28px;
        font-size: 20px;
        color: #999;
        font-weight: 400;
        line-height: 28px;
      }
      .comment {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .comment-icon {
          height: 29px;
          width: 30px;
          margin-right: 25px;
        }
        > div {
          padding: 0 10px;
          display: flex;
          align-items: center;
          border-radius: 10px;
          background: #ebecee;
          margin-left: 25px;
        }
      }
    }
  }
}
</style>