// Print traingle
function sevenRandomNumber() {
  let arrayOfSevenNum = [];
  for (let i = 0; i < 7; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    arrayOfSevenNum.push(randomNum);
  }

  return arrayOfSevenNum;
}

console.log(sevenRandomNumber());
