// bind returns a function that is associated with a new value
// call method calls a function that associates a value in which we can pass argument individually
// apply method calls a function that associates a value in which we can pass argument as a an array

const obj = {
  name: "test",
  age: 20,
  fun: function (home, state) {
    console.log(
      `name is ${this.name}, and home is ${home} and state is ${state}`
    );
  },
};

const obj2 = {
  name: "shreya",
};
obj.fun.apply(obj2, ["ghr", "UP"]);
obj.fun.call(obj2, "ghr1", "UP1");
obj.fun.bind(obj2, "delhi", "up2")();

// SPread , rest and destructuring
// Destructuring is used to create varibles from array items or object properties

[a, b] = [1, 2];
console.log(a, b);

// Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
const arr = [1, 2, 3, 5];
const result = [...arr];
// Rest parameter syntax will create an array from an indefinite number of values.
//instead of unpacking it tied into individual array
function restTest(...args) {
  console.log(args);
}

restTest(1, 2, 3, 4, 5, 6);
