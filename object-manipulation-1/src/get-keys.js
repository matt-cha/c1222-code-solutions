/* exported getKeys */
/* -create a function getKeys with 1 argument object.
-assign an empty array literal to the variable keysArray
-create a for in loop with the condition the variable key in object,
-the variable key is pushed to the keysArray array.
-return the keysArray */
function getKeys(object) {
  var keysArray = [];
  for (var key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
