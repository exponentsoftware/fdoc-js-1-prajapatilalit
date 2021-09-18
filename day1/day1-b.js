// Remove the special character in a paragraph.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(para){

    const lowerCase = para.toLowerCase();
    const upperCase = para.toUpperCase();

    let result="";
    for(let i=0;i<para.length;i++){
        if(lowerCase[i]!==upperCase[i]|| lowerCase[i].trim() === ""){
            result += para[i];
        }
    }

    //using regular expression
    // let result= para.replace(/[^a-zA-Z\s]/g,"")
    
    return `${result}`;
}

console.log(cleanText(sentence));