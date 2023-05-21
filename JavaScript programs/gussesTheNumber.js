let x = Math.floor(Math.random() * 100 + 1);
console.log(x);
let num;
let score = 0;

do {
  num = Number.parseInt(console.log("guess the number"));

  if (num > x) {
    console.log(`${num} is greater than random number`);
  } else if (num < x) {
    console.log(`${num} is smaller than random number`);
  } else if (num == x) {
    console.log("you win the match");
  }
  score += 1;
} while (num != x);

console.log("time took to play the game: ", score);
console.log(`your score is ${100 - score}`);
