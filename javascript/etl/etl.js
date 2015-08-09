(function() {
  'use strict';

  var Transformer = function() {};

  Transformer.prototype.transform = function(oldData) {
    var newData = {};
    for(var pointValue in oldData) {
      oldData[pointValue].forEach(function(letter) {
        newData[letter.toLowerCase()] = Number(pointValue);
      });
    }

    return newData;
  };

  var Factory = function(data) {
    return new Transformer().transform(data);
  };

  module.exports = Factory;
})();
