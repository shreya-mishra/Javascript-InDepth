const arr = [10, 20, 30, 40, 50];

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(this, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const result = arr.myFilter((val, index) => val > 20);

console.log(result);
