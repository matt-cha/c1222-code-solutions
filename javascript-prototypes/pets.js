/* exported doggo, kitteh */

/**
 * HTMLMediaElements (such as <audio>) are described in detail on MDN.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */

var doggo = {
  rating: 11,
  type: 'good boi',
  sound: document.querySelector('audio#bork')
};

var kitteh = {
  rating: 12,
  type: 'floofy kitty',
  sound: document.querySelector('audio#mrow')
};

var petPrototype = {
  speak: function () {
    this.sound.currentTime = 0;
    this.sound.play();
  },
  getDescription: function () {
    var description = this.rating + ' out of 10 ' + this.type;
    return description;
  }
};

Object.setPrototypeOf(doggo, petPrototype);
Object.setPrototypeOf(kitteh, petPrototype);
