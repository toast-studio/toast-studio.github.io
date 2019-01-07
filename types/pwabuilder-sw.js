const CACHE = 'pwabuilder-precache';
const precacheFiles = [
    /* Add an array of files to precache for your app */
	  './close.svg',
	  './index.html',
	  './logo_background.svg',
	  './small-0.png',
	  './small-1.png',
	  './small-2.png',
	  './small-3.png',
	  './small-4.png',
	  './small-5.png',
	  './sprites.css',
	  './styles.css',
	  './toast.svg',
	  './types.html',
	  './types/bug.png',
	  './types/bug.svg',
	  './types/dark.png',
	  './types/dark.svg',
	  './types/dragon.png',
	  './types/dragon.svg',
	  './types/electric.png',
	  './types/electric.svg',
	  './types/fairy.png',
	  './types/fairy.svg',
	  './types/fighting.png',
	  './types/fighting.svg',
	  './types/fire.png',
	  './types/fire.svg',
	  './types/flying.png',
	  './types/flying.svg',
	  './types/ghost.png',
	  './types/ghost.svg',
	  './types/grass.png',
	  './types/grass.svg',
	  './types/ground.png',
	  './types/ground.svg',
	  './types/ice.png',
	  './types/ice.svg',
	  './types/normal.png',
	  './types/normal.svg',
	  './types/poison.png',
	  './types/poison.svg',
	  './types/psychic.png',
	  './types/psychic.svg',
	  './types/rock.png',
	  './types/rock.svg',
	  './types/steel.png',
	  './types/steel.svg',
	  './types/undefined.png',
	  './types/water.png',
	  './types/water.svg'    
];

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[ServiceWorker] Skip waiting on install');
      return self.skipWaiting();

  })
  );
});

self.addEventListener('activate', function(event) {
console.log('[ServiceWorker] Claiming clients for current page');
      return self.clients.claim();

});

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServerAndAddCache(evt.request)));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function fromServerAndAddCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}