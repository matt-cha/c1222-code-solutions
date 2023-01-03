/* global yakko, wakko, dot, expect */

describe('The Warner Bros.', function () {

  beforeEach(function () {
    expect(yakko).to.be.an('object');
    expect(wakko).to.be.an('object');
    expect(dot).to.be.an('object');
  });

  describe('warner.name', function () {

    it('each has a string name', function () {
      expect(yakko)
        .to.have.property('name')
        .that.equals('Yakko');
      expect(wakko)
        .to.have.property('name')
        .that.equals('Wakko');
      expect(dot)
        .to.have.property('name')
        .that.equals('Dot');
    });

  });

  describe('warner.age', function () {

    it('each has a number age', function () {
      expect(yakko)
        .to.have.property('age')
        .that.equals(14);
      expect(wakko)
        .to.have.property('age')
        .that.equals(11);
      expect(dot)
        .to.have.property('age')
        .that.equals(10);
    });

  });

  describe('warner.role', function () {

    it('each has a string role', function () {
      expect(yakko)
        .to.have.property('role')
        .that.equals('brother');
      expect(wakko)
        .to.have.property('role')
        .that.equals('brother');
      expect(dot)
        .to.have.property('role')
        .that.equals('sister');
    });

  });

  describe('warner.describe()', function () {

    it('each can describe themself', function () {
      expect(yakko.describe()).to.equal(
        'Yakko is a 14-year-old Warner brother.'
      );
      expect(yakko).not.to.have.own.property('describe');
      expect(wakko.describe()).to.equal(
        'Wakko is a 11-year-old Warner brother.'
      );
      expect(wakko).not.to.have.own.property('describe');
      expect(dot.describe()).to.equal(
        'Dot is a 10-year-old Warner sister.'
      );
      expect(dot).not.to.have.own.property('describe');
    });

  });

});
