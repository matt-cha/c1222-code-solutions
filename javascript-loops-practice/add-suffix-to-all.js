/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
