(function() {
  'use strict';

  var BeerSong = function() {};

  BeerSong.prototype._buildNumberedVerse = function(startNumberOfBeers, addTrailingNewline) {
    var trailingNewLines = (addTrailingNewline) ? '\n\n' : '\n';
    var beers = new Beer(startNumberOfBeers);
    var lyrics = '';

    var line1 = [beers.count(), beers.bottles(), 'of beer on the wall,', beers.count(), beers.bottles(), 'of beer.'];

    beers.drink();

    var line2 = ['Take', beers.reference(), 'down and pass it around,', beers.count(), beers.bottles(), 'of beer on the wall.'];

    lyrics  = line1.join(' ');
    lyrics += '\n';
    lyrics += line2.join(' ');
    lyrics += trailingNewLines;

    return lyrics;
  };

  BeerSong.prototype._getFinalVerse = function(addTrailingNewline) {
    var trailingNewLines = (addTrailingNewline) ? '\n\n' : '\n';
    var verse = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    if(addTrailingNewline) {
      verse += "\n";
    }

    return verse;
  };

  BeerSong.prototype.verse = function(number) {
    var lyrics = (number > 0) ? this._buildNumberedVerse(number) : this._getFinalVerse();
    return lyrics;
  };

  BeerSong.prototype.sing = function(startNumber, endNumber) {
    var self = this;
    var lyrics = '';
    endNumber = (endNumber === undefined) ? 0 : endNumber;

    for (var i = startNumber; i >= endNumber; i--) {
      if(i > 0) {
        lyrics += self._buildNumberedVerse(i, (i > endNumber));
      } else {
        lyrics += self._getFinalVerse();
      }
    }

    return lyrics;
  };

  var Beer = function(number) {
    this.number = number;
  };

  Beer.prototype.bottles = function() {
    return (this.number === 1) ? 'bottle' : 'bottles';
  };

  Beer.prototype.count = function() {
    return (this.number === 0) ? 'no more' : String(this.number);
  };

  Beer.prototype.reference = function() {
    return (this.number + 1 === 1) ? 'it' : 'one';
  };

  Beer.prototype.drink = function() {
    this.number--;
  };

  // console.log(new BeerSong()._buildNumberedVerse(1));;
  module.exports = new BeerSong();
})();
