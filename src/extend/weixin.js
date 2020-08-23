import wtsTools from '@/static/js/wtsTools.esm.min.js'
import http from '../api/http'
import config from '../api/common'
import notice from '../api/notice'
const tools=wtsTools.tools;
const weixin={
        isReady:false,
        init(){
            let self=this;
            return new Promise((resolve, reject)=>{
                if (!tools.isWeiXin())return reject();
                if(self.isReady){
                    return resolve();
                }
                var url = location.href.split('#')[0];
                // 调用服务器获取签名
                http.request({
                  url: "/content/jsTicket",
                  type:'get',
                  data:{
                    url:url
                  }
                  }).then(data => {
                        wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: data.data.appId, // 必填，公众号的唯一标识
                            timestamp: data.data.timeStamp, // 必填，生成签名的时间戳
                            nonceStr: data.data.nonStr, // 必填，生成签名的随机串
                            signature: data.data.signature, // 必填，签名，见附录1
                            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData','hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.ready(function () {
                            //准备完毕
                            self.isReady=true;
                            resolve()
                        });
                        wx.error(function (res) {
                            console.log(res);
                            reject(res)
                        });
                  }).catch(err=>{
                    console.log("初始化分享失败");
                  })
            });
        },
        share(title,desc,img,success,fali){
            if (!tools.isWeiXin())return;
            let initData={
                title: title,
                desc: desc,
                link: location.href,
                imgUrl: img,
                success: function () {
                    if(success){
                        success();
                    }
                },
                cancel: function () {
                    notice.msg('取消分享！');
                    if(fali){
                        fali();
                    }
                },
                fail: function (res) {
                    if(fali){
                        fali();
                    }
                }
            };
            this.init().then(()=>{
                wx.updateAppMessageShareData(initData);
                //分享给朋友
                wx.updateTimelineShareData(initData);
            }).catch((e)=>{
                if(fali){
                    fali(e);
                }
            })
        },
        shareDetail(title,desc,img,success,fali){
            if (!tools.isWeiXin())return;
            let initData={
                title: title,
                desc: desc,
                link: location.href,
                imgUrl: img,
                success: function () {
                    if(success){
                        success();
                    }
                },
                cancel: function () {
                    notice.msg('取消分享！');
                    if(fali){
                        fali();
                    }
                },
                fail: function (res) {
                    if(fali){
                        fali();
                    }
                }
            };
            this.init().then(()=>{
                wx.updateAppMessageShareData(initData);
                //分享给朋友
                wx.updateTimelineShareData(initData);
                wx.hideMenuItems({
                    menuList: [
                        'menuItem:share:weiboApp', // 分享到Weibo
                        'menuItem:favorite', // 收藏
                        'menuItem:share:facebook', // 分享到FB
                        'menuItem:share:QZone', // 分享到 QQ 空间
                        'menuItem:editTag', // 编辑标签
                        'menuItem:delete', // 删除
                        'menuItem:copyUrl', // 复制链接
                        'menuItem:readMode', // 阅读模式:
                        'menuItem:share:email', //邮件
                        'menuItem:openWithQQBrowser', //在QQ浏览器中打开
                        'menuItem:openWithSafari', //在Safari中打开
                        'menuItem:originPage', //原网页
                    ],
                    success: function (res) {
                        console.log('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
                    },
                    fail: function (res) {
                        console.log(JSON.stringify(res));
                    }
                });
            }).catch((e)=>{
                if(fali){
                    fali(e);
                }
            })
        },
        hideWxBtns(type){
            //隐藏微信菜单项
            if (!tools.isWeiXin())return
            this.init().then(()=>{
                wx.hideOptionMenu();
            }).catch(()=>{
                console.log('隐藏按钮失败');
            })
        },
        showWxBtns(type){
          //隐藏微信菜单项
          if (!tools.isWeiXin())return
          this.init().then(()=>{
              wx.showOptionMenu();
          }).catch(()=>{
              console.log('隐藏按钮失败');
          })
        },
        //关闭浏览器
        close(){
            if(tools.isWtsNativeApp()){
                nativeApp.general.deviceready(function(){
                    nativeApp.general.closeWebView();
                })
            }
            if(tools.isWeiXin() && WeixinJSBridge){
                WeixinJSBridge.invoke('closeWindow',{},function(res){
                        
                });
            }
        }
}

export default weixin
