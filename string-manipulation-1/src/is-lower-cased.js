/* exported isLowerCased */
/* create a function to check if the word argument passed is all lowercase.
create an if statement that checks the condition whether the word
argument is strictly equal to the toLowerCase method of the word
object. if condition is true, return true. if condition is false,
return false */
function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } return false;
}
