var numberOne = 5;
var numberTwo = 13;
var numberThree = 122;
var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Homelander', 'The Batman Who Laughs', 'Blackest Night Superman', 'Black Adam'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'title1',
    author: 'author1'
  },
  {
    title: 'title2',
    author: 'author2'
  },
  {
    title: 'title3',
    author: 'author3'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Matt Cha';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
