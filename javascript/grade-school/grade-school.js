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
      this.students[grade].sort();
    } else {
      this.students[grade] = [name];
    }
  };

  School.prototype.grade = function(grade) {
    if(this.students[grade] !== undefined) {
      return this.students[grade];
    } else {
      return [];
    }
  };

  module.exports = School;
})();
