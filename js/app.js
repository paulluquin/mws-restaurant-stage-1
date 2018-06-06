console.log('HELLO HERE');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/ServiceWorker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



/*
this.addEventListener('fetch', function(event) {
  console.log('Service Worker Start');
  console.log(event.request);
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('js/serviceworker.js').then(function() {
    console.log("Registration Worked");
  }).catch(function() {
    console.log("Registration Failed")
  });
});
console.log('Hello there');
*/
