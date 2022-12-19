/* global getRightTriangleArea, expect */

describe('getRightTriangleArea(base, height)', function () {

  beforeEach('make sure that getRightTriangleArea is defined', function () {
    expect(getRightTriangleArea).to.be.a('function');
  });

  it('returns the area of a 3 by 4 triangle', function () {
    var output = getRightTriangleArea(3, 4);
    expect(output).to.equal(6);
  });

  it('returns the area of a 5 by 8 triangle', function () {
    var output = getRightTriangleArea(5, 8);
    expect(output).to.equal(20);
  });

  it('returns the area of a 6 by 6 triangle', function () {
    var output = getRightTriangleArea(6, 6);
    expect(output).to.equal(18);
  });

});
