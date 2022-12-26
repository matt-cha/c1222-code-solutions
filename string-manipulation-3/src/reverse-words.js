/* exported reverseWords */
/* -create a function that takes one argument
-split the string into an array by each character.
-reverse the order
-join the string back together into 1 element
-split the string by a space character
-reverse the order of the array so the original first word is the first word once more
-join the array so it is one element again.
-join the array back together */

function reverseWords(string) {
  var newString = string.split('').reverse().join('').split(' ').reverse().join(' ');

  return newString;
}
