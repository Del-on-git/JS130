let builtinVariables = [
  module,
  exports,
  require,
  __dirname,
  __filename
];

var separator = "=*=*".repeat(25);

builtinVariables.reduce((nullAccum, builtin) => {
  console.log(builtin, '\n', separator);
  return nullAccum;
}, null);