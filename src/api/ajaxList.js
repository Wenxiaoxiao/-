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
    setRecords: function (params, callback) {
        ajax({
            url: "/api/user/user/setRecords",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //编辑个人资料
    editInfo: function (params, callback) {
        ajax({
            url: "/api/user/user/editInfo",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //我的积分
    myScore: function (params, callback) {
        ajax({
            url: "/api/user/score/myScore",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //服务文章详情
    //服务文章列表
    //服务栏目
    serCate: function (callback) {
        ajax({
            url: "/api/cate/serCate",
            type: "POST"
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //发表评论
    //评论列表
    //文章详情
    //文章列表
    //轮播图
    getBanner: function (params, callback) {
        ajax({
            url: "/api/banner/banner",
            type: "POST",
            data: params,
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //会员权益
    vipPolicy: function (callback) {
        ajax({
            url: "/api/data/vipPolicy",
            type: "GET"
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
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