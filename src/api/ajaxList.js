import http from '@/api/http.js' //ajax请求
let ajax = http.request;
let ajaxList = {
    //顶级分类 会员首页
    topCate: function (callback) {
        ajax({
            url: "/api/Cate/topCate",
            type: "GET"
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //我的故事列表
    myStory: function (params, callback) {
        ajax({
            url: "/api/article/myStory",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //发布我的故事
    publishArticle: function (params, callback) {
        ajax({
            url: "/api/article/publishArticle",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //个人档案信息
    getRecords: function (params, callback) {
        ajax({
            url: "/api/user/user/getRecords",
            type: "POST",
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //填写个人档案
    //编辑个人资料
    //我的积分
    //服务文章详情
    //服务文章列表
    //服务栏目
    //发表评论
    //评论列表
    //文章详情
    //文章列表
    //轮播图
    //会员权益
    //会员须知
    //咨询师须知
    doctorNotice: function (callback) {
        ajax({
            url: "/api/data/doctorNotice",
            type: "GET"
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    }
}

export default ajaxList;