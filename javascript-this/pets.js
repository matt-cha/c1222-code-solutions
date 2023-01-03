/* exported doggo, kitteh */

/**
 * HTMLMediaElements (such as <audio>) are described in detail on MDN.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */

function makeNoise() {
  this.sound.currentTime = 0;
  this.sound.play();
}

var doggo = {
  sound: document.querySelector('audio#bork'),
  speak: makeNoise
};

var kitteh = {
  sound: document.querySelector('audio#mrow'),
  speak: makeNoise
};
