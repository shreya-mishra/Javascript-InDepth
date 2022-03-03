const arr = [10, 20, 30, 50];

Array.prototype.myReduce = function (cb, total) {
  let accumulator = total || undefined;
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i])) {
      accumulator = cb.call(this, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const result = arr.myReduce((acc, curr) => acc + curr);

console.log(result);
