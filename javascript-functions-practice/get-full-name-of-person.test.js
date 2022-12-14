/* global getFullNameOfPerson, expect */

describe('getFullNameOfPerson(person)', function () {

  beforeEach(function () {
    expect(getFullNameOfPerson).to.be.a('function');
  });

  it('gets Ada Lovelace\'s full name', function () {
    var input = {
      firstName: 'Ada',
      lastName: 'Lovelace'
    };
    var output = getFullNameOfPerson(input);
    expect(output).to.equal('Ada Lovelace');
  });

  it('gets Barbara Liskov\'s full name', function () {
    var input = {
      firstName: 'Barbara',
      lastName: 'Liskov'
    };
    var output = getFullNameOfPerson(input);
    expect(output).to.equal('Barbara Liskov');
  });

  it('gets Grace Hopper\'s full name', function () {
    var input = {
      firstName: 'Grace',
      lastName: 'Hopper'
    };
    var output = getFullNameOfPerson(input);
    expect(output).to.equal('Grace Hopper');
  });

});
