!function(s){function e(e){for(var t,r,n=e[0],u=e[1],o=e[2],a=0,i=[];a<n.length;a++)r=n[a],d[r]&&i.push(d[r][0]),d[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(s[t]=u[t]);for(v&&v(e);i.length;)i.shift()();return c.push.apply(c,o||[]),f()}function f(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var o=r[u];0!==d[o]&&(n=!1)}n&&(c.splice(t--,1),e=p(p.s=r[0]))}return e}var r={},l={1:0},d={1:0},c=[];function p(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(c){var e=[];l[c]?e.push(l[c]):0!==l[c]&&{0:1,2:1,3:1}[c]&&e.push(l[c]=new Promise(function(e,n){for(var t="build/css/"+({0:"NotFound",2:"index",3:"server"}[c]||c)+".4529d9.css",u=p.p+t,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=(s=r[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===t||a===u))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var s;if((a=(s=i[o]).getAttribute("data-href"))===t||a===u)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var t=e&&e.target&&e.target.src||u,r=new Error("Loading CSS chunk "+c+" failed.\n("+t+")");r.request=t,delete l[c],f.parentNode.removeChild(f),n(r)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){l[c]=0}));var t,r=d[c];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,t){r=d[c]=[e,t]});e.push(r[2]=n);var u,o=document.createElement("script");o.charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.src=p.p+"build/js/"+({0:"NotFound",2:"index",3:"server"}[t=c]||t)+"."+{0:"113c73",2:"728cd4",3:"9f9252"}[t]+".js",u=function(e){o.onerror=o.onload=null,clearTimeout(a);var t=d[c];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,u=new Error("Loading chunk "+c+" failed.\n("+r+": "+n+")");u.type=r,u.request=n,t[1](u)}d[c]=void 0}};var a=setTimeout(function(){u({type:"timeout",target:o})},12e4);o.onerror=o.onload=u,document.head.appendChild(o)}return Promise.all(e)},p.m=s,p.c=r,p.d=function(e,t,r){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(p.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)p.d(r,n,function(e){return t[e]}.bind(null,n));return r},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var u=0;u<t.length;u++)e(t[u]);var v=n;c.push([17,4]),f()}([,function(e,t,r){"use strict";r.r(t);var n=r(2),u=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o);t.default=u.a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(9);t.default={name:"app"},e.exports=t.default},function(e,t,r){},,,,function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n(52)}}),e._v(" "),r("h1",[e._v("hello world")]),e._v(" "),r("router-view")],1)},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},,,,,,,,,,function(e,t,r){e.exports=r(18)},function(e,t,r){"use strict";var n=i(r(4)),u=i(r(21)),o=i(r(47));r(49);var a=i(r(50));function i(e){return e&&e.__esModule?e:{default:e}}n.default.config.productionTip=!1,new n.default({el:"#app",router:o.default,store:u.default,components:{App:a.default},render:function(e){return e("App")},beforeCreate:function(){this.$store.dispatch("initAuth")},mounted:function(){window.removeEventListener("error",window.errorHandler)}})},,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(4)),u=s(r(9)),o=s(r(22)),a=s(r(23)),i=s(r(24));function s(e){return e&&e.__esModule?e:{default:e}}n.default.use(u.default),t.default=function(){return new u.default.Store({state:o.default,mutations:a.default,actions:i.default})},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={serverActive:!1},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={changeServerState:function(e,t){e.serverActive=t}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(25),o=(n=u)&&n.__esModule?n:{default:n};t.default={initAuth:function(e){var t=e.commit;o.default.getServer().then(function(e){e.success&&t("changeServerState",e.data.isActive)}).catch(function(e){console.log("Oops, error",e)})}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=s(r(11)),o=s(r(44)),a=s(r(45)),i=r(46);function s(e){return e&&e.__esModule?e:{default:e}}var f=u.default.create({baseURL:i.baseURL,timeout:1e4});f.interceptors.response.use(function(e){var t=e.data;if(!t.success&&(t.msg.text&&""!==t.msg.text&&alert(t.msg.text),!1===t.msg.isLogin)){o.default.remove("winduser");var r=window.location.pathname+window.location.search;window.location.href="/login?referer="+encodeURIComponent(r)}return t},function(e){return Promise.reject(e)}),f.interceptors.request.use(function(e){var t=o.default.get("winduser");return t&&(e.headers.winduser=t),e},function(e){Promise.reject(e)});var c=n({},(0,a.default)(f));t.default=c,e.exports=t.default},,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(11);(n=u)&&n.__esModule;t.default=function(e){var t={getServer:function(){return e({method:"GET",url:"/api/server"})}};return t},e.exports=t.default},function(e,t,r){"use strict";e.exports={baseURL:"/"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(4)),u=o(r(48));function o(e){return e&&e.__esModule?e:{default:e}}n.default.use(u.default),t.default=new u.default({mode:"history",routes:[{path:"*",component:function(){return r.e(0).then(r.bind(null,54))}},{path:"/",component:function(){return r.e(2).then(r.bind(null,55))}},{path:"/server",component:function(){return r.e(3).then(r.bind(null,56))}}]}),e.exports=t.default},,function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=r(51),o=(n=u)&&n.__esModule?n:{default:n};t.default=o.default,e.exports=t.default},function(e,t,r){"use strict";r.r(t);var n=r(7),u=r(1);for(var o in u)"default"!==o&&function(e){r.d(t,e,function(){return u[e]})}(o);r(53);var a=r(8),i=Object(a.a)(u.default,n.a,n.b,!1,null,"bf5ca234",null);i.options.__file="index.vue",t.default=i.exports},function(e,t,r){e.exports=r.p+"assets/logo.000c5c26.png"},function(e,t,r){"use strict";var n=r(3);r.n(n).a}]);