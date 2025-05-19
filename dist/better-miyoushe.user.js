// ==UserScript==
// @name         Better Miyoushe
// @namespace    http://xrafece.com
// @version      1.1.2
// @author       Xrafece
// @description  Make Miyoushe Great Again 美化米游社页面，让米游社再次伟大！！！
// @icon         https://img-static.mihoyo.com/favicon.ico
// @match        https://act.mihoyo.com/ys/*
// @match        https://www.miyoushe.com/*
// @match        https://baike.mihoyo.com/ys/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js
// @require      https://cdn.jsdelivr.net/npm/pinia@3.0.1/dist/pinia.iife.prod.js
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' /*! tailwindcss v4.0.14 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(.971 .013 17.38);--color-sky-200:oklch(.901 .058 230.902);--color-blue-200:oklch(.882 .059 254.128);--color-gray-200:oklch(.928 .006 264.531);--color-gray-500:oklch(.551 .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-bold:700;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-font-feature-settings:var(--font-sans--font-feature-settings);--default-font-variation-settings:var(--font-sans--font-variation-settings);--default-mono-font-family:var(--font-mono);--default-mono-font-feature-settings:var(--font-mono--font-feature-settings);--default-mono-font-variation-settings:var(--font-mono--font-variation-settings)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1;color:color-mix(in oklab,currentColor 50%,transparent)}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.fixed{position:fixed}.inset-0{inset:calc(var(--spacing)*0)}.z-99{z-index:99}.z-100{z-index:100}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-20{margin:calc(var(--spacing)*20)}.block{display:block}.flex{display:flex}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-15{height:calc(var(--spacing)*15)}.h-20{height:calc(var(--spacing)*20)}.h-full{height:100%}.h-screen{height:100vh}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-15{width:calc(var(--spacing)*15)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.w-screen{width:100vw}.transform{transform:var(--tw-rotate-x)var(--tw-rotate-y)var(--tw-rotate-z)var(--tw-skew-x)var(--tw-skew-y)}.cursor-pointer{cursor:pointer}.resize{resize:both}.items-center{align-items:center}.justify-center{justify-content:center}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/20{border-color:color-mix(in oklab,var(--color-gray-200)20%,transparent)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}.bg-black\\/70{background-color:color-mix(in oklab,var(--color-black)70%,transparent)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-red-50{background-color:var(--color-red-50)}.bg-sky-200{background-color:var(--color-sky-200)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-black{color:var(--color-black)}.text-white{color:var(--color-white)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.delay-100{transition-delay:.1s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media (hover:hover){.hover\\:scale-100:hover{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border:hover{border-style:var(--tw-border-style);border-width:1px}.hover\\:border-\\[\\#d3bc92\\]:hover{border-color:#d3bc92}.hover\\:bg-\\[\\#423730\\]:hover{background-color:#423730}}}#make-miyoushe-great-again .el-table .cell{padding:0}#make-miyoushe-great-again .star-5{background-color:#e8d8bb}#make-miyoushe-great-again .star-4{background-color:#cbb4de}#make-miyoushe-great-again .star-3{background-color:#b6c0df}.weapon-filter img,.character-filter img{display:inline}.header{background-color:#3d2985}.mhy-qrcode-top-card,.mhy-ad-container{display:none}.mhy-rocket{bottom:110px!important}.fixed_side.mhy-qrcode-bottom-card{display:none}.mhy-home__post-wrp{display:none!important}.mhy-side-section{display:none}.mhy-side-section.game-tool{display:block}.mhy-article-page-author{top:92px!important}.mhy-home .mhy-layout__main{width:1000px}.mhy-home .mhy-layout__sub{position:absolute;left:820px}@media screen and (width>=1200px){.mhy-home .mhy-layout__sub{position:absolute;left:calc(220px + 50%)}}.mhy-home .fixed_side.mhy-layout__sub_fixed-side>div:first-child{height:0!important;display:none!important}.mhy-home .is-fixed{position:static!important}:is(.mhy-forum,.mhy-home) .mhy-article-list__body{flex-wrap:wrap;display:flex}:is(.mhy-forum,.mhy-home) .mhy-article-card{width:50%;overflow:hidden}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__content{white-space:normal;float:botton}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__img{width:440px;height:204px}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__video{width:440px;height:248px;position:relative}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__preview>div:nth-child(2),:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__preview>div:nth-child(3){display:none}.mhy-forum .mhy-layout__main{width:880px}.mhy-forum .mhy-article-card .mhy-article-card__img{width:380px;height:170px}.mhy-forum .mhy-article-card .mhy-article-card__video{width:380px;height:214px}.mhy-forum .mhy-layout__sub,.mhy-forum .mhy-layout__sub .fixed_side{width:90px}.mhy-forum .mhy-side-section.game-tool{width:90px;height:570px;margin-top:0;display:block}.mhy-forum .game-tool .game-tool-info .tools_max_height{height:518px}.mhy-forum .game-tool .game-tool-info_max{flex-direction:column;place-content:center flex-start;align-items:center}.mhy-forum .game-tool .game-tool-info_max .game-tool-info_max_info{margin-left:0}.mhy-forum .is-fixed{width:90px!important;top:140px!important}.mhy-forum.mhy-guide-forum .mhy-layout__main{padding-top:70px}.mhy-forum.mhy-guide-forum .mhy-guide-search__form{width:1000px;left:-910px}.mhy-forum.mhy-guide-forum input{background-color:#fff}.mhy-forum.mhy-image-forum .mhy-img-article-card{width:280px}.mhy-forum.mhy-image-forum .mhy-img-article-card .mhy-img-article-card__img{width:280px;height:280px}.mhy-forum.mhy-image-forum .mhy-article-list__body{padding-top:375px}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking{width:880px;height:352px;display:block;position:relative;top:-590px;left:-910px}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body{padding:0;display:flex}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card{border-top:none;border-right:1px solid #ebebeb;flex-direction:column;padding-top:0;padding-left:0}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__img{width:220px;height:220px}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info{height:52px;margin-top:10px;margin-left:0;display:flex}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__top{text-overflow:ellipsis;white-space:nowrap;width:137px;height:auto;margin-left:10px}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__user{margin-top:6px}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__title{display:block}.mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__flex{flex-direction:column-reverse}.mhy-layout.mhy-main-page.mhy-article-page.mhy-video-page .mhy-side-section{display:block!important}.bbs-qr{display:none!important}@media only screen and (width>=900px){.mhy-map .leaflet-control-zoomslider{transform:translate(-.1rem)}}.home__bbs-recommend.home__bbs-recommend--has-more{display:none}.header__logo>img{display:inline!important}@media only screen and (width>=900px){.home__aside .announcement-mask,.home__aside .home__map-btn--pc,.home__aside .home-channel,.home-block,.home__position--id-190 .home-channel__right,.summon .summon-aside{display:none!important}.home__aside .home__bbs .home__back-top{position:fixed;bottom:91px;right:37px;display:none!important}.home__banner{width:100%!important;height:300px!important}.home__map{width:100%!important}.summon{margin-top:260px!important}.summon .summon-content{width:1200px!important}.kingkong-16-item--pc{margin-right:4px;width:186px!important}.position-list{margin-right:0}.collection-bg{width:50%!important;margin:auto!important;padding-right:40px!important}.footer--home,.footer--summon{width:1200px!important}}.mhy-bbs-app-header{display:none}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0)}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0)}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0)}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0)}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0)}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}.character-btn[data-v-18d86a6e]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA8FBMVEX////////TvI/////////////UvpJHcEz////////byKX////////////////l1bb////UvZDZxJz////////Ywpf////////TvI/p4szfz6v////////////////g0bjYw5nUv5T////////WwJb////////w6NLWwpfXwZXVvpPWwJXTvI7////Tu4/ZxJnVwZXWv5P////XwJPUwJbTvZD////////VvZLl1bvfz6/WvpPXwpr////Zxp3TvpHVv5DZxqDczKnWw5nVvpDUv5PVwJTXxJzbyKHVvpT////Yw5fVvpDTvpDUvZLTvI7JR2iPAAAAT3RSTlMUD+ICJSLEACcWTxkcBR0xFeFsGx6JFyDwI0AmESMKMnunJBKKHxgiiZi1pvAI8XqYpw6mitMaIbYxQLVtDF7T0l5Be8SnmWxPtQ1709O29JWInQAABkFJREFUaN7FWmlX6kgQbZKQRzYCWdiUTRYF8Yk66vjUt6+z5f//m+nqLAbsqgSYc6Y+eDgG6qZuLV1d3exNKVEHE8OfVbUaF61a943JQC33S1ZCeWVerUlkNq84hwOok3qNkHohBg0wyLSftG27ZTQYl4Zh3QX3J+kT/3lfAHWSMNMPLKF5Syy7Hz+vVvYCONZi7bZMeSKG3y+CwAAG4u2PAkJ7gtHWSAg5gOOXVC/EFxBzpzzAtbaDehBbQ42QAKiGiPLy6gVR8BtDLQPgAPuaxXYUSxjhFANcaDu/fiyNGSBcFAFcA/t1tpfYQNM1DXAM9LTYnmKA9ccUgNBvMPYfIrBtfk4O0M8R+tss5QEuQH+DHSQNQLiQA0B8agY7UIAlzZEBqKh+80xXoij6cNkti1BVJQCQvzL9Q50rjzoLs6wNrSOu6DVABdYn2ffh5aPfT3fMh+ttAHDATPbtd6D/Kv78MFovdX39voiqWc4NKYDF/ycNIBMAXP6heyZsETIe0qHE3eBvAgBB8voGFtyC+rdRXmgI/rq1wQYAJ6iNfLkDAJ+VaFvOCkiq5gEqRAZMo2j1JZIIhdA4SksGSw1AK2i3GZHS7Ml+FfBXVjMAMAB/m16H0o8EcGYCSwzwUf2mTqg/R9MvSLwAAM+EAUOd5OeM9MIgAfDxEPrylnYAgcBNqMcADlKEuPwWFQrKUYOrVQUAd3F1b/2RgtaNvnAzB6hjLu5FZSQkal4dAHCGlFIACs0Rwxkyo3LSIziqcAALy+LxSzI93jx+RePpkoijOQdoY3X0hSE6VhdETa2+YSpnCq3TpeSGdAIb8Fal2AWIDU0SgPF93IBNarV76dPRZqzIQxT+6CgAZ/+Y8WYikD4VPz7PavVSVrXfN0kAGxKAF6I7HCBk3vIDjrAwiwB8VseCSFB0012HT0+XYfj4tSNhacV0CmAOVbSP5bEn+P0xeqX1Nl/qTArAgBzWMABXvOJ0PX3FS+6zzk3AARqw0GBpkCTaKFK8TfL1X+nbe8sO/xOt8A4GlOMA4tVDPVpdAkQGM+rkVgLzJ2sSFZsG6IKmFcSJYvZG02Ttb3pZkft7GT6ZJi9Z4/0A4jhafxe8vGcs5t5Lg0n3ihdOUI46mQss+MrPeNl/65mbat04P5rnID3cyX0CwO0sHrLO6wbCqummBoQJ0iO1F4Ew5fVijvdc7Juiny9jSlzQnxrwMa3ml3QPHECpsPGv5JZ9/V3n6hRYA4M+nqZPXALgDkqFQbSlG23Fgp12z7rgZugXh1mmERIA/RO862JePsGWa/72XdjtfOqxoVLCAHYP5RpdcKR9i6lErhkO2VVRz/Ky4Ki1gjjdXGEWV4DaC0sQJNJAZW/6WL2WdS4r0wXdl6MyBvAgalNti9QEXYC6SUvjFW1n51TjFafaNsKYuaNe6uMFCZA0XqQT2Ov1Zjl82RKuqB1ziyt2kuaXGHF9l/TTL8StqWknz2PRXU8ojhj7Fqvq6PlYzcQrYAgAaI7ihafzZ7yExuUnxxtOUsyQ2ELRHHFPX01P4x156udpida3HY8TAIAn81GJQdQ0t764zcLOlC80f+S2sSUmmbkduWKydI3WcRdn21hwc6EJw9DL78jHQ1cnATTh4gRA1YpNGHNV+Y5I8WLObtEsruZmFceFJvD6b37enuh86mBbtFZqQG6cMyswIPyR6VeW5+HTp94D+FrBQmhjnAOBVLNIA8J4dVPOR73c+MNt6thAqrI5UvPpmen46h9w6OjhVY6MkcnmfHsoqFEkDf9Sos5UOrg5RSYtjmysaeOLM6IeHWtWpIPZI6xDGn90y49NoQgZ2GgZOToY7TCWbWGjZeGG/Q8nNvQ7xHj/wPG7cYKP92NHnxxkQ+sk72DkiKV1GD/UEcuhCPPCQ6KYJardJuP/aJsf6UEdHATO9nC1EYD1F///UWN6WNpu7fz6JQ9LwRHCiPKeMOrAvlbZ4cDaEhco/B3U13xnpyN3YURNKyYqUV8d7HxpIIaoVX0Cw7DjL2nHe92rSCBqVVsWU4ZVT59P1H0vbjzb2cWN++DOMkR6GMbcttvZxY1gcNDVE6cSUFdPgknRHZoSl2ecitWWKe9blRI3dEoApNd/7KAfX//pt+3y13/+BbH1NxWKv3iLAAAAAElFTkSuQmCC) no-repeat center/contain} ');

(function (vue, pinia) {
  'use strict';

  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
  const injectLocal = (...args) => {
    var _a;
    const key = args[0];
    const instance = (_a = vue.getCurrentInstance()) == null ? void 0 : _a.proxy;
    if (instance == null && !vue.hasInjectionContext())
      throw new Error("injectLocal must be called in setup");
    if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
      return localProvidedStateMap.get(instance)[key];
    return vue.inject(...args);
  };
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
  const notNullish = (val) => val != null;
  const toString = Object.prototype.toString;
  const isObject = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  function toRef(...args) {
    if (args.length !== 1)
      return vue.toRef(...args);
    const r = args[0];
    return typeof r === "function" ? vue.readonly(vue.customRef(() => ({ get: r, set: noop }))) : vue.ref(r);
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  const bypassFilter = (invoke) => {
    return invoke();
  };
  function pausableFilter(extendFilter = bypassFilter, options = {}) {
    const {
      initialState = "active"
    } = options;
    const isActive = toRef(initialState === "active");
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: vue.readonly(isActive), pause, resume, eventFilter };
  }
  function pxValue(px) {
    return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
  }
  function toArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function getLifeCycleTarget(target) {
    return vue.getCurrentInstance();
  }
  function watchWithFilter(source, cb, options = {}) {
    const {
      eventFilter = bypassFilter,
      ...watchOptions
    } = options;
    return vue.watch(
      source,
      createFilterWrapper(
        eventFilter,
        cb
      ),
      watchOptions
    );
  }
  function watchPausable(source, cb, options = {}) {
    const {
      eventFilter: filter,
      initialState = "active",
      ...watchOptions
    } = options;
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
    const stop = watchWithFilter(
      source,
      cb,
      {
        ...watchOptions,
        eventFilter
      }
    );
    return { stop, pause, resume, isActive };
  }
  function toRefs(objectRef, options = {}) {
    if (!vue.isRef(objectRef))
      return vue.toRefs(objectRef);
    const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
    for (const key in objectRef.value) {
      result[key] = vue.customRef(() => ({
        get() {
          return objectRef.value[key];
        },
        set(v) {
          var _a;
          const replaceRef = (_a = vue.toValue(options.replaceRef)) != null ? _a : true;
          if (replaceRef) {
            if (Array.isArray(objectRef.value)) {
              const copy = [...objectRef.value];
              copy[key] = v;
              objectRef.value = copy;
            } else {
              const newObject = { ...objectRef.value, [key]: v };
              Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
              objectRef.value = newObject;
            }
          } else {
            objectRef.value[key] = v;
          }
        }
      }));
    }
    return result;
  }
  function tryOnMounted(fn, sync = true, target) {
    const instance = getLifeCycleTarget();
    if (instance)
      vue.onMounted(fn, target);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }
  function watchImmediate(source, cb, options) {
    return vue.watch(
      source,
      cb,
      {
        ...options,
        immediate: true
      }
    );
  }
  const defaultWindow = isClient ? window : void 0;
  function unrefElement(elRef) {
    var _a;
    const plain = vue.toValue(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
  }
  function useEventListener(...args) {
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options) => {
      el.addEventListener(event, listener, options);
      return () => el.removeEventListener(event, listener, options);
    };
    const firstParamTargets = vue.computed(() => {
      const test = toArray(vue.toValue(args[0])).filter((e) => e != null);
      return test.every((e) => typeof e !== "string") ? test : void 0;
    });
    const stopWatch = watchImmediate(
      () => {
        var _a, _b;
        return [
          (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
          toArray(vue.toValue(firstParamTargets.value ? args[1] : args[0])),
          toArray(vue.unref(firstParamTargets.value ? args[2] : args[1])),
          // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
          vue.toValue(firstParamTargets.value ? args[3] : args[2])
        ];
      },
      ([raw_targets, raw_events, raw_listeners, raw_options]) => {
        cleanup();
        if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
          return;
        const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
        cleanups.push(
          ...raw_targets.flatMap(
            (el) => raw_events.flatMap(
              (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
            )
          )
        );
      },
      { flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(cleanup);
    return stop;
  }
  function useMounted() {
    const isMounted = vue.shallowRef(false);
    const instance = vue.getCurrentInstance();
    if (instance) {
      vue.onMounted(() => {
        isMounted.value = true;
      }, instance);
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return vue.computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  function useMutationObserver(target, callback, options = {}) {
    const { window: window2 = defaultWindow, ...mutationOptions } = options;
    let observer;
    const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const targets = vue.computed(() => {
      const value = vue.toValue(target);
      const items = toArray(value).map(unrefElement).filter(notNullish);
      return new Set(items);
    });
    const stopWatch = vue.watch(
      () => targets.value,
      (targets2) => {
        cleanup();
        if (isSupported.value && targets2.size) {
          observer = new MutationObserver(callback);
          targets2.forEach((el) => observer.observe(el, mutationOptions));
        }
      },
      { immediate: true, flush: "post" }
    );
    const takeRecords = () => {
      return observer == null ? void 0 : observer.takeRecords();
    };
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop,
      takeRecords
    };
  }
  const ssrWidthSymbol = Symbol("vueuse-ssr-width");
  function useSSRWidth() {
    const ssrWidth = vue.hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
    return typeof ssrWidth === "number" ? ssrWidth : void 0;
  }
  function useMediaQuery(query, options = {}) {
    const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
    const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
    const ssrSupport = vue.shallowRef(typeof ssrWidth === "number");
    const mediaQuery = vue.shallowRef();
    const matches = vue.shallowRef(false);
    const handler = (event) => {
      matches.value = event.matches;
    };
    vue.watchEffect(() => {
      if (ssrSupport.value) {
        ssrSupport.value = !isSupported.value;
        const queryStrings = vue.toValue(query).split(",");
        matches.value = queryStrings.some((queryString) => {
          const not = queryString.includes("not all");
          const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let res = Boolean(minWidth || maxWidth);
          if (minWidth && res) {
            res = ssrWidth >= pxValue(minWidth[1]);
          }
          if (maxWidth && res) {
            res = ssrWidth <= pxValue(maxWidth[1]);
          }
          return not ? !res : res;
        });
        return;
      }
      if (!isSupported.value)
        return;
      mediaQuery.value = window2.matchMedia(vue.toValue(query));
      matches.value = mediaQuery.value.matches;
    });
    useEventListener(mediaQuery, "change", handler, { passive: true });
    return vue.computed(() => matches.value);
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  const handlers = /* @__PURE__ */ getHandlers();
  function getHandlers() {
    if (!(globalKey in _global))
      _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
  }
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }
  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }
  const StorageSerializers = {
    boolean: {
      read: (v) => v === "true",
      write: (v) => String(v)
    },
    object: {
      read: (v) => JSON.parse(v),
      write: (v) => JSON.stringify(v)
    },
    number: {
      read: (v) => Number.parseFloat(v),
      write: (v) => String(v)
    },
    any: {
      read: (v) => v,
      write: (v) => String(v)
    },
    string: {
      read: (v) => v,
      write: (v) => String(v)
    },
    map: {
      read: (v) => new Map(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v.entries()))
    },
    set: {
      read: (v) => new Set(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v))
    },
    date: {
      read: (v) => new Date(v),
      write: (v) => v.toISOString()
    }
  };
  const customStorageEventName = "vueuse-storage";
  function useStorage(key, defaults2, storage, options = {}) {
    var _a;
    const {
      flush = "pre",
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window: window2 = defaultWindow,
      eventFilter,
      onError = (e) => {
        console.error(e);
      },
      initOnMounted
    } = options;
    const data = (shallow ? vue.shallowRef : vue.ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
    const keyComputed = vue.computed(() => vue.toValue(key));
    if (!storage) {
      try {
        storage = getSSRHandler("getDefaultStorage", () => {
          var _a2;
          return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
      } catch (e) {
        onError(e);
      }
    }
    if (!storage)
      return data;
    const rawInit = vue.toValue(defaults2);
    const type = guessSerializerType(rawInit);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
      data,
      () => write(data.value),
      { flush, deep, eventFilter }
    );
    vue.watch(keyComputed, () => update(), { flush });
    if (window2 && listenToStorageChanges) {
      tryOnMounted(() => {
        if (storage instanceof Storage)
          useEventListener(window2, "storage", update, { passive: true });
        else
          useEventListener(window2, customStorageEventName, updateFromCustomEvent);
        if (initOnMounted)
          update();
      });
    }
    if (!initOnMounted)
      update();
    function dispatchWriteEvent(oldValue, newValue) {
      if (window2) {
        const payload = {
          key: keyComputed.value,
          oldValue,
          newValue,
          storageArea: storage
        };
        window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
          detail: payload
        }));
      }
    }
    function write(v) {
      try {
        const oldValue = storage.getItem(keyComputed.value);
        if (v == null) {
          dispatchWriteEvent(oldValue, null);
          storage.removeItem(keyComputed.value);
        } else {
          const serialized = serializer.write(v);
          if (oldValue !== serialized) {
            storage.setItem(keyComputed.value, serialized);
            dispatchWriteEvent(oldValue, serialized);
          }
        }
      } catch (e) {
        onError(e);
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
      if (rawValue == null) {
        if (writeDefaults && rawInit != null)
          storage.setItem(keyComputed.value, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return { ...rawInit, ...value };
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== keyComputed.value)
        return;
      pauseWatch();
      try {
        if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
          data.value = read(event);
      } catch (e) {
        onError(e);
      } finally {
        if (event)
          vue.nextTick(resumeWatch);
        else
          resumeWatch();
      }
    }
    function updateFromCustomEvent(event) {
      update(event.detail);
    }
    return data;
  }
  function useDraggable(target, options = {}) {
    var _a;
    const {
      pointerTypes,
      preventDefault: preventDefault2,
      stopPropagation,
      exact,
      onMove,
      onEnd,
      onStart,
      initialValue,
      axis = "both",
      draggingElement = defaultWindow,
      containerElement,
      handle: draggingHandle = target,
      buttons = [0]
    } = options;
    const position = vue.ref(
      (_a = vue.toValue(initialValue)) != null ? _a : { x: 0, y: 0 }
    );
    const pressedDelta = vue.ref();
    const filterEvent = (e) => {
      if (pointerTypes)
        return pointerTypes.includes(e.pointerType);
      return true;
    };
    const handleEvent = (e) => {
      if (vue.toValue(preventDefault2))
        e.preventDefault();
      if (vue.toValue(stopPropagation))
        e.stopPropagation();
    };
    const start = (e) => {
      var _a2;
      if (!vue.toValue(buttons).includes(e.button))
        return;
      if (vue.toValue(options.disabled) || !filterEvent(e))
        return;
      if (vue.toValue(exact) && e.target !== vue.toValue(target))
        return;
      const container = vue.toValue(containerElement);
      const containerRect = (_a2 = container == null ? void 0 : container.getBoundingClientRect) == null ? void 0 : _a2.call(container);
      const targetRect = vue.toValue(target).getBoundingClientRect();
      const pos = {
        x: e.clientX - (container ? targetRect.left - containerRect.left + container.scrollLeft : targetRect.left),
        y: e.clientY - (container ? targetRect.top - containerRect.top + container.scrollTop : targetRect.top)
      };
      if ((onStart == null ? void 0 : onStart(pos, e)) === false)
        return;
      pressedDelta.value = pos;
      handleEvent(e);
    };
    const move = (e) => {
      if (vue.toValue(options.disabled) || !filterEvent(e))
        return;
      if (!pressedDelta.value)
        return;
      const container = vue.toValue(containerElement);
      const targetRect = vue.toValue(target).getBoundingClientRect();
      let { x, y } = position.value;
      if (axis === "x" || axis === "both") {
        x = e.clientX - pressedDelta.value.x;
        if (container)
          x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
      }
      if (axis === "y" || axis === "both") {
        y = e.clientY - pressedDelta.value.y;
        if (container)
          y = Math.min(Math.max(0, y), container.scrollHeight - targetRect.height);
      }
      position.value = {
        x,
        y
      };
      onMove == null ? void 0 : onMove(position.value, e);
      handleEvent(e);
    };
    const end = (e) => {
      if (vue.toValue(options.disabled) || !filterEvent(e))
        return;
      if (!pressedDelta.value)
        return;
      pressedDelta.value = void 0;
      onEnd == null ? void 0 : onEnd(position.value, e);
      handleEvent(e);
    };
    if (isClient) {
      const config = () => {
        var _a2;
        return {
          capture: (_a2 = options.capture) != null ? _a2 : true,
          passive: !vue.toValue(preventDefault2)
        };
      };
      useEventListener(draggingHandle, "pointerdown", start, config);
      useEventListener(draggingElement, "pointermove", move, config);
      useEventListener(draggingElement, "pointerup", end, config);
    }
    return {
      ...toRefs(position),
      position,
      isDragging: vue.computed(() => !!pressedDelta.value),
      style: vue.computed(
        () => `left:${position.value.x}px;top:${position.value.y}px;`
      )
    };
  }
  function useResizeObserver(target, callback, options = {}) {
    const { window: window2 = defaultWindow, ...observerOptions } = options;
    let observer;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const targets = vue.computed(() => {
      const _targets = vue.toValue(target);
      return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
    });
    const stopWatch = vue.watch(
      targets,
      (els) => {
        cleanup();
        if (isSupported.value && window2) {
          observer = new ResizeObserver(callback);
          for (const _el of els) {
            if (_el)
              observer.observe(_el, observerOptions);
          }
        }
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  function useElementBounding(target, options = {}) {
    const {
      reset = true,
      windowResize = true,
      windowScroll = true,
      immediate = true,
      updateTiming = "sync"
    } = options;
    const height = vue.shallowRef(0);
    const bottom = vue.shallowRef(0);
    const left = vue.shallowRef(0);
    const right = vue.shallowRef(0);
    const top = vue.shallowRef(0);
    const width = vue.shallowRef(0);
    const x = vue.shallowRef(0);
    const y = vue.shallowRef(0);
    function recalculate() {
      const el = unrefElement(target);
      if (!el) {
        if (reset) {
          height.value = 0;
          bottom.value = 0;
          left.value = 0;
          right.value = 0;
          top.value = 0;
          width.value = 0;
          x.value = 0;
          y.value = 0;
        }
        return;
      }
      const rect = el.getBoundingClientRect();
      height.value = rect.height;
      bottom.value = rect.bottom;
      left.value = rect.left;
      right.value = rect.right;
      top.value = rect.top;
      width.value = rect.width;
      x.value = rect.x;
      y.value = rect.y;
    }
    function update() {
      if (updateTiming === "sync")
        recalculate();
      else if (updateTiming === "next-frame")
        requestAnimationFrame(() => recalculate());
    }
    useResizeObserver(target, update);
    vue.watch(() => unrefElement(target), (ele) => !ele && update());
    useMutationObserver(target, update, {
      attributeFilter: ["style", "class"]
    });
    if (windowScroll)
      useEventListener("scroll", update, { capture: true, passive: true });
    if (windowResize)
      useEventListener("resize", update, { passive: true });
    tryOnMounted(() => {
      if (immediate)
        update();
    });
    return {
      height,
      bottom,
      left,
      right,
      top,
      width,
      x,
      y,
      update
    };
  }
  function useWindowSize(options = {}) {
    const {
      window: window2 = defaultWindow,
      initialWidth = Number.POSITIVE_INFINITY,
      initialHeight = Number.POSITIVE_INFINITY,
      listenOrientation = true,
      includeScrollbar = true,
      type = "inner"
    } = options;
    const width = vue.shallowRef(initialWidth);
    const height = vue.shallowRef(initialHeight);
    const update = () => {
      if (window2) {
        if (type === "outer") {
          width.value = window2.outerWidth;
          height.value = window2.outerHeight;
        } else if (type === "visual" && window2.visualViewport) {
          const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
          width.value = Math.round(visualViewportWidth * scale);
          height.value = Math.round(visualViewportHeight * scale);
        } else if (includeScrollbar) {
          width.value = window2.innerWidth;
          height.value = window2.innerHeight;
        } else {
          width.value = window2.document.documentElement.clientWidth;
          height.value = window2.document.documentElement.clientHeight;
        }
      }
    };
    update();
    tryOnMounted(update);
    const listenerOptions = { passive: true };
    useEventListener("resize", update, listenerOptions);
    if (window2 && type === "visual" && window2.visualViewport) {
      useEventListener(window2.visualViewport, "resize", update, listenerOptions);
    }
    if (listenOrientation) {
      const matches = useMediaQuery("(orientation: portrait)");
      vue.watch(matches, () => update());
    }
    return { width, height };
  }
  const STORGE_CHARACTER_LIST = "better-miyoushe-character-list";
  const STORGE_SIDE_BUTTON_POSITION = "better-miyoushe-side-btn-pos";
  const STORGE_SIDE_BUTTON_SHOW = "better-miyoushe-side-btn-show";
  const characterPanelStore = pinia.defineStore("charPanel", () => {
    const isShow = useStorage(STORGE_SIDE_BUTTON_SHOW, false, localStorage);
    const show = () => {
      isShow.value = true;
    };
    const hide = () => {
      isShow.value = false;
    };
    return { isShow, show, hide };
  });
  pinia.defineStore("charDom", () => {
    const isShow = vue.ref(false);
    const show = () => {
      isShow.value = true;
    };
    const hide = () => {
      isShow.value = false;
    };
    const toggle = () => {
      isShow.value = !isShow.value;
    };
    return { isShow, show, hide, toggle };
  });
  pinia.defineStore("charDataList", () => {
    const charList = useStorage(STORGE_CHARACTER_LIST, [], localStorage);
    const getCharacterList = () => {
      if (charList.value.length === 0) {
        return [];
      }
      return charList.value;
    };
    const setCharacterList = (data) => {
      charList.value = data;
    };
    return { charList, getCharacterList, setCharacterList };
  });
  const charactorListUrl = "https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list";
  const gameRoleUrl = "https://passport-api.mihoyo.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_cn";
  const matchUrl = "https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list";
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts && parts.length === 2) {
      const part = parts.pop();
      return part ? part.split(";").shift() : null;
    }
    return null;
  }
  const getUserGameRolesByToken = async () => {
    const resp = await fetch(gameRoleUrl, {
      headers: {
        accept: "application/json, text/plain, */*"
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include"
    });
    if (resp.status !== 200) {
      throw "resp status is not 2000";
    }
    const respBody = await resp.json();
    if (respBody.retcode !== 0) {
      throw "resp body retcode is not 0";
    }
    return respBody.data.list[0];
  };
  const fetchUserCharactorList = async (game_uid, region) => {
    const body = {
      uid: game_uid,
      region,
      element_attr_ids: [],
      weapon_cat_ids: [],
      page: 1,
      size: 512,
      lang: "zh-cn"
    };
    const deviceFp = getCookie("DEVICEFP") || "";
    const deviceId = getCookie("_MHYUUID") || "";
    const resp = await fetch(charactorListUrl, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "x-rpc-device_fp": deviceFp,
        "x-rpc-device_id": deviceId,
        "x-rpc-page": "__#",
        "x-rpc-platform": "4"
      },
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include"
    });
    if (resp.status !== 200) {
      throw "resp status is not 2000";
    }
    const respBody = await resp.json();
    if (respBody.retcode !== 0) {
      throw "resp body retcode is not 0";
    }
    const charList = respBody.data.list;
    localStorage.setItem(STORGE_CHARACTER_LIST, JSON.stringify(charList));
  };
  const overrideXHR = () => {
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
      this.addEventListener(
        "readystatechange",
        function() {
          if (this.readyState === 4 && this.status === 200 && url.includes(matchUrl)) {
            try {
              let requestRowData = JSON.parse(this.responseText);
              let charList = requestRowData.data.list;
              localStorage.setItem(STORGE_CHARACTER_LIST, JSON.stringify(charList));
            } catch (e) {
              console.error("Error parsing JSON:", e);
            }
          }
        },
        false
      );
      originalXHROpen.call(this, method, url, async, user, pass);
    };
  };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "SideButtonView",
    setup(__props) {
      const sideButton = characterPanelStore();
      const storgeSideBtnPos = STORGE_SIDE_BUTTON_POSITION;
      const clickBtn = () => {
        const pageContent = `
<!doctype html>
<html lang="zh-CN">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.runtime.global.prod.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" crossorigin="anonymous"></script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>角色列表</title>
    <script type="module" crossorigin>(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const V of o.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&r(V)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();const N=(v,n)=>{const c=v.__vccOpts||v;for(const[r,s]of n)c[r]=s;return c},w={class:"container"},h={class:"container-table-row table-head"},B={class:"item-cell"},S={class:"item-icon char-icon"},C={class:"char-name"},z={class:"char-level table-row-cell"},L={class:"char-cons table-row-cell"},D={class:"char-fetter table-row-cell"},O={class:"level"},I={class:"item-icon weapon-icon"},$={class:"weapon-name"},A={__name:"App",setup(v){const n=localStorage.getItem("better-miyoushe-character-list");let c=JSON.parse(n||"[]"),r=Vue.ref([...c]);const s=(t,e)=>{e--,e==2&&(t.id==10000002||t.id==10000041)&&e++;const l=t.skill_list[e];let a=l.level_current,u=t.constellation_num,i="";a>9?i="rgba(199, 69, 63, 0.55)":a>8?i="rgba(134, 88, 223, 0.55)":a>5?i="rgba(61, 120, 170, 0.5)":a>3?i="rgba(61, 145, 80, 0.5)":i="rgba(68, 74, 77, 0.3)";let d="#ffffff";u>4&&(e==1||e==2||e==3)&&(a+=3,d="#5af3fd");let b=[10000096,10000087,10000086,10000085,10000084],f=[10000016,10000061,10000074,10000090];return u>2&&u<5&&(e==0&&b.includes(t.id)&&(a+=3,d="#5af3fd"),e==1&&f.includes(t.id)&&(a+=3,d="#5af3fd"),e==2&&!f.includes(t.id)&&(a+=3,d="#5af3fd"),e==3&&!f.includes(t.id)&&(a+=3,d="#5af3fd")),{backgroundImage:"url("+l.icon+")",backgroundColor:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",color:d}},o=(t,e)=>(e--,e==2&&(t.id==10000002||t.id==10000041)&&e++,"+"+t.skill_list[e].level_current),V=()=>{r.value=[...c]},p=()=>{r.value=_.orderBy(r.value,["id"],["desc"])},m=()=>{r.value=_.orderBy(r.value,["level_current"],["desc"])},k=()=>{r.value=_.orderBy(r.value,["fetter_level","id"],["asc","desc"])},y=()=>{r.value=_.orderBy(r.value,["avatar_level","constellation_num","level_current"],["desc","desc","desc"])},g=()=>{r.value=_.orderBy(r.value,[t=>{let e=t.skill_list[0].level_current+t.skill_list[1].level_current+t.skill_list[2].level_current;return(t.id==10000002||t.id==10000041)&&(e+=t.skill_list[3].level_current,e-=t.skill_list[2].level_current),e},"avatar_level","level_current","constellation_num"],["desc","desc","desc","desc"])},E=()=>{r.value=_.orderBy(r.value,[t=>{let e=0;return t.skill_list.forEach(l=>{l.level_current>9&&(e+=1)}),e},"avatar_level","level_current","constellation_num"],["desc","desc","desc","desc"])};return(t,e)=>(Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createElementVNode("div",h,[Vue.createElementVNode("div",{class:"index-cell table-row-cell",onClick:e[0]||(e[0]=l=>V())},"#"),Vue.createElementVNode("div",{class:"character-cell table-row-cell",onClick:e[1]||(e[1]=l=>p())},e[7]||(e[7]=[Vue.createElementVNode("p",null,"角色",-1)])),Vue.createElementVNode("div",{class:"char-level table-row-cell",onClick:e[2]||(e[2]=l=>m())},"等级"),Vue.createElementVNode("div",{class:"char-cons table-row-cell",onClick:e[3]||(e[3]=l=>y())},"命座"),Vue.createElementVNode("div",{class:"char-fetter table-row-cell",onClick:e[4]||(e[4]=l=>k())},"好感"),e[8]||(e[8]=Vue.createElementVNode("div",{class:"skill-cell table-row-cell"},"A",-1)),e[9]||(e[9]=Vue.createElementVNode("div",{class:"skill-cell table-row-cell"},"E",-1)),Vue.createElementVNode("div",{class:"skill-cell table-row-cell",onClick:e[5]||(e[5]=l=>E())},"Q"),Vue.createElementVNode("div",{class:"char-weapon table-row-cell",onClick:e[6]||(e[6]=l=>g())},"武器")]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(r),(l,a)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["container-table-row",a%2===0?"even-row":"odd-row"]),key:a},[Vue.createElementVNode("div",{class:Vue.normalizeClass(["index-cell table-row-cell","char-star-"+l.avatar_level])},Vue.toDisplayString(a+1),3),Vue.createElementVNode("div",{class:Vue.normalizeClass(["character-cell table-row-cell","char-star-"+l.avatar_level])},[Vue.createElementVNode("div",B,[Vue.createElementVNode("div",S,[Vue.createElementVNode("span",{class:"item-img",style:Vue.normalizeStyle({backgroundImage:"url("+l.icon+")"})},null,4)]),Vue.createElementVNode("span",C,Vue.toDisplayString(l.name),1)])],2),Vue.createElementVNode("div",z,Vue.toDisplayString(l.level_current),1),Vue.createElementVNode("div",L,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["cons","cons-"+l.constellation_num])},Vue.toDisplayString(l.constellation_num),3)]),Vue.createElementVNode("div",D,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["fetter","fetter-"+l.fetter_level])},null,2)]),(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(3,u=>Vue.createElementVNode("div",{class:"skill-cell table-row-cell",key:u},[Vue.createElementVNode("div",{class:"skill-div",style:Vue.normalizeStyle(s(l,u))},Vue.toDisplayString(o(l,u)),5)])),64)),Vue.createElementVNode("div",{class:Vue.normalizeClass(["char-weapon table-row-cell","char-star-"+l.weapon.weapon_level])},[Vue.createElementVNode("div",{class:Vue.normalizeClass(["item-cell","star-"+l.weapon.weapon_level])},[Vue.createElementVNode("span",O,Vue.toDisplayString("Lv"+l.weapon.level_current),1),Vue.createElementVNode("div",I,[Vue.createElementVNode("span",{class:"item-img",style:Vue.normalizeStyle({backgroundImage:"url("+l.weapon.icon+")"})},null,4)]),Vue.createElementVNode("span",$,Vue.toDisplayString(l.weapon.name),1)],2)],2)],2))),128))]))}},P=N(A,[["__scopeId","data-v-9dba16e0"]]);Vue.createApp(P).mount("#app");</script>
    <style rel="stylesheet" crossorigin>body{padding:0;margin:0}::-webkit-scrollbar{display:none!important}@font-face{font-family:Number;src:url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.woff) format("woff"),url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.ttf) format("truetype")}.container[data-v-9dba16e0]{min-width:1000px;box-sizing:border-box;font-family:Number,汉仪文黑-65W,YS,PingFangSC-Medium,PingFang SC,sans-serif;font-size:18px}.container-table[data-v-9dba16e0]{overflow:hidden}.container-table-row[data-v-9dba16e0]{display:flex;justify-content:center}.odd-row>div[data-v-9dba16e0]{background-color:#f0f0f0}.even-row>div[data-v-9dba16e0]{background-color:#fff}.table-row-cell[data-v-9dba16e0]{display:flex;height:60px;text-align:center;align-items:center;justify-content:center;box-shadow:0 0 1px #64646466 inset}.item-icon[data-v-9dba16e0]{width:100%;height:100%;border-radius:4px;position:relative;overflow:hidden}.item-icon .item-img[data-v-9dba16e0]{width:100%;height:100%;display:block;background-size:contain;background-position:center;background-repeat:no-repeat}.item-cell[data-v-9dba16e0]{display:flex;flex-direction:row;align-items:center;height:36px}.table-head[data-v-9dba16e0]{font-weight:700;cursor:pointer}.table-head>div[data-v-9dba16e0]{text-align:center;box-shadow:0 0 1px #ccc8ce;color:#d3bc8e!important;line-height:36px;background-color:#3d3c40;font-size:17px}.odd-row .char-star-5[data-v-9dba16e0]{background-color:#e1d1b4!important}.even-row .char-star-5[data-v-9dba16e0]{background-color:#e8d8bb!important}.odd-row .char-star-4[data-v-9dba16e0]{background-color:#c4add7!important}.even-row .char-star-4[data-v-9dba16e0]{background-color:#cbb4de!important}.odd-row .char-star-3[data-v-9dba16e0]{background-color:#afb9d8!important}.even-row .char-star-3[data-v-9dba16e0]{background-color:#b6c0df!important}.id-cell[data-v-9dba16e0]{width:100px;font-size:16px}.index-cell[data-v-9dba16e0]{width:40px;font-size:18px}.character-cell[data-v-9dba16e0]{text-align:left;width:175px;padding-left:3px}.character-cell .char-icon[data-v-9dba16e0]{width:50px;height:50px;border-radius:5px;display:inline-block;overflow:visible;background:nvueData}.char-name[data-v-9dba16e0]{width:100px;padding-left:3px}.char-level[data-v-9dba16e0]{width:60px;font-size:20px}.char-cons[data-v-9dba16e0],.char-fetter[data-v-9dba16e0]{width:60px}.fetter[data-v-9dba16e0]{width:40px;height:40px;display:inline-block;background:url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/item/fetter.png);background-size:auto 100%}.fetter.fetter-1[data-v-9dba16e0]{background-position:0% 0}.fetter.fetter-2[data-v-9dba16e0]{background-position:11.11111111% 0}.fetter.fetter-3[data-v-9dba16e0]{background-position:22.22222222% 0}.fetter.fetter-4[data-v-9dba16e0]{background-position:33.33333333% 0}.fetter.fetter-5[data-v-9dba16e0]{background-position:44.44444444% 0}.fetter.fetter-6[data-v-9dba16e0]{background-position:55.55555556% 0}.fetter.fetter-7[data-v-9dba16e0]{background-position:66.66666667% 0}.fetter.fetter-8[data-v-9dba16e0]{background-position:77.77777778% 0}.fetter.fetter-9[data-v-9dba16e0]{background-position:88.88888889% 0}.fetter.fetter-10[data-v-9dba16e0]{background-position:100% 0}.cons[data-v-9dba16e0]{display:inline-block;vertical-align:middle;padding:0 5px;border-radius:4px;width:15px;font-size:18px;text-shadow:0 0 2px rgba(0,0,0,.5)}.cons-0[data-v-9dba16e0]{background:#666;color:#fff}.cons-1[data-v-9dba16e0]{background:#5cbac2;color:#fff}.cons-2[data-v-9dba16e0]{background:#339d61;color:#fff}.cons-3[data-v-9dba16e0]{background:#3e95b9;color:#fff}.cons-4[data-v-9dba16e0]{background:#3955b7;color:#fff}.cons-5[data-v-9dba16e0]{background:#531ba9cf;color:#fff}.cons-6[data-v-9dba16e0]{background:#ff5722;color:#fff}.skill-cell[data-v-9dba16e0]{width:60px;text-align:center;box-shadow:nvueData!important}.skill-div[data-v-9dba16e0]{display:flex;width:100%;height:100%;align-items:start;justify-content:end;color:#fff;text-shadow:0 0 2px rgba(0,0,0,.5);font-size:16px}.char-weapon[data-v-9dba16e0]{text-align:left;width:300px;padding-left:3px}.char-weapon .weapon-icon[data-v-9dba16e0]{width:50px;height:50px;border-radius:5px;display:inline-block;overflow:visible;background:nvueData}.weapon-name[data-v-9dba16e0]{width:175px}.reliquary-cell[data-v-9dba16e0]{width:60px;text-align:center}.reliquary-div[data-v-9dba16e0]{display:flex;width:56px;height:56px;align-items:start;justify-content:end;color:#f9f2e7;text-shadow:0 0 2px rgba(0,0,0,.99);border-radius:8px;font-size:16px}[data-v-9dba16e0]::-webkit-scrollbar{width:6px;height:6px}[data-v-9dba16e0]::-webkit-scrollbar-track{border-radius:3px;background:#0000000f;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.08)}[data-v-9dba16e0]::-webkit-scrollbar-thumb{border-radius:3px;background:#0000001f;-webkit-box-shadow:inset 0 0 10px rgba(0,0,0,.2)}</style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;
        const blob = new Blob([pageContent], { type: "text/html;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      };
      const target = vue.ref(null);
      const { width, height } = useElementBounding(target, { windowScroll: false });
      const btnPos = useStorage(storgeSideBtnPos, { right: 30, bottom: 30 }, localStorage);
      const isDragging = vue.ref(false);
      const windowSize = useWindowSize({ includeScrollbar: false });
      const maxPos = vue.computed(() => {
        return {
          x: windowSize.width.value - width.value,
          y: windowSize.height.value - height.value
        };
      });
      let rAF = 0;
      useDraggable(target, {
        initialValue: {
          x: windowSize.width.value - btnPos.value.right,
          y: windowSize.height.value - btnPos.value.bottom
        },
        preventDefault: true,
        handle: vue.computed(() => target.value),
        onMove: (pos) => {
          isDragging.value = true;
          btnPos.value.right = maxPos.value.x - pos.x;
          btnPos.value.bottom = maxPos.value.y - pos.y;
          cancelAnimationFrame(rAF);
          rAF = requestAnimationFrame(() => {
            if (btnPos.value.right < 0) {
              btnPos.value.right = 0;
            }
            if (btnPos.value.bottom < 0) {
              btnPos.value.bottom = 0;
            }
            if (btnPos.value.bottom > maxPos.value.y) {
              btnPos.value.bottom = maxPos.value.y;
            }
            if (btnPos.value.right > maxPos.value.x) {
              btnPos.value.right = maxPos.value.x;
            }
          });
        },
        onEnd: () => {
          setTimeout(() => {
            isDragging.value = false;
          }, 500);
        }
      });
      return (_ctx, _cache) => {
        return vue.unref(sideButton).isShow ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          style: vue.normalizeStyle({ right: vue.unref(btnPos).right + "px", bottom: vue.unref(btnPos).bottom + "px" }),
          class: "group fixed z-100"
        }, [
          vue.createElementVNode("div", {
            ref_key: "target",
            ref: target,
            class: "h-10 w-10 cursor-pointer rounded-full border border-gray-200/20 transition delay-100 duration-300 ease-in-out hover:scale-100 hover:border hover:border-[#d3bc92] hover:bg-[#423730]",
            onClick: _cache[0] || (_cache[0] = ($event) => clickBtn())
          }, _cache[1] || (_cache[1] = [
            vue.createElementVNode("div", { class: "character-btn h-full w-full" }, null, -1)
          ]), 512)
        ], 4)) : vue.createCommentVNode("", true);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const SideButtonView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18d86a6e"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(SideButtonView);
      };
    }
  });
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  const host = location.host;
  const pathname = location.pathname;
  const currentPageType = () => {
    if (host === "www.miyoushe.com") {
      return "miyoushe";
    }
    if (host === "act.mihoyo.com" && pathname.includes("ys/app/interactive-map")) {
      return "ysMap";
    }
    if (host === "act.mihoyo.com" && pathname.includes("ys/event/calculator")) {
      return "ysCalculator";
    }
    return "mihoyo";
  };
  const isYsCalculator = () => currentPageType() === "ysCalculator";
  const isYsMap = () => currentPageType() === "ysMap";
  const menu = () => {
    const showListPanle = characterPanelStore();
    if (isYsMap()) {
      showListPanle.isShow = false;
      return;
    }
    if (showListPanle.isShow) {
      _GM_registerMenuCommand("关闭角色列表", () => {
        showListPanle.isShow ? showListPanle.hide() : showListPanle.show();
      });
    }
    if (!showListPanle.isShow) {
      _GM_registerMenuCommand("角色列表", () => {
        showListPanle.isShow ? showListPanle.hide() : showListPanle.show();
      });
    }
    if (isYsCalculator()) {
      showListPanle.isShow = true;
      _GM_registerMenuCommand("刷新角色列表", async () => {
        const user = await getUserGameRolesByToken();
        await fetchUserCharactorList(user.game_uid, user.region);
      });
    }
  };
  const main = async () => {
    const app = vue.createApp(_sfc_main);
    const pinia$1 = pinia.createPinia();
    app.use(pinia$1);
    app.mount(
      (() => {
        setTimeout(async () => {
          let listStr = localStorage.getItem(STORGE_CHARACTER_LIST);
          if (listStr != null || listStr != "[]") {
            console.log("<<<<<<------------------better-miyoushe skip request");
            return;
          }
          const user = await getUserGameRolesByToken();
          await fetchUserCharactorList(user.game_uid, user.region);
        }, 0);
        const app2 = document.createElement("div");
        app2.id = "make-miyoushe-great-again";
        document.body.append(app2);
        return app2;
      })()
    );
  };
  main();
  menu();
  overrideXHR();

})(Vue, Pinia);