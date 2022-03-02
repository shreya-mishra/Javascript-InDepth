function memoizeValue(a) {
  const cache = {};

  return function () {
    const str = a.toString();
    if (str in cache) {
      console.log(`${a} is from cache`);
    } else {
      cache[str] = a;
      console.log("not from cache");
    }
  };
}

const result = memoizeValue(2);
result();
result();
result();
result();

// Adding two numbers

function memoizeAdd(fn, context) {
  const cache = {}; // {"[2,4]":2+4}
  return function (...args) {
    var strCache = JSON.stringify(args);
    console.log("cache values: ", cache);
    if (!cache[strCache]) {
      cache[strCache] = fn.call(context || this, ...args);
    }
    return cache[strCache];
  };
}

const addNumbers = (a, b) => {
  return a + b;
};
const additionResult = memoizeAdd(addNumbers);

console.time("First Call");
console.log(additionResult(2, 4));
console.timeEnd("First Call");

console.time("Second Call");

console.log(additionResult(4, 2));
console.timeEnd("Second Call");
