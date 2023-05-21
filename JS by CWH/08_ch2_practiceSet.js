// chapert 2 practice set 

//1Q use logical operators to find whether the age of a personlies between 10 and 20 ?
let age = 13;
if (age >=10 || age <=20) {
    console.log("your age lies in between 10-20");
}
else {
    console.log("your age  doesnt lies in between 10-20");
}

//2Q demonstrate the use of switch case statements in javascript
let fruits = "mongo";
switch (fruits) {

    case "mongo": console.log("your fav : " , fruits);
    break;

    case "papaya": console.log("your fav : " , fruits);
    break;

    case "apple": console.log("your fav : " , fruits);
    break;

    case "pineapple" : console.log("your fav : " , fruits);
    break;
        

    default: console.log("you fav fruits is not spl");
        break;
}

//3Q write a javascript program to find whether a number is divisibleby either 2 and 3

let num = 118;

if (num%2==0 && num%3==0) {
    console.log(`${num} is divisble by 2 and 3`);
} else {
    console.log(`${num} not divisble by 2 and 3`);
}


//4Q write a javascript program to find whether a number is divisibleby either 2 or 3

let num1 = 9;

if (num1%2==0 || num1%3==0) {
    console.log(`${num1} is divisble by 2 or 3`);
} 

//5Q print you can drive or you cannot drive based on age being greater than 18 using ternary operator
let ages = 19;
let a = ages>18 ?"you can drive" : "you cannot drive "
console.log(a);














