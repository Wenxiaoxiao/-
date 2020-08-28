<template>
  <div class="subscribeList full-page">
    <div class="list">
      <div class="list-item">
        <div class="item-content">
          <img src="@static/images/teacher_icon.png" alt="">
          <div class="item-dsc">
            <div class="item-title"><span>张老师</span><span>2020-10-23 13:24</span></div>
            <div>就诊时间：2020-10-30  13:00-15:00</div>
            <div>地址:XXXXXXXXXXXXXXXXXXXXX</div>
            <div>付款：3000.00元 或 234000积分</div>
            <div>状态：<span :class="{payed:false,unPay:true}">未付款</span></div>
          </div>
        </div>
        <div class="btns">
          <div class="status">30分钟未付款后自动取消</div>
          <div>
            <a href=":;">付款</a>
            <a href=":;">取消订单</a>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="item-content">
          <img src="@static/images/teacher_icon.png" alt="">
          <div class="item-dsc">
            <div class="item-title"><span>张老师</span><span>2020-10-23 13:24</span></div>
            <div>就诊时间：2020-10-30  13:00-15:00</div>
            <div>地址:XXXXXXXXXXXXXXXXXXXXX</div>
            <div>付款：3000.00元 或 234000积分</div>
            <div>状态：<span :class="{payed:false,unPay:true}">未付款</span></div>
          </div>
        </div>
        <div class="btns">
          <div class="status">30分钟未付款后自动取消</div>
          <div>
            <a href=":;">付款</a>
            <a href=":;">取消订单</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'subscribeList',
    data() {
      return {
        status: 'payed'  //'unPay','finish'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list{
    padding: 0 30px;
  }
  .list-item{
    padding: 40px 0 25px;
    border-bottom: 1px solid #ccc;
    .btns{
      display: flex;
      align-items: center;
      .status{
        height:33px;
        font-size:24px;
        font-weight:400;
        line-height:33px;
        color: #999;
        flex: 1;
      }
      >div{
        width: 292px;
        display: flex;
        justify-content: space-between;
      }
      a{
        height: 56px;
        width: 136px;
        border: 1px solid #ccc;
        color: #666;
        text-align: center;
        font-size: 24px;
        line-height: 56px;
        border-radius: 28px;
        box-sizing: border-box;
      }
    }
    .item-content{
      display: flex;
      .item-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        >span:first-child{
          height:42px;
          font-size:28px;
          font-weight:bold;
          line-height:40px;
        }
        >span:last-child{
          font-size:20px;
          color: #999;
        }
      }
      .item-dsc >div:not(:first-of-type){
        height:33px;
        font-size:24px;
        color: #999;
        font-weight:400;
        line-height:33px;
        .payed{
          color: #999;
        }
        .unPay{
          color: #1574F6
        }
      }
      >img{
        height: 156px;
        width: 156px;
        margin-right: 30px;
      }
    }
  }
</style>