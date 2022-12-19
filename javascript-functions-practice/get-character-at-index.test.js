/* global getCharacterAtIndex, expect */

describe('getCharacterAtIndex(string, index)', function () {

  beforeEach('make sure that getCharacterAtIndex is defined', function () {
    expect(getCharacterAtIndex).to.be.a('function');
  });

  it('returns the character of "foo" at index 1', function () {
    var output = getCharacterAtIndex('foo', 1);
    expect(output).to.equal('o');
  });

  it('returns the character of "turkey sandwich" at index 6', function () {
    var output = getCharacterAtIndex('turkey sandwich', 6);
    expect(output).to.equal(' ');
  });

  it('returns the character of "absolutely" at index 8', function () {
    var output = getCharacterAtIndex('absolutely', 8);
    expect(output).to.equal('l');
  });

});
