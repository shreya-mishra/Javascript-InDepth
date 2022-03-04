# Event Delegation

- It is a technique to handle events in a better way
- It is only possible because of the way that how event propagates up the heirarchy in DOM tree.
- Event Bubbling (event delegation is based upon event bubbling)
- because event bubbling exists that's why event delegation also exist.

## Event Bubbling

- If any event occurs on a child , it propagates to a parent as well and grandparent too if it exists.
- It goes till the end of the Dom
- also know as bubbling out

## Event Capturing

- It captures down to DOM tree.
- When we click on child then parent will called first then child event occurs
- it is also known as tricking down
