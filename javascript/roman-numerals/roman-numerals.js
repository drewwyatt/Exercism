(function() {
  'use strict';

  var Romanizer = function(number) {
    this.number = number;
  };

  Romanizer.prototype.letters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  Romanizer.prototype.getLetterForNumber = function(number) {
    for (var prop in this.letters) {
      if (this.letters.hasOwnProperty(prop)) {
        if (this.letters[prop] === number) {
          return prop;
        }
      }
    }
  };

  Romanizer.prototype.convert = function() {
    return this.getLetterForNumber(this.number);
  };

  var toRoman = function(number) {
    return new Romanizer(number).convert();
  };

  module.exports = toRoman;
})();
