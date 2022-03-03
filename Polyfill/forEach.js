const arr = [10, 20, 40, 40];

Array.prototype.myForEach = function (cb) {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      cb.call(this, this[i], i.this);
    }
  }
};
const newArr = [];
arr.myForEach((val, index) => newArr.push(val * 10));

console.log(newArr);
