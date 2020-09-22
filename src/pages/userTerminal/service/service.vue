<template>
  <div class="service-page">
    <div class="index-contains">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@static/images/service.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/service.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/service.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@static/images/service.png" alt />
        </van-swipe-item>
      </van-swipe>
      <van-tabs class="lists-tabs" animated @click="tabChange" :ellipsis="false">
        <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
          <div v-if="tab.aboutus" class="aboutus-page">
            <img src="@static/images/company.png" class="img" />
            <div class="txt">
              中山市暖阳阳心理咨询有限公司成立于2020年3月；公司位置坐落在美丽的园林城市——中山市，是经国家工商部门审核并注册的一家正规的心理咨询公司，是一个值得依赖的咨询服务平台；本公司主要开展的是专业的心理咨询服务和企业培训服务；
              <br />
              <br />中山市暖阳阳心理咨询有限公司业务主要分为三个版块：
              <br />
              <br />第一版块为公益版块：主要以公益性质为主，为企业及个人普及各类家庭教育、亲子关系、婚姻关系、社交关系、人际交往、情绪管理、心理建设......等相关知识；公司本着“让世界少一些冷漠，多一些温暖、多一些关爱”的服务理念，在暖阳阳心理咨询旗下管理的公益学习群中，定期分享以上学习内容，帮助每一位想要学习并提升自己的朋友们，本群中所有的课程内容，都将永久以公益的性质进行呈现；
              <br />
              <br />第二版块主要做专业心理咨询服务，针对幼儿、儿童、青少年、成人等人群展开的专业的心理疗愈，在咨询过程中根据来访者实际情况，并结合科学的测评价方法，深度了解咨询者的心理状况及严重程度，评估出相对准确的测评结果，并对符合咨询范围的人群实施有效疗愈，帮助咨询者走出心理障碍与阴影，让来访者回归平和安定的生活；
              <br />
              <br />第三版块是企业培训，公司目前开展了三类培训项目，第一类：公益培训；针对企业及各组织开展的一系列基础的心理知识培训；第二类：企业培训，主要针对企业的负责人、高层管理、中层管理以及基层员工展开的专业培训；第三类：特色培训，为丰富企业的培训项目，特色开展以下特色服务：商务礼仪、语言表达、主持技巧、化妆盘发、服装搭配、皮肤护理、身材管理、饮食健康、插花技术、茶艺学习....等；
            </div>
          </div>
          <app-list
            :listData="tmpList1"
            :detail="'/serviceDetail'"
            :detailPage="detailPageName"
            v-if="tab.name=='意见反馈'"
          ></app-list>
          <app-list
            :listData="tmpList"
            :detail="'/serviceDetail'"
            :detailPage="detailPageName"
            v-else
          ></app-list>
        </van-tab>
      </van-tabs>
    </div>
    <app-nav nav="2"></app-nav>
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
      detailPageName: "公益活动",
      tabs: [
        {
          name: "公益活动"
        },
        {
          name: "咨询师招聘"
        },
        {
          name: "商业合作"
        },
        {
          name: "资质荣誉"
        },
        {
          name: "意见反馈"
        },
        {
          name: "关于我们",
          aboutus: true
        }
      ],
      tmpList: [
        {
          img: require("@static/images/list4.png"),
          title:
            "“同心益百分”智囊团开展线上心理咨询公益活动“同心益百分”智囊团开展线上心理咨询公益活动",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list4.png"),
          title: "525心理健康公益行动",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list4.png"),
          title: "“爱润心田”心理咨询公益项目",
          time: "2020-04-24"
        },
        {
          img: require("@static/images/list4.png"),
          title: "“爱润心田”心理咨询公益项目",
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
    }
  }
};
</script>

<style lang="scss" scoped>
.service-page {
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