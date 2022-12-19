/* global getInitialsOfPerson, expect */

describe('getInitialsOfPerson(person)', function () {

  beforeEach(function () {
    expect(getInitialsOfPerson).to.be.a('function');
  });

  it('gets Ada Lovelace\'s initials', function () {
    var input = {
      firstName: 'Ada',
      lastName: 'Lovelace'
    };
    var output = getInitialsOfPerson(input);
    expect(output).to.equal('AL');
  });

  it('gets Barbara Liskov\'s initials', function () {
    var input = {
      firstName: 'Barbara',
      lastName: 'Liskov'
    };
    var output = getInitialsOfPerson(input);
    expect(output).to.equal('BL');
  });

  it('gets Grace Hopper\'s initials', function () {
    var input = {
      firstName: 'Grace',
      lastName: 'Hopper'
    };
    var output = getInitialsOfPerson(input);
    expect(output).to.equal('GH');
  });

});
