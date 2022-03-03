// MAP POLYFILL

const arr = [10, 20, 30, 40];

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i])) {
      newArr.push(cb.call(this, this[i], i, this));
    }
  }
  return arr;
};

const result = arr.map((val, index) => val * 20);
const newResult = arr.map((val, index) => val * 20);

console.log(newResult);
