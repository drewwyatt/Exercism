(function() {
  'use strict';

  var Grains = function() {};

  Grains.prototype.square = function(number) {
    return this.double(1, number);
  };

  Grains.prototype.double = function(number, times, total) {
    var add = (total) ? number : 0;

    if(times === 1) {
      return number;
    } else {
      return add + this.double(number * 2, times - 1, total);
    }
  };

  Grains.prototype.total = function() {
    return this.double(1, 64, true);
  };

  module.exports = Grains;
})();
