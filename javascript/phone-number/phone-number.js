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

    return validatedNumber;
  };

  PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
  };

  module.exports =  PhoneNumber;
})();
