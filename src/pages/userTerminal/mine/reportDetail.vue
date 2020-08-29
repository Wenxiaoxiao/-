<template>
  <div class="reportDetail full-page">
    <div class="top">
      <div class="report-title">
        XXXXXXXXX报告
      </div>
      <div class="sub-title">完成时间：2020-12-20 </div>
      <div class="sub-title">预约老师：XXXX老师 </div>
    </div>
    <div class="content">
      <common-title color="#1574F6">报告内容</common-title>
      <p>
        1.文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字<br>
        2.文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字<br>
        3.文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reportDetail',
    components: {
      'common-title': ()=> import('@/components/common-title')
    }
  }
</script>

<style lang="scss" scoped>
  .reportDetail{
    padding: 40px 22px;
    .top{
      padding: 0 8px 33px;
      border-bottom: 1px solid #ebedf0;
    }
    .content{
      padding: 40px 8px 20px;
      p{
        height:300px;
        font-size:28px;
        color: #333;
        font-weight:400;
        line-height:42px;
        margin-top: 24px;
      }
    }
  }
  .report-title{
    width:690px;
    height:42px;
    font-size:38px;
    color: #333;
    font-weight:bold;
    line-height:53px;
  }
  .sub-title{
    height:40px;
    font-size:28px;
    color: #999;
    font-weight:400;
    line-height:40px;
  }
</style>