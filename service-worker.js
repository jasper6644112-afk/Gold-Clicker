const CACHE_NAME = "business-empire-v4";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/script.js",
  "/data.js",
  "/save.js",
  "/businesses.js",
  "/employees.js",
  "/realestate.js",
  "/stocks.js",
  "/bank.js",
  "/upgrades.js",
  "/ui.js"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate (cleanup old cache)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch (offline support)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});