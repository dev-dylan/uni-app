!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=651)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,r,u,a,s,l){var c,f="function"==typeof t?t.options:t;if(s){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(f.components,p)&&(f.components[p]=s[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(f.mixins||(f.mixins=[])).push(l)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var _=f.render;f.render=function(t,e){return c.call(e),_(t,e)}}else{var b=f.beforeCreate;f.beforeCreate=b?[].concat(b,c):[c]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={}},100:function(t,e,n){"use strict";var i=n(426),o=n(335),r=n(0);var u=Object(r.a)(o.default,i.b,i.c,!1,null,null,"65efca66",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(552).default,this.options.style):Object.assign(this.options.style,n(552).default)}).call(u),e.default=u.exports},13:function(t,e,n){"use strict";n.r(e);var i=n(5),o=n(2);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var u=n(0);var a=Object(u.a)(o.default,i.b,i.c,!1,null,"00fd241b","56471acc",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(8).default,this.options.style):Object.assign(this.options.style,n(8).default)}).call(a),e.default=a.exports},2:function(t,e,n){"use strict";n.r(e);var i=n(3),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},332:function(t,e,n){"use strict";n.r(e);var i=n(333),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},333:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){+t!=+e&&this.$emit("change",t)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),n=this.inputValue*e,i=this.step*e;if("minus"===t){if((n-=i)<this.min*e)return;n>this.max*e&&(n=this.max*e)}else if("plus"===t){if((n+=i)>this.max*e)return;n<this.min*e&&(n=this.min*e)}this.inputValue=String(n/e)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e&&((e=+e)>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e)}}};e.default=i},334:function(t,e){t.exports={"uni-numbox":{flexDirection:"row",height:"35",lineHeight:"35",width:"120"},"uni-numbox__value":{backgroundColor:"#ffffff",width:"40",height:"35",textAlign:"center",fontSize:"16",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderLeftWidth:0,borderRightWidth:0},"uni-numbox__minus":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"35",height:"35",fontSize:"20",color:"#333333",backgroundColor:"#f8f8f8",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderTopLeftRadius:"3",borderBottomLeftRadius:"3",borderRightWidth:0},"uni-numbox__plus":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"35",height:"35",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderTopRightRadius:"3",borderBottomRightRadius:"3",backgroundColor:"#f8f8f8",borderLeftWidth:0},"uni-numbox--text":{fontSize:"40rpx",color:"#333333"},"uni-numbox--disabled":{color:"#c0c0c0"}}},335:function(t,e,n){"use strict";var i=n(336),o=n.n(i);e.default=o.a},336:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={components:{},data:function(){return{numberValue:0}},methods:{change:function(t){this.numberValue=t}}}},337:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"}}},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},426:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniSection:n(13).default,uniNumberBox:n(652).default},o=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"]},[e("u-text",{staticClass:["example-info"]},[this._v("\u6570\u5b57\u8f93\u5165\u6846\u7ec4\u4ef6\u591a\u7528\u4e8e\u8d2d\u7269\u8f66\u52a0\u51cf\u5546\u54c1\u7b49\u573a\u666f")]),e("uni-section",{attrs:{title:"\u57fa\u672c\u7528\u6cd5",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box")],1),e("uni-section",{attrs:{title:"\u8bbe\u7f6e\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{min:2,max:9,value:5}})],1),e("uni-section",{attrs:{title:"\u8bbe\u7f6e\u6b65\u957f\uff08\u6b65\u957f0.1)",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{step:.1}})],1),e("uni-section",{attrs:{title:"\u7981\u7528\u72b6\u6001",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{disabled:!0}})],1),e("uni-section",{attrs:{title:"\u83b7\u53d6\u8f93\u5165\u7684\u503c : "+this.numberValue,type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{value:this.numberValue},on:{change:this.change}})],1)],1)])},r=[]},453:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-numbox"]},[n("view",{staticClass:["uni-numbox__minus"],on:{click:function(e){t._calcValue("minus")}}},[n("u-text",{staticClass:["uni-numbox--text"],class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled}},[t._v("-")])]),n("u-input",{staticClass:["uni-numbox__value"],attrs:{disabled:t.disabled,type:"number",value:t.inputValue},on:{blur:t._onBlur,input:function(e){t.inputValue=e.detail.value}}}),n("view",{staticClass:["uni-numbox__plus"],on:{click:function(e){t._calcValue("plus")}}},[n("u-text",{staticClass:["uni-numbox--text"],class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled}},[t._v("+")])])],1)},o=[]},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[]},551:function(t,e,n){"use strict";n.r(e);var i=n(334),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},552:function(t,e,n){"use strict";n.r(e);var i=n(337),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},651:function(t,e,n){"use strict";n.r(e);n(6);var i=n(100);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/extUI/number-box/number-box",i.default.el="#root",new Vue(i.default)},652:function(t,e,n){"use strict";n.r(e);var i=n(453),o=n(332);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var u=n(0);var a=Object(u.a)(o.default,i.b,i.c,!1,null,"581aafb8","a42c8c70",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(551).default,this.options.style):Object.assign(this.options.style,n(551).default)}).call(a),e.default=a.exports},7:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},8:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a}});