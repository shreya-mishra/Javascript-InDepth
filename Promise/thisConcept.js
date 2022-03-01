// var fullname = "John Doe";
// var obj = {
//   fullname: "Colin Ihrig",
//   prop: {
//     fullname: "Aurelio De Rosa",
//     getFullname: function () {
//       console.log("inside prop", this.fullname);
//       return this.fullname; // aurelio de rosa
//     },
//   },

//   getMyName: function () {
//     console.log("getMyName", this.fullname);
//     return this.fullname;
//   },
//   getFirstName: () => {
//     console.log("getFirstName", this.fullname);
//     // return this.fullname.split(" ")[0];
//   },
//   getLastName: (function () {
//     console.log(this.fullname); // undefined
//     // return this.fullname.split(" ")[1]; //  error
//   })(),
// };
// console.log(obj.prop.getFullname()); //Aurelio De Rosa
// console.log(obj.getFirstName()); // john doe but giving undefined
// console.log(obj.getMyName()); //collin ihrig
// console.log(obj.getLastName); // iiffe this points to window object

function ObjectConstructor() {
  this.name = "shreya";
}
var person = new ObjectConstructor();
delete person.name;
console.log(person.height);

var personCreate = Object.create({
  name: "rahul",
  height: 6.1,
});

delete personCreate.height;
console.log(personCreate.height);

// alternative of async and await
function* abc() {
  yield 1;
  yield 2;
}
const result = abc();
console.log(result.next());
console.log(result.next());
console.log(result.next());
