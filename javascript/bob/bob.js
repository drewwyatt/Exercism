//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var remark = new Remark(input);
  var response = 'Whatever.';

  if (remark.isQuestion()) {
    response = 'Sure.';
  }

  if (remark.isBeingYelled()) {
    response = 'Whoa, chill out!';
  }

  if (remark.isSilence()) {
    response = 'Fine. Be that way!';
  }

  return response;
};

var Remark = function(string) {
  this.string = (string) ? String(string) : '';
};

Remark.prototype.isQuestion = function() {
  return this.string.substr(-1) === '?';
};

Remark.prototype.isBeingYelled = function()  {
  return (this.string === this.string.toUpperCase() && this.string.match(/[a-z]/i));
};

Remark.prototype.isSilence = function() {
  return this.string.trim().length === 0;
};

module.exports = Bob;
