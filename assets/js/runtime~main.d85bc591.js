(()=>{"use strict";var e,r,t,o,a,n={},i={};function u(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.loaded=!0,t.exports}u.m=n,u.c=i,e=[],u.O=(r,t,o,a)=>{if(!t){var n=1/0;for(s=0;s<e.length;s++){for(var[t,o,a]=e[s],i=!0,d=0;d<t.length;d++)(!1&a||n>=a)&&Object.keys(u.O).every((e=>u.O[e](t[d])))?t.splice(d--,1):(i=!1,a<n&&(n=a));if(i){e.splice(s--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);u.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,u.d(a,n),a},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",401:"17896441",647:"5e95c892",742:"aba21aa0",883:"3dfd71d3",924:"d589d3a7"}[e]||e)+"."+{48:"4e698553",98:"f2e11afd",237:"ce48f699",401:"fb09fa54",647:"0282f3fe",742:"bec52d12",883:"17ae4f48",924:"f6bb7db4"}[e]+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="docusaurus-docs:",u.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var i,d;if(void 0!==t)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+t){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",a+t),i.src=e),o[e]=[r];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(t))),r)return r(t)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),d&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/LangSwarm/",u.gca=function(e){return e={17896441:"401",a94703ab:"48",a7bd4aaa:"98","5e95c892":"647",aba21aa0:"742","3dfd71d3":"883",d589d3a7:"924"}[e]||e,u.p+u.u(e)},(()=>{var e={354:0,869:0};u.f.j=(r,t)=>{var o=u.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(354|869)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=u.p+u.u(r),i=new Error;u.l(n,(t=>{if(u.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}},u.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[n,i,d]=t,c=0;if(n.some((r=>0!==e[r]))){for(o in i)u.o(i,o)&&(u.m[o]=i[o]);if(d)var s=d(u)}for(r&&r(t);c<n.length;c++)a=n[c],u.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return u.O(s)},t=self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();