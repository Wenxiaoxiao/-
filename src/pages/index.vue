<template>
  <div class="index">
    
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import tools from '../api/tools'
tools.refreshPageInios()
var vm;
export default {
  components: {
    "app-nav": nav
  },
  data() {
    return {
      location: location,
      list: [] //列表数据
    };
  },
  mounted() {
    vm = this;
    
  },
  methods: {
    
  }
};
</script>

<style lang="scss">

</style>
