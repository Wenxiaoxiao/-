<template>
  <div class="container"></div>
</template>

<script>
let vm;
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    login(){
      let code=this.$route.query.code;
      let state=this.$route.query.state;
      this.$http({
        url: "/login/login",
        type:"GET",
        data:{
          code:code,
          state:state
        }
      }).then(
        data => {
          // 成功回调
          this.$notice.msg('登录成功！');
          let redirect_url=sessionStorage.oldUrlName;
          if(redirect_url&&redirect_url.indexOf('login')===-1){
            location.replace(redirect_url)
          }else{
            location.replace('/')
          }
        },
        error => {
          // 错误回调
          console.log(error);
        }
      );
    }
  },
  created() {
    vm = this;
    this.login()
  }
};
</script>
<style lang="scss" scoped>

</style>