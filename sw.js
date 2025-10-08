self.addEventListener('install', event => {
  console.log('Service Worker installato');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker attivato');
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Se la fetch fallisce (offline), puoi mostrare una risposta di fallback
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});
