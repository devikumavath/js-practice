//Q1 write a program to print the marks of a student in an object using for loop
const marks = {
  devi: 78,
  chenna: 98,
  pooja: 45,
  srujana: 54,
  shiva: 56,
};

//for loop
for (let index = 0; index < Object.keys(marks).length; index++) {
  console.log(
    Object.keys(marks)[index] + " = " + marks[Object.keys(marks)[index]]
  );
}

//Q2  write the program in Q1 using for in loop

// for in
for (const key in marks) {
  console.log(key + " " + marks[key]);
}

// Q3 write a program to print "try again " unit the user enter the correct number

// let ctr = 4 ;
// let i
// while (i != ctr) {
//console.log("try again");
//   i = prompt("enter a Number");
// }
//console.log("you have entered correct number")

//Q4 write a function to find mean of 5 numbers

const mean = (a, b, c, d, e) => {
  return a + b + c + d + e / 5;
};

console.log(mean(1, 2, 3, 4, 15));
