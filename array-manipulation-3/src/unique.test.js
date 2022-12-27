/* global expect, unique */

describe('unique(array)', function () {

  beforeEach(function () {
    expect(unique).to.be.a('function');
  });

  context('["foo", "bar", "baz", "qux", "bar", "qux", "corge", "baz"]', function () {

    it('returns ["foo", "bar", "baz", "qux", "corge"]', function () {
      var input = Object.freeze(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
      var output = unique(input);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux', 'corge']);
    });

  });

  context('[1, 3, 3, 2, 5, 2, 1, 4, 5, 5]', function () {

    it('returns [1, 3, 2, 5, 4]', function () {
      var input = Object.freeze([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
      var output = unique(input);
      expect(output).to.deep.equal([1, 3, 2, 5, 4]);
    });

  });

  context('[false, true, false, true]', function () {

    it('returns [false, true]', function () {
      var input = Object.freeze([false, true, false, true]);
      var output = unique(input);
      expect(output).to.deep.equal([false, true]);
    });

  });

  context('[]', function () {

    it('returns []', function () {
      var input = Object.freeze([]);
      var output = unique(input);
      expect(output).to.deep.equal([]);
    });

  });

});
