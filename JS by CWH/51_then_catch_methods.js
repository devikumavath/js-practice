// const p1 = new Promise((reslove, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise and i am resloved");
//   }, 2000);

//   reslove("resloved p1");
// });

// const p2 = new Promise((reslove, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise and i am rejected");
//   }, 5000);

//   reject(new Error("i am an error"));
// });

// // console.log(p1 , p2);

// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("error in p2");
// });



const myPromise = new Promise((reslove, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);

  if (randomNumber % 2 == 0) {
    reslove(`even number : ${randomNumber}`);
  } else {
    reject(`odd number ${randomNumber}`);
  }
});

myPromise
  .then((value) => {
    console.log(`promise resloved with data 💚  -> ${value}`);
  })
  .catch((error) => {
    console.log(`promise rejected with data 💥 ->  ${error}`);
  });
