/* global getDescriptionOfPerson, expect */

describe('getDescriptionOfPerson(person)', function () {

  beforeEach(function () {
    expect(getDescriptionOfPerson).to.be.a('function');
  });

  it('gets a description of Ada Lovelace', function () {
    var input = {
      name: 'Ada Lovelace',
      occupation: 'countess',
      birthPlace: 'London, England'
    };
    var output = getDescriptionOfPerson(input);
    expect(output).to.equal('Ada Lovelace is a countess from London, England.');
  });

  it('gets a description of Barbara Liskov', function () {
    var input = {
      name: 'Barbara Liskov',
      occupation: 'computer scientist',
      birthPlace: 'Los Angeles, California'
    };
    var output = getDescriptionOfPerson(input);
    expect(output).to.equal(
      'Barbara Liskov is a computer scientist from Los Angeles, California.'
    );
  });

  it('gets a description of Grace Hopper', function () {
    var input = {
      name: 'Grace Hopper',
      occupation: 'navy rear admiral',
      birthPlace: 'New York City, New York'
    };
    var output = getDescriptionOfPerson(input);
    expect(output).to.equal(
      'Grace Hopper is a navy rear admiral from New York City, New York.'
    );
  });

});
