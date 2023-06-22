// / <reference lib="webworker"/>
/// <reference types="@sveltejs/kit" />

import { build, files, version } from "$service-worker";

const worker = self;
const CACHE_NAME = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files, // everything in `static`
];

worker.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => {
        worker.skipWaiting();
      })
  );
});

worker.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (keys) => {
      //delete old caches
      for (const key of keys) {
        if (key !== CACHE_NAME) await caches.delete(key);
      }
      worker.clients.claim();
    })
  );
});

async function fetchAndCache(request) {
  const cache = await caches.open(`offline-${version}`);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response) return response;

    throw err;
  }
}

worker.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range")) return;

  const url = new URL(e.request.url);

  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest =
    url.hostname === self.location.hostname && url.port != self.location.port;
  const isStaticAsset =
    url.host === self.location.host && ASSETS.includes(url.pathname);
  const skipBecauseUncahced =
    e.request.cache == "only-if-cached" && !isStaticAsset;

  if (isHttp && !isDevServerRequest && !skipBecauseUncahced) {
    e.respondWith(
      (async () => {
        const cachedAsset = isStaticAsset && (await caches.match(e.request));
        return cachedAsset || fetchAndCache(e.request);
      })()
    );
  }
});
