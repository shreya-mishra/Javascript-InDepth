// Lexical Scoping

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// Question 1.------------------

for (let i = 0; i < 5; i++) {
  // because these i's will be in seperate memory location and for every i's there will be seperate timeout function will be there
  setTimeout(() => {
    console.log(i); // 0,1,2,3,4
  }, 0);
}

// Question 2---------------

let counter = (function () {
  let k = 0;
  return () => k++;
})();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// Question 3------------

function createdClosureArray() {
  var badArr = [];
  for (var index = 0; i < 5; index++) {
    badArr[index] = function () {
      return "n= " + index; // 5 times 5
    };
  }
  return badArr;
}

var badArr = createdClosureArray();

for (var index in badArr) {
  console.log(badArr[index()]); // n=5,n=5,n=5,n=5,n=5s
}

// Question 4-----------------

var arr = [];

function createdClosure(n) {
  return function () {
    return "n= " + n; // n=0,n=1,n=2,n=3,n=4
  };
}

for (var index = 0; index < 5; index++) {
  arr[index] = createdClosure(index);
}

for (var index in arr) {
  console.log(arr[index]()); //n=0,n=1,n=2,n=3,n=4
}
