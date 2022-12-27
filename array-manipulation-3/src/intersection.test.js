/* global expect, intersection */

describe('intersection(first, second)', function () {

  beforeEach(function () {
    expect(intersection).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', function () {

    it('returns [2]', function () {
      var first = Object.freeze([2, 1]);
      var second = Object.freeze([2, 3]);
      var output = intersection(first, second);
      expect(output).to.deep.equal([2]);
    });

  });

  context('["html", "css", "javascript"] and ["php", "css", "sql"]', function () {

    it('returns ["css"]', function () {
      var first = Object.freeze(['html', 'css', 'javascript']);
      var second = Object.freeze(['php', 'css', 'sql']);
      var output = intersection(first, second);
      expect(output).to.deep.equal(['css']);
    });

  });

  context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', function () {

    it('returns ["link", "the"]', function () {
      var first = Object.freeze(['a', 'link', 'to', 'the', 'past']);
      var second = Object.freeze(['the', 'adventure', 'of', 'link']);
      var output = intersection(first, second);
      expect(output).to.deep.equal(['link', 'the']);
    });

  });

});
