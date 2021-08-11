// Replace the invocation of countdown with an IIFE that produces the same 
// results:

// > countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(function(start) {
  while (start >= 0) {
    console.log(start--);
  }
})(7);