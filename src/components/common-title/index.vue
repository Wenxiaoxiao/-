<template>
  <div class="common-title" :style="{'border-left': `2px solid ${color}`}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .common-title{
    height:45px;
    font-size:32px;
    font-weight:400;
    line-height:45px;
    padding-left: 10px;
  }
</style>