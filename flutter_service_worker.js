'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "34e0b1e1c2127200d05fe37237ed28d9",
"index.html": "63104ba647e01640c25d9913fd57dfda",
"/": "63104ba647e01640c25d9913fd57dfda",
"main.dart.js": "ac564272a146f3d25bc0558242b58e8b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1ffc45bbf7acfdc9b22a742f7a59d93d",
"assets/AssetManifest.json": "3916e983b05fb63c63d4a721e8049ba5",
"assets/NOTICES": "068fdbb63ae84ec054a6ec5ff1368317",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/social_icons/instagram.jpeg": "5e04fd779e7607a47d0bad14976caa90",
"assets/assets/social_icons/twitter.jpeg": "f1686d3847f6900393afdd3cb970f5cb",
"assets/assets/social_icons/youtube.png": "7f8ee8380d3b78c41560d77013cc6394",
"assets/assets/social_icons/facebook.jpeg": "aa44634a24c7387793198057c762b394",
"assets/assets/images/7up.png": "23b4392bfb122123cfb8f2de6d30cc61",
"assets/assets/images/wallet.png": "46d00337def60ce4fe625db542ba1067",
"assets/assets/images/stp_card_amex_template@3x.png": "641795a42f481f71e23228204f393452",
"assets/assets/images/discover.png": "4043adae46d7e31641f4c853b2a54f5f",
"assets/assets/images/piz.png": "4ab708aa02d405de2fc473d81383d794",
"assets/assets/images/stp_card_discover@3x.png": "81bdb2aa22180b6c8951667a0b5f2d69",
"assets/assets/images/nodeal.png": "6c1f5d8e6fc97d97f5b1487c614b16d6",
"assets/assets/images/map.png": "c98cb80201c793e960fd10d297222733",
"assets/assets/images/americanexpress.png": "150aa8560d8bc692f009a38344974e40",
"assets/assets/images/visa.png": "a5503d506065f2cf20dd0d5c79ba2eee",
"assets/assets/images/cod.png": "f2e55db3ae85611f6e18162868588b25",
"assets/assets/images/user.png": "47a63dd313ff77da48b4bd99153abc81",
"assets/assets/images/cart_empty.png": "0fa3f2d5fd5f968b9641c1fb1871dea5",
"assets/assets/images/pizza2.png": "87ff7dcec04490d5d5765c16648a8a6c",
"assets/assets/images/drink.png": "29d3cf0332d2aba18e0c923db593aa2b",
"assets/assets/images/stp_card_visa@3x.png": "782a8692856c4a67f010e577008fec61",
"assets/assets/images/sprite.png": "8827c4318bb5cda6342d313014a70356",
"assets/assets/images/splash.png": "4030a68a452cadbed7ccb9aad622529e",
"assets/assets/images/fanta.png": "be015fd9d354f0e7e11f823d616cb4fc",
"assets/assets/images/stp_card_unknown.png": "de65614bab844392e28af5d0a4cfbfa8",
"assets/assets/images/success.png": "339448cc8f12c8f7ef459766fb237cc4",
"assets/assets/images/fornebu.png": "f0c7204cab676727a04646715df9935b",
"assets/assets/images/stp_card_unionpay_en@3x.png": "30e119726c1c1d670b280473bd6388f1",
"assets/assets/images/unlock.png": "a2f6d0b8fd9b3247f329028074f7079d",
"assets/assets/images/user.jpeg": "a58b1fc1e85e96472440d736b5094438",
"assets/assets/images/mastercard.png": "cda770ccbc144ee2a9551a562906feb3",
"assets/assets/images/frontimg.png": "f0c7204cab676727a04646715df9935b",
"assets/assets/images/stp_card_mastercard@3x.png": "cb38652a02a27ed79fb7f1bc6cbcbc64",
"assets/assets/images/stp_card_discover_template@3x.png": "d3efc269447f1c3c8660dd7d76fdfb8b",
"assets/assets/images/p.png": "6d18aeccee9d3148f90b8760da5c899f",
"assets/assets/images/coke.png": "76f9c1298fcfb93197a312f000878173",
"assets/assets/icon/icon.png": "f0c3e33ea285517ddc5edefd16191216",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
