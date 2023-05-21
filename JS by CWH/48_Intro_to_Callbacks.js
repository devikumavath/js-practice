// flow of the js prgrams

// synchronous(blocking) - program executes line by line (sequentially)

// Asynchronous(non blocking) -  prgram executes concurrently  (parallely)

// callbacks - a callback is a function as an arguments to another function (async flow of the code)

// function oddOrEven(number , callback) {
//     const result = (number%2==0) ? 'Even' : 'Odd';
//     callback(number , result);
// }

// oddOrEven(28 , (number , result) => {
//     console.log(` ${number} is ${result}`);
// })

// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("i love you ❤ ");
// }

// console.log("hello world");

function display(sum) {
  console.log(`sum: ${sum}`);
}

function add(num1, num2, mycallback) {
  const sum = num1 + num2;

  mycallback(sum);
}

add(10, 20, display);

// setInterval(() => {
//     console.log('hello ');
// }, 1000);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();

  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}
