/* global expect, isLowerCased */

describe('isLowerCased(word)', function () {

  beforeEach(function () {
    expect(isLowerCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "zip-ties"', function () {
    var input = 'zip-ties';
    var output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "JavaScript"', function () {
    var input = 'JavaScript';
    var output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "burgers"', function () {
    var input = 'burgers';
    var output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "HTML"', function () {
    var input = 'HTML';
    var output = isLowerCased(input);
    expect(output).to.equal(false);
  });

});
