/* global getAreaOfCircle, expect */

describe('getAreaOfCircle(radius)', function () {

  beforeEach('make sure that getCircleArea is defined', function () {
    expect(getAreaOfCircle).to.be.a('function');
  });

  it('returns 78 for a radius of 4.982787485166879', function () {
    var output = getAreaOfCircle(4.982787485166879);
    expect(output).to.equal(78);
  });

  it('returns 22 for a radius of 2.6462837142006137', function () {
    var output = getAreaOfCircle(2.6462837142006137);
    expect(output).to.equal(22);
  });

  it('returns 28.274333882308138 for a radius of 3', function () {
    var output = getAreaOfCircle(3);
    expect(output).to.equal(28.274333882308138);
  });

});
