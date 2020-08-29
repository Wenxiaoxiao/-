<template>
  <div class="index-page">
    <van-search
    v-model="searchValue"
    shape="round"
    background="#fff"
    placeholder="请输入搜索关键词"
    />
    <van-tabs class="lists-tabs" animated @click="tabChange">
    <van-tab title="待就诊">
        <app-list :listData="tmpList"></app-list>
    </van-tab>
    <van-tab title="已就诊">
        <app-list :listData="tmpList1"></app-list>
    </van-tab>
    <van-tab title="已取消">
        <app-list :listData="tmpList2"></app-list>
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
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'待就诊',
            type:1
        },{
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'待就诊',
            type:1
        }],
        tmpList1:[{
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'已就诊',
            type:0
        },{
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'已就诊',
            type:0
        }],
        tmpList2:[{
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'已取消',
            type:2
        },{
            img:require('@static/images/userico.png'),
            name:'张三',
            booktime:'今天  13:00-15:00',
            des:'个人描述个人描述个人描述个个人描述个人描述个人描述...',
            status:'已取消',
            type:2
        }],
        location: location,
        list: [] //列表数据
    };
  },
  mounted() {

    
  },
  methods: {
    tabChange(index){
        
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
