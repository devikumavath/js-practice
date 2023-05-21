// sum of odd and even number as per input given
// change n value to see differt output 
// example let n= 8 

let n=9,sum=0;
if (n%2==0) {
    for (let index = 0; index <= n; index=index+2) {
        
        sum=sum+index;
        
     }
     console.log(`sum of even number ${n} is ${sum}`);
} else {
    
    for (let index = 0; index <= n; index=index+2) {
        
        sum=sum+index;
        
     }
     console.log(`sum of odd number ${n} is ${sum}`);
}