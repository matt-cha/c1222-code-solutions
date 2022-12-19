/* global expect, getIndexes */

describe('getIndexes(array)', function () {

  beforeEach(function () {
    expect(getIndexes).to.be.a('function');
  });

  it('Takes ["meow", "woof", "squeak", "shazoo"], and returns the indexes of the array in a new array', function () {
    var input = ['meow', 'woof', 'squeak', 'shazoo'];
    var output = getIndexes(input);
    expect(output).to.deep.equal([0, 1, 2, 3]);
  });

  it('Takes ["hello", "world"], and returns the indexes of the array in a new array', function () {
    var input = ['hello', 'world'];
    var output = getIndexes(input);
    expect(output).to.deep.equal([0, 1]);
  });

  it('Takes an empty array as argument, and return the indexes of the array in a new array', function () {
    var input = [];
    var output = getIndexes(input);
    expect(output).to.deep.equal([]);
  });

  it('Takes [1, 2, 3], and returns the indexes of the array in a new array', function () {
    var input = [1, 2, 3];
    var output = getIndexes(input);
    expect(output).to.deep.equal([0, 1, 2]);
  });
});
