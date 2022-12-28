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

/* function titleCase(title) {
  var splitTitle = title.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    if (splitTitle[i].toLowerCase() === 'javascript') {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1, 4).toLowerCase() + splitTitle[i][4].toUpperCase() + splitTitle[i].slice(5).toLowerCase();
    } else if (splitTitle[i].toUpperCase() === 'API') {
      splitTitle[i] = splitTitle[i].toUpperCase();
    } else if (splitTitle[i] === splitTitle[0]) {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    } else if (splitTitle[i] === "and" || splitTitle[i] === "or") */
/*     } else if (splitTitle[i].length <= 3) {
      splitTitle[i] = splitTitle[i].toLowerCase();
    } */
/*   }
  var finalTitle = splitTitle.join(' ');
  return finalTitle;
} */
