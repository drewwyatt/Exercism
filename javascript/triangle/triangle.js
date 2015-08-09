(function() {
  'use strict';

  var Triangle = function(sideA, sideB, sideC) {
    this.sides = {
      a: sideA,
      b: sideB,
      c: sideC
    };
  };

  Triangle.prototype.kind = function() {
  
   if(!this.inequalityIsValid()) {
     throw new Error();
   }  
	
    var type = 'scalene';
    var aMatches = this.matchingSides('a');
    var bMatches = this.matchingSides('b');
    if (aMatches === 2) {
    	type = 'equilateral';
    } else if (aMatches === 1 || bMatches === 1) {
    	type = 'isosceles';
    }

    return type;
  };

  Triangle.prototype.matchingSides = function(side) {
    var equals = 0;
    var self = this;
    for(var key in self.sides) {
      if(key !== side && self.sides[key] === self.sides[side]) {
      	equals++;
      }
    }

    return equals;
  };

  Triangle.prototype.inequalityIsValid = function() {
    var valid = true;

    if(this.sides.a === 0 ||
       this.sides.b === 0 ||
       this.sides.c === 0) {
      
	    valid = false;
    }

    if(this.sides.a + this.sides.b < this.sides.c || 
       this.sides.b + this.sides.c < this.sides.a ||
       this.sides.c + this.sides.a < this.sides.b) {
      
	    valid = false;
    }

    return valid;
  };

  module.exports = Triangle;
})();
