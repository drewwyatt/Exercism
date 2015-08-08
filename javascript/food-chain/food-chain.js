(function() {
  var SongMaker = function() {
    this.song = Song();
    this.verse = verse;
    this.verses = verses;
    this.getVerseIndexes = getVerseIndexes;
  };

  var verse = function(verse) {
    var verseIndex = verse -1;
    var lyrics = '';

    lyrics  = this.song[verseIndex].join('\n');
    lyrics += '\n';

    return lyrics;
  };

  var verses = function(startingVerse, endingVerse) {
    var verseIndexes = this.getVerseIndexes(startingVerse, endingVerse);
    var lyrics = '';
    var self = this;

    verseIndexes.forEach(function(index) {
      lyrics += self.song[index].join('\n');
      lyrics += '\n\n';
    });

    return lyrics;
  };

  var getVerseIndexes = function(startingVerse, endingVerse) {
    var start = startingVerse;
    var end = (endingVerse) ? endingVerse : startingVerse;
    var indexes = [];
    for(i=start; i<=end; i++) {
      indexes.push(i-1);
    }

    return indexes;
  };

  var Song = function() {
    return [
      [
        "I know an old lady who swallowed a fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a spider.",
        "It wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a bird.",
        "How absurd to swallow a bird!",
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a cat.",
        "Imagine that, to swallow a cat!",
        "She swallowed the cat to catch the bird.",
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a dog.",
        "What a hog, to swallow a dog!",
        "She swallowed the dog to catch the cat.",
        "She swallowed the cat to catch the bird.",
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a goat.",
        "Just opened her throat and swallowed a goat!",
        "She swallowed the goat to catch the dog.",
        "She swallowed the dog to catch the cat.",
        "She swallowed the cat to catch the bird.",
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a cow.",
        "I don't know how she swallowed a cow!",
        "She swallowed the cow to catch the goat.",
        "She swallowed the goat to catch the dog.",
        "She swallowed the dog to catch the cat.",
        "She swallowed the cat to catch the bird.",
        "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
        "She swallowed the spider to catch the fly.",
        "I don't know why she swallowed the fly. Perhaps she'll die."
      ],

      [
        "I know an old lady who swallowed a horse.",
        "She's dead, of course!"
      ]
    ];
  };

  var song = new SongMaker();
  module.exports = song;
})();
