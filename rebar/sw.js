const CACHE = '2021-10-09';
const precacheFiles = [
	'./',
	'./icon.png',
	'./main.css',
	'./manifest.json',
	'./app/app.css',
	'./app/app.js',
	'./app/config.js',
	'./app/partials.js',
	'./app/routes.js',
	'./rebar/jquery.tablesorter.js',
	'./rebar/rebar.css',
	'./rebar/rebar.js',
	'./rebar/fonts/OpenDyslexic3-Bold.ttf',
	'./rebar/fonts/OpenDyslexic3-Regular.ttf',
	'./rebar/icons/charts.js',
	'./rebar/icons/hardware.js',
	'./rebar/icons/human.js',
	'./rebar/icons/indicies.js',
	'./rebar/icons/interface.js',
	'./rebar/icons/logos.js',
	'./rebar/icons/nature.js',
	'./rebar/icons/objects.js',
	'./rebar/icons/shapes.js',
	'./rebar/icons/transport.js',
	'./rebar/images/arrow-back-dark.svg',
	'./rebar/images/arrow-back-light.svg',
	'./rebar/images/arrow-forward-dark.svg',
	'./rebar/images/arrow-forward-light.svg',
	'./rebar/images/tick-dark.svg',
	'./rebar/images/tick-light.svg',
];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  console.log("[PWA Builder] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
	caches.open(CACHE).then(function (cache) {
	  console.log("[PWA Builder] Caching pages during install");
	  return cache.addAll(precacheFiles);
	})
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
	fromCache(event.request).then(
	  function (response) {
		// The response was found in the cache so we responde with it and update the entry

		// This is where we call the server to get the newest version of the
		// file to use the next time we show view
		event.waitUntil(
		  fetch(event.request).then(function (response) {
			return updateCache(event.request, response);
		  })
		);

		return response;
	  },
	  function () {
		// The response was not found in the cache so we look for it on the server
		return fetch(event.request)
		  .then(function (response) {
			// If request was success, add or update it in the cache
			event.waitUntil(updateCache(event.request, response.clone()));

			return response;
		  })
		  .catch(function (error) {
			console.log("[PWA Builder] Network request failed and no cache." + error);
		  });
	  }
	)
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
	return cache.match(request).then(function (matching) {
	  if (!matching || matching.status === 404) {
		return Promise.reject("no-match");
	  }

	  return matching;
	});
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
	return cache.put(request, response);
  });
}
