Array.prototype.myFilter = function (callback, context) {
  console.log(callback);
  console.log(context);
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

[10, 20, 30, 40].myFilter(function (val) {
  console.log(val >= 20);
});
