/* global expect, banMethods, drop */

describe('drop(array, count)', function () {

  beforeEach(function () {
    expect(drop).to.be.a('function');
    banMethods(drop, 'shift', 'pop', 'splice');
  });

  it('drops the first 2 elements of ["foo", "bar", "baz", "qux"]', function () {
    var input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    var output = drop(input, 2);
    expect(output).to.deep.equal(['baz', 'qux']);
  });

  it('drops the first element of [1, 2, 3, 4, 5]', function () {
    var input = Object.freeze([1, 2, 3, 4, 5]);
    var output = drop(input, 1);
    expect(output).to.deep.equal([2, 3, 4, 5]);
  });

  it('drops the first 3 elements of [false, true, false, true]', function () {
    var input = Object.freeze([false, true, false, true]);
    var output = drop(input, 3);
    expect(output).to.deep.equal([true]);
  });

  it('drops the first 7 elements of [] (empty array)', function () {
    var input = Object.freeze([]);
    var output = drop(input, 7);
    expect(output).to.deep.equal([]);
  });

});
