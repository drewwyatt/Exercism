(function() {
  'use strict';

  var School = function() {
    this.students = {};
  };

  School.prototype.roster = function() {
    return this.students;
  };

  School.prototype.add = function(name, grade) {
    if(this.students[grade] !== undefined) {
      this.students[grade].push(name);
    } else {
      this.students[grade] = [name];
    }
  };

  module.exports = School;
})();
