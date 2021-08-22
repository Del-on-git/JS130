// function delayLog() {
//   for (let delay = 1; delay <= 10; delay += 1) {
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }

// delayLog();

//explain why changing to var delay causes this behavior

function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();

// > 11
// > 11
// > 11
// > 11
// > 11
// > 11
// > 11
// > 11
// > 11
// > 11

// setTimeout is non-blocking, so the for-loop keeps running while the callback
// in setTimeout is delayed until execution.  setTimeout won't run until node
// has nothing left to do.