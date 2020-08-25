<template>
    <div class="design-reply-box">
        <div class="blank-box"></div>
        <div class="input-wrapper">
            <van-field v-model="inputText" label="" class="design-input"/>
            <img  class="sendbtn" src="@static/images/send.png"/>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      
  },
  mounted() {},
  methods: {
     
  }
};
</script>

<style lang="scss" scoped>
.design-reply-box{
    width:r(750);
    height:r(132);
    background:#fff;
    .blank-box,.input-wrapper{
        width:r(750);
        height:r(132);
        background:#fff;
    }
    .input-wrapper{
        padding-top:r(22);
        padding-left:r(30);
        position: fixed;
        bottom: 0;
        left: 50%;
        transform:translateX(-50%);
    }
    .design-input{
        width:r(570);
        height:r(88);
        background: #F6F6F6;
        border-radius:r(44);
        font-size:r(34);
        float:left;
        margin-right: r(32);
    }
    .sendbtn{
        width:r(88);
        float:left;
    }
}
</style>
