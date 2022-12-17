/* global expect, getKeys, banMethods */

describe('getKeys(object)', function () {

  beforeEach(function () {
    expect(getKeys).to.be.a('function');
    banMethods(getKeys, 'keys', 'entries', 'getOwnPropertyNames');
  });

  it('returns Dave\'s property keys', function () {
    var dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    var output = getKeys(dave);
    expect(output)
      .to.be.an('array')
      .with.length(2)
      .that.includes('firstName')
      .and.includes('lastName');
  });

  it('returns LearningFuze\'s property keys', function () {
    var learningFuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    };
    var output = getKeys(learningFuze);
    expect(output)
      .to.be.an('array')
      .with.length(3)
      .that.includes('latitude')
      .that.includes('attitude')
      .and.includes('longitude');
  });

  it('returns Tim\'s property keys', function () {
    var tim = {};
    var output = getKeys(tim);
    expect(output).to.deep.equal([]);
  });

});
