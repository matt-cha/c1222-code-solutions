/* exported reverseWord */
/* create a function that takes a word as an argument.
create a new variable set to a empty string
create a for loop with an initial value of variable i = 1,
a condition of i being less than or equal to the length of the word
(i will stop looping when it reaches the length of the word )
, an increment of i + 1 each loop.
with a code block the variable reversedWord concatenating
with the word at the index of the length of the word minus the
value of i at its current iteration.
the loop will concatenate each letter starting from the end of the word
until the word length is reached by i
return the reversedWord */
function reverseWord(word) {
  var reversedWord = '';
  for (var i = 1; i <= word.length; i++) {
    reversedWord += word[word.length - i];
  }
  return reversedWord;
}
