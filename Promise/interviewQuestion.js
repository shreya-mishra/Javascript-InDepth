// Write a Javascript function i_am_promise that takes an input parameter named i_am_boolean.

// - The function "i_am_promise" should return a Javascript promise which is resolved or rejected after 3 seconds
// - The promise should resolve based on the parameter "i_am_boolean" as success and is rejected when the "i_am_boolean" parameter is false.

// Demonstrate calling your promise function being resolved & rejected.

let i_am_boolean = true;
function i_am_promise(i_am_boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i_am_boolean) {
        resolve("resolved");
      } else {
        reject("reject");
      }
    }, 3000);
  });
}

i_am_promise(false)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
