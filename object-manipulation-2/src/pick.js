/* exported pick */
/* -create a function that takes 2 arguments
-create an empty object
-create a for loop that stops when the keys length has been reached
-set the variable property equal to the object source
at key's array index of i
-if the variable property is not equal to undefined,
the key at index of i exists and is then assigned to
the newobject's keys at that index. */

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var property = source[keys[i]];
    if (property !== undefined) {
      newObject[keys[i]] = property;
    }
  }
  return newObject;
}
