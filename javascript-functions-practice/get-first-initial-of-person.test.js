/* global getFirstInitialOfPerson, expect */

describe('getFirstInitialOfPerson(person)', function () {

  beforeEach(function () {
    expect(getFirstInitialOfPerson).to.be.a('function');
  });

  it('gets Ada Lovelace\'s first initial', function () {
    var input = {
      firstName: 'Ada',
      lastName: 'Lovelace'
    };
    var output = getFirstInitialOfPerson(input);
    expect(output).to.equal('A');
  });

  it('gets Barbara Liskov\'s first initial', function () {
    var input = {
      firstName: 'Barbara',
      lastName: 'Liskov'
    };
    var output = getFirstInitialOfPerson(input);
    expect(output).to.equal('B');
  });

  it('gets Grace Hopper\'s first initial', function () {
    var input = {
      firstName: 'Grace',
      lastName: 'Hopper'
    };
    var output = getFirstInitialOfPerson(input);
    expect(output).to.equal('G');
  });

});
