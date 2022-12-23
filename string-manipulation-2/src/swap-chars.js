/* exported swapChars */
/* -create a function that takes 3 arguments
-create a new empty string
-create a for loop that returns string secondIndex at the place of firstIndex
and vice versa. to return secondIndex at the firstIndex,
-return rest of the string as normal
 */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  for (var i = 0; i < string.length; i++) {
    swappedCharacterString = string[secondIndex][firstIndex] + string[firstIndex][secondIndex];
  }
  return swappedCharacterString;
} */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  for (var i = 0; i < string.length; i++) {
    string[firstIndex] = secondIndex;
    console.log('value of string[firstIndex]', string[firstIndex]);
        string[secondIndex] = string.firstIndex;
    swappedCharacterString += string[i];
  }
  return swappedCharacterString;
} */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  console.log(stringArray);
  for (var i = 0; i < stringArray.length; i++) {

    stringArray[firstIndex] = stringArray.secondIndex;
    stringArray[secondIndex] = stringArray.firstIndex;
    swappedCharacterString = stringArray.join('');
  }
  return swappedCharacterString;
} */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  var newSecondIndex = stringArray[secondIndex];
  console.log('stringArray:', stringArray);
  stringArray[firstIndex] = stringArray[secondIndex];
  console.log('stringArray[firstIndex]:', stringArray[firstIndex]);
  console.log('newSecondIndex:', newSecondIndex);
} */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  var newSecondIndex = stringArray[secondIndex];
  console.log('stringArray:', stringArray);
  stringArray[firstIndex] = stringArray[secondIndex];
  console.log('stringArray[firstIndex]:', stringArray[firstIndex]);
  console.log('newSecondIndex:', newSecondIndex);
} */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  var tempFirstIndex = stringArray[firstIndex];
  console.log('tempFirstIndex', tempFirstIndex);
  stringArray[firstIndex] = stringArray[secondIndex];
  console.log('stringArray[firstIndex]:', stringArray[firstIndex]);
  stringArray[secondIndex] = tempFirstIndex;
  console.log('stringArray[secondIndex]:', stringArray[secondIndex]);
  swappedCharacterString = stringArray.join('');
  return swappedCharacterString;
} */

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  var stringArray = string.split('');
  var tempFirstIndex = stringArray[firstIndex];
  stringArray[firstIndex] = stringArray[secondIndex];
  stringArray[secondIndex] = tempFirstIndex;
  swappedCharacterString = stringArray.join('');
  return swappedCharacterString;
}
