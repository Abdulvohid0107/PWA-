const staticColorPicker = "dasturUz"; // cashe key
const assets = [
  // cashe assets
  "/",
  "/index.html",
  "/css/main.css",
  "/js/app.js",
];

self.addEventListener("install", installEvent => {
  // html, css, js fayllarni keshlar uchun funktsiya
  installEvent.waitUntil(
    caches.open(staticColorPicker).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  // keshlangan fayllarni olish imkoniyati
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.event);
    })
  );
});
