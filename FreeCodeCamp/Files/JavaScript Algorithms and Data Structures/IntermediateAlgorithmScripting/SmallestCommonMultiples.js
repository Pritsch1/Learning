function smallestCommons(arr) {
  const a = arr[0], b = arr[1], c = a*b, ordArr = a < b ? [a, b] : [b, a];
  let f = 1;
  for (let i = 1;; i++)
  {
    let skip = 0;
    for (let j = ordArr[0]; j <= ordArr[1]; j++)
    {
      const math = c*f / j;
      if (math % 1 !== 0)
      {
        f++;
        skip++;
      }       
    }
    if (skip === 0) return c*f;
  }
}

console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));