<template>
  <div class="knowledge-page">
    <div class="index-contains">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@static/images/knowledge.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/knowledge.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/knowledge.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/knowledge.png" alt />
        </van-swipe-item>
      </van-swipe>
      <van-tabs class="lists-tabs" animated @click="tabChange" :ellipsis="false">
        <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
          <app-list
            v-show="tab.name!='在线答疑'"
            :listData="tmpList"
            :detail="'/serviceDetail'"
            :detailPage="detailPageName"
          ></app-list>
          <app-list
            v-show="tab.name=='在线答疑'"
            :listData="tmpList1"
            :detail="'/serviceDetail'"
            :detailPage="detailPageName"
          ></app-list>
          <van-button class="publish-btn" icon="plus" type="info" round @click="yourProblem" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import list from "@/components/serviceList.vue";
export default {
  name: "service",
  components: {
    "app-nav": nav,
    "app-list": list
  },
  data() {
    return {
      detailPageName: "森田疗法实操",
      tabs: [
        {
          name: "森田疗法实操"
        },
        {
          name: "现象剖析"
        },
        {
          name: "游戏练习"
        },
        {
          name: "在线答疑"
        },
        {
          name: "会员故事"
        }
      ],
      tmpList: [
        {
          img: require("@static/images/list3.png"),
          title: "发展心理学——心理睡眠公开课",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list3.png"),
          title: "发展心理学——儿童心理学发展与特点",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list3.png"),
          title: "发展心理学——少年的个性和社会行发展",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list3.png"),
          title: "发展心理学——少年的个性和社会行发展",
          time: "2020-04-24"
        }
      ],
      tmpList1: [
        {
          img: require("@static/images/list3.png"),
          title: "早上吃饭了吗？",
          time: "吃了，吃的包子，喝了豆浆"
        },
        {
          img: require("@static/images/list3.png"),
          title: "早上吃饭了吗？",
          time: "吃了，吃的包子，喝了豆浆"
        },
        {
          img: require("@static/images/list3.png"),
          title: "早上吃饭了吗？",
          time: "吃了，吃的包子，喝了豆浆"
        },
        {
          img: require("@static/images/list3.png"),
          title: "早上吃饭了吗？",
          time: "吃了，吃的包子，喝了豆浆"
        }
      ],
      location: location,
      list: [] //列表数据
    };
  },
  methods: {
    tabChange(val) {
      this.detailPageName = this.tabs[val].name;
    },
    yourProblem() {
      this.$router.push({
        path: "/yourProblem"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.knowledge-page {
  min-height: 100vh;
  background: #fff;
  .my-swipe .van-swipe-item {
    height: 410px;
    img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
  }
  .publish-btn {
    // width: 220px;
    height: 88px;
    width: 88px;
    position: fixed;
    background: #1574f6;
    bottom: 100px;
    right: 30px;
    box-shadow: 0px 4px 20px rgba(21, 116, 246, 0.35);
  }
  .aboutus-page {
    padding: 70px r(30) r(30);
    img {
      width: 290px;
      margin: 0 auto;
      display: block;
    }
    .txt {
      margin-top: 60px;
      width: 690px;
      font-size: 28px;
      line-height: 42px;
      color: #333333;
    }
  }
}
</style>