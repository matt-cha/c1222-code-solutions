/* global expect, filterOutNulls */

describe('filterOutNulls(values)', function () {

  beforeEach(function () {
    expect(filterOutNulls).to.be.a('function');
  });

  it('takes [\'a\', null, \'b\', null] and returns [\'a\', \'b\']', function () {
    var input = ['a', null, 'b', null];
    var output = filterOutNulls(input);
    expect(output).to.deep.equal(['a', 'b']);
  });

  it('takes [null, null, null, null, null] and returns []', function () {
    var input = [null, null, null, null, null];
    var output = filterOutNulls(input);
    expect(output).to.deep.equal([]);
  });
  it('takes [7, 8, null, 9] and return [7, 8, 9]', function () {
    var input = [7, 8, null, 9];
    var output = filterOutNulls(input);
    expect(output).to.deep.equal([7, 8, 9]);
  });

});
