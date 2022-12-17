/* global expect, banMethods, initial */

describe('initial(array)', function () {

  beforeEach(function () {
    expect(initial).to.be.a('function');
    banMethods(initial, 'splice', 'slice');
  });

  it('returns the first two values of ["foo", "bar", "baz"]', function () {
    var input = ['foo', 'bar', 'baz'];
    var output = initial(input);
    expect(output).to.deep.equal(['foo', 'bar']);
  });

  it('returns the first five values of [1, 2, 3, 4, 5, 6]', function () {
    var input = [1, 2, 3, 4, 5, 6];
    var output = initial(input);
    expect(output).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('returns the first three values of [true, false, false, true]', function () {
    var input = [true, false, false, true];
    var output = initial(input);
    expect(output).to.deep.equal([true, false, false]);
  });

  it('returns [] (empty array) for []', function () {
    var input = [];
    var output = initial(input);
    expect(output).to.deep.equal([]);
  });

});
