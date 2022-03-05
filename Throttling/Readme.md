# Throttling

## Difference between Debounce and Throttling

- Both are used for optimizing the performance of the web app.
- And how do we do that? - It happens by limitting the rate of execution of particular function
- And that function could be anything.

## Example

- Suppose we have search box and when we are type s then pause then it shows suggestions in a dropdown

- suppose we have getResults() then what we do, we generally attach the getData() to on key press event and do the network call that fetches the data from the network.

- but what is the cons in this approach. Suppose in each and every api call we will get the result then in every key stroke the api call will made. So that api calls are really alot that is very expensive.

- what we can do we can limit these api calls

- we can do this by two ways

### Debouncing

- Debounce function takes one function and delay and soes not let you make the function calls again and again and will only make a function call when the difference between the two function call is greater than the given delay.

### Throttling

- suppose we are typing samsun then it will make a api call after n if at n that delay is done after that whatever we type it will ignore and make an api call and get the result.
- that means if difference between two function call is that delay then only api call will made.

### Example

- Resizing the window

- Throttling is setting a interval and after certain interval a api call will be made.

### Button Press

- Suppose a user is clicking that button frequently
- then what will happen in debounce and throttle

#### Debounce

- The function call will only be made if the difference between two click events is greater than that delay then the function call will be made.

#### Throttling

- Machine gun game

## Which is good , Debounce or throttle?

- It depends on the scenarios
