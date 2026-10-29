/* Železný denník – service worker (generated) */
const CORE="zd-core-b75922d5f8", MEDIA="zd-media-f7c1176653";
const CORE_FILES=["./", "index.html", "manifest.webmanifest", "fonts/figtree.woff", "fonts/bigshoulders.woff", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "media/exercises.json", "media/t0.webp", "media/t1.webp", "media/t2.webp", "media/t3.webp", "media/t4.webp", "media/t5.webp", "media/t6.webp", "media/t7.webp", "media/t8.webp"];
const SHEETS=["media/g0.webp", "media/g1.webp", "media/g2.webp", "media/g3.webp", "media/g4.webp", "media/g5.webp", "media/g6.webp", "media/g7.webp", "media/g8.webp", "media/g9.webp", "media/g10.webp", "media/g11.webp", "media/g12.webp", "media/g13.webp", "media/g14.webp", "media/g15.webp", "media/g16.webp", "media/g17.webp", "media/g18.webp", "media/g19.webp", "media/g20.webp", "media/g21.webp", "media/g22.webp", "media/g23.webp", "media/g24.webp", "media/g25.webp", "media/g26.webp", "media/g27.webp", "media/g28.webp", "media/g29.webp", "media/g30.webp", "media/g31.webp", "media/g32.webp", "media/g33.webp", "media/g34.webp", "media/g35.webp", "media/g36.webp", "media/g37.webp", "media/g38.webp", "media/g39.webp", "media/g40.webp", "media/g41.webp", "media/g42.webp", "media/g43.webp", "media/g44.webp", "media/g45.webp", "media/g46.webp", "media/g47.webp", "media/g48.webp", "media/g49.webp", "media/g50.webp", "media/g51.webp", "media/g52.webp", "media/g53.webp", "media/g54.webp", "media/g55.webp", "media/g56.webp", "media/g57.webp", "media/g58.webp", "media/g59.webp", "media/g60.webp", "media/g61.webp", "media/g62.webp", "media/g63.webp", "media/g64.webp", "media/g65.webp", "media/g66.webp", "media/g67.webp", "media/g68.webp", "media/g69.webp", "media/g70.webp", "media/g71.webp", "media/g72.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CORE).then(c=>c.addAll(CORE_FILES)))});
self.addEventListener("activate",e=>{e.waitUntil((async()=>{
  const keep=[CORE,MEDIA];for(const k of await caches.keys())if(!keep.includes(k))await caches.delete(k);
  await self.clients.claim();
  const c=await caches.open(MEDIA);
  for(const f of SHEETS){try{if(!(await c.match(f)))await c.add(f)}catch(err){}}
})())});
self.addEventListener("message",e=>{if(e.data==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  if(req.mode==="navigate"){e.respondWith(caches.match("index.html").then(r=>r||fetch(req)));return}
  e.respondWith((async()=>{
    const hit=await caches.match(req,{ignoreSearch:true});if(hit)return hit;
    const res=await fetch(req);
    if(res.ok&&url.pathname.includes("/media/g")){const c=await caches.open(MEDIA);c.put(req,res.clone())}
    return res;
  })());
});
