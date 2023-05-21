// checks given year is leap year or not 
// change y value to see differnt  result
let y = 2016;

if (y%100==0 && y%400==0 || y%100!=0 && y%4==0) {
    console.log(`${y} is a leap year`);
} else {
   console.log(`${y} is not a leap year`); 
}