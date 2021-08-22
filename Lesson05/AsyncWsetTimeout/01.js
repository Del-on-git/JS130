// Write a JavaScript function named delayLog that loops through the numbers
// from 1 to 10, and logs each number after that number of seconds. It should
// log 1 after 1 second, 2 after 2 seconds, and so on.

function delayLog() {
  let numbers = Array(10).fill('').map((_, idx) => idx + 1);

  numbers.forEach(num => setTimeout(function () {
    console.log(num);
  }, num * 1000));

}

// LS solution
// function delayLog() {
//   for (let delay = 1; delay <= 10; delay += 1) {
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }

delayLog();