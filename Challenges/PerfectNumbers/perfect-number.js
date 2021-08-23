class PerfectNumber {
  constructor() {}

  static classify(number) {
    if (number < 0) throw new TypeError("Non-negative integers only");

    let divisors = [1];

    for (let val = 2; val < Math.ceil(Math.sqrt(number)); val++) {
      debugger;
      if (number % val === 0) {
        divisors.push(val, number / val);
      }
    }

    let aliquot = divisors.reduce((sum, num) => sum + num, 0);

    return (aliquot === number ?
      'perfect' :
      (aliquot < number ? 'deficient' : 'abundant'));
  }
}

module.exports = { PerfectNumber };

PerfectNumber.classify(28);