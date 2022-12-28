/* exported initial */
/* -create a function that takes an argument array.
-create an empty array assigned to the variable newArray
-create a for loop that has a initial value of i set to 0
-create a condition that will stop the loop at the length of the array minus 1
so that the last array is not included
-create a final expression that will increment the value of i by one
-at the index of i for array object, use the push method of the
newArray object to add to the array
-return the newArray element */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
