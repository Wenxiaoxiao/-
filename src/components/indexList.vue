<template>
  <div class="lists">
    <div v-for="(item,i) in listData" :key="i" class="item" @click="goDetail">
        <div class="left">
            <img :src="item.img"/>
        </div>
        <div class="right">
            <div class="tit">{{item.title}}</div>
            <div class="tags">
                <span v-for="(dot,i) in item.tags" :key="i">{{dot}}</span>
            </div>
            <div class="time">{{item.time}}</div>
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
              path:'/HomeDetail'
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
            margin-right:r(20);
            &>img{
                width:r(250);
                height:r(150);
            }
        }
        .right{
            float:left;
            .tit{
                font-size:r(28);
                line-height:r(42);
                color:#333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .tags{
                height:r(72);
                padding:r(16) 0;
                &>span{
                    display: inline-block;
                    width:r(100);
                    border-radius:r(21);
                    height:r(40);
                    line-height:r(40);
                    text-align: center;
                    margin-right:r(20);
                }
                &>span:nth-child(1){
                    background:rgba(21,116,246,0.1);
                    color:#1574F6;
                }
                &>span:nth-child(2){
                    color:#4BD5AB;
                    background:rgba(75,213,171,0.1);
                }
                &>span:nth-child(3){
                    color:#FFDC3D;
                    background:rgba(255,220,61,0.1);
                }
            }
            .time{
                font-size: r(20);
                color:#999;
                line-height: r(28);
                text-align: right;
            }
        }
    }
    .item:nth-last-child(1){
        border:none;
    }
}
</style>
