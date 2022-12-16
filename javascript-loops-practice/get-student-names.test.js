/* global expect, getStudentNames */

describe('getStudentNames(students)', function () {

  beforeEach(function () {
    expect(getStudentNames).to.be.a('function');
  });

  it(`takes [{ name: "Robert" },
      { name: "Steve" },
      { name: "Ken" }] and returns [
      "Robert",
      "Steve",
      "Ken"
    ]`, function () {
    var input = [
      { name: 'Robert' },
      { name: 'Steve' },
      { name: 'Ken' }
    ];
    var output = getStudentNames(input);
    expect(output).to.deep.equal(['Robert', 'Steve', 'Ken']);
  });

  it(`takes [{ name: "Shrek" },
      { name: "Donkey" }] and returns [
      "Shrek",
      "Donkey"
    ]`, function () {
    var input = [
      { name: 'Shrek' },
      { name: 'Donkey' }
    ];
    var output = getStudentNames(input);
    expect(output).to.deep.equal(['Shrek', 'Donkey']);
  });

  it('takes [] and returns []', function () {
    var argument = [];
    var output = getStudentNames(argument);
    expect(output).to.deep.equal([]);
  });

});
