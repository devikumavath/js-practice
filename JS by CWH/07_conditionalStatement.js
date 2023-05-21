// let age = "45";
// age = Number.parseInt(age);
// console.log(typeof age);

console.log("conditional statement : ");

console.log("if statement:");
let age = 23;
console.log("age =", age);
if (age > 18) {
  console.log("you can vote!!!");
}

console.log("if esle statement:");
let marks = 19;
console.log("marks =", marks);
if (marks > 27) {
  console.log("you are pass");
} else {
  console.log("you are fail");
}

console.log("else if statement:");
let range = 122;
console.log("range =", range);

if (range >= 1 && range <= 25) {
  console.log("number range is in between 1-25");
} else if (range >= 26 && range <= 50) {
  console.log("number range is in between 26-50");
} else if (range >= 51 && range <= 75) {
  console.log("number range is in between 51-75");
} else if (range >= 76 && range <= 100) {
  console.log("number range is in between 76-100");
} else {
  console.log("invlid number range");
}

//switch
let names = "deviii";
switch (names) {
  case "devi":
    console.log("you are name :", names);
    break;

  case "chenna":
    console.log("you are name :", names);
    break;

  case "pooja":
    console.log("you are name :", names);
    break;

  case "shiva":
    console.log("you are name :", names);
    break;

  default:
    console.log("you are is not list");
    break;
}

// terny operators
let x = 12;
console.log("you ", x < 18 ? "cant drive" : "can drive");
