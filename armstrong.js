// armstrong number or not
// input number  153  ---->  (1*1*1 +  5*5*5 +  3*3*3)
//  given num  should equal to sum of digit of cube (153 ===  (1*1*1 +  5*5*5 +  3*3*3))


let num = 371, arm=0 , rem;
let realnum = num;
while (num>0) {
   rem = num%10;
    arm = ((rem)*(rem)*(rem))+arm;
    num =parseInt(num/10);
}
if (realnum == arm ) {
    console.log(`${realnum} is a armstrong number`);
    
}
else
{
    console.log(`${realnum} is  not a armstrong number`);  
}
