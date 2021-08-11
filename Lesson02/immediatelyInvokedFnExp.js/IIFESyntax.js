// The following code will not execute correctly:

// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// Rewrite it so that it works.

// Solution 1: Convert the function delcaration to a fn exp w/ parens.
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// Solution 2: Convert the function declaration to an exp w/ assignment.
let IIFE = function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// Note that IIFE is assigned `undefined`, since the function expression
// has no explicitly returned value.