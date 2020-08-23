<template>
  <div class="subscribe-page">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../static/images/sub-swiper.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/images/sub-swiper.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/images/sub-swiper.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/images/sub-swiper.png" alt="">
      </van-swipe-item>
    </van-swipe>


    <div class="sub-list">
      <div class="sub-item" v-for="(item,index) in items" :key="index">
        <img src="../../static/images/teacher_icon.png" alt="">
        <div class="content">
          <div>张老师</div>
          <div>荣誉证书/资质证书</div>
          <div>
            <a href="javascript:void(0)">预约</a>
          </div>
        </div>
      </div>
    </div>
    <app-nav nav="1"></app-nav>
  </div>
</template>

<script>
  export default {
    name: 'Subscribe',
    components:{
      'app-nav': () => import('@/components/nav/nav.vue')
    },
    data() {
      return {
        items: 3
      }
    },
  }
</script>
// <style lang="scss">
//   /deep/ .van-swipe__indicator--active{
//     width: 14px!important;
//     border-radius: 6px;
//   }
// </style>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    height: 410px;
    img{
      height: 100%;
      width: 100%;
      object-fit: fill;
    }

  }
  // .my-swipe >>> .van-swipe__indicator--active{
  //   width: 14px!important;
  //   border-radius: 6px;
  // }
  // class="van-swipe__indicators"
  .sub-list{
    padding: 0 30px;
    .sub-item{
      display: flex;
      padding: 40px 0;
      border-bottom: 1px solid#ccc;
      &>img{
        height: 156px;
        width: 156px;
        margin-right: 30px;
      }
      .content{
        flex: 1;
        div:nth-child(1){
          color: #333;
          font-size: 28px;
          font-weight: bold;
          line-height: 42px;
        }
        div:nth-child(2){
          color:#666;
          font-size: 24px;
          margin-top: 8px;
        }
        div:last-child{
          padding-top: 17px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          a{
            height: 56px;
            width: 136px;
            border: 1px solid;
            color: #1574f6;
            text-align: center;
            font-size: 24px;
            line-height: 56px;
            background: rgba(21,116,246,0.06);
            border-radius: 28px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>