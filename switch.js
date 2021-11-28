// swtich statement is like else..if 
// change fruitprice and run the code to see price of differnt fruit everytime 
//default case will execute when the fruit is not listed in case key
let fruitprice = 'kiwi';
switch (fruitprice) {
  case "mango":
    console.log("price of mango is 170rs kg");
    break;

  case "apple":
    console.log("price of apple is 366rs kg");
    break;

  case "pineapple":
    console.log("price of pineapple is 69rs kg");
    break;

  case "kiwi":
    console.log("price of kiwi is 550rs kg");
    break;

  case "orange":
    console.log("price of orange is 200rs kg");
    break;

  case "grapes":
    console.log("price of grapes is 70rs kg");
    break;

  default:
    console.log(` ${fruitprice} is not avaiable today come 2mro`);
    break;
}
