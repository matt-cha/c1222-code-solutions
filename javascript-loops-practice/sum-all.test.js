/* global expect, sumAll */

describe('sumAll(numbers)', function () {

  beforeEach(function () {
    expect(sumAll).to.be.a('function');
  });

  it('takes [1, 2, 3] and returns 6', function () {
    var input = [1, 2, 3];
    var output = sumAll(input);
    expect(output).to.equal(6);
  });

  it('takes [1200, 1, 0] and returns 1201', function () {
    var input = [1200, 1, 0];
    var output = sumAll(input);
    expect(output).to.equal(1201);
  });

  it('takes [999, 102, 234, 23, 90909, 25] and returns 92292', function () {
    var input = [999, 102, 234, 23, 90909, 25];
    var output = sumAll(input);
    expect(output).to.equal(92292);
  });

});
