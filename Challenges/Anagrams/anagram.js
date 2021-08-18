class Anagram {
  constructor(inputStr) {
    this.inputStr = inputStr.toLowerCase();
    this.chars = this.makeCharList(inputStr);
  }

  makeCharList(str) {
    return str.toLowerCase().split('').sort().join('');
  }

  match(candidateArr) {
    return candidateArr.filter(candidate => {
      return ((this.chars === this.makeCharList(candidate))
        && this.inputStr !== candidate.toLowerCase());
    });
  }
}

module.exports = { Anagram };