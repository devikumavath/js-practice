//Promise API Methods - 6 Important Method

let p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("value 1");
  },6000);
});

let p2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    // reslove("value 2");
    reject(new Error('error in p2'))
  }, 2000);
});

let p3 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("value 3");
  }, 3000);
});


// p1.then((value) => {
//     console.log(value)
// })


// p2.then((value) => {
//     console.log(value)
// })

// p3.then((value) => {
//     console.log(value)
// })


// Promise.all

// let promise_all  = Promise.all([p1 , p2 , p3])

// promise_all.then((value) => {
//     console.log(value);
// })


// Promise.settled

// let promise_all  = Promise.allSettled([p1 , p2 , p3])

// promise_all.then((value) => {
//     console.log(value);
// })


// promise.race

// let promise_all  = Promise.race([p1 , p2 , p3])

// promise_all.then((value) => {
//     console.log(value);
// })


// promise.any

let promise_all  = Promise.any([p1 , p2 , p3])

promise_all.then((value) => {
    console.log(value);
})