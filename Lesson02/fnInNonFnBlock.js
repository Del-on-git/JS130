// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }
// foo();

// [Function: bar]
// bar
// undefined
// TypeError: qux is not a function

// function foo() {
//   if (true) {
//     let bar = () => {     // both bar and qux are block scoped here
//       console.log("bar");
//     }
//   } else {
//     let qux = () => {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();
//   console.log(qux);
//   qux();
// }

// foo();

//===================================================================INTERESTING
// function foo() {
//   if (Math.floor(Math.random() * 2) % 2) {
//     var bar = () => {
//       console.log("bar");
//     }
//   } else {
//     var qux = () => {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();
//   console.log(qux);
//   qux();
// }

// foo();

// the above code is equivalent to:
function foo() {
  var bar;
  var qux;

  if (Math.floor(Math.random() * 2) % 2) {
    bar = () => {
      console.log("bar");
    }
  } else {
    qux = () => {
      console.log("qux");
    }
  }

  console.log(bar);
  bar();
  console.log(qux);
  qux();
}

foo();