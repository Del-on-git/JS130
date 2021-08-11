// Solve countdown.js with recursion.

(function countdown(start) {
  if (start >= 0) {
    console.log(start--);
    countdown(start);
  }
})(7);