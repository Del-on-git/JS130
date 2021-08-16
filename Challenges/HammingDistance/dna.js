class DNA {
  constructor(codonSequence) {
    this.sequence = codonSequence;
  }

  hammingDistance(otherSeq) {
    let sequences = [Array.from(this.sequence), Array.from(otherSeq)];
    sequences.sort((a, b) => a.length - b.length);
    sequences[1].length = sequences[0].length;

    let distance = 0;
    sequences[0].forEach((amino, idx) => {
      if (amino !== sequences[1][idx]) {
        distance += 1;
      }
    });

    return distance;
  }
}

module.exports = { DNA };