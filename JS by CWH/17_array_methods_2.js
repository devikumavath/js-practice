let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num);

// let num_more = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19];

// let num_even_more = [115 , 132 , 113 , 314 ,115 , 163 , 172 , 181 , 119];

// delete 💥
// it will deleted ele but array of size will be same

// delete num[0];
// console.log(num , num.length);

// concat  💥
//return new array

// let newArr = num.concat(num_more , num_even_more);
// console.log(newArr);

// sort  💥
// sort alphabetically & will modify array

// let compare = ( a ,b ) => {
// return b-a;
// }

// let x = [34 , 1 , 67 , 89 , 12 , 456 , 12];

// increase order
// x.sort();
// console.log(x);

// decreasing order
// x.sort(compare);
// console.log(x);

// reverse 💥
// num.reverse();
// console.log(num);

// splice and slice  💥
//splice(start , number , numbers ) , modifed array

let x = [34, 1, 67, 89, 12, 456, 12];
// x.splice(2 , 3 , 1021 , 1023 , 1234 , 12345 );
// console.log(x);

//slice (start , end) , create new array
let newarr = x.slice(3, 5);
console.log(newarr);
