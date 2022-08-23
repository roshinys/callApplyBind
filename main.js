//call
// var obj = { num: 2 };

// var addToThis = function (a, b, c) {
//   return this.num + a + b + c;
// };
// console.log(addToThis.call(obj, 1, 3, 4));
// //apply
// var arr = [1, 3, 4];
// console.log(addToThis.apply(obj, arr));
// //bind
// var bound = addToThis.bind(obj);
// console.log(bound(1, 3, 4));

// var student = { age: 20 };
// var ageOfStudent = function () {
//   return this.age;
// };
// bound = ageOfStudent.bind(student);
// console.log(bound());

//curry
var multiply = function (x, y) {
  return x * y;
};
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));
var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));

multiply = function (x) {
  return function (y) {
    return x * y;
  };
};
multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4));
multiplyByThree = multiply(3);
console.log(multiplyByThree(4));
