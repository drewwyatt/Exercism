(function() {
  'use strict';

  var RNAFactory = function(dnaStrand) {
    var dna = dnaStrand.split('');
    var rna = [];
    var transcriber = {G: 'C', C: 'G', T: 'A', A: 'U'};

    dna.forEach(function(nucleotide) {
      rna.push(transcriber[nucleotide]);
    });

    return rna.join('');
  };

  module.exports = RNAFactory;
})();
