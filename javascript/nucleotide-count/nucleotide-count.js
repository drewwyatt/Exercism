(function() {
  'use strict';

  var DNA = function(strand) {
    this.nucleotides = ['A', 'C', 'G', 'T'];
    this.strand = (strand) ? strand.split('') : [];

    if(this.strand !== []) {
      this.validateStrand();
    }
  };

  DNA.prototype.count = function(nucleotide) {
    var count = 0;
    this.strand.forEach(function(n) {
      if (n === nucleotide) {
        count++;
      }
    });

    return count;
  };

  DNA.prototype.histogram = function() {
    var histogram = {};
    var self = this;
    this.nucleotides.forEach(function(nucleotide) {
        histogram[nucleotide] = self.count(nucleotide);
    });

    return histogram;
  };

  DNA.prototype.validateStrand = function() {
    var self = this;
    this.strand.forEach(function(n) {
      if(self.nucleotides.indexOf(n) === -1) {
        throw new Error('Invalid strand.');
      }
    });
  };

  var Factory = function(strand) {
    return new DNA(strand);
  };

  module.exports = Factory;
})();
