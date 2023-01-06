/* exported zip */
/* -create a function with 2 arguments
-create an empty array
-create duplicates of the original arguments
-create a new array that will contain an array of a pair of the element from the first array and the second array
from the same index of that they came from
-create an if statement to check which arguments is shorter length
-if the first argument is longer than the second,
-the first array will be sliced from start to length of the second array
-set a new variable to declare the shorter array of the 2 arguments
-else do the opposite for the second array
-create a for loop that stops running at the length of the shorter array
-push the first array at index of i followed by a comma for the second array at
index of i within brackets  */

function zip(first, second) {
  var zippedArray = [];
  var adjustedFirstArray = first;
  var adjustedSecondArray = second;

  if (first.length > second.length) {
    adjustedFirstArray = first.slice(0, second.length);
    var shorterArrayLength = second.length;
  } else {
    adjustedSecondArray = second.slice(0, first.length);
    shorterArrayLength = first.length;
  }
  for (var i = 0; i < shorterArrayLength; i++) {
    zippedArray.push([adjustedFirstArray[i], adjustedSecondArray[i]]);
  }
  return zippedArray;
}
