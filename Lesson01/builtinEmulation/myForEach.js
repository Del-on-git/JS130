function forEach(arr, func, thisArg) {
  for (let idx = 0; idx < arr.length; idx++) {
    func.call(thisArg, arr[idx], idx, arr);
  }
}

let arr = [1, 2, 3, 4];

// Our forEach function
forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

forEach([1,2,3,4], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});