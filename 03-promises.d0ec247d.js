function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=o.parcelRequire7bc7;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=n);var i=n("7Y9D8");formRef=document.querySelector(".form");let f=0;function l(e,o){const r=Math.random()>.3;return new Promise(((t,n)=>{setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}formRef.addEventListener("submit",(function(o){o.preventDefault();let r=Number(formRef.delay.value),t=Number(formRef.step.value),n=Number(formRef.amount.value);if(r<0||t<0||n<=0)return e(i).Notify.warning("Please enter correct value!");for(f=1;f<=n;f+=1)l(f,r).then((({position:o,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${r}ms`)})).catch((({position:o,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${r}ms`)})),r+=t}));
//# sourceMappingURL=03-promises.d0ec247d.js.map
