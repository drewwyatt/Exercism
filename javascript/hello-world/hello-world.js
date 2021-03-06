//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  var name = (input) ? input : 'world';
  var msg = ['Hello, ', name, '!'];

  return msg.join('');
};

module.exports = HelloWorld;
