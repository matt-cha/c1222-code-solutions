/* exported unique */
/* -create a function with 1 argument
-create an empty new array
-create a for loop that stops at the end of array length
-if array element at any index is duplicated 2?,
-push the array elment at the index to i  */
/*
function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      var duplicates = true;
      console.log('yes dupes');
    } else {
      duplicates = false;
      console.log('no dupes');
    }
  }
  return duplicates;
} */

function unique(array) {
  var uniq = [...new Set(array)];
  return uniq;
}
