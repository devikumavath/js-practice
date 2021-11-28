// two ways to convert char into ASCII value 


// frist method
// change the value( e , m f or a) of CHAR to see differnt ascii values 
let char = 'A';

console.log(char.charCodeAt('0')); 

// second  method
// change the value( e , m f or a) of TEXT to see differnt ascii values 
let text = 'a';
console.log(text.codePointAt(0));



// ascii value and statement on terminal using backticks & +
console.log(`ascii value of ${char} is  ` + char.charCodeAt(0));

