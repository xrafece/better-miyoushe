// ==UserScript==
// @name         Better Miyoushe
// @namespace    http://xrafece.com
// @version      1.4.0
// @author       Xrafece
// @description  Make Miyoushe Great Again 美化米游社页面，让米游社再次伟大！！！
// @icon         https://img-static.mihoyo.com/favicon.ico
// @match        https://act.mihoyo.com/ys/event/calculator/*
// @match        https://act.mihoyo.com/ys/app/interactive-map/*
// @match        https://www.miyoushe.com/*
// @match        https://baike.mihoyo.com/ys/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js
// @require      https://cdn.jsdelivr.net/npm/pinia@3.0.1/dist/pinia.iife.prod.js
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// ==/UserScript==

(i=>{if(typeof GM_addStyle=="function"){GM_addStyle(i);return}const e=document.createElement("style");e.textContent=i,document.head.append(e)})(' /*! tailwindcss v4.0.14 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-font-feature-settings:var(--font-sans--font-feature-settings);--default-font-variation-settings:var(--font-sans--font-variation-settings);--default-mono-font-family:var(--font-mono);--default-mono-font-feature-settings:var(--font-mono--font-feature-settings);--default-mono-font-variation-settings:var(--font-mono--font-variation-settings)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1;color:color-mix(in oklab,currentColor 50%,transparent)}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.top-1\\/2{top:50%}.right-0{right:calc(var(--spacing)*0)}.bottom-0{bottom:calc(var(--spacing)*0)}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.block{display:block}.contents{display:contents}.flex{display:flex}.h-\\[9px\\]{height:9px}.h-\\[18px\\]{height:18px}.h-\\[40px\\]{height:40px}.h-full{height:100%}.w-\\[9px\\]{width:9px}.w-\\[12px\\]{width:12px}.w-\\[40px\\]{width:40px}.w-full{width:100%}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}.rounded-lg{border-radius:var(--radius-lg)}.rounded-l-md{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}.border-none{--tw-border-style:none;border-style:none}.bg-\\[\\#00AEEC\\]{background-color:#00aeec}.bg-transparent{background-color:#0000}.p-0{padding:calc(var(--spacing)*0)}.text-white{color:var(--color-white)}.opacity-0{opacity:0}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.group-hover\\/drag\\:opacity-100:is(:where(.group\\/drag):hover *){opacity:1}.hover\\:bg-\\[\\#00AEEC\\]:hover{background-color:#00aeec}.hover\\:text-white:hover{color:var(--color-white)}}.active\\:cursor-grabbing:active{cursor:grabbing}}#make-miyoushe-great-again .el-table .cell{padding:0}#make-miyoushe-great-again .star-5{background-color:#e8d8bb}#make-miyoushe-great-again .star-4{background-color:#cbb4de}#make-miyoushe-great-again .star-3{background-color:#b6c0df}.weapon-filter img,.character-filter img{display:inline}.header{background-color:#3d2985}.mhy-qrcode-top-card,.mhy-ad-container{display:none}.mhy-rocket{bottom:110px!important}.fixed_side.mhy-qrcode-bottom-card{display:none}.mhy-home__post-wrp{display:none!important}.mhy-side-section{display:none}.mhy-side-section.game-tool{display:block}.mhy-article-page-author{top:92px!important}.mhy-home .mhy-layout__main{width:1000px}.mhy-home .mhy-layout__sub{position:absolute;left:820px}@media screen and (width>=1200px){.mhy-home .mhy-layout__sub{position:absolute;left:calc(220px + 50%)}}.mhy-home .fixed_side.mhy-layout__sub_fixed-side>div:first-child{height:0!important;display:none!important}.mhy-home .is-fixed{position:static!important}:is(.mhy-forum,.mhy-home) .mhy-article-list__body{flex-wrap:wrap;display:flex}:is(.mhy-forum,.mhy-home) .mhy-article-card{width:50%;overflow:hidden}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__content{white-space:normal;float:botton}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__img{width:440px;height:204px}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__video{width:440px;height:248px;position:relative}:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__preview>div:nth-child(2),:is(.mhy-forum,.mhy-home) .mhy-article-card .mhy-article-card__preview>div:nth-child(3){display:none}:is(.mhy-forum,.mhy-home) .mhy-activity-card,:is(.mhy-forum,.mhy-home) .mhy-news-card{width:100%}.mhy-forum .mhy-layout__main{width:880px}.mhy-forum .mhy-article-card .mhy-article-card__img{width:380px;height:170px}.mhy-forum .mhy-article-card .mhy-article-card__video{width:380px;height:214px}.mhy-forum .mhy-layout__sub,.mhy-forum .mhy-layout__sub .fixed_side{width:90px}.mhy-forum .mhy-side-section.game-tool{width:90px;height:570px;margin-top:0;display:block}.mhy-forum .game-tool .game-tool-info .tools_max_height{height:518px}.mhy-forum .game-tool .game-tool-info_max{flex-direction:column;place-content:center flex-start;align-items:center}.mhy-forum .game-tool .game-tool-info_max .game-tool-info_max_info{margin-left:0}.mhy-forum .is-fixed{width:90px!important;top:140px!important}.mhy-forum.mhy-guide-forum .mhy-layout__main{padding-top:70px}.mhy-forum.mhy-guide-forum .mhy-guide-search__form{width:1000px;left:-910px}.mhy-forum.mhy-guide-forum input{background-color:#fff}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-img-article-card{width:280px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-img-article-card .mhy-img-article-card__img{width:280px;height:280px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-article-list__body{padding-top:440px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking{width:880px;display:block;position:relative;top:-590px;left:-910px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body{padding:0;display:flex}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card:nth-child(4){display:none}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card{border-top:none;border-left:1px solid #ebebeb;border-right:1px solid #ebebeb;flex-direction:column;flex-shrink:0;width:280px;min-width:280px;margin:0 20px 0 0;padding:0}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-router-link{width:280px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__img{width:280px;height:280px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__rank{bottom:7px;right:9px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info{width:280px;height:52px;margin:10px 0;display:flex}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__top{text-overflow:ellipsis;white-space:nowrap;width:190px;height:auto;margin-left:10px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__user{margin-top:6px}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__title{text-overflow:ellipsis;width:260px;display:block}.mhy-theme-ys .mhy-forum.mhy-image-forum .mhy-side-section.mhy-image-forum__ranking .mhy-side-section__body .mhy-img-ranking-card .mhy-img-ranking-card__info .mhy-img-ranking-card__flex{flex-direction:column-reverse}div:not(.mhy-theme-ys) .mhy-forum.mhy-image-forum .mhy-img-article-card{width:280px}div:not(.mhy-theme-ys) .mhy-forum.mhy-image-forum .mhy-img-article-card .mhy-img-article-card__img{width:280px;height:280px}div:not(.mhy-theme-ys) .mhy-forum.mhy-image-forum .mhy-image-forum__4col .mhy-img-article-card{width:235px}div:not(.mhy-theme-ys) .mhy-forum.mhy-image-forum .mhy-image-forum__4col .mhy-img-article-card .mhy-img-article-card__img{width:235px;height:235px}.mhy-layout.mhy-main-page.mhy-article-page.mhy-video-page .mhy-side-section{display:block!important}.bbs-qr{display:none!important}@media only screen and (width>=900px){.mhy-map .leaflet-control-zoomslider{transform:translate(-.1rem)}}.home__bbs-recommend.home__bbs-recommend--has-more{display:none}.header__logo>img{display:inline!important}@media only screen and (width>=900px){.home__aside .announcement-mask,.home__aside .home__map-btn--pc,.home__aside .home-channel,.home-block,.home__position--id-190 .home-channel__right,.summon .summon-aside{display:none!important}.home__aside .home__bbs .home__back-top{position:fixed;bottom:91px;right:37px;display:none!important}.home__banner{width:100%!important;height:300px!important}.home__map{width:100%!important}.summon{margin-top:260px!important}.summon .summon-content{width:1200px!important}.kingkong-16-item--pc{margin-right:4px;width:186px!important}.position-list{margin-right:0}.collection-bg{width:50%!important;margin:auto!important;padding-right:40px!important}.footer--home,.footer--summon{width:1200px!important}}.mhy-bbs-app-header{display:none}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page){width:1300px}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main{width:1000px}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main .mhy-article-page__main.mhy-container .ql-image .ql-image-box{width:100%!important;height:auto!important}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main .mhy-article-page__main.mhy-container .ql-image .ql-image-box img{object-fit:cover;display:block;width:auto!important;max-width:100%!important;height:auto!important;margin:0 auto!important}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main .mhy-article-page__main.mhy-container :nth-child(1 of.ql-image) .ql-image-box img{width:100%!important}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main .mhy-article-page__main.mhy-container .mhy-vod{width:100%!important;height:auto!important}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-layout__main .mhy-article-page__main.mhy-container .ql-link-card .mhy-link-card.card-mall{width:792px!important}.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-article-actions{margin-left:-760px}@media (width<=1592px){.mhy-article-page.mhy-layout.mhy-main-page:not(.mhy-video-page) .mhy-article-actions{margin-left:0;left:0}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0} ');

(function (vue, pinia) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
  const universalNavigatorsPath = "/misc/wapi/getUniversalNavigators";
  const hiddenGameToolNavigatorIds = /* @__PURE__ */ new Set([
    "3703074403",
    // 签到福利
    "2073142727"
    // 支付中心
  ]);
  const hiddenGameToolNavigatorNames = /* @__PURE__ */ new Set([
    // '支付中心',
  ]);
  let isXHROverridden = false;
  let isFetchOverridden = false;
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
    return charList;
  };
  const shouldHideGameToolNavigator = (navigator) => {
    const id = `${(navigator == null ? void 0 : navigator.id) || ""}`;
    const name = `${(navigator == null ? void 0 : navigator.name) || ""}`;
    return hiddenGameToolNavigatorIds.has(id) || hiddenGameToolNavigatorNames.has(name);
  };
  const filterUniversalNavigatorsPayload = (payload) => {
    var _a;
    if (!((_a = payload == null ? void 0 : payload.data) == null ? void 0 : _a.list) || !Array.isArray(payload.data.list)) {
      return { payload, changed: false };
    }
    let changed = false;
    const nextList = payload.data.list.map((section) => {
      if ((section == null ? void 0 : section.type) !== "WEB_GTOOL_PC" || !Array.isArray(section.navigators)) {
        return section;
      }
      const filteredNavigators = section.navigators.filter((navigator) => !shouldHideGameToolNavigator(navigator));
      if (filteredNavigators.length === section.navigators.length) {
        return section;
      }
      changed = true;
      return {
        ...section,
        navigators: filteredNavigators
      };
    });
    if (!changed) {
      return { payload, changed: false };
    }
    return {
      payload: {
        ...payload,
        data: {
          ...payload.data,
          list: nextList
        }
      },
      changed: true
    };
  };
  const applyNavigatorFilterToXhrResponse = (xhr, responseText) => {
    const parsed = JSON.parse(responseText);
    const { payload, changed } = filterUniversalNavigatorsPayload(parsed);
    if (!changed) {
      return;
    }
    const nextResponseText = JSON.stringify(payload);
    Object.defineProperty(xhr, "responseText", {
      configurable: true,
      value: nextResponseText
    });
    if (xhr.responseType === "" || xhr.responseType === "text") {
      Object.defineProperty(xhr, "response", {
        configurable: true,
        value: nextResponseText
      });
      return;
    }
    if (xhr.responseType === "json") {
      Object.defineProperty(xhr, "response", {
        configurable: true,
        value: payload
      });
      return;
    }
    Object.defineProperty(xhr, "response", {
      configurable: true,
      value: nextResponseText
    });
  };
  const getFetchUrl = (input) => {
    if (typeof input === "string") {
      return input;
    }
    if (input instanceof URL) {
      return input.toString();
    }
    return input.url;
  };
  const overrideFetch = () => {
    if (isFetchOverridden) {
      return;
    }
    isFetchOverridden = true;
    const originalFetch = window.fetch.bind(window);
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      const requestUrl = getFetchUrl(args[0]);
      if (!requestUrl.includes(universalNavigatorsPath) || response.status !== 200) {
        return response;
      }
      try {
        const parsed = await response.clone().json();
        const { payload, changed } = filterUniversalNavigatorsPayload(parsed);
        if (!changed) {
          return response;
        }
        const headers = new Headers(response.headers);
        headers.delete("content-length");
        return new Response(JSON.stringify(payload), {
          status: response.status,
          statusText: response.statusText,
          headers
        });
      } catch (e) {
        console.error("Error filtering getUniversalNavigators fetch response:", e);
        return response;
      }
    };
  };
  const overrideXHR = () => {
    overrideFetch();
    if (isXHROverridden) {
      return;
    }
    isXHROverridden = true;
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async = true, user, pass) {
      const urlStr = url.toString();
      this.addEventListener(
        "readystatechange",
        function() {
          if (this.readyState === 4 && this.status === 200 && urlStr.includes(matchUrl)) {
            try {
              let requestRowData = JSON.parse(this.responseText);
              let charList = requestRowData.data.list;
              localStorage.setItem(STORGE_CHARACTER_LIST, JSON.stringify(charList));
            } catch (e) {
              console.error("Error parsing JSON:", e);
            }
          }
          if (this.readyState === 4 && this.status === 200 && urlStr.includes(universalNavigatorsPath)) {
            try {
              applyNavigatorFilterToXhrResponse(this, this.responseText);
            } catch (e) {
              console.error("Error filtering getUniversalNavigators XHR response:", e);
            }
          }
        },
        false
      );
      originalXHROpen.call(this, method, url, async, user, pass);
    };
  };
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  const blobHtmlContent = `<!doctype html>
<html lang="zh-CN">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.runtime.global.prod.js" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" crossorigin="anonymous"><\/script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>角色列表</title>
    <script type="module" crossorigin>(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const B=(f,r)=>{const n=f.__vccOpts||f;for(const[u,s]of r)n[u]=s;return n},D={class:"container"},L={class:"container-table-row table-head"},z={class:"item-cell"},I={class:"item-icon char-icon"},O={class:"char-name"},A={class:"char-level table-row-cell"},$={class:"char-cons table-row-cell"},P={class:"char-fetter table-row-cell"},F={class:"level"},M={class:"item-icon weapon-icon"},R={class:"weapon-name"},T={__name:"App",setup(f){let r=Vue.ref([]),n=Vue.ref([]);const u=async()=>{{const l=localStorage.getItem("better-miyoushe-character-list");n=JSON.parse(l||"[]")}r.value=[...n]};Vue.onMounted(()=>{u()});const s=(l,e)=>{e--,e===2&&(l.id===10000002||l.id===10000041)&&e++;const t=l.skill_list[e];let a=t.level_current,c=l.constellation_num,d="";a>9?d="rgba(199, 69, 63, 0.55)":a>8?d="rgba(134, 88, 223, 0.55)":a>5?d="rgba(61, 120, 170, 0.5)":a>3?d="rgba(61, 145, 80, 0.5)":d="rgba(68, 74, 77, 0.3)";let V="#ffffff";c>4&&(e==1||e==2||e==3)&&(a+=3,V="#5af3fd");let C=[10000096,10000087,10000086,10000085,10000084],p=[10000016,10000061,10000074,10000090];return c>2&&c<5&&(e==0&&C.includes(l.id)&&(a+=3,V="#5af3fd"),e==1&&p.includes(l.id)&&(a+=3,V="#5af3fd"),e==2&&!p.includes(l.id)&&(a+=3,V="#5af3fd"),e==3&&!p.includes(l.id)&&(a+=3,V="#5af3fd")),{backgroundImage:"url("+t.icon+")",backgroundColor:d,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",color:V}},o=(l,e)=>(e--,e==2&&(l.id==10000002||l.id==10000041)&&e++,"+"+l.skill_list[e].level_current),v=[10000117,10000118],k=[10000007],m=l=>v.includes(l.id)?1:0,E=l=>k.includes(l.id)?1:0,i=(l,e)=>t=>_.orderBy(t,[m,...l],["asc",...e]),b=()=>{r.value=_.orderBy([...n],m,"asc")},g=()=>{r.value=i(["id"],["desc"])(r.value)},y=()=>{r.value=i(["level_current"],["desc"])(r.value)},N=()=>{r.value=i([E,"fetter_level","id"],["asc","asc","desc"])(r.value)},w=()=>{r.value=i(["avatar_level","constellation_num","level_current"],["desc","desc","desc"])(r.value)},S=()=>{r.value=i([l=>{let e=l.skill_list[0].level_current+l.skill_list[1].level_current+l.skill_list[2].level_current;return(l.id===10000002||l.id===10000041)&&(e+=l.skill_list[3].level_current,e-=l.skill_list[2].level_current),e},"avatar_level","level_current","constellation_num"],["desc","desc","desc","desc"])(r.value)},h=()=>{r.value=i([l=>{let e=0;return l.skill_list.forEach(t=>{t.level_current>9&&(e+=1)}),e},"avatar_level","level_current","constellation_num"],["desc","desc","desc","desc"])(r.value)};return(l,e)=>(Vue.openBlock(),Vue.createElementBlock("div",D,[Vue.createElementVNode("div",L,[Vue.createElementVNode("div",{class:"index-cell table-row-cell",onClick:e[0]||(e[0]=t=>b())},"#"),Vue.createElementVNode("div",{class:"character-cell table-row-cell",onClick:e[1]||(e[1]=t=>g())},e[7]||(e[7]=[Vue.createElementVNode("p",null,"角色",-1)])),Vue.createElementVNode("div",{class:"char-level table-row-cell",onClick:e[2]||(e[2]=t=>y())},"等级"),Vue.createElementVNode("div",{class:"char-cons table-row-cell",onClick:e[3]||(e[3]=t=>w())},"命座"),Vue.createElementVNode("div",{class:"char-fetter table-row-cell",onClick:e[4]||(e[4]=t=>N())},"好感"),e[8]||(e[8]=Vue.createElementVNode("div",{class:"skill-cell table-row-cell"},"A",-1)),e[9]||(e[9]=Vue.createElementVNode("div",{class:"skill-cell table-row-cell"},"E",-1)),Vue.createElementVNode("div",{class:"skill-cell table-row-cell",onClick:e[5]||(e[5]=t=>h())},"Q"),Vue.createElementVNode("div",{class:"char-weapon table-row-cell",onClick:e[6]||(e[6]=t=>S())},"武器")]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(r),(t,a)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["container-table-row",a%2===0?"even-row":"odd-row"]),key:a},[Vue.createElementVNode("div",{class:Vue.normalizeClass(["index-cell table-row-cell","char-star-"+t.avatar_level])},Vue.toDisplayString(a+1),3),Vue.createElementVNode("div",{class:Vue.normalizeClass(["character-cell table-row-cell","char-star-"+t.avatar_level])},[Vue.createElementVNode("div",z,[Vue.createElementVNode("div",I,[Vue.createElementVNode("span",{class:"item-img",style:Vue.normalizeStyle({backgroundImage:"url("+t.icon+")"})},null,4)]),Vue.createElementVNode("span",O,Vue.toDisplayString(t.name),1)])],2),Vue.createElementVNode("div",A,Vue.toDisplayString(t.level_current),1),Vue.createElementVNode("div",$,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["cons","cons-"+t.constellation_num])},Vue.toDisplayString(t.constellation_num),3)]),Vue.createElementVNode("div",P,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["fetter","fetter-"+t.fetter_level])},null,2)]),(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(3,c=>Vue.createElementVNode("div",{class:"skill-cell table-row-cell",key:c},[Vue.createElementVNode("div",{class:"skill-div",style:Vue.normalizeStyle(s(t,c))},Vue.toDisplayString(o(t,c)),5)])),64)),Vue.createElementVNode("div",{class:Vue.normalizeClass(["char-weapon table-row-cell","char-star-"+t.weapon.weapon_level])},[Vue.createElementVNode("div",{class:Vue.normalizeClass(["item-cell","star-"+t.weapon.weapon_level])},[Vue.createElementVNode("span",F,Vue.toDisplayString("Lv"+t.weapon.level_current),1),Vue.createElementVNode("div",M,[Vue.createElementVNode("span",{class:"item-img",style:Vue.normalizeStyle({backgroundImage:"url("+t.weapon.icon+")"})},null,4)]),Vue.createElementVNode("span",R,Vue.toDisplayString(t.weapon.name),1)],2)],2)],2))),128))]))}},q=B(T,[["__scopeId","data-v-77d44c18"]]);Vue.createApp(q).mount("#app");<\/script>
    <style rel="stylesheet" crossorigin>body{padding:0;margin:0}::-webkit-scrollbar{display:none!important}@font-face{font-family:Number;src:url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.woff) format("woff"),url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.ttf) format("truetype")}.container[data-v-77d44c18]{min-width:1000px;box-sizing:border-box;font-family:Number,汉仪文黑-65W,YS,PingFangSC-Medium,PingFang SC,sans-serif;font-size:18px}.container-table[data-v-77d44c18]{overflow:hidden}.container-table-row[data-v-77d44c18]{display:flex;justify-content:center}.odd-row>div[data-v-77d44c18]{background-color:#f0f0f0}.even-row>div[data-v-77d44c18]{background-color:#fff}.table-row-cell[data-v-77d44c18]{display:flex;height:60px;text-align:center;align-items:center;justify-content:center;box-shadow:0 0 1px #64646466 inset}.item-icon[data-v-77d44c18]{width:100%;height:100%;border-radius:4px;position:relative;overflow:hidden}.item-icon .item-img[data-v-77d44c18]{width:100%;height:100%;display:block;background-size:contain;background-position:center;background-repeat:no-repeat}.item-cell[data-v-77d44c18]{display:flex;flex-direction:row;align-items:center;height:36px}.table-head[data-v-77d44c18]{font-weight:700;cursor:pointer}.table-head>div[data-v-77d44c18]{text-align:center;box-shadow:0 0 1px #ccc8ce;color:#d3bc8e!important;line-height:36px;background-color:#3d3c40;font-size:17px}.odd-row .char-star-5[data-v-77d44c18]{background-color:#e1d1b4!important}.even-row .char-star-5[data-v-77d44c18]{background-color:#e8d8bb!important}.odd-row .char-star-4[data-v-77d44c18]{background-color:#c4add7!important}.even-row .char-star-4[data-v-77d44c18]{background-color:#cbb4de!important}.odd-row .char-star-3[data-v-77d44c18]{background-color:#afb9d8!important}.even-row .char-star-3[data-v-77d44c18]{background-color:#b6c0df!important}.id-cell[data-v-77d44c18]{width:100px;font-size:16px}.index-cell[data-v-77d44c18]{width:40px;font-size:18px}.character-cell[data-v-77d44c18]{text-align:left;width:175px;padding-left:3px}.character-cell .char-icon[data-v-77d44c18]{width:50px;height:50px;border-radius:5px;display:inline-block;overflow:visible;background:none}.char-name[data-v-77d44c18]{width:100px;padding-left:3px}.char-level[data-v-77d44c18]{width:60px;font-size:20px}.char-cons[data-v-77d44c18],.char-fetter[data-v-77d44c18]{width:60px}.fetter[data-v-77d44c18]{width:40px;height:40px;display:inline-block;background:url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/item/fetter.png);background-size:auto 100%}.fetter.fetter-1[data-v-77d44c18]{background-position:0% 0}.fetter.fetter-2[data-v-77d44c18]{background-position:11.11111111% 0}.fetter.fetter-3[data-v-77d44c18]{background-position:22.22222222% 0}.fetter.fetter-4[data-v-77d44c18]{background-position:33.33333333% 0}.fetter.fetter-5[data-v-77d44c18]{background-position:44.44444444% 0}.fetter.fetter-6[data-v-77d44c18]{background-position:55.55555556% 0}.fetter.fetter-7[data-v-77d44c18]{background-position:66.66666667% 0}.fetter.fetter-8[data-v-77d44c18]{background-position:77.77777778% 0}.fetter.fetter-9[data-v-77d44c18]{background-position:88.88888889% 0}.fetter.fetter-10[data-v-77d44c18]{background-position:100% 0}.cons[data-v-77d44c18]{display:inline-block;vertical-align:middle;padding:0 5px;border-radius:4px;width:15px;font-size:18px;text-shadow:0 0 2px rgba(0,0,0,.5)}.cons-0[data-v-77d44c18]{background:#666;color:#fff}.cons-1[data-v-77d44c18]{background:#5cbac2;color:#fff}.cons-2[data-v-77d44c18]{background:#339d61;color:#fff}.cons-3[data-v-77d44c18]{background:#3e95b9;color:#fff}.cons-4[data-v-77d44c18]{background:#3955b7;color:#fff}.cons-5[data-v-77d44c18]{background:#531ba9cf;color:#fff}.cons-6[data-v-77d44c18]{background:#ff5722;color:#fff}.skill-cell[data-v-77d44c18]{width:60px;text-align:center;box-shadow:none!important}.skill-div[data-v-77d44c18]{display:flex;width:100%;height:100%;align-items:start;justify-content:end;color:#fff;text-shadow:0 0 2px rgba(0,0,0,.5);font-size:16px}.char-weapon[data-v-77d44c18]{text-align:left;width:300px;padding-left:3px}.char-weapon .weapon-icon[data-v-77d44c18]{width:50px;height:50px;border-radius:5px;display:inline-block;overflow:visible;background:none}.weapon-name[data-v-77d44c18]{width:175px}.reliquary-cell[data-v-77d44c18]{width:60px;text-align:center}.reliquary-div[data-v-77d44c18]{display:flex;width:56px;height:56px;align-items:start;justify-content:end;color:#f9f2e7;text-shadow:0 0 2px rgba(0,0,0,.99);border-radius:8px;font-size:16px}[data-v-77d44c18]::-webkit-scrollbar{width:6px;height:6px}[data-v-77d44c18]::-webkit-scrollbar-track{border-radius:3px;background:#0000000f;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.08)}[data-v-77d44c18]::-webkit-scrollbar-thumb{border-radius:3px;background:#0000001f;-webkit-box-shadow:inset 0 0 10px rgba(0,0,0,.2)}</style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;
  const _hoisted_1 = ["title", "aria-label"];
  const BUTTON_SIZE = 40;
  const BUTTON_GAP = 4;
  const DRAG_THRESHOLD = 4;
  const HIDE_DELAY_MS = 120;
  const MAX_Z_INDEX = 2147483647;
  const REFRESH_CONFIRM_TEXT = "是否刷新角色列表？ 提示：请勿高频点击，否则可能触发米哈游接口限流";
  const HIDE_CONFIRM_TEXT = "是否隐藏侧边按钮？";
  const DRAG_GRIP_TITLE = "拖拽移动";
  const characterListWindowName = "better-miyoushe-character-list";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "SideBtn",
    setup(__props) {
      const MIDDLE_ACTION_BOTTOM = BUTTON_SIZE + BUTTON_GAP;
      const TOP_ACTION_BOTTOM = BUTTON_SIZE * 2 + BUTTON_GAP * 2;
      const DRAG_GRIP_OFFSET = BUTTON_SIZE + BUTTON_GAP;
      const EXPANDED_HEIGHT = BUTTON_SIZE * 3 + BUTTON_GAP * 2;
      let characterListWindow = null;
      let characterListBlobUrl = null;
      let characterListWindowWatcher = null;
      let hideActionsTimer = null;
      const stopCharacterListWindowWatcher = () => {
        if (characterListWindowWatcher !== null) {
          window.clearInterval(characterListWindowWatcher);
          characterListWindowWatcher = null;
        }
      };
      const revokeCharacterListBlobUrl = () => {
        if (characterListBlobUrl) {
          URL.revokeObjectURL(characterListBlobUrl);
          characterListBlobUrl = null;
        }
      };
      const cleanupCharacterListWindow = () => {
        stopCharacterListWindowWatcher();
        revokeCharacterListBlobUrl();
        characterListWindow = null;
      };
      const syncCharacterListWindowState = () => {
        if (characterListWindow && characterListWindow.closed) {
          cleanupCharacterListWindow();
        }
      };
      const startCharacterListWindowWatcher = () => {
        stopCharacterListWindowWatcher();
        characterListWindowWatcher = window.setInterval(() => {
          if (!characterListWindow || characterListWindow.closed) {
            cleanupCharacterListWindow();
          }
        }, 1e3);
      };
      const openCharacterListWindow = (url) => {
        const opened = window.open(url, characterListWindowName);
        if (!opened) {
          return null;
        }
        characterListWindow = opened;
        opened.focus();
        startCharacterListWindowWatcher();
        return opened;
      };
      const clickBtn = () => {
        syncCharacterListWindowState();
        if (characterListWindow && !characterListWindow.closed) {
          characterListWindow.focus();
          return;
        }
        {
          revokeCharacterListBlobUrl();
          const blob = new Blob([blobHtmlContent], { type: "text/html;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const opened = openCharacterListWindow(url);
          if (!opened) {
            URL.revokeObjectURL(url);
            return;
          }
          characterListBlobUrl = url;
        }
      };
      const refresh = async () => {
        const yes = confirm(REFRESH_CONFIRM_TEXT);
        if (!yes) {
          return;
        }
        const user = await getUserGameRolesByToken();
        await fetchUserCharactorList(user.game_uid, user.region);
      };
      const sideButton = characterPanelStore();
      const hideButton = () => {
        const yes = confirm(HIDE_CONFIRM_TEXT);
        if (!yes) {
          return;
        }
        sideButton.hide();
      };
      const btnPos = useStorage(STORGE_SIDE_BUTTON_POSITION, { right: 10, bottom: 180 }, localStorage);
      const windowSize = useWindowSize({ includeScrollbar: false });
      const primaryButton = vue.ref(null);
      const dragGrip = vue.ref(null);
      const isExpanded = vue.ref(false);
      const isDragging = vue.ref(false);
      const middleActionBottom = MIDDLE_ACTION_BOTTOM;
      const topActionBottom = TOP_ACTION_BOTTOM;
      const dragGripTitle = DRAG_GRIP_TITLE;
      const dragGripStyle = {
        right: `${DRAG_GRIP_OFFSET}px`,
        bottom: "0px",
        width: `${BUTTON_SIZE}px`,
        height: `${BUTTON_SIZE}px`
      };
      const overlayStyle = vue.computed(() => ({
        right: `${btnPos.value.right}px`,
        bottom: `${btnPos.value.bottom}px`,
        width: `${BUTTON_SIZE}px`,
        height: `${isExpanded.value ? EXPANDED_HEIGHT : BUTTON_SIZE}px`,
        zIndex: `${MAX_Z_INDEX}`
      }));
      const clearHideActionsTimer = () => {
        if (hideActionsTimer !== null) {
          window.clearTimeout(hideActionsTimer);
          hideActionsTimer = null;
        }
      };
      const showActions = () => {
        clearHideActionsTimer();
        if (!isDragging.value) {
          isExpanded.value = true;
        }
      };
      const scheduleHideActions = () => {
        clearHideActionsTimer();
        if (isDragging.value) {
          return;
        }
        hideActionsTimer = window.setTimeout(() => {
          isExpanded.value = false;
          hideActionsTimer = null;
        }, HIDE_DELAY_MS);
      };
      const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
      const clampStoredPosition = () => {
        const maxRight = Math.max(0, windowSize.width.value - BUTTON_SIZE - DRAG_GRIP_OFFSET);
        const maxBottom = Math.max(0, windowSize.height.value - BUTTON_SIZE);
        btnPos.value.right = clamp(btnPos.value.right, 0, maxRight);
        btnPos.value.bottom = clamp(btnPos.value.bottom, 0, maxBottom);
      };
      vue.watch([
        () => windowSize.width.value,
        () => windowSize.height.value
      ], clampStoredPosition, { immediate: true });
      const setButtonPositionFromPointer = (clientX, clientY, pointerOffsetX, pointerOffsetY) => {
        const maxLeft = Math.max(0, windowSize.width.value - BUTTON_SIZE);
        const minLeft = Math.min(DRAG_GRIP_OFFSET, maxLeft);
        const maxTop = Math.max(0, windowSize.height.value - BUTTON_SIZE);
        const nextLeft = clamp(clientX - pointerOffsetX, minLeft, maxLeft);
        const nextTop = clamp(clientY - pointerOffsetY, 0, maxTop);
        btnPos.value.right = maxLeft - nextLeft;
        btnPos.value.bottom = maxTop - nextTop;
      };
      let dragSession = null;
      const stopDrag = () => {
        if (dragGrip.value) {
          dragGrip.value.removeEventListener("pointermove", onDragMove);
          dragGrip.value.removeEventListener("pointerup", onDragEnd);
          dragGrip.value.removeEventListener("pointercancel", onDragEnd);
        }
        dragSession = null;
        if (isDragging.value) {
          window.setTimeout(() => {
            isDragging.value = false;
          }, 50);
        }
        scheduleHideActions();
      };
      const onDragMove = (event) => {
        if (!dragSession || event.pointerId !== dragSession.pointerId) {
          return;
        }
        if (!dragSession.moved) {
          const movedX = Math.abs(event.clientX - dragSession.startX);
          const movedY = Math.abs(event.clientY - dragSession.startY);
          if (movedX < DRAG_THRESHOLD && movedY < DRAG_THRESHOLD) {
            return;
          }
          dragSession.moved = true;
          isDragging.value = true;
          isExpanded.value = false;
        }
        setButtonPositionFromPointer(
          event.clientX,
          event.clientY,
          dragSession.pointerOffsetX,
          dragSession.pointerOffsetY
        );
      };
      const onDragEnd = (event) => {
        var _a;
        if ((_a = dragGrip.value) == null ? void 0 : _a.hasPointerCapture(event.pointerId)) {
          dragGrip.value.releasePointerCapture(event.pointerId);
        }
        stopDrag();
      };
      const startDrag = (event) => {
        if (event.button !== 0 || !dragGrip.value || !primaryButton.value) {
          return;
        }
        clearHideActionsTimer();
        const buttonRect = primaryButton.value.getBoundingClientRect();
        dragSession = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          pointerOffsetX: event.clientX - buttonRect.left,
          pointerOffsetY: event.clientY - buttonRect.top,
          moved: false
        };
        dragGrip.value.setPointerCapture(event.pointerId);
        dragGrip.value.addEventListener("pointermove", onDragMove);
        dragGrip.value.addEventListener("pointerup", onDragEnd);
        dragGrip.value.addEventListener("pointercancel", onDragEnd);
      };
      const handlePrimaryClick = () => {
        if (isDragging.value) {
          return;
        }
        clickBtn();
      };
      window.addEventListener("beforeunload", cleanupCharacterListWindow);
      vue.onBeforeUnmount(() => {
        clearHideActionsTimer();
        stopDrag();
        window.removeEventListener("beforeunload", cleanupCharacterListWindow);
        cleanupCharacterListWindow();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
          vue.unref(sideButton).isShow ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "fixed",
            style: vue.normalizeStyle(overlayStyle.value),
            onMouseenter: showActions,
            onMouseleave: scheduleHideActions
          }, [
            vue.withDirectives(vue.createElementVNode("button", {
              type: "button",
              class: "absolute right-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white",
              style: vue.normalizeStyle({ bottom: `${vue.unref(topActionBottom)}px` }),
              onClick: _cache[0] || (_cache[0] = ($event) => hideButton())
            }, _cache[3] || (_cache[3] = [
              vue.createElementVNode("svg", {
                t: "1747971885242",
                class: "h-full w-full",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "3168",
                width: "200",
                height: "200"
              }, [
                vue.createElementVNode("path", {
                  d: "M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z",
                  fill: "#313131",
                  "p-id": "3169"
                }),
                vue.createElementVNode("path", {
                  d: "M635.562667 680.490667a31.786667 31.786667 0 1 0 44.928-44.928L556.928 512l123.562667-123.562667a31.744 31.744 0 1 0-44.928-44.928L512 467.072 388.437333 343.509333a31.786667 31.786667 0 1 0-44.928 44.928L467.072 512l-123.562667 123.562667a31.786667 31.786667 0 0 0 44.928 44.928L512 556.928l123.562667 123.562667z",
                  fill: "#38A2E7",
                  "p-id": "3170"
                })
              ], -1)
            ]), 4), [
              [vue.vShow, isExpanded.value]
            ]),
            vue.withDirectives(vue.createElementVNode("button", {
              type: "button",
              class: "absolute right-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white",
              style: vue.normalizeStyle({ bottom: `${vue.unref(middleActionBottom)}px` }),
              onClick: _cache[1] || (_cache[1] = ($event) => refresh())
            }, _cache[4] || (_cache[4] = [
              vue.createElementVNode("svg", {
                t: "1747969725611",
                class: "h-full w-full",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "44774",
                width: "200",
                height: "200"
              }, [
                vue.createElementVNode("path", {
                  d: "M938.666667 512c0-235.648-191.018667-426.666667-426.666667-426.666667S85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667z",
                  fill: "#313131",
                  "p-id": "44775"
                }),
                vue.createElementVNode("path", {
                  d: "M318.890667 391.253333a10.666667 10.666667 0 0 1 7.808-17.92h102.741333a7.125333 7.125333 0 0 0 7.082667-7.082666V257.621333a10.666667 10.666667 0 0 1 10.666666-10.666666h136.704a10.666667 10.666667 0 0 1 10.666667 10.666666v108.629334c0 3.925333 3.157333 7.125333 7.125333 7.125333h95.872a10.666667 10.666667 0 0 1 7.936 17.792L523.946667 593.92a10.368 10.368 0 0 1-16.512 0l-188.586667-202.666667z",
                  fill: "#EBC452",
                  "p-id": "44776"
                }),
                vue.createElementVNode("path", {
                  d: "M484.224 632.576a42.666667 42.666667 0 0 0 62.976-0.554667l90.112-100.266666h59.989333a10.666667 10.666667 0 0 1 7.936 17.792l-176.938666 196.864a17.749333 17.749333 0 0 1-26.24 0.256l-183.381334-196.992a10.666667 10.666667 0 0 1 7.808-17.92h63.872l93.866667 100.821333z",
                  fill: "#EBC452",
                  "p-id": "44777"
                })
              ], -1)
            ]), 4), [
              [vue.vShow, isExpanded.value]
            ]),
            vue.createElementVNode("div", {
              ref_key: "primaryButton",
              ref: primaryButton,
              class: "absolute bottom-0 right-0 h-[40px] w-[40px]"
            }, [
              vue.createElementVNode("button", {
                type: "button",
                class: "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white",
                onClick: handlePrimaryClick
              }, _cache[5] || (_cache[5] = [
                vue.createElementVNode("svg", {
                  t: "1747969706988",
                  class: "h-full w-full",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "44611",
                  width: "200",
                  height: "200"
                }, [
                  vue.createElementVNode("path", {
                    d: "M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z",
                    fill: "#313131",
                    "p-id": "44612"
                  }),
                  vue.createElementVNode("path", {
                    d: "M512 672a160 160 0 1 1 0-320 160 160 0 0 1 0 320zM512 725.333333a213.333333 213.333333 0 1 0 0-426.666666 213.333333 213.333333 0 0 0 0 426.666666z",
                    fill: "#EBC452",
                    "p-id": "44613"
                  })
                ], -1)
              ]))
            ], 512),
            vue.createElementVNode("button", {
              ref_key: "dragGrip",
              ref: dragGrip,
              type: "button",
              title: vue.unref(dragGripTitle),
              "aria-label": vue.unref(dragGripTitle),
              class: "group/drag absolute cursor-grab border-none bg-transparent p-0 active:cursor-grabbing",
              style: dragGripStyle,
              onMouseenter: showActions,
              onMouseleave: scheduleHideActions,
              onPointerdown: vue.withModifiers(startDrag, ["stop", "prevent"]),
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {
              }, ["stop"]))
            }, _cache[6] || (_cache[6] = [
              vue.createElementVNode("span", {
                class: "pointer-events-none absolute right-0 top-1/2 flex h-[18px] w-[12px] -translate-y-1/2 items-center justify-center rounded-l-md bg-[#00AEEC] text-white opacity-0 transition-opacity group-hover/drag:opacity-100",
                "aria-hidden": "true"
              }, [
                vue.createElementVNode("svg", {
                  viewBox: "0 0 12 12",
                  class: "h-[9px] w-[9px]"
                }, [
                  vue.createElementVNode("circle", {
                    cx: "3",
                    cy: "3",
                    r: "1",
                    fill: "currentColor"
                  }),
                  vue.createElementVNode("circle", {
                    cx: "9",
                    cy: "3",
                    r: "1",
                    fill: "currentColor"
                  }),
                  vue.createElementVNode("circle", {
                    cx: "3",
                    cy: "9",
                    r: "1",
                    fill: "currentColor"
                  }),
                  vue.createElementVNode("circle", {
                    cx: "9",
                    cy: "9",
                    r: "1",
                    fill: "currentColor"
                  })
                ])
              ], -1)
            ]), 40, _hoisted_1)
          ], 36)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$1);
      };
    }
  });
  const host = location.host;
  const pathname = location.pathname;
  const currentPageType = () => {
    if (host.includes("miyoushe.com") && pathname.includes("ys/article/")) {
      return "miyousheArticle";
    }
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
  const isMiyousheArticle = () => currentPageType() === "miyousheArticle";
  class ArticleImageUpgrader {
    constructor() {
      __publicField(this, "selector", ".mhy-article-page .ql-image .ql-image-box img");
      __publicField(this, "observer", null);
    }
    processImage(img) {
      const largeSrc = img.getAttribute("large");
      const currentSrc = img.getAttribute("src");
      if (!largeSrc) return;
      if (currentSrc !== largeSrc || img.dataset.upgraded !== largeSrc) {
        img.setAttribute("src", largeSrc);
        img.removeAttribute("srcset");
        img.dataset.upgraded = largeSrc;
        console.log("Better Miyoushe: [Delayed Sync] Image upgraded ✅");
      }
    }
    scan() {
      document.querySelectorAll(this.selector).forEach((el) => {
        this.processImage(el);
      });
    }
    // 接收一个延迟参数，默认为 500ms
    init(delay = 500) {
      if (!isMiyousheArticle()) return;
      setTimeout(() => {
        console.log(`Better Miyoushe: Module started after ${delay}ms delay.`);
        this.scan();
        this.observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.target instanceof HTMLImageElement) {
              this.processImage(mutation.target);
            } else if (mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node instanceof HTMLElement) {
                  const imgs = node.querySelectorAll(this.selector);
                  imgs.forEach((img) => this.processImage(img));
                }
              });
            }
          }
        });
        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["src", "large"]
        });
      }, delay);
    }
  }
  const initArticleModule = () => {
    const upgrader = new ArticleImageUpgrader();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => upgrader.init(10));
    } else {
      upgrader.init(10);
    }
  };
  const menu = () => {
    const showListPanle = characterPanelStore();
    if (isYsMap()) {
      showListPanle.isShow = false;
      return;
    }
    _GM_registerMenuCommand("切换侧边按钮显示状态", () => {
      showListPanle.isShow ? showListPanle.hide() : showListPanle.show();
    });
    if (!isYsCalculator()) {
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
  initArticleModule();

})(Vue, Pinia);