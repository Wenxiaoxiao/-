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
    serDetail: function (params, callback) {
        ajax({
            url: "/api/user/Service/serDetail",
            type: "POST",
            data: params
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //服务文章列表
    serviceList: function (params, callback) {
        ajax({
            url: "/api/user/Service/serviceList",
            type: "POST",
            data: params
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
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
    subComment: function (params, callback) {
        ajax({
            url: "/api/comment/subComment",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //评论列表
    commentList: function (params, callback) {
        ajax({
            url: "/api/comment/commentList",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //文章详情
    articleOne: function (params, callback) {
        ajax({
            url: "/api/article/articleOne",
            type: "POST",
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
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
    },
    //预约记录，我的预约列表
    orderList: function (params, callback) {
        ajax({
            url: '/api/user/order/orderList',
            type: 'POST',
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //咨询师列表
    consultant: function (params, callback) {
        ajax({
            url: '/api/user/Yuyue/doctorList',
            type: 'POST',
            data: params
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //咨询师详情 
    consultantDetail: function (params, callback) {
        ajax({
            url: '/api/user/Yuyue/doctorDetail',
            type: 'POST',
            data: params
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //文章列表
    articleList: function (params, callback) {
        ajax({
            url: '/api/article/articleList',
            type: 'POST',
            data: params
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //我的报告列表
    reportList: function (params, callback) {
        ajax({
            url: '/api/user/report/reportList',
            type: 'POST',
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
    //我的就诊问答列表
    questionList: function (params, callback) {
        ajax({
            url: '/api/user/Question/questionList',
            type: 'POST',
            data: params,
            headers: { 'token': params.token }
        }).then(res => {
            if (callback) {
                callback(res.data);
            }
        });
    },
}

export default ajaxList;