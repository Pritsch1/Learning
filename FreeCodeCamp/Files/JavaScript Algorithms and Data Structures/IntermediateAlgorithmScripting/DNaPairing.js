function pairElement(str) {
  const pairs = [["A","T"],["T","A"],["C","G"],["G","C"]];
  let newArr = [];
  for (let i = 0; i < str.length; i++)
  {
    for (let j = 0; j < pairs.length; j++)
    {
      if (str[i] === pairs[j][0]) newArr = [...newArr, [str[i], pairs[j][1]]];
    }    
  }
  return newArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"))//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]