<template>
  <div class="uploader clearfix">
    <div class="up-title">{{title}}</div>
    <div class="upload-box">
      <div class="picker-box">
        <label class="filePicker" :for="'fileUp_'+loadName">
          <i class="iconfont icon-tianjia"></i>
        </label>
        <input class="file" :id="'fileUp_'+loadName" type="file" accept="image/*" multiple="false" @change="add" />
      </div>
        <div class="file-item" v-for="(item,index) in fileUrls">
          <img :src="item" />
          <!-- <img src='../../static/images/close.png' @click="delite(index)" class="up-delite"> -->
        </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    limit: {
      type: String,
      default: "10"
    },
    files: {
      default: []
    },
    loadName: "",
    title: ""
  },
  data() {
    return {
      fileUrls: [] //图片上传
    };
  },
  computed: {},
  mounted() {
    if (_.isArray(this.files) && this.files.length > 0) {
      this.files.forEach((item,index)=>{
        this.fileUrls.push(item);
      })
    }
  },
  methods: {
    /**
     * 新增图片
     */
    add(e) {
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append("file", file, file.name); //通过append向form对象添加数据
      this.update(param);
    },
    /**
     * 上传图片
     */
    update(param) {
      this.$http(
        {
          url: "/extend/resmgr/upload",
          data: param,
          headers: { "Content-Type": "multipart/form-data" }
        }).then(data=>{
          console.log(data);
          this.setResult(data.data[0].wwwurl);
        })
    },
    // 删除图片
    delite(index) {
      this.fileUrls.splice(index, 1);
      this.$emit('loadChange', {
					type: 2,
					name: this.loadName,
					url:this.fileUrls.length>0?this.fileUrls:null
      })
    },
    setResult(url){
				console.log(this.limit)
				let limit = this.limit;
				if(limit==1){
					this.fileUrls[0]=url;
					this.$set(this.fileUrls,0,url)
				}else{
					this.fileUrls.push(url)
				}
				this.$emit('loadChange', {
					type: 1,
					name: this.loadName,
					url: this.fileUrls
				})
			}
  },
  watch: {
    files(newVal) {
      console.log("newVal==",newVal)
      if (newVal && newVal.length> 0){
        this.fileUrls=newVal;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  height: auto;
  text-align: left;
  position: relative;
  box-sizing: border-box;
  padding-left: 10px;
  .up-title {
    font-size: 32px;
    line-height: 60px;
  }
  .upload-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .file {
    width: 1px;
    height: 1px;
    visibility: hidden;
  }
  .picker-box{
    margin-right:15px;
  }
 .file-item {
      width: r(225);
      height: r(225);
      float: left;
      position: relative;
      margin-right: r(5);
      margin-bottom: r(5);
      .up-delite {
        width: r(50);
        height: r(50);
        display: inline-block;
        text-align: center;
        position: absolute;
        line-height: r(34);
        right: 0;
        top: 0;
      }
      img {
        width: r(225);
        height: r(225);
      }
      .reload {
        width: r(100);
        height: r(100);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: r(-50);
        margin-top: r(-50);
      }
    }
  .filePicker {
    width: r(225);
    height: r(225);
    float: left;
    border: 2px dashed #cbcbcb;
    position: relative;
    color: #cbcbcb;
    line-height: r(225);
    text-align: center;
    i {
      font-size: r(90);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #cbcbcb;
    }
  }
}
</style>