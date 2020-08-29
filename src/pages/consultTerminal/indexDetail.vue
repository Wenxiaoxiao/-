<template>
  <div class="consult-index-detail">
    <div class="top-head">
        <img src="@static/images/teacher_icon.png" class="left-img"/>
        <div class="right-des">
            <div class="name">张老师</div>
            <div class="txt">状态：已就诊</div>
        </div>
    </div>
    <div class="userInfos">
        <div class="design-title"><i></i><span>个人档案</span></div>
        <div class="txt">
            姓名：XXXX
        </div>
        <div class="txt">
            手机号：XXX-XXXX-XXXX
        </div>
        <div class="txt">
            备注：XXXXXXXXXXXXX
        </div>
        <div class="expand-bar" v-show="showExpandBar" @click="showExpandBar=false;">--展开内容--</div>
    </div>
    <div class="steps" v-for="(item,i) in list" :key="i">
        <div class="design-title"><i></i><span>{{item.title}}</span></div>
        <div v-if="item.children" class="qa">
            <div v-for="(qa,m) in item.children" :key="m">
                <div class="qa-q">{{qa.q}}</div>
                <div class="qa-a">{{qa.a}}</div>
            </div>
        </div>
        <div v-else class="txt">{{item.content}}</div>
    </div>
    <div class="steps" v-for="(item,i) in flexible" :key="'tmp-'+i" v-show="type!=2">
        <div class="design-title"><i></i><span>{{item.title}}</span></div>
        <div class="txt" v-if="type==0">{{item.content}}</div>
        <div class="txt" v-if="type==1">
            <textarea :placeholder="item.placeholder"></textarea>
        </div>
    </div>
    <div class="sub-btn" v-show="type==1">就诊完成</div>
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
        list:[
            {
                title:'阶段评估:第三阶段',
                children:[
                    {
                        q:'1.问题1XXXXXXXXXXX?',
                        a:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文...'
                    },
                    {
                        q:'2.问题2XXXXXXXXXXX?',
                        a:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文...'
                    },
                    {
                        q:'3.问题3XXXXXXXXXXX?',
                        a:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文...'
                    },
                ]
            },
            {
                title:'个人描述',
                content:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文...'
            },
            {
                title:'预约就诊时间',
                content:'今天  13:00-15:00'
            },
        ],
        flexible:[
            {
                title:'客户诊断报告',
                placeholder:'该报告将发送给客户',
                content:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字1.文字文字文字文字文字文字文字文字文字文字2.文字文字文字文字文字文字文字文字文字文字'
            },
            {
                title:'留档报告',
                placeholder:'留档供您自己查看',
                content:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文...'
            },
        ]
    };
  },
  mounted() {
    this.type=this.$route.query.type;//1,待就诊,2已取消,0已就诊
  },
  methods: {
    goReplyDetail(){
        this.$router.push({
            path:'/replyDetail'
        })
    },
    tabChange(){
        
    }
  }
};
</script>

<style lang="scss">
.consult-index-detail{
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
    }
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
    .userInfos{
        position: relative;
        .txt{
            font-size: 28px;
            line-height: 42px;
            color: #333333;
        }
        .expand-bar{
            position:absolute;
            bottom:0;
            left:0;
            width:r(690);
            height:r(200);
            line-height: r(200);
            text-align: center;
            font-size: r(28);
            color:#999;
            background-image: linear-gradient(to bottom,rgba(255,255,255,0.2) 0%,rgba(255,255,255,1) 50%);
        } 
    }
    .steps{
        margin-top:r(20);
        .qa{
            font-size: 28px;
            color: #333;
            line-height: 42px;
        }
        .txt{
            font-size: 28px;
            color: #333;
            line-height: 42px;
            textarea{
                width: 690px;
                height: 300px;
                background: #F5F5F5;
                resize: none;
                padding:r(24) r(30);
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
        margin-top: 71px;
    }
}
</style>
