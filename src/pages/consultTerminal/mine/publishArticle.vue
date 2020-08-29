<template>
  <div class="publishArticle-page">
    <div class="steps" v-for="(item,i) in flexible" :key="'tmp-'+i" v-show="type!=2">
        <div class="design-title"><i></i><span>{{item.title}}</span><b>{{item.subtitle}}</b></div>
        <div class="txt" v-if="item.type==1">
            <textarea :placeholder="item.placeholder"></textarea>
        </div>
        <div class="txt" v-else-if="item.type==0">
            <span @click="tag.chosed=!tag.chosed" :class="tag.chosed?'active tag':'tag'" v-for="(tag,m) in item.list" :key="'tag_'+m">{{tag.name}} <van-icon v-show="tag.chosed"  class="chosed-ico" name="checked" /></span>
        </div>
        <div class="txt" v-else-if="item.type==2">
            <input :placeholder="item.placeholder"/>
        </div>
    </div>
    <div class="sub-btn" @click="submit">发表</div>
  </div>
</template>

<script>
import replyBox from "@/components/replyBox.vue";
export default {
  components: {
      "reply-box":replyBox
  },
  data() {
    return {
        type:null,
        showExpandBar:true,
        flexible:[
            {
                title:'标题',
                placeholder:'请输入标题',
                type:2
            },
            {
                title:'标签',
                type:0,
                list:[
                    {name:'厌学',chosed:false},
                    {name:'自闭',chosed:false},
                    {name:'0沟通',chosed:false},
                    {name:'减压',chosed:false},
                    {name:'校园欺凌',chosed:false},
                    {name:'思维',chosed:false},
                    {name:'失眠',chosed:false},
                    {name:'心理',chosed:false},
                    {name:'神经',chosed:false},
                    {name:'咨询',chosed:false},
                    {name:'公益',chosed:false},
                    {name:'有效',chosed:false}
                ]
            },
            {
                title:'文章内容',
                placeholder:'请输入...',
                type:1
            }
        ]
    };
  },
  mounted() {
    
  },
  methods: {
    submit(){

    }
  }
};
</script>

<style lang="scss">
.publishArticle-page{
    width:r(750);
    min-height:100vh;
    background: #fff;
    padding:r(0) r(30);
    padding-bottom: r(40);
    .design-title{
        height:r(81);
        line-height:r(81);
        font-size: 0;
        &>span{
            display:inline-block;
            font-size:r(32);
            color:#333;
            vertical-align: middle;
        }
        &>i{
            display:inline-block;
            width:r(4);
            height:r(34);
            background: #1574F6;
            border-radius: r(4);
            vertical-align: middle;
            margin-right:r(16);
        }
        &>b{
            color: #999;
            font-size:r(32);
            font-weight: normal;
            vertical-align: middle;
            display: inline-block;
        }
    }
     .steps{
        padding-top:r(20);
        .txt{
            font-size: 0;
            color: #333;
            line-height: 42px;
            textarea{
                width: 690px;
                height: 300px;
                background: #F5F5F5;
                resize: none;
                padding:r(24) r(30);
                font-size: 28px;
            }
            input{
                width: 690px;
                height: 78px;
                background: #F5F5F5;
                resize: none;
                padding:r(24) r(30);
                font-size: 28px;
            }
            .tag{
                display: inline-block;
                width: 100px;
                height: 40px;
                line-height: 38px;
                border-radius: 21px;
                margin-right: 18px;
                margin-bottom: 20px;
                font-size: 20px;
                text-align: center;
                &.active{
                    border:r(1) solid #1574F6 !important;
                    position: relative;
                    .chosed-ico{
                        color: #1574F6;
                        position: absolute;
                        font-size: 24px;
                        right:-10px;
                        top: -10px;
                    }
                }
            }
            .tag:nth-child(1),.tag:nth-child(7){
                color: #FFDC3D;
                background: rgba(255, 220, 61, 0.1);
                border:r(1) solid rgba(255, 220, 61, 0.1);
            }
            .tag:nth-child(2),.tag:nth-child(8){
                color:#4BD5AB;      
                background: rgba(75, 213, 171, 0.1);
                border:r(1) solid rgba(75, 213, 171, 0.1);
            }
            .tag:nth-child(3),.tag:nth-child(9){
                color:#FB3E3E;
                background: rgba(251, 62, 62, 0.1);
                border:r(1) solid rgba(251, 62, 62, 0.1);
            }
            .tag:nth-child(4),.tag:nth-child(10){
                color:#D016FF;
                background: rgba(208, 22, 255, 0.1);
                border:r(1) solid rgba(208, 22, 255, 0.1);
            }
            .tag:nth-child(5),.tag:nth-child(11){
                color:#1574F6;
                background: rgba(21, 116, 246, 0.1);
                border:r(1) solid rgba(21, 116, 246, 0.1);
            }
            .tag:nth-child(6),.tag:nth-child(12){
                color:#1574F6;
                background: rgba(21, 116, 246, 0.1);
                border:r(1) solid rgba(21, 116, 246, 0.1);
                margin-right: 0px;
            }
        }
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
        margin-top:300px;
    }
}
</style>
