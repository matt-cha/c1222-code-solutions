/* exported firstChars */
/* -create a function with 2 arguments
-create an empty string
create a new variable falsy
-create a for loop that will return the string at length number
-the string at index of i (character at that iteration) will be converted to a boolean
-falsy is assigned that value and create an if statement for
that variable falsy being strictly equal to true.
-because all values are truthy unless they are falsy,
only the truthy values are concatenated into the finalString at its i index.
-loop will end when the i is equal to the length argument passed */
function firstChars(length, string) {
  var falsy;
  var finalString = '';
  for (var i = 0; i < length; i++) {
    falsy = Boolean(string[i]);
    if (falsy === true) {
      finalString += string[i];
    }
  }
  return finalString;
}
