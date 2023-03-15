//  two ways to find factorail of numbers 
// change num value to find factorail of differnt numbers
// 1st way  post increment

let num1 = 5,fact1 = 1;
for (let i = 1; i <= num1; i++) {
  fact1 = fact1*i;
}
console.log(`factorial of ${num1} using 1st way`)
console.log(fact1);


// 2nd way post decrement

let num2 = 4,fact = 1;
for (let j = num2 ; j >= 1 ; j--) {
  fact = fact*j;
}
console.log(`factorial of ${num2} using 2nd way`)
console.log(fact);
