/* global expect, banMethods, last */

describe('last(array)', function () {

  beforeEach(function () {
    expect(last).to.be.a('function');
    banMethods(last, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('returns "baz" for ["foo", "bar", "baz"]', function () {
    var input = ['foo', 'bar', 'baz'];
    var output = last(input);
    expect(output).to.equal('baz');
  });

  it('returns 5 for [1, 2, 3, 4, 5]', function () {
    var input = [1, 2, 3, 4, 5];
    var output = last(input);
    expect(output).to.equal(5);
  });

  it('returns true for [false, true, false, true]', function () {
    var input = [false, true, false, true];
    var output = last(input);
    expect(output).to.equal(true);
  });

  it('returns undefined for [] (empty arrays)', function () {
    var input = [];
    var output = last(input);
    expect(output).to.equal(undefined);
  });

});
