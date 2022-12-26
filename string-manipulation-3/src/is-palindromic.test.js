/* global expect, isPalindromic */

describe('isPalindromic(string)', function () {

  beforeEach(function () {
    expect(isPalindromic).to.be.a('function');
  });

  it('returns true for "bob"', function () {
    var input = 'bob';
    var output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "alice"', function () {
    var input = 'alice';
    var output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "racecar"', function () {
    var input = 'racecar';
    var output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "rasecar"', function () {
    var input = 'rasecar';
    var output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "taco cat"', function () {
    var input = 'taco cat';
    var output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "sam i am"', function () {
    var input = 'sam i am';
    var output = isPalindromic(input);
    expect(output).to.equal(false);
  });

});
