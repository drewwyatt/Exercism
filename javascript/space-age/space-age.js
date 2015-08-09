(function() {
  'use strict';

  var Age = function(seconds) { this.seconds = seconds; };

  Age.prototype.onEarth = function() {
    return Math.round((this.seconds / 60 / 60 / 24 / 365.25) * 100)  / 100;
  };

  module.exports = Age;
})();
