const CACHE_NAME = 'finanzas-cache-v1';
const ASSETS = [
  '/',
  'index.html',
  'style.css',
  'manifest.json',
  'InsicsPNG.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/tailwind.min.css',
  'assets/fontawesome.min.css',
  'assets/chart.min.js',
  'assets/xlsx.full.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});