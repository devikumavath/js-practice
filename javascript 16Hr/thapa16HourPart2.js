// data & time  -- get , set

//  creating data objects
// there are 4 ways to create a new data object

// 1 way
let currentdate = new Date();
console.log(currentdate);

console.log(new Date());

console.log(new Date().toLocaleString());

console.log(new Date().toString());

// millisecond from jan 1 1970 to till now
console.log(Date.now());

//  jan  is 0 , dec is 11
var d = new Date(2022, 06, 09, 1, 26, 30, 10);
console.log(d.toLocaleString());

let d1 = new Date("october 19 , 2022 11:20:12");
console.log(d1);
console.log(d1.toLocaleString());

const curdate = new Date();
console.log(curdate.toLocaleString());
console.log(curdate.getFullYear());
console.log(curdate.getMonth());
console.log(curdate.getDate());
console.log(curdate.getDay());
console.log(curdate.getMinutes());
console.log(curdate.getMilliseconds());

console.log(new Date().toLocaleString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date());

// objects
// math object
console.log(Math.PI);
console.log(Math.round(45.6666666));
console.log(Math.round(44.4444));
console.log(Math.sqrt(9));
console.log(Math.abs(-55));
console.log(Math.abs(-99.99));
console.log(Math.ceil(45.4));
console.log(Math.floor(45.99));
console.log(Math.floor(Math.random() * 10));

console.log(Math.trunc(4.66));
console.log(Math.trunc(-66));

// DOM - document object model
// window(global object) vs document (dom - child of window)

// objects
let stdinfo = {
  name: "devi",
  roll_no: 34,
  branch: "cse",
  age: 15,
  address: "hyd",
  marks: 15,
};
console.log(stdinfo);
// console.log(stdinfo.name);

// // array
// let myBioData = ['devi' , 'kumavath', 266];
// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(`my frist name is : ${myFName}`);

// destructuing  array

let myBioData = ["devi", "kumavath", 266];
let [fname, lname, Age] = myBioData;
console.log(fname);

// object
// let marks = {
//     s1 : 99 ,
//     s2 :55,
//     s3 : 88
// }
// console.log(marks);

// object destructing
let marks = {
  s1: 99,
  s2: 55,
  s3: 88,
};
let { dbms, oops, cn } = marks;
console.log(marks);
console.log(cn);
console.log(marks.s1);

// spread operators
// const colors = ['red' , 'yellow' , 'pink' , 'blue' , 'orange'];
// console.log(colors);

// const colorsAdd = [...colors , 'skyblue' , 'green'];
// console.log(colorsAdd);

// ✨✨ES7 --- 2016 update
// array.prototype.includes
const colors = ["red", "yellow", "pink", "blue", "orange"];
// console.log(colors);
const isPresent = colors.includes("red");
console.log(isPresent);
console.log(colors.includes("reddish"));

// exponentiation operatos
console.log(2 ** 5);

//✨✨ ES8 --- 2017 updates
// string padding
const naming = "i am devi kumavath".padStart(5);
console.log(naming);

// object values & entities
let books = { bookName: "DBMS", cost: 289 };
console.log(Object.values(books));
console.log(Object.entries(books));
console.log(books);

// ES9 ---- 2018 updates
// spread object same like array

// ES10 --- 2019
// array.prototype.{flat , flatmap}
// object.fromEntries

// ES11 ---- 2020
// 1 ) bigint
let oldnum = Number.MAX_SAFE_INTEGER;
console.log(oldnum);
console.log(oldnum + 21); // bug

console.log(9007199254740991n + 12n);

// nullish coalescing

// 2014 update
// "use strict";

// advance javascript

// event propagation (event bubbling and event capturing )
// bottom to top -- events in html - bubble phase
// top to bottom -- events in html - capture phase

// event propagation mode determines in which order the elements receive the event

// call back function , higher order
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return Math.abs(a - b);
};

const mult = (a, b) => {
  return a * b;
};

console.log(add(3, 4));

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};
console.log(calculator(5, 2, sub));

//  Async javascript

//  hoisting in javascript
// hoisting in js is a mechansim where variables and function
// declarations are moved to the top of their scope before the code execute

// example
console.log(myname);
var myname;
myname = "deviiiiii";

// console.log(myname);
// let myname;
// myname = 'deviiiiii';

// scope chain &  lexical scoping in js
// the scope chain is used to resolve the value in js
// scope  chain in js is lexically defined .

// lexical scoping means now , the inner function can get acces
// to their parent functions variables but the vice-versa is not true

// example
let a = "hello guys"; // global scope

const frist = () => {
  let b = "how are you ?";

  const second = () => {
    let c = "hii , i am fine thank you";
    console.log(a + b + c);
  };
  second();
  //   console.log(a + b + c); // cant use c
};

frist();

// closures in javascript
//  a closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical enviroment).
// its same like lexical scoping

const fun = (a) => {
  let b = 10;
  const innerfun = () => {
    let sum = a + b;
    console.log(sum);
  };
  innerfun();
};
fun(5);

//what is  event loop  in javascript

// what is output sum(5)(3)(8) ?
//  this is sloved using currying

// function sum(num1){
//   // console.log(num1);
//   return function(num2){
//     // console.log(num1 , num2);
//     return function(num3){
//       console.log(num1+num2+num3);
//     }
//   }
// }

// sum(5)(3)(8);


// function currying
const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum(5)(3)(8);

// call back hell

// promises


