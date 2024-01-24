function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    let tempArr = [];
    for (let j = 0; j < size; j++)
    {
      if (arr[i] !== undefined)
      {
      tempArr = [...tempArr, arr[i]];
      i++;
      }
    }
    i--;
    newArr = [...newArr, tempArr];
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));