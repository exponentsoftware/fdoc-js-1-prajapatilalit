const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

function countWords(para) {
  let splitPara = para.split(" ");
  let reducePara = splitPara.reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
      prev.push(curr);
    }
    return prev;
  }, []);
  let countLength = reducePara.filter((val) => val.length !== 1).length;
  return countLength;
}
console.log(countWords(sentence));
