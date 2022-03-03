let toFlat = [[1, 2, 3], 3, [4, [4, 3], 3]];
Array.prototype.myFlat = function () {
  let flatArray = [];
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      flatArray = flatArray.concat(this.myFlat.call(this[i]));
    } else {
      flatArray.push(this[i]);
    }
  }
  return flatArray;
};

const result = toFlat.myFlat();
console.log(result);
