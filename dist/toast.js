!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vueToast",[],t):"object"==typeof exports?exports.vueToast=t():e.vueToast=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"toast",props:{toastMsg:{default:"",type:String},isSHowToast:{default:!1,type:Boolean}},mounted:function(){var e=this;this.isSHowToast&&setTimeout(function(){e.isSHowToast=!1},2500)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o={install:function(e){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),s=n(9),a=n(8),i=r,u=a(o.a,s.a,!1,i,"data-v-68cf87a9",null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("00f4d31e",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".vue-toast-wraper[data-v-68cf87a9]{background:rgba(0,0,0,.6);color:#fff;font-size:17px;padding:10px;border-radius:12px;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;position:fixed;top:50%;left:50%;z-index:2000;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(s(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var s=l++;r=p||(p=o()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=o(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function i(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=n(7),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,m=o||{};var s=f(e,t);return r(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o],i=c[a.id];i.refs--,n.push(i)}t?(s=f(e,t),r(s)):s=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete c[i.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i=s[1],u=s[2],f=s[3],c={id:e+":"+o,css:i,media:u,sourceMap:f};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,s){var a,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,i=e.default);var f="function"==typeof i?i.options:i;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var c;if(s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=c):r&&(c=r),c){var d=f.functional,p=d?f.render:f.beforeCreate;d?(f._injectStyles=c,f.render=function(e,t){return c.call(t),p(e,t)}):f.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:i,options:f}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isSHowToast,expression:"isSHowToast"}],staticClass:"vue-toast-wraper",staticStyle:{display:"none"}},[e._v("\n"+e._s(e.toastMsg)+"\n")])},o=[],s={render:r,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=toast.js.map