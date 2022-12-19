/* global getAverageOfThreeNumbers, expect */

describe('getAverageOfThreeNumbers(x, y, z)', function () {

  beforeEach(function () {
    expect(getAverageOfThreeNumbers).to.be.a('function');
  });

  it('returns the average of 2, 4, and 6', function () {
    var output = getAverageOfThreeNumbers(2, 4, 6);
    expect(output).to.equal(4);
  });

  it('returns the average of 97, 85, and 94', function () {
    var output = getAverageOfThreeNumbers(97, 85, 94);
    expect(output).to.equal(92);
  });

  it('returns the average of 10, 9, and 9', function () {
    var output = getAverageOfThreeNumbers(10, 9, 9);
    expect(output).to.equal(9.333333333333334);
  });

});
