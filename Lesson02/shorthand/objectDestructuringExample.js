function makeObj(x, y, z) {
  return {
    x,
    y,
    z
  };
}

function destructureAndPrint({ x, y, z }) {
  console.log(`x is ${x}`);
  console.log(`y is ${y}`);
  console.log(`z is ${z}`);
}

let testObj = makeObj("string x", "string y", "string z");

destructureAndPrint(testObj);