export function fetchEvent() {
    window.addEventListener("fetch", (event) => {
        console.log("Fetching with service worker");
        event.respondWith(fetch(event.request)
            .then((response) => {
            // Cache the response
            const responseClone = response.clone();
            caches.open("web-worker-cache").then((cache) => {
                cache.put(event.request, responseClone);
            });
            return response;
        })
            .catch(() => {
            // If offline, try to get from cache
            return caches.match(event.request).then((response) => {
                return response || new Response("Offline content not available");
            });
        }));
    });
}
