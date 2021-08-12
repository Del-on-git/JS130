// Write a function that takes 5 string arguments, and returns an object with 3
// properties:

//     first: the first argument
//     last: the last argument
//     middle: the middle 3 arguments as a sorted array

// After writing the function, write some code to call the function. The
// arguments you provide should come from an array. You should create local
// variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function firstLastMiddle() {
  let first;
  let middle;
  let last;

  [first, last] = [ arguments[0], arguments[4]];
  middle = [ arguments[1], arguments[2], arguments[3] ].sort();

  return { first, middle, last };
}

let obj = firstLastMiddle("A", "horse", "is", "a", "HORSE");

console.log(obj);