

const filter = {
    // 字符串截取
    subString(value, length) {
        if (!value) {
            return "";
        }
        value = value.trim();
        if (value.length > length) {
            var first = value.toString().substring(0, length);
            value = first + "...";
        }
        return value;
    },
    // 数字处理
    numberFormat(value) {
        value = parseInt(value);
        if (isNaN(value)) {
            return 0;
        }

        if (value >= 10000) {
            value = value + "";
            var len = value.length;
            value = value.slice(0, len - 3);
            return parseFloat(value / 10) + "万";
        } else {
            return value
        }
    },
    trustTime(inHisTime, pattern) {
        if (!inHisTime) {
            return;
        }
        inHisTime =
            inHisTime = inHisTime.toString().trim().replace(/-/gm, "/");
        var date = null,
            now = new Date();
        if (inHisTime.indexOf("/") != -1) { //yyyy-mm-dd HH:mm:ss
            date = new Date(inHisTime);
        } else {
            date = new Date(Number(inHisTime)); // long 整型
        }
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minute = date.getMinutes();
        var minuteTime = (hours < 10 ? "0" + hours : hours) + ":" + (minute < 10 ? "0" + minute : minute),
            monthTime = (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (pattern && pattern.toLowerCase() === "time") {
            return minuteTime;
        } else if (pattern && pattern.toLowerCase() === "date") {
            //日期单独处理 显示 月-日
            return monthTime
        } else if (pattern && pattern.toLowerCase() === "name") {
            //日期单独处理 显示 月-日
            return year + "年" + month + "月" + day+"日";
        } else {
            //不是当年
            return year + "-" + monthTime + " " + minuteTime;
        }
    },
    dateName(time){
        if(!time)return "";
        var timeArr=time.split("-");
        return timeArr[0]+"年"+timeArr[1]+"月"+timeArr[2]+"日"
    },
    timeStamp(time){
        if(!time)return "";
        var time = new Date(time);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        return y+"年"+m+"月"+d+"日"
    },
	// 日期字数控制
	  mask_pic(content) {
	    if (!content) return '';
	    if (content == 2) {
	      return "【视频】";
	    } else if (content == 3) {
	      return "【音频】";
	    } else if (content == 4) {
	      return '【海报】';
	    }else{
	      return '';
	    }
      },
      auditStatus(type) { //名片审核状态
        var val = "";
        if (type == '0') {
          val = "待审核";
        } else if (type == '1') {
          val = "审核通过";
        }
        return val;
      },
      insurederSex(type) { //校验性别
        var val = "";
        if (type == '2') {
          val = "女士";
        }else{
          val = "先生";
        }
        return val;
      },
}
module.exports = filter