/* global expect, banMethods, chunk */

describe('chunk(array, size)', function () {

  beforeEach(function () {
    expect(chunk).to.be.a('function');
    banMethods(chunk, 'shift', 'pop', 'splice');
  });

  it('returns ["foo", "bar", "baz", "qux"] in "chunks" of 2', function () {
    var input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    var output = chunk(input, 2);
    expect(output).to.deep.equal([['foo', 'bar'], ['baz', 'qux']]);
  });

  it('returns [undefined, null, 0, false, NaN, "", undefined] in "chunks" of 3', function () {
    var input = Object.freeze([undefined, null, 0, false, NaN, '', undefined]);
    var output = chunk(input, 3);
    expect(output).to.deep.equal([[undefined, null, 0], [false, NaN, ''], [undefined]]);
  });

  it('returns [1, 2, 3, 4, 5] in "chunks" of 1', function () {
    var input = Object.freeze([1, 2, 3, 4, 5]);
    var output = chunk(input, 1);
    expect(output).to.deep.equal([[1], [2], [3], [4], [5]]);
  });

  it('returns [false, true, false, true] in "chunks" of 3', function () {
    var input = Object.freeze([false, true, false, true]);
    var output = chunk(input, 3);
    expect(output).to.deep.equal([[false, true, false], [true]]);
  });

  it('returns [] (empty array) in "chunks" of 7', function () {
    var input = Object.freeze([]);
    var output = chunk(input, 7);
    expect(output).to.deep.equal([]);
  });

});
