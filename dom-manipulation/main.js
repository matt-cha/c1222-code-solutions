/* -assign the number 0 to the new variable clicks
-create a function buttonClicked with the argument event
-
-use the querySelector method of the document object with 1 argument,
'.hot-button' and assign it to a new variable, $hotbutton
-use the querySelector method of the document object with 1 argument,
'.click-count' and assign it to a new variable, $clickcount
-use the addEventListener method of the $hotbutton object with the arguments
'click', and the function buttonClicked.
- */
var clicks = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');
$hotbutton.addEventListener('click', incrementClicksCount);
function incrementClicksCount() {
  clicks += 1;
  $clickcount.textContent = 'Clicks:' + ' ' + clicks;
  if (clicks < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}
