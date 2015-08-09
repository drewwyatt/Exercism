(function() {
  'use strict';

  var Gigasecond = function(startDate) { this.startDate = startDate; };

  Gigasecond.prototype.date = function() {
    var days = 1000000000 / 60 /60 /24;
    var newDate = this.startDate.setDate(this.startDate.getDate() + days);
    return new Date(newDate);
  };

  module.exports = Gigasecond;
})();
