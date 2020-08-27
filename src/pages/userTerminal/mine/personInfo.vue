<template>
  <div class="personInfo full-page">
    <div class="content">
      <img src="@static/images/mineLogo.png" alt="" class="logo">
      <div class="title">基本信息</div>
      <div class="fields">
        <common-field label="昵称">
          <van-field v-model="nickname"/>
        </common-field>
        <common-field label="个性签名">
          <van-field v-model="title"/>
        </common-field>
      </div>
    </div>
    <div class="btn-container">
      <van-button round block color="#1574F6">保存</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'personInfo',
    components: {
      'common-field': ()=> import('../../../components/common-field')
    },
    data() {
      return {
        title: '世界大得不可以去拥抱',
        nickname: 'Ellison'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .content{
    height: calc(100vh - 54PX);
    padding-top: 80px;
    .logo{
      height: 200px;
      width: 200px;
      display: block;
      margin: 0 auto;
      margin-bottom: 37px;
    }
    .title{
      height:45px;
      font-size:32px;
      font-weight:400;
      line-height:45px;
      color: #999;
      text-align: center;
    }
    .fields{
      margin-top: 60px;
      padding: 0 80px;
    }
  }
  .btn-container{
    padding: 0 28px;
  }
</style>