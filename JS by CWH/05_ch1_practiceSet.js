// chapter 1 practice set 1

// 1Q🔍 create a variable of type string and try to add a number to it
let a = "devi";
let b = 6;
console.log(a + b);

//2Q🔍 use the typeof operator to find out tge datatype of the string of the last question
console.log(typeof (a + b));

//3Q🔍 create a const object in js . can you change it to hold a number later
const info = {
  name: "devi",
  section: 1,
  isPrincipal: false,
};
console.log(info);

//info = 45;
// info = "kumavath";
// error : assignment to constant variable

//4Q🔍  try to add a new key to the const object of Q3 . were you able to do it ?

info["friend"] = "pooja"; // add key in the object
console.log(info);

info["section"] = 2;
console.log(info);


//5Q🔍 write a js program to create a word-meaning dictionary of 5 words

const dict = {

    java : "a programming language" ,
    sql : "query language" ,
    api : "application programming interface" ,
    extension : "small block of code to add functionality to the websites" ,
    json : "data format type"

}

console.log(dict);
console.log(dict.json);
