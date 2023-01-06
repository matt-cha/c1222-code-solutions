/* exported drop */
/* -create a function that takes 2 arguments
-create an empty array assigned to new variable countArray
-create a for loop that stops when the array length has been reached
and initializes at i = the count number to start indexing the array
after the count number of elements has been dropped.
-create an if statement to account for undefined variables
for if the array at the current index is not equal to undefined,
push it into the countArray at the index i */
function drop(array, count) {
  var countArray = [];
  for (var i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      countArray.push(array[i]);
    }
  }
  return countArray;
}
