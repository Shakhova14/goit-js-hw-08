!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("1WSnx"),a=document.querySelector(".feedback-form"),l="feedback-form-state";a.addEventListener("input",(0,o.throttle)((function(e){i[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(i))}),500)),a.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(l))),e.preventDefault(),e.target.reset(),localStorage.removeItem(l)}));var i={}}();
//# sourceMappingURL=03-feedback.216c35ec.js.map