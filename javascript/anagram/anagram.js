(function() {
	var Anagrammer = function(word) {
		return new Anagram(word);
	}
	
	var Anagram = function(word) {
		this._word = word.split('');
	}
	
	Anagram.prototype.matches = function(words) {
		var matches = [];
		var self = this;
		words.forEach(function(word) {
			if(self._matchesThisWord(word)) {
				matches.push(word);
			}
		});	
		
		return matches;
	} 
	
	Anagram.prototype._matchesThisWord = function(word) {
		var isMatch = false;
		if(word.length === this._word.length) {
			var wordToMatch = word.split('');
			this._word.forEach(function(letter) {
				console.log(wordToMatch.indexOf(letter));
			});
		}
		
		return isMatch;
	}
	
	module.exports = Anagrammer;
})();