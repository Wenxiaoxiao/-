<template>
  <div class="index-page">
    <!-- <div class="center-search"></div> -->
    <van-search
      v-model="searchValue"
      class="center-search"
      shape="round"
      input-align="center"
      background="#fff"
      placeholder="请输入搜索关键词"
    />
    <van-tabs class="lists-tabs" animated @click="tabChange">
      <van-tab title="待就诊">
        <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 30px' }">
          <div class="daytime">
            2020年07月13日
            <br />今天
          </div>
        </van-divider>
        <app-list :listData="tmpList"></app-list>
      </van-tab>
      <van-tab title="已就诊">
        <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 30px' }">
          <div class="daytime">
            2020年07月13日
            <br />今天
          </div>
        </van-divider>
        <app-list :listData="tmpList1"></app-list>
      </van-tab>
      <van-tab title="已取消">
        <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 30px' }">
          <div class="daytime">
            2020年07月13日
            <br />今天
          </div>
        </van-divider>
        <app-list :listData="tmpList2"></app-list>
      </van-tab>
    </van-tabs>
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav1.vue";
import list from "@/components/consultList.vue";
export default {
  components: {
    "app-nav": nav,
    "app-list": list
  },
  data() {
    return {
      searchValue: "",
      tabs: [
        {
          name: "待就诊"
        },
        {
          name: "已就诊"
        },
        {
          name: "已取消"
        }
      ],
      tmpList: [
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "个人描述个人描述个人描述个个人描述个人描述个人描述...",
          status: "待就诊",
          type: 1
        },
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "个人描述个人描述个人描述个个人描述个人描述个人描述...",
          status: "待就诊",
          type: 1
        }
      ],
      tmpList1: [
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "我是诊断报告我是诊断报告我是诊断报告我是诊断报告...",
          status: "已就诊",
          type: 0
        },
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "我是诊断报告我是诊断报告我是诊断报告我是诊断报告...",
          status: "已就诊",
          type: 0
        }
      ],
      tmpList2: [
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "个人描述个人描述个人描述个个人描述个人描述个人描述...",
          status: "已取消",
          type: 2
        },
        {
          img: require("@static/images/userico.png"),
          name: "张三",
          booktime: "今天  13:00-15:00",
          des: "个人描述个人描述个人描述个个人描述个人描述个人描述...",
          status: "已取消",
          type: 2
        }
      ],
      location: location,
      list: [] //列表数据
    };
  },
  mounted() {},
  methods: {
    tabChange(index) {},
    goUrl(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<style lang="scss">
.index-page {
  min-height: 100vh;
  background: #fff;
  .center-search {
    .van-field__left-icon {
      display: none;
    }
    .van-cell {
      background-image: url("../../static/images/search.png");
      background-repeat: no-repeat;
      background-position: 180px center;
      background-size: 29px 29px;
    }
  }
  .van-tabs__wrap {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  }
  .van-tab--active {
    color: #1574f6;
  }
  .lists-tabs {
    .van-tabs__line {
      background: #1574f6;
      height: r(5);
      width: 100px !important;
    }
  }
  .daytime {
    text-align: center;
  }
}
</style>
