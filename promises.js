// JS is single threaded which means it executes program line by line.

// It is also asynchronous which means that if our program execution reaches a block of code that must wait on a result, it will continue on past this block of code that is waiting so the program doesnt freeze execution.

// And once the async task finishes  our code will handle the result it was waiting for by using promise or a callback

// Difference between Callback and promise.

// => through callback it was difficult because that cause callback hell (pyramid doom) but Promises can chain async operaton using .then() by passing the result to next one.

// Promise => Its just a plain Js object that represent completion or failure of async operations.

// Implement a Promise

class PromiseSimple {
  // constructor that takes executionFunction (callback function)
  // contains two public methods - then() and catch()
  // and two internal methods - onResolve() and onReject

  constructor(executionFunction) {
    //   The constructor also creates a promiseChain array and handleError function.
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    //The execution function takes a resolve and reject which map to the internal onResolve() and onReject() function.
    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

fakeApiBackend = () => {
  const user = {
    username: "treyhuffine",
    favoriteNumber: 42,
    profile: "https://gitconnected.com/treyhuffine",
  };

  // Introduce a randomizer to simulate the possibility of encountering an error
  if (Math.random() > 0.05) {
    return {
      data: user,
      statusCode: 200,
    };
  } else {
    const error = {
      statusCode: 404,
      message: "Could not find user",
      error: "Not Found",
    };

    return error;
  }
};

// Assume this is your AJAX library.
// Almost all newer ones return a Promise object.
const makeApiCall = () => {
  return new PromiseSimple((resolve, reject) => {
    // Use a timeout to simulate the network delay waiting for the response.
    // This is THE reason you use a promise.
    // It waits for the API to respond, and after received, it executes code in the `then()` blocks in order.
    // If it executed this immediately, there would be no data.
    setTimeout(() => {
      const apiResponse = fakeApiBackend();

      if (apiResponse.statusCode >= 400) {
        reject(apiResponse);
      } else {
        resolve(apiResponse.data);
      }
    }, 5000);
  });
};

makeApiCall()
  .then((user) => {
    console.log("In the first .then()");

    return user;
  })
  .then((user) => {
    console.log(
      `User ${user.username}'s favorite number is ${user.favoriteNumber}`
    );

    return user;
  })
  .then((user) => {
    console.log("The previous .then() told you the favoriteNumber");

    return user.profile;
  })
  .then((profile) => {
    console.log(`The profile URL is ${profile}`);
  })
  .then(() => {
    console.log("This is the last then()");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Async - await syntax is just a wrapper around promises.
// if you mark a function as async it just convert the response to promise

const apiRequest = async () => {
  // do some async things for an unknown amount of time...
  return { answer: 42 };
};

const run = async () => {
  const response = await apiRequest();
  console.log(response);
};

// it is equivalent to -

const apiRequest = () => {
  return new Promise((resove) => {
    // do some async things for an unknown amount of time...
    return resolve({ answer: 42 });
  });
};

const run = () => {
  apiRequest.then((response) => {
    console.log(response);
  });
};

// Since it's all just promises, you can mix and match with async/await
const runAsAsyncAwait = async () => {
  const response = await apiRequest();
  console.log(response);
};
