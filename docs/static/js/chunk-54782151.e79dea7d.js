(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54782151"],{"50b2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"memberCenter"},[i("div",{staticClass:"content"},[i("div",{staticClass:"top"},[i("div",[e._v("终身制会员")]),i("div",[e._v(e._s(e.vipPolicy.money)+"元终身享用")]),i("div",{staticClass:"card"},[i("img",{attrs:{src:n("b9ee"),alt:""}}),i("div",{staticClass:"dsc"},[i("div",[e._v("我的会员")]),e.is_vip?i("div",[e._v("您已经是会员了！")]):i("div",[e._v("您还不是会员，立即开通会员")])])])]),i("div",{staticClass:"content-text"},[i("common-title",{attrs:{color:"#FFDC3D"}},[e._v("会员权益")]),i("p",{domProps:{innerHTML:e._s(e.vipPolicy.policy)}})],1)]),e.is_vip?e._e():i("div",{staticClass:"btn-container"},[i("van-button",{attrs:{round:"",block:"",color:"#262932"},on:{click:function(t){e.showModal=!0}}},[e._v("确认并开通")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"message-modal"},[i("div",{staticClass:"modal-bg"}),i("div",{staticClass:"modal-content"},[i("van-form",{on:{submit:e.onSubmit}},[i("van-field",{attrs:{name:"username",label:"账号",placeholder:"请输入手机号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),i("van-field",{attrs:{clearable:"",name:"code",label:"验证码",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[i("span",{staticClass:"receive-code-img",on:{click:e.getCode}},[e._v("获取验证码")])]},proxy:!0}]),model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),i("div",{staticStyle:{margin:"16px"}},[i("van-button",{staticClass:"design-sub-btn",attrs:{round:"",block:"","native-type":"submit"}},[e._v("确认开通")])],1)],1)],1)])])},a=[],s=(n("e18c"),n("a55a")),o={name:"memberCenter",components:{"common-title":function(){return n.e("chunk-fddb5ba4").then(n.bind(null,"4562"))}},data:function(){return{showModal:!1,is_vip:0,vipPolicy:{money:null,policy:null},username:"",password:"",code:"",konwn:!1,contentMap:{username:"手机号",password:"密码",code:"验证码"}}},mounted:function(){var e=this;this.$ajaxList.vipPolicy((function(t){e.vipPolicy=t})),this.getUserInfo()},methods:{getCode:function(){var e={mobile:this.username};this.$ajaxList.sendCode(e,(function(e){Object(s["a"])("验证码已发送！")}))},onSubmit:function(e){console.log("submit",e);var t=this;for(var n in e)if(""==e[n]){var i=t.contentMap[n]+"未填写！";return Object(s["a"])(i)}var a={token:JSON.parse(sessionStorage.getItem("USER_INFO")).token,mobile:this.username,auth_code:this.code};this.$ajaxList.payVip(a,(function(e){t.showModal=!1,t.onBridgeReady(e)}))},onBridgeReady:function(e){var t=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e["package"],signType:e.signType,paySign:e.paySign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg&&(Object(s["a"])("支付成功！"),t.$router.push({path:"/mine"}))}))},getUserInfo:function(){var e=this,t={token:JSON.parse(sessionStorage.getItem("USER_INFO")).token};this.$ajaxList.userInfo(t,(function(t){e.is_vip=t.is_vip}))}}},c=o,r=(n("e4e5"),n("9ca4")),l=Object(r["a"])(c,i,a,!1,null,"7b15268e",null);t["default"]=l.exports},b4c9:function(e,t,n){},b9ee:function(e,t,n){e.exports=n.p+"static/img/mineLogo.983b928f.png"},e4e5:function(e,t,n){"use strict";var i=n("b4c9"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-54782151.e79dea7d.js.map