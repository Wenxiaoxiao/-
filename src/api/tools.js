import http from './http'
const browser = {
	versions: function () {
		var u = navigator.userAgent;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
			iPhone: u.indexOf('iPhone') > -1, //iPhone
			iPad: u.indexOf('iPad') > -1, //iPad
			webApp: u.indexOf('Safari') > -1, //Safari
			user: u,
		};
	}()
}

// 工具
var tools = {
	android: browser.versions.android,//安卓
	trident: browser.versions.trident, //IE内核
	presto: browser.versions.presto, //opera内核
	webKit: browser.versions.webKit, //苹果、谷歌内核
	gecko: browser.versions.gecko, //火狐内核Gecko
	mobile: browser.versions.mobile, //是否为移动终端
	ios: browser.versions.ios, //ios
	iPhone: browser.versions.iPhone, //iPhone
	iPad: browser.versions.iPad, //iPad
	webApp: browser.versions.webApp, //Safari
	user: browser.versions.user, //Safari
	//微信
	isWeiXin: function () {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	},//微信id
	isDD: function () {
		//判断是不是钉钉
		var ua = navigator.userAgent.toLowerCase();
		return ua.indexOf("dingtalk") >= 0;
	},
	//支付宝环境
	isAL: function () {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/Alipay/i) == "alipay") {
			return true;
		} else {
			return false;
		}
	},
	// 是否企业微信
	isQywx: function () {
		var ua = window.navigator.userAgent.toLowerCase();
		if ((ua.match(/MicroMessenger/i) == 'micromessenger') && (ua.match(/wxwork/i) == 'wxwork')) {
			return true;
		} else {
			return false;
		}
	},
	//判断是数组
	isArray(o) {
		return Object.prototype.toString.call(o) == '[object Array]';
	},

	//判断null
	isNull: function (exp) {
		if (!exp && typeof exp != 'undefined' && exp != 0) {
			return true;
		} else if (exp == 'null') {
			return true;
		}
		return false;
	},

    /*
     * 深复制
     * params
     * -destination  被赋值的新对象
     * -source  取值的对象
     * -miss  忽略的对象
     * */
	deepCopy: function (data) {
		return JSON.parse(JSON.stringify(data));
	},

	trim(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},

	getAppUserinfo() {
		return new Promise(function (resolve, reject) {
			uni.getSystemInfo({
				success: function (res) {
					resolve(res);
				}
			});
		});
	},
	getRecentVersion() {
		const updateManager = uni.getUpdateManager();

		updateManager.onCheckForUpdate(function (res) {
			// 请求完新版本信息的回调
			console.log("请求完新版本信息的回调", res.hasUpdate);
		});

		updateManager.onUpdateReady(function (res) {
			uni.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启应用？',
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});

		});

		updateManager.onUpdateFailed(function (res) {
			console.log("新的版本下载失败");
			// 新的版本下载失败
		});
	},
	filterTags(data, length) {
		//遍历过滤tag标签
		if (!data) return [];
		length = length ? length : 12;
		for (var k in data) {
			var tag = data[k].tag;
			if (!tag) {
				data[k].tagArr = [];
				continue;
			}
			tag = tag.replace('，', ',').replace('，', ',');
			var tagArr = tag.split(',');
			if (tag.length <= length) {
				data[k].tagArr = tagArr;
			} else {
				var indexTab = tag;
				for (var i = 0; i < tagArr.length; i++) {
					var indexNum = indexTab.lastIndexOf(',');
					if (indexNum < length) {
						indexTab = indexTab.substring(0, indexNum)
						data[k].tagArr = indexTab.split(',');
						break;
					} else {
						indexTab = indexTab.substring(0, indexNum);
					}
				}
				data[k].tagArr = indexTab.split(',');
			}
		}
		return data;
	},
	loadScript: function (url, callback) {
		// 传入url , 和要执行的回调函数
		var script = document.createElement('script');
		script.type = 'text/javascript';
		// 创建一个script标签
		if (script.readyState) {
			// 做兼容
			script.onreadystatechange = function () {
				// readyState变化触发
				if (script.readyState === 'complete' || script.readyState === 'loaded') {
					callback();  // 加载完执行回调
				}
			}
		} else {
			script.onload = function () {
				callback();  // 加载完执行回调
			}
		}
		var href = url.indexOf('?') > -1 ? url += "&v=" + randomRangeId(6) : url += "?v=" + randomRangeId(6)
		script.src = href;
		document.head.appendChild(script);  // 插入head中
	},
	getUserInfo() {
		return http.request({
			type: "get",
			url: "/user/info",
		})
	},
	dealTime(str) {
		if (!str) return
		return str.split(' ')[0] + ' ' + str.split(' ')[1].split(':')[0] + ':' + str.split(' ')[1].split(':')[1]
	},
	refreshPageInios() {
		if(tools.ios){
			window.onload = function () {

				var isPageHide = false;
	
				// 页面加载（是没有刷新页面的，跟页面刷新有着本质的不同）
	
				window.addEventListener('pageshow', function () {
	
					if (isPageHide) {
	
						window.location.reload();
	
					}
	
				});
	
				window.addEventListener('pagehide', function () { // 页面退出
	
					isPageHide = true;
	
				});
	
			};
		}
	}
};

export default tools