/* exported isAnagram */
/* -create a function that has 2 string arguments
-create 2 new variables for each of the string arguments that uses the methods:
-replaceAll to substitute all spaces with empty characters
-split to convert the strings to arrays by each character
-sort to organize the characters in alphabet order
-create a for loop that will stop once the new array's length of the first argument has been reached
-if the first argument's index at i is not equal to the second argument's index at i at any point,
return false.
-if they are all equal, then the string is an anagram
 */

function isAnagram(firstString, secondString) {
  var sortedFirstString = firstString.replaceAll(' ', '').split('').sort();
  var sortedSecondString = secondString.replaceAll(' ', '').split('').sort();
  for (var i = 0; i < sortedFirstString.length; i++) {
    if (sortedFirstString[i] !== sortedSecondString[i]) {
      return false;
    }
  } return true;
}
