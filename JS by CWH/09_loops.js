//loops in js
// loops are use to perform repeated actions

console.log("loops in javascript");
console.log(
  "for loop - loop a block of code no of times  \n for in - loops through the keys of an object \n for of - loops through the values of an object \n while - loops through based on a specific condtion \n do-while - while loop variant which runs atleast once"
);

console.log("for loop");
for (let index = 0; index < 5; index++) {
  console.log(index);
}

console.log("for in");
let obj = {
  devi: 79,
  ramu: 34,
  krishna: 56,
  shiv: 78,
  pooja: 56,
};

for (const key in obj) {
  //    console.log(key + " " + obj[key]);
  console.log(key);
}


// console.log("for of");
// for (const val of obj) {
//     console.log(val);
// }


console.log("while loop");
let n = 14 , i = 0;
while (i < n) {

    console.log(i);
    i++;
    
}


console.log("do while loop");
let j = 0 , m = -20 ; 
do {
 console.log(j); 
 j++;  

} while (j < m);