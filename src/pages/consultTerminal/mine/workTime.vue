<template>
  <div class="work-time-page">
    <div class="design-title">
      <i></i>
      <span>当月出诊时间选择</span>
    </div>
    <van-cell title="选择多个日期" :value="text" @click="show = true" />
    <van-calendar v-model="show" :default-date="defaultDate" type="multiple" @confirm="onConfirm" />
    <!-- <div class="design-title">
      <i></i>
      <span>出诊周期</span>
    </div>
    <van-cell title="每周三，周六，周日" is-link to="workCycle" />-->
    <div class="design-title">
      <i></i>
      <span>出诊时间段</span>
    </div>
    <van-cell :title="'共计'+DesignTimes+'小时出诊时间'" v-show="ifShow" is-link to="workPeroid" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cycle: [3, 6, 7],
      DesignTimes: 0,
      DesignText: "",
      text: "",
      show: false,
      defaultDate: [],
      time_arr: [],
      ifShow: false
    };
  },
  mounted() {
    this.getDateList();
  },
  methods: {
    //获取初始time_arr
    getTime_Arr(daylist) {
      let that = this;
      daylist.map((item, index) => {
        if (index == daylist.length - 1) {
          that.getTimeList1(item.id, "last");
        } else {
          that.getTimeList1(item.id);
        }
      });
    },
    getTimeList1(id, last) {
      this.date_id = id;
      let that = this;
      let params = {
        date_id: id,
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };

      this.$ajaxList.timeslot(params, function(res) {
        let Arr = [];
        res.map(item => {
          if (item.is_set) {
            Arr.push(item.id);
          }
        });
        if (Arr.length > 0) {
          that.DesignTimes = that.DesignTimes + Arr.length;
          // that.DesignText = "共计" + that.DesignTimes + "小时出诊时间";
          let tmpObj = {
            date_id: id,
            timeslot_id: Arr
          };
          if (last) {
            that.ifShow = true;
          }
          that.time_arr.push(tmpObj);
        }
      });
    },
    //获取出诊日期列表
    getDateList() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };
      this.$ajaxList.dateList(params, function(res) {
        that.getTime_Arr(res);
        that.text = `选择了 ${res.length} 个日期`;
        let tmpArr = [];
        res.map(item => {
          tmpArr.push(new Date(item.date));
        });
        that.defaultDate = tmpArr;
      });
    },
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
      //设置出诊日期
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token,
        date_arr: date
      };
      this.$ajaxList.setDate(params, function(res) {
        that.getDateList();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.work-time-page {
  min-height: 100vh;
  background: #fff;
  padding: 0 r(30);
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
  .van-cell {
    padding-left: 0px;
    padding-right: 0px;
    .van-cell__title {
      font-size: 32px;
      color: #666;
    }
  }
  .van-cell:last-child::after {
    left: 0px;
    right: 0px;
    display: block !important;
  }
}
</style>