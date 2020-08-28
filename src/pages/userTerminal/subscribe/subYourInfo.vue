<template>
  <div class="subYourInfo-page">
    <div class="info-items" v-for="(item,i) in infoList" :key="i">
      <div class="design-title">
        <i></i>
        <span>{{item.name}}</span>
        <van-button class="trance-btn" round size="small" plain hairline v-if="i>0">
        第{{i}}阶段 <van-icon name="arrow-down" />
        </van-button>
      </div>
      <div class="info-item" v-for="(val,m) in item.child" :key="m">
          <div class="item-title">{{val.name}}<span>{{val.des}}</span></div>
          <input v-if="val.type==1" type="text"/>
          <input v-else-if="val.type==2" type="phone"/>
          <textarea v-else-if="val.type==3" type="phone"></textarea>
      </div>
    </div>
    <van-button icon="plus" class="newtrance-btn" round size="small" plain hairline @click="addTrance">
        新增阶段
    </van-button>
    <div class="sub-btn">提交（尚未完成）</div>
  </div>
</template>

<script>
export default {
  name: "subYourInfo",
  components: {},
  data() {
    return {
      //type:1,input-text;2input-phone;3textarea
      infoList: [
        {
          name: "个人信息",
          child: [
            {
              name: "姓名",
              type: 1
            },
            {
              name: "联系方式",
              type: 2
            },
            {
              name: "个人描述",
              des: "方便医师对您建立初步了解，提高服务质量",
              type: 3
            }
          ]
        },
        {
          name: "阶段评估",
          trance: "第一阶段",
          child: [
            {
              name: "1.问题1XXXXXXXXXXX?",
              type: 3
            },
            {
              name: "2.问题2XXXXXXXXXXX?",
              type: 3
            },
            {
              name: "3.问题3XXXXXXXXXXX?",
              type: 3
            }
          ]
        },
        {
          name: "阶段评估",
          trance: "第二阶段",
          child: [
            {
              name: "1.问题1XXXXXXXXXXX?",
              type: 3
            },
            {
              name: "2.问题2XXXXXXXXXXX?",
              type: 3
            },
            {
              name: "3.问题3XXXXXXXXXXX?",
              type: 3
            }
          ]
        }
      ]
    };
  },
  methods: {
      addTrance(){
          let tempItem = {
            name: "阶段评估",
            child: [
                {
                name: "1.问题1XXXXXXXXXXX?",
                type: 3
                },
                {
                name: "2.问题2XXXXXXXXXXX?",
                type: 3
                },
                {
                name: "3.问题3XXXXXXXXXXX?",
                type: 3
                }
            ]
            };
          this.infoList.push(tempItem);
      }
  }
};
</script>

<style lang="scss" scoped>
.subYourInfo-page {
  min-height: 100vh;
  background: #fff;
  padding-bottom:60px;
  .info-items {
    padding:r(0) r(30);
    .design-title {
      height: r(81);
      line-height: r(81);
      font-size: 0;
      position: relative;
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
      .trance-btn{
          position:absolute;
          right: 0;
          top:50%;
          transform: translateY(-50%);
          width: 210px;
          height: 64px;
          font-size: 24px;
      }
    }
    .info-item{
        .item-title{
            height: 40px;
            font-size: 28px;
            line-height: 40px;
            color: #333333;
            margin: 16px 0;
        }
        input{
            background: #F5F5F5;
            width: 690px;
            height: 78px;
            padding:r(20) r(30);
        }
        textarea{
            width: 690px;
            height: 300px;
            background: #F5F5F5;
            resize: none;
            padding:r(24) r(30);
        }
    }
  }
  .newtrance-btn{
      width: 210px;
      height: 64px;
      line-height: 64px;
      margin:0px auto;
      margin-top: 60px;
      display: block;
      .van-icon{
          color: #1574F6;
          font-size: 24px;
      }
  }
  .sub-btn{
    width: 690px;
    height: 88px;
    background: #E5E5E5;
    box-shadow: 0px 4px 20px rgba(156, 148, 148, 0.35);
    border-radius: 44px;
    margin: 0 auto;
    font-size: 32px;
    color: #999999;
    text-align: center;
    line-height: 88px;
    margin-top: 101px;
  }
}
</style>