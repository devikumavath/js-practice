//object
let student = {
  name: "devikumavath",
  section: "A",
  "branch 1": "cse",
};
console.log(student);
//to access specific key , value
console.log(student.section);
console.log(student.name);
// if key has space then this method is used
console.log(student["branch 1"]);
//to add new key in object
student.favsub = "html";
console.log(student);

//three way to create objects

//1st way (object literals)

let empolyee = {
  name: "devi kumavath",
  salary: 45000,
  department: "it",
};
console.log(empolyee);
console.log(empolyee.salary);

// 2nd way (instance object)
let std = new Object();

std.name = "devi";
std.roll_no = 34;
std.marks = 79;

console.log(std);
console.log(std.roll_no);

// 3rd way (object constructor )

function std1(name, rollNo, section) {
  this.name = name;
  this.rollNo = rollNo;
  this.section = section;
}
std1 = new std1("pooja", 34, "C");
console.log(std1);

// for in loop (for objects iterations)
let breakfast = {
  Option1: "puri",
  Option2: "dosa",
  option3: "idly",
  option4: "umpa",
};
for (key in breakfast) {
  console.log(breakfast[key]);
}
