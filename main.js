//call
var obj = { num: 2 };

var addToThis = function add(a, b, c) {
  return this.num + a + b + c;
};
console.log(addToThis.call(obj, 1, 3, 4));
//apply
var arr = [1, 3, 4];
console.log(addToThis.apply(obj, arr));
//bind
var bound = addToThis.bind(obj);
console.log(bound(1, 3, 4));

var student = { age: 20 };
var ageOfStudent = function age() {
  return this.age;
};
bound = ageOfStudent.bind(student);
console.log(bound());
