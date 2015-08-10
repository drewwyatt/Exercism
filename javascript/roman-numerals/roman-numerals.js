(function() {
  'use strict';

  var Romanizer = function(number) {
    this.number = number;
  };

  Romanizer.prototype.letters = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
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

  Romanizer.prototype.thresholds = {
    I:  1,
    IV: 0.8,
    V:  1,
    IX: 0.9,
    X:  1,
    XL: 0.8,
    L:  1
  };

  Romanizer.prototype.meetsThreshold = function(number, letter) {
    var trimmedLetter = (letter.length > 1) ? letter.substring(1,2) : letter;
    return (Math.floor(number / this.letters[trimmedLetter] * 10)  / 10 >= this.thresholds[letter]);
  };

  Romanizer.prototype.checkingOrder = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  Romanizer.prototype.buildString = function(number, string) {
    var self = this;
    if(number <= 0) {
      return string;
    } else {
      var doChecking = true;
      self.checkingOrder.forEach(function(letter) {
        if(doChecking) {
          if(self.meetsThreshold(number, letter)) {
            string += letter;
            number -= self.letters[letter];
            doChecking = false;
          }
        }
      });

      return this.buildString(number, string);
    }
  };

  Romanizer.prototype.convert = function() {
    // return this.getLetterForNumber(this.number);
    return this.buildString(this.number, '');
  };

  var toRoman = function(number) {
    return new Romanizer(number).convert();
  };

  module.exports = toRoman;
})();
