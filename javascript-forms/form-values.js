/* var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', submitForm);
elementsObject = {};
function submitForm(event) {
  event.preventDefault();
  var elementsObject = {
    elements.name: 'submitForm.elements.name.value'
}
 */

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  var elementsObject = {};
  elementsObject.name = $contactForm.elements.name.value;
  elementsObject.email = $contactForm.elements.email.value;
  elementsObject.message = $contactForm.elements.message.value;
  console.log(elementsObject);
  document.querySelector('#contact-form').reset();
}
