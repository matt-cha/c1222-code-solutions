/* exported isUpperCased */
/* create a function that uses an if statement to determine whether the
word argument passed is strictly equal to the toUpperCase
method of the word object. return true if condition is true
and return false if condition is false */
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } return false;
}
