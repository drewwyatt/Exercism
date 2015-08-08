(function() {
	var Anagrammer = function(word) {
		return new Anagram(word);
	}
	
	var Anagram = function(word) {
		this.word = word;
	}
	
	Anagram.prototype.matches = function(words) {
		
	} 
	
	module.exports = Anagrammer;
})();