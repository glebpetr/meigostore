(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{418:function(t,n,e){},509:function(t,n,e){"use strict";e(418)},614:function(t,n,e){"use strict";e.r(n);var o=e(0),l=(e(110),{name:"Button",components:{LoadingDots:function(){return e.e(91).then(e.bind(null,654))},Launch:function(){return e.e(85).then(e.t.bind(null,560,7))}},props:{size:{type:String,default:"md"},disabled:Boolean,to:void 0,href:String,external:{type:Boolean,default:null},loading:{type:Boolean,default:!1},color:{type:String,default:"blurple"}},data:function(){return{isLoading:!1}},computed:{type:function(){return this.href||this.to?"a":"button"},isExternalLink:function(){return!1!==this.external&&(this.external||"undefined"!=typeof window&&this.href&&!this.href.startsWith(window.location.origin))},isDisabled:function(){return this.disabled||this.isLoading},buttonClass:function(){var t;return t={},Object(o.a)(t,"bg-".concat(this.color),!0),Object(o.a)(t,"btn-".concat(this.size),!0),Object(o.a)(t,"disabled",this.isDisabled),t}},watch:{loading:function(t){this.setLoading(t)}},methods:{setLoading:function(t){var n=this;clearTimeout(this.loadingTimeout),!0===t?this.isLoading=!0:this.loadingTimeout=setTimeout((function(){return n.isLoading=t}),500)},onClick:function(t){t.preventDefault(),this.to?this.$router.push(this.to):this.href?this.isExternalLink?window.open(this.href,"_blank","noopener,noreferrer"):window.location=this.href:this.$emit("click")}}}),r=(e(509),e(43)),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"button no-select border-none rounded text-white px-2 bold-5 position-relative text-decoration-none",class:t.buttonClass,attrs:{disabled:t.isDisabled,type:"button"},on:{click:t.onClick}},[t.isLoading?e("LoadingDots",{staticClass:"absolute"}):t._e(),t._v(" "),e("div",{staticClass:"d-inline-block",class:{invisible:t.isLoading}},[t._t("default")],2),t._v(" "),t.isExternalLink?e("Launch",{staticClass:"ml-1 text-white"}):t._e()],1)}),[],!1,null,"a19e53ce",null);n.default=component.exports}}]);