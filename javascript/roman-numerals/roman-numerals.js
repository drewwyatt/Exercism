(function() {
  'use strict';

  var Romanizer = function(number) {
    this.number = number;
  };

  var Numeral = function(value, threshold) {
    this.value = value;
    this.threshold = threshold;
  };

  Romanizer.prototype.numerals = {
    M: new Numeral(1000, 1),
    CM: new Numeral(900, 0.9),
    D: new Numeral(500, 1),
    CD: new Numeral(400, 0.8),
    C: new Numeral(100, 1),
    XC: new Numeral(90, 0.9),
    L: new Numeral(50, 1),
    XL: new Numeral(40, 0.8),
    X: new Numeral(10, 1),
    IX: new Numeral(9, 0.9),
    V: new Numeral(5, 1),
    IV: new Numeral(4, 0.8),
    I: new Numeral(1, 1)
  };

  Romanizer.prototype.meetsThreshold = function(number, letter) {
    return (Math.floor(number / this.numerals[letter].value * 10) / 10 >= this.numerals[letter].threshold);
  };



  // Romanizer.prototype.checkingOrder = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  Romanizer.prototype.buildString = function(number, string) {
    var self = this;
    if (number <= 0) {
      return string;
    } else {
      var doChecking = true;
      for(var letter in self.numerals) {
        if (doChecking) {
          if (self.meetsThreshold(number, letter)) {
            string += letter;
            number -= self.numerals[letter].value;
            doChecking = false;
          }
        }
      }

      // console.log(number, string);

      return this.buildString(number, string);
    }
  };

  Romanizer.prototype.convert = function() {
    return this.buildString(this.number, '');
  };

  var toRoman = function(number) {
    return new Romanizer(number).convert();
  };

  module.exports = toRoman;
})();
