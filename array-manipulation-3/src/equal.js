/* exported equal */
/* -create a function that takes 2 arguments
-create a for loop that stops at the index of first
-if the length of the arrays are not equal to each other, return false
-if that is true, if first array at index i is not equal to second index at array i,
return false
-othwrwise return true for all other conditions */
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first.length !== second.length) {
      return false;
    } else if (first[i] !== second[i]) {
      return false;
    }
  } return true;
}
