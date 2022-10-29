//  for ,foreach , for of loop examples

// for loop
let friends = ["devi", "pooja", "srujana", "mohini", "akhila", "anusha"];
console.log("using for loop");
for (let index = 0; index < friends.length; index++) {
  console.log(friends[index]);
}

// for each loop
let friends1 = ["devi", "pooja", "srujana", "mohini", "akhila", "anusha"];
console.log("using for each loop");
friends1.forEach(element =>  {
    console.log(element);
});

//for of loop
let friends2 = ["devi", "pooja", "srujana", "mohini", "akhila", "anusha"];
console.log("using for  of loop");
for (element of friends2) {
    console.log(element);
}


