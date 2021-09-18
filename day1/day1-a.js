// Count a given word from paragraph

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
function countWords(para, word1, word2){

    //word count
    let countWord1= para.split(word1).length-1;
    let countWord2= para.split(word2).length-1;

    // conditional rendering
    if(countWord1===countWord2){
        return `The word ${word1} and ${word2} both are Equally occured.`;
    }else if(countWord1>countWord2){
        return `The word ${word1} more frequently occurred than ${word2}.`;
    }else{
        return `The word ${word2} more frequently occurred than ${word1}.`;
    }   

}

console.log(countWords(paragraph,'love', 'you'));
