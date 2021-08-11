// Write a program that uses two functions, add and subtract, to manipulate a
// running total. When you invoke either function with a number, it should add
// or subtract that number from the running total and log the new total to the
// console. It should work like this:

function runningTotal() {
  let total = 0;

  let addition = function(value) {
    total += value;
    console.log(total);
  };

  let subtraction = function(value) {
    total -= value;
    console.log(total);
  };

  return [addition, subtraction];
}

let addAndSubtract = runningTotal();
let add = addAndSubtract[0];
let subtract = addAndSubtract[1];

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10