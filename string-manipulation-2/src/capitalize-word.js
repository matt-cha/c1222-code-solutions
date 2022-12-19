/* exported capitalizeWord */
/* -create a function that takes 1 argument
-create an if statement with the condition of whether the text string javascript
is strictly equal to the toLowerCase method of the word object (to convert the
  word argument to lowercase for all cases of the text string javascript)
-if it is, return the toUpperCase method of the word at index 0
-concatenated with the toLowerCase method of the slice method with 2 arguments,
-starting at index 1 (the second letter) and ending at the index 4 (the 5th letter, S)
-concatenated with the toUpperCase method of the word at index 4 (capital S)
-concatenated with the toLowerCase method of the slice method with 1 argument,
starting at index 5 (letter c in Script).
-if it is false return:
the toUpperCase method of the word at index 0 (first character of word argument)
-concatenated with the toLowerCase method of the slice method with one argument
to start the index of 1 (second character of word argument) of the word object. */

function capitalizeWord(word) {

  if (word.toLowerCase() === 'javascript') {
    return word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word[4].toUpperCase() + word.slice(5).toLowerCase();
  } return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
