/* exported swapChars */
/* -create a function that takes 3 arguments
-create a new empty string
-create a new array that takes the string and splits it by each character
-set a new variable temp first index equal to the array at first Index argument
-set the array at first index number = to the array at the second index number
-set the array at second index number to the temporary first index variable (the array at first index)
-let the new empty string equal the joined array by each character.
 */

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var array = string.split('');
  var tempFirstIndex = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempFirstIndex;
  swappedCharacterString = array.join('');
  return swappedCharacterString;
}
