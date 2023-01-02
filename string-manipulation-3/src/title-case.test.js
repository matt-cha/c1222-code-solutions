/* global expect, titleCase */

describe('titleCase(string)', function () {

  function randomCase(string) {
    var cased = '';
    for (var i = 0; i < string.length; i++) {
      var random = Math.random();
      if (random < 0.5) {
        cased += string[i].toLowerCase();
      } else {
        cased += string[i].toUpperCase();
      }
    }
    return cased;
  }

  beforeEach(function () {
    expect(titleCase).to.be.a('function');
  });

  it('title cases "composing software"', function () {
    var input = randomCase('composing software');
    var output = titleCase(input);
    expect(output).to.equal('Composing Software');
  });

  it('title cases "high performance browser networking"', function () {
    var input = randomCase('high performance browser networking');
    var output = titleCase(input);
    expect(output).to.equal('High Performance Browser Networking');
  });

  it('title cases "node.js in action"', function () {
    var input = randomCase('node.js in action');
    var output = titleCase(input);
    expect(output).to.equal('Node.js in Action');
  });

  it('title cases "professional JavaScript for web developers', function () {
    var input = randomCase('professional JavaScript for web developers');
    var output = titleCase(input);
    expect(output).to.equal('Professional JavaScript for Web Developers');
  });

  it('title cases "secrets of the javascript ninja"', function () {
    var input = randomCase('secrets of the javascript ninja');
    var output = titleCase(input);
    expect(output).to.equal('Secrets of the JavaScript Ninja');
  });

  it('title cases "web audio api"', function () {
    var input = randomCase('web audio api');
    var output = titleCase(input);
    expect(output).to.equal('Web Audio API');
  });

  it('title cases "javascript: the definitive guide"', function () {
    var input = randomCase('javascript: the definitive guide');
    var output = titleCase(input);
    expect(output).to.equal('JavaScript: The Definitive Guide');
  });

  it('title cases "speaking Javascript: an in-depth guide for programmers"', function () {
    var input = randomCase('speaking Javascript: an in-depth guide for programmers');
    var output = titleCase(input);
    expect(output).to.equal('Speaking JavaScript: An In-Depth Guide for Programmers');
  });

  it('title cases "the self-taught programmer: the definitive guide to programming professionally"', function () {
    var input = randomCase('the self-taught programmer: the definitive guide to programming professionally');
    var output = titleCase(input);
    expect(output).to.equal('The Self-Taught Programmer: The Definitive Guide to Programming Professionally');
  });

  it('title cases "an absolute beginner\'s guide to cryptocurrency"\'', function () {
    var input = randomCase("an absolute beginner's guide to cryptocurrency");
    var output = titleCase(input);
    expect(output).to.equal('An Absolute Beginner\'s Guide to Cryptocurrency');
  });

  it('title cases "hop on pop"', function () {
    var input = randomCase('hop on pop');
    var output = titleCase(input);
    expect(output).to.equal('Hop on Pop');
  });

  it('title cases "the cat in the hat"', function () {
    var input = randomCase('the cat in the hat');
    var output = titleCase(input);
    expect(output).to.equal('The Cat in the Hat');
  });

  it('title cases "green eggs and ham"', function () {
    var input = randomCase('green eggs and ham');
    var output = titleCase(input);
    expect(output).to.equal('Green Eggs and Ham');
  });

  it('title cases "fox in socks"', function () {
    var input = randomCase('fox in socks');
    var output = titleCase(input);
    expect(output).to.equal('Fox in Socks');
  });

  it('title cases "what pet should i get?"', function () {
    var input = randomCase('what pet should i get?');
    var output = titleCase(input);
    expect(output).to.equal('What Pet Should I Get?');
  });

});
