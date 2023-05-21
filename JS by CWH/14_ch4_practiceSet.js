//  Q1 what will be the output of console.log("dev\"".length);

console.log("dev\"".length);

//Q2 explore includes ,  startwith and endwith fun in string
let names = "devi";
console.log(names.includes("d"));

console.log(names.startsWith("d"));

console.log(names.endsWith("s"));

//Q3 write a program to convert a string into lowercase
let frnd = "POOJA";
console.log(frnd.toLocaleLowerCase());

//Q4 extract the amount out of string : "please give me rs 1000"
let amt = "please give rs 1000";
console.log(amt.slice(15));

// Q5 try to change 4th char of a given string were you able to do it 
let fruit = "mongo";
console.log(fruit);
fruit[3] = "r"; // cant - strings inmutable 

console.log(fruit);
