<template>
  <div class="index">
    <div class="product-list">
      <div class="product-lis" v-for="item in list" :key="item.id">
        <div class="product-title">{{item.typeName}}</div>
        <div
          class="product-li"
          v-for="child in item.products"
          @click="toggleDetail(child.code)"
          :key="child.id"
        >
          <img :src="child.shortImg" class="product-li-img" />
          <div class="product-li-title">{{child.name}}</div>
          <div class="product-li-desc lz-line2">{{child.goodness}}</div>
          <div class="product-li-m">
            <span>{{child.fee}}</span>
            元起
          </div>
          <i class="iconfont iconzhankai-xianxing"></i>
        </div>
      </div>
    </div>
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import tools from '../api/tools'
tools.refreshPageInios()
var vm;
export default {
  components: {
    "app-nav": nav
  },
  data() {
    return {
      location: location,
      list: [] //列表数据
    };
  },
  mounted() {

    //const loadings = this.$notice.loading("加载中...");
    vm = this;
    // this.$http({
    //   url: "/content/pros",
    //   type: "get"
    // }).then(res => {
    //   this.list = res.data;
    //   this.$notice.close(loadings);
    // });
    //this.getList();
    setTimeout(() => {
      this.$weixin.showWxBtns();
    },1000);
  },
  methods: {
    toggleDetail(code) {
      location.href = `/m/product/${code}`;
    },
    // 获取页面主题数据
    getList() {
      this.list = [
        {
          name: "雇主责任",
          data: [
            {
              img: require("@static/images/list/1.jpg"),
              title: "中意雇主责任险",
              desc: "覆盖行业广，全面保障员工权益",
              money: "48"
            },
            {
              img: require("@static/images/list/1.jpg"),
              title: "中意雇主责任险",
              desc:
                "覆盖行业广，全面保障员工权益覆盖行业广，全面保障员工权益覆盖行业广，全面保障员工权益",
              money: "48"
            },
            {
              img: require("@static/images/list/1.jpg"),
              title: "中意雇主责任险",
              desc: "覆盖行业广，全面保障员工权益",
              money: "48"
            }
          ]
        }
      ];
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
