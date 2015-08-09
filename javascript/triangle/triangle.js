(function() {
  'use strict';

  var Triangle = function(sideA, sideB, sideC) {
    this.sides = {
      a: sideA,
      b: sideB,
      c: sideC
    };
  };

  Triangle.prototype.kind = function() {};

  module.exports = Triangle;
})();
