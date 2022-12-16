/* global expect, addSuffixToAll */

describe('addSuffixToAll(words, suffix)', function () {

  beforeEach(function () {
    expect(addSuffixToAll).to.be.a('function');
  });

  it('Adds "ly" to the end of each word', function () {
    var input = ['clever', 'meek', 'hurried', 'nice'];
    var output = addSuffixToAll(input, 'ly');
    expect(output).to.deep.equal(['cleverly', 'meekly', 'hurriedly', 'nicely']);
  });

  it('Adds "er" to the end of each word', function () {
    var input = ['new', 'pander', 'scoop'];
    var output = addSuffixToAll(input, 'er');
    expect(output).to.deep.equal(['newer', 'panderer', 'scooper']);
  });

  it('Adds "ing" to the end of each word', function () {
    var input = ['bend', 'sharpen', 'mean'];
    var output = addSuffixToAll(input, 'ing');
    expect(output).to.deep.equal(['bending', 'sharpening', 'meaning']);
  });

  it('Adds "ity" to the end of each word', function () {
    var input = ['equal', 'abnormal', 'civil'];
    var output = addSuffixToAll(input, 'ity');
    expect(output).to.deep.equal(['equality', 'abnormality', 'civility']);
  });

});
