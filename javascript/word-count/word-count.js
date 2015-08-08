(function() {
  var words = function(string) {
    var words = {};
    string.split(' ').forEach(function(word) {
      if (words[word] !== undefined) {
        words[word]++;
      } else {
        words[word] = 1;
      }
    });

    return words;
  };

  module.exports = words;
})();
