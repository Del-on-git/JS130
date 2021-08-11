//COMMENT OUT CODE FOR INDIVIDUAL EXAMPLES TO SEE PURE BEHAVIOR
//==============================================================================
// let foo = [1, 2, 3];
// let first = foo[0];
// let second = foo[1];
// let third = foo[2];

// // Is the same as:

// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
// let foo = [1, 2, 3];
// let [ first, second, third ] = foo;

// console.log(first);  //1
// console.log(second); //2
// console.log(third);  //3
// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
//==============================================================================
// If you don't need all of the elements, you can skip them:

// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
// let bar = [1, 2, 3, 4, 5, 6, 7];
// let [ first, , , fourth, fifth, , seventh ] = bar;

// console.log(first);   //1
// //console.log(second);//undefined
// //console.log(third); //undefined
// console.log(fourth);  //4
// console.log(fifth);   //5
// //console.log(sixth); //undefined
// console.log(seventh); //7
// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
//==============================================================================
// This syntax is handy when you need to swap the values in two variables:

// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
let one = 1;
let two = 2;

[two, one] = [one, two];

console.log(one); //2
console.log(two); //1
// CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE CODE HERE
//==============================================================================