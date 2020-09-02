<template>
  <div class="see-more-page">
    <app-list :listData="tmpList" :detailPage="detailPageName"></app-list>
  </div>
</template>

<script>
import list from "@/components/indexList.vue";
export default {
  components: {
    "app-list": list
  },
  data() {
    return {
      detailPageName: "最新",
      tmpList: [
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果",
          tags: ["原因", "思维", "有效"],
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果1",
          tags: ["原因", "思维"],
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果1",
          tags: ["原因"],
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list.png"),
          title: "症状是强迫性重复的结果",
          tags: ["原因", "思维", "有效"],
          time: "2020-04-24"
        }
      ],
      location: location,
      list: [] //列表数据
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.index-contains {
  width: r(750);
  min-height: 100vh;
  background: #fff;
  .top-header {
    width: r(750);
    height: r(458);
    & > img {
      width: r(750);
    }
  }
  .top-nav {
    width: r(690);
    height: r(143);
    background: #fff;
    border-radius: r(16);
    box-shadow: r(0) r(0) r(10) rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: r(-95);
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: r(34) r(0) r(22);
    & > div {
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 0;
      img {
        width: r(64);
      }
      div {
        height: r(33);
        color: #666;
        font-size: r(24);
      }
    }
  }
  .sub-title {
    font-size: r(20);
    color: #333;
    text-align: center;
    line-height: r(60);
  }
  .lists-tabs {
    .see-more-btn {
      height: 60px;
      line-height: 60px;
      color: #999999;
      font-size: 24px;
      padding-right: 30px;
      & > span {
        float: right;
      }
    }
    .van-tab {
      height: r(88);
    }
    .van-tabs__line {
      background: linear-gradient(
        88deg,
        rgba(21, 116, 246, 1) 0%,
        rgba(21, 116, 246, 0.24) 100%
      );
      border-radius: r(2);
    }
  }
}
</style>
