!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("vue-components",["vue"],t):"object"==typeof exports?exports["vue-components"]=t(require("vue")):e["vue-components"]=t(e.Vue)}(self,(e=>(()=>{var t={377:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(684),o=n.n(r),s=n(547),a=n.n(s)()(o());a.push([e.id,"\n.test-wrap{\r\n  border: solid 1px salmon;\r\n  padding: 10px;\n}\r\n",""]);const i=a},547:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},684:e=>{"use strict";e.exports=function(e){return e[1]}},485:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},646:(e,t,n)=>{var r=n(377);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(198).Z)("87e59042",r,!1,{})},198:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}n.d(t,{Z:()=>v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){u=n,d=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o];(c=s[i.id]).refs--,n.push(c)}for(t?h(a=r(e,t)):a=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var o=c++;r=i||(i=m()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=m(),t=C.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function C(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},895:t=>{"use strict";t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={id:e,exports:{}};return t[e](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";r.r(o),r.d(o,{default:()=>c});var e=r(895);const t={class:"test-wrap"},n=[(0,e.createElementVNode)("h1",null,"component test",-1),(0,e.createElementVNode)("hr",null,null,-1),(0,e.createElementVNode)("p",null,"this is a component of test",-1)],s={methods:{cClick(){console.log("test component!")}}};r(646);const a={Test:(0,r(485).Z)(s,[["render",function(r,o,s,a,i,c){return(0,e.openBlock)(),(0,e.createElementBlock)("div",t,n)}]])},i=function(e,t={}){i.installed||Object.keys(a).forEach((t=>{e.component(t,a[t])}))},c={version:"1.0.1",install:i}})(),o})()));