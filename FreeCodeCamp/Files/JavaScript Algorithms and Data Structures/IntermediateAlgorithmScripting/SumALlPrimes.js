function sumPrimes(num) 
{

  let sum = 2;
  if (num === 2) return sum;
  if (num < 2) return "error";
  for (let i = 3; i <= num; i++)
  {
    let notPrime = 0, y = 2;
    function checkPrime(i)
    {
      let math = i / y;
      if (notPrime === 1) return false;
      if (y === i) return true;
      y++;      
      if (math % 1 === 0) notPrime++;
      return checkPrime(i);
    }
    if (checkPrime(i)) sum += i;
  }
return sum;

}

console.log(sumPrimes(4888));
console.log(sumPrimes(977));