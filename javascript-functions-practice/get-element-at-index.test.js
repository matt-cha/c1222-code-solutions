/* global getElementAtIndex, expect */

describe('getElementAtIndex(array, index)', function () {

  beforeEach('make sure that getElementAtIndex is defined', function () {
    expect(getElementAtIndex).to.be.a('function');
  });

  it('returns the element of ["foo", "bar", "baz"] at index 1', function () {
    var output = getElementAtIndex(['foo', 'bar', 'baz'], 1);
    expect(output).to.equal('bar');
  });

  it('returns the element of [9, 10, 19, 20] at index 2', function () {
    var output = getElementAtIndex([9, 10, 19, 20], 2);
    expect(output).to.equal(19);
  });

  it('returns the element of [false, true] at index 0', function () {
    var output = getElementAtIndex([false, true], 0);
    expect(output).to.equal(false);
  });

});
