<template>
  <div class="lists">
    <div v-for="(item,i) in listData" :key="i" class="item" @click="goDetail">
        <div class="left">
            <div class="tit">{{item.title}}</div>
            <div class="tags">
                <span v-for="(dot,i) in item.tags" :key="i">{{dot}}</span>
            </div>
            <div class="time">{{item.time}}</div>
        </div>
        <div class="right">
            <img :src="item.img"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      listData:Array,
      detail:String
  },
  mounted() {},
  methods: {
      goDetail(){
          this.$router.push({
              path:this.detail||'/HomeDetail'
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
        border-bottom:r(1) solid #ebedf0;
        .left{
            width: 420px;
            float: left;
            .tit{
                height: 80px;
                font-size:r(28);
                line-height:r(40);
                color:#333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
            }
            .time{
                font-size: r(20);
                color:#999;
                line-height: r(28);
                text-align: left;
                margin-top: 8px;
            }
        }
        .right{
            float:right;
            width: 250px;
            height: 150px;
            &>img{
                width: 250px;
            }
        }
    }
    .item:nth-last-child(1){
        border:none;
    }
}
</style>
