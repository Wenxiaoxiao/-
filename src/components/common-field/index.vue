<template>
  <div class="common-filed">
    <label class="label" for>{{label}}</label>
    <div class="input">
      <slot></slot>
      <van-icon v-if="link" name="arrow-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: "common-filed",
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.common-filed {
  display: flex;
  align-items: baseline;
  font-size: 32px;
  color: #999;
  .label {
    width: 170px;
  }
  .input {
    width: calc(100% - 170px);
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
  }
}
</style>