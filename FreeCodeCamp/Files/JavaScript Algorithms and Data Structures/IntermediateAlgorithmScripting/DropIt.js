function dropElements(arr, func) {
  let newArr = [], skip = 1;
  for (let i = 0; i < arr.length; i++)
  {
    if(func(arr[i])) skip = 0;
    if (skip === 0) newArr = [...newArr, arr[i]];
  }
  return newArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));//[3, 4]./
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));//[1, 0, 1]./
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));//[1, 2, 3]./
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));//[]./
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));//[7, 4]./
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));//[3, 9, 2]