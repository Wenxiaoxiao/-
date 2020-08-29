<template>
<div class="work-period-page">
    <van-collapse v-model="activeNames" class="day-wrapper">
        <van-collapse-item  v-for="(day,m) in daylist" :key="m" class="day-item">
           <template #title>
            <div><span class="design-line"></span>{{day.name}}</div>
           </template>
           <div class="time-item" v-for="(time,n) in day.timelist" :key="'time_'+n" @click="time.chosed=!time.chosed">
               {{time.period}}
               <van-icon name="success" class="success-ico" v-show="time.chosed"/>
           </div>
        </van-collapse-item>
    </van-collapse>
    <div class="total-time">- 已选{{totalTime}}小时每日出诊时间 -</div>
    <div class="sub-btn" @click="submit">保存</div>
</div>
</template>
<script>
export default {
    components: {
      
    },
    data() {
      return {
        totalTime:21,
        activeNames:['1'],
        daylist:[
            {
                name:'2020-08-05（周三）',
                timelist:[
                    {period:'08:00-09:00',chosed:false},
                    {period:'09:00-10:00',chosed:true},
                    {period:'10:00-11:00',chosed:true},
                    {period:'11:00-12:00',chosed:true},
                    {period:'12:00-13:00',chosed:true},
                    {period:'13:00-14:00',chosed:true},
                    {period:'14:00-15:00',chosed:true},
                    {period:'15:00-16:00',chosed:true}
                ]
            },
            {
                name:'2020-08-08（周六）',
                timelist:[
                    {period:'08:00-09:00',chosed:false},
                    {period:'09:00-10:00',chosed:true},
                    {period:'10:00-11:00',chosed:true},
                    {period:'11:00-12:00',chosed:true},
                    {period:'12:00-13:00',chosed:true},
                    {period:'13:00-14:00',chosed:true},
                    {period:'14:00-15:00',chosed:true},
                    {period:'15:00-16:00',chosed:true}
                ]
            },
            {
                name:'2020-08-09（周日）',
                timelist:[
                    {period:'08:00-09:00',chosed:false},
                    {period:'09:00-10:00',chosed:true},
                    {period:'10:00-11:00',chosed:true},
                    {period:'11:00-12:00',chosed:true},
                    {period:'12:00-13:00',chosed:true},
                    {period:'13:00-14:00',chosed:true},
                    {period:'14:00-15:00',chosed:true},
                    {period:'15:00-16:00',chosed:true}
                ]
            }
        ]
      }
    }, 
    methods:{
        submit(){
            this.$router.push({
                path:'/workTime'
            })
        }
    }
}
</script>
<style lang="scss">
.work-period-page{
    min-height:100vh;
    background:#fafafa;
    padding-bottom: 60px;
    .day-wrapper{
        .day-item{
            .design-line{
                display:inline-block;
                width:r(4);
                height:r(34);
                background: #1574F6;
                border-radius: r(4);
                vertical-align: middle;
                margin-right:r(16);
            }
            .van-collapse-item__content{
                padding-top:0px;
                padding-bottom: 0px;
            }
            .time-item{
                font-size: 30px;
                color: #666;
                height: 90px;
                line-height: 90px;
                border-bottom:1px solid #ebedf0;
                padding-left: 57px;
                position: relative;
                .success-ico{
                    position: absolute;
                    right: 0;
                    top:50%;
                    transform: translateY(-50%);
                    color: #1574F6;
                }
            }
            .time-item:nth-last-child(1){
                border:0px;
            }
        }
    }
    .total-time{
        font-size: 32px;
        color: #666;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin-top:90px;
    }
    .sub-btn{
        width: 690px;
        height: 88px;
        background: #1574F6;
        border-radius: 44px;
        box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
        color: #fff;
        font-size: 32px;
        line-height: 88px;
        text-align: center;
        margin: 0 auto;
        margin-top:48px;
    }
}
</style>