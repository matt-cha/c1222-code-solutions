/* exported truncate */
/* -create a function that with 2 arguemnts, length and string
-declare a variable falsy
-assign an empty string to the variable truncated
-create a for loop with the initial expression of i = 0
-condition to stop the loop at i less than or equal to the string length
-increment i by one each time
-in the code block, call the boolean function with 1 argument
string at index of i and assign the result of the expression to the
variable falsy
-if the value of the variable falsy is strictly equal to the boolean true,
in the codeblock, string and index of i is added to the value of
the variable truncated and assigned to truncated.
-cocatenate the string ellipsis to the value of truncated and assign the result
to truncated.
return the variable truncated  */

function truncate(length, string) {
  var falsy;
  var truncated = '';
  for (var i = 0; i < length; i++) {
    falsy = Boolean(string[i]);
    if (falsy === true) {
      truncated += string[i];
    }
  }
  truncated += '...';
  return truncated;
}
