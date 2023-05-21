let arr = [45, 23, 21];
// console.log(arr);

// map method 💥
//creates a new arr by performing some operation on each arr element

let b = arr.map((val, index, arr) => {
  console.log(val, index, arr);
  return val + index;
});
console.log(b);

console.log(arr);

// filter method 💥
//filters an arr with vLUES that passesa test and create new array

let arr2 = [45, 23, 21, 0, 3, 5];
let a = arr2.filter((value) => {
  return value < 10;
});

console.log(a);

// reduce method 💥
// gives a single value as result by adding all elements in an array

let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((val1, val2) => {
  return val1 + val2;
});
console.log(newarr3);

console.log(arr3);
