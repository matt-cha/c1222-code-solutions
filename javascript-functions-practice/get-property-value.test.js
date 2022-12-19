/* global getPropertyValue, expect */

describe('getPropertyValue(object, key)', function () {

  beforeEach(function () {
    expect(getPropertyValue).to.be.a('function');
  });

  it('gets the birthPlace of Ada Lovelace', function () {
    var object = {
      name: 'Ada Lovelace',
      occupation: 'countess',
      birthPlace: 'London, England'
    };
    var key = 'birthPlace';
    var output = getPropertyValue(object, key);
    expect(output).to.equal('London, England');
  });

  it('gets the occupation of Barbara Liskov', function () {
    var object = {
      name: 'Barbara Liskov',
      occupation: 'computer scientist',
      birthPlace: 'Los Angeles, California'
    };
    var key = 'occupation';
    var output = getPropertyValue(object, key);
    expect(output).to.equal('computer scientist');
  });

  it('gets the name of Grace Hopper', function () {
    var object = {
      name: 'Grace Hopper',
      occupation: 'navy rear admiral',
      birthPlace: 'New York City, New York'
    };
    var key = 'name';
    var output = getPropertyValue(object, key);
    expect(output).to.equal('Grace Hopper');
  });

});
