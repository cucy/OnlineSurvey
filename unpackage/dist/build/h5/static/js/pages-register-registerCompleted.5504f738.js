(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-registerCompleted"],{"2c4c":function(t,e,n){"use strict";var a=n("8d4b"),s=n.n(a);s.a},"64f4":function(t,e,n){"use strict";n.r(e);var a=n("8402"),s=n("6d7f");for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);n("2c4c");var r=n("2877"),i=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,"e3b8a314",null);e["default"]=i.exports},"6d7f":function(t,e,n){"use strict";n.r(e);var a=n("a1eb"),s=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=s.a},"800d":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".nex[data-v-e3b8a314]{margin-top:%?100?%}",""])},8402:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("van-steps",{attrs:{active:t.active}},[n("van-step",[t._v("注册账号")]),n("van-step",[t._v("选择角色")]),n("van-step",[t._v("等待确认")]),n("van-step",[t._v("注册完成")])],1),n("van-button",{staticClass:"nex",attrs:{type:"info",size:"large"},on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("立刻体验")])],1)},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"8d4b":function(t,e,n){var a=n("800d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=n("4f06").default;s("31262bbe",a,!0,{sourceMap:!1,shadowMode:!1})},a1eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{active:3,userInfo:{}}},onLoad:function(){null!=this.$cookies.get("userInfo")&&(this.userInfo=this.$cookies.get("userInfo"))},methods:{submit:function(){this.$router.push({path:"/pages/user/user"})}}};e.default=a}}]);