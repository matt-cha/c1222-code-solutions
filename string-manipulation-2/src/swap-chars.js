/* exported swapChars */
/* -create a function that takes 3 arguments
-create a new empty string
-create a for loop that returns string secondIndex at the place of firstIndex
and vice versa. to return secondIndex at the firstIndex,
-return rest of the string as normal
 */

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  var tempFirstIndex = stringArray[firstIndex];
  stringArray[firstIndex] = stringArray[secondIndex];
  stringArray[secondIndex] = tempFirstIndex;
  swappedCharacterString = stringArray.join('');
  return swappedCharacterString;
}
