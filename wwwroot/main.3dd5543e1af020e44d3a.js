(()=>{"use strict";var e={691:(e,t,r)=>{r.r(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{r(691);var e=document.querySelector("#divMessages"),t=document.querySelector("#tbMessage");document.querySelector("#btnSend").addEventListener("click",(function(){var r=t.value,n="api/data/".concat(r);fetch(n,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.text()})).then((function(t){return e.innerHTML+=t}))}))})()})();
//# sourceMappingURL=main.3dd5543e1af020e44d3a.js.map