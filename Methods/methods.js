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
