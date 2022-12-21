var $noButton = document.querySelector('.no-button');
var $page = document.querySelector('.white-background');
var $openModalButton = document.querySelector('.open-modal-button');
var $surveyBox = document.querySelector('.survey-box');

$openModalButton.addEventListener('click', openModalButtonClicked);
function openModalButtonClicked(event) {
  $page.className = 'dark-background';
  $surveyBox.className = 'survey-box survey-box-margin-outer box-shadow';

}

$noButton.addEventListener('click', noButtonClicked);
function noButtonClicked(event) {
  $page.className = 'white-background';
  $surveyBox.className = 'survey-box display-none survey-box-margin-outer box-shadow';
}
