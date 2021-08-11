function foo() {
  let name = "Pete";
  let toRet = function() {
    console.log(name);
  };

  // name = "Not Pete";
  // console.log("Not Pete");
  return toRet;
}

let printPete = foo();
printPete(); // Pete