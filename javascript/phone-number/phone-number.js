(function() {
  'use strict';

  var PhoneNumber = function(userInput) {
    this.phoneNumber = this._clean(userInput);
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

  PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
  };

  module.exports =  PhoneNumber;
})();
