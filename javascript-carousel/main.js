var $rightArrow = document.querySelector('.right-arrow');
var $leftArrow = document.querySelector('.left-arrow');
var $img = document.querySelector('img');

var $dotOne = document.querySelector('.dot-one');
var $dotTwo = document.querySelector('.dot-two');
var $dotThree = document.querySelector('.dot-three');
var $dotFour = document.querySelector('.dot-four');
var $dotFive = document.querySelector('.dot-five');
var count = 1;

function countChecker(event) {
  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(changeImageThreeSec, 3000);

  if (count > 5) {
    count = 1;
  }
  if (count < 1) {
    count = 5;
  }
  if (count === 1) {
    imageOne();
  }
  if (count === 2) {
    imageTwo();
  }
  if (count === 3) {
    imageThree();
  }
  if (count === 4) {
    imageFour();
  }
  if (count === 5) {
    imageFive();
  }
}
$rightArrow.addEventListener('click', rightArrowClicked);
function rightArrowClicked(event) {
  count++;
  countChecker();
}
$leftArrow.addEventListener('click', leftArrowClicked);
function leftArrowClicked(event) {
  count--;
  countChecker();
}

$dotOne.addEventListener('click', dotOneClicked);
function dotOneClicked(event) {
  count = 1;
  countChecker();
}

$dotTwo.addEventListener('click', dotTwoClicked);
function dotTwoClicked(event) {
  count = 2;
  countChecker();
}

$dotThree.addEventListener('click', dotThreeClicked);
function dotThreeClicked(event) {
  count = 3;
  countChecker();
}

$dotFour.addEventListener('click', dotFourClicked);
function dotFourClicked(event) {
  count = 4;
  countChecker();
}

$dotFive.addEventListener('click', dotFiveClicked);
function dotFiveClicked(event) {
  count = 5;
  countChecker();
}

function imageOne(event) {
  $img.setAttribute('src', '/javascript-carousel/images/001.png');
  $dotOne.className = 'dot-one fa-solid  fa-circle';
  $dotTwo.className = 'dot-one  fa-regular fa-circle';
  $dotThree.className = 'dot-one  fa-regular fa-circle';
  $dotFour.className = 'dot-one  fa-regular fa-circle';
  $dotFive.className = 'dot-one  fa-regular fa-circle';
}
function imageTwo(event) {
  $img.setAttribute('src', '/javascript-carousel/images/004.png');
  $dotOne.className = 'dot-one fa-regular  fa-circle';
  $dotTwo.className = 'dot-one  fa-solid fa-circle';
  $dotThree.className = 'dot-one  fa-regular fa-circle';
  $dotFour.className = 'dot-one  fa-regular fa-circle';
  $dotFive.className = 'dot-one  fa-regular fa-circle';
}

function imageThree(event) {
  $img.setAttribute('src', '/javascript-carousel/images/007.png');
  $dotOne.className = 'dot-one fa-regular  fa-circle';
  $dotTwo.className = 'dot-one  fa-regular fa-circle';
  $dotThree.className = 'dot-one  fa-solid fa-circle';
  $dotFour.className = 'dot-one  fa-regular fa-circle';
  $dotFive.className = 'dot-one  fa-regular fa-circle';
}

function imageFour(event) {
  $img.setAttribute('src', '/javascript-carousel/images/025.png');
  $dotOne.className = 'dot-one fa-regular  fa-circle';
  $dotTwo.className = 'dot-one  fa-regular fa-circle';
  $dotThree.className = 'dot-one  fa-regular fa-circle';
  $dotFour.className = 'dot-one  fa-solid fa-circle';
  $dotFive.className = 'dot-one  fa-regular fa-circle';
}

function imageFive(event) {
  $img.setAttribute('src', '/javascript-carousel/images/039.png');
  $dotOne.className = 'dot-one fa-regular  fa-circle';
  $dotTwo.className = 'dot-one  fa-regular fa-circle';
  $dotThree.className = 'dot-one  fa-regular fa-circle';
  $dotFour.className = 'dot-one  fa-regular fa-circle';
  $dotFive.className = 'dot-one  fa-solid fa-circle';
}

var intervalId = setInterval(changeImageThreeSec, 3000);
function changeImageThreeSec() {
  rightArrowClicked();
}
