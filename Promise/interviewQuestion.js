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

// Q2 . Show the execution of 3 asynchronous block of code, one after the other in sequence

function asyncFunction() {
  console.log("started async function 1");
  setTimeout(() => {
    console.log("completed async function 1");
    console.log("started async function 2");
    setTimeout(() => {
      console.log("completed async function 2");
      console.log("started async function 3");

      setTimeout(() => {
        console.log("completed asnc function 3");
      }, 2000);
    }, 3000);
  }, 4000);
}
asyncFunction();

// Q2. Write a code to make xmlHTTPRequest to get data from the server asynchronously

// -XMLHttpRequest (XHR) objects are used to interact with server to retrieve data from a URL without having to do a full page refresh
// -XHR requests can be initiated by creating the object and providing the arguments such as 'method', url etc
// -The success and failure of the request can be managed by callbacks

const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onload = function () {
  console.log(this.response);
};

xhr.onerror = function () {
  console.log(this.statusText);
};

xhr.send();

// Q3. Show the working of promise along with resolve & reject code

let newPromise = (a) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a) {
        resolve(a);
      } else {
        reject(a);
      }
    }, 2000);
  });
newPromise(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Q4. Wrap the setTimeout function to convert to a promise

// Q5. Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)
let newPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = fetch("http://example.com/movies.json");
      if (data) resolve();
      else reject();
    }, 3000);
  });

newPromise()
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// Q6. Make a fetch request to retrieve and store JSON data from server
