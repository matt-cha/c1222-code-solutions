/* exported isPalindromic */
/* -create a function that takes a string
-create a new string that replaces the original by replacing the
space character with an empty space to remove spaces from consideration
-use the split method to separate each character, reverse method, then join method
of the new array to reverse and put it back together
and compare it to the new string and if equal, it is a palindrome. */

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  if (newString.split('').reverse().join('') === newString) {
    return true;
  } else return false;
}
