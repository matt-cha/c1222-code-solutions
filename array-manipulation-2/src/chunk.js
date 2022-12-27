/* exported chunk */
/* -create a function with 2 arguments
-create a empty array that will contain the array of arrays
-create a for loop that stops when the array length has been reached so
that all elements in the array have been looped through
-the final expression will add i to size and return the result back
so that each sub array has that number of items in the array
-slice the original array starting at index i and end the slice at
i + size since we want to make the array length equal to size
-push that sliced array into the new array  */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
