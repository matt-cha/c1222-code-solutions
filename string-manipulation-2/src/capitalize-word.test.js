/* global expect, capitalizeWord */

describe('capitalizeWord(word)', function () {

  beforeEach(function () {
    expect(capitalizeWord).to.be.a('function');
  });

  it('capitalizes "broKeN"', function () {
    var input = 'broKeN';
    var output = capitalizeWord(input);
    expect(output).to.equal('Broken');
  });

  it('capitalizes "sEarCHinG"', function () {
    var input = 'sEarCHinG';
    var output = capitalizeWord(input);
    expect(output).to.equal('Searching');
  });

  it('capitalizes "quEStiOn"', function () {
    var input = 'quEStiOn';
    var output = capitalizeWord(input);
    expect(output).to.equal('Question');
  });

  it('capitalizes "tHoUghTfUl"', function () {
    var input = 'tHoUghTfUl';
    var output = capitalizeWord(input);
    expect(output).to.equal('Thoughtful');
  });

  it('capitalizes "jaVAsCrIPt"', function () {
    var input = 'jaVAsCrIPt';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "javaScript"', function () {
    var input = 'javaScript';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "JavascRipt"', function () {
    var input = 'JavascRipt';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

});
