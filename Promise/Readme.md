# Promise

## Synchronous and Asynchronous

- JS is single threaded which means it executes program line by line.

- It is also asynchronous which means that if our program execution reaches a block of code that must wait on a result, it will continue on past this block of code that is waiting so the program doesnt freeze execution.

- And once the async task finishes our code will handle the result it was waiting for by using promise or a callback

## Difference between Callback and promise.

- through callback it was difficult because that cause callback hell (pyramid doom)

- [Callback Hell] - Its pyramid doom or a pattern seen in async code that has so many nested if else statements or functions.

- but Promises can chain async operaton using .then() by passing the result to next one.

- Its just a plain Js object that represent completion or failure of async operations.

- Async - await syntax is just a wrapper around promises.If you mark a function as async it just convert the response to promise.
