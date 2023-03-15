let myvar = "34";
console.log(typeof myvar);

let myvar1 = 34;
console.log(typeof myvar1);

//arrays
let names = [11, 22, 3, 4, 1, "devi"];
console.log(names);

console.log(names[4]);

// length of array
console.log(names.length);

// sorting of array
console.log(names.sort());

// to push  new element in array at the end
names.push("this is pushed");
console.log(names);

//creating array using new keyword
let name = new Array(1, 3, 4, 7, "devi", "true");
console.log(name);

// empty array declared
let empty = new Array(23);
console.log(empty);

// array literals
let flowers = ["rose", "jasmine", "lotus", "marigold"];
for (let index = 0; index < flowers.length; index++) {
  console.log(flowers[index]);
}

// new keyword
let marks = new Array();
marks[0] = 55;
marks[1] = 99;
marks[2] = 89;
for (let index = 0; index < marks.length; index++) {
  console.log(marks[index]);
}

// array constructor (new keyword)
let age = new Array(19, 23, 25, 99);
for (let index = 0; index < age.length; index++) {
  console.log(age[index]);
}

// replace of array element
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);


