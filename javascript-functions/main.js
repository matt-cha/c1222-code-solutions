function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('value of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  var fullGreeting = 'Hey, ' + name;
  return fullGreeting;
}
console.log('value of greet:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('value of getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('value of getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('value of getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
