let a =10;
let b =20;

// arithmetic operators
console.log("addition of a and b is " + (a+b));
console.log("subtraction of a and b is " + (a-b));
console.log("mutlipication of a and b is " + (a*b));
console.log("division of a and b is " + (a/b));
console.log("modulo of a and b is " + (a%b));

// unary operators
console.log("pre increment  " + (++a));
console.log("pre decrement  " + (--a));
console.log("post increment  " + (a++));
console.log("post decrement  " + (a--));

// comparison operators
console.log("a is equal to b ?" +  " " +  (a==b));
console.log("a identical to b ?" + " " + (a===b));
console.log("is a not equal to b ?" + " " +  (a!=b));
console.log("is a greater than b ?" + " " +  (a>b));
console.log("is a less than b ?" + " " +  (a<b));
console.log("is a greater than or equal to b ?" + " " +  (a>=b));
console.log("is a less than or equal to b ?" + " " +  (a>=b));

// logical operators
console.log("logical AND of a and b ? " + " " +  ((a==20) && (b==20)));
console.log("logical OR of a and b ? " + " " +  ((a==20) || (b==5)));
console.log("logical not of a and b ? " + " " +  (!(a==20)));

// assigment operators
console.log(a+= a);
console.log(a =+a);
console.log(b =-a);

// specail operators
// console.log(a , b);
a !== b ? console.log("a is equal to b") : console.log("a is not equal to b");

console.log(typeof a);

