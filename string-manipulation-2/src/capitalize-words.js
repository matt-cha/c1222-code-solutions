/* exported capitalizeWords */
/* -create a function that takes 1 argument, string
-create an empty string and assign it to the variable newString
-create a for loop with the intialization of i = 0
-condition of i less than the string length
-final expression of incrementing i by one each iteration
-use the toUpperCase method of the string object  */
/* function capitalizeWords(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  return newString;
}
 */

function capitalizeWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < string.length; i++) {

    newString += string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  return newString;
}
