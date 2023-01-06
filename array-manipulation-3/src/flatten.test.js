/* global expect, banMethods, deepFreeze, flatten */

describe('flatten(array)', function () {

  beforeEach(function () {
    expect(flatten).to.be.a('function');
    banMethods(flatten, 'flat');
  });

  context('[["foo", "bar"], ["baz", "qux"]]', function () {

    it('returns ["foo", "bar", "baz", "qux"]', function () {
      var input = deepFreeze([['foo', 'bar'], ['baz', 'qux']]);
      var output = flatten(input);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux']);
    });

  });

  context('[[1], [2], 3, 4, [5]]', function () {

    it('returns [1, 2, 3, 4, 5]', function () {
      var input = deepFreeze([[1], [2], 3, 4, [5]]);
      var output = flatten(input);
      expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

  });

  context('[false, [true, [false]], [true]]', function () {

    it('returns [false, true, [false], true]', function () {
      var input = deepFreeze([false, [true, [false]], [true]]);
      var output = flatten(input);
      expect(output).to.deep.equal([false, true, [false], true]);
    });

  });

  context('[{ length: 2 }, { length: 4 }, { length: 5 }]', function () {

    it('returns [{ length: 2 }, { length: 4 }, { length: 5 }]', function () {
      var two = { length: 2 };
      var four = { length: 4 };
      var five = { length: 5 };
      var input = deepFreeze([two, four, five]);
      var output = flatten(input);
      expect(output).to.deep.equal([two, four, five]);
    });

  });

});
