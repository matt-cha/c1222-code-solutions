/* global expect, numVowels */

describe('numVowels(string)', function () {

  beforeEach(function () {
    expect(numVowels).to.be.a('function');
  });

  it('returns 5 for "All Code All Day"', function () {
    var input = 'All Code All Day';
    var output = numVowels(input);
    expect(output).to.equal(5);
  });

  it('returns 5 for "HTML, CSS, JavaScript, React"', function () {
    var input = 'HTML, CSS, JavaScript, React';
    var output = numVowels(input);
    expect(output).to.equal(5);
  });

  it('returns 2 for "React"', function () {
    var input = 'React';
    var output = numVowels(input);
    expect(output).to.equal(2);
  });

  it('returns 3 for "Angular"', function () {
    var input = 'Angular';
    var output = numVowels(input);
    expect(output).to.equal(3);
  });

  it('returns 0 for ""', function () {
    var input = '';
    var output = numVowels(input);
    expect(output).to.equal(0);
  });

  it('returns 5 for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = numVowels(input);
    expect(output).to.equal(5);
  });

});
