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
          <app-list :listData="tmpList"></app-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import list from "@/components/knowLedgeList.vue";
export default {
  name: "service",
  components: {
    "app-nav": nav,
    "app-list": list
  },
  data() {
    return {
      tabs: [
        {
          name: "系统理论"
        },
        {
          name: "重置理念"
        },
        {
          name: "新锐观点"
        },
        {
          name: "学术论文"
        },
        {
          name: "科研统计"
        }
      ],
      tmpList: [
        {
          img: require("@static/images/list5.png"),
          title: "孩子厌学自闭，拒绝沟通怎么办...",
          time: "2020-04-24",
          message: 28,
          like: 52
        },
        {
          img: require("@static/images/list5.png"),
          title: "当孩子面对校园欺凌，家长该怎...",
          time: "2020-04-24",
          message: 128,
          like: 52
        },
        {
          img: require("@static/images/list5.png"),
          title: "年底，你的心理减压之路",
          time: "2020-04-24",
          message: 280,
          like: 52
        },
        {
          img: require("@static/images/list5.png"),
          title: "让理智与情感、理论与实践更好...",
          time: "2020-04-24",
          message: 100,
          like: 52
        }
      ],
      location: location,
      list: [] //列表数据
    };
  },
  methods: {
    tabChange() {}
  }
};
</script>

<style lang="scss" scoped>
.knowledge-page {
  width: r(750);
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