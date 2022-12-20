/* exported ransomCase */
/* -create a function that takes 1 argument, string.
-assign an empty string to the new variable newString.
-create a for loop with intialization i = 0
-condition to stop the loop when i is less than the string length
-increment i by one each loop
-create an if statement that checks the value of the variable i with a modulus
 of 2 to check if it is strictly equal to 0, meaning no remainder so even
-if it is not, use the toLowerCase method of the string object and concatenate that to
the newString variable and assign it back to the newString variable
-if it is, use the toUpperCase method of the string object and concatenate that to
the newString variable and assign it back to the newString variable
-return newString. */

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
