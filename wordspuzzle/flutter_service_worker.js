'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"assets/assets/images/app_icon_foreground_small.png": "7b54486601c108e72863052369357cc1",
"assets/assets/images/app_icon_foreground.png": "3add3e13af6f920ba3a4cb1e3642a060",
"assets/assets/images/app_icon.png": "cf4fd24248a142e4425dc5e6f8e01b9f",
"assets/assets/images/branding.png": "8d3939c5e84530ad125e0225c5cec737",
"assets/assets/words/id_dictionary.json": "7bdbc754fd68b79c0988c61f2b1e7184",
"assets/assets/words/de_dictionary.json": "1ce3b1d46934918f174aed0d513ac9f2",
"assets/assets/words/es_targets.json": "f7541a0e873a2b0909b1f99931f9a5a7",
"assets/assets/words/es_dictionary.json": "7a84b5c83af7a5eb1898d3083b9bd69f",
"assets/assets/words/de_targets.json": "b6b97908d73cb105ca68c3f659cffc21",
"assets/assets/words/fr_targets.json": "432772c2f0fbbb767938b54aef53dae7",
"assets/assets/words/pt_dictionary.json": "836a2b851ee0917fa671061a33a5503c",
"assets/assets/words/nl_targets.json": "b09c460f7d4a58ef2175b512fd77c00d",
"assets/assets/words/fr_dictionary.json": "37190d2e5975a1cc479339a3a312498f",
"assets/assets/words/nl_dictionary.json": "e86ace6f069fc0e9348c5baacd35e319",
"assets/assets/words/en_dictionary.json": "807103f50bae375f640b41d25831d1f5",
"assets/assets/words/it_targets.json": "08a1ca2c6f6639a093f9c060534bdba8",
"assets/assets/words/pt_targets.json": "0329ce6bef7233910df7fac318cef650",
"assets/assets/words/it_dictionary.json": "be90ba37eae5e8777d5731a6a69c6ec1",
"assets/assets/words/ph_targets.json": "b0b7927c3aac59f9a622307eea0c5c1d",
"assets/assets/words/ph_dictionary.json": "8e234567cb37da9ad33812fabeb060b6",
"assets/assets/words/id_targets.json": "e5aa96910e5b5c624607af05160641c0",
"assets/assets/words/en_targets.json": "fd698c7b3155d005fe8b7d4e5f717f85",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "57f633e564d8cc1c43f106cc993d487a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "bda0255274d718a13ded59a8bc100ad0",
"index.html": "65c43ab0a7801ccce3bb7da00e47c49c",
"/": "65c43ab0a7801ccce3bb7da00e47c49c",
"favicon.png": "53726a84587c6c78171a92b5b0abafa4",
"version.json": "940354ccdc04b2a39a9ba58a604a1e04",
"icons/Icon-maskable-192.png": "ebc17b1f23deed7ef72c7a9cca6fed38",
"icons/Icon-192.png": "ebc17b1f23deed7ef72c7a9cca6fed38",
"icons/Icon-512.png": "4d7ba4516a887d6139bd8b3395d5cf6b",
"icons/Icon-maskable-512.png": "4d7ba4516a887d6139bd8b3395d5cf6b",
"splash/img/light-4x.png": "0adb0e0d91e22fce170fd3cf7d13e757",
"splash/img/branding-dark-2x.png": "c57de6f5147cf29d1d509a0f4561b3c0",
"splash/img/branding-1x.png": "58480885e2695fe0bd07f9c7f02ecda3",
"splash/img/branding-4x.png": "4f123126d1d22a0c5794092731ac4a34",
"splash/img/branding-2x.png": "c57de6f5147cf29d1d509a0f4561b3c0",
"splash/img/branding-3x.png": "c8414818d12be3a8e66c9c685487bb69",
"splash/img/light-2x.png": "9cc3def9c370726b5d2b2a13a5050127",
"splash/img/dark-1x.png": "b10b24d015ec87e769c3f0764718e32f",
"splash/img/light-1x.png": "b10b24d015ec87e769c3f0764718e32f",
"splash/img/branding-dark-4x.png": "4f123126d1d22a0c5794092731ac4a34",
"splash/img/dark-2x.png": "9cc3def9c370726b5d2b2a13a5050127",
"splash/img/branding-dark-3x.png": "c8414818d12be3a8e66c9c685487bb69",
"splash/img/branding-dark-1x.png": "58480885e2695fe0bd07f9c7f02ecda3",
"splash/img/dark-4x.png": "0adb0e0d91e22fce170fd3cf7d13e757",
"splash/img/light-3x.png": "fcf1f430394e7a0a1f9d16b6faf500e1",
"splash/img/dark-3x.png": "fcf1f430394e7a0a1f9d16b6faf500e1",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "6494ac6cfbeb16e9cd6cd7adbfc2abf3",
"main.dart.js": "d5fe006a71b9763eeec3a4655222fc3e",
"manifest.json": "98990457faa1d1890ab6c4a4087ded67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
