(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-mdfUser"],{"0b59":function(e,a,t){"use strict";var n=t("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(t("e814"));t("7f7f");var o={data:function(){return{userInfo:{},disabled:!1,checked:!0,show:!1,username:"",email:"",name:"",pnum:"",gender:0,password:"",password1:"",sms:"",err:"",errpnum:"",identifyCode:"",imgfile:"",avatar:"",time:0,count:60}},onLoad:function(){var e=this,a=t("9ad7"),n={method:"POST",uri:"http://101.201.70.76:8211/getUserById",form:{id:this.$cookies.get("userInfo").id}};a(n).then(function(a){e.$toast.clear(),"error"==a?e.$toast.fail("获取用户信息识别，未找到用户信息"):(e.userInfo=JSON.parse(a),e.username=e.userInfo.username,e.name=e.userInfo.name,e.email=e.userInfo.email,e.pnum=e.userInfo.pnum,e.gender=e.userInfo.gender,e.imgfile=e.userInfo.imgbase64,e.avatar=e.userInfo.avatar,console.log(e.userInfo),e.$toast.success("获取用户信息成功"))}).catch(function(a){e.$toast.clear(),e.$toast.fail("获取用户信息, 请检查网络连接"),console.log(a)})},methods:{onPswChanged:function(){this.password!=this.password1?this.err="两次输入不一致":this.err=""},afterReadAvatar:function(e){var a=this;lrz(e.file,{quality:.7}).then(function(e){a.avatar=e.base64.slice(23)}).catch(function(e){a.$toast.fail("上传失败")}),this.avatar=e.content.slice(23),console.log(e.content.slice(23))},afterReadFace:function(e){var a=this;lrz(e.file,{quality:.7}).then(function(e){a.imgfile=e.base64.slice(23)}).catch(function(e){a.$toast.fail("上传失败")}),this.imgfile=e.content.slice(23),console.log(e.content.slice(23))},sentIdentify:function(){var e=this,a=60;this.time||(this.count=a,this.disabled=!0,this.time=setInterval(function(){e.count>0&&e.count<=a?e.count--:(e.disabled=!1,clearInterval(e.time),e.time=0,e.count=a)},1e3));var n=899999*Math.random()+1e5,o=(0,s.default)(n,10);this.identifyCode=o;var i=t("9ad7"),r={method:"POST",uri:"http://101.201.70.76:8211/getSms",form:{mobile:this.pnum,code:'{"code":"'+this.identifyCode+'"}'}};i(r).then(function(a){"error"!=a?e.$toast.success("发送成功"):e.$toast.fail("发送失败，请检查网络连接")}).catch(function(a){console.log(a),e.$toast.fail("发送失败，请检查网络连接")})},handleClick:function(){var e=this;this.$toast.loading({duration:0,forbidClick:!0,message:"提交"});var a="null";this.username!=this.userInfo.username&&(a=this.username);var n="null";this.name!=this.userInfo.name&&(n=this.name);var s="null";this.gender!=this.userInfo.gender&&(s=this.gender);var o="null";this.imgfile!=this.userInfo.imgbase64&&(o=this.imgfile);var i="null";this.avatar!=this.userInfo.avatar&&(i=this.avatar);var r=t("9ad7"),l={method:"POST",uri:"http://101.201.70.76:8211/updateUser",form:{id:this.userInfo.id,username:a,password:this.password,name:n,gender:s,avatar:i,imgBase64:o}};r(l).then(function(a){e.$toast.clear(),e.$toast.fail("修改成功！"),console.log(a)}).catch(function(a){e.$toast.clear(),e.$toast.fail("注册失败，请检查网络连接！"),console.log(a)})}}};a.default=o},3078:function(e,a,t){"use strict";t.r(a);var n=t("9aa5"),s=t("feeb");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("8cc5");var i=t("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"d09093cc",null);a["default"]=r.exports},"41ff":function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,".innerImg[data-v-d09093cc]{width:%?200?%;height:%?200?%}.innerImg2[data-v-d09093cc]{width:%?200?%;height:%?250?%}",""])},"808b":function(e,a,t){var n=t("41ff");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=t("4f06").default;s("4fbcf1aa",n,!0,{sourceMap:!1,shadowMode:!1})},"8cc5":function(e,a,t){"use strict";var n=t("808b"),s=t.n(n);s.a},"9aa5":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("van-cell-group",[t("van-field",{attrs:{label:"用户名","left-icon":"contact",placeholder:"请输入用户名"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-field",{attrs:{label:"姓名","left-icon":"user-circle-o",placeholder:"请输入真实姓名"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("van-field",{attrs:{label:"邮箱","left-icon":"free-postage",disabled:"",placeholder:"请输入电子邮箱"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("van-field",{attrs:{label:"手机号","left-icon":"phone-o",placeholder:"请输入手机号",disabled:"","error-message":e.errpnum},model:{value:e.pnum,callback:function(a){e.pnum=a},expression:"pnum"}}),t("van-field",{attrs:{label:"密码",type:"password","left-icon":"label-o",placeholder:"请输入6-20位密码",maxlength:"20"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("van-field",{attrs:{type:"password",label:"确认密码","left-icon":"label-o",placeholder:"请再次输入密码",input:"onPswChanged",maxlength:"20","error-message":e.err},on:{blur:function(a){a=e.$handleEvent(a),e.onPswChanged(a)}},model:{value:e.password1,callback:function(a){e.password1=a},expression:"password1"}})],1),t("van-cell-group",[t("van-radio-group",{model:{value:e.gender,callback:function(a){e.gender=a},expression:"gender"}},[t("van-cell-group",[t("van-cell",{attrs:{title:"我是男性",clickable:""},on:{click:function(a){a=e.$handleEvent(a),e.gender="0"}}},[t("van-radio",{attrs:{slot:"right-icon",name:"0"},slot:"right-icon"})],1),t("van-cell",{attrs:{title:"我是女性",clickable:""},on:{click:function(a){a=e.$handleEvent(a),e.gender="1"}}},[t("van-radio",{attrs:{slot:"right-icon",name:"1"},slot:"right-icon"})],1)],1)],1)],1),t("van-cell-group",[t("van-field",{attrs:{center:"",clearable:"",label:"短信验证码","left-icon":"chat-o",placeholder:"请输入短信验证码"},model:{value:e.sms,callback:function(a){e.sms=a},expression:"sms"}},[t("van-button",{attrs:{slot:"button",size:"small",disabled:e.disabled,type:"primary"},on:{click:function(a){a=e.$handleEvent(a),e.sentIdentify(a)}},slot:"button"},[60==e.count?[e._v("发送验证码")]:[e._v(e._s(e.count))]],2)],1)],1),t("van-cell-group",[t("v-uni-label",[e._v("上传头像")]),t("van-uploader",{attrs:{"after-read":e.afterReadAvatar,capture:"camera",multiple:"","max-count":1}}),t("img",{staticClass:"innerImg",attrs:{src:"data:image/png;base64,"+e.avatar}})],1),t("van-cell-group",[t("v-uni-label",[e._v("人脸数据")]),t("van-uploader",{attrs:{"after-read":e.afterReadFace,capture:"camera",multiple:"","max-count":1}}),t("img",{staticClass:"innerImg2",attrs:{src:"data:image/png;base64,"+e.imgfile}})],1),t("van-button",{staticClass:"submit",attrs:{size:"large",type:"info"},on:{click:function(a){a=e.$handleEvent(a),e.handleClick(a)}}},[e._v("提交修改")])],1)},s=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s})},feeb:function(e,a,t){"use strict";t.r(a);var n=t("0b59"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a}}]);