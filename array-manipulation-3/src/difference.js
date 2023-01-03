/* exported difference */
/* -create a function that has 2 arguments
-create an empty new array
-loop through all elements of the first array
-if the current index of elements of first array argument does not exist (less than 0 returned)
-within the second array, (indexes existing will return > 0 value).
-push those elements of first array into the difference array
-loop through all elements of second array
-if the elements of k in the second array do not return an index greater than 0
of the first array,
-those elements of second array do not exist in first array so push
the elements at that index of k to the new array. */

function difference(first, second) {
  var differenceArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) < 0) {
      differenceArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (first.indexOf(second[k]) < 0) {
      differenceArray.push(second[k]);
    }
  }

  return differenceArray;

}

/* function difference(first, second) {
  var differenceArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.indexOf(first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.indexOf(second[k])) {
      differenceArray.push(second[k]);
    }
  }
 */
