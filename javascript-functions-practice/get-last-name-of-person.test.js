/* global getLastNameOfPerson, expect */

describe('getLastNameOfPerson(person)', function () {

  beforeEach(function () {
    expect(getLastNameOfPerson).to.be.a('function');
  });

  it('gets Ada Lovelace\'s last name', function () {
    var input = {
      firstName: 'Ada',
      lastName: 'Lovelace'
    };
    var output = getLastNameOfPerson(input);
    expect(output).to.equal('Lovelace');
  });

  it('gets Barbara Liskov\'s last name', function () {
    var input = {
      firstName: 'Barbara',
      lastName: 'Liskov'
    };
    var output = getLastNameOfPerson(input);
    expect(output).to.equal('Liskov');
  });

  it('gets Grace Hopper\'s last name', function () {
    var input = {
      firstName: 'Grace',
      lastName: 'Hopper'
    };
    var output = getLastNameOfPerson(input);
    expect(output).to.equal('Hopper');
  });

});
