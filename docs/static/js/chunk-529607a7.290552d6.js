(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-529607a7"],{"7d6f":function(t,e,i){"use strict";var a=i("df77"),s=i.n(a);s.a},9302:function(t,e,i){"use strict";var a=i("1c8b"),s=i("692f"),n=i("da10"),o=i("d7e1"),l=[].join,c=s!=Object,r=o("join",",");a({target:"Array",proto:!0,forced:c||!r},{join:function(t){return l.call(n(this),void 0===t?",":t)}})},b3f9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publishArticle-page"},[t._l(t.flexible,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:2!=t.type,expression:"type!=2"}],key:"tmp-"+a,staticClass:"steps"},[i("div",{staticClass:"design-title"},[i("i"),i("span",[t._v(t._s(e.title))]),i("b",[t._v(t._s(e.subtitle))])]),1==e.type?i("div",{staticClass:"txt"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:e.placeholder},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]):0==e.type?i("div",{staticClass:"txt"},t._l(e.list,(function(e,a){return i("span",{key:"tag_"+a,class:e.chosed?"active tag":"tag",on:{click:function(i){return t.choseTags(e,a)}}},[t._v(" "+t._s(e.name)+" "),i("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.chosed,expression:"tag.chosed"}],staticClass:"chosed-ico",attrs:{name:"checked"}})],1)})),0):2==e.type?i("div",{staticClass:"txt"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:e.placeholder},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]):t._e()])})),i("van-uploader",{attrs:{"upload-icon":"plus"},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),i("div",{staticClass:"sub-btn",on:{click:t.submit}},[t._v("发表")])],2)},s=[],n=(i("ecb4"),i("9302"),i("2eeb"),i("ea69"),i("1fb3"),i("31b7")),o=i("82ae"),l={components:{"reply-box":n["a"]},data:function(){return{title:null,content:null,tags:[],fileList:[],type:null,showExpandBar:!0,flexible:[{title:"标题",placeholder:"请输入标题",type:2},{title:"标签",type:0,list:[]},{title:"文章内容",placeholder:"请输入...",type:1}]}},mounted:function(){this.getTags()},methods:{choseTags:function(t,e){var i=this.tags;this.flexible[1].list[e].chosed?(i.splice(i.indexOf(t.id),1),this.flexible[1].list[e].chosed=!1):(i.push(t.id),this.flexible[1].list[e].chosed=!0),this.$forceUpdate(),this.tags=i},getTags:function(){var t=this;this.$ajaxList.getTags(null,(function(e){t.flexible[1].list=e}))},imgUploadOne:function(t,e){var i=new FormData;console.log(t),i.append("img",t.file);var a="/api/upload/imgUploadOne",s={headers:{"Content-Type":"multipart/form-data"}};o.post(a,i,s).then((function(t){e&&e(t.data.data)}))},submit:function(){var t=this,e=[];this.fileList.map((function(i){t.imgUploadOne(i,(function(t){e.push(t)}))}));var i=this;setTimeout((function(){var t={token:JSON.parse(sessionStorage.getItem("DOCTOR_INFO")).token,title:i.title,content:i.content,cate_id:i.$route.query.cate_id,tags:i.tags.join(","),thumb_images:e};i.$ajaxList.doctorArticle(t,(function(t){i.$router.push({path:"/mypublish"})}))}),1e3)}}},c=l,r=(i("7d6f"),i("9ca4")),u=Object(r["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports},df77:function(t,e,i){},ea69:function(t,e,i){"use strict";var a=i("1c8b"),s=i("e1d6"),n=i("3da3"),o=i("d88d"),l=i("3553"),c=i("1ca1"),r=i("1bbd"),u=i("1ea7"),d=i("ff9c"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var i,a,u,d,p,f,b=l(this),x=o(b.length),w=s(t,x),y=arguments.length;if(0===y?i=a=0:1===y?(i=0,a=x-w):(i=y-2,a=v(h(n(e),0),x-w)),x+i-a>m)throw TypeError(g);for(u=c(b,a),d=0;d<a;d++)p=w+d,p in b&&r(u,d,b[p]);if(u.length=a,i<a){for(d=w;d<x-a;d++)p=d+a,f=d+i,p in b?b[f]=b[p]:delete b[f];for(d=x;d>x-a+i;d--)delete b[d-1]}else if(i>a)for(d=x-a;d>w;d--)p=d+a-1,f=d+i-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<i;d++)b[d+w]=arguments[d+2];return b.length=x-a+i,u}})}}]);
//# sourceMappingURL=chunk-529607a7.290552d6.js.map