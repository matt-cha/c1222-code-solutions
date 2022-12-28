/* exported lastChars */
/* -create a function that will return a string starting from the last characters
of the string
-create a variable falsy
-create a empty string
-create a for loop that initializes with i being equal to the length property of the
string object - the length argument so that it wil start indexing from the actual length number
given of the specific string length.
-stop loopign when i is less than string length, end of the string
-set falsy equal to the boolean function to convert the string at index of i
to a boolean
-create an if statement that will check that variable is strictly equal to true
-therefore only all values becoming  true (truthy) will be passed into the final string
at the index of i
-concatenate each string at index i to the final string and return it
 */
function lastChars(length, string) {
  var falsy;
  var finalString = '';
  for (var i = string.length - length; i < string.length; i++) {
    falsy = Boolean(string[i]);
    if (falsy === true) {
      finalString += string[i];

    }
  }
  return finalString;
}
