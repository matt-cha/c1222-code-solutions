/* exported titleCase */
/* -create a function that takes 1 argument
-split the string into an array by a space character
-capitalize the first word
-if string's word length is greater than 4, capitalize
special case: if string word is JavaScript or API
- */

function titleCase(string) {
  var array = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var splitTitle = string.split(' ');

  for (var i = 0; i < splitTitle.length; i++) {
    /*     console.log(splitTitle[i]); */
    splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    if (splitTitle[i].toLowerCase() === 'javascript') {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1, 4).toLowerCase() + splitTitle[i][4].toUpperCase() + splitTitle[i].slice(5).toLowerCase();
    }
    if (splitTitle[i].toUpperCase() === 'API') {
      splitTitle[i] = splitTitle[i].toUpperCase();
    }
    for (var k = 0; k < array.length; k++) {
      if (splitTitle[i - 1].includes(':')) {
        splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
      } else if (splitTitle[i].toLowerCase() === array[k]) {
        splitTitle[i] = splitTitle[i].toLowerCase();
      }
    }
    if (splitTitle[i] === splitTitle[0]) {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    }
  }
  var finalTitle = splitTitle.join(' ');
  return finalTitle;
}
