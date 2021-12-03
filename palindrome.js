// checking given NO is palindrome or not 
//  palindrome means which reads the same from backward and forward 
// ex- 121 , 91019 , 1001 ...

let NUM = 10201;
let originalnum = NUM;
let reverse = 0;

while (NUM>0) {
    
    reverse = (reverse*10)+(NUM%10);
    NUM = parseInt(NUM/10);
}

if (originalnum == reverse) {
    console.log(`${originalnum} is a palindrome number`)
} else {
    console.log(`${originalnum} is not a palindrome number`) 
}