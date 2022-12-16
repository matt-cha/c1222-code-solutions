/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
