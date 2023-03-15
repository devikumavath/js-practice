// prgogram to find digits in given number
// change value of 'n' to experiment with output 

let n = 100,
  count = 0;
let n1 = n;
while (n > 0) {
  n = parseInt(n / 10);
  count++;
}
console.log(`there are ${count} digits in ${n1}`);
