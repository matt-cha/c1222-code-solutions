var $circle = document.querySelector('.circle');
var $background = document.querySelector('background-color-white');
var clicks = 0;
$circle.addEventListener('click', lightBulbClicked);
function lightBulbClicked(event) {
  clicks += 1;
  if (clicks % 2 === 0) {
    $circle.className = 'circle color-grey box-shadow-dark';
    $background.className = 'background-color-black';
  } else {
    $circle.className = 'circle color-yellow box-shadow-light';
    $background.className = 'background-color-white';
  }
}
