// Service worker mínimo: permite instalar la app. No guarda caché,
// así las noticias siempre se ven actualizadas.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
