(function() {
  'use strict';

  var Clock = function(hours, minutes) {
    this.hours = hours;
    this.minutes = (minutes) ? minutes : 0;
  };

  Clock.prototype.toString = function() {
    return this._getHours() + ':' + this._getMinutes();
  };

  Clock.prototype._getHours = function() {
    return (this.hours < 10) ? '0' + this.hours : this.hours;
  };

  Clock.prototype._getMinutes = function() {
    return (this.minutes < 10) ? '0' + this.minutes : this.minutes;
  };

  Clock.prototype.plus = function(minutes) {
    this.minutes += minutes;
    if (this.minutes > 60) {
      var hoursToAdd = Math.round(this.minutes / 60);
      this.hours += hoursToAdd;
      this.minutes -= hoursToAdd * 60;
    }

    if(this.hours > 23) {
      var hoursToSubtract = Math.round(this.hours / 24);
      this.hours -= hoursToSubtract * 24;
    }

    return this;
  };

  Clock.prototype.minus = function(minutes) {
    this.minutes -= minutes;
    if (this.minutes < 0) {
      var hoursToSubtract = Math.round(Math.abs(this.minutes) / 60) + 1;
      this.hours -= hoursToSubtract;
      this.minutes += 60 * hoursToSubtract;
    }

    if(this.hours < 0) {
      var hourMultiplier = Math.round(Math.abs(this.hours) / 24) + 1;
      this.hours += 24 * hourMultiplier;
    }

    return this;
  };

  Clock.prototype.equals = function(otherClock) {
    var equals = false;
    if(this.hours === otherClock.hours && this.minutes === otherClock.minutes) {
      equals = true;
    }

    return equals;
  };

  var Factory = function(hours, minutes) {
    return new Clock(hours, minutes);
  };

  module.exports.at = Factory;
})();
