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

  Romanizer.prototype.buildString = function(number, string) {
    if(number <= 0) {
      return string;
    } else {
      if(Math.floor(number / this.letters.L * 10)  / 10 >= 1) {
        string += 'L';
        number -= 50;
      } else if(Math.floor(number / this.letters.L * 10)  / 10 >= 0.8) {
        string += 'XL';
        number -= 40;
      } else if(Math.floor(number / this.letters.X * 10)  / 10 >= 1) {
        string += 'X';
        number -= 10;
      } else if(Math.floor(number / this.letters.X * 10)  / 10 === 0.9) {
        string += 'IX';
        number -= 9;
      } else if(Math.floor(number / this.letters.V * 10)  / 10 >= 1) {
        string += 'V';
        number -= 5;
      } else if(Math.floor(number / this.letters.V * 10)  / 10 >= 0.8) {
        string += 'IV';
        number -= 4;
      } else if(Math.floor(number / this.letters.I * 10)  / 10 >= 1) {
        string += 'I';
        number -= 1;
      }

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
