var $span = document.querySelectorAll('span');
var counter = 0;

document.addEventListener('keydown', keyPressed);
function keyPressed(event) {
  if (event.key === $span[counter].innerText) {
    $span[counter].className = 'text-color-green';
    $span[counter + 1].className = 'text-decoration-underline';
    counter++;
  } else {
    $span[counter].className = 'text-color-red text-decoration-red';
  }
}
