<template>
  <div class="mypublish-page">
    <van-tabs class="lists-tabs" animated @click="tabChange" :ellipsis="false">
      <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
        <app-list :listData="tmpList" :detail="'/publishDetail'"></app-list>
      </van-tab>
    </van-tabs>
    <van-button class="publish-btn" icon="plus" type="info" round @click="publishArticle">发表文章</van-button>
  </div>
</template>

<script>
import list from "@/components/serviceList.vue";
export default {
  name: "mypublish",
  components: {
    "app-list": list
  },
  data() {
    return {
      tabs: [{ name: "学术论文" }, { name: "新锐观点" }, { name: "现象剖析" }],
      tmpList: [
        {
          img: require("@static/images/list1.png"),
          title: "孩子厌学自闭，拒绝沟通怎么办...",
          time: "2020-04-24",
          message: 28,
          like: 52
        },
        {
          img: require("@static/images/list1.png"),
          title: "孩子厌学自闭，拒绝沟通怎么办...",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list1.png"),
          title: "当孩子面对校园欺凌，家长该怎...",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list1.png"),
          title: "让理智与情感、理论与实践更好...",
          time: "2020-04-24"
        }
      ]
    };
  },
  methods: {
    tabChange(e) {
      console.log(e);
    },
    publishArticle() {
      this.$router.push({
        path: "/publishArticle"
      });
    }
  }
};
</script>
<style lang="scss">
.mypublish-page {
  min-height: 100vh;
  background: #fff;
  .publish-btn {
    // width: 220px;
    height: 88px;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
  }
  .van-tabs__wrap {
    // box-shadow: 0 10px 5px #eee;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  .van-tab__text {
    font-weight: bold;
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