/* exported isVowel */
/* create a function that checks whether the char argument passed
is a vowel.
create an if statement that checks if the char argument is strictly
equal to the upper or lowercase of any vowel.
if condition is true, return boolean true.
if condition is false, return boolean false. */
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' ||
    char === 'o' || char === 'u' || char === 'A' || char === 'E' ||
    char === 'I' || char === 'O' || char === 'U') {
    return true;
  } return false;
}
