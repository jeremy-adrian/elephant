'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1d6499a176dbdaee5ee2fdeccac63f08",
"version.json": "e006126605c63318ac39d9bdddbd4230",
"index.html": "4c6a8b1930a19579de5d8e554a8f2bf8",
"/": "4c6a8b1930a19579de5d8e554a8f2bf8",
"main.dart.js": "3fbba16b5320ecf7a39d4172620f4c99",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b1eaafd25553320cf983d0a927b7232",
"assets/AssetManifest.json": "caf1a8cd74dcf1e7748e923233430f2e",
"assets/NOTICES": "7e4e1a9a2d1eeb2590cf9cd54ba473cf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "03d78492792c2f1e83d20a33093a48f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_data_common/assets/properties/preferences/months_asc_desc.properties": "7bef5379b15f2cf9a355b07485210600",
"assets/packages/flutter_data_common/assets/properties/preferences/months_order_by.properties": "f7f051307eed85dcca893af553aa2280",
"assets/packages/flutter_data_common/assets/properties/api.properties": "562ab4dacd9466cfc219edf5fd080ffd",
"assets/packages/flutter_data_common/assets/properties/sqflite/sqflite.properties": "927246527fc2d9bdb9b9349376b81460",
"assets/packages/flutter_data_common/assets/properties/sqflite/table/month.properties": "be92c28ca7c7c5b3efb2d7d7f8de2bd2",
"assets/packages/flutter_data_common/assets/properties/json/month.properties": "eb743e445a5e67343e7f50c7532a860d",
"assets/packages/flutter_data_area/assets/properties/preferences/countries_asc_desc.properties": "52b61591560927c2a4848b05aa259bde",
"assets/packages/flutter_data_area/assets/properties/preferences/countries_order_by.properties": "209a60b914548116759362678d4cf15a",
"assets/packages/flutter_data_area/assets/properties/api.properties": "88cf3bf6bc26a129e77df618b9024ad2",
"assets/packages/flutter_data_area/assets/properties/sqflite/sqflite.properties": "50857528e769cbc32d091754342960c9",
"assets/packages/flutter_data_area/assets/properties/sqflite/table/country.properties": "dc579079214f3b7155ec84f48472519c",
"assets/packages/flutter_data_area/assets/properties/json/country.properties": "138139645b5afa0c2faba97ed197448b",
"assets/packages/flutter_data_actor/assets/properties/preferences/sexes_order_by.properties": "1f76335411d99301edf809c004016ae7",
"assets/packages/flutter_data_actor/assets/properties/preferences/sexes_asc_desc.properties": "b0c30873ee0f1a65ebd795b68a8094f0",
"assets/packages/flutter_data_actor/assets/properties/preferences/persons_order_by.properties": "cbfecbf450f1b7b8e8da30fd953498a5",
"assets/packages/flutter_data_actor/assets/properties/preferences/genders_asc_desc.properties": "3acd978ecc5be7c11698200aeb9f5bdd",
"assets/packages/flutter_data_actor/assets/properties/preferences/persons_asc_desc.properties": "be59e5ed5b85a2ec80212c76812d3565",
"assets/packages/flutter_data_actor/assets/properties/preferences/genders_order_by.properties": "bc571c561159e3ae441142c96bed95c3",
"assets/packages/flutter_data_actor/assets/properties/api.properties": "6a4ad6b9031481a769e6678bf677b701",
"assets/packages/flutter_data_actor/assets/properties/sqflite/sqflite.properties": "4eff25d0a508e65b1cf8e0509207752b",
"assets/packages/flutter_data_actor/assets/properties/sqflite/table/sex.properties": "ee622047f5676f70ed72738af3278548",
"assets/packages/flutter_data_actor/assets/properties/sqflite/table/person.properties": "05ff7d3e34b8f31a0a20825d982431ca",
"assets/packages/flutter_data_actor/assets/properties/sqflite/table/gender.properties": "b2b986d1767691196f6d1d8d261d330e",
"assets/packages/flutter_data_actor/assets/properties/json/sex.properties": "7e0053ee6869ac1e251989fee5b629e9",
"assets/packages/flutter_data_actor/assets/properties/json/person.properties": "aface8744760ec99dbdd20048fe2a09b",
"assets/packages/flutter_data_actor/assets/properties/json/gender.properties": "ea956247fa6bd3bdc45fcf7b8240207a",
"assets/packages/flutter_data_language/assets/properties/preferences/languages_order_by.properties": "4ed075d0a297337424ede5e10ac21821",
"assets/packages/flutter_data_language/assets/properties/preferences/languages_asc_desc.properties": "d718b96834bac9e7a67d0f0f4121a781",
"assets/packages/flutter_data_language/assets/properties/preferences/selected_language_id.properties": "21eb5f605d8167600681f072fae2df02",
"assets/packages/flutter_data_language/assets/properties/api.properties": "b0f7060f43a6595d1293cab94de4836f",
"assets/packages/flutter_data_language/assets/properties/sqflite/sqflite.properties": "00e2c1bfae3a24b691c0c866e6536b48",
"assets/packages/flutter_data_language/assets/properties/sqflite/table/language.properties": "1a6ba837f90c8a59941c15b6d42f5950",
"assets/packages/flutter_data_language/assets/properties/json/language.properties": "7a2516d3619d3c41985f7981b36c01da",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dc8efc7879d3b483645dc856cf9d36a4",
"assets/fonts/MaterialIcons-Regular.otf": "3ef439f422a5a373718db9427fd6cc50",
"assets/assets/properties/preferences/selected_dashboard_menu_item.properties": "128814b039393c177d3b24fb0feddf8d",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
