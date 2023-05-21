// Q1)  create an array of numbers and take input from the user to add numbers to this array 🔍

let arr = [1, 2, 3, 4, 5, 83];
// let a = prompt("enter a number");
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr);

// Q2  keep adding numbers to  the array 1 until 0 is addded to the array 🔍
//let a;
//do {
//  a = prompt("enter a number");
// a = Number.parseInt(a);
// arr.push(a)
//} while (a != 0);
// console.log(arr);

//3Q)  filter for numbers divisible by 10 from a given array 🔍
let div = [12, 15, 10, 20, 40, 12, 45, 56, 100];

let newdiv = div.filter((val) => {
  return val % 10 == 0;
});

console.log(newdiv);


//4Q) create an array of square of given arr 🔍
let sq  = [2 , 6 , 3 , 2 , 13 , 12 ];
sq.forEach( (val , ind , arr)=> {
    console.log(val*val , ind , arr);
});


// 5Q ) use reduce to calculate factorial of a given number from an  array of first n natural numbers 
let n = [ 1 , 2 , 3 , 4 , 5 ];

let m = n.reduce((x1 , x2 ) => {
 return x1*x2;
 
});
console.log(m);