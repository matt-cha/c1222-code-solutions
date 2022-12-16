/* exported getWords */
/* create a funtion that separates the string
argument using the split method of the string object with 2 arguments,
a string with an empty space in it and the limit of length of the string
object so that it stops when the length of the string has been reached. */
function getWords(string) {

  var newString = (string.split(' ', string.length));
  return newString;
}
