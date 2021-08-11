function makeList() {
  let toDoList = [];

  function manageList(item) {
    if (item === undefined) {
      if (toDoList.length) {
        toDoList.forEach(entry => console.log(entry));
      } else {
        console.log("The list is empty");
      }
    } else if (toDoList.includes(item)) {
      toDoList.splice(toDoList.indexOf(item), 1);
      console.log(item, "removed from list");
    } else {
      toDoList.push(item);
    }
  }

  return manageList;
}

let list = makeList();

list();

list("make breakfast");
list("read book");

list();

list("make breakfast");

list();