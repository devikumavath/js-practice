// datatypes 💥

/*
there are 7 primitives datatypes in JS
NULL
NUMBER
SYMBOL
STRING
BOOLEAN
BIGINT
UNDEFINE
*/

let a = null;
let b = 2345;
let c = true;
let d = BigInt(12355);
let e = 'devi';
let f = Symbol('i am symbol');
let g = undefined;

console.log(a , b, c , d , e , f , g);
console.log(typeof d);

let h;
console.log(typeof h);



/*
non-primitives
OBJECTS - key-value pairs 
 */


//object in js
const item = {

    "devi" : true ,
    "chenna" : false ,
    "lovish" : 567,
    "rohan" : undefined
}

console.log(item);
console.log(item["devi"]);
console.log(item["sjdf,g"]);


