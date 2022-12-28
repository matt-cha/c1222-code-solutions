/* global expect, isVowel */

describe('isVowel(character)', function () {

  beforeEach(function () {
    expect(isVowel).to.be.a('function');
  });

  it('returns false for "L"', function () {
    var input = 'L';
    var output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "f"', function () {
    var input = 'f';
    var output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "Z"', function () {
    var input = 'Z';
    var output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns true for "a"', function () {
    var input = 'a';
    var output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "E"', function () {
    var input = 'E';
    var output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "I"', function () {
    var input = 'I';
    var output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "o"', function () {
    var input = 'o';
    var output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "u"', function () {
    var input = 'u';
    var output = isVowel(input);
    expect(output).to.equal(true);
  });

});
