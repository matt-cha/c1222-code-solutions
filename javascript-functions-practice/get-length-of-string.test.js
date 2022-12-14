/* global getLengthOfString, expect */

describe('getLengthOfString(string)', function () {

  beforeEach('make sure that getLengthOfString is defined', function () {
    expect(getLengthOfString).to.be.a('function');
  });

  it('returns the length of "foo"', function () {
    var output = getLengthOfString('foo');
    expect(output).to.equal(3);
  });

  it('returns the length of "ham sandwich"', function () {
    var output = getLengthOfString('ham sandwich');
    expect(output).to.equal(12);
  });

  it('returns the length of "arbitrary"', function () {
    var output = getLengthOfString('arbitrary');
    expect(output).to.equal(9);
  });

});
