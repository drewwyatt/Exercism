(function() {
  'use strict';

  var ScrabbleScorer = function(word) { this.word = (word) ? String(word).toLowerCase() : ''; };

  ScrabbleScorer.prototype.pointValues = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
  };

  ScrabbleScorer.prototype.score = function() {
    var score = 0;
    var self = this;
    var BreakException = {};
    try {
      self.word.split('').forEach(function(letter) {
        var points = self.pointValues[letter];
        if(points) {
          score += points;
        } else {
          throw BreakException;
        }
      });
    } catch(e) {
      // there was a weird character in there...
      score = 0;
    }

    return score;
  };

  var Score = function(word) {
    return new ScrabbleScorer(word).score();
  };

  module.exports = Score;
})();
