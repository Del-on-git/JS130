class Octal {
  constructor(octalNumber) {
    this.number = octalNumber;
    this.octalDigits = octalNumber.split('').reverse();
  }

  toDecimal() {
    if (this.number.includes('8') || this.number.includes('9')) {
      return 0;
    } else if (Number.isNaN(Number(this.number))) {
      return 0;
    }

    let decimalNumber = 0;

    this.octalDigits.forEach((digit, idx) => {
      decimalNumber += (Number(digit) * Math.pow(8, idx));
    });

    return decimalNumber;
  }
}

module.exports = Octal;