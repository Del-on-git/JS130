var counter = 1;
var intervalId = setInterval(function() {
  console.log(counter++);
}, 1000);

function stopLogger(interval) {
  clearInterval(interval);
}

setTimeout(() => stopLogger(intervalId), 5000);