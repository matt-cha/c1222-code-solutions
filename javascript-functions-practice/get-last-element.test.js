/* global getLastElement, expect */

describe('getLastElement(array)', function () {

  beforeEach('make sure that getLastElement is defined', function () {
    expect(getLastElement).to.be.a('function');
  });

  it('returns "baz" from ["foo", "bar", "baz"]', function () {
    var output = getLastElement(['foo', 'bar', 'baz']);
    expect(output).to.equal('baz');
  });

  it('returns 10 from [9, 10, 19, 20]', function () {
    var output = getLastElement([9, 10, 19, 20]);
    expect(output).to.equal(20);
  });

  it('returns true from [false, true]', function () {
    var output = getLastElement([false, true]);
    expect(output).to.equal(true);
  });

});
