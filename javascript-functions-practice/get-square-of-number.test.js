/* global getSquareOfNumber, expect */

describe('getSquareOfNumber(number)', function () {

  beforeEach('make sure that getSquareOfNumber is defined', function () {
    expect(getSquareOfNumber).to.be.a('function');
  });

  it('returns the square of 1', function () {
    var output = getSquareOfNumber(1);
    expect(output).to.equal(1);
  });

  it('returns the square of 2', function () {
    var output = getSquareOfNumber(2);
    expect(output).to.equal(4);
  });

  it('returns the square of 10', function () {
    var output = getSquareOfNumber(10);
    expect(output).to.equal(100);
  });

});
