// async function demo() {
//     return 5
// }

// console.log(demo());

// console.log(demo);


// demo().then((x) => {
//     console.log(x);
// })

// demo().then((value) => {
//     console.log(value);
// })



async function weather(){
let w1 = new Promise((reslove , reject ) => {

    setTimeout(() => {
        reslove('27 deg')
    }, 1000);
})


let w2 = new Promise((reslove , reject ) => {

    setTimeout(() => {
        reslove('21 deg')
    }, 3000);
})


// w1.then((value) => {
//     console.log(value);
// })


// w2.then((value) => {
//     console.log(value);
// })

let w11 = await w1
let w22 = await w2

return [w11 , w22]
}


console.log('welcome to weather control room');

let a = weather()
a.then((Value)=> {
    console.log(Value);
})

console.log(a);