/* exported take */
/* -create a function that has 2 arguments
-create an empty array called countArray
-create a for loop that stops looping when count is reached because
we want to only return an array up to the count number
-if the array at index i being checked is not equal to undefined,
we push it into the countArray at that index of i
to account for elements that do not exist (are undefined) in
the array argument. */
function take(array, count) {
  var countArray = [];
  for (var i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      countArray.push(array[i]);
    }
  }
  return countArray;
}
