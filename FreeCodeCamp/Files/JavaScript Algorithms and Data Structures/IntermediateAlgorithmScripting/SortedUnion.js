function uniteUnique(...arr) {
  const arrays = [...arr];
  let newArr = [];
  for (let i = 0; i < arrays.length; i++)
  {
    for (let j = 0; j < arrays[i].length; j++)
    {
      let skip = 0;
      for (let k = 0; k < newArr.length; k++)
      {
        if (newArr[k] === arrays[i][j]) skip++;
      }
      if (skip === 0)newArr = [...newArr, arrays[i][j]];
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));