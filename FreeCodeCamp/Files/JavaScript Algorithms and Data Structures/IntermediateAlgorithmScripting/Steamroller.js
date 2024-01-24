function steamrollArray(arr) 
{
  let newArr = [];
  function dig(arr)
  {
    for (let i = 0; i < arr.length; i++)
    {
      let skip = 0;
      for (let j = 0; j < newArr.length; j++)
      {
        if (arr[i] === newArr[j]) ++skip;
      }
      if (Array.isArray(arr[i])) dig(arr[i]);
      if (skip === 0 && !Array.isArray(arr[i])) newArr = [...newArr, arr[i]];      
    }
  }
  dig(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);