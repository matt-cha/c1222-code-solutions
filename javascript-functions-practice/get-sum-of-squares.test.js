/* global getSumOfSquares, expect */

describe('getSumOfSquares(x, y)', function () {

  beforeEach('make sure that getSumOfSquares is defined', function () {
    expect(getSumOfSquares).to.be.a('function');
  });

  it('returns 41 for 4 and 5', function () {
    var output = getSumOfSquares(4, 5);
    expect(output).to.equal(41);
  });

  it('returns 50 for 5 and 5', function () {
    var output = getSumOfSquares(5, 5);
    expect(output).to.equal(50);
  });

  it('returns 73 for 3 and 8', function () {
    var output = getSumOfSquares(3, 8);
    expect(output).to.equal(73);
  });

});
