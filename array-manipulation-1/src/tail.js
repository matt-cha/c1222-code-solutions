/* exported tail */
/* -create a function that returns a new array with the argument array
-create an empty array that is assigned to a new variable newArray
-create a for loop with initial expression of variable i = to 1 to
prevent the first element of the array from being included.
-a condition for the loop to stop when the length of the array has been reached,
-a afterthought of incrementing i by one each iteration.
-a code block that will get the value of array at index of i and then
use the push method of the array object to add those elements into newArray
-return the array newArray
*/
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
