/* global calculator, expect */

describe('calculator', function () {

  beforeEach(function () {
    expect(calculator).to.be.an('object');
  });

  describe('calculator.add(x, y)', function () {

    it('returns the sum of two numbers', function () {
      expect(calculator.add(2, 3)).to.equal(5);
      expect(calculator.add(5, 4)).to.equal(9);
      expect(calculator.add(9, 7)).to.equal(16);
    });

  });

  describe('calculator.subtract(x, y)', function () {

    it('returns the difference of two numbers', function () {
      expect(calculator.subtract(2, 3)).to.equal(-1);
      expect(calculator.subtract(5, 4)).to.equal(1);
      expect(calculator.subtract(9, 7)).to.equal(2);
    });

  });

  describe('calculator.multiply(x, y)', function () {

    it('returns the product of two numbers', function () {
      expect(calculator.multiply(2, 3)).to.equal(6);
      expect(calculator.multiply(5, 4)).to.equal(20);
      expect(calculator.multiply(9, 7)).to.equal(63);
    });

  });

  describe('calculator.divide(x, y)', function () {

    it('returns the quotient of two numbers', function () {
      expect(calculator.divide(2, 3)).to.equal(0.6666666666666666);
      expect(calculator.divide(5, 4)).to.equal(1.25);
      expect(calculator.divide(100, 20)).to.equal(5);
    });

  });

  describe('calculator.square(x)', function () {

    it('returns a number squared', function () {
      expect(calculator.square(2)).to.equal(4);
      expect(calculator.square(5)).to.equal(25);
      expect(calculator.square(10)).to.equal(100);
    });

  });

  describe('calculator.sumAll(numbers)', function () {

    it('returns the sum of 2 and 3', function () {
      var input = [2, 3];
      var output = calculator.sumAll(input);
      expect(output).to.equal(5);
    });

    it('returns the sum of 5, 6, and 7', function () {
      var input = [5, 6, 7];
      var output = calculator.sumAll(input);
      expect(output).to.equal(18);
    });

    it('returns the sum of 92, 88, 95, and 101', function () {
      var input = [92, 88, 95, 101];
      var output = calculator.sumAll(input);
      expect(output).to.equal(376);
    });

  });

  describe('calculator.getAverage(numbers)', function () {

    it('returns the average of 2 and 3', function () {
      var input = [2, 3];
      var output = calculator.getAverage(input);
      expect(output).to.equal(2.5);
    });

    it('returns the average of 5, 6, and 7', function () {
      var input = [5, 6, 7];
      var output = calculator.getAverage(input);
      expect(output).to.equal(6);
    });

    it('returns the average of 92, 88, 95, and 101', function () {
      var input = [92, 88, 95, 101];
      var output = calculator.getAverage(input);
      expect(output).to.equal(94);
    });

  });

});
