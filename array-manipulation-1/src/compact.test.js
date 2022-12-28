/* global expect, banMethods, compact */

describe('compact(array)', function () {

  beforeEach(function () {
    expect(compact).to.be.a('function');
    banMethods(compact, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('omits false from arrays', function () {
    var input = [true, true, false, true];
    var output = compact(input);
    expect(output).to.deep.equal([true, true, true]);
  });

  it('omits null from arrays', function () {
    var input = [{}, null, {}, {}];
    var output = compact(input);
    expect(output).to.deep.equal([{}, {}, {}]);
  });

  it('omits NaN from arrays', function () {
    var input = [1, 2, 3, 4, NaN, 6, 7];
    var output = compact(input);
    expect(output).to.deep.equal([1, 2, 3, 4, 6, 7]);
  });

  it('omits 0 and -0 from arrays', function () {
    var input = [-0, 8, 9, 10, 11, 0, 13];
    var output = compact(input);
    expect(output).to.deep.equal([8, 9, 10, 11, 13]);
  });

  it('omits undefined from arrays', function () {
    var input = [[], undefined, [], [], undefined];
    var output = compact(input);
    expect(output).to.deep.equal([[], [], []]);
  });

  it('omits "" (empty strings) from arrays', function () {
    var input = ['', 'foo', 'bar', '', 'baz', 'qux'];
    var output = compact(input);
    expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux']);
  });

  it('maintains the order of truthy elements', function () {
    var input = [1, 'a', {}, [], true];
    var output = compact(input);
    expect(output).to.deep.equal([1, 'a', {}, [], true]);
  });

});
