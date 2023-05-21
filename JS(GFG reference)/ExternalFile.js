// const demo = document.getElementById("demo").innerHTML="this message is displayed by using external js file";

function myfun() {

const num1 = parseInt(document.getElementById("1").value);
console.log(num1);

const num2 = parseInt(document.getElementById("2").value);
console.log(num2);
 
 const sum =  (num1)+(num2);
 console.log(sum);

 document.getElementById("sum").innerHTML = sum;
}
