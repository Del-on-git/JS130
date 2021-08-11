// // Original Code:
// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

//What this code would look like if hoisting actually rearranged it:
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var catImage;
var pudding;
var Image;  //only the class's name gets hoisted;
            //the class doesn't get defined until the definition is executed.
            //We have to create a variable for the class name,
            //then later assign it a class expression.

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);