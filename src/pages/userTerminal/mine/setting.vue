<template>
  <div class="setting full-page">
    <van-cell title="意见反馈" is-link to="/suggestion" />
    <van-cell title="退出登录" is-link />
  </div>
</template>

<script>
export default {
  name: "setting"
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