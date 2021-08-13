// Alter the myBind function written in the previous exercise to support partial
// function application.

function myBind(funcToBind, context) {
  let partialArgs = Object.values(arguments).slice(2);
  return function() {
    return funcToBind
      .apply(context, partialArgs.concat(Object.values(arguments)));
  };
}

function enlist() {
  return Array.prototype.slice.call(arguments);
}

let boundEnlist = myBind(enlist, null, 37);

console.log(boundEnlist(1,2,3));