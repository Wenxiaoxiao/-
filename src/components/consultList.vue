<template>
  <div class="lists">
    <div v-for="(item,i) in listData" :key="i" class="item" @click="goDetail">
        <div class="left">
            <img :src="item.img"/>
        </div>
        <div class="right">
           <div class="name">{{item.name}}</div>
           <div class="time"><span class="s1">预约时间：</span><span class="s2">{{item.booktime}}</span></div>
           <div class="des"><span class="s1">个人描述：</span><span class="s2">{{item.des}}</span></div>
           <div class="status">状态：{{item.status}}</div>
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
      goDetail(){
          this.$router.push({
              path:'/consultDetail'
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
            }
        }
    }
    .item:nth-last-child(1){
        border:none;
    }
}
</style>
