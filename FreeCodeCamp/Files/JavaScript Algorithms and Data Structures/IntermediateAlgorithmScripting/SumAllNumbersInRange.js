function sumAll(arr) 
{
  let sum = arr[0]+arr[1];
  const smaller = arr[0] < arr[1] ? arr[0] : arr[1];
  const bigger = arr[0] > arr[1] ? arr[0] : arr[1];
  for (let i = smaller+1; i < bigger; i++) sum += i; 
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));