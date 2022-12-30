/* exported includes */
/* -create a function that takes 2 arguments and returns a boolean\
-create a for loop that indexes the array and stops at the length of the array
-create an if statement for if the value is === to the array
at i index, return true.
-otherwise return false
 */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
