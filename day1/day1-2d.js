function checkUniqueness(arrOne) {
  let reducePara = arrOne.reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
      prev.push(curr);
    }
    return prev;
  }, []);

  if (reducePara.length === arrOne.length) {
    return true;
  } else {
    return false;
  }
}

// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));
