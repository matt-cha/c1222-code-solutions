/* exported intersection */
/* -create a function with 2 arguments
-create an empty array
-loop through the first array
-if the elements in the first array exist in
the second array, (>= because index of returns position of the element 0 or greater if exists)
-push the elements at the index of the first array
into the new array. */
function intersection(first, second) {
  var intersectionArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) >= 0) {
      intersectionArray.push(first[i]);
    }
  }

  return intersectionArray;

}
