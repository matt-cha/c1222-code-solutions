/* exported flatten */
/* =create a function that takes 1 argument
-create a new empty array
-create a for loop that stops at the array length
-push the array at index of i into the new array
 */
/* function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    flattenedArray.push(array[i]);
  }
  return flattenedArray;
} */
/* function flatten(array) {
  var flattenedArray = [].concat.apply([], array);
  return flattenedArray;
}
need to figure outhow to do this with the isArray method DO NOT SUBMIT!
 */
