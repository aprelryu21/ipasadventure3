const CACHE_NAME = 'ipas-adventure-kediri-v1';

// Daftar aset inti yang wajib disimpan agar game bisa berjalan offline
const assetsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/script.js',
  './js/three.min.js',
  './js/GLTFLoader.js',
  './js/OrbitControls.js',
  './assets/ipas-adventur3.webp',
  './assets/background/background-main.webp',
  './assets/background/background-maps.webp',
  './assets/background/maps-kediri.webp',
  './assets/background/maps-kandangan.webp'
];

// Saat Service Worker dipasang, simpan aset ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Mengaktifkan Service Worker dan membersihkan cache lama jika ada pembaruan
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Menangkap permintaan data (fetch), ambil dari cache jika offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Kembalikan dari cache jika ada, jika tidak ambil dari jaringan
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).catch(() => {
          // Fallback opsional jika koneksi putus dan file tidak ada di cache
        });
      })
  );
});