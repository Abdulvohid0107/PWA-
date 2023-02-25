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
    cache.open(staticColorPicker).then(cache => {
      caches.addAll(assets);
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
