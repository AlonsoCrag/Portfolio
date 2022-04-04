let CACHE_NAME = "applciation-bearz-v1";

const urlsToCache = [
    '/',
    '/index.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache was opened');
            return cache.addAll(urlsToCache);
        })
        .catch(err => console.log("Failed trying to open a Cache"))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
        return fetch(event.request);
        })
    );
});