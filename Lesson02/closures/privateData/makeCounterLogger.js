// Create a function named makeCounterLogger that takes a number as an argument
// and returns a function. When we invoke the returned function with a second
// number, it should count up or down from the first number to the second
// number, logging each number to the console:

// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8

// > countlog(2);
// 5
// 4
// 3
// 2

function makeCountLogger(start) {
  function counterLogger(targetValue) {
    let currentValue = start;
    let increment = (targetValue >= currentValue ? 1 : -1);

    while (currentValue !== targetValue) {
      console.log(currentValue);
      currentValue += increment;
    }

    console.log(currentValue);
  }

  return counterLogger;
}

let countlog = makeCountLogger(5);
countlog(8);
console.log('==============');
countlog(2);