//Registra el sevice-worker para poder usar el PWA

window.onload = () => {
  "use strict";

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register("./service-worker.js");
  }
}
