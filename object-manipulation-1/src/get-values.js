/* exported getValues */
/* -create a function getValues with one argument, object
-assign an empty array literal to a new variable valuesArray
-create a for in loop with the condition variable key in object
-use the push method of the valuesArray object to add the object at index key */
function getValues(object) {
  var valuesArray = [];
  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
