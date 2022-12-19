/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
