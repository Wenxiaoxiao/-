<template>
  <div class="integral">
    <div class="top">
      <div>现有积分</div>
      <div>3,242</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'integral'
  }
</script>

<style lang="scss" scoped>
  .integral{
    min-height: 100vh;
    padding-top: 92px;
    .top{
      text-align: center;
      >div{
        height:45px;
        font-size:32px;
        font-weight:400;
        line-height:45px;
        // &:
      }
    }
  }
</style>