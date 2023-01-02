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

function flatten(array) {
  var flattenedArray = [];
  /*   console.log('line 23', array[0]);
  console.log('line24', array[1]); */
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    }
  }
  /*   console.log('flattenedArray:', flattenedArray); */
  return flattenedArray;
}
