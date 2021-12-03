// program to reverse the given number
// change value of 'num' to experiment with output 

let num = 123, rem;

while (num>0) {

rem =  num%10;
console.log(rem);
num = parseInt(num/10);
    
}