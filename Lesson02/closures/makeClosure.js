// Write a function named makeMultipleLister that you can call with a number as
// an argument. The function should return a new function that, when invoked,
// logs every positive integer multiple of that number less than 100.
// It should work like this:

function makeMultipleLister(base) {
  return function() {
    let factor = 1;
    while (factor * base < 100) {
      console.log(factor * base);
      factor++;
    }
  };
}

let lister = makeMultipleLister(17);
lister();