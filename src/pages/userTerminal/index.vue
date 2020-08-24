<template>
  <div class="index">
    <div class="index-contains">
        <div class="top-header">
            <img src="@static/images/bg.png"/>
        </div>
        <div class="top-nav">
            <div>
                <img src="@static/images/icon3.png"/>
                <div>知识</div>
            </div>
            <div>
                <img src="@static/images/icon2.png"/>
                <div>实操</div>
            </div>
            <div>
                <img src="@static/images/icon1.png"/>
                <div>咨询</div>
            </div>
        </div>
        <div class="sub-title">#顺其自然、为所当为#</div>
        <van-tabs class="lists-tabs" animated @click="tabChange">
        <van-tab v-for="(tab,index) in tabs" :title="tab.name" :key="index">
            <app-list :listData="tmpList"></app-list>
        </van-tab>
        </van-tabs>
    </div>
    <app-nav nav="0"></app-nav>
  </div>
</template>

<script>
import nav from "@/components/nav/nav.vue";
import list from "@/components/indexList.vue";
var vm;
export default {
  components: {
    "app-nav": nav,
    "app-list":list
  },
  data() {
    return {
        tabs:[
            {
                name:'最新'
            },
            {
                name:'系统理念'
            },
            {
                name:'重置理念'
            },
            {
                name:'森田疗法实操'
            },
            {
                name:'现象分析'
            },
            {
                name:'学员故事'
            },
            {
                name:'家长须知'
            },
            {
                name:'公益活动'
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
    vm = this;
    
  },
  methods: {
    tabChange(){
        
    }
  }
};
</script>

<style lang="scss">
.index-contains{
    width:r(750);
    min-height:100vh;
    background:#fff;
    .top-header{
        width:r(750);
        height:r(458);
        &>img{
            width:r(750);
        }
    }
    .top-nav{
        width:r(690);
        height:r(143);
        background:#fff;
        border-radius:r(16);
        box-shadow:r(0) r(0) r(10) rgba(0,0,0,0.1);
        margin:0 auto;
        margin-top:r(-95);
        position:relative;
        z-index: 1;
        overflow: hidden;
        padding:r(34) r(0) r(22);
        &>div{
            float:left;
            width:33.33%;
            text-align: center;
            font-size: 0;
            img{
                width:r(64);
            }
            div{
                height:r(33);
                color:#666;
                font-size: r(24);
            }
        }
    }
    .sub-title{
        font-size:r(20);
        color:#333;
        text-align: center;
        line-height:r(60);
    }
    .lists-tabs{
        .van-tab{
            height:r(88);
        }
        .van-tabs__line{
            background:linear-gradient(88deg,rgba(21,116,246,1) 0%,rgba(21,116,246,0.24) 100%);
            border-radius:r(2);
        }
    }
}
</style>
