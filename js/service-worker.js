// Nama cache untuk menyimpan file agar bisa dimainkan offline
const CACHE_NAME = 'ipas-adventure-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/engine.js',
  './js/bab1.js'
];

// 1. Proses Instalasi (Menyimpan file ke memori)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Proses Aktivasi (Membersihkan cache lama jika ada versi baru)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Proses Pengambilan (Membaca file dari cache jika tidak ada internet)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Kembalikan file dari cache, atau ambil dari internet jika belum ada
        return response || fetch(event.request);
      })
  );
});