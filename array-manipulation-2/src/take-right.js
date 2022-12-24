/* exported takeRight */
/* -create a function that takes 2 arguments
-create a empty array to push the elements into because strings are immutable
-create a for loop that initializes with i equaling the length of the array - count
so that it starts indexing at the correct position from the end of the array.
-stop looping when the end of the array has been reached
-if the count value is greater than length of the array, assign the original array
back to the newArray.
-otherwise, push the array at index i to the new array
 */

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      newArray = array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
