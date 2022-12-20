/* global expect, capitalizeWords */

describe('capitalizeWords(string)', function () {

  beforeEach(function () {
    expect(capitalizeWords).to.be.a('function');
  });

  it('capitalizes the words in "needs solution"', function () {
    var input = 'needs solution';
    var output = capitalizeWords(input);
    expect(output).to.equal('Needs Solution');
  });

  it('capitalizes the words in "Add string manipulation practice."', function () {
    var input = 'Add string manipulation practice.';
    var output = capitalizeWords(input);
    expect(output).to.equal('Add String Manipulation Practice.');
  });

  it('capitalizes the words in "aLl CoDe aLl DaY', function () {
    var input = 'aLl CoDe aLl DaY';
    var output = capitalizeWords(input);
    expect(output).to.equal('All Code All Day');
  });

  it('capitalizes the words in "HTML, CSS, JavaScript, PHP, SQL"', function () {
    var input = 'HTML, CSS, JavaScript, PHP, SQL';
    var output = capitalizeWords(input);
    expect(output).to.equal('Html, Css, Javascript, Php, Sql');
  });

});
