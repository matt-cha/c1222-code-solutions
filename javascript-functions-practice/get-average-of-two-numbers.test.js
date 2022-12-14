/* global getAverageOfTwoNumbers, expect */

describe('getAverageOfTwoNumbers(x, y)', function () {

  beforeEach('make sure that getAverageOfTwoNumbers is defined', function () {
    expect(getAverageOfTwoNumbers).to.be.a('function');
  });

  it('returns the average of 2 and 4', function () {
    var output = getAverageOfTwoNumbers(2, 4);
    expect(output).to.equal(3);
  });

  it('returns the average of 97 and 85', function () {
    var output = getAverageOfTwoNumbers(97, 85);
    expect(output).to.equal(91);
  });

  it('returns the average of 10 and 9', function () {
    var output = getAverageOfTwoNumbers(10, 9);
    expect(output).to.equal(9.5);
  });

});
