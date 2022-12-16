/* global expect, reverseWord, banMethods */

describe('reverseWord(word)', function () {

  beforeEach(function () {
    expect(reverseWord).to.be.a('function');
    banMethods(reverseWord, 'split', 'from', '\\.\\.'); // no spreading
  });

  it('returns "oof" for "foo"', function () {
    var input = 'foo';
    var output = reverseWord(input);
    expect(output).to.equal('oof');
  });

  it('returns "bar" for "rab"', function () {
    var input = 'rab';
    var output = reverseWord(input);
    expect(output).to.equal('bar');
  });

  it('returns "ezuFgninraeL" for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = reverseWord(input);
    expect(output).to.equal('ezuFgninraeL');
  });

  it('returns "JavaScript" for "tpircSavaJ"', function () {
    var input = 'tpircSavaJ';
    var output = reverseWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('returns "racecar" for "racecar"', function () {
    var input = 'racecar';
    var output = reverseWord(input);
    expect(output).to.equal('racecar');
  });

});
