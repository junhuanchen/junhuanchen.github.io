if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.400b092e.js",revision:null},{url:"assets/index.ff373be6.css",revision:null},{url:"index.html",revision:"4d5f8bf18fa57484e1eb8995948e4e49"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"images/icons-1024.png",revision:"81a60aa49943c292504ed5a296b8ba17"},{url:"images/icons-192.png",revision:"8801f3e19ee3b1867facdddad90f42a5"},{url:"images/icons-512.png",revision:"1c9e4a0d8d815cb14d2494e0fd7bf6f0"},{url:"manifest.webmanifest",revision:"205204aa08ff70ea04ca59c0e4951cf6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
