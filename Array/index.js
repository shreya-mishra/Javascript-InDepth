// Evaluating the mac/min value from an n-array using Math.max function

// - Math.max() takes n parameters not an array
// - so for this we need to find a way to convertarray into n-number of parameters to pass the same to the max or min function.

const arr = [10, 20, 30, 50];
Math.max.apply(null, arr);
