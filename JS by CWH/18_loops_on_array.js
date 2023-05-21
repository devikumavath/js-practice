let num = [2, 3, 5, 6, 7, 89, 2];

// console.log(num);

console.log(num.length);

// for loop 💥

// for(let i = 0 ; i < num.length ; i++) {
//     console.log(num[i]);
// }

// foreach 💥

// num.forEach((element) => {
//   console.log(element * 10);
// });



// array.from 💥
// let name = 'devi';
// let arr = Array.from(name);
// console.log(arr);


// forof 💥
// for (const i of num) {
//     console.log(i);
// }


// for in 💥
for (const i in num) {
   console.log(i , num[i]);
}