class RomanNumeral {
  constructor(arabicNumerals) {
    this.inputNum = arabicNumerals;
    this.outputNum = '';
    this.splitPlaceValues();
  }

  splitPlaceValues() {
    this.placeValues = String(this.inputNum).split('').reverse();
  }

  determineUnitNumeral(digit) {
    if (digit === 9) return 'IX';
    else if (digit === 8) return 'VIII';
    else if (digit === 7) return 'VII';
    else if (digit === 6) return 'VI';
    else if (digit === 5) return 'V';
    else if (digit === 4) return 'IV';
    else if (digit === 3) return 'III';
    else if (digit === 2) return 'II';
    else if (digit === 1) return 'I';
    else return '';
  }

  determineTensNumeral(digit) {
    if (digit === 9) return 'XC';
    else if (digit === 8) return 'LXXX';
    else if (digit === 7) return 'LXX';
    else if (digit === 6) return 'LX';
    else if (digit === 5) return 'L';
    else if (digit === 4) return 'XL';
    else if (digit === 3) return 'XXX';
    else if (digit === 2) return 'XX';
    else if (digit === 1) return 'X';
    else return '';
  }

  determineHundredsNumeral(digit) {
    if (digit === 9) return 'CM';
    else if (digit === 8) return 'DCCC';
    else if (digit === 7) return 'DCC';
    else if (digit === 6) return 'DC';
    else if (digit === 5) return 'D';
    else if (digit === 4) return 'CD';
    else if (digit === 3) return 'CCC';
    else if (digit === 2) return 'CC';
    else if (digit === 1) return 'C';
    else return '';
  }

  determineThousandsNumeral(digit) {
    if (digit) {
      return 'M'.repeat(digit);
    }

    return '';
  }

  toRoman() {
    return ''.concat(
      this.determineThousandsNumeral(Number(this.placeValues[3])),
      this.determineHundredsNumeral(Number(this.placeValues[2])),
      this.determineTensNumeral(Number(this.placeValues[1])),
      this.determineUnitNumeral(Number(this.placeValues[0]))
    );
  }
}

module.exports = { RomanNumeral };