// prime number or not
// prime no means the number which is divisible by 1 and it self like--2,3,5,7,11...

let num = 11,
  count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not  a prime number`);
}
