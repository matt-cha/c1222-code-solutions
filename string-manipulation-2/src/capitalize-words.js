/* exported capitalizeWords */
/* -create a function that takes 1 argument, string
-call the split method of the string object with one argument, a space and assign it to the variable wordArray
-create a for loop with the intialization of i = 0
-condition of i less than the wordArray length
-final expression of incrementing i by one each iteration
-uppercase the first character at index 0 of the word in the array at index i and add it to the lowercased
rest of the word (starting index 1) at index i with the slice method to join them
-assign the result of that expression to the wordArray at the index of i to reassign
the string at only that indx of the array
-combine all items in the array with the join method using an argument of a space
and reassign the value to a new variable
return that variable from the function */

function capitalizeWords(string) {
  var wordArray = string.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1).toLowerCase();
  }
  var capitalizedString = wordArray.join(' ');
  return capitalizedString;
}
