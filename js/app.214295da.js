(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5895f707"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/fdf871cedaf3413c6a23230372c30a02/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"205e":function(e,t,n){e.exports=n.p+"img/2.abed87bf.png"},"470a":function(e,t,n){},"4df6":function(e,t,n){"use strict";n("5d4b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-main",{staticClass:"main"},[n("router-view")],1)],1)},o=[],i=(n("cf25"),n("2877")),s=n("6544"),c=n.n(s),l=n("7496"),u=n("f6c4"),f={},d=Object(i["a"])(f,r,o,!1,null,null,null),p=d.exports;c()(d,{VApp:l["a"],VMain:u["a"]});var v=n("9483");Object(v["a"])("".concat("/fdf871cedaf3413c6a23230372c30a02/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("2f62");a["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("f309");a["a"].use(h["a"]);var g=new h["a"]({theme:{themes:{light:{secondary:"#A098AE"}},light:!0}}),w=g,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Dashboard")],1)},C=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"},[n("v-toolbar",{attrs:{color:"transparent",elevation:"0"}},[n("v-btn",{attrs:{fab:"",small:"",elevation:"0",color:"transparent"}},[n("v-icon",[e._v("mdi-menu")])],1),n("v-spacer"),n("v-toolbar-title",{staticClass:"toolbar__title"},[e._v("Kec. Cimahi Tengah")]),n("v-spacer"),n("v-btn",{attrs:{fab:"",small:"",elevation:"0",color:"transparent"}},[n("v-icon",[e._v("mdi-cog")])],1)],1),n("v-container",{staticClass:"px-6"},[n("div",{staticClass:"weather-wrapper"},[n("div",{staticClass:"weather-container"},e._l(3,(function(e){return n("div",{key:"weather-"+e},[n("WeatherCard",{class:3==e?"":"mr-8"})],1)})),0)]),n("div",{staticClass:"subheader mb-3 mt-6"},[e._v("News")]),e._l(e.news,(function(e,t){return n("NewsCard",{key:"news-"+t,attrs:{img:e.img,title:e.title}})}))],2)],1)},x=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{height:"205","max-width":"324","min-width":"324",flat:""}})},k=[],S={name:"WeatherCard"},V=S,E=(n("fa43"),n("b0af")),T=Object(i["a"])(V,O,k,!1,null,"6a66b5da",null),A=T.exports;c()(T,{VCard:E["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-5 news-card",attrs:{color:"white","max-height":"231","min-height":"231",flat:""}},[n("div",[n("v-img",{attrs:{src:e.img}})],1),n("v-card-title",{staticClass:"py-2"},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"news-card__footer d-flex justify-space-between px-5"},[n("div",{staticClass:"news-card__time"},[e._v("14 minutes ago")]),n("div",{staticClass:"news-card__author"},[e._v("Reza Media")])])],1)},N=[],$={name:"NewsCard",props:{img:String,title:String,subtitle:String}},M=$,F=(n("ba33"),n("99d9")),D=n("adda"),J=Object(i["a"])(M,P,N,!1,null,"437bfb64",null),L=J.exports;c()(J,{VCard:E["a"],VCardTitle:F["a"],VImg:D["a"]});var W={name:"Dashboard",components:{WeatherCard:A,NewsCard:L},data:function(){return{news:[{img:n("fd08"),title:"Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature"},{img:n("205e"),title:"After $1m seed round, services marketplace RecomN targets reg..."}]}}},q=W,B=(n("4df6"),n("8336")),H=n("a523"),I=n("132d"),R=n("2fa4"),z=n("71d9"),G=n("2a7f"),K=Object(i["a"])(q,j,x,!1,null,"20b33832",null),Q=K.exports;c()(K,{VBtn:B["a"],VContainer:H["a"],VIcon:I["a"],VSpacer:R["a"],VToolbar:z["a"],VToolbarTitle:G["a"]});var U={name:"Home",components:{Dashboard:Q}},X=U,Y=Object(i["a"])(X,y,C,!1,null,null,null),Z=Y.exports;a["a"].use(_["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],te=new _["a"]({mode:"history",base:"/fdf871cedaf3413c6a23230372c30a02/",routes:ee}),ne=te;a["a"].config.productionTip=!1,new a["a"]({store:b,vuetify:w,router:ne,render:function(e){return e(p)}}).$mount("#app")},"5d4b":function(e,t,n){},"639d":function(e,t,n){},ba33:function(e,t,n){"use strict";n("639d")},cf25:function(e,t,n){"use strict";n("fea6")},fa43:function(e,t,n){"use strict";n("470a")},fd08:function(e,t,n){e.exports=n.p+"img/1.aedd6bb3.png"},fea6:function(e,t,n){}});
//# sourceMappingURL=app.214295da.js.map