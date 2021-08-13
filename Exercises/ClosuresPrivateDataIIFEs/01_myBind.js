// Create a function myBind, that accepts two arguments:
//  1) The function to bind,
//  2) The context object, and returns a new function that's hard-bound to the
//     passed in context object.

function myBind(funcToBind, context) {
  return function() {
    return funcToBind.apply(context, arguments);
  };
}

function testFunc(one, two, three) {
  console.log(this.stork);
  console.log(one);
  console.log(two);
  console.log(three);
}

let obj = { stork: "stark" };

let boundFunc = myBind(testFunc, obj);

boundFunc("1", "2", "3");