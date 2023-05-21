// let a = 4;
// let b = 5;
// let c = 5;
// console.log(a + b);
// console.log(b + c);
// console.log(c + a);

// // functions in javascript

// //fun 2
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 5));
// console.log(sum(10, 12));
// console.log(sum(11, 11));

// //fun 2
// function greeting() {
//   console.log("hello have a goood day");
// }
// greeting();

// // arrow fun 2
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 1));

// call back function

// function display(sum) {
//   console.log(`sum : ${sum}`);
// }

// function add(num1, num2, myCallback) {
//   const sum = num1 + num2;

//   myCallback(sum);
// }

// add(10, 20, display);


// setTimeout(myFunction , 3000);

// function myFunction() {
//   console.log('I love Js ❤');
// }

// console.log('hello');


// setTimeout(function myFunction() {
//   console.log('I love Js ❤');
// }, 3000);



// console.log('hello');


setInterval(myFunction , 1000);

function myFunction() {


  let d = new Date();

  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} : ${d}`);
  
}