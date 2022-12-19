/* global expect, truncate */

describe('truncate(length, string)', function () {

  beforeEach(function () {
    expect(truncate).to.be.a('function');
  });

  it('truncates "All Code All Day" to 8 characters', function () {
    var result = truncate(8, 'All Code All Day');
    expect(result).to.equal('All Code...');
  });

  it('truncates "HTML, CSS, JavaScript, React" to 15 characters', function () {
    var result = truncate(15, 'HTML, CSS, JavaScript, React');
    expect(result).to.equal('HTML, CSS, Java...');
  });

  it('truncates "React" to 1 character', function () {
    var result = truncate(1, 'React');
    expect(result).to.equal('R...');
  });

  it('truncates "" to 5 characters', function () {
    var result = truncate(5, '');
    expect(result).to.equal('...');
  });

  it('truncates "LearningFuze" to 20 characters', function () {
    var result = truncate(20, 'LearningFuze');
    expect(result).to.equal('LearningFuze...');
  });

});
