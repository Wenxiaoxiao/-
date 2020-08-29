<template>
  <div class="pubilsh-detail">
    <div class="top-tit">
        <div class="line-1">孩子厌学自闭，拒绝沟通怎么办？</div>
        <div class="line-tags">
            <span>厌学</span>
            <span>自闭</span>
            <span>0沟通</span>
        </div>
        <div class="line-2">发布时间：2019-12-30</div>
    </div>
    <div class="detailContent">
        <div class="main-content">
            <img src="@static/images/detail.png"/>
            我今年39岁，有个儿子，今年上初二，由于是独子，所以从小我和他爸比较疼爱他，他爸爸更是当宝贝样宠着，孩子是我们唯一的希望，我孩子小学的时候学还好，可是不知道为什么，我孩子上了初一以后，成绩大幅下滑，我找他们老师了解情况才知道，我孩子不爱学习了，爱玩电脑了，经常在电脑上玩游戏，甚至还会跟些混混在一起抽烟，整天无所事事，即使在教室里也经常心不在焉，根本不想学习的事，做为家长看到孩子这样，真是心碎、心痛。
        </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
      
  },
  data() {
    return {
        inputText:null
    };
  },
  mounted() {
    
  },
  methods: {
    tabChange(){
        
    }
  }
};
</script>

<style lang="scss">
.pubilsh-detail{
    width: r(750);
    height:100vh;
    background:#fff;
    overflow-y:auto;
    padding:r(40) r(30);
    .top-tit{
        width:r(690);
        padding-bottom: 40px;
        position:relative;
        border-bottom: r(1) solid #ebedf0;
        .line-1{
            height:r(52);
            line-height:r(53);
            font-size:r(38);
            color:#333333;
        }
        .line-2{
            height:r(33);
            line-height:r(33);
            font-size:r(24);
            color:#999999;
        }
        .line-tags{
            height: 40px;
            margin: 24px 0;
            &>span{
                display: inline-block;
                width: 100px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                margin-right: 20px;
                border-radius: 21px;
                font-size: 20px;
            }
            &>span:nth-child(1){
                background: rgba(255, 220, 61, 0.1);
                color: #FFDC3D;
            }
            &>span:nth-child(2){
                background: rgba(75, 213, 171, 0.1);
                color: #4BD5AB;
            }
            &>span:nth-child(3){   
                background: rgba(251, 62, 62, 0.1);
                color: #FB3E3E;
            }
        }
    }
    .detailContent{
        position:relative;
        .main-content{
            padding:r(24) r(0) r(80);
            font-size:r(28);
            line-height:r(42);
            color:#333;
            img{
                width:r(690);
                margin:r(32) 0;
            }
        }
    }
}
</style>
