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
