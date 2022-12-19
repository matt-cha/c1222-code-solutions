/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var i = number; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
}
