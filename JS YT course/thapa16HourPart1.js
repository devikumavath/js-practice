console.log("hii");

//  variables & values , naming variables
var myName = "devi kumavath";
console.log(myName);

//data types - primitives
var myName = "dolly";
console.log(myName);
// typeof operator
console.log(typeof myName);
var myAge = 15;
console.log(myAge);
console.log(typeof myAge);

var amIDevi = true;
console.log(typeof amIDevi);

//✨ challenge-2  ✨
console.log(10 + "20"); // 1020
console.log(9 - "5"); // 4 (bug)
console.log(" " + " "); //
console.log(" " + 0); //0
console.log("devi" - "kumavath"); //naN
console.log(true + true); // 2
console.log(true + false); //1
console.log(false + true); //1
console.log(false - true); //-1

// ✨ interview q-1 ✨
// difference between null vs undefined
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof iAmUseless); // object - bug

var marks;
console.log(marks);
console.log(typeof marks);

// ✨ interview q-2 ✨
// what is NaN
// NaN is property of the global object
// in other words , it is a variable in global scope
// the initial value of NaN IS Not-A-Number

var myPhoneNo = 879654322;
var myName = "kissmiss";
console.log(myPhoneNo);
console.log(isNaN(myPhoneNo));
console.log(myName);
console.log(isNaN(myName));

//✨ challenge-3 ✨

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));

// expressions and operators
console.log(5 + 15);
var x = 5,
  y = 22;
console.log(x + y);
console.log(y % x);

console.log(`is x equal to y : ${x == y}`);

console.log((x = y && y != x));

console.log(y >> 2);

console.log(++y);
console.log(--x);

console.log(x == y);

// string concatenation
var fristName = "devi";
var lastName = "kumavath";
console.log(fristName + lastName);

//✨ challenge-4 ✨
console.log(2 ** 5); //32
console.log(10 ** -1); //0.1
console.log(4 + "devi"); //4devi

var a = 2,
  b = 7;
var temp = b;
b = a;
a = temp;

console.log(a);
console.log(b);

var p = 56,
  q = 6;
p = p + q;
q = p - q;
p = p - q;
console.log(p);
console.log(q);

// ✨ interview q-3✨
// == vs ===
//  double = checks only value while triple = check both value & data type
var num1 = 9;
var num2 = "9";
console.log(num1 == num2);
console.log(num1 === num2);

//✨ challenge-5 ✨
// leap year or not
var year = 2020;
if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// what is truthly & falsy value
// we have total 5 falsy values in js -- 0 , " " , null , NaN  , false
if ((score = 0)) {
  console.log("loser");
} else {
  console.log("winner");
}

// ternary opertor
var age = 17;
console.log(age > 18 ? "enjoy" : "dont enjoy");

//   switch statement
var area = "circle";
var PI = 3.14,
  l = 5,
  b = 4,
  r = 3;
switch (area) {
  case "circle":
    console.log(`area of circle is : ${PI * r ** 2}`);
    break;

  case "triangle":
    console.log(`area of trianlge is : ${l / b / 2}`);

    break;

  case "rectangle":
    console.log(`area of rectangle is : ${l * b}`);

    break;

  default:
    console.log("enter valid data");

    break;
}

// while loop
var n = 1;
while (n <= 10) {
  console.log(n);
  n++;
}

// do while loop
var m = 20;
do {
  console.log(m);
  m++;
} while (m <= 10);

// for looop
for (let index = 0; index <= 10; index++) {
  console.log("devi");
}

//✨ challenge-6 ✨
// print table
for (let index = 1; index <= 10; index++) {
  var num = 8;

  console.log(`${num} * ${index} = ${num * index}`);
}

// functions
function sumOfTwoNo() {
  var a = 10,
    b = 20;
  total = a + b;
  console.log(total);
}
sumOfTwoNo();

// function  expression
var total1 = sumOfTwoNo();
console.log("sum of two numbers" + total1);

// functions with parameters
function sumOfThreeNo(x, y, z) {
  // parameters

  var total = x + y + z;
  console.log(total);
}
sumOfThreeNo(1, 2, 3); // arguments
sumOfThreeNo(3, 3, 3);

// ✨ interview q-4✨
// what is function
// block of code , define once and use many times with different arguments

//  anonymous function  expression
var exp = function (n1, n2) {
  return (total = n1 + n2);
};

var sum = exp(1, 1);
console.log(sum);

// mordern javascript (ECMA script)
// history of js
//  1996- java script created
// 1997 - submitted to ECMA , which resulted it as ECMA script
// ✨2015 - ES6  , ✨2016 - ES7 , ✨2017 - ES8 ,  ✨2018 - ES9 , ✨2019 - ES10 , ✨ 2020 - ES11

// ✨✨ES6 updates ✨✨
// let  , const
// template strings  or template literals
// default arguments
// rest operators
// destructions
// object properites
// arrow function
// spread operators

//  LET vs VAR vs CONST

var number = 10;
console.log(number);

number = 15;
console.log(number);
// const -- constant
const NO = 100;
console.log(NO);

// Assignment to constant variable.
// NO = 150;
// console.log(NO);

// var   --- function scope
function bioData() {
  var fName = "devi";
  console.log(fName);

  if (true) {
    var lName = "kumavath";
    console.log("outer block " + fName);
    console.log("inner block " + lName);
  }

  console.log("innerouter " + lName);
}

bioData();

// let --- block scope
function bioData() {
  let fName = "devi";
  console.log(fName);

  if (true) {
    let lName = "kumavath";
    console.log("outer block " + fName);
    console.log("inner block " + lName);
  }

  // console.log("innerouter " + lName);   error
}

//   console.log(fName);   error

bioData();

// ✨✨ template literals✨✨
let schoolName = "talent high school";
console.log("my school nmae is : " + schoolName);
console.log(`my school name is : ${schoolName}`); // template literals

// ✨✨default paramters ✨✨
function multiple(a, b = 5) {
  return a * b;
}

console.log(multiple(3, 3)); // a = 3 , b = 3
console.log(multiple(4)); // a = 4 and b = 5(default)

// ✨✨ arrow function✨✨ (function expression)

const add = () => {
  let a = 5,
    b = 10;
  let sum = a + b;
  return `sum of ${a} and ${b} is ${sum}`;
};

//
console.log(add());

const sum1 = (m, n) => {
  let sum = m + n;
  return `sum of ${m} and ${n} is ${sum}`;
};
console.log(sum1(50, 40));

//
const add1 = () => {
  (a = 6) + (b = 1);
};
console.log(add1());

// arrays
// let frnd1 = 'pinnky' , frnd2 = 'dolly' , frnd3 = 'doggy';
// console.log(frnd1);
// console.log(frnd2);
// console.log(frnd3);

// we have arrays class  and arrays are the prototype of this class
var myFriends = ["devi", 15, "female", "pinnky", 19, "female"];
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
console.log(myFriends[5]);
// console.log(myFriends[6]);

// traversal with for lopp
var marks = [99, 58, 80, 57, 09];
for (let index = 0; index < marks.length; index++) {
  const element = marks[index];
  console.log(element);
}

// length of marks
console.log(`lenght of marks ${marks.length}`);

// last  marks
console.log(marks[marks.length - 1]);

// for in loop  ---- gives index number & index value
var books = ["physics", "maths", "science", "hindi"];
for (let elements in books) {
  console.log(books[elements]);
}

// for of   ---- gives value of index number
var branch = ["cse", "it", "ece", "eee", "mech"];
for (let elements of branch) {
  console.log(elements);
}

//for each  --- gives value of index , index number and array
var ds = ["arrays", "linkedlist", "queue", "stack", "tress", "graphs"];
ds.forEach(function (element, index, array) {
  console.log(element + " " + index);
});

// for each using arrow function(doesnot support this keyword)
ds.forEach((element, index, array) => {
  console.log(element);
});

// searching and filter in arrays
var branch = ["cse", "it", "ece", "eee", "mech"];

//  indexOf --- forward search
console.log(branch.indexOf("it"));
console.log(branch.indexOf("eee"));

// lastIndexOf ---- backward search
console.log(branch.lastIndexOf("mech"));

// farward search --- includes
console.log(branch.includes("dev", 0));
console.log(branch.includes("eee", 0));

// CRUD operations
let animals = ["pigs", "goats", "sheep"];
console.log(animals);

//push  1 0r more elements in array at end
// let count = animals.push('chicken');
// console.log(animals);
// console.log(count);

animals.push("cat", "dog");
console.log(animals);

// unshift (add elements at frist)
animals.unshift("monkey");
console.log(animals);

let integers = [4, 6, 7, 8];
console.log(integers);

integers.push(10);
console.log(integers);
console.log(integers.unshift(1));

// pop --- pop from the end
let vegetables = ["tomato", "potato", "onion", "carrot"];
console.log(vegetables);
console.log(vegetables.pop());
console.log(vegetables);

// shift -- pop from the start
let veggies = ["tomato", "potato", "onion", "carrot"];
console.log(veggies);
console.log(veggies.shift());
console.log(veggies);

//✨ challenge- ✨

let months = ["jan", "march", "april", "june", "july"];
console.log(months);
// splice
//add dec at the end
let newMonth = months.splice(5, 0, "dec");
console.log(months);

// return value splice
console.log(newMonth); // empty array (it return the element deleted)

// update march to March
let month1 = ["jan", "march", "april", "june", "july"];

// let update = month1.splice(1 , 1 , 'March');

// let indexOfMonth = month1.indexOf('march');
// if(indexOfMonth != -1){
//   let update = month1.splice(indexOfMonth , 1 , 'March');
//   console.log(month1);
// }
// else
// {
//   console.log('no data found');
// }

let indexOfMonth = month1.indexOf("june");
if (indexOfMonth != -1) {
  let update = month1.splice(indexOfMonth, 1);
  console.log(month1);
} else {
  console.log("no data found");
}

// map() & reduce()

// map() --   return a new array contaning the results of calling a function on every elements in this array
let array = [1, 4, 9, 16, 25];
// num > 9
// let newArray =  array.map((curElem , index , arr) =>{
//   return curElem > 9;
// })
// console.log(array);
// console.log(newArray);  // result boolean value

let newarr = array.map((curElm, index, arr) => {
  return `index no = ${index} and the value is ${curElm} belongs to ${arr}`;
});

console.log(newarr);
console.log(array);

//✨✨✨✨
// find the square root of elements in an array
let arra = [25, 36, 49, 64, 81];
let arrsqr = arra.map((curElem, index, arra) => {
  return Math.sqrt(curElem);
});
console.log(arrsqr);

//✨✨✨
// element * 2 in the array
// let nummy = [2, 3, 4, 6, 8];
// let arrnummy = nummy.map((curElem, index, array) => {
//   return 2 * curElem;
// });

// console.log(arrnummy);

// chaining
// element * 2 in the array  and number > 10
let nummy = [2, 3, 4, 6, 8];
let arrnummy = nummy
  .map((curElem, index, array) => {
    return 2 * curElem;
  })
  .filter((curElem) => {
    return curElem > 10;
  });

console.log(arrnummy);

//✨✨reduce() method
// flatten the array means covert the 3rd or 2d array into a 1d
//reduce() takes four arguments - accumlator , current value , current index , source array

let no = [5, 6, 2];
let totalSum = no.reduce((accumlator, curElm, index, no) => {
  return (accumlator += curElm);
});
console.log(totalSum);

//✨✨ string✨✨
// single or double qoute
let namee = "devi";
let pc = "it is devi's pc";
console.log(namee);
console.log(pc);
let welcome = "devi kumavath";
console.log("welcome \n" + welcome);

// length of string
console.log(namee.length);

// finding char  in the string - farward search
console.log(welcome.indexOf("kumavath"));
console.log(welcome.indexOf("kumavathbbb"));

console.log(welcome.lastIndexOf("h"));

// search
console.log(namee.search("devi"));
console.log(namee.search("deviii"));

// slice
var fruits = "apple papaya  kiwi";

let res = fruits.slice(1, 7);
console.log(res);

//✨✨
// display only 280 char

let instagram =
  "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes,a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks  loudly and attacks the strangers A dog saves the life of the master from danger";

  let see = instagram.slice(0 , 280);
  console.log(see);
  console.log(see.length);

  console.log(instagram);
  console.log(instagram.length);

  // substring -- cant accept -ve indexs
  let res1 = fruits.substring(1 , 5);
  console.log(res1);

  // substr 
  let res2 = fruits.substr(0 , 4);
  console.log(res2);

  // replace  -- forward replace 
  let res3 = fruits.replace('apple' , 'APPLE')
  console.log(res3);

  // charAt
  let strings =  'my name is guddi';
  console.log(strings);
  console.log(strings.charAt(9));
  // charCodeAt
  console.log(strings.charCodeAt(9));

// ✨
let str = 'hello world';
// let lastchar = str.length-1;
// console.log(str.charCodeAt(lastchar));

// uppercase , lowercase , concat  , trim

// string to array
let txt = 'a , b , c , c ,e';
console.log(txt);
console.log(txt.split(","));

