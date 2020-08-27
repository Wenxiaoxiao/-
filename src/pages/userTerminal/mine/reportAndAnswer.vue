<template>
  <div class="reportAndAnswer full-page">
     <van-tabs class="lists-tabs" animated @click="tabChange">
        <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
          
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
  export default {
    name:'reportAndAnswer',
    data() {
      return {
        tabs: [
          {name: '就诊问答'},
          {name: '报告'}
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
  .van-tab--active{
    color: #1574F6;
  }
  .van-tabs__line{
    background:#1574F6;
    border-radius:r(2);
    width: 80px!important;
  }
</style>