class CustomSet {
  constructor(elements = []) {
    this.members = elements.slice();
  }

  isEmpty() {
    return this.members.length === 0;
  }

  contains(element) {
    return this.members.includes(element);
  }

  isSubset(superset) {
    if (this.isEmpty()) {
      return true;
    }
    return this.members.every(element => superset.members.includes(element));
  }

  isDisjoint(set) {
    return this.members.every(element => !set.members.includes(element));
  }

  isSame(set) {
    if (this.isEmpty() && !set.isEmpty()) {
      return false;
    }
    return this.members.every(element => set.members.includes(element));
  }

  //add element to this if element not in this
  add(element) {
    if (!this.members.includes(element)) {
      this.members.push(element);
    }

    return this;
  }

  //all the elements in this and set
  intersection(set) {
    let newSet = new CustomSet();

    this.members.forEach(element => {
      if (set.members.includes(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  //only the elements in this, but not in set
  difference(set) {
    let newSet = new CustomSet();

    this.members.forEach(element => {
      if (!set.members.includes(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  //return a set of elements in both sets
  union(set) {
    let newSet = new CustomSet();
    let allElements = [...this.members, ...set.members];

    allElements.forEach(element => newSet.add(element));

    return newSet;
  }
}

module.exports = CustomSet;