/* exported swapChars */
/* -create a function that takes 3 arguments
-create a new empty string
-create a for loop that returns string secondIndex and
firstIndex place and vice versa
-return rest of the string as normal
 */
/* function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  for (var i = 0; i < string.length; i++) {
    swappedCharacterString = string[secondIndex][firstIndex] + string[firstIndex][secondIndex];
  }
  return swappedCharacterString;
} */
function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacterString = '';
  for (var i = 0; i < string.length; i++) {
    string[firstIndex] = string[secondIndex];
    /*     console.log('value of string[firstIndex]', string[firstIndex]); */
    /*     string[secondIndex] = string.firstIndex; */
    swappedCharacterString += string[i];
  }
  return swappedCharacterString;
}
