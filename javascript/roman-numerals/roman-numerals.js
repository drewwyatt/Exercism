(function() {
  'use strict';

  /**
   * Numeral
   * (Helper object for Romanizer)
   */

  var Numeral = function(value) {
    this.value = value;
    this.threshold = this._getThreshold(value);
  };

  Numeral.prototype._getThreshold = function(value) {
    var threshold = 0.8;
    if (value === 1 || value % 5 === 0) {
      threshold = 1;
    } else if (value % 9 === 0) {
      threshold = 0.9;
    }

    return threshold;
  };

  /**
   * Romanizer
   * (all the real work happens here)
   */

  var Romanizer = function(number) {
    this.number = number;
  };

  // public

  Romanizer.prototype.convert = function() {
    return this._buildString(this.number, '');
  };

  Romanizer.prototype.numerals = {
    M: new Numeral(1000),
    CM: new Numeral(900),
    D: new Numeral(500),
    CD: new Numeral(400),
    C: new Numeral(100),
    XC: new Numeral(90),
    L: new Numeral(50),
    XL: new Numeral(40),
    X: new Numeral(10),
    IX: new Numeral(9),
    V: new Numeral(5),
    IV: new Numeral(4),
    I: new Numeral(1)
  };

  // private

  Romanizer.prototype._meetsThreshold = function(number, letter) {
    return (Math.floor(number / this.numerals[letter].value * 10) / 10 >= this.numerals[letter].threshold);
  };

  Romanizer.prototype._buildString = function(number, string) {
    var self = this;
    if (number <= 0) {
      return string;
    } else {
      var doChecking = true;
      for (var letter in self.numerals) {
        if (doChecking) {
          if (self._meetsThreshold(number, letter)) {
            string += letter;
            number -= self.numerals[letter].value;
            doChecking = false;
          }
        }
      }

      return this._buildString(number, string);
    }
  };

  /**
   * toRoman
   * ( ^^ function wrapper for everything up there ^^ )
   */

  var toRoman = function(number) {
    return new Romanizer(number).convert();
  };

  module.exports = toRoman;
})();
