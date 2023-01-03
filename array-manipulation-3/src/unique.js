/* exported unique */
/* -create a function with 1 argument
-create an new array sliced from the original
-create a for loop that stops at the end of unique array length
-if the index of the array at the current index is not equal to the
last index of the array at that same index,
-the element has a duplicate so we want to remove the last occurrence of that duplicate
-splice the unique array with the arguments of:
-the position of the last occurrence of the element at index i, and remove 1 element from there
  */

function unique(array) {
  var uniqueArray = array.slice();

  for (var i = 0; i < uniqueArray.length; i++) {
    var current = uniqueArray[i];
    if (uniqueArray.indexOf(current) !== uniqueArray.lastIndexOf(current)) {
      uniqueArray.splice(uniqueArray.lastIndexOf(current), 1);
    }
  }
  return uniqueArray;
}
