<template>
  <div class="personRecord full-page">
    <div class="content">
      <common-field label="姓名">
        <van-field v-model="nickname"/>
      </common-field>
      <common-field label="年龄">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="性别">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="职业">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="学历">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="婚姻">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="手机号">
        <van-field v-model="title"/>
      </common-field>
      <common-field label="患病历程">
        <van-field
          v-model="message"
          rows="2"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="请输入......"/>
      </common-field>
    </div>
    <div class="btn-container">
      <van-button round block color="#1574F6">保存</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'personRecord',
    components: {
      'common-field': ()=> import('../../../components/common-field')
    },
  }
</script>

<style lang="scss" scoped>
  .content{
    height: calc(100vh - 54PX);
    padding: 60px 80px 0;
  }
  .btn-container{
    padding: 0 28px;
  }
</style>