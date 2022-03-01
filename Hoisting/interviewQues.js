//-------- Ques 1---------------
console.log("bar", bar); // undefined
bar = 15;
var foo = 1;
console.log("foo:", foo, "bar:", bar); // 1,15
var bar;

//-------- Ques 2---------------
greetings();

// function declaration
var greetings = function () {
  console.log("First greetings");
};

greetings();

function greetings() {
  console.log("Second greetings");
}

greetings();

// converted to

var greetings;
// function declaration
function greetings() {
  console.log("Second greetings");
}
greetings(); // Second greetings

// function expression
greetings = function () {
  console.log("first greetings");
};
greetings(); // first greetings

greetings(); // first greetings

// ------------ Ques 3 ----------------------

var variable = 10;
(() => {
  console.log(variable); // 10
  variable = 20;
  console.log(variable); // 20
})();

console.log(variable); //20
var variable = 30;

// -----------Ques 4 ----------------------

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3); // 35
  var variable_3 = 45;
  variable_2 = 15;
  console.log(variable); //10
})();

console.log(variable_2); //15
console.log(variable_3); //not defined

var variable = 30;

//----------Ques 5-------------------------

// Closures and variable scope
