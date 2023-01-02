/* exported dropRight */
/* -create a function that takes 2 arguments
-create an empty array
-create a for loop that intializes with i = 0
-stop the loop when the length of the array - the count has been reached
because this will stop the count number of elements from being pushed into the array
-push the index at i to the new array  */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
