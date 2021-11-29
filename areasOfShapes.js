/* area of rectangle 
 formula l*b=area of rectanlge */

 let l = 10 , b = 6;
 console.log(`area of the rectangle is ${l*b}`); 


/*area of circle 
 formula  PI*r*r = area of circle 
 where PI = 3.14 */

const PI = 3.14;
let r = 2;
area = PI*r*r;
console.log(`area of the circle is ${area}`);

/* area of square
formula side*side = area of square
 */

let side = 4;
square = side*side;
console.log(`area of square is ${square}`);


/* area of triangle 
input side1 , side2 , side3
then
find
sp(semi perimeter) =  (side1+side2+side3)/2;
area A = Math.sqrt(sp*(sp-side1)*(sp-side2)*(sp-side3))

*/

let side1 = 12,
    side2 = 16,
    side3 = 20;

    sp = (side1+side2+side3)/2;
    triangle =   Math.sqrt(sp*(sp-side1)*(sp-side2)*(sp-side3));
    console.log(`area of the trianlge ${triangle}`);

