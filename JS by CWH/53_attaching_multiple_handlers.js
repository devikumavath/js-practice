let p1 = new Promise((reslove  , reject ) => {

    console.log('hey i am not resloved');
    setTimeout(() => {

        reslove(1);
        
    }, 2000);
})

p1.then(() => {
    console.log('this promise is now resloved');
})


p1.then(()=> {
    console.log('hurray')
})