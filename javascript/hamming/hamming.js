(function() {
  var DiffCounter = function(strand1, strand2) {
    this.strand1 = (strand1) ? strand1.split('') : [];
    this.strand2 = (strand2) ? strand2.split('') : [];
  };

  DiffCounter.prototype.strandsIncomparable = function() {
    return this.strand1.length !== this.strand2.length;
  };

  DiffCounter.prototype.countDifferences = function() {
    var diffs = 0;
    for(i=0; i<this.strand1.length; i++) {
      if(this.strand1[i] !== this.strand2[i]) {
        diffs++;
      }
    }
    
    return diffs;
  };
  
  var compute = function(strand1, strand2) {
    var counter = new DiffCounter(strand1, strand2);
    if (counter.strandsIncomparable()) {
      throw new Error('DNA strands must be of equal length.');
    }

    return counter.countDifferences();
  };

  module.exports.compute = compute;
})();
