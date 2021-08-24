class Diamond {
  constructor() {
    this.makeLetters();
  }

  makeLetters() {
    this.alphabet = ['A'];

    'BCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((letter, idx) => {
      let repeatVal = ((idx + 1) * 2) - 1;
      this.alphabet.push(letter.concat(' '.repeat(repeatVal), letter));
    });
  }

  generateTop(offset) {
    let str = '';
    let alphaIdx = 0;

    while (offset >= 0) {
      str += ' '.repeat(offset).concat(this.alphabet[alphaIdx++], ' '.repeat(offset), '\n');
      offset--;
    }

    return str;
  }

  generateBottom(letterIdx) {
    let str = '';
    let offset = 1;

    while (letterIdx >= 0) {
      str += ' '.repeat(offset).concat(this.alphabet[letterIdx--], ' '.repeat(offset++), '\n');
    }

    return str;
  }

  genDiamond(letter) {
    let diamondString = '';
    let alphaPos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter);
    diamondString += this.generateTop(alphaPos);
    diamondString += this.generateBottom(alphaPos - 1);

    return diamondString;
  }

  static makeDiamond(letter) {
    let diamond = new Diamond(letter);

    return diamond.genDiamond(letter);
  }
}

module.exports = Diamond;