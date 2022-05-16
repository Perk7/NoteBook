const cacheName = 'NoteBook-cache';
const contentToCache = ['./index.html', './', './abstractHandler.js', './addNoteHandler.js', './editNoteHandler.js',
'./handlers.js', './headerHandler.js', './index.js', './render.js', './sw.js', './style.css', './note-icon.png', 
'./favicon.ico', './images/check.svg', './images/header.js', './styles/header.css', './styles/new-note.css', 
'./styles/notes.css', './styles/popup.css',];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key === cacheName) { return; }
        return caches.delete(key);
      }))
    }));
});