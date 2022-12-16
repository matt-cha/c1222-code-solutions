/* global expect, sinon findIndex */

describe('findIndex(array, value)', function () {

  beforeEach(function () {
    expect(findIndex).to.be.a('function');
  });

  it('takes [1, 5, 3] and 5, and returns 1', function () {
    var array = noCheating([1, 5, 3]);
    var value = 5;
    var output = findIndex(array, value);
    expect(output).to.equal(1);
  });

  it('takes [9, 8, 3] and 3 and returns 2', function () {
    var array = noCheating([9, 8, 3]);
    var value = 3;
    var output = findIndex(array, value);
    expect(output).to.equal(2);
  });

  it('takes [9, 8, 3] and 21 and returns -1', function () {
    var array = noCheating([9, 8, 3]);
    var value = 21;
    var output = findIndex(array, value);
    expect(output).to.equal(-1);
  });

  it('takes [1, 3, 2, 2, 6, 10, 6] and 6 and returns 4', function () {
    var array = noCheating([1, 3, 2, 2, 6, 10, 6]);
    var value = 6;
    var output = findIndex(array, value);
    expect(output).to.equal(4);
  });

  function noCheating(array) {
    sinon.stub(array, 'indexOf').throws(
      'No Cheating!',
      'Do not use Array.prototype.indexOf in your implementation!'
    );
    sinon.stub(array, 'findIndex').throws(
      'No Cheating!',
      'Do not use Array.prototype.findIndex in your implementation!'
    );
    return array;
  }

});
