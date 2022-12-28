/* exported numVowels */
/* -create a function that returns the total number of vowels in that string
-needs to return a number
-create an empty variable called vowelCount assigned to 0
-create a for loop that checks each character by index of i
-create an if statement, index of the string converted to lowercase at i === any of the vowels.
-if yes, add one to vowelCount
-if no, move on until end of string length
-return vowelCount
 */
function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.toLowerCase()[i] === 'a' || string.toLowerCase()[i] === 'e' || string.toLowerCase()[i] === 'i' || string.toLowerCase()[i] === 'o' || string.toLowerCase()[i] === 'u') {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
