console.log('HELLO HERE');
/* Service worker example from Google
https://developers.google.com/web/fundamentals/primers/service-workers/*/
if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('/js/ServiceWorker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }, function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  })
}
