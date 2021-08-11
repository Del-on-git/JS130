// eslint-disable-next-line max-lines-per-function
function makeList() {
  let toDoList = [];

  return {
    add: function(item) {
      if (!toDoList.includes(item)) {
        toDoList.push(item);
        console.log(item, "added!");
      }
    },

    remove: function(item) {
      if (toDoList.includes(item)) {
        toDoList.splice(toDoList.indexOf(item), 1);
        console.log(item, "removed!");
      }
    },

    list: function() {
      if (toDoList.length) {
        toDoList.forEach(entry => console.log(entry));
      } else {
        console.log("The list is empty");
      }
    }
  };
}

let list = makeList();

list.list();
list.add("read book");
list.add("make a million dollars");
list.list();
list.remove("read book");
list.list();