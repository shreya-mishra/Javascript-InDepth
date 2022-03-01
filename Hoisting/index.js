// Var variable are hoisted and are function scoped

//console.log(varA); // varA is not defined error
console.log(varB); // undefined
var varB = 9;
varA = 10;

// Let variables are hoisted and are block scoped

console.log(letA); // reference error
let letA = 10;
