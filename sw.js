const CACHE_NAME = 'ohmuralPWA-cache-v1';

const PRECACHE_ASSETS = [
    'assets/',
    'css/',
    'fonts/',
    'js/'
]

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(async () => {
        const cache = await caches.open(CACHE_NAME);

        const cachedResponse = await cache.match(event.request);

        if (cachedResponse !== undefined) {
            return cachedResponse;
        } else {
            return fetch(event.request)
        };
    });
});