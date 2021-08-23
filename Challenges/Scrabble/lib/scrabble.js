class Scrabble {
  constructor(string) {
    if (string) {
      this.letters = string.toUpperCase().split('');
    } else {
      this.letters = '';
    }
    this.letterScore = 0;
    this.determineScore();
  }

  determineScore() {
    let points = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10
    };

    let scoringLetters = this.letters.slice('');
    while (scoringLetters.length) {
      let letter = scoringLetters.pop();

      Object.keys(points).forEach(key => {
        if (key.includes(letter)) {
          this.letterScore += points[key];
        }
      });
    }
  }

  score() {
    return this.letterScore;
  }

  static score(str) {
    let word = new Scrabble(str);
    return word.score();
  }
}

module.exports = { Scrabble };