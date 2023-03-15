/*                                              functions                                               */

// program-1
// function declartion & parameters passing
function greeting(text) {
  console.log(text + " is a good girl");
}
let name1 = "devi";
let name2 = "pooja";
let name3 = "srujana";
//function call
greeting(name1);
greeting(name2);
greeting(name3);

//program-2
// defining the function
function sum(num1, num2) {
  return num1 + num2;
}
// calling the function
sum(2, 2);
console.log(sum(2, 2));

//program-3
// defining the function
function greetingmsg() {
  console.log("hello, good morning ");
}
//calling the function
greetingmsg();

//program-4
function getReminder() {
  console.log("Water the plants.");
}
getReminder();

//program-5
function greetInSpanish() {
  console.log("Buenas Tardes.");
}
greetInSpanish();

//program-6
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
//calling multiple times
sayThanks();
sayThanks();
sayThanks();

//program-7
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}
//with parameters
sayThanks("Cole");

//program-8
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

//program-9
function monitorCount(rows, columns) {
  return rows * columns;
}
//return value
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// program-10 (helper function)

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

//program-11
//function expression
const plantNeedsWater = function (day) {
  if (day == "Wednesday") {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Tuesday");
console.log(plantNeedsWater());

//program-12
//arrow functions
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
rectangleArea(3, 4);
console.log(rectangleArea(3, 4));

//program-13
const plantNeedsWater1 = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Wednesday"));

// program-14
const plantNeeds = (day) => (day === "Wednesday" ? true : false);
console.log(plantNeeds("Wednesday"));

//program-15
const squareNum = num => num * num;
console.log(squareNum(5));



