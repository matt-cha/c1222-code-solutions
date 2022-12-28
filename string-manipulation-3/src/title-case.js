/* exported titleCase */
/* -create a function that takes 1 argument
-split the string into an array by a space character
-capitalize the first word
-if string's word length is greater than 4, capitalize
special case: if string word is JavaScript or API
- */

/* function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
} */

function titleCase(title) {
  var newTitle = title.split(' ');

  for (var i = 0; i < title.length; i++) {
    newTitle += title[0].toUpperCase() + title.slice(1).toLowerCase();
    /*     console.log(newTitle); */
  }
  return newTitle;
}
