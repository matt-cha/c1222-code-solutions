/* exported omit */
/* -create a function omit with 2 arguments
-create an empty new object
-for loop that checks through the keys length
-set key equal to the keys at object source at index of i
-if key is equal to undefined,
-set the new object's keys at index i value to the new key variable */
function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var key = source[keys[i]];

    /*     console.log('source[keys[i]]:', key);
    console.log('keys[i]:', keys[i]); */

    if (key !== undefined) {
      newObject[keys[i]] = key; // need it to give the other values of source[keys]?
    }
  }
  return newObject;
}
