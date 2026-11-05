// EcuaNews service worker v3 — modo sin conexión
// • Cascarón de la app (index, manifest, iconos): carga instantánea, se actualiza en segundo plano.
// • Noticias (API): siempre intenta la red primero; si no hay internet, muestra las últimas guardadas.
// • Imágenes de noticias: se guardan (máx. 60) para verlas sin conexión.
const VERSION = 'v3';
const SHELL = `ecuanews-shell-${VERSION}`;
const DATA  = `ecuanews-data-${VERSION}`;
const IMGS  = `ecuanews-img-${VERSION}`;
const SHELL_FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => ![SHELL, DATA, IMGS].includes(k)).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function limitar(cacheName, max) {
  const c = await caches.open(cacheName);
  const keys = await c.keys();
  if (keys.length > max) await Promise.all(keys.slice(0, keys.length - max).map(k => c.delete(k)));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 1) API de noticias: red primero, caché si no hay conexión
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(DATA).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then(r => r || new Response(JSON.stringify({ noticias: [], total: 0 }), {
          headers: { 'Content-Type': 'application/json' }
        })))
    );
    return;
  }

  // 2) Archivos propios de la app: caché primero y actualiza en segundo plano
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req, { ignoreSearch: true }).then(cached => {
        const red = fetch(req).then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
          return res;
        }).catch(() => cached);
        return cached || red;
      })
    );
    return;
  }

  // 3) Imágenes externas (portadas de noticias): caché primero, máximo 60
  if (req.destination === 'image') {
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(IMGS).then(c => c.put(req, copy)).then(() => limitar(IMGS, 60));
        }
        return res;
      }).catch(() => cached))
    );
  }
});

// ── Notificaciones push (última hora) ──
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: 'EcuaNews', body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'EcuaNews', {
    body: d.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: d.tag || 'ecuanews',
    data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('focus' in c && c.url.includes('EcuaNews')) { c.focus(); } }
    return clients.openWindow(url);
  }));
});
