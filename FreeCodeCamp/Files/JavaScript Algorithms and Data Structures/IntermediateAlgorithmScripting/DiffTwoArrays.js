function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++)
  {
    let pass = 0;
    for (let j = 0; j < arr2.length; j++)
    {
      if (arr1[i] === arr2[j]) pass++;
    }
    if (pass === 0) newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++)
  {
    let pass = 0;
    for (let j = 0; j < arr1.length; j++)
    {
      if (arr2[i] === arr1[j]) pass++; 
    }
    if (pass === 0) newArr.push(arr2[i]);
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));