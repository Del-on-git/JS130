// The code below throws an error:

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// Why does this code produce an error? Correct the problem by using an IIFE.

//========================================================================ANSWER
// The variable `sum` is overwritten by the function of the same name.
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);