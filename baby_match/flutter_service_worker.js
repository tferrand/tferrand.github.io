'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"splash/style.css": "79bc58ce8add2f3ddb6e8ac2d4957b84",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-4x.png": "380e273e8b489598a086d37b04674014",
"splash/img/dark-3x.png": "dbdd27d06afd47f192f8c09d6c9e545c",
"splash/img/branding-dark-2x.png": "2f4166176d02876e88ee595891f006df",
"splash/img/branding-dark-4x.png": "4f123126d1d22a0c5794092731ac4a34",
"splash/img/branding-2x.png": "2f4166176d02876e88ee595891f006df",
"splash/img/light-3x.png": "dbdd27d06afd47f192f8c09d6c9e545c",
"splash/img/light-1x.png": "78776b0d501cdd9e38ba80205e75c5b4",
"splash/img/branding-1x.png": "f2464e03697349a613e7fade1ae11c54",
"splash/img/branding-dark-1x.png": "f2464e03697349a613e7fade1ae11c54",
"splash/img/dark-1x.png": "78776b0d501cdd9e38ba80205e75c5b4",
"splash/img/light-2x.png": "964ff386b3e00eb64aecc94a7fcb6155",
"splash/img/branding-dark-3x.png": "1e5d9eeaedd3a7cbd5f6c8d0a3f3bc9d",
"splash/img/dark-2x.png": "964ff386b3e00eb64aecc94a7fcb6155",
"splash/img/dark-4x.png": "380e273e8b489598a086d37b04674014",
"splash/img/branding-4x.png": "4f123126d1d22a0c5794092731ac4a34",
"splash/img/branding-3x.png": "1e5d9eeaedd3a7cbd5f6c8d0a3f3bc9d",
"index.html": "14783a0d169c1d26acd88d538c058cde",
"/": "14783a0d169c1d26acd88d538c058cde",
"assets/NOTICES": "d2d3e8754e2c2d8fddd183c9c1dc5c73",
"assets/assets/countries.json": "d4fda7c8c6b7e45d2a2999c124b24ad5",
"assets/assets/images/app.png": "ff5f96d44aab9b7a6a09b2cfb24ebbb6",
"assets/assets/images/branding.png": "8d3939c5e84530ad125e0225c5cec737",
"assets/assets/images/baby_face.png": "839f4c212ca8bf5794b4082a8f44b403",
"assets/assets/images/baby_face_white.png": "599a9a986bfa2d9b6d0f6161f97c4117",
"assets/assets/images/lottie/swipe_right.json": "98d1d8d8118aa76a606ac6f748661d76",
"assets/assets/images/lottie/chart.json": "8883c0f3b8f879724ceb8927175a4a64",
"assets/assets/images/lottie/heart.json": "350df714244cbd4e6615270ef0178cb4",
"assets/assets/images/lottie/done.json": "f6c95d070e04abbe1e1ce9ebf835c97c",
"assets/assets/images/lottie/filter.json": "7a9b4e4e8e8ab004e36cbab40cc39be3",
"assets/assets/names_dataset/NO.json": "c302e4f72e0a075881a937b3dbcdeefe",
"assets/assets/names_dataset/EG.json": "05c4f4018de9695b3f426c69df978572",
"assets/assets/names_dataset/OM.json": "0ff2a6d88c5269ec9dcdb9115251cb13",
"assets/assets/names_dataset/SI.json": "0d411e02907959f52f20cf2859471ceb",
"assets/assets/names_dataset/IE.json": "78d95a9b9f099e16df796db9002918c0",
"assets/assets/names_dataset/MY.json": "abb4b85e8901897cc614ce00b9bc168c",
"assets/assets/names_dataset/GR.json": "d6e392bdde7c8204fa94bb5cbf745376",
"assets/assets/names_dataset/RU.json": "9ffc000c8ea2c3e92a0fbe0d9d7037f8",
"assets/assets/names_dataset/MO.json": "d1747811f997ed772eb2edeae54b23da",
"assets/assets/names_dataset/LU.json": "7d037cf4a1897dd4a4c5e91a4f62abd3",
"assets/assets/names_dataset/CN.json": "7148dedeb610a851cd2903e315efff9b",
"assets/assets/names_dataset/BN.json": "ec1b9a1082a516bc498aafe721948eaa",
"assets/assets/names_dataset/IL.json": "f0c88733b4081152dd0bfad4f8b5fba2",
"assets/assets/names_dataset/LB.json": "07b5e0f08a07dda696e653c20e61f618",
"assets/assets/names_dataset/IS.json": "d96f3b836de0ffb6aafade70c29a320d",
"assets/assets/names_dataset/SE.json": "612b5f084b8cf099cca220c4e818ce22",
"assets/assets/names_dataset/NL.json": "c87d85d6880217b28ed8beea926022ad",
"assets/assets/names_dataset/AF.json": "4b8c61471b093ef0559b8d07dea28c21",
"assets/assets/names_dataset/BF.json": "a53625170a0b59508acfb4434fa964ec",
"assets/assets/names_dataset/IT.json": "3fc7b7ecf9ba3efe8256dc7f4c5d63b3",
"assets/assets/names_dataset/IR.json": "abe2cc11f2f8be713a1ffe8a5b918779",
"assets/assets/names_dataset/HN.json": "f947c54102edb9b600e877b5a031e576",
"assets/assets/names_dataset/US.json": "1799d5c584c0baf25bf7ae45365f9b34",
"assets/assets/names_dataset/HT.json": "f4772438d04324c69529656e02170817",
"assets/assets/names_dataset/DZ.json": "092d276945524a4dcbcc117ba99f5e19",
"assets/assets/names_dataset/SV.json": "bc86952e1a3ece3abff566d39ea2b563",
"assets/assets/names_dataset/BE.json": "7996e84918ebeb1a40ca25cd01b4e855",
"assets/assets/names_dataset/BH.json": "edf90f54a13b525e11df4ccb2d1cdda7",
"assets/assets/names_dataset/FJ.json": "57d4a46435f69ff693d23302234fe0be",
"assets/assets/names_dataset/SA.json": "d0a44fb35ef30a8ff986f8fe24695773",
"assets/assets/names_dataset/UY.json": "14ca2012ffcd461551d1043cd8d3024c",
"assets/assets/names_dataset/NG.json": "d2a2e165b4506cf9df042af0a54cd488",
"assets/assets/names_dataset/GB.json": "f4f6eeb2955e41449ff1cd459c5da51e",
"assets/assets/names_dataset/AL.json": "c5c8c2ae20751d84f90db3156330416a",
"assets/assets/names_dataset/GE.json": "26892b51832e3fd65abb1990bf9b2c17",
"assets/assets/names_dataset/SY.json": "11f58ddc4f0f73b9f8f2d993a88d1d2f",
"assets/assets/names_dataset/CZ.json": "5e3ddd8e3312b1e3232af5c43cd654a0",
"assets/assets/names_dataset/CR.json": "546387be2447953d2a0b1aecbac6aa5f",
"assets/assets/names_dataset/MT.json": "66ebea9968c3f788d29c7fdf693c89cf",
"assets/assets/names_dataset/BO.json": "f4b23eb351defe643d2e15ec7c9c9cab",
"assets/assets/names_dataset/EE.json": "867f7dd38dac5b966a549ed3df9ffd44",
"assets/assets/names_dataset/RS.json": "381bcd7431b56ffbbb59fbdaee5aaab1",
"assets/assets/names_dataset/PE.json": "45756f031b498390e939e7e276e70510",
"assets/assets/names_dataset/JP.json": "ae903dfd287a97cd54649d72f7570ffa",
"assets/assets/names_dataset/LT.json": "a0e5e83101540423bb0b018b7a0bf19b",
"assets/assets/names_dataset/ID.json": "cb37073684d22d7229e86671fedd2775",
"assets/assets/names_dataset/HK.json": "1b049d639fd120db0714f6185163c3e8",
"assets/assets/names_dataset/PT.json": "3168d0912154cf70096df92e08ba81c6",
"assets/assets/names_dataset/ES.json": "a8a03ddb9e4a633885ec73036e457a33",
"assets/assets/names_dataset/QA.json": "4358c904628bfd7fd33800d86cf08bf9",
"assets/assets/names_dataset/JO.json": "247bbae678f246962860e8a7b6b711a0",
"assets/assets/names_dataset/AE.json": "95c3706ddca99701ef8a06069fa15659",
"assets/assets/names_dataset/NA.json": "347b689a792a58a572dc6f9dabecd9e8",
"assets/assets/names_dataset/YE.json": "1e0af8ff284a76fd6e44c755daddab50",
"assets/assets/names_dataset/LY.json": "bd990e2e43294629df7ae1ff0220c7ab",
"assets/assets/names_dataset/IQ.json": "ba14e4a0b41d8fa28f4a6ca478779a0f",
"assets/assets/names_dataset/CH.json": "2be6c3c06bc641b503393201ab4343ba",
"assets/assets/names_dataset/HU.json": "b32f189055dafb8e77a4648549849d0d",
"assets/assets/names_dataset/PH.json": "1c0a20a80968bcb04bb75dff923f5880",
"assets/assets/names_dataset/AR.json": "133ea8f279d816d369afc2dd43e27578",
"assets/assets/names_dataset/MX.json": "e0519f7526a29ef86d9b66f3b31f9b8d",
"assets/assets/names_dataset/TR.json": "9423407b23836f17d4fec0b20a7defa9",
"assets/assets/names_dataset/JM.json": "64e08ad539135220e3974741610dd999",
"assets/assets/names_dataset/BW.json": "bfae5aeb606e3de2a228642e0c01c20d",
"assets/assets/names_dataset/PR.json": "f05e6481c8abc5f2c09aa0ab474cd2b1",
"assets/assets/names_dataset/CY.json": "30f56b86fa8e6568c25889cd364ab272",
"assets/assets/names_dataset/KZ.json": "7a98f366b12788f14fc71d3e6e3366d6",
"assets/assets/names_dataset/CO.json": "2db6675e6ab01718eb46a276f9801f28",
"assets/assets/names_dataset/BG.json": "ce41813b8fcba12537702c9e5179c5b5",
"assets/assets/names_dataset/PA.json": "1b567e83fe330b703f20239bec1e7ed4",
"assets/assets/names_dataset/DK.json": "d87cb384502aa16aa6e37f5cfe786f64",
"assets/assets/names_dataset/BI.json": "11b487e100a634129be63cc41c226a11",
"assets/assets/names_dataset/MV.json": "6f2c815b20182c9d19b3f58cf61d9539",
"assets/assets/names_dataset/MU.json": "71c73509ac04228e40f58ca789f68a3e",
"assets/assets/names_dataset/GH.json": "66527aa960e55c517d534ba357a38ef5",
"assets/assets/names_dataset/KH.json": "368a8d4660f9f1dd812eb961442930c5",
"assets/assets/names_dataset/PS.json": "385995ab5bcc9df896d16fa73341fee6",
"assets/assets/names_dataset/CL.json": "db561df93c27a6eac7211e59f4625ae1",
"assets/assets/names_dataset/KW.json": "4e30ff99c7b24a0452acdd906f794e1c",
"assets/assets/names_dataset/FR.json": "a7e7af91f2032ca1fdb0170a1ddb9d31",
"assets/assets/names_dataset/BR.json": "2d8e60b0e9f7fe2451cba237a896bf0d",
"assets/assets/names_dataset/CM.json": "44a353447c4e6b008e53946088f37e6c",
"assets/assets/names_dataset/ZA.json": "b61bdc2783eedd40e994684b5b5a97d6",
"assets/assets/names_dataset/AZ.json": "69758bcb8fd6ef92849bf7deff14ff1a",
"assets/assets/names_dataset/SG.json": "972721afb4010a1eed5c01695c5610c6",
"assets/assets/names_dataset/TN.json": "dee234600b6ff9250a060f3a4ac9dd3f",
"assets/assets/names_dataset/BD.json": "8c224e45906ff3baaa274d2d58faa5a8",
"assets/assets/names_dataset/KR.json": "98c1da3693836084c853af8f9d4395d8",
"assets/assets/names_dataset/CA.json": "98fbe871a312a1654d2c354b0a51b332",
"assets/assets/names_dataset/DJ.json": "9a1f8cf7cdd10b1d5c60f3e2023b2292",
"assets/assets/names_dataset/AO.json": "07e1d3eee0cdffbf499dab1ca42b1706",
"assets/assets/names_dataset/MD.json": "0ef62db6080a46905788daaaa9b1c22c",
"assets/assets/names_dataset/PL.json": "bd70f5a8163709026e590b02db48dc4b",
"assets/assets/names_dataset/TM.json": "d5e70dde0bae2bd8c1fbb855d5fe1edf",
"assets/assets/names_dataset/TW.json": "c3713b2d4a55cc10e4d75fd0210a0140",
"assets/assets/names_dataset/DE.json": "be0d67593d6bb8f0567f892b88f20587",
"assets/assets/names_dataset/GT.json": "46e7dabcb1537e67197e4c61c510a3ed",
"assets/assets/names_dataset/IN.json": "9208fd7f84c6fb365c85be6a2e3a6778",
"assets/assets/names_dataset/MA.json": "865ca189e3249d06da057763fbcede64",
"assets/assets/names_dataset/AT.json": "100265fd16ee32452613ce8f1056ba2c",
"assets/assets/names_dataset/FI.json": "3626157d61226ecdede8012dd151a4e1",
"assets/assets/names_dataset/ET.json": "4dc63f9caac6b651d6f72406f4abe78b",
"assets/assets/names_dataset/HR.json": "6a0b04b5aab2d1f11eccd4452dc9d53d",
"assets/assets/names_dataset/SD.json": "5f8a072bda832066c457274b8817df67",
"assets/assets/names_dataset/EC.json": "9669862905d8d8faf0b97d971c2e3473",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ab645f14e5e978094930daf97aac0f30",
"assets/fonts/MaterialIcons-Regular.otf": "d4c1c0d20f6bdd94e708d98725e052d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ac0a5c0989942e530cb3cceb7246abcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "551fbdd0a87debed9a8e444a6cf7e0d9",
"assets/AssetManifest.json": "16761fa037205f966370488a189c73e8",
"version.json": "4004938c70f07a6a9b14c2b83365dfd1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "8f0e2fa0b4a25cc46168345e8a1834f7",
"icons/Icon-maskable-512.png": "ff5f96d44aab9b7a6a09b2cfb24ebbb6",
"icons/Icon-192.png": "34b9cf8f8257ce353e353f2f52a6267b",
"icons/Icon-512.png": "ff5f96d44aab9b7a6a09b2cfb24ebbb6",
"icons/Icon-maskable-192.png": "34b9cf8f8257ce353e353f2f52a6267b",
"manifest.json": "5ee9665617c9b76aeec4c20ab636212e",
"favicon.png": "4a2e65d880a2c772d1eabbc81bef577f",
"flutter_bootstrap.js": "1d5dee002913333ea2340bcd8b14420f"};
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
