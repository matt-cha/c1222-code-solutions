/* exported invert */
/* -create a function that takes 1 argument
-create a new object
-create  2 new arrays
assign each array all the keys of source using the Object.keys method and
the Object values method to hold them in a new variable
-create a for loop that stops at the length of one of the new variables that
hold the number of key value pairs in the source
-add the key value pair to the new object created by assigning the
values variable at each index of i as the key,
-equal to the keys variable at index of i as the value  */
function invert(source) {
  var newObject = {}; //
  var newValues = [];
  var newKeys = [];
  newKeys = Object.keys(source);
  newValues = Object.values(source);
  for (var i = 0; i < newKeys.length; i++) {
    newObject[newValues[i]] = newKeys[i];
  }
  return newObject;
}
