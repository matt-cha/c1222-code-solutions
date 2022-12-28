/* exported capitalize */
/* create a function that takes a string and capitalizes
the first character by returning the first character of word at index 0
and using the toUpperCase method of the word object to convert
it to upper case and cocatenating the word using the slice method
starting at index 2 to return all characters after the first character */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
