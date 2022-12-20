function handleFocus(event) {
  console.log('focus event was fired');
  console.log('even.target.name:', event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}
function handleInput(event) {
  console.log('value of event.target.name:', event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $textArea = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
