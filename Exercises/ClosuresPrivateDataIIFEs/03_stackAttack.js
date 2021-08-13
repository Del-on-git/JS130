function newStack() {
  let stack = [];

  return {
    push(element) {
      stack.push(element);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(element => console.log(String(element)));
    }
  };
}

let stack = newStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.printStack();