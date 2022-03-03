// Implement setInterval using setTimeout

let count = 0;
(function timeOut() {
  setTimeout(() => {
    console.log(count++);
    timeOut();
  }, 1000);
})();
