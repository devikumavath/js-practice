// var vs let in js 💥

// var -  ES6
// var is globally scoped
// can updated and re-declare withini its scope
// var is initalized with undefined , let and const not initalized
var a = 10;
console.log(a);
var a = 20;
console.log(a);
a = "devi";
console.log(a);

// let is  block scope
// let can be updated not re-declared
let b = 30;
console.log(b);
b = 40;
console.log(b);

//error
// let b= 'devi';
// console.log(b);

// const cannot change value again
// neither be updated nor re-declared
// const should initialized during declaration unlike let , var
const pi = 3.14;

//error
// pi = 34;

//error
// const pi = 34444444;
console.log(pi);

console.log("let var const");
var a = 45;
var f = "devi";
var c = null;
var d = undefined;
var e = true;
