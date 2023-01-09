function showHelloThere() {
  var $h1 = document.querySelector('.message');
  $h1.textContent = 'Hello There';
}

setTimeout(showHelloThere, 1000);
