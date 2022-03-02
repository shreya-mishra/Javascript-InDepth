// callback

const sum = (a, b) => {
  console.log(a + b);
};

const getData = (sum, a, b) => {
  return sum(a, b);
};

getData(sum, 20, 20); // callback is a function that is passed into another function as an argument

// callback hell
// firstFunction(args, function () {
//   secondFunction(args, function () {
//     thirdFunction(args, function () {
//       // And so on…
//     });
//   });
// });

// Promise to rescue

const promise = (a) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a) resolve(a);
      else reject("not resolved");
    }, 0);
  });

promise(5).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

// async await - just a wrapper of promise

// const apiRequest = async () => {
//   // do some async things for an unknown amount of time...
//   return { answer: 42 };
// };

// const run = async () => {
//   const response = await apiRequest();
//   console.log(response);
// };
