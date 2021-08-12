//It's still happening.

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

function product() {
  let numbers = Object.values(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

console.log(result);