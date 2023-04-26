const CACHE_NAME = 'ohmuralPWA-cache-v1';

const contentToCache = [
    'index.html',
    'browserconfig.xml',
    'manifest.json',
    'css/mural.css',
    'js/audio.js',
    'js/modal.js',
    'js/scene-text.js',
    'js/touch.js',
    'fonts/MerriweatherSans-VariableFont_wght.ttf',
    'assets/images/full-mural.jpg',
    'assets/icons/android-chrome-192x192.png',
    'assets/icons/android-chrome-512x512.png',
    'assets/icons/apple-touch-icon.png',
    'assets/icons/audio-icon.svg',
    'assets/icons/favicon.ico',
    'assets/icons/favicon-16x16.png',
    'assets/icons/favicon-32x32.png',
    'assets/icons/mstile-150x150.png',
    'assets/icons/next-icon.svg',
    'assets/icons/previous-icon.svg',
    'assets/icons/safari-pinned-tab.svg'
];
for (let i = 1; i <= 46; i++) {
    contentToCache.push('assets/images/scene-' + i + '.jpg');
    contentToCache.push('assets/audio/scene-' + i + '.mp3');
}

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(contentToCache);
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