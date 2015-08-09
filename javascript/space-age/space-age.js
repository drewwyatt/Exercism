(function() {
  'use strict';

  var Age = function(seconds) { this.seconds = seconds; };

  Age.prototype.orbitalPeriod = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  Age.prototype.onMercury = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.mercury) * 100)  / 100;
  };

  Age.prototype.onVenus = function() {
    return Math.floor((this.onEarth() / this.orbitalPeriod.venus) * 100)  / 100;
  };

  Age.prototype.onEarth = function() {
    return Math.round((this.seconds / 60 / 60 / 24 / 365.25) * 100)  / 100;
  };

  Age.prototype.onMars = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.mars) * 100)  / 100;
  };

  Age.prototype.onJupiter = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.jupiter) * 100)  / 100;
  };

  Age.prototype.onSaturn = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.saturn) * 100)  / 100;
  };

  Age.prototype.onUranus = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.uranus) * 100)  / 100;
  };

  Age.prototype.onNeptune = function() {
    return Math.round((this.onEarth() / this.orbitalPeriod.neptune) * 100)  / 100;
  };

  module.exports = Age;
})();
