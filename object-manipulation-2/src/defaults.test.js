/* global defaults, expect */

describe('defaults(target, source)', function () {

  beforeEach(function () {
    expect(defaults).to.be.a('function');
  });

  it('copies all properties onto an empty target', function () {
    var target = {};
    var source = Object.freeze({
      foo: 1,
      bar: 2,
      baz: 3
    });
    defaults(target, source);
    expect(target).to.deep.equal(source);
  });

  it('copies all missing properties onto a target', function () {
    var target = {
      foo: 1,
      baz: 3
    };
    var source = Object.freeze({
      bar: 2
    });
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      bar: 2,
      baz: 3
    });
  });

  it('does not overwrite existing properties of a target', function () {
    var target = {
      foo: 1,
      bar: null,
      baz: 3
    };
    var source = Object.freeze({
      foo: 4,
      bar: 2,
      baz: 5,
      qux: false
    });
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      bar: null,
      baz: 3,
      qux: false
    });
  });

  it('copies no properties from an empty source', function () {
    var target = {
      foo: 1,
      baz: 3
    };
    var source = Object.freeze({});
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      baz: 3
    });
  });

});
