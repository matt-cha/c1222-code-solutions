/* exported chunk */
/* -create a function with 2 arguments
-create a empty array that will contain the array of arrays
-need to create one main array that returns  */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
