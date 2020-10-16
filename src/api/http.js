import notice from "./notice"
import Qs from 'qs'
import axios from 'axios';
import config from './common';
//axios.defaults.headers.common['Authentication-Token'] = sessionStorage.getItem("USER_INFO") ? JSON.parse(sessionStorage.getItem("USER_INFO")).token : null;
axios.defaults.headers.common['Authentication-Token'] = sessionStorage.getItem("DOCTOR_INFO") ? JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token : null;

function request(params) {
    if (!params.url && !params.href) return;
    return new Promise((resolve, reject) => {
        let data = getParams(params);
        var root = getRoot(params); //获取基础域名
        let headers = params.headers || {};
        let method = 'POST';
        if (params.type) {
            method = params.type.toUpperCase();
        }
        if (params.href) {
            params.url = params.href
        }
        return axios({
            method: method,
            url: params.url,
            data: method === 'POST' || method === 'PUT' ? data : null,
            params: method === 'GET' || method === 'DELETE' ? data : null,
            baseURL: root,
            headers: {
                ...headers
            },
            /**end */
            withCredentials: true
        })
            .then(function (res) {
                console.log(res)
                let headerCheck = useHeader(res.headers);
                if (!headerCheck) {
                    resolve(res.data);
                }
                let isErr = hasError(res.data);
                if (isErr) {
                    reject(res.data)
                } else {
                    resolve(res.data)
                }

            })
            .catch(function (err) {
                let res = err.response
                reject(err)
                if (res) {
                    window.alert('api error, HTTP CODE: ' + res.status)
                }
            })

    });
}

function jsonP(params) {
    let {
        url,
        ...rest
    } = params
    if (!url) {
        console.error('请传入一个url参数')
        return;
    }
    console.log(rest)
    const data = getURLSearchParams(rest.data)
    url = url + '?' + data
    return new Promise((resolve, reject) => {
        // window.jsonCallBack =() => {
        //     console.log('callback执行')
        //     resolve()
        // }
        var JSONP = document.createElement("script");
        JSONP.type = "text/javascript";
        JSONP.src = `${url}`;
        // 创建一个script标签
        if (JSONP.readyState) {
            // 做兼容
            JSONP.onreadystatechange = function () {
                // readyState变化触发
                if (JSONP.readyState === 'complete' || JSONP.readyState === 'loaded') {
                    resolve()
                }
            }
        } else {
            JSONP.onload = function () {
                resolve()
            }
        }
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        }, 500)
    })
}

function useHeader(header) {
    // 通过header判断是否授权
    if (header.authed == "n") {
        return false;
    }
    localStorage.setItem('hasAuth', 1)
    return true;
}
// 接口参数校验和转换
function getParams(params) {
    let result;
    if (params.data) {
        result = filterNull(params.data)
    }
    if (params.contentType == 'from') {
        result = getURLSearchParams(result)
    }
    return result;
}
//公共错误处理
function hasError(data) {
    if (data.code == 1000 || data.code == 1003) {
        return false
    }
    // code判断是否为注册
    // if (data.httpCode == 10000) {
    //     //记录当前地址
    //     sessionStorage.setItem('oldUrlName', location.href)
    //     return location.href = "/userLogin"
    // }
    // if (data.httpCode > 300 && data.data) {
    //     setLayer(data.data.msg)
    //     return true;
    // } 
    else {
        setLayer(data.message)
        return true;
    }
    return false
}

function setLayer(msg) {
    notice.alert(msg)
}
// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
// 表单提交字段转换
function getURLSearchParams(params) {
    let data = Qs.stringify(params);
    return data;
}

// 获取基础域名
function getRoot(params) {
    let root = "";
    root = API_CONFIG.LOCAL == "true" ? API_CONFIG.ROOT : ""
    if (params.href) {
        root = ""
    }
    return root
}


export default {
    request,
    jsonP
}