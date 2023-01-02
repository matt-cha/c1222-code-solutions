/* exported titleCase */
/* -create a function that takes 1 argument
-create an array that will hold all prepositions, conjunctions
-split the string into an array by a space character
-create a loop that goes through each element of the array,
-at each element of the array, capitalize the first character and lowercase the rest of it with slice to return every character after the first
-if the word ia exactly a lowercase javascript, return JavaScript instead.
-if the word in uppercase at each element of the array is API, return API exactly for that index
-run another loop that goes through the array and if any of the elements of the original argument's array are equal to an element in the array of conjunctions, return it in lowercase
-if the element of the array is the first word of the entire argument, return it as uppercased first character.
-join the array back together by a space argument
-split the string by a colon and space character and assign to a new variable
-if the array has more than 1 element in it, meaning there is a colon space character in the array,
at the 1st index ( the second element in the array which is after the ': '), change the first character of that element to uppercase and return the rest of the element back with slice
-join the array again by a colon space argument
-split the string by a dash character
-if that new array contains more than 1 element in the array, there is a - character in the argument so,
at the 1st index, the element after the dash character, uppercase the first character and return the rest of the element with slice
-join the element with a dash character into a new string

- */

function titleCase(string) {
  var array = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var splitTitle = string.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    if (splitTitle[i].toLowerCase() === 'javascript') {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1, 4).toLowerCase() + splitTitle[i][4].toUpperCase() + splitTitle[i].slice(5).toLowerCase();
    }
    if (splitTitle[i].toUpperCase() === 'API') {
      splitTitle[i] = splitTitle[i].toUpperCase();
    }
    for (var k = 0; k < array.length; k++) {
      if (splitTitle[i].toLowerCase() === array[k]) {
        splitTitle[i] = splitTitle[i].toLowerCase();
      }
    }
    if (splitTitle[i] === splitTitle[0]) {
      splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase();
    }
  }
  var finalTitle = splitTitle.join(' ');
  var colonSpaceTitle = finalTitle.split(': ');
  if (colonSpaceTitle.length > 1) {
    colonSpaceTitle[1] = colonSpaceTitle[1][0].toUpperCase() + colonSpaceTitle[1].slice(1);
    var colonSpaceJoinedTitle = colonSpaceTitle.join(': ');
  } else {
    colonSpaceJoinedTitle = colonSpaceTitle.join(': ');
  }
  var colonSpaceFinalTitle = colonSpaceJoinedTitle.replace('Javascript', 'JavaScript');
  var dashTitle = colonSpaceFinalTitle.split('-');
  if (dashTitle.length > 1) {
    dashTitle[1] = dashTitle[1][0].toUpperCase() + dashTitle[1].slice(1);
    var apaTitle = dashTitle.join('-');
  } else {
    apaTitle = dashTitle.join('-');
  }
  return apaTitle;
}
