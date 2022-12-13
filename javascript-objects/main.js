
var student = {
  firstName: 'Matt',
  lastName: 'Cha',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Data';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Tesla',
  model: 'Cybertruck',
  year: 2023
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Kabosu',
  type: 'doge'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
