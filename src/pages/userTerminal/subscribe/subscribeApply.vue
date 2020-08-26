<template>
  <div class="subscribeApply-page">
    <div class="top-head">
        <img src="@static/images/teacher_icon.png" class="left-img"/>
        <div class="right-des">
            <div class="name">张老师</div>
            <div class="txt">荣誉证书/资质证明</div>
            <div class="txt">服务类型：100/小时；180/两小时</div>
        </div>
    </div>
    <div class="applydetail">
        <div class="all-reply-title">
            <div class="design-title">
                <i></i>
                <span>预约时间</span>
            </div>
            <div class="design-date-picker">
                <van-cell :value="date" @click="show = true" is-link arrow-direction="up"/>
                <van-calendar v-model="show" @confirm="onConfirm" />
            </div>
        </div>
        <div class="applytimelist">
            <div v-for="(item,i) in ableTime" :key="i" :class="!item.can?'unable':item.chosed?'chosed':''">
                {{item.time}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'subscribeApply',
    components:{},
    data() {
      return {
        date:null,
        show: false,
        ableTime:[
        {time:'09:00-10:00',can:true,chosed:true},
        {time:'10:00-11:00',can:true},
        {time:'11:00-12:00',can:true},
        {time:'12:00-13:00',can:true},
        {time:'13:00-14:00',can:false}]
      }
    },
    mounted(){
        let now = new Date();
        this.date=`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;

    },
    methods:{
        formatDate(date) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        },
        onConfirm(date){
            this.show = false;
            this.date = this.formatDate(date);
        }
    }
  }
</script>
<style lang="scss" scoped>
.subscribeApply-page{
    height:100vh;
    background: #fff;
    padding:r(0) r(30);
    .top-head{
        height:r(237);
        padding:r(40) 0;
        border-bottom:r(1) solid #ccc;
        font-size: 0;
        .left-img{
            width:r(156);
            height:r(156);
            margin-right: r(30);
            vertical-align: middle;
        }
        .right-des{
            width:r(504);
            display: inline-block;
            vertical-align: middle;
            .name{
                height:r(42);
                font-size: r(28);
                line-height: r(42);
                color: #333;
                font-weight: bold;
                margin-bottom: r(8);
            }
            .txt{
                font-size: r(24);
                height: r(33);
                line-height:r(33);
                color: #666;
            }
        }
    }
    .applydetail{
        padding-top:r(30);
        .all-reply-title {
            position:relative;
            .design-date-picker{
                position:absolute;
                right: r(30);
                top:0;
                .van-cell{
                    border:r(1) solid #ccc;
                    padding:r(16) r(26) r(15) r(26);
                    border-radius: r(49);
                    font-size: r(24);
                    color: #333;
                }
                .van-cell::after{
                    border:none;
                }
            }
            .design-title {
                height: r(81);
                line-height: r(81);
                font-size: 0;
                & > span {
                    display: inline-block;
                    font-size: r(32);
                    color: #333;
                    vertical-align: middle;
                }
                & > i {
                    display: inline-block;
                    width: r(4);
                    height: r(34);
                    background: #1574f6;
                    border-radius: r(4);
                    vertical-align: middle;
                    margin-right: r(16);
                }
            }
        }
        .applytimelist{
            padding:r(30) r(20);
            overflow: hidden;
            &>div{
                width:190px;
                height:120px;
                background:rgba(255,255,255,1);
                box-shadow:0px 4px 10px rgba(0,0,0,0.08);
                border-radius:24px;
                float: left;
                margin-right: r(30);
                margin-bottom: r(30);
                font-size: 28px;
                line-height: 40px;
                padding:r(20) r(49);
                &.unable{
                    color: #fff;
                    background: #D2D6DF;
                    box-shadow:0px 4px 10px rgba(137,143,158,0.35);
                    text-decoration: line-through;
                }
                &.chosed{
                    color: #fff;
                    background: #1574F6;
                    box-shadow:0px 4px 10px rgba(21,116,246,0.35);
                }
            }
            &>div:nth-child(3n){
                margin-right: 0;
            }
        }
    }
}
</style>