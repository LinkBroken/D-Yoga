export function onPageLoad() {
    navigator.serviceWorker
        .register("../build/sw.js")
        .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
    })
        .catch((err) => alert(`Service Worker registration failed: ${err}`));
    navigator.serviceWorker.ready;
}
