import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DTQOkFno.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const d=document.getElementById(\"main_nav\"),f=document.querySelector(\".logo\"),c=document.querySelectorAll(\"a\"),n=document.getElementById(\"mobile_menu_toggle_btn\");document.querySelectorAll(\"section\");n.addEventListener(\"click\",L);c.forEach(t=>t.addEventListener(\"click\",y));c.forEach(t=>t.addEventListener(\"click\",i=>g(i)));f.addEventListener(\"click\",b);window.addEventListener(\"load\",()=>c[0].classList.add(\"active\"));function L(){d.classList.toggle(\"active\"),n.classList.toggle(\"active\"),r()}function r(){n.classList.contains(\"active\")?(n.classList.remove(\"fa-bars\"),n.classList.add(\"fa-times\")):(n.classList.add(\"fa-bars\"),n.classList.remove(\"fa-times\"))}function y(){window.innerWidth<768&&p()}function p(){d.classList.remove(\"active\"),n.classList.remove(\"active\"),r()}function g(t){c.forEach(i=>{i.classList.remove(\"active\")}),t.target.classList.add(\"active\")}function b(){c[0].classList.add(\"active\")}const u=document.querySelector(\"#scroll_to_top_button\");window.addEventListener(\"scroll\",E);function E(t){window.scrollY>600?u.classList.add(\"active\"):u.classList.remove(\"active\")}const e=document.getElementById(\"video\"),S=document.querySelector(\".video-controls-container\");document.querySelectorAll(\".control\");const o=document.querySelector(\"#play_pause_btn\"),l=document.querySelector(\"#volume_control\"),k=document.querySelector(\"#current_volume\"),w=document.querySelector(\"#fullscreen_btn\");document.querySelector(\"#play_btn\");e.addEventListener(\"mouseleave\",M);e.addEventListener(\"click\",a);e.addEventListener(\"dblclick\",m);l.addEventListener(\"input\",_);o.addEventListener(\"click\",a);w.addEventListener(\"click\",C);window.addEventListener(\"keyup\",t=>h(t));window.addEventListener(\"keyup\",t=>A(t));window.addEventListener(\"load\",q);function q(){e.volume=.8,l.valueAsNumber=e.volume,v()}function M(){S.classList.remove(\"revealed\")}function _(){e.volume=l.valueAsNumber,v(),l.valueAsNumber>0?(e.play(),s()):(e.pause(),s())}function v(){k.textContent=String(Math.trunc(l.valueAsNumber*100))}function a(){e.paused?e.play():e.pause(),s()}function s(){e.paused?(o.classList.add(\"fa-play\"),o.classList.remove(\"fa-pause\")):e.paused||(o.classList.remove(\"fa-play\"),o.classList.add(\"fa-pause\"))}function h(t){t.keyCode===32&&a()}function C(){e.requestFullscreen(),e.play()}function m(){e.requestFullscreen(),document.fullscreenElement&&document.exitFullscreen(),e.play()}function A(t){t.keyCode===70&&(m(),s())}\n"}],"styles":[{"type":"external","src":"/_astro/index.B9Sbu_JS.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Victo/OneDrive/Documents/kea/2. semester/09. Indhold II/GirlTalk/webfeature/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DWSfCAHP.mjs","/src/pages/index.astro":"chunks/pages/index_RsOF2KTM.mjs","\u0000@astrojs-manifest":"manifest_CqPb8PdK.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CwPxjCj4.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D1HlLysi.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ClQSCDN_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.B9Sbu_JS.css","/favicon.svg","/css/style.css","/fonts/ObviouslyDemo-Bold.woff2","/fonts/ObviouslyDemo-BoldItalic.woff2","/videos/placeholder_video.mp4","/images/hero/hero_placeholder_bg_image.webp"],"buildFormat":"directory"});

export { manifest };
