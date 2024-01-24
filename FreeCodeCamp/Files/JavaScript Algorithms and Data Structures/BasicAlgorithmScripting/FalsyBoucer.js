function bouncer(arr) 
{  
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
  {    
     if (arr[i]) newArr = [...newArr, arr[i]];
  }
  return newArr;
}


console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));//["a", "b", "c"]
console.log(bouncer([false,1, null, 0, NaN, undefined, ""]));//[]
console.log(bouncer([null, NaN, 1, 2, undefined]));//[1, 2]