/* global student, expect */

describe('student', function () {

  beforeEach(function () {
    expect(student).to.be.an('object');
  });

  describe('student.firstName', function () {

    it('has a string firstName', function () {
      expect(student)
        .to.have.property('firstName')
        .that.is.a('string');
    });

  });

  describe('student.lastName', function () {

    it('has a string lastName', function () {
      expect(student)
        .to.have.property('lastName')
        .that.is.a('string');
    });

  });

  describe('student.subject', function () {

    it('has a string subject', function () {
      expect(student)
        .to.have.property('subject')
        .that.is.a('string');
    });

  });

  describe('student.getFullName()', function () {

    it('is a method', function () {
      expect(student)
        .to.have.property('getFullName')
        .that.is.a('function');
    });

    it('returns the student\'s full name', function () {
      var fullName = student.getFullName();
      expect(fullName).to.be.a('string');
    });

    it('uses the firstName and lastName properties of `this`', function () {
      var jeff = {
        firstName: 'Jeff',
        lastName: 'Jefferson'
      };
      jeff.getFullName = student.getFullName;
      var fullName = jeff.getFullName();
      expect(fullName).to.equal('Jeff Jefferson');
    });

  });

  describe('student.getIntroduction()', function () {

    it('is a method', function () {
      expect(student)
        .to.have.property('getIntroduction')
        .that.is.a('function');
    });

    it('returns the student\'s introduction', function () {
      var introduction = student.getIntroduction();
      expect(introduction).to.be.a('string');
    });

    it('uses the firstName, lastName, and subject properties of `this`', function () {
      var doug = {
        firstName: 'Douglas',
        lastName: 'Crockford',
        subject: 'JavaScript',
        getFullName: function () {
          return this.firstName + ' ' + this.lastName;
        }
      };
      doug.getIntroduction = student.getIntroduction;
      var actual = doug.getIntroduction();
      var expected = 'Hello, my name is Douglas Crockford and I am studying JavaScript.';
      expect(actual).to.equal(expected);
    });

  });

});
