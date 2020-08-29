<template>
  <div class="personalInfo">
    <img src="@static/images/mineLogo.png" alt="" class="user-logo">
    <common-field label="咨询师名">
        <van-field v-model="name"/>
    </common-field>
    <common-field label="个性签名">
        <van-field v-model="sign"/>
    </common-field>
    <common-field label="咨询师简介">
    <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入......"/>
    </common-field>
    <div class="sub-btn" @click="submit">保存</div>
  </div>
</template>

<script>
  export default {
    name: 'personalInfo',
    components: {
      'common-field': ()=> import('../../../components/common-field')
    },
    data(){
        return{
            name:'',
            sign:'',
            message:''
        }
    },
    methods:{
        submit(){
            this.$router.push({
                path:'/home'
            })
        }
    }
  }
</script>

<style lang="scss" scoped>
.personalInfo{
    height: 100vh;
    background: #fff;
    padding: 80px 66px 60px 80px;
    position: relative;
    .user-logo{
        width: 200px;
        margin: 0 auto;
        display: block;
        margin-bottom: 63px;
    }
    .sub-btn{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom:60px;
        width: 690px;
        height: 88px;
        background: #1574F6;
        border-radius: 44px;
        box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
        color: #fff;
        font-size: 32px;
        line-height: 88px;
        text-align: center;
        margin: 0 auto;
        margin-top:48px;
    }
}
</style>