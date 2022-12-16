/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = words;
  for (var i = 0; i < words.length; i++) {
    newArray[i] += suffix;
  }
  return newArray;
}
