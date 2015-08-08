(function() {
	Array.prototype.equals = function (array) {
	    // if the other array is a falsy value, return
	    if (!array)
	        return false;
	
	    // compare lengths - can save a lot of time 
	    if (this.length != array.length)
	        return false;
	
	    for (var i = 0, l=this.length; i < l; i++) {
	        // Check if we have nested arrays
	        if (this[i] instanceof Array && array[i] instanceof Array) {
	            // recurse into the nested arrays
	            if (!this[i].equals(array[i]))
	                return false;       
	        }           
	        else if (this[i] != array[i]) { 
	            // Warning - two different object instances will never be equal: {x:20} != {x:20}
	            return false;   
	        }           
	    }       
	    return true;
	}   
	
	var Anagrammer = function(word) {
		return new Anagram(word);
	}
	
	var Anagram = function(word) {
		this._word = word.toLowerCase().split('');
	}
	
	Anagram.prototype.matches = function(wordArray) {
		var matches = [];
		var self = this;
		var words;
		
		if(Array.isArray(wordArray)) {
			words = wordArray
		} else {
			if(arguments.length === 1) {
				words = [arguments[0]];
			} else {
				words = Array.prototype.slice.call(arguments, 1);
			}
		}
		
		words.forEach(function(word) {
			if(self._matchesThisWord(word)) {
				matches.push(word);
			}
		});	
		
		return matches;
	} 
	
	Anagram.prototype._matchesThisWord = function(word) {
		var isMatch = false;
		var wordToMatch = word.toLowerCase().split('');
		if(!wordToMatch.equals(this._word) && wordToMatch.length === this._word.length) {
			var index;
			this._word.forEach(function(letter) {
				index = wordToMatch.indexOf(letter);
				if(index > -1) {
					wordToMatch.splice(index, 1);
				}
			});
			
			if(wordToMatch.length === 0) {
				isMatch = true;
			}
		}
		
		return isMatch;
	}
	
	module.exports = Anagrammer;
})();