/*
  init: This method accepts the ItemManager object as an argument and assigns
        it to the items property.

  createReporter: This method accepts an SKU code as an argument and returns
                  an object.  The returned object has one method, itemInfo.
                  It logs to the console all the properties of an object as
                  "key:value" pairs (one pair per line). There are no other
                  properties or methods on the returned object (except for
                  properties/methods inherited from Object.prototype).

  reportInStock: Logs to the console the item names of all the items that are
                 in stock as a comma separated values.
*/
"use strict";

class ReportManager {
  constructor() {
  }

  init(itemManager) {
    this.items = itemManager;
  }

  createReporter(itemSKU) {
    debugger;
    let item = this.items.items.filter(entry => entry.SKU === itemSKU)[0];
    return {
      itemInfo: function() {
        Object.keys(item).forEach(property => {
          if (property !== 'notValid') {
            console.log(`${property}: ${item[property]}`);
          }
        });
      }
    };
  }

  reportInStock() {
    let stockList = this.items.items.reduce((list, item) => {
      if (item.quantity > 0) {
        return (list + item.itemName + ', ');
      } else {
        return list;
      }
    }, '');

    stockList = stockList.slice(0, stockList - 2);

    return stockList;
  }
}

module.exports = { ReportManager };