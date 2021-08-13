/*
  create: This method creates a new item. Returns false if creation is not
          successful.

  update: This method accepts an SKU Code and an object as an argument and
          updates any of the information on an item. You may assume valid
          values will be provided.

  delete: This method accepts an SKU Code and deletes the item from the list.
          You may assume a valid SKU code is provided.

  items: This property returns all the items.


  inStock: This method list all the items that have a quantity greater than 0.

  itemsInCategory: This method list all the items for a given category
*/
"use strict";

const { Item } = require('./items.js');

class ItemManager {
  constructor() {
    this.items = [];
  }

  create(itemName, category, quantity) {
    let newItem = new Item(itemName, category, quantity);
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return true;
    }
  }

  update(itemSKU, updateObj) {
    let itemsToUpdate = this.items.filter(item => item.SKU === itemSKU);

    Object.keys(updateObj).forEach(property => {
      itemsToUpdate.forEach(item => {
        if (item.hasOwnProperty(property)) {
          item[property] = updateObj[property];
        }
      });
    });
  }

  delete(SKU) {
    let filteredItems = this.items.filter(item => item.SKU !== SKU);
    this.items = filteredItems;
  }

  inStock() {
    let filteredItems = this.items.filter(item => item.quantity > 0);
    return filteredItems;
  }

  itemsInCategory(category) {
    let categoryList = this.items.filter(item => item.category === category);

    return categoryList;
  }
}

module.exports = { ItemManager };