/* global expect, getValues, banMethods */

describe('getValues(object)', function () {

  beforeEach(function () {
    expect(getValues).to.be.a('function');
    banMethods(getValues, 'keys', 'values', 'entries', 'getOwnPropertyNames');
  });

  it('returns Dave\'s property values', function () {
    var dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    var output = getValues(dave);
    expect(output)
      .to.be.an('array')
      .with.length(2)
      .that.includes('David')
      .and.includes('Thomas');
  });

  it('returns LearningFuze\'s property values', function () {
    var learningFuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    };
    var output = getValues(learningFuze);
    expect(output)
      .to.be.an('array')
      .with.length(3)
      .that.includes(33.6349)
      .that.includes('sanguine')
      .and.includes(117.7405);
  });

  it('returns Tim\'s property values', function () {
    var tim = {};
    var output = getValues(tim);
    expect(output).to.deep.equal([]);
  });

});
