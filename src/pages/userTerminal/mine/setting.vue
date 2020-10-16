<template>
  <div class="setting full-page">
    <van-cell title="意见反馈" is-link @click="goSug" />
    <van-cell title="退出登录" is-link />
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goSug() {
      this.$router.push({
        path: "/suggestion",
        query: { type: "user" }
      });
    }
  }
};
</script>
<style lang="scss">
.van-cell:last-child::after {
  display: inherit;
}
</style>
<style lang="scss" scoped>
.setting {
  padding-top: 30px;
}
</style>