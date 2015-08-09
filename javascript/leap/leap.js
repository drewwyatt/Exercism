(function() {
  'use strict';

  var isLeapYear = function(year) {
    var isLeapYear = false;

    if(year % 4 === 0) {
      if(year % 100 === 0) {
        if(year % 400 === 0) {
          isLeapYear = true;
        }
      } else {
        isLeapYear = true;
      }
    }

    return isLeapYear;
  };

  module.exports = isLeapYear;
})();


// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
