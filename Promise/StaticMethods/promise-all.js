// Promise.all
// When we want to execute all promises in parallel and wait until all of them are resolved.
// If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

// const promise1 = new Promise((resolve, reject) => {
//   resolve(3);
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve(4);
// });
// const promise3 = new Promise((resolve, reject) => {
//   reject(5);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((arr) => console.log("then", arr))
//   .catch((err) => console.log("err", err));

//Promise . allSettled
// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.

// const promise1 = new Promise((resolve, reject) => {
//   resolve(3);
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve(4);
// });
// const promise3 = new Promise((resolve, reject) => {
//   reject(5);
// });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((arr) => console.log("then", arr))
//   .catch((err) => console.log("err", err));

// Promise.race
// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

// const promise1 = new Promise((resolve, reject) => {
//   reject(3);
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve(4);
// });
// const promise3 = new Promise((resolve, reject) => {
//   reject(5);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((arr) => console.log("then", arr))
//   .catch((err) => console.log("err", err));

//Promise.any

//waits for the first settled  promise to fulfill, and gives the result. If all of the given promises are rejected

//– a special error object that stores all promise errors in its errors property.
// - Promise.any will only work in above 14 version

const promise1 = new Promise((resolve, reject) => {
  resolve(3);
});

const promise2 = new Promise((resolve, reject) => {
  reject(4);
});
const promise3 = new Promise((resolve, reject) => {
  resolve(5);
});

Promise.any([promise1, promise2, promise3])
  .then((arr) => console.log("then", arr))
  .catch((err) => console.log("err", err));
