// Print traingle
function traingle(length) {
  let noOfLine = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      noOfLine += "#";
    }
    noOfLine += "\n";
  }
  return noOfLine;
}

console.log(traingle(7));
