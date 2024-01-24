function sumFibs(num) {
  let fibArr = [0, 1];
  for (let i = 1; fibArr[i] <= num; i++)
  {
    fibArr = [...fibArr, fibArr[i] + fibArr[i-1]];
  }
  let sum = 0;
  for (let i = 0; i < fibArr.length-1; i++)
  {
    if (fibArr[i] % 2 !== 0) sum += fibArr[i];
  }
  return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(10));