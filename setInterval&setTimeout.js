// setTimeout (allows us to run function only once after the interval of time)
// clearTimeout (allows us to run function repeateadly after the interval of time)


//settimeout
// function greet() {
//     console.log("hello good morning ");
// }
//  greet();
//  setTimeout(greet , 5000);

//settimeout
 let name = "devi";
function greet(name) {
    console.log("hello good morning " + name);
}
 greet(name);
 setTimeout(greet , 5000 , name);

//timeout
 timeOut = setTimeout(greet , 5000 , name)

console.log(timeOut);

clearTimeout(timeOut);

//setinterval
//setInterval(greet , 1000 , name);

//setinterval to clear
 intervalId = setInterval(greet , 1000 , name);
 clearInterval(intervalId);