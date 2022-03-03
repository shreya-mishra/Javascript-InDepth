const arr = [1, 2, 3, 4];

if (!Array.myArray) {
  Array.myArray = function (arr) {
    console.log(arr.constructor === Array);
  };
}

Array.myArray(arr);
