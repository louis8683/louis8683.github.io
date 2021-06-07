'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1696474222913602595d9762e3fdb8d9",
".git/config": "3a7f6f66e4bac1ce605ba480d9aa471e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b8a739801abb18ce6b9c91f39e97279c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c1c3469e58e0d639a7c70123a8be70b",
".git/logs/refs/heads/master": "8c1c3469e58e0d639a7c70123a8be70b",
".git/logs/refs/remotes/origin/master": "af0c2f125ca5142afacdc1463f59f9a0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/d8ad19429320f3588d5941905945e38b40eb0c": "ca780d8bbbe8acbb9acdf7e1cf3e1ade",
".git/objects/0d/af62dc55b111d3bfe276c2418aa1ebeb5207bb": "c2ac685502f650513b13626fc11837bd",
".git/objects/12/eeaf709fdf0f61ef895e94cfd5cb56fd297c6a": "dbed9a395279b8dbbd1219211b1f855d",
".git/objects/15/dd77a79e052437c911565b9f01e7139f4b28c9": "62a0e76f1d4984b56f41cd90c7a37d78",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/bf0407622d3ddab59e1e4d723539e0ff4d6aaf": "d2c219ba94cf5fe1fe43ad7fe84fe6b8",
".git/objects/23/c32e357923e15ec6608b1e15ee53a70893cb34": "fd3ea8065f9ad89068d988b317312679",
".git/objects/24/b1a4d20bf4031a7b053a350c95f4c17a189d61": "5d9a6c6bd024283d592f28c07cf7016e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/f63db4f7c1b4d20182d3cec84debdb50bfa0c1": "52697a93f81de5429555d1960c02c6e2",
".git/objects/3a/e8efd3f73b7e96f54a955c4909d1295126bde1": "d6ee1e3056e1e07c79dbb6a9c18733be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/783edad94cbdb044c505afa009c81cee2d95ff": "fcc468cc66ccc841e1cc07bdc3e3046a",
".git/objects/49/49d7ad76e30552c8eb86cc4303f4a7a970d10e": "3dee83fb564868e27a2b5c209e13f7c5",
".git/objects/4a/bace18a74039f45c4a02ff930a1941ced33892": "bd94ae0eb82d40ed61ad1dac24bb6855",
".git/objects/4e/a8fc30e99c6cc0d1ebce12630865c57e1140ea": "f3c0c73dde2916f36276dbfbab7d3900",
".git/objects/4f/29006323b1a40c010642eff321e12fc7dceb69": "66f56012b81bd7b0404a29ec4623e5c8",
".git/objects/53/83764478145375d1a84ef3b08c89507c834c92": "cee816e083aa9f645706ec9f375f4873",
".git/objects/55/02cd51a77e7a3141ff3b3c14bf925bbd42242c": "be1e992b0a9e9bdf5da10e185ef74f02",
".git/objects/5b/c31156f3e73bf968b4eed36cb51b058bdf96af": "7cd91043976ae47c84da42feb601960a",
".git/objects/5c/32d9739819fdb18936ca6ccad50d286559c442": "80562c8df8efb27dc3a29f9c6b866c67",
".git/objects/5f/4aa82c183f4ad008a1797fb2366528784fb757": "a995ba4da7408e0bd87f1cfec138a115",
".git/objects/66/2b876b70e5b6ad5f9a5784e92531bdfda7205b": "56b883a49bda0d9a1db0b96117cf2fa2",
".git/objects/68/857ea17c37e5de4efe8eb4aa139bec801caf43": "997e2156cdc015ff417828d27eef0a61",
".git/objects/6c/46058ba72761d0ae15397dcf6fbd77b51509e6": "4a58fb10cea6a4c4028dbdb14cbddaef",
".git/objects/77/f0b039ae762ffba323f3bf428ed3e49a3f244b": "c92e169e7c51998e9aba9ddefd20b53f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/0b9c3ea8b01f12f2d61a38e4481b86d7ea52d5": "71dca9a9687ec65863089c08cfce5ac7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/321babd8575a7e4e483b7582d5c24fd57d082b": "a399791d6ff21bd544cfd13daf1336e5",
".git/objects/98/b509f8f6a3abd80fdf932ba6828cfeaa192d7f": "aad323f5c77c18bc71ef8068ebd9cb68",
".git/objects/9c/1f2385f64c42239a5fab34ab51ed1c0f459e3e": "b4cb6d698e742d30ef4cced12f828e23",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/cbefcd5a9363c6275f62bd78052b8224ac4013": "8972713a6d830d105261acd91068c599",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/5bb10f7306808f776ddfd63eace01609ba66e1": "8baec30d31a29953b949dc6c4b0bd1cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/052574a3809f638e8313ddd85e47f397b952a2": "c36c714bd28d6b5a7f4a9aeb707001b4",
".git/objects/c5/55703cb87cabe6c35f945f647ead8822ceac37": "fef0330d607311054f47a36f74684125",
".git/objects/d5/8049c0fbbae4b4d7448b0ea1a118a56efe3ff5": "e7afe4b74dccd73ab1846db20f23b01f",
".git/objects/dd/46602c2c6bd8b674959c97d816ca5e93d0925e": "eec09072b5bcc96e9f369b227608cdad",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/a8631a3dc20031234ec8cd63d99795ce2c274b": "3666e5983ada20de9c50897764ef6566",
".git/refs/heads/master": "e8dc040a1131cb9a79072020a52ccd98",
".git/refs/remotes/origin/master": "e8dc040a1131cb9a79072020a52ccd98",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ecc6e381077a3f47855db9e29ad393f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2a19321de0a3815bc53ef357d2844d95",
"/": "2a19321de0a3815bc53ef357d2844d95",
"main.dart.js": "5f25c77d42a6a16df0250bfe556b9b7a",
"manifest.json": "33ad8c476e3bcf90b8ed97aaf9a36b8b",
"version.json": "80152dcdb325fc32b7bd18270d6773a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
