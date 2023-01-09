
var intervalId = setInterval(countdown, 1000);
function countdown() {
  var $h1 = document.querySelector('.countdown-display');
  if ($h1.textContent <= 1) {
    clearInterval(intervalId);
    intervalId = null;
    $h1.textContent = '~Earth Beeeelooowww Us~';
  } else if ($h1.textContent > 1) {
    $h1.textContent -= 1;
  }
}
