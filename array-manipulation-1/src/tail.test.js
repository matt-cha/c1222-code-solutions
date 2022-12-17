/* global expect, banMethods, tail */

describe('tail(array)', function () {

  beforeEach(function () {
    expect(tail).to.be.a('function');
    banMethods(tail, 'slice', 'splice', 'pop', 'shift');
  });

  it('returns the last two values of ["foo", "bar", "baz"]', function () {
    var input = ['foo', 'bar', 'baz'];
    var output = tail(input);
    expect(output).to.deep.equal(['bar', 'baz']);
  });

  it('returns the last five values of [1, 2, 3, 4, 5, 6]', function () {
    var input = [1, 2, 3, 4, 5, 6];
    var output = tail(input);
    expect(output).to.deep.equal([2, 3, 4, 5, 6]);
  });

  it('returns the last three values of [true, false, false, true]', function () {
    var input = [true, false, false, true];
    var output = tail(input);
    expect(output).to.deep.equal([false, false, true]);
  });

  it('returns [] (empty array) for []', function () {
    var input = [];
    var output = tail(input);
    expect(output).to.deep.equal([]);
  });

});
