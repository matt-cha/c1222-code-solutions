/* global expect, zip */

describe('zip(first, second)', function () {

  beforeEach(function () {
    expect(zip).to.be.a('function');
  });

  context('["name", "course", "grade"] and ["Cody", "CSS", 9001]', function () {

    it('returns [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]', function () {
      var output = zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]);
      expect(output).to.deep.equal([['name', 'Cody'], ['course', 'CSS'], ['grade', 9001]]);
    });

  });

  context('["dog", "lion", "hawk", "tiger"] and ["cat", "lamb", "dove"]', function () {

    it('returns [["dog", "cat"], ["lion", "lamb"], ["hawk", "dove"]]', function () {
      var output = zip(
        ['dog', 'lion', 'hawk', 'tiger'],
        ['cat', 'lamb', 'dove']
      );
      expect(output).to.deep.equal([['dog', 'cat'], ['lion', 'lamb'], ['hawk', 'dove']]);
    });

  });

  context('[1, 3, 5] and [2, 4, 6, 8]', function () {

    it('returns [[1, 2], [3, 4], [5, 6]]', function () {
      var output = zip([1, 3, 5], [2, 4, 6, 8]);
      expect(output).to.deep.equal([[1, 2], [3, 4], [5, 6]]);
    });

  });

  context('["l", "e", "a", "r", "n", "i"] and ["n", "g", "f", "u", "z", "e"]', function () {

    it('returns [["l", "n"], ["e", "g"], ["a", "f"], ["r", "u"], ["n", "z"], ["i", "e"]]', function () {
      var output = zip(
        ['l', 'e', 'a', 'r', 'n', 'i'],
        ['n', 'g', 'f', 'u', 'z', 'e']
      );
      expect(output).to.deep.equal([['l', 'n'], ['e', 'g'], ['a', 'f'], ['r', 'u'], ['n', 'z'], ['i', 'e']]);
    });

  });

  context("[true, false, false, true, null, false, true]\nand ['Tony', undefined, undefined, 'Jeeves', 'Pepper', undefined, 'Nick']", function () {

    it("returns [[true, 'Tony'], [false, undefined], [false, undefined], [true, 'Jeeves'], [null, 'Pepper'], [false, undefined], [true, 'Nick']]", function () {
      var output = zip(
        [true, false, false, true, null, false, true],
        ['Tony', undefined, undefined, 'Jeeves', 'Pepper', undefined, 'Nick']
      );
      expect(output).to.deep.equal([[true, 'Tony'], [false, undefined], [false, undefined], [true, 'Jeeves'], [null, 'Pepper'], [false, undefined], [true, 'Nick']]);
    });

  });

});
