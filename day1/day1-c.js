// count word length in the given sentence.

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

function countWords(para){
    
    let paralength = para.split(" ").length;
    return paralength;
}
console.log(countWords(sentence));

