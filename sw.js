const CACHE_NAME = 'kick-the-habit-v1';
const urlsToCache = [
  '/kick-the-habit/',
  '/kick-the-habit/index.html',
  '/kick-the-habit/cake.png',
  '/kick-the-habit/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
