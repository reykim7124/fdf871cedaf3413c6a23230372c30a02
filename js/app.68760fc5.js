(function(t){function e(e){for(var r,n,c=e[0],o=e[1],l=e[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-276fb5ac":"d0749809","chunk-bdd6f8b4":"2d9173fa"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-276fb5ac":1,"chunk-bdd6f8b4":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-276fb5ac":"b5f9e29a","chunk-bdd6f8b4":"69891555"}[t]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===s))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===r||d===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],p.parentNode.removeChild(p),a(i)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gerimis/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0991":function(t,e,a){"use strict";a("0d6b")},"0d6b":function(t,e,a){},"205e":function(t,e,a){t.exports=a.p+"img/2.abed87bf.png"},2254:function(t,e,a){},"4ddb":function(t,e,a){},"555a":function(t,e,a){t.exports=a.p+"img/icon.08a3fd18.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"app"},[a("v-main",{staticClass:"main"},[t.splash?a("SplashScreen"):t._e(),a("router-view")],1)],1)},s=[],i=a("1da1"),c=(a("96cf"),a("99af"),a("2f62")),o=a("bc3a"),l=a.n(o),d="b35ea5e07fd8768c27e25fd495fe3909",u="https://api.openweathermap.org/data/2.5/weather?appid=".concat(d,"&"),p="https://api.openweathermap.org/data/2.5/onecall?appid=".concat(d,"&exclude=minutely,hourly,alerts,current&");r["a"].use(c["a"]);var h=new c["a"].Store({state:{current:null,weathers:[],splash:!0},mutations:{setSplash:function(t){t.splash=!1},setCurrent:function(t,e){t.current=e},setWeathers:function(t,e){t.weathers.push(t.current),t.current=e}},actions:{getWeather:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.commit,n=t.dispatch,a.prev=1,null==e){a.next=13;break}return a.next=5,l.a.get("".concat(u,"lat=").concat(e.lat,"&lon=").concat(e.lon));case 5:return s=a.sent,i=s.data,a.next=9,n("getForecast",{data:i,type:e.type});case 9:if(c=a.sent,"current"===e.type&&r("setCurrent",c),"get"!==e.type){a.next=13;break}return a.abrupt("return",c);case 13:a.next=17;break;case 15:a.prev=15,a.t0=a["catch"](1);case 17:case"end":return a.stop()}}),a,null,[[1,15]])})))()},getForecast:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.state,a.prev=1,a.next=4,l.a.get("".concat(p,"lat=").concat(e.data.coord.lat,"&lon=").concat(e.data.coord.lon));case 4:return n=a.sent,s=n.data,e.data.uvi=s.daily[0].uvi,e.data.pop=s.daily[0].pop,"current"!=e.type?e.data.idx=r.weathers.length+1:e.data.idx=0,a.abrupt("return",e.data);case 12:a.prev=12,a.t0=a["catch"](1);case 14:case"end":return a.stop()}}),a,null,[[1,12]])})))()},setWeather:function(t,e){var a=t.commit;a("setWeathers",e)},setSplash:function(t){var e=t.commit;e("setSplash")}},getters:{getCurrent:function(t){return t.current},getWeathers:function(t){return t.weathers},getSplash:function(t){return t.splash}},modules:{}});function f(t){var e=t.coords.latitude,a=t.coords.longitude;h.dispatch("getWeather",{lat:e,lon:a,type:"current"})}function m(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){f(t)}))}var v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"splash-screen d-flex justify-center align-center"},[r("div",{staticClass:"d-flex flex-column align-center text-center"},[r("v-img",{attrs:{contain:"",src:a("555a"),width:"200",height:"200"}}),r("div",{staticClass:"splash-screen__title mt-n11"},[t._v("Gerimis")]),r("div",{staticClass:"splash-screen__desc mt-5"},[t._v(" Dont worry about the weather we all here ")])],1)])},g=[],b={name:"SplashScreen"},_=b,w=(a("9902"),a("2877")),x=a("6544"),C=a.n(x),y=a("adda"),k=Object(w["a"])(_,v,g,!1,null,"18d20780",null),S=k.exports;C()(k,{VImg:y["a"]});var j={methods:{getLocation:m,showPosition:f},components:{SplashScreen:S},computed:{splash:function(){return this.$store.getters["getSplash"]}},mounted:function(){this.getLocation(),setTimeout(function(){this.$store.dispatch("setSplash")}.bind(this),3e3)}},O=j,V=(a("cf25"),a("7496")),E=a("f6c4"),T=Object(w["a"])(O,n,s,!1,null,null,null),z=T.exports;C()(T,{VApp:V["a"],VMain:E["a"]});var A=a("9483");Object(A["a"])("".concat("/gerimis/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=a("f309");r["a"].use(P["a"]);var L=new P["a"]({theme:{themes:{light:{secondary:"#A098AE"}},light:!0}}),$=L,N=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Dashboard",{on:{toggleSidebar:t.toggleSidebar}}),t.open?a("Sidebar"):t._e()],1)},W=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("v-toolbar",{attrs:{color:"transparent",flat:""}},[a("v-btn",{attrs:{fab:"",small:"",depressed:"",color:"transparent"},on:{click:t.toggleSidebar}},[a("v-icon",[t._v("mdi-menu")])],1),a("v-spacer"),null!=t.current?a("v-toolbar-title",{staticClass:"toolbar__title text-capitalize"},[t._v(t._s(t.current.name))]):t._e(),a("v-spacer"),a("v-btn",{attrs:{fab:"",small:"",depressed:"",color:"transparent"}},[a("v-icon",[t._v("mdi-cog")])],1)],1),a("v-container",{staticClass:"px-6"},[null!=t.current||t.weathers.length>0?a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll.x",value:!0,expression:"true",modifiers:{x:!0}}],staticClass:"weather-wrapper"},[a("div",{staticClass:"weather-container"},[null!=t.current?a("div",[a("WeatherCard",{staticClass:"mr-6",attrs:{weather:t.current}})],1):t._e(),t._l(t.weathers,(function(e,r){return a("div",{key:"weather-"+r},[a("WeatherCard",{class:r==t.weathers.length-1?"":"mr-6",attrs:{weather:e}})],1)}))],2)]):a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{light:"",depressed:""},on:{click:t.getLocation}},[t._v("Allow Location Permission")])],1),a("div",{staticClass:"subheader mb-3 mt-6"},[t._v("News")]),t._l(t.news,(function(t,e){return a("NewsCard",{key:"news-"+e,attrs:{img:t.img,title:t.title}})}))],2)],1)},D=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2",attrs:{height:"205","max-width":"324","min-width":"324",flat:"",ripple:!1,to:"/details/"+t.weather.idx}},[a("div",{staticClass:"d-flex align-center pt-3"},[a("div",[a("div",{staticClass:"v-card__subheader white--text px-4"},[t._v(" "+t._s("Chance of rain "+(t.precipitation?t.precipitation:"No Precipitation")+"%")+" ")]),a("v-card-title",{staticClass:"text-capitalize white--text pt-0 v-card--big"},[t._v(t._s(t.weather.weather[0].description))])],1),a("v-img",{staticClass:"pa-3",attrs:{src:"https://openweathermap.org/img/wn/"+t.weather.weather[0].icon+"@2x.png",contain:"",width:"108",height:"103"}})],1),a("v-card-text",{staticClass:"py-0 px-3 white--text"},[a("div",{staticClass:"d-flex align-center"},[a("v-icon",{attrs:{dark:"",left:"",size:"16"}},[t._v("mdi-map-marker")]),t._v(" "+t._s(t.weather.name)+" ")],1),a("v-card-actions",{staticClass:"py-3 px-0 d-flex justify-space-between align-end"},[a("v-btn",{staticClass:"ml-n1 pa-0 align-self-start",attrs:{depressed:"",dark:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleTemp.apply(null,arguments)}}},[a("div",{staticClass:"v-card__temp v-card--big mr-1"},[t._v(t._s(t.calcTemp))]),a("div",{staticClass:"v-card__temp-symbol mt-n3 mr-1"}),a("div",{staticClass:"d-flex v-card__temp-degree v-card--small text-uppercase"},[t._v(" "+t._s(t.temp)+" ")])]),a("div",{staticClass:"pa-1"},[a("v-icon",{attrs:{size:"16",dark:""}},[t._v("mdi-weather-hail")]),a("span",{staticClass:"ml-1 v-card--small v-card__stat"},[t._v(t._s(t.weather.main.humidity)+"%")])],1),a("div",{staticClass:"pa-1"},[a("v-icon",{attrs:{size:"16",dark:""}},[t._v("mdi-weather-sunny")]),a("span",{staticClass:"ml-1 v-card--small v-card__stat"},[t._v(t._s(t.weather.uvi))])],1),a("div",{staticClass:"pa-1"},[a("v-icon",{attrs:{size:"16",dark:""}},[t._v("mdi-weather-windy")]),a("span",{staticClass:"ml-1 v-card--small v-card__stat"},[t._v(t._s(t.calcWind)+" mp/h")])],1)],1)],1)],1)},R=[],M=a("e036"),q={name:"WeatherCard",data:function(){return{temp:"c"}},props:{weather:Object},computed:{precipitation:M["c"],calcWind:M["b"],calcTemp:M["a"]},methods:{toggleTemp:function(){this.temp="c"==this.temp?"f":"c"}}},H=q,J=(a("0991"),a("8336")),G=a("b0af"),K=a("99d9"),U=a("132d"),Q=Object(w["a"])(H,I,R,!1,null,"132df63e",null),X=Q.exports;C()(Q,{VBtn:J["a"],VCard:G["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VIcon:U["a"],VImg:y["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-5 news-card",attrs:{color:"white","max-height":"231","min-height":"231",flat:""}},[a("div",[a("v-img",{attrs:{src:t.img}})],1),a("v-card-title",{staticClass:"py-2"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"news-card__footer d-flex justify-space-between px-5"},[a("div",{staticClass:"news-card__time"},[t._v("14 minutes ago")]),a("div",{staticClass:"news-card__author"},[t._v("Reza Media")])])],1)},Z=[],tt={name:"NewsCard",props:{img:String,title:String,subtitle:String}},et=tt,at=(a("ba33"),Object(w["a"])(et,Y,Z,!1,null,"437bfb64",null)),rt=at.exports;C()(at,{VCard:G["a"],VCardTitle:K["c"],VImg:y["a"]});var nt=a("34f3"),st={name:"Dashboard",components:{WeatherCard:X,NewsCard:rt},directives:{dragscroll:nt["a"]},computed:{current:function(){return this.$store.getters["getCurrent"]},weathers:function(){return this.$store.getters["getWeathers"]}},data:function(){return{news:[{img:a("fd08"),title:"Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature"},{img:a("205e"),title:"After $1m seed round, services marketplace RecomN targets reg..."}]}},methods:{getLocation:m,showPosition:f,toggleSidebar:function(){document.querySelector(".dashboard").classList.toggle("dashboard-slide"),this.$emit("toggleSidebar")}}},it=st,ct=(a("9e92"),a("a523")),ot=a("2fa4"),lt=a("71d9"),dt=a("2a7f"),ut=Object(w["a"])(it,B,D,!1,null,"5ea030d5",null),pt=ut.exports;C()(ut,{VBtn:J["a"],VContainer:ct["a"],VIcon:U["a"],VSpacer:ot["a"],VToolbar:lt["a"],VToolbarTitle:dt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar pt-6 pl-3 d-flex flex-column justify-space-between"},[a("div",{staticClass:"mb-12"},[a("div",{staticClass:"sidebar__subheader sidebar--white-gradient ml-2"},[t._v(" Current location ")]),null!=t.current?a("v-btn",{staticClass:"mt-3 px-2 text-capitalize",attrs:{text:"",to:"/details/"+t.current.idx}},[a("v-icon",{staticClass:"sidebar--white-gradient ml-n1",attrs:{size:"25"}},[t._v("mdi-map-marker")]),a("span",{staticClass:"sidebar__title sidebar--text ml-2"},[t._v(t._s(t.current.name))])],1):a("v-btn",{staticClass:"mt-3 px-2 text-capitalize",attrs:{text:""},on:{click:t.getLocation}},[a("span",{staticClass:"sidebar__title sidebar--text"},[t._v("Allow Location")])])],1),a("div",{staticClass:"sidebar__list d-flex flex-column"},[a("v-btn",{staticClass:"px-2 my-2 text-capitalize",attrs:{text:"",width:"fit-content",to:"/search"}},[a("div",{staticClass:"sidebar__add-location d-flex align-center"},[a("v-icon",{attrs:{size:"23",color:"#FBF99E"}},[t._v("mdi-map-marker-plus")]),a("span",{staticClass:"sidebar--text ml-2"},[t._v("Add Location")])],1)]),t._l(t.weathers,(function(e,r){return a("div",{key:r},[a("v-btn",{staticClass:"px-2 my-2 text-capitalize",attrs:{text:"",width:"fit-content",to:"/details/"+e.idx}},[a("v-icon",{staticClass:"sidebar--white-gradient ml-n1",attrs:{size:"25"}},[t._v("mdi-map-marker")]),a("span",{staticClass:"sidebar__title sidebar--text ml-2"},[t._v(t._s(e.name))])],1)],1)}))],2),a("div",{staticClass:"sidebar__footer mt-12 d-flex flex-column"},[a("v-btn",{staticClass:"sidebar--text my-2 px-2 text-capitalize",attrs:{text:"",width:"fit-content"}},[t._v("Settings")]),a("v-btn",{staticClass:"sidebar--text my-2 px-2 text-capitalize",attrs:{text:"",width:"fit-content"}},[t._v("Share this app")]),a("v-btn",{staticClass:"sidebar--text my-2 px-2 text-capitalize",attrs:{text:"",width:"fit-content"}},[t._v("Rate this app")])],1)])},ft=[],mt={name:"Sidebar",computed:{current:function(){return this.$store.getters["getCurrent"]},weathers:function(){return this.$store.getters["getWeathers"]}},methods:{getLocation:m,showPosition:f}},vt=mt,gt=(a("d450"),Object(w["a"])(vt,ht,ft,!1,null,"0178d76b",null)),bt=gt.exports;C()(gt,{VBtn:J["a"],VIcon:U["a"]});var _t={name:"Home",components:{Dashboard:pt,Sidebar:bt},data:function(){return{open:!1}},methods:{toggleSidebar:function(){this.open?this.open=!1:this.open=!0}}},wt=_t,xt=Object(w["a"])(wt,F,W,!1,null,null,null),Ct=xt.exports;r["a"].use(N["a"]);var yt=[{path:"/",name:"Home",component:Ct},{path:"/details/:id",name:"Details",component:function(){return a.e("chunk-276fb5ac").then(a.bind(null,"9f52"))}},{path:"/search",name:"Search",component:function(){return a.e("chunk-bdd6f8b4").then(a.bind(null,"2d3b"))}}],kt=new N["a"]({base:"/gerimis/",routes:yt}),St=kt;r["a"].config.productionTip=!1,new r["a"]({store:h,vuetify:$,router:St,render:function(t){return t(z)}}).$mount("#app")},"639d":function(t,e,a){},9902:function(t,e,a){"use strict";a("9adb")},"9adb":function(t,e,a){},"9e92":function(t,e,a){"use strict";a("2254")},ba33:function(t,e,a){"use strict";a("639d")},cf25:function(t,e,a){"use strict";a("fea6")},d450:function(t,e,a){"use strict";a("4ddb")},e036:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));a("b680");function r(){return(100*this.weather.pop).toFixed(0)}function n(){return"c"==this.temp?(this.weather.main.temp-273.15).toFixed(0):(9*(this.weather.main.temp-273.15)/5+32).toFixed(0)}function s(){return(2.237*this.weather.wind.speed).toFixed(0)}},fd08:function(t,e,a){t.exports=a.p+"img/1.aedd6bb3.png"},fea6:function(t,e,a){}});
//# sourceMappingURL=app.68760fc5.js.map