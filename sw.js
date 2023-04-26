const cacheName = 'ohmuralPWA-cache-v1';

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

// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
        e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return;
    }

    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});