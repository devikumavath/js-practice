// calculation of tax of salary
// o to 2.5lk ---->nil
// 2.5lk to 5lk ---->5%
// 5lk to 7.5lk ---->10%
// 7.5lk to 10lk --->15%

let sal = 360000,
  tax;

if (sal <= 250000) {
  console.log("annual salary is " + sal + " and tax is" + " " + tax);
} else if (sal > 250000 && sal <= 500000) {
  tax = (sal * 5) / 100;
  console.log("annual salary is " + sal + " and tax is" + " " + tax);
} else if (sal > 500000 && sal <= 750000) {
  tax = (sal * 10) / 100;
  console.log("annual salary is " + sal + " and tax is" + " " + tax);
} else {
  tax = (sal * 15) / 100;
  console.log("annual salary is " + sal + " and tax is" + " " + tax);
}
