/* eslint-disable id-length */
class UsageError extends Error {
  constructor() {
    throw new Error("This is not a valid triangle!");
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this._determineValidity([side1, side2, side3]);
    this.assignSides([side1, side2, side3]);
    this.classify();
  }

  assignSides(sideArr) {
    [this.side1, this.side2, this.side3] = sideArr.sort((a, b) => a - b);
  }

  classify() {
    let classifications = ['equilateral', 'isosceles', 'scalene'];
    let lengthCounts = {};

    [this.side1, this.side2, this.side3].forEach(side => {
      lengthCounts[side] += 1;
    });

    switch (Object.keys(lengthCounts).length) {
      case 1:
        this.classification = classifications[0];
        break;
      case 2:
        this.classification = classifications[1];
        break;
      case 3:
        this.classification = classifications[2];
        break;
      default:
        throw UsageError;
    }
  }

  kind() {
    return this.classification;
  }

  _determineValidity(sideArr) {
    let a;
    let b;
    let c;
    [ a, b, c ] = sideArr;

    if (a + b > c && a + c > b && b + c > a) {
      return undefined;
    } else if (sideArr.some(side => side <= 0)) {
      throw new UsageError();
    } else {
      throw new UsageError();
    }
  }
}

module.exports = { Triangle };

let test = new Triangle(2,2,2);
console.log(test.kind());