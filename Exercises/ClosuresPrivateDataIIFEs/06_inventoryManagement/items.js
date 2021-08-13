/*
  SKU code: This is the unique identifier for a product. It consists of the
            first 3 letters of the item and the first 2 letters of the category.
            If the item name consists of two words and the first word consists
            of two letters only, the next letter is taken from the next word.

  Item name: This is the name of the item. It must consist of a minimum of 5
              characters. Spaces are not counted as characters.

  Category: This is the category that the item belongs to. It must consist of
            a minimum of 5 characters and be only one word.

  Quantity: This is the quantity in stock of an item. This must not be blank.
            You may assume that a valid number will be provided.
*/
"use strict";

class Item {
  constructor(itemName, category, quantity) {
    this.category = (function() {
      if (category.length < 5 || category.split(' ').length > 2) {
        this.notValid = true;
      } else { this.notValid = false }

      this.category = category;
    }).call(this);

    this.itemName = itemName;
    this.quantity = quantity;
    this.SKU = (function() {
      return itemName.split(' ').join('').slice(0,3)
             + category.split(' ').join('').slice(0,2);
    })().toUpperCase();
  }
}

let test = new Item("basket ball", "sports", 2);
console.log(test);

module.exports = { Item };