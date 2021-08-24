class SumOfMultiples {
  constructor(...bases) {
    this.bases = [...bases];
  }

  to(maxVal) {
    let multiples = [];

    this.bases.forEach(num => {
      for (let idx = 1; idx * num < maxVal; idx++) {
        if (!multiples.includes(idx * num)) {
          multiples.push(idx * num);
        }
      }
    });

    return multiples.reduce((sum, num) => sum + num, 0);
  }

  static to(maxVal) {
    let obj = new SumOfMultiples(3, 5);
    return obj.to(maxVal);
  }
}

module.exports = SumOfMultiples;