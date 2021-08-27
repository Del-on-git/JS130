// create a singly linked list whose elements may contain a range of data such
// as the numbers 1-10. Provide functions to reverse the linked list and
// convert a linked list to and from an array.

class Element {
  constructor(data, head = null) {
    this.data = data;
    this.isTailElement = true;
    this.nextElement = head;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.isTailElement;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.elements = [];
  }

  static fromArray(arr) {
    let sll = new SimpleLinkedList();
    let workingArr;
    if (Array.isArray(arr)) {
      workingArr = arr.slice().reverse();
      workingArr.forEach(item => sll.push(item));
    }

    return sll;
  }

  toArray() {
    return this.elements.map(item => item.datum()).reverse();
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  head() {
    let element = this.elements[this.elements.length - 1];
    if (element instanceof Element) {
      return element;
    } else {
      return null;
    }
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    let newElement = new Element(data, this.head());
    this.elements.push(newElement);
  }

  peek() {
    if (this.elements[this.elements.length - 1] instanceof Element) {
      return this.elements[this.elements.length - 1].datum();
    } else {
      return null;
    }
  }

  pop() {
    let popped = this.elements.pop();

    if (popped instanceof Element) {
      return popped.datum();
    } else {
      return undefined;
    }
  }
}

module.exports = { SimpleLinkedList, Element };