// greatest of 3 numbers 
// change value  of a , b ,c  to run each case of nested elseif 

let a = 30;
let b = 450;
let c = 86;
if ( a>b && a>c) {
  console.log(`${a} is greatest number among ${a} , ${b} and ${c}`);
}
else if(b>c)
{
  console.log(`${b} is greatest number among ${a} , ${b} and ${c}`);

}


else {
  console.log(`${c} is greatest number among ${a} , ${b} and ${c}`);
}