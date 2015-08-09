(function() {
  'use strict';

  var PhoneNumber = function(userInput) {
    this.phoneNumber = this._validate(this._clean(userInput));
  };

  PhoneNumber.prototype._clean = function(dirtyNumber) {
    var cleanNumber = [];

    dirtyNumber.split('').forEach(function(n) {
      if(!isNaN(n) && isFinite(n) && n !== ' ') {
        cleanNumber.push(n);
      }
    });

    return cleanNumber.join('');
  };

  PhoneNumber.prototype._validate = function(schrodingerNumber) {
    var validatedNumber;
    if(schrodingerNumber.length === 10) {
      validatedNumber = schrodingerNumber;
    } else if (schrodingerNumber.length === 11) {
      if(schrodingerNumber.substring(0, 1) === '1') {
        validatedNumber = schrodingerNumber.replace('1', '');
      }
    }

    if(validatedNumber === undefined) {
      validatedNumber = '0000000000';
    }

    return validatedNumber;
  };

  PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
  };

  PhoneNumber.prototype.areaCode = function() {
    return this.phoneNumber.substring(0, 3);
  };

  PhoneNumber.prototype.prefix = function() {
    return this.phoneNumber.substring(3, 6);
  };

  PhoneNumber.prototype.suffix = function() {
    return this.phoneNumber.substring(6);
  };

  PhoneNumber.prototype.toString = function() {
    var parts = [
      '(',
      this.areaCode(),
      ')',
      ' ',
      this.prefix(),
      '-',
      this.suffix()
    ];
    return parts.join('');
  };

  module.exports =  PhoneNumber;
})();
