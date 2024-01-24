function getIndexToIns(arr, num) 
{
  if (arr.length === 0) return 0;
  let newArr = sortArr(arr), x = newArr.length;
  for (let i = 0; i < x; i++)
  {    
    if (newArr[i] >= num)
    {
      /*newArr.splice(i, 0, num); //return the array + new element
      return newArr;*/
      return i;
    }
    else if (newArr[x-1] < num) return x;    
  }
}

function sortArr(arr)
{
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr.length; j++)
    {
      let a = arr[j], b = arr[j+1];
      if (arr[j] > arr[j+1])
      {
        arr[j] = b; arr[j+1] = a;
      }      
    }
  }
  return arr;
}
//console.log(getIndexToIns([40, 60], 50));
//console.log(getIndexToIns([5, 3, 20, 3], 5));
//console.log(sortArr([20, 10, 15, 50, 1, 5, 14, 51]));

console.log(getIndexToIns([2, 5, 10], 15));//3.
console.log(getIndexToIns([2, 5, 10], 15));//number.
console.log(getIndexToIns([], 1));//0.
console.log(getIndexToIns([], 1));//number.