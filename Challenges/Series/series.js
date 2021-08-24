class Series {
  constructor(sequence) {
    this.sequence = sequence;
  }

  slices(size) {
    if (size > this.sequence.length) throw new Error("Can't slice this size");
    let allSlices = [];

    for (let idx = 0; idx + size <= this.sequence.length; idx++) {
      let subset = this.sequence.slice(idx, idx + size);
      allSlices.push(subset.split('').map(char => Number.parseInt(char, 10)));
    }

    return allSlices;
  }
}

module.exports = Series;