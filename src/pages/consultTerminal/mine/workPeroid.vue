<template>
  <div class="work-period-page">
    <van-collapse v-model="activeNames" class="day-wrapper">
      <van-collapse-item v-for="(day,m) in daylist" :key="m" class="day-item">
        <template #title>
          <div @click="getTimeList(day.id)">
            <span class="design-line"></span>
            {{day.date}}
          </div>
        </template>
        <div
          class="time-item"
          v-for="(time,n) in timelist"
          :key="'time_'+n"
          @click="changeTimeSlot(time,n)"
        >
          {{time.slot}}
          <van-icon name="success" class="success-ico" v-show="time.is_set" />
        </div>
      </van-collapse-item>
    </van-collapse>
    <div class="total-time">- 已选{{DesignTimes}}小时出诊时间 -</div>
    <div class="sub-btn" @click="submit">保存</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      DesignTimes: 0,
      activeNames: ["1"],
      date_id: null,
      timelist: [],
      daylist: [],
      time_arr: []
    };
  },
  mounted() {
    this.getDateList();
  },
  methods: {
    //获取初始time_arr
    getTime_Arr(daylist) {
      let that = this;
      daylist.map(item => {
        that.getTimeList1(item.id);
      });
    },
    //设置时间段
    changeTimeSlot(time, n) {
      let date_id = this.date_id;
      let time_arr = this.time_arr;
      if (time.is_set) {
        //从时间列表里去掉
        time_arr.map(item => {
          if (item.date_id == date_id) {
            let m = item.timeslot_id.indexOf(time.id);
            item.timeslot_id.splice(m, 1);
          }
        });
      } else {
        //加进去
        time_arr.map(item => {
          if (item.date_id == date_id) {
            item.timeslot_id.push(time.id);
          }
        });
      }
      this.timelist[n].is_set = !this.timelist[n].is_set;
    },
    //获取当前日期选中的时刻列表
    getTimeList1(id, calback) {
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
          let tmpObj = {
            date_id: id,
            timeslot_id: Arr
          };
          that.time_arr.push(tmpObj);
        }
      });
    },
    //获取当前日期的时间列表
    getTimeList(id) {
      this.date_id = id;
      let that = this;
      let params = {
        date_id: id,
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };
      this.$ajaxList.timeslot(params, function(res) {
        that.timelist = res;
      });
    },
    //获取出诊日期列表
    getDateList() {
      let that = this;
      let params = {
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };
      this.$ajaxList.dateList(params, function(res) {
        that.daylist = res;
        that.getTime_Arr(res);
      });
    },
    submit() {
      //保存
      //console.log(this.daylist);
      let that = this;
      let params = {
        time_arr: this.time_arr,
        token: JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token
      };
      this.$ajaxList.setTimeslot(params, function(res) {
        that.$router.push({
          path: "/workTime"
        });
      });
    }
  }
};
</script>
<style lang="scss">
.work-period-page {
  min-height: 100vh;
  background: #fafafa;
  padding-bottom: 60px;
  .day-wrapper {
    .day-item {
      .design-line {
        display: inline-block;
        width: r(4);
        height: r(34);
        background: #1574f6;
        border-radius: r(4);
        vertical-align: middle;
        margin-right: r(16);
      }
      .van-collapse-item__content {
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .time-item {
        font-size: 30px;
        color: #666;
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #ebedf0;
        padding-left: 57px;
        position: relative;
        .success-ico {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #1574f6;
        }
      }
      .time-item:nth-last-child(1) {
        border: 0px;
      }
    }
  }
  .total-time {
    font-size: 32px;
    color: #666;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin-top: 90px;
  }
  .sub-btn {
    width: 690px;
    height: 88px;
    background: #1574f6;
    border-radius: 44px;
    box-shadow: 0px 4px 40px rgba(21, 116, 246, 0.35);
    color: #fff;
    font-size: 32px;
    line-height: 88px;
    text-align: center;
    margin: 0 auto;
    margin-top: 48px;
  }
}
</style>