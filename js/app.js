console.log('HELLO');
self.addEventListener('fetch', function(event) {
  console.log("Service Worker Start");
  console.log(event.request);
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('js/serviceworker.js').then(function() {
    console.log("Registration Worked");
  }).catch(function() {
    console.log("Registration Failed")
  });
});
