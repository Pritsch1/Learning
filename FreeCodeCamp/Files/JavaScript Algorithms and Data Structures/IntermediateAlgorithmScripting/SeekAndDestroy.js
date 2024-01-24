function destroyer(arr, ...args) {
  const arg = [...args];
  let newArr = [];
  for (let i = 0, skip = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arg.length; j++)
    {
      if (arr[i] === arg[j]) skip++;
    }
  if (skip === 0) newArr = [...newArr, arr[i]]; skip = 0;
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);