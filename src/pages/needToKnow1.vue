<template>
  <div class="needToKnow" v-html="JsonData"></div>
</template>

<script>
export default {
  name: "needToKnow",
  data() {
    return {
      JsonData: null
    };
  },
  mounted() {
    let that = this;
    this.$ajaxList.doctorNotice(function(res) {
      that.JsonData = res;
    });
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.needToKnow {
  padding: 40px 30px;
  font-size: 28px;
  color: #333333;
  img {
    width: 100%;
    margin: 32px 0;
  }
  p {
    line-height: 42px;
  }
}
</style>