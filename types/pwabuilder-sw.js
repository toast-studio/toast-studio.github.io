//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
      /* Add an array of files to precache for your app */
      '/',
	  'apple-touch-icon.png',
	  'close.svg',
	  'index.html',
	  'logo_background.svg',
	  'manifest.json',
	  'service-worker.js',
	  'small-0.png',
	  'small-1.png',
	  'small-2.png',
	  'small-3.png',
	  'small-4.png',
	  'small-5.png',
	  'sprites.css',
	  'styles.css',
	  'toast.svg',
	  'types.html',
	  '/types/bug.png',
	  '/types/bug.svg',
	  '/types/dark.png',
	  '/types/dark.svg',
	  '/types/dragon.png',
	  '/types/dragon.svg',
	  '/types/electric.png',
	  '/types/electric.svg',
	  '/types/fairy.png',
	  '/types/fairy.svg',
	  '/types/fighting.png',
	  '/types/fighting.svg',
	  '/types/fire.png',
	  '/types/fire.svg',
	  '/types/flying.png',
	  '/types/flying.svg',
	  '/types/ghost.png',
	  '/types/ghost.svg',
	  '/types/grass.png',
	  '/types/grass.svg',
	  '/types/ground.png',
	  '/types/ground.svg',
	  '/types/ice.png',
	  '/types/ice.svg',
	  '/types/normal.png',
	  '/types/normal.svg',
	  '/types/poison.png',
	  '/types/poison.svg',
	  '/types/psychic.png',
	  '/types/psychic.svg',
	  '/types/rock.png',
	  '/types/rock.svg',
	  '/types/steel.png',
	  '/types/steel.svg',
	  '/types/undefined.png',
	  '/types/water.png',
	  '/types/water.svg'
    ];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[PWA Builder] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  console.log('[PWA Builder] The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  return fetch(request).then(function(response){ return response});
}
