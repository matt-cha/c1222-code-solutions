/* exported reverse */
/* -create a function that takes an argument array
-assign an empty array literal to the variable newArray
-create a for loop that has an initial value of i = 1
-create a condition to stop the loop once the length of the
array has been reached
-create a final expression that increments i by one each loop
-create a code block that accesses the array at index of the length of
the array minus i and use the push method of the newArray object to add
to the array.
-the variable i starts at one so that the first element pushed into newArray
is the last index of the array and then each element will be pushed by
the loop
-return newArray */
function reverse(array) {
  var newArray = [];
  for (var i = 1; i <= array.length; i++) {
    newArray.push(array[array.length - i]);
  }
  return newArray;
}
