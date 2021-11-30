'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "ef59e23027c6322ca9cfc2d28b41fb33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34b95fb7235975035c2ce5e8d0fd4394",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b43a86a7dac84968b83c6e8d77f6377",
".git/logs/refs/heads/master": "4b43a86a7dac84968b83c6e8d77f6377",
".git/logs/refs/remotes/origin/master": "e0a8c254cfdb075a86ed9ae99e043091",
".git/objects/05/3cfa95e4c8509392424f2e41f1983f92184b8d": "fe34e47d42144b436e7864100a6ba1a5",
".git/objects/10/e94de1b4fb221f6e5924d1ad2be2882c242c9e": "7487d2802120881bfae83943dc79f875",
".git/objects/14/413f24e190b4286bd2f6c4bc9c21b6a2193991": "a91905017bae21cc1e8c5bccfbdfa999",
".git/objects/16/87c258f8dde2cfaeaf0e20f83408665c4f2e26": "d7eba88d355e7f23a87f1a5524b1e11a",
".git/objects/1e/d3cb36cf630928460d97ef2bd098b52573ee6c": "ee868b56da28786bfc64121b15b36c2c",
".git/objects/1f/a4ac9e962a377c820d3e8d091738bdc7ba14bc": "2cb08945b84fcd283175aacf6aefa357",
".git/objects/21/0594921c1ba39d8a7eb0b4570dd373770aeae9": "3b45bd1dbdeb7d59c76bf50177c91ae2",
".git/objects/27/cc029d665d59b27f6257110d678c78304b4361": "0933467724fbcc99f2996ecddbd97aa3",
".git/objects/2a/aeb787f8f4454f266bd35b87d299f44c679273": "ccbdc9dab0fa2da0d511812e6c072cb5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/40/e098365781a1a72c32d89919967a25efb6a8b9": "844e5587290d2ff2c137d24057ee3682",
".git/objects/41/8a00ed8127faf6b87a98056ee6b6c8d7ec66aa": "e9eaba3025c7a075b78fd5a38e8968ed",
".git/objects/44/3ba4c605b1e26d8723d37977fa06adcfcbde93": "c929ea74c6ade646a3d00107c14ddeda",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8cd8b8fc4da524e47c4190ae75560976d8f778": "cfb7ce0cff105ac9153500d70b96d2a1",
".git/objects/4d/ef476eba96a70b78e6f5e41539bb58346883d8": "c63b2d824be78d33ecf464228673a485",
".git/objects/53/46f95f14405b0f8450efef6f715b0797de8c22": "9aa8b11587cd2fa81f87403bd5cdd898",
".git/objects/5c/a4c412a3be9c6e91223fdb1a576c122c14e953": "28f102be7344e3d8a203499b2330effa",
".git/objects/5c/d44fef21277138f5cc2366c7696a59b022180b": "dbdd9f636da4672392dc53365e41a2a6",
".git/objects/66/792477c2ced47afdfec2e7367ec817aa261de8": "bc815785446c24e5c530b8b9b0818315",
".git/objects/73/8feb0ce495fe3d08c5038b2d0d7a9fe5e5ed01": "e0011161432e47ae1562175fe790ffd8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/91f25873dd2bb5b99a5b3780143b1b16b65516": "3586406fb844c9aaf25f89580a62a46a",
".git/objects/80/c0bfebae6e61b1a5460bc9f72921687d100198": "c109595ed2dc873c2625444005e5b57e",
".git/objects/83/2c8962947b5a17a1a9dec2631c8a3343d3ce14": "a0c7a3926e40ea515275c64fe60e1fc8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/cbdbb6938fed5941d1555b7a466da8a5f0479d": "9959e3252909f5f6e765190bf478cacd",
".git/objects/95/fbfd6945e622f4a78bbd2d7611edcd2cfe25eb": "43b64915770a9ae6202151c07f1a13d2",
".git/objects/97/415c5e317599a86f5690896ff0d4d0fe46accc": "eb5ee0e74156b72b299a580be2ee6456",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8fe0a72050088dcea1b17872c6ed0fc1df2764": "5456dd844e6249440f5a0bbcb5d87b53",
".git/objects/a4/387137c4da64952874ab4d575204562d6c2cfb": "764e159e11b811f7f7ac90d7b3a91d20",
".git/objects/a5/c55d2bf688021bcab8d63b3c0f2d660a1e1f77": "b0d15dc89ebc67c37f32d75fa9e732f8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/572806a26b78a8bb0a6801e349ee3cade791bb": "becd4a0bfc4508351622f79d50789c9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b1aae8855a09c15006db862bee04356b6c05c2": "10acae33f9aacee58ed47c1470609886",
".git/objects/c4/c102c6642156485df52123f06ba75bccc8de97": "f55dfd6df3929bd226af7ef42221334a",
".git/objects/ca/934a588da83fec68585f1d45d5009855accc08": "c63ed9a2a75e9d63aaeb62855d70323a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f7c4efa486bd151eec67e90c02eb1aabbaea65": "6be4697973289f45bda28ae5ffb25551",
".git/objects/d9/6c9ea9c316815be22cc14b97b6132501f74d74": "d46c51d585f6eac8bd4ac67a42b6c591",
".git/objects/dc/1ce8e32ac3d090ed213606178f462982a5b99d": "47a866f2498e2f71638d50cfbdf9d021",
".git/objects/dc/9c94df06a395538ff79db05c639212b79dc2b2": "6020efd87c87510342ddce90c741bbf3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5275073fcd3f62d23a568f63a8f3939bc2c8a4": "504bc47eb59994c139bed2032620d9b2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a89f0b0117a02316809f42fde560d2f6c8bd70": "2e9d3db2965d73482563b3db6fe9e77b",
".git/objects/f6/a779c0734f532343e8794cbcf804c316b4a87c": "0119839172763663caee218489c34272",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/master": "766601fa9e9e30c7e28b51c2045f1235",
".git/refs/remotes/origin/master": "766601fa9e9e30c7e28b51c2045f1235",
"assets/AssetManifest.json": "3bacc4890443f77535d935d4724cbc1f",
"assets/assets/chords/change_chords_down.json": "3c2f678a0e2bf2bcea40a4c63ffc828a",
"assets/assets/chords/change_chords_up.json": "bd5aa9ca7db259b4941299231f86ed5f",
"assets/assets/chords/chord.json": "ae79845df2be854946654ed5e6c1cbb5",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/coffee_paperclips_pencil_angled_bw_w1080.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/iphone_cactus_tea_overhead_bw_w1080.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/joy_note_coffee_eyeglasses_overhead_bw_w1080.jpg": "f014b7b75e442ae187976761117acc17",
"assets/assets/images/logo1.png": "cb557335a57f7a236956ca520a0380f3",
"assets/assets/images/logo2.png": "be34b936ed74abc342d9d0a13e307fd7",
"assets/assets/images/logo3.png": "7af6de549fd14e8cb4402328e752aa7d",
"assets/assets/images/logo4.png": "70f7664db681f5b8dc5360e1052bd9e2",
"assets/assets/images/logo5.png": "f26aba3b29e628606a8c2fe214232b02",
"assets/assets/images/logo6.png": "ad029e31764460b160abe3f322de01c1",
"assets/assets/images/logo7.png": "28d14ac94b2ea942901388757d41ced4",
"assets/assets/images/logo8.png": "c3671bde1d73fe84b08a1fb5c904fcb2",
"assets/assets/images/logo9.png": "1ec8b03bd0a6289d0863a4c87a17079f",
"assets/assets/images/mugs_side_bw_w1080.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/paper_flower_overhead_bw_w1080.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4091c83814f0ed5dbc8fc167d065dd89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99882799e9d01e9123c8dfd1a834d82d",
"/": "99882799e9d01e9123c8dfd1a834d82d",
"main.dart.js": "a83c6b05f2e8989df3cf779abba9ec8e",
"manifest.json": "1a624906bec52ca05f6e9d4bda25eca4",
"version.json": "ef65f9e469bc479f85b18c9eb3df9e10"
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
