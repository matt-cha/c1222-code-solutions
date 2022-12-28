/* global expect, banMethods, head */

describe('head(array)', function () {

  beforeEach(function () {
    expect(head).to.be.a('function');
    banMethods(head, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('returns "foo" for ["foo", "bar", "baz"]', function () {
    var input = ['foo', 'bar', 'baz'];
    var output = head(input);
    expect(output).to.equal('foo');
  });

  it('returns 1 for [1, 2, 3, 4, 5]', function () {
    var input = [1, 2, 3, 4, 5];
    var output = head(input);
    expect(output).to.equal(1);
  });

  it('returns false for [false, true, false, true]', function () {
    var input = [false, true, false, true];
    var output = head(input);
    expect(output).to.equal(false);
  });

  it('returns undefined for [] (empty arrays)', function () {
    var input = [];
    var output = head(input);
    expect(output).to.equal(undefined);
  });

});
