<template>
  <div class="lists">
    <div v-for="(item,i) in listData" :key="i" class="item" @click="goDetail(item.type)">
        <div class="left">
            <img :src="item.img"/>
        </div>
        <div class="right">
           <div class="name">{{item.name}}</div>
           <div class="time"><span class="s1">预约时间：</span><span class="s2">{{item.booktime}}</span></div>
           <div class="des"><span class="s1">个人描述：</span><span class="s2">{{item.des}}</span></div>
           <div class="status">状态：
               <span :class="item.status=='待就诊'?'active':''">{{item.status}}</span>
               <van-button class="goon-btn" v-if="item.status=='待就诊'" round color="rgba(21,116,246,0.06)">就诊完成</van-button>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      listData:Array
  },
  mounted() {},
  methods: {
    goDetail(type){
        this.$router.push({
            path:'/consultDetail',
            query:{type:type}
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.lists{
    padding:0 r(30);
    .item{
        padding:r(41) r(0) r(39);
        overflow: hidden;
        border-bottom:r(1) solid #ccc;
        .left{
            float:left;
            margin-right:r(30);
            &>img{
                width:r(156);
                height:r(156);
            }
        }
        .right{
            width:r(504);
            float: left;
            font-size: 24px;
            line-height: 33px;
            color: #666666;
            &>div{
                &>span{
                    display: inline-block;
                    font-size: 0;
                    vertical-align: top;
                }
                .s1{
                    font-size: 24px;
                    width: 120px;
                }
                .s2{
                    font-size: 24px;
                    width: 384px;
                }
            }
            .name{
                height: 42px;
                font-size: 28px;
                font-weight: bold;
                line-height: 40px;
                color: #333333;
            }
            .time{
                margin-top:8px;
            }
            .des{
                margin-top: 4px;
            }
            .status{
                margin-top: 24px;
                position: relative;
                span{
                    display: inline-block;
                    font-size: 24px;
                    &.active{
                        color: #1574F6;
                    }
                }
                .goon-btn{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #1574F6 !important;
                    border: 0px solid transparent;
                    // width: 136px;
                    height: 56px;
                    font-size: 24px;
                }
            }
        }
    }
    .item:nth-last-child(1){
        border:none;
    }
}
</style>
