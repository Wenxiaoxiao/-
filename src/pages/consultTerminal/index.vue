<template>
  <div class="index-page">
    <van-search
    v-model="searchValue"
    shape="round"
    background="#fff"
    placeholder="请输入搜索关键词"
    />
    <van-tabs class="lists-tabs" animated @click="tabChange">
    <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
        <app-list :listData="tmpList"></app-list>
    </van-tab>
    </van-tabs>
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav1.vue";
import list from "@/components/consultList.vue";
export default {
  components: {
    "app-nav": nav,
    "app-list":list
  },
  data() {
    return {
        searchValue:"",
        tabs:[
            {
                name:'待就诊'
            },
            {
                name:'已就诊'
            },
            {
                name:'已取消'
            }
        ],
        tmpList:[{
            img:require('@static/images/list.png'),
            title:'症状是强迫性重复的结果',
            tags:['原因','思维','有效'],
            time:'2020-04-24'
        },{
            img:require('@static/images/list.png'),
            title:'症状是强迫性重复的结果1',
            tags:['原因','思维'],
            time:'2020-04-24'
        },{
            img:require('@static/images/list.png'),
            title:'症状是强迫性重复的结果1',
            tags:['原因'],
            time:'2020-04-24'
        }],
        location: location,
        list: [] //列表数据
    };
  },
  mounted() {

    
  },
  methods: {
    tabChange(){
        
    },
    goUrl(path){
        this.$router.push({
            path:path
        })
    }
  }
};
</script>

<style lang="scss">
.index-page{
    min-height: 100vh;
    background: #fff;
    .lists-tabs{
        .van-tabs__line{
            background: #1574F6;
        }
    }
}
</style>
