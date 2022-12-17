/* global expect, banMethods, reverse */

describe('reverse(array)', function () {

  beforeEach(function () {
    expect(reverse).to.be.a('function');
    banMethods(reverse, 'reverse');
  });

  it('returns ["foo", "bar", "baz"] in reverse', function () {
    var input = ['foo', 'bar', 'baz'];
    var output = reverse(input);
    expect(output).to.deep.equal(['baz', 'bar', 'foo']);
  });

  it('returns [1, 2, 3, 4, 5] in reverse', function () {
    var input = [1, 2, 3, 4, 5];
    var output = reverse(input);
    expect(output).to.deep.equal([5, 4, 3, 2, 1]);
  });

  it('returns [false, true, false, true] in reverse', function () {
    var input = [false, true, false, true];
    var output = reverse(input);
    expect(output).to.deep.equal([true, false, true, false]);
  });

  it('returns [] (empty array) for []', function () {
    var input = [];
    var output = reverse(input);
    expect(output).to.deep.equal(input);
  });

});
