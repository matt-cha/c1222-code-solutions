/* global expect, banMethods, includes */

describe('includes(array, value)', function () {

  beforeEach(function () {
    expect(includes).to.be.a('function');
    banMethods(includes, 'includes');
  });

  it('finds "baz" in ["foo", "bar", "baz", "qux"]', function () {
    var input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    var output = includes(input, 'baz');
    expect(output).to.equal(true);
  });

  it('does not find "corge" in ["foo", "bar", "baz", "qux"]', function () {
    var input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    var output = includes(input, 'corge');
    expect(output).to.equal(false);
  });

  it('finds 2 in [1, 2, 3, 4, 5]', function () {
    var input = Object.freeze([1, 2, 3, 4, 5]);
    var output = includes(input, 2);
    expect(output).to.equal(true);
  });

  it('does not find 7 in [1, 2, 3, 4, 5]', function () {
    var input = Object.freeze([1, 2, 3, 4, 5]);
    var output = includes(input, 7);
    expect(output).to.equal(false);
  });

  it('finds false in [false, true, false, true]', function () {
    var input = Object.freeze([false, true, false, true]);
    var output = includes(input, false);
    expect(output).to.equal(true);
  });

  it('does not find null in [false, true, false, true]', function () {
    var input = Object.freeze([false, true, false, true]);
    var output = includes(input, null);
    expect(output).to.equal(false);
  });

  it('does not find anything in [] (empty array)', function () {
    var input = Object.freeze([]);
    expect(includes(input, true)).to.equal(false);
    expect(includes(input, 'foo')).to.equal(false);
    expect(includes(input, 7)).to.equal(false);
  });

});
