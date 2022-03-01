// Var variable are hoisted and are function scoped

//console.log(varA); // varA is not defined error
console.log(varB); // undefined
var varB = 9;
varA = 10;

// Let variables are hoisted and are block scoped

// console.log(letA); // reference error
// let letA = 10;

// TDZ

{
  //   console.log(a); // reference error
  let a = 10;
  console.log(a); //10
  b = a; // attach to window object
  console.log(a); //20
}

console.log(b); // 10

// More
function test() {
  var foo = 33;
  if (foo) {
    //let foo = foo + 55; // ReferenceError (since initilisation is not completed that why foo is still in TDZ)
  }
}
test();

function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
  for (let i of n.a) {
    console.log(i); //1,2,3
  }
}

go({ a: [1, 2, 3] });

// Class Declarations are hoisted

const p = new Rectangle(); // ReferenceError

class Rectangle {}

// Function expression (not hoisted)

console.log(notHoisted); // undefined
//  even though the variable name is hoisted, the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
