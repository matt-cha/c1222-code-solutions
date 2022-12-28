/* global expect, getWords */

describe('getWords(string)', function () {

  beforeEach(function () {
    expect(getWords).to.be.a('function');
  });

  it('returns an Array of one word', function () {
    var input = 'LearningFuze';
    var output = getWords(input);
    expect(output).to.deep.equal([
      'LearningFuze'
    ]);
  });

  it('returns an Array of two words', function () {
    var input = 'Web Development';
    var output = getWords(input);
    expect(output).to.deep.equal([
      'Web',
      'Development'
    ]);
  });

  it('returns an Array of three words', function () {
    var input = 'Cascading Style Sheets';
    var output = getWords(input);
    expect(output).to.deep.equal([
      'Cascading',
      'Style',
      'Sheets'
    ]);
  });

  it('returns an Array of four words', function () {
    var input = 'European Computer Manufacturers Association';
    var output = getWords(input);
    expect(output).to.deep.equal([
      'European',
      'Computer',
      'Manufacturers',
      'Association'
    ]);
  });

  it('returns no words', function () {
    var input = '';
    var output = getWords(input);
    expect(output).to.deep.equal([]);
  });

});
