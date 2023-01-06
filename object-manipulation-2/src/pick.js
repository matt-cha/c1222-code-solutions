/* exported pick */
/* -create a function that takes 2 arguments
-create an empty object
-create a for loop that stops when the keys length has been reached
(so that all indexes of keys in present in the new object)
-set the source object at the keys array at each index of i equal
to a new variable
-if the new variable is not equal to undefined,
set the new object at keys array at index of i equal to the new variable
 */

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var key = source[keys[i]]; // key equal to object's key at index i .

    /*     console.log('keys[i]:', keys[i]);
    console.log('source[keys[i]]:', source[keys[i]]); */

    if (key !== undefined) {
      // if the object's keys like foo, bar) does exist, set newObject's
      // keys and valye to that idnex of i.
      newObject[keys[i]] = key;
    }
  }
  return newObject;
}
