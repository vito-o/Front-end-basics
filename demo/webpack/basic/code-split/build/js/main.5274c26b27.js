!function(){var e,n={},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))},r.u=function(e){return"js/comm."+r.h().slice(0,10)+".js"},r.h=function(){return"5274c26b2773201083c4"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},r.l=function(n,t,o,i){if(e[n])e[n].push(t);else{var c,u;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==n){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=n),e[n]=[t];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){var e={179:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));t.push(o[2]=i);var c=r.p+r.u(n),u=new Error;r.l(c,(function(t){if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+c+")",u.name="ChunkLoadError",u.type=i,u.request=c,o[1](u)}}),"chunk-"+n,n)}};var n=function(n,t){var o,i,c=t[0],u=t[1],a=t[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);a&&a(r)}for(n&&n(t);l<c.length;l++)i=c[l],r.o(e,i)&&e[i]&&e[i][0](),e[c[l]]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),document.addEventListener("click",(function(e){console.log(e)})),r.e(136).then(r.bind(r,735)).then((e=>{console.log(e)})).catch((()=>{console.log("文件加载失败")}))}();