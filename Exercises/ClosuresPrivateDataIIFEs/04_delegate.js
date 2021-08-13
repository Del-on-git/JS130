// Write a delegate function that can be used to delegate the behavior of a
// method or function to another object's method. delegate takes a minimum of
// two arguments:

//   (1) the object and
//   (2) name of the method on the object. The remaining arguments, if any, are
//       passed — as arguments — to the objects' method that it delegates to.

function delegate(obj, methodName) {
  return function() {
    return obj[methodName](...arguments);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },

  xyz: function(numberList) {
    numberList.forEach((num, idx) => console.log(`${idx}: ${num}`));
  }
};

let baz = {
  qux: delegate(foo, 'bar'),

  biff: delegate(foo, 'xyz')
};

baz.qux('hello');   // logs 'hello test';

baz.biff([6,5,4,3]);

foo.bar = function() { 
  console.log('changed');
};

baz.qux();          // logs 'changed'