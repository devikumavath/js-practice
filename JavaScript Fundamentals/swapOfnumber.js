/* swaping of two number
using third variable temp  */

let x = 10,
    y = 20;
console.log(`before swaping x = ${x} and y = ${y}`);
    temp = x;
    x = y;
    y = temp;
    console.log(`after swaping x = ${x} and y = ${y}`);



/* swaping of two number WITHOUT
using third variable temp  */

let a = 30,
    b = 40;
console.log(`before swaping a = ${a} and b = ${b}`);
a = a+b;
b = a-b;
a = a-b;
console.log(`after swaping a = ${a} and b = ${b}`);

/*  using comma operator */
let X = 7,
    Y = 9;
    console.log(`before swaping X = ${X} and Y = ${Y}`);    

 [X , Y ]= [Y , X];
console.log(`after swaping X = ${X} and Y = ${Y}`);    
