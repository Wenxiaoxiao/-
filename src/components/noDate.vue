<template>
  <div class="noDateBox">
       <!-- <img src="@static/images/noDate.png" /> -->
       <img/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.noDateBox{
  margin-top: r(150);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #999999;
  img {
    width: 50%;
    margin-left: -50px;
    margin-bottom: r(20);
  }
}
</style>