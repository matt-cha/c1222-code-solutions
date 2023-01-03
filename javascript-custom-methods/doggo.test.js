/* global doggo, expect */

describe('doggo', function () {

  describe('doggo.bork()', function () {

    it('returns "bork! bork! bork!"', function () {
      var result = doggo.bork();
      expect(result).to.equal('bork! bork! bork!');
    });

  });

  describe('doggo.lick()', function () {

    it('returns "mlem"', function () {
      var result = doggo.lick();
      expect(result).to.equal('mlem');
    });

  });

});
