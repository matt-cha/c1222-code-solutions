/* global expect, reverseWords */

describe('reverseWords(string)', function () {

  beforeEach(function () {
    expect(reverseWords).to.be.a('function');
  });

  it('reverses the words in "What is unit testing?"', function () {
    var input = 'What is unit testing?';
    var output = reverseWords(input);
    expect(output).to.equal('tahW si tinu ?gnitset');
  });

  it('reverses the words in "follow your passion"', function () {
    var input = 'follow your passion';
    var output = reverseWords(input);
    expect(output).to.equal('wollof ruoy noissap');
  });

  it('reverses the words in "All Code All Day"', function () {
    var input = 'All Code All Day';
    var output = reverseWords(input);
    expect(output).to.equal('llA edoC llA yaD');
  });

  it('reverses the words in "Hello, how are you?"', function () {
    var input = 'Hello, how are you?';
    var output = reverseWords(input);
    expect(output).to.equal(',olleH woh era ?uoy');
  });

});
