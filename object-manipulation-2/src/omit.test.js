/* global omit, expect */

describe('omit(source, keys)', function () {

  beforeEach(function () {
    expect(omit).to.be.a('function');
  });

  it('creates an object without the listed keys', function () {
    var testCases = [
      [
        { foo: 1, bar: 2, baz: 3 },
        ['foo', 'baz'],
        { bar: 2 }
      ],
      [
        { qux: 4, corge: 5 },
        ['bar', 'grault'],
        { qux: 4, corge: 5 }
      ],
      [
        {},
        ['foo', 'bar', 'baz'],
        {}
      ]
    ];
    for (var i = 0; i < testCases.length; i++) {
      var source = testCases[i][0];
      var keys = testCases[i][1];
      var expected = testCases[i][2];
      var frozen = Object.freeze(source);
      var actual = omit(frozen, keys);
      expect(actual).to.deep.equal(expected);
    }
  });

});
