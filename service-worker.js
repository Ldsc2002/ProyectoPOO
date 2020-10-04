//Service-Worker, se encarga del PWA

var cacheName = "ProyectoPOO";
var filesToCache = [
  "./index.html",
  "./index.css"
];

//Guarda todos los contenidos de la aplicación
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

//Muestra todos los contenidos guardados de la aplicación
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});