class Robot {
  constructor() {
    this.generateName();
  }

  generateRandNum() {
    return Math.floor(Math.random() * 9);
  }

  generateName() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let name = letters[Math.floor(Math.random() * letters.length)]
      .concat(letters[Math.floor(Math.random() * letters.length)],
        this.generateRandNum(), this.generateRandNum(), this.generateRandNum());

    if (Robot.assignedNames.includes(name)) {
      this.generateName();
    } else {
      this.robotName = name;
      Robot.assignedNames.push(name);
    }
  }

  reset() {
    this.generateName();
  }

  name() {
    return this.robotName;
  }

  static assignedNames = [];
}

module.exports = Robot;