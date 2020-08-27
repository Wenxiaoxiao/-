<template>
  <div class="subYourInfo-page">
    <div class="info-items" v-for="(item,i) in infoList" :key="i">
      <div class="design-title">
        <i></i>
        <span>{{item.name}}</span>
      </div>
      <div class="info-item" v-for="(val,m) in item.child" :key="m">
          <div class="item-title">{{val.name}}<span>{{val.des}}</span></div>
          <input v-if="val.type==1" type="text"/>
          <input v-else-if="val.type==2" type="phone"/>
          <textarea v-else-if="val.type==3" type="phone"></textarea>
      </div>
    </div>
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
  methods: {}
};
</script>

<style lang="scss" scoped>
.subYourInfo-page {
  min-height: 100vh;
  background: #fff;
  .info-items {
    padding:r(0) r(30);
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
}
</style>