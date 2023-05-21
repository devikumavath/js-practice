let p1 = new Promise((resolve, reject) => {
  // console.log('promise started');

  setTimeout(() => {
    console.log("resloved after two seconds");
    resolve(1);
  }, 2000);

  // console.log('promise end');
});

p1.then((value) => {
  console.log(value);

  let p2 = new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("promise 2 ");
      reslove(2);
    }, 4000);
  });

  return p2;
})
  .then((value) => {
    console.log(value);

    return 200;
  })
  .then((value) => {
    console.log(value);
  });
