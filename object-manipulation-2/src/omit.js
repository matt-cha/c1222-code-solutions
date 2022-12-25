/* exported omit */
/*  */

function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var key = source[keys[i]];
    if (key !== undefined) {
      newObject[keys[i]] = key;
    }
  }
  return newObject;
}
