(function() {
  'use strict';

  var School = function() {
    this.students = {};
  };

  School.prototype.roster = function() {
    return this.students;
  };

  module.exports = School;
})();
