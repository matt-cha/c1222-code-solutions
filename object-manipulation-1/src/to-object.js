/* exported toObject */
/* -create a function toOjbect with 1 argument, keyValuePair
-assign an empty object literal to the variable newObject
-set the value of keyValuePair at index of 1 (the value of the key) to be assigned
to the newObject's key at index of keyValuePair at 0 (the key
-return the object */

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
