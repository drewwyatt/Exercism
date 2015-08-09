(function() {
  'use strict';

  var Robot = function() {
    this.reset();
  };

  Robot.prototype.reset = function() {
    this.name = NameFactory.makeName();
  };

  var NameFactory = {};

  NameFactory.makeName = function() {
    return [
      this._randomLetter(),
      this._randomLetter(),
      this._randomNumber(),
      this._randomNumber(),
      this._randomNumber()
    ].join('').toUpperCase();
  };

  NameFactory._randomLetter = function() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  };

  NameFactory._randomNumber = function() {
    return Math.floor(Math.random() * (9 - 0 + 1));
  };

  module.exports = Robot;
})();
