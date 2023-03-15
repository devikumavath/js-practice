// program to find sum of digits
// change value of 'num' to experiment with output

let num = 786,
  sum = 0;
let realnum = num;

while (num > 0) {
  rem = num % 10;
  sum = sum + rem;
  num = parseInt(num / 10);
}
console.log(`sum of given ${realnum} is ${sum}`);
