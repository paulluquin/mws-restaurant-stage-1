var cacheVersion = 'pages-cache-v2';
var urlsToCache = [
  '/',
  '/css/styles.css',
  '/css/styles_large.css',

  '/js/restaurants_info.json',
  '/js/app.js',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/ServiceWorker.js',

  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',

  '/data/restaurants.json',

  '/index.html',
  '/restaurant.html',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

console.log('Activate');
self.addEventListener('activate', function(event) {
  console.log('Activate Service Worker');

  var versionWhiteList = [cacheVersion]

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (versionWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


console.log('Fetch');
self.addEventListener('fetch', function(event) {
  event.respondWith(
    cache.match(event.request).then(function (response) {
      if (response) {
        console.log (event.request.url);
        return response;
      }
      console.log(event.request.url);
      return fetch(event.request);
    })
  );
});
