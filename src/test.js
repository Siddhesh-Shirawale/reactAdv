var a;
var b;
var c;
var user = {
  name: 'Siddhesh',
  lastName: 'Shirawale',
  age: 29,
  isAdmin: true,
};
// const mul = (a: number, b: number): number => a * b;
var mul = function (a, b) {
  return a * b;
}; // Using types in above function
var sum = function (a, b) {
  return a + b;
};
var truck = {
  name: 'Leyland',
  model: 2020,
  company: 'Ashok',
};
// Or we can put type?: string in Vehicle interface
var car = {
  name: 'Mustang',
  model: 2022,
  company: 'Ford',
  type: 'Sports',
};
// Parametric types with generics
var d;
var insect1 = {
  name: 'butterfly',
  canFly: true,
};
// Can change the generics
var insect2 = {
  name: 'Ant',
  canFly: 0,
};
// generics with functions
var insectsArray = [insect1, insect1];
function firstInsect(insectsArray) {
  return insectsArray[0];
}
function getFirst(arr) {
  return arr[0];
}
getFirst(insectsArray);
var Ramesh = {
  subject: 'Maths',
  standards: [4, 5, 6, 7, 8, 9, 10],
  class: 10,
  alsoPrimary: true,
};
/// Unknown, Never and Tuple
var logFunction = function (data) {
  var data2 = data;
  console.log(data);
  console.log(data2);
};
var arr1 = [1, 2, 3, 4, 5, 6, 7];
logFunction(arr1);
