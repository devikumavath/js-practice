// program to find perfect number
// perfect number means  given number and divisble of that less than number should same
//  n = 6 ----> 1 2 3 4 5 (1 , 2 ,3 is divisble by 6)  
// n = 6 is equal (1+2+3 = 6)
let n = 28,
  sum = 0;

for (let i = 0; i < n; i++) {
  if (n % i == 0) {
    sum = sum + i;
  }
}

if (n == sum) {
  console.log(`${n} is perfect number `);
} else {
  console.log(`${n} is  not perfect number. `);
}
