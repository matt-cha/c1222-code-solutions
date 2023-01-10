/* exported omit */
/* -create a function omit with 2 arguments
-create an empty new object
-for loop that checks through the keys length
-set key equal to the keys at object source at index of i
-if key is equal to undefined,
-set the new object's keys at index i value to the new key variable */
function omit(source, keys) {
  var newObject = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    if (!keys.includes(sourceKeys[i])) {
      newObject[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return newObject;
}
