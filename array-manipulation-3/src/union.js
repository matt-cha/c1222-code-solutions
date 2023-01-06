/* exported union */
/* -create a function that takes 2 arguments
-create an empty array
-loop through the first array
-if the elements of the first array exists or do not exist
in the second array,
-push those elements of the first array into the new array
-loop through the second array
-if the elements of the second array do not exist in the first array,
-push those elements of the second array into the new array. */
function union(first, second) {
  var unionArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) > -2) {
      unionArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (first.indexOf(second[k]) < 0) {
      unionArray.push(second[k]);
    }
  }

  return unionArray;

}
