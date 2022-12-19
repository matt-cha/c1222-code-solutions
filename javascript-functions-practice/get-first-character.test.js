/* global getFirstCharacter, expect */

describe('getFirstCharacter(string)', function () {

  beforeEach('make sure that getFirstCharacter is defined', function () {
    expect(getFirstCharacter).to.be.a('function');
  });

  it('returns the first character of "foo"', function () {
    var output = getFirstCharacter('foo');
    expect(output).to.equal('f');
  });

  it('returns the first character of "ham sandwich"', function () {
    var output = getFirstCharacter('ham sandwich');
    expect(output).to.equal('h');
  });

  it('returns the first character of "arbitrary"', function () {
    var output = getFirstCharacter('arbitrary');
    expect(output).to.equal('a');
  });

});
