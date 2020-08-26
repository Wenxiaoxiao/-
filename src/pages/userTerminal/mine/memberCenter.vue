<template>
  <div class="memberCenter">
    <div class="content">
      <div class="top">
        <div>终身制会员</div>
        <div>XX元终身享用</div>
        <div class="card">
          <img src="@static/images/mineLogo.png" alt="">
          <div class="dsc">
            <div>我的会员</div>
            <div>您还不是会员，立即开通会员</div>
          </div>
        </div>
      </div>
      <div class="content-text">
        <common-title color="#FFDC3D">会员权益</common-title>
        <p>
          1.文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字<br>
          2.文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字<br>
          3.文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文文字文字文字文字文字文<br>
        </p>
      </div>
    </div>
    <div class="btn-container">
      <van-button round block color="#262932">确认并开通</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'memberCenter',
    components: {
      'common-title': () => import('@/components/common-title')
    }
  }
</script>

<style lang="scss" scoped>
  .memberCenter{
    height: 100vh;
    .content{
      height: calc(100vh - 54PX);
    }
    .content-text{
      padding: 120px 39px 0;
      p{
        text-align: justify;
        font-size: 28px;
        line-height: 48px;
        color: #333;
      }
    }
    .btn-container{
      padding: 0 28px;
    }
    .top{
      position: relative;
      height: 331px;
      border-bottom: 11px solid #eee;
      background: #262932;
      &>div{
        text-align: center;
        color: #FFDC3D;
        &:first-child{
          font-size: 42px;
          font-weight: 400;
        }
        &:nth-child(2){
          font-size: 48px;
        }
      }
      .card{
        display: flex;
        padding: 30px;
        border-radius: 16px;
        background: #fff;
        width: calc(100% - 62px);
        left: 50%;
        transform: translateX(-50%);
        color: #333;
        img{
          height: 120px;
          width: 120px;
          margin-right: 20px;
        }
        position: absolute;
        bottom: -80px;
        .dsc{
          padding-top: 6px;
          text-align: left;
          &>div:first-child{
            height:45px;
            font-size:32px;
            font-weight:bold;
            line-height:45px;
          }
          &>div:last-child{
            height:40px;
            font-size:28px;
            font-weight:400;
            line-height:40px;
            margin-top: 8px;
          }
        }
      }
    }
  }
</style>