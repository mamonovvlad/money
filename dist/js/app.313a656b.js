(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa5f4":"9e2e8ef2","chunk-2d0bdd45":"4804fdd9","chunk-2d0c804a":"e778c46d","chunk-2d0d5c9a":"1af08966","chunk-2d0d698f":"75d0b9fc","chunk-2d0e6717":"0965fce0","chunk-2d0e95df":"e179428e","chunk-2d0e99c2":"513bcf75","chunk-2d20813a":"fc68d94f","chunk-2d209b01":"86494f1e","chunk-2d21a3d2":"d7fe8a9b","chunk-2d22c551":"c6808347","chunk-2d22d746":"c8d89e27","chunk-2d237cc7":"545e1ed7"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t);var u=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var m=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d14":function(t,e,n){t.exports=n.p+"img/moon.645b9b35.svg"},"1aa0":function(t,e,n){t.exports=n.p+"img/vk.67870a0b.svg"},3680:function(t,e,n){t.exports=n.p+"img/tel.748b1252.svg"},"39b4":function(t,e,n){t.exports=n.p+"img/inst.2291865b.svg"},"50c4d":function(t,e,n){t.exports=n.p+"img/youtube.202011c2.svg"},"557c":function(t,e,n){t.exports=n.p+"img/russia.181d1fab.svg"},5593:function(t,e,n){t.exports=n.p+"img/account.90859139.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-light",attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty_layout"},[n("router-view")],1)},i=[],s=n("2877"),u={},l=Object(s["a"])(u,o,i,!1,null,null,null),m=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_layout"},[n("Header",{on:{btnDark:t.btnDark,btnLight:t.btnLight}}),n("router-view"),n("Footer")],1)},d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"app_fon",class:t.appActive}),a("div",{staticClass:"container"},[a("div",{staticClass:"header_box"},[a("div",{staticClass:"header_block"},[t._m(0),a("Toggle",{on:{btnDark:function(e){return t.$emit("btnDark")},btnLight:function(e){return t.$emit("btnLight")}}}),t._m(1)],1),a("div",{staticClass:"header_block"},[a("div",{staticClass:"header_buttons"},[t._m(2),t._m(3),a("div",{staticClass:"account"},[a("button",{staticClass:"btn_account",class:{account_activ_btn:t.account_activ_btn},on:{click:function(e){t.account_active=!t.account_active,t.account_activ_btn=!t.account_activ_btn}}},[a("img",{attrs:{src:n("5593"),alt:"account"}})]),a("div",{staticClass:"account_box",class:{account_active:t.account_active}},[a("router-link",{attrs:{to:"/entrance"}},[t._v("Вход")]),a("router-link",{attrs:{to:"/registration"}},[t._v("Регистрация")])],1)]),a("div",{staticClass:"social",class:{social_activ_btn:t.social_activ_btn}},[a("button",{staticClass:"btn_icon",on:{click:function(e){t.social_activ=!t.social_activ,t.social_activ_btn=!t.social_activ_btn}}},[a("img",{attrs:{src:n("a718"),alt:"icon"}})]),a("div",{staticClass:"social_block"},[a("div",{staticClass:"link",class:{social_activ:t.social_activ}},[t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])])]),a("div",{staticClass:"menu"},[a("button",{staticClass:"btn_menu",class:{burger_activ_btn:t.burger_activ_btn},on:{click:function(e){t.burger_activ=!0,t.burger_activ_btn=!t.burger_activ_btn,t.appActiveFon=!0}}},[a("img",{attrs:{src:n("aabe"),alt:"menu"}})]),a("div",{staticClass:"burger",class:{burger_activ:t.burger_activ}},[a("div",{staticClass:"close",on:{click:function(e){t.burger_activ=!1,t.burger_activ_btn=!1,t.appActiveFon=!1}}},[t._m(11)]),a("div",{staticClass:"burger_menu"},[a("router-link",{attrs:{to:"/"}},[t._v("Обменять")]),a("router-link",{attrs:{to:"/news"}},[t._v("Новости")]),a("router-link",{attrs:{to:"/faq"}},[t._v("FAQ")]),a("router-link",{attrs:{to:"/reviews"}},[t._v("Отзывы")]),a("router-link",{attrs:{to:"/affiliate-program"}},[t._v("Партнерская программа")]),a("router-link",{attrs:{to:"/status"}},[t._v("Проверить статус операции")]),a("router-link",{attrs:{to:"/how-exchange"}},[t._v("Как обменять")]),a("router-link",{attrs:{to:"/agreement"}},[t._v("Соглашение")]),a("router-link",{attrs:{to:"/rules"}},[t._v("Правила")]),a("router-link",{attrs:{to:"/security"}},[t._v("Безопасность")])],1),t._m(12)])])])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_logo"},[a("img",{attrs:{src:n("88a7"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_time"},[n("p",[t._v(" График работы: "),n("span",[t._v("Ежедневно, 08:00 - 22:00")])]),n("p",[t._v(" Время на сайте: "),n("span",[t._v("22:14, UTC + 3")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_status"},[n("button",{staticClass:"status"},[t._v("Проверить статус операции")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lang"},[a("button",{staticClass:"btn_lang"},[a("img",{attrs:{src:n("557c"),alt:"languages"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"http://facebook.com/"}},[a("img",{attrs:{src:n("cf4c"),alt:"facebook"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"twitter.com"}},[a("img",{attrs:{src:n("c6b4"),alt:"twitter"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"instagram.com"}},[a("img",{attrs:{src:n("39b4"),alt:"instagram"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"ok.ru"}},[a("img",{attrs:{src:n("b7de"),alt:"ok"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"telegram.org/"}},[a("img",{attrs:{src:n("3680"),alt:"telegram"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"www.youtube.com"}},[a("img",{attrs:{src:n("50c4d"),alt:"youtube"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"vk.com"}},[a("img",{attrs:{src:n("1aa0"),alt:"vk"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"close_btn"},[n("span"),n("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-network"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("cf4c"),alt:"facebook"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("c6b4"),alt:"twitter"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("39b4"),alt:"instagram"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("b7de"),alt:"ok"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("3680"),alt:"telegram"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("50c4d"),alt:"youtube"}})]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:n("1aa0"),alt:"vk"}})])])}],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_toggle"},[a("button",{staticClass:"btn_sum",on:{click:function(e){return t.$emit("btnLight")}}},[a("img",{attrs:{src:n("9cfb"),alt:"sum"}})]),a("button",{staticClass:"btn_moon",on:{click:function(e){return t.$emit("btnDark")}}},[a("img",{attrs:{src:n("0d14"),alt:"moon"}})])])},h=[],_={},g=Object(s["a"])(_,b,h,!1,null,null,null),k=g.exports,y={props:["mode"],data:function(){return{burger_activ:!1,burger_activ_btn:!1,social_activ:!1,social_activ_btn:!1,account_active:!1,account_activ_btn:!1,appActiveFon:!1}},components:{Toggle:k},computed:{appActive:function(){return{appActiveFon:this.appActiveFon}}}},C=y,w=Object(s["a"])(C,p,v,!1,null,null,null),x=w.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer",attrs:{id:"footer"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer_box"},[n("div",{staticClass:"footer_block"},[n("p",[t._v("Лучший онлайн сервис обмена электронных и криптовалют 7money.co © 2016-2020")])]),n("div",{staticClass:"footer_block"},[n("a",{staticClass:"mail",attrs:{href:"mailto:hello@7money.co"}},[t._v("hello@7money.co")]),n("a",{staticClass:"link",attrs:{href:"https://www.bestchange.net/7money-exchanger.html",target:"_blank"}},[t._v("BESTCHANGE")])])])])])}],j={},O=Object(s["a"])(j,E,$,!1,null,null,null),A=O.exports,L={name:"app",data:function(){return{mode:"light",BtnThemesActive:!1}},components:{Header:x,Footer:A},methods:{btnDark:function(){this.mode="dark"},btnLight:function(){this.mode="light"}}},T=L,P=Object(s["a"])(T,f,d,!1,null,null,null),F=P.exports,D={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:m,MainLayout:F}},S=D,M=(n("cf25"),Object(s["a"])(S,r,c,!1,null,null,null)),H=M.exports,q=(n("d3b7"),n("8c4f"));a["a"].use(q["a"]);var B=[{path:"/",name:"home",meta:{layout:"main"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/engineering-works",name:"engineering-works",meta:{layout:"empty"},component:function(){return n.e("chunk-2d0d698f").then(n.bind(null,"72db"))}},{path:"/404",name:"404",meta:{layout:"main"},component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"/about",name:"about",meta:{layout:"main"},component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/affiliate-program",name:"affiliate-program",meta:{layout:"main"},component:function(){return n.e("chunk-2d0e99c2").then(n.bind(null,"8dee"))}},{path:"/answers",name:"answers",meta:{layout:"main"},component:function(){return n.e("chunk-2d22c551").then(n.bind(null,"f37e"))}},{path:"/blog",name:"blog",meta:{layout:"main"},component:function(){return n.e("chunk-2d237cc7").then(n.bind(null,"fd3f"))}},{path:"/blog-article",name:"blog-article",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c804a").then(n.bind(null,"52a8"))}},{path:"/error-payment",name:"error-payment",meta:{layout:"main"},component:function(){return n.e("chunk-2d209b01").then(n.bind(null,"a9b5"))}},{path:"/news",name:"news",meta:{layout:"main"},component:function(){return n.e("chunk-2d20813a").then(n.bind(null,"a2f9"))}},{path:"/payment",name:"payment",meta:{layout:"main"},component:function(){return n.e("chunk-2d0aa5f4").then(n.bind(null,"1175"))}},{path:"/reviews",name:"review",meta:{layout:"main"},component:function(){return n.e("chunk-2d0bdd45").then(n.bind(null,"2e51"))}},{path:"/status",name:"status",meta:{layout:"main"},component:function(){return n.e("chunk-2d0e6717").then(n.bind(null,"9989"))}},{path:"/successful-payment",name:"successful-payment",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d5c9a").then(n.bind(null,"707b"))}}],J=new q["a"]({mode:"history",base:"/",routes:B}),G=J;a["a"].config.productionTip=!1,new a["a"]({router:G,render:function(t){return t(H)}}).$mount("#app")},"88a7":function(t,e,n){t.exports=n.p+"img/logo.40ef7db4.svg"},"9cfb":function(t,e,n){t.exports=n.p+"img/sum.e3599e36.svg"},a718:function(t,e,n){t.exports=n.p+"img/icon.05ed30e7.svg"},aabe:function(t,e,n){t.exports=n.p+"img/menu.13e8c040.svg"},b7de:function(t,e,n){t.exports=n.p+"img/ok.bc357349.svg"},c6b4:function(t,e,n){t.exports=n.p+"img/twit.c0aba856.svg"},cf25:function(t,e,n){"use strict";var a=n("fea6"),r=n.n(a);r.a},cf4c:function(t,e,n){t.exports=n.p+"img/facebook.a10c0892.svg"},fea6:function(t,e,n){}});
//# sourceMappingURL=app.313a656b.js.map