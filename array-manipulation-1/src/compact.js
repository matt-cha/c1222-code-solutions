/* exported compact */
/* -create a function that removes values from an array with argument.
- create a new variable falsy
-create an empty array literal assigned to the variable newArray
-create a for loop with an initial value of i = 0
-create a condition that will stop the loop once the length of the array has been
reached
-create a final expression that will increment i by one each loop
-declare a Boolean function with the argument of array at index and assign to the value
falsy
-create an if statement with the condition the boolean true is strictly equal to
the variable falsy. all values are truthy unless they are falsy which is the elements
to omit in the arrays so all true values will be pushed into the newArray while all false
values are omitted.
-in the conditional code block, the array at index i is being pushed with the method
of the newArray object
-return newArray
*/

function compact(array) {
  var falsy;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
