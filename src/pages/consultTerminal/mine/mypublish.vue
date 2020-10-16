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
      tabs: [],
      tmpList: []
    };
  },
  mounted() {
    this.getDoctorCate();
  },
  methods: {
    // 咨询师文章栏目
    getDoctorCate() {
      let that = this;
      this.$ajaxList.doctorCate(null, function(res) {
        that.tabs = res;
      });
    },
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