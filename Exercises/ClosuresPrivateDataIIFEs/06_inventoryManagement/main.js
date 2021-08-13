"use strict";

const { ItemManager } = require('./itemManager.js');
const { ReportManager } = require('./reports.js');

let itemManager = new ItemManager();
let reportManager = new ReportManager();

itemManager.create('basket ball', 'sports', 0);           // valid item
itemManager.create('asd', 'sports', 0);
itemManager.create('soccer ball', 'sports', 5);           // valid item
itemManager.create('football', 'sports');
itemManager.create('football', 'sports', 3);              // valid item
itemManager.create('kitchen pot', 'cooking items', 0);
itemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(itemManager.items);

reportManager.init(itemManager);
// logs soccer ball,football,kitchen pot
reportManager.reportInStock();

itemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
itemManager.inStock();
// football,kitchen pot
reportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
itemManager.itemsInCategory('sports');

itemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
itemManager.items;

let kitchenPotReporter = reportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

itemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10