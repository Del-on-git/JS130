class BeerSong {
  static sing(startAt = 99, stopAt = 0) {
    let song = '';
    while (startAt >= stopAt) {
      if (startAt === 1) {
        song += `${startAt} bottle of beer on the wall, ${startAt} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n`;
      } else if (startAt === 0) {
        song += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n\n`;
      } else {
        let plural = (startAt - 1 === 1 ? 'bottle' : 'bottles');
        song += (`${startAt} bottles of beer on the wall, ${startAt} bottles of beer.\nTake one down and pass it around, ${startAt - 1} ${plural} of beer on the wall.\n\n`);
      }

      startAt--;
    }

    return song;
  }

  static verse(number) {
    let song = BeerSong.sing(number, number);

    return song.slice(0, song.length - 1);
  }

  static verses(start, stop) {
    let song = BeerSong.sing(start, stop);

    return song.slice(0, song.length - 1);
  }

  static lyrics() {
    let song = BeerSong.sing();

    return song.slice(0, song.length - 1);
  }
}

module.exports = BeerSong;