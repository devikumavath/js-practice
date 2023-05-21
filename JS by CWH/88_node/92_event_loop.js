/*

what is js ? 

js is a single threaded , non blocking , asynchronous , concurrent language 
it has a call stack , an event loop and a callback queue + other APIs
V8 is the js runtine which has a call stack and a heap
the heap is used for memory allocation and the stack holds the execution context 
DOM , settimeout , xmlhttprequest dont exist in v8 source code 


what is asunchronous callacks ?

non blocking 






*/

console.log('Start');

// Asynchronous setTimeout function
setTimeout(() => {
  console.log('Timeout function executed');
}, 2000);

// Synchronous for loop
for (let i = 0; i < 3; i++) {
  console.log('Synchronous operation');
}

console.log('End');

