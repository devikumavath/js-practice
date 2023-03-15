let a = 18,
  b = 2;
let operation = "*";

switch (operation) {
  case "+":
    console.log("addition of " + a + " and " +  b  + " is " + (a + b));
    break;

  case "-":
    console.log("subtraction of " +  a + " and " + b +  " is " + (a - b));
    break;

  case "*":
    console.log("multipication  of " + a  + " and " + b  + " is " + (a * b));
    break;

  case "/":
    console.log("division of " + a + " and " +  b  + " is " + (a/b));
    break;

  case "%":
    console.log("modulo of " + a + " and " +  b  + " is " + (a%b));
    break;

  default:
    console.log("invalid operator");
    break;
}
