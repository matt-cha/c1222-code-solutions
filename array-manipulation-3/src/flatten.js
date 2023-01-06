/* exported flatten */
/* =create a function that takes 1 argument
-create a new empty array
-create a for loop that stops at the array length
-if the element at the index of i of the array is an array,
-loop through that element at the index of i array,
push into the new array the elements of the sub array at index i, and
the k index gives each element of i
-else push the element at index of i into the new array if it is not an array already.
 */

function flatten(array) {
  var flattenedArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // flattenedArray.push(array[i]);
      for (var k = 0; k < array[i].length; k++) {
        flattenedArray.push(array[i][k]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }

  return flattenedArray;
}
